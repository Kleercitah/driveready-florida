import { appConfig } from '../config/appConfig.js';

const ROOT_KEY = `${appConfig.storagePrefix}:state`;

/** Estado por defecto. Todo dato del estudiante vive aquí. */
export function createDefaultState() {
  return {
    schemaVersion: appConfig.storageSchemaVersion,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    preferences: {
      language: appConfig.defaultLanguage,
      explanationLanguage: appConfig.defaultLanguage,
      // Idioma de las preguntas en práctica ('en' | 'es'). Es independiente del
      // idioma de la interfaz y NUNCA afecta al simulacro, que siempre va en inglés.
      practiceQuestionLanguage: 'en',
      showMotivational: true,
      reducedMotion: 'system',
      timerEnabled: false,
      timerMinutes: appConfig.practiceTimerDefaultMinutes,
      // Preferencias del reproductor de narración. Son independientes del idioma
      // de la interfaz y del idioma de las preguntas de práctica.
      audioLanguage: 'en',
      audioSpeed: 1
    },
    welcome: {
      seen: false
    },
    lessons: {
      completed: []
    },
    favorites: [],
    questionStats: {},
    practiceHistory: [],
    examHistory: [],
    activePractice: null,
    activeExam: null,
    activityDays: []
  };
}

let memoryFallback = createDefaultState();
let memoryOnly = false;
let available = null;

/** Comprueba si localStorage es utilizable (puede estar deshabilitado). */
export function isStorageAvailable() {
  if (available !== null) return available;
  try {
    const probe = `${appConfig.storagePrefix}:probe`;
    window.localStorage.setItem(probe, '1');
    window.localStorage.removeItem(probe);
    available = true;
  } catch {
    available = false;
    memoryOnly = true;
  }
  return available;
}

export function isUsingMemoryFallback() {
  isStorageAvailable();
  return memoryOnly;
}

/** Fusiona profundamente objetos planos preservando valores por defecto. */
function deepMerge(base, override) {
  if (Array.isArray(base)) {
    return Array.isArray(override) ? override : base;
  }
  if (base && typeof base === 'object') {
    const result = { ...base };
    if (override && typeof override === 'object') {
      Object.keys(override).forEach((key) => {
        result[key] = deepMerge(base[key], override[key]);
      });
    }
    return result;
  }
  return override === undefined ? base : override;
}

/**
 * Aplica migraciones por versión. Actualmente la versión inicial es 1.
 * Las migraciones futuras se añaden aquí sin romper datos existentes.
 */
function migrate(raw) {
  let state = raw;
  const version = Number(state?.schemaVersion) || 0;

  if (version < 1) {
    state = { ...createDefaultState(), ...state, schemaVersion: 1 };
  }

  return state;
}

/** Valida y normaliza el estado cargado para evitar datos corruptos. */
export function normalizeState(input) {
  const defaults = createDefaultState();
  const merged = deepMerge(defaults, input && typeof input === 'object' ? input : {});

  merged.preferences.language = appConfig.supportedLanguages.includes(merged.preferences.language)
    ? merged.preferences.language
    : appConfig.defaultLanguage;
  merged.preferences.explanationLanguage = appConfig.supportedLanguages.includes(
    merged.preferences.explanationLanguage
  )
    ? merged.preferences.explanationLanguage
    : appConfig.defaultLanguage;

  // Idioma de práctica: solo admite 'en' o 'es'. Cualquier otro valor vuelve a 'en'.
  if (!['en', 'es'].includes(merged.preferences.practiceQuestionLanguage)) {
    merged.preferences.practiceQuestionLanguage = 'en';
  }

  // Preferencias de narración: idioma ('en' | 'es') y velocidad válida.
  if (!['en', 'es'].includes(merged.preferences.audioLanguage)) {
    merged.preferences.audioLanguage = 'en';
  }
  const speed = Number(merged.preferences.audioSpeed);
  merged.preferences.audioSpeed = [0.75, 1, 1.25, 1.5].includes(speed) ? speed : 1;

  if (!Array.isArray(merged.lessons.completed)) merged.lessons.completed = [];
  if (!Array.isArray(merged.favorites)) merged.favorites = [];
  if (!Array.isArray(merged.practiceHistory)) merged.practiceHistory = [];
  if (!Array.isArray(merged.examHistory)) merged.examHistory = [];
  if (!Array.isArray(merged.activityDays)) merged.activityDays = [];
  if (!merged.questionStats || typeof merged.questionStats !== 'object') merged.questionStats = {};

  merged.schemaVersion = appConfig.storageSchemaVersion;
  return merged;
}

/** Carga el estado desde localStorage con manejo de errores. */
export function loadState() {
  if (!isStorageAvailable()) return normalizeState(memoryFallback);

  try {
    const raw = window.localStorage.getItem(ROOT_KEY);
    if (!raw) return normalizeState(memoryFallback);
    const parsed = JSON.parse(raw);
    const migrated = migrate(parsed);
    return normalizeState(migrated);
  } catch {
    // JSON corrupto: se conserva una copia y se restaura el estado por defecto.
    try {
      const corrupt = window.localStorage.getItem(ROOT_KEY);
      if (corrupt) window.localStorage.setItem(`${ROOT_KEY}:corrupt-backup`, corrupt);
    } catch {
      /* noop */
    }
    return normalizeState(null);
  }
}

export class StorageQuotaError extends Error {
  constructor(message) {
    super(message);
    this.name = 'StorageQuotaError';
  }
}

/** Guarda el estado con manejo de cuota agotada. */
export function saveState(state) {
  const normalized = normalizeState(state);
  normalized.updatedAt = new Date().toISOString();
  memoryFallback = normalized;

  if (!isStorageAvailable()) return { ok: true, persisted: false };

  try {
    window.localStorage.setItem(ROOT_KEY, JSON.stringify(normalized));
    return { ok: true, persisted: true };
  } catch (error) {
    const isQuota =
      error &&
      (error.name === 'QuotaExceededError' ||
        error.name === 'NS_ERROR_DOM_QUOTA_REACHED' ||
        error.code === 22);
    if (isQuota) {
      return {
        ok: false,
        persisted: false,
        error: new StorageQuotaError('Storage quota exceeded')
      };
    }
    return { ok: false, persisted: false, error };
  }
}

let cachedState = null;
const subscribers = new Set();

/** Lectura en caché del estado. */
export function getState() {
  if (!cachedState) cachedState = loadState();
  return cachedState;
}

export function setState(nextState) {
  cachedState = normalizeState(nextState);
  const result = saveState(cachedState);
  subscribers.forEach((fn) => fn(cachedState));
  return result;
}

/**
 * Actualiza el estado mediante una función mutadora que recibe una copia.
 * Devuelve el nuevo estado.
 */
export function updateState(mutator) {
  const draft = JSON.parse(JSON.stringify(getState()));
  const result = mutator(draft) ?? draft;
  setState(result);
  return getState();
}

export function subscribe(callback) {
  subscribers.add(callback);
  return () => subscribers.delete(callback);
}

/** Elimina todo el progreso y devuelve el estado por defecto. */
export function resetState() {
  const fresh = createDefaultState();
  setState(fresh);
  try {
    if (isStorageAvailable()) window.localStorage.removeItem(`${ROOT_KEY}:corrupt-backup`);
  } catch {
    /* noop */
  }
  return fresh;
}

/** Datos exportables (mismo esquema que el almacenamiento). */
export function exportData() {
  return {
    app: appConfig.appName,
    version: appConfig.version,
    exportedAt: new Date().toISOString(),
    schemaVersion: appConfig.storageSchemaVersion,
    state: getState()
  };
}

/**
 * Valida un objeto importado. Devuelve { valid, state, reason }.
 */
export function validateImport(payload) {
  if (!payload || typeof payload !== 'object') {
    return { valid: false, reason: 'not-an-object' };
  }
  const candidate = payload.state ?? payload;
  if (!candidate || typeof candidate !== 'object') {
    return { valid: false, reason: 'missing-state' };
  }
  if (!candidate.preferences || !candidate.lessons || !candidate.questionStats) {
    return { valid: false, reason: 'missing-sections' };
  }
  return { valid: true, state: normalizeState(candidate) };
}

/**
 * Fusiona el estado importado con el actual (no sobrescribe listas vacías).
 * El llamador debe confirmar antes de invocar esta función.
 */
export function mergeImportedState(imported) {
  const current = getState();
  const questions = { ...current.questionStats };

  Object.entries(imported.questionStats ?? {}).forEach(([key, value]) => {
    const existing = questions[key];
    if (!existing) {
      questions[key] = value;
    } else {
      questions[key] = {
        answered: (existing.answered || 0) + (value.answered || 0),
        correct: (existing.correct || 0) + (value.correct || 0),
        wrong: (existing.wrong || 0) + (value.wrong || 0),
        lastCorrect: value.lastAnsweredAt >= existing.lastAnsweredAt ? value.lastCorrect : existing.lastCorrect,
        lastAnsweredAt:
          value.lastAnsweredAt >= existing.lastAnsweredAt ? value.lastAnsweredAt : existing.lastAnsweredAt
      };
    }
  });

  const dedupeById = (list, incoming) => {
    const map = new Map(list.map((item) => [item.id, item]));
    incoming.forEach((item) => {
      if (!map.has(item.id)) map.set(item.id, item);
    });
    return Array.from(map.values()).sort((a, b) => (a.date < b.date ? 1 : -1));
  };

  const merged = {
    ...current,
    lessons: {
      completed: Array.from(new Set([...current.lessons.completed, ...imported.lessons.completed]))
    },
    favorites: Array.from(new Set([...current.favorites, ...imported.favorites])),
    questionStats: questions,
    practiceHistory: dedupeById(current.practiceHistory, imported.practiceHistory),
    examHistory: dedupeById(current.examHistory, imported.examHistory),
    activityDays: Array.from(new Set([...current.activityDays, ...imported.activityDays])).sort()
  };

  setState(merged);
  return getState();
}

/** Registra un día de actividad (formato YYYY-MM-DD, hora local). */
export function recordActivityDay(date = new Date()) {
  const key = toDateKey(date);
  updateState((draft) => {
    if (!draft.activityDays.includes(key)) draft.activityDays.push(key);
    draft.activityDays.sort();
    return draft;
  });
  return key;
}

export function toDateKey(date) {
  const d = date instanceof Date ? date : new Date(date);
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

/** Solo para pruebas: limpia la caché y el fallback en memoria. */
export function __resetForTests() {
  cachedState = null;
  memoryFallback = createDefaultState();
  available = null;
  memoryOnly = false;
}

export default {
  createDefaultState,
  getState,
  setState,
  updateState,
  loadState,
  saveState,
  subscribe,
  resetState,
  exportData,
  validateImport,
  mergeImportedState,
  recordActivityDay,
  isStorageAvailable,
  isUsingMemoryFallback,
  StorageQuotaError
};
