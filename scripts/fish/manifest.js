/**
 * Lectura y escritura del manifiesto de audio (`public/audio/manifest.json`).
 * El manifiesto es el único contrato entre los scripts de generación y el
 * reproductor del navegador. NUNCA contiene credenciales.
 */
import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';

export const PROJECT_ROOT = resolve(process.cwd());
export const AUDIO_DIR = resolve(PROJECT_ROOT, 'public', 'audio');
export const MANIFEST_PATH = resolve(AUDIO_DIR, 'manifest.json');

/** Manifiesto vacío (la web funciona aunque no exista ningún MP3). */
export function emptyManifest() {
  return {
    version: 1,
    generatedAt: new Date().toISOString(),
    model: null,
    references: { en: null, es: null },
    entries: []
  };
}

export function readManifest(path = MANIFEST_PATH) {
  if (!existsSync(path)) return emptyManifest();
  try {
    const parsed = JSON.parse(readFileSync(path, 'utf8'));
    return {
      ...emptyManifest(),
      ...parsed,
      entries: Array.isArray(parsed.entries) ? parsed.entries : []
    };
  } catch {
    return emptyManifest();
  }
}

export function writeManifest(manifest, path = MANIFEST_PATH) {
  mkdirSync(dirname(path), { recursive: true });
  const payload = { ...manifest, generatedAt: new Date().toISOString() };
  writeFileSync(path, `${JSON.stringify(payload, null, 2)}\n`, 'utf8');
  return payload;
}

/** Indexa las entradas del manifiesto por id. */
export function indexEntries(manifest) {
  const map = new Map();
  (manifest.entries ?? []).forEach((entry) => map.set(entry.id, entry));
  return map;
}

/** Ruta absoluta de un `outputPath` relativo a `public/`. */
export function resolveOutputPath(outputPath) {
  return resolve(PROJECT_ROOT, 'public', outputPath);
}

export default {
  PROJECT_ROOT,
  AUDIO_DIR,
  MANIFEST_PATH,
  emptyManifest,
  readManifest,
  writeManifest,
  indexEntries,
  resolveOutputPath
};
