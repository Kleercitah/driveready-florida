/**
 * Catálogo de narraciones.
 *
 * Extrae automáticamente TODO el contenido narrable que ya existe en la app
 * (lecciones, secciones y señales) en los dos idiomas de contenido ('en' | 'es').
 * No traduce: los textos españoles provienen de los campos `es` que ya existen
 * en los datos. Fish Audio se usa únicamente como sintetizador de voz.
 *
 * El catálogo es la fuente de verdad de los scripts de generación. Nunca
 * contiene credenciales: solo el Reference ID (que es un identificador público
 * del modelo de voz).
 */
import { lessons } from '../../src/data/lessons/index.js';
import { signs } from '../../src/data/signs/index.js';
import {
  loadEnv,
  readConfig,
  describeLanguageReadiness,
  referenceIdForLanguage
} from './fishClient.js';
import { normalizeText, joinNarration, byteLength, computeTextHash } from './textProcessing.js';

export const CATALOG_VERSION = 1;
export const SUPPORTED_LANGUAGES = ['en', 'es'];

/** Tipos de narración soportados. */
export const ENTRY_KINDS = {
  LESSON_INTRO: 'lesson-intro',
  LESSON_SECTION: 'lesson-section',
  SIGN: 'sign'
};

/**
 * Identificador estable de una entrada del catálogo.
 * Ejemplos: `lesson.right-of-way.intro.en`, `lesson.right-of-way.four-way-stops.en`,
 * `sign.stop.en`.
 */
export function catalogId({ kind, contentId, sectionId = null, language }) {
  if (kind === ENTRY_KINDS.SIGN) return `sign.${contentId}.${language}`;
  if (kind === ENTRY_KINDS.LESSON_INTRO) return `lesson.${contentId}.intro.${language}`;
  return `lesson.${contentId}.section.${sectionId}.${language}`;
}

/** Texto narrado de la introducción de una lección (título + resumen). */
export function lessonIntroText(lesson, language) {
  return joinNarration([lesson.title?.[language], lesson.summary?.[language]]);
}

/** Texto narrado de una sección (título + cuerpo). */
export function lessonSectionText(section, language) {
  return joinNarration([section.title?.[language], section.body?.[language]]);
}

/** Texto narrado de una señal (nombre + significado + uso). */
export function signText(sign, language) {
  return joinNarration([sign.name?.[language], sign.meaning?.[language], sign.usage?.[language]]);
}

function makeEntry({
  kind,
  contentId,
  sectionId = null,
  title,
  language,
  text,
  config,
  existing = null
}) {
  const referenceId = referenceIdForLanguage(config, language);
  const normalized = normalizeText(text);
  const id = catalogId({ kind, contentId, sectionId, language });
  const textHash = computeTextHash({
    text: normalized,
    language,
    model: config.model,
    referenceId
  });

  // Si el manifiesto ya tenía esta entrada con el mismo hash, conservamos su
  // estado (no se regenera). Solo se invalida cuando cambia texto, idioma,
  // modelo o Reference ID.
  const unchanged = existing && existing.textHash === textHash;
  const format = config.format;

  return {
    id,
    kind,
    contentId,
    sectionId,
    language,
    title: title ?? null,
    text: normalized,
    textHash,
    model: config.model,
    referenceId: referenceId || null,
    format,
    file: `${id}.${format}`,
    outputPath: `audio/${id}.${format}`,
    byteSize: unchanged ? existing.byteSize ?? 0 : 0,
    status: unchanged ? existing.status ?? 'pending' : 'pending',
    generatedAt: unchanged ? existing.generatedAt ?? null : null
  };
}

/**
 * Construye el catálogo completo.
 * @param {{ config?: object, existingEntries?: Map<string, object> }} options
 */
export function buildCatalog({ config, existingEntries } = {}) {
  const cfg = config ?? readConfig(process.env);
  const existing = existingEntries ?? new Map();
  const entries = [];

  for (const language of SUPPORTED_LANGUAGES) {
    for (const lesson of lessons) {
      const introId = catalogId({
        kind: ENTRY_KINDS.LESSON_INTRO,
        contentId: lesson.id,
        language
      });
      entries.push(
        makeEntry({
          kind: ENTRY_KINDS.LESSON_INTRO,
          contentId: lesson.id,
          title: lesson.title?.[language] ?? lesson.title?.en ?? lesson.id,
          language,
          text: lessonIntroText(lesson, language),
          config: cfg,
          existing: existing.get(introId)
        })
      );

      for (const section of lesson.sections ?? []) {
        const sectionEntryId = catalogId({
          kind: ENTRY_KINDS.LESSON_SECTION,
          contentId: lesson.id,
          sectionId: section.id,
          language
        });
        entries.push(
          makeEntry({
            kind: ENTRY_KINDS.LESSON_SECTION,
            contentId: lesson.id,
            sectionId: section.id,
            title: section.title?.[language] ?? section.title?.en ?? section.id,
            language,
            text: lessonSectionText(section, language),
            config: cfg,
            existing: existing.get(sectionEntryId)
          })
        );
      }
    }

    for (const sign of signs) {
      const signEntryId = catalogId({
        kind: ENTRY_KINDS.SIGN,
        contentId: sign.id,
        language
      });
      entries.push(
        makeEntry({
          kind: ENTRY_KINDS.SIGN,
          contentId: sign.id,
          title: sign.name?.[language] ?? sign.name?.en ?? sign.id,
          language,
          text: signText(sign, language),
          config: cfg,
          existing: existing.get(signEntryId)
        })
      );
    }
  }

  return entries;
}

/** Resumen del catálogo: totales por tipo e idioma y bytes de entrada. */
export function summarizeCatalog(entries) {
  const byLanguage = { en: 0, es: 0 };
  const byKind = {};
  let totalBytes = 0;
  const oversized = [];

  for (const entry of entries) {
    byLanguage[entry.language] = (byLanguage[entry.language] ?? 0) + 1;
    byKind[entry.kind] = (byKind[entry.kind] ?? 0) + 1;
    const bytes = byteLength(entry.text);
    entry.inputBytes = bytes;
    totalBytes += bytes;
  }

  return { total: entries.length, byLanguage, byKind, totalBytes, oversized };
}

/** Ejecución directa: `npm run voices:catalog`. */
async function main() {
  loadEnv();
  const config = readConfig(process.env);
  const readiness = describeLanguageReadiness(config);
  const entries = buildCatalog({ config });
  const summary = summarizeCatalog(entries);

  console.log('DriveReady Florida — Catálogo de narraciones');
  console.log('-------------------------------------------');
  console.log(`Versión del catálogo : ${CATALOG_VERSION}`);
  console.log(`Modelo configurado   : ${config.model}`);
  console.log(`Formato              : ${config.format} (${config.mp3Bitrate} kbps, ${config.sampleRate} Hz)`);
  console.log(`Idioma EN (Reference): ${readiness.en ? 'configurado' : 'PENDIENTE'}`);
  console.log(`Idioma ES (Reference): ${readiness.es ? 'configurado' : 'PENDIENTE'}`);
  console.log('');
  console.log(`Total de narraciones : ${summary.total}`);
  console.log(`  Inglés (en)        : ${summary.byLanguage.en}`);
  console.log(`  Español (es)       : ${summary.byLanguage.es}`);
  console.log(`  Introducciones     : ${summary.byKind[ENTRY_KINDS.LESSON_INTRO] ?? 0}`);
  console.log(`  Secciones          : ${summary.byKind[ENTRY_KINDS.LESSON_SECTION] ?? 0}`);
  console.log(`  Señales            : ${summary.byKind[ENTRY_KINDS.SIGN] ?? 0}`);
  console.log(`Bytes de entrada    : ${summary.totalBytes.toLocaleString('es-ES')}`);

  const longest = entries
    .slice()
    .sort((a, b) => byteLength(b.text) - byteLength(a.text))
    .slice(0, 5);
  console.log('');
  console.log('Narraciones más largas (bytes de entrada):');
  longest.forEach((entry) => {
    console.log(`  ${String(byteLength(entry.text)).padStart(6)}  ${entry.id}`);
  });
}

const isDirectRun = process.argv[1] && process.argv[1].replace(/\\/g, '/').endsWith('scripts/fish/buildCatalog.js');
if (isDirectRun) {
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
}

export default { buildCatalog, summarizeCatalog, catalogId };
