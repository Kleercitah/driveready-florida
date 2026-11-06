/**
 * Planificación y estimación de la generación de narraciones.
 *
 * Funciones puras (sin red ni disco) que deciden QUÉ narraciones faltan y
 * cuánto costarían, aplicando los límites de seguridad del brief. Se usan
 * tanto en `--dry-run` como antes de cualquier llamada real a la API.
 */
import { byteLength } from './textProcessing.js';

/**
 * Selecciona las entradas del catálogo a generar.
 * @param {Array<object>} catalog entradas del catálogo
 * @param {{ id?: string, kind?: string, language?: string, limit?: number, force?: boolean }} options
 * @returns {{ requested: Array<object>, skippedReady: Array<object>, toGenerate: Array<object> }}
 */
export function createPlan(catalog, options = {}) {
  const { id, kind, language, limit, force = false } = options;

  let requested = catalog;
  if (id) requested = requested.filter((entry) => entry.id === id);
  if (kind) requested = requested.filter((entry) => entry.kind === kind);
  if (language) requested = requested.filter((entry) => entry.language === language);

  const skippedReady = [];
  const pending = [];

  for (const entry of requested) {
    const ready = entry.status === 'ready' && entry.byteSize > 0;
    if (ready && !force) skippedReady.push(entry);
    else pending.push(entry);
  }

  const toGenerate = typeof limit === 'number' && limit > 0 ? pending.slice(0, limit) : pending;

  return { requested, skippedReady, toGenerate };
}

/**
 * Estima el trabajo: número de peticiones, bytes y caracteres de entrada y,
 * si hay tarifa configurada, el costo en USD. Si no hay tarifa verificada, el
 * costo se reporta como DESCONOCIDO (nunca se inventa un precio).
 */
export function estimatePlan(entries, config) {
  let inputBytes = 0;
  let chars = 0;

  for (const entry of entries) {
    inputBytes += byteLength(entry.text);
    chars += Array.from(entry.text).length;
  }

  const rate = config?.pricePerMillionChars;
  const currencyKnown = typeof rate === 'number' && rate > 0;
  const estimatedUsd = currencyKnown ? (chars / 1_000_000) * rate : null;

  return {
    requests: entries.length,
    inputBytes,
    chars,
    currencyKnown,
    ratePerMillionChars: currencyKnown ? rate : null,
    estimatedUsd
  };
}

/**
 * Comprueba los límites de seguridad. Devuelve la lista de violaciones
 * (vacía si todo está dentro de los límites).
 */
export function checkLimits(estimate, config) {
  const violations = [];

  if (config.maxRequests && estimate.requests > config.maxRequests) {
    violations.push(
      `peticiones (${estimate.requests}) > FISH_MAX_REQUESTS (${config.maxRequests})`
    );
  }
  if (config.maxInputBytes && estimate.inputBytes > config.maxInputBytes) {
    violations.push(
      `bytes de entrada (${estimate.inputBytes}) > FISH_MAX_INPUT_BYTES (${config.maxInputBytes})`
    );
  }
  if (
    estimate.currencyKnown &&
    config.maxEstimatedUsd &&
    estimate.estimatedUsd > config.maxEstimatedUsd
  ) {
    violations.push(
      `costo estimado (${estimate.estimatedUsd.toFixed(4)} USD) > FISH_MAX_ESTIMATED_USD (${config.maxEstimatedUsd})`
    );
  }

  return { ok: violations.length === 0, violations };
}

/** Formatea el costo para mostrarlo en consola. */
export function formatCost(estimate) {
  if (!estimate.currencyKnown) return 'DESCONOCIDO (sin tarifa configurada)';
  return `${estimate.estimatedUsd.toFixed(4)} USD (tarifa ${estimate.ratePerMillionChars} USD / millón de caracteres)`;
}

export default { createPlan, estimatePlan, checkLimits, formatCost };
