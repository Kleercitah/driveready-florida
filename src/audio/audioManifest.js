/**
 * Acceso al manifiesto de audio desde el navegador.
 *
 * El navegador SOLO lee este archivo JSON estático y los MP3 publicados.
 * Nunca llama a Fish Audio ni conoce credenciales: el manifiesto es el único
 * contrato entre los scripts de generación (locales) y la web.
 */
import { audioConfig } from '../config/audioConfig.js';

/** Tipos de narración (deben coincidir con scripts/fish/buildCatalog.js). */
export const AUDIO_KINDS = {
  LESSON_INTRO: 'lesson-intro',
  LESSON_SECTION: 'lesson-section',
  SIGN: 'sign'
};

let cache = null;
let pending = null;

function baseUrl() {
  const base = typeof import.meta !== 'undefined' && import.meta.env ? import.meta.env.BASE_URL : './';
  return base || './';
}

/** URL absoluta/relativa del manifiesto (respeta el base path de GitHub Pages). */
export function manifestUrl() {
  return `${baseUrl()}${audioConfig.manifestPath}`;
}

/** Identificador estable de una narración. Debe coincidir con el catálogo. */
export function entryId({ kind, contentId, sectionId = null, language }) {
  if (kind === AUDIO_KINDS.SIGN) return `sign.${contentId}.${language}`;
  if (kind === AUDIO_KINDS.LESSON_INTRO) return `lesson.${contentId}.intro.${language}`;
  return `lesson.${contentId}.section.${sectionId}.${language}`;
}

function normalize(data) {
  const entries = Array.isArray(data?.entries) ? data.entries : [];
  const byId = new Map();
  entries.forEach((entry) => {
    if (entry && typeof entry.id === 'string') byId.set(entry.id, entry);
  });
  return {
    version: data?.version ?? 1,
    generatedAt: data?.generatedAt ?? null,
    model: data?.model ?? null,
    references: data?.references ?? { en: null, es: null },
    byId
  };
}

/** Manifiesto vacío: la app funciona aunque no exista ningún MP3. */
export function emptyAudioManifest() {
  return normalize(null);
}

/**
 * Carga el manifiesto (con caché en memoria). Si falla, devuelve uno vacío
 * para que la interfaz siga funcionando sin narración.
 */
export async function loadAudioManifest({ fetchImpl = fetch, force = false } = {}) {
  if (cache && !force) return cache;
  if (pending && !force) return pending;

  pending = (async () => {
    try {
      const response = await fetchImpl(manifestUrl());
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const data = await response.json();
      cache = normalize(data);
    } catch {
      cache = normalize(null);
    }
    pending = null;
    return cache;
  })();

  return pending;
}

/** Entrada lista para reproducir, o null si no existe / no está lista. */
export function getReadyEntry(manifest, id) {
  const entry = manifest?.byId?.get(id);
  if (!entry || entry.status !== 'ready') return null;
  return entry;
}

/** Indica si hay audio disponible para un id concreto. */
export function hasAudio(manifest, id) {
  return Boolean(getReadyEntry(manifest, id));
}

/** URL del MP3 de una entrada, respetando el base path. */
export function resolveAudioUrl(entry) {
  if (!entry) return null;
  const path = entry.outputPath ?? `${audioConfig.audioBasePath}/${entry.file}`;
  return `${baseUrl()}${path}`;
}

/**
 * Devuelve el par de ids (en/es) de una narración y las lenguas disponibles.
 * @returns {{ ids: { en: string, es: string }, available: string[] }}
 */
export function languagePair({ kind, contentId, sectionId = null }, manifest = null) {
  const ids = {
    en: entryId({ kind, contentId, sectionId, language: 'en' }),
    es: entryId({ kind, contentId, sectionId, language: 'es' })
  };
  const available = manifest
    ? audioConfig.supportedLanguages.filter((language) => hasAudio(manifest, ids[language]))
    : [];
  return { ids, available };
}

/** Solo para pruebas: limpia la caché del manifiesto. */
export function __resetAudioManifestCache() {
  cache = null;
  pending = null;
}

export default {
  AUDIO_KINDS,
  manifestUrl,
  entryId,
  loadAudioManifest,
  emptyAudioManifest,
  getReadyEntry,
  hasAudio,
  resolveAudioUrl,
  languagePair
};
