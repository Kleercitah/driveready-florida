/**
 * Estado del sistema de audio (sin red, sin gasto).
 *
 * Uso: `npm run voices:status`
 * Muestra: configuración, preparación de voces, catálogo y qué audios existen.
 */
import { existsSync } from 'node:fs';
import { loadEnv, readConfig, describeLanguageReadiness } from './fishClient.js';
import { readManifest, indexEntries, resolveOutputPath } from './manifest.js';
import { buildCatalog, summarizeCatalog, ENTRY_KINDS } from './buildCatalog.js';

export function collectStatus({ config, manifest, catalog }) {
  const entriesById = indexEntries(manifest);
  const byLanguage = { en: {}, es: {} };
  const catalogSummary = summarizeCatalog(catalog);

  for (const language of ['en', 'es']) {
    const entries = catalog.filter((entry) => entry.language === language);
    let ready = 0;
    let missingFile = 0;
    let failed = 0;
    let stale = 0;

    for (const entry of entries) {
      const stored = entriesById.get(entry.id);
      const fileExists = stored ? existsSync(resolveOutputPath(entry.outputPath)) : false;
      if (!stored) continue;
      if (stored.status === 'failed') failed += 1;
      else if (stored.textHash !== entry.textHash) stale += 1;
      else if (stored.status === 'ready' && fileExists) ready += 1;
      else missingFile += 1;
    }

    byLanguage[language] = { total: entries.length, ready, pending: missingFile, failed, stale };
  }

  return { readiness: describeLanguageReadiness(config), catalogSummary, byLanguage, manifest };
}

export function runStatus({ config, log = console.log } = {}) {
  const manifest = readManifest();
  const catalog = buildCatalog({ config, existingEntries: indexEntries(manifest) });
  const status = collectStatus({ config, manifest, catalog });

  log('DriveReady Florida — Estado del sistema de audio');
  log('-----------------------------------------------');
  log(`Modelo                : ${config.model}`);
  log(`Formato               : ${config.format} (${config.mp3Bitrate} kbps, ${config.sampleRate} Hz)`);
  log(`API key (FISH_API_KEY): ${config.apiKey ? 'presente' : 'AUSENTE'}`);
  log(
    `Reference ID inglés   : ${status.readiness.en ? config.voiceEn : 'PENDIENTE (FISH_VOICE_EN_REFERENCE_ID)'}`
  );
  log(
    `Reference ID español  : ${status.readiness.es ? config.voiceEs : 'PENDIENTE (FISH_VOICE_ES_REFERENCE_ID)'}`
  );
  log('');
  log('CATÁLOGO');
  log(`  Narraciones totales : ${status.catalogSummary.total}`);
  log(`  Introducciones      : ${status.catalogSummary.byKind[ENTRY_KINDS.LESSON_INTRO] ?? 0}`);
  log(`  Secciones           : ${status.catalogSummary.byKind[ENTRY_KINDS.LESSON_SECTION] ?? 0}`);
  log(`  Señales             : ${status.catalogSummary.byKind[ENTRY_KINDS.SIGN] ?? 0}`);
  log('');
  log('AUDIOS GENERADOS (según manifiesto y disco)');
  for (const language of ['en', 'es']) {
    const s = status.byLanguage[language];
    log(
      `  ${language.toUpperCase()}: ${s.ready}/${s.total} listos · ` +
        `pendientes=${s.pending} · fallidos=${s.failed} · obsoletos=${s.stale}`
    );
  }

  const ready = status.byLanguage.en.ready + status.byLanguage.es.ready;
  const total = status.catalogSummary.total;
  log('');
  if (ready === 0) {
    log('Estado: SISTEMA PREPARADO (sin audios generados todavía).');
  } else if (ready < total) {
    log(`Estado: AUDIO PARCIAL (${ready}/${total} narraciones listas).`);
  } else {
    log('Estado: AUDIO COMPLETO (todas las narraciones listas).');
  }

  return status;
}

async function main() {
  loadEnv();
  runStatus({ config: readConfig(process.env) });
}

const isDirectRun =
  process.argv[1] && process.argv[1].replace(/\\/g, '/').endsWith('scripts/fish/status.js');
if (isDirectRun) {
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
}

export default { runStatus, collectStatus };
