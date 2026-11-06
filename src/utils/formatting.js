/**
 * Utilidades de formato para números, porcentajes y textos.
 */

/** Convierte un valor a entero seguro. */
export function toInt(value, fallback = 0) {
  const n = Number.parseInt(value, 10);
  return Number.isFinite(n) ? n : fallback;
}

/** Porcentaje entero sin redondeos que alteren aprobado/reprobado. */
export function percentage(part, total, decimals = 0) {
  if (!total) return 0;
  const value = (part / total) * 100;
  const factor = 10 ** decimals;
  return Math.round(value * factor) / factor;
}

/** Formatea un porcentaje con signo %. */
export function formatPercent(part, total, decimals = 0) {
  return `${percentage(part, total, decimals)}%`;
}

/** Formatea un porcentaje ya calculado. */
export function formatPercentValue(value, decimals = 0) {
  const n = Number(value) || 0;
  const factor = 10 ** decimals;
  return `${Math.round(n * factor) / factor}%`;
}

/** Pluraliza una palabra en inglés de forma simple. */
export function pluralize(count, singular, plural) {
  return count === 1 ? singular : plural ?? `${singular}s`;
}

/** Escapa HTML para insertar texto de datos en plantillas. */
export function escapeHtml(value) {
  if (value === null || value === undefined) return '';
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

/** Clase de modificador CSS para etiquetas de dificultad. */
export function difficultyClass(difficulty) {
  return `badge badge--difficulty badge--${difficulty || 'beginner'}`;
}

/** Normaliza texto para comparaciones (minúsculas, sin acentos, sin puntuación). */
export function normalizeText(value) {
  return String(value ?? '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

/** Trunca texto a una longitud máxima con elipsis. */
export function truncate(value, max = 120) {
  const text = String(value ?? '');
  if (text.length <= max) return text;
  return `${text.slice(0, max - 1).trimEnd()}…`;
}
