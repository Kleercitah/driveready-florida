/**
 * Muestra de voz: genera UNA sola narración para verificar que la voz
 * seleccionada suena como se espera. Requiere `--confirm` (o
 * FISH_ALLOW_SPEND=1) porque consume créditos.
 *
 * Uso: `npm run voices:sample -- --confirm`
 *      `npm run voices:sample -- --language es --confirm`
 *      `npm run voices:sample -- --id lesson.right-of-way.intro.en --confirm`
 */
import { loadEnv, readConfig } from './fishClient.js';
import { runGeneration, parseArgs } from './generateAudio.js';

export async function runSample({ options = {}, config, log = console.log, fetchImpl } = {}) {
  log('Muestra de voz: se generará UNA narración (la más corta de la selección).');
  const result = await runGeneration({
    options: { ...options, limit: 1, force: true },
    config,
    log,
    fetchImpl
  });
  return result;
}

async function main() {
  loadEnv();
  const args = parseArgs(process.argv.slice(2));
  const config = readConfig(process.env);
  const result = await runSample({
    options: {
      id: typeof args.id === 'string' ? args.id : undefined,
      kind: typeof args.kind === 'string' ? args.kind : undefined,
      language: typeof args.language === 'string' ? args.language : 'en',
      confirm: Boolean(args.confirm)
    },
    config
  });
  if (!result.ok) process.exitCode = 1;
}

const isDirectRun =
  process.argv[1] && process.argv[1].replace(/\\/g, '/').endsWith('scripts/fish/generateSample.js');
if (isDirectRun) {
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
}

export default { runSample };
