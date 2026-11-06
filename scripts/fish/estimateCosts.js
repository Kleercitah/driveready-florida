/**
 * Estimación de costos (dry-run). NUNCA llama a la API ni escribe archivos.
 *
 * Uso: `npm run voices:dry-run`
 *      `npm run voices:dry-run -- --language es`
 */
import { loadEnv, readConfig } from './fishClient.js';
import { readManifest, indexEntries } from './manifest.js';
import { buildCatalog } from './buildCatalog.js';
import { createPlan, estimatePlan, checkLimits, formatCost } from './plan.js';
import { parseArgs } from './generateAudio.js';

function report(label, entries, config, log) {
  const estimate = estimatePlan(entries, config);
  const limits = checkLimits(estimate, config);
  log(
    `${label.padEnd(22)} peticiones=${String(estimate.requests).padStart(4)}  ` +
      `bytes=${String(estimate.inputBytes).padStart(8)}  costo=${formatCost(estimate)}`
  );
  if (!limits.ok) {
    limits.violations.forEach((violation) => log(`    · supera límite: ${violation}`));
  }
  return estimate;
}

export function runEstimate({ options = {}, config, log = console.log } = {}) {
  const manifest = readManifest();
  const catalog = buildCatalog({ config, existingEntries: indexEntries(manifest) });
  const plan = createPlan(catalog, { ...options, force: false });

  log('DriveReady Florida — Estimación de costos (dry-run)');
  log('---------------------------------------------------');
  log(`Modelo: ${config.model} · Formato: ${config.format}`);
  log('');
  log('PENDIENTES (lo que falta por generar)');
  report('Total pendiente', plan.toGenerate, config, log);
  report('  · Inglés (en)', plan.toGenerate.filter((e) => e.language === 'en'), config, log);
  report('  · Español (es)', plan.toGenerate.filter((e) => e.language === 'es'), config, log);
  log('');
  log('CATÁLOGO COMPLETO (referencia, sin generar nada)');
  report('Total catálogo', catalog, config, log);
  report('  · Inglés (en)', catalog.filter((e) => e.language === 'en'), config, log);
  report('  · Español (es)', catalog.filter((e) => e.language === 'es'), config, log);
  log('');
  log('Ya listas (omitidas):', plan.skippedReady.length);

  return { plan, catalog };
}

async function main() {
  loadEnv();
  const args = parseArgs(process.argv.slice(2));
  const options = {
    id: typeof args.id === 'string' ? args.id : undefined,
    kind: typeof args.kind === 'string' ? args.kind : undefined,
    language: typeof args.language === 'string' ? args.language : undefined,
    limit: args.limit ? Number(args.limit) : undefined
  };
  runEstimate({ options, config: readConfig(process.env) });
}

const isDirectRun =
  process.argv[1] && process.argv[1].replace(/\\/g, '/').endsWith('scripts/fish/estimateCosts.js');
if (isDirectRun) {
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
}

export default { runEstimate };
