/**
 * Utilidades de fecha y duración.
 */

/** Devuelve la clave local YYYY-MM-DD. */
export function toDateKey(date = new Date()) {
  const d = date instanceof Date ? date : new Date(date);
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

/** Formatea una fecha ISO en la configuración regional indicada. */
export function formatDate(iso, locale = 'en-US', options = {}) {
  if (!iso) return '—';
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return '—';
  return new Intl.DateTimeFormat(locale, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    ...options
  }).format(date);
}

/** Formatea fecha y hora. */
export function formatDateTime(iso, locale = 'en-US') {
  return formatDate(iso, locale, { hour: '2-digit', minute: '2-digit' });
}

/** Duración legible a partir de milisegundos. */
export function formatDuration(ms) {
  const totalSeconds = Math.max(0, Math.round(Number(ms) / 1000));
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  if (hours > 0) {
    return `${hours}h ${String(minutes).padStart(2, '0')}m`;
  }
  return `${minutes}:${String(seconds).padStart(2, '0')}`;
}

/** Formatea mm:ss restantes. */
export function formatClock(ms) {
  const totalSeconds = Math.max(0, Math.ceil(Number(ms) / 1000));
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

/** Diferencia en días entre dos claves de fecha (YYYY-MM-DD). */
export function daysBetween(aKey, bKey) {
  const a = new Date(`${aKey}T00:00:00`);
  const b = new Date(`${bKey}T00:00:00`);
  return Math.round((b - a) / 86400000);
}

/** Genera un id corto único para sesiones y resultados. */
export function createId(prefix = 'id') {
  const random = Math.random().toString(36).slice(2, 8);
  return `${prefix}_${Date.now().toString(36)}_${random}`;
}
