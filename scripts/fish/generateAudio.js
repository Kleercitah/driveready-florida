/**
 * Generación local de narraciones con Fish Audio.
 *
 * Uso:
 *   npm run voices:generate -- --all --confirm
 *   npm run voices:generate -- --id lesson.right-of-way.intro.en --confirm
 *   npm run voices:generate -- --language en --limit 5 --confirm
 *   npm run voices:confirm  no existe: se usa --confirm o FISH_ALLOW_SPEND=1
 *
 * Seguridad: por defecto NO se llama a la API (modo plan). Para gastar créditos
 * hay que autorizarlo explícitamente con `--confirm` o `FISH_ALLOW_SPEND=1`.
 *
 * El navegador nunca ejecuta este archivo ni conoce la API key.
 */
import { writeFileSync, mkdirSync } from 'node:fs';
import { dirname } from 'node:path';
import {
  loadEnv,
  readConfig,
  describeLanguageReadiness,
  referenceIdForLanguage,
  synthesize,
  FishApiError
} from './fishClient.js';
import {
  readManifest,
  writeManifest,
  indexEntries,
  resolveOutputPath,
  MANIFEST_PATH
} from './manifest.js';
import { buildCatalog } from './buildCatalog.js';
import { createPlan, estimatePlan, checkLimits, formatCost } from './plan.js';
import { byteLength } from './textProcessing.js';

const MAX_ATTEMPTS = 3;
const RETRY_DELAY_MS = 1500;

/** Parser de argumentos simple: --clave valor | --bandera. */
export function parseArgs(argv) {
  const args = { _: [] };
  for (let i = 0; i < argv.length; i += 1) {
    const token = argv[i];
    if (!token.startsWith('--')) {
      args._.push(token);
      continue;
    }
    const key = token.slice(2);
    const next = argv[i + 1];
    if (next && !next.startsWith('--')) {
      args[key] = next;
      i += 1;
    } else {
      args[key] = true;
    }
  }
  return args;
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function persist(manifest, entriesById, id, patch) {
  const current = entriesById.get(id) ?? {};
  const next = { ...current, ...patch };
  entriesById.set(id, next);
  manifest.entries = Array.from(entriesById.values());
}

async function generateOne(entry, config, fetchImpl = fetch) {
  const referenceId = referenceIdForLanguage(config, entry.language);
  let lastError = null;

  for (let attempt = 1; attempt <= MAX_ATTEMPTS; attempt += 1) {
    try {
      const buffer = await synthesize(entry.text, { referenceId, config, fetchImpl });
      return buffer;
    } catch (error) {
      lastError = error;
      const retriable = !(error instanceof FishApiError) || error.status === 429 || error.status >= 500;
      if (!retriable || attempt === MAX_ATTEMPTS) break;
      await sleep(RETRY_DELAY_MS * attempt);
    }
  }
  throw lastError;
}

export async function runGeneration({
  options,
  config,
  fetchImpl = fetch,
  log = console.log,
  writeFile = writeFileSync
} = {}) {
  const manifest = readManifest();
  const entriesById = indexEntries(manifest);
  const catalog = buildCatalog({ config, existingEntries: entriesById });

  const plan = createPlan(catalog, options);
  const estimate = estimatePlan(plan.toGenerate, config);
  const limits = checkLimits(estimate, config);
  const readiness = describeLanguageReadiness(config);

  log('DriveReady Florida — Generación de narraciones');
  log('---------------------------------------------');
  log(`Modelo               : ${config.model}`);
  log(`Formato              : ${config.format} (${config.mp3Bitrate} kbps, ${config.sampleRate} Hz)`);
  log(`API key              : ${config.apiKey ? 'presente' : 'AUSENTE'}`);
  log(`Voz EN (Reference ID): ${readiness.en ? 'configurado' : 'PENDIENTE'}`);
  log(`Voz ES (Reference ID): ${readiness.es ? 'configurado' : 'PENDIENTE'}`);
  log('');
  log(`Seleccionadas        : ${plan.requested.length}`);
  log(`Ya listas (omitidas) : ${plan.skippedReady.length}`);
  log(`A generar            : ${plan.toGenerate.length}`);
  log(`Peticiones previstas : ${estimate.requests}`);
  log(`Bytes de entrada     : ${estimate.inputBytes.toLocaleString('es-ES')}`);
  log(`Costo estimado       : ${formatCost(estimate)}`);

  if (!limits.ok) {
    log('');
    log('DETENIDO: se superan los límites configurados:');
    limits.violations.forEach((violation) => log(`  - ${violation}`));
    return { ok: false, reason: 'limits', estimate, plan };
  }

  if (plan.toGenerate.length === 0) {
    log('');
    log('Nada que generar: todas las narraciones seleccionadas ya existen.');
    return { ok: true, generated: 0, failed: 0, plan, estimate };
  }

  const authorized = Boolean(options.confirm) || process.env.FISH_ALLOW_SPEND === '1';
  if (!authorized) {
    log('');
    log('MODO PLAN (no se ha llamado a la API).');
    log('Añade --confirm (o FISH_ALLOW_SPEND=1) para autorizar el gasto.');
    return { ok: true, dryRun: true, generated: 0, failed: 0, plan, estimate };
  }

  if (!config.apiKey) {
    log('');
    log('DETENIDO: falta FISH_API_KEY en .env.');
    return { ok: false, reason: 'no-api-key', plan, estimate };
  }

  let generated = 0;
  let failed = 0;
  const usedLanguages = new Set();

  for (const entry of plan.toGenerate) {
    const referenceId = referenceIdForLanguage(config, entry.language);
    if (!referenceId) {
      log(`  OMITIDA ${entry.id}: sin Reference ID para '${entry.language}'.`);
      persist(manifest, entriesById, entry.id, {
        ...entry,
        status: 'pending',
        error: `missing-reference-id:${entry.language}`
      });
      failed += 1;
      continue;
    }

    try {
      const buffer = await generateOne(entry, config, fetchImpl);
      const outputPath = resolveOutputPath(entry.outputPath);
      mkdirSync(dirname(outputPath), { recursive: true });
      writeFile(outputPath, buffer);

      persist(manifest, entriesById, entry.id, {
        ...entry,
        byteSize: buffer.length,
        inputBytes: byteLength(entry.text),
        status: 'ready',
        error: null,
        generatedAt: new Date().toISOString()
      });
      usedLanguages.add(entry.language);
      generated += 1;
      log(`  OK   ${entry.id} (${buffer.length} bytes)`);
    } catch (error) {
      persist(manifest, entriesById, entry.id, {
        ...entry,
        status: 'failed',
        error: error.message,
        generatedAt: null
      });
      failed += 1;
      log(`  FALLO ${entry.id}: ${error.message}`);
    }

    manifest.model = config.model;
    manifest.references = { en: config.voiceEn || null, es: config.voiceEs || null };
    writeManifest(manifest, MANIFEST_PATH);
  }

  if (usedLanguages.size > 0) {
    manifest.model = config.model;
    manifest.references = { en: config.voiceEn || null, es: config.voiceEs || null };
    writeManifest(manifest, MANIFEST_PATH);
  }

  log('');
  log(`Generadas: ${generated} · Fallidas: ${failed}`);
  log(`Manifiesto: ${MANIFEST_PATH}`);
  return { ok: failed === 0, generated, failed, plan, estimate };
}

async function main() {
  loadEnv();
  const args = parseArgs(process.argv.slice(2));
  const options = {
    id: typeof args.id === 'string' ? args.id : undefined,
    kind: typeof args.kind === 'string' ? args.kind : undefined,
    language: typeof args.language === 'string' ? args.language : undefined,
    limit: args.limit ? Number(args.limit) : undefined,
    force: Boolean(args.force),
    confirm: Boolean(args.confirm)
  };
  if (args.all) {
    options.id = undefined;
    options.kind = undefined;
  }

  const config = readConfig(process.env);
  const result = await runGeneration({ options, config });
  if (!result.ok) process.exitCode = 1;
}

const isDirectRun =
  process.argv[1] && process.argv[1].replace(/\\/g, '/').endsWith('scripts/fish/generateAudio.js');
if (isDirectRun) {
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
}

export default { runGeneration, parseArgs };
