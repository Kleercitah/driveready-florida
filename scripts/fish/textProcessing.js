/**
 * Utilidades de texto para la generación de narraciones.
 * Funciones puras, sin red ni sistema de archivos: se pueden probar aisladas.
 */
import { createHash } from 'node:crypto';

/**
 * Normaliza un texto para narración: colapsa espacios, unifica saltos de línea
 * en un espacio y recorta. No altera el significado ni el idioma.
 */
export function normalizeText(input) {
  return String(input ?? '')
    .replace(/\r\n/g, '\n')
    .replace(/\n{2,}/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

/** Une fragmentos en una narración natural (ignora vacíos). */
export function joinNarration(parts) {
  return normalizeText(parts.filter((part) => part !== null && part !== undefined && String(part).trim()).join('. '));
}

/** Número de bytes UTF-8 del texto (lo que se envía a la API). */
export function byteLength(text) {
  return Buffer.byteLength(String(text ?? ''), 'utf8');
}

/** Hash SHA-256 en hexadecimal. */
export function sha256(text) {
  return createHash('sha256').update(String(text), 'utf8').digest('hex');
}

/**
 * Hash estable de una pieza de narración. Incluye TODO lo que afecta al
 * resultado: el texto, el idioma, el modelo y el Reference ID.
 * Si cambia cualquiera de ellos, el hash cambia y el audio se regenera.
 */
export function computeTextHash({ text, language, model, referenceId }) {
  return sha256(
    JSON.stringify({
      text: normalizeText(text),
      language,
      model,
      referenceId: referenceId ?? null
    })
  );
}

export default { normalizeText, joinNarration, byteLength, sha256, computeTextHash };
