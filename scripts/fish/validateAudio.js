/**
 * Validación del manifiesto de audio y los MP3 generados.
 *
 * Comprueba, sin red y sin gasto:
 *  - estructura del manifiesto y ausencia de IDs duplicados;
 *  - que cada entrada 'ready' tenga su MP3 en disco con el tamaño declarado;
 *  - que el hash de texto coincida con el catálogo (detecta contenido obsoleto);
 *  - que el manifiesto no filtre credenciales.
 *
 * Uso: `npm run voices:validate`  (código de salida 1 si hay problemas)
 */
import { existsSync, statSync } from 'node:fs';
import { loadEnv, readConfig } from './fishClient.js';
import { readManifest, MANIFEST_PATH, resolveOutputPath } from './manifest.js';
import { buildCatalog } from './buildCatalog.js';

const SECRET_PATTERN = /(bearer\s+[a-z0-9._-]{12,}|api[_-]?key\s*[:=]\s*\S{12,})/i;

export function validateAudio({ config, log = console.log } = {}) {
  const problems = [];
  const manifest = readManifest();

  if (typeof manifest.version !== 'number') problems.push('El manifiesto no tiene "version" numérica.');
  if (!Array.isArray(manifest.entries)) problems.push('El manifiesto no tiene un arreglo "entries".');

  const entries = Array.isArray(manifest.entries) ? manifest.entries : [];
  const seen = new Set();

  for (const entry of entries) {
    if (!entry.id) {
      problems.push('Hay una entrada del manifiesto sin "id".');
      continue;
    }
    if (seen.has(entry.id)) problems.push(`ID duplicado en el manifiesto: ${entry.id}.`);
    seen.add(entry.id);

    if (!['ready', 'pending', 'failed'].includes(entry.status)) {
      problems.push(`${entry.id}: estado inválido "${entry.status}".`);
    }

    if (entry.status === 'ready') {
      const file = resolveOutputPath(entry.outputPath ?? `audio/${entry.file}`);
      if (!existsSync(file)) {
        problems.push(`${entry.id}: estado 'ready' pero falta el archivo ${entry.outputPath}.`);
      } else {
        const actual = statSync(file).size;
        if (entry.byteSize && Math.abs(actual - entry.byteSize) > 2) {
          problems.push(
            `${entry.id}: tamaño en disco (${actual}) no coincide con el manifiesto (${entry.byteSize}).`
          );
        }
        if (actual <= 256) problems.push(`${entry.id}: el archivo es demasiado pequeño (${actual} bytes).`);
      }
    }
  }

  // Compara el manifiesto con el catálogo actual: detecta entradas obsoletas.
  const catalog = buildCatalog({ config, existingEntries: new Map() });
  const catalogById = new Map(catalog.map((entry) => [entry.id, entry]));
  for (const entry of entries) {
    const current = catalogById.get(entry.id);
    if (current && current.textHash !== entry.textHash && entry.status === 'ready') {
      problems.push(`${entry.id}: el audio está obsoleto (el texto o la voz cambiaron).`);
    }
  }

  // Nunca deben aparecer secretos en el manifiesto.
  const raw = JSON.stringify(manifest);
  if (SECRET_PATTERN.test(raw)) {
    problems.push('El manifiesto parece contener credenciales. Revísalo antes de publicarlo.');
  }

  const ready = entries.filter((e) => e.status === 'ready').length;
  log('DriveReady Florida — Validación del audio');
  log('-----------------------------------------');
  log(`Manifiesto           : ${MANIFEST_PATH}`);
  log(`Entradas             : ${entries.length}`);
  log(`Listas (ready)       : ${ready}`);
  log(`Narraciones en catálogo: ${catalog.length}`);

  if (problems.length === 0) {
    log('');
    log('Resultado: SIN PROBLEMAS.');
  } else {
    log('');
    log(`Resultado: ${problems.length} problema(s) detectado(s):`);
    problems.forEach((problem) => log(`  - ${problem}`));
  }

  return { ok: problems.length === 0, problems };
}

async function main() {
  loadEnv();
  const result = validateAudio({ config: readConfig(process.env) });
  if (!result.ok) process.exitCode = 1;
}

const isDirectRun =
  process.argv[1] && process.argv[1].replace(/\\/g, '/').endsWith('scripts/fish/validateAudio.js');
if (isDirectRun) {
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
}

export default { validateAudio };
