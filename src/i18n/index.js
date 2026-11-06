import enUS from './en-US.js';
import esES from './es-ES.js';
import { appConfig } from '../config/appConfig.js';

const dictionaries = {
  'en-US': enUS,
  'es-ES': esES
};

let currentLanguage = appConfig.defaultLanguage;
const listeners = new Set();

/** Lee un valor anidado mediante una clave con puntos ("nav.home"). */
function readPath(source, key) {
  return key.split('.').reduce((acc, part) => {
    if (acc && typeof acc === 'object' && part in acc) return acc[part];
    return undefined;
  }, source);
}

/** Reemplaza marcadores {name} en una cadena. */
function interpolate(template, vars) {
  if (typeof template !== 'string') return template;
  if (!vars) return template;
  return template.replace(/\{(\w+)\}/g, (match, token) =>
    Object.prototype.hasOwnProperty.call(vars, token) ? String(vars[token]) : match
  );
}

export function setLanguage(language) {
  const next = dictionaries[language] ? language : appConfig.fallbackLanguage;
  if (next === currentLanguage) return currentLanguage;
  currentLanguage = next;
  listeners.forEach((fn) => fn(currentLanguage));
  return currentLanguage;
}

export function getLanguage() {
  return currentLanguage;
}

export function getSupportedLanguages() {
  return appConfig.supportedLanguages.map((code) => ({
    code,
    label: dictionaries[code]?.meta?.languageNative ?? code
  }));
}

export function onLanguageChange(callback) {
  listeners.add(callback);
  return () => listeners.delete(callback);
}

/**
 * Traduce una clave. Si falta en el idioma actual, usa el inglés (fallback).
 * Devuelve la propia clave si no existe en ningún diccionario.
 */
export function t(key, vars) {
  const active = dictionaries[currentLanguage];
  const fallback = dictionaries[appConfig.fallbackLanguage];

  let value = readPath(active, key);
  if (value === undefined) value = readPath(fallback, key);
  if (value === undefined) return key;

  return interpolate(value, vars);
}

/** Devuelve un objeto de diccionario completo (útil en pruebas de paridad). */
export function getDictionary(language) {
  return dictionaries[language] ?? dictionaries[appConfig.fallbackLanguage];
}

/**
 * Convierte un locale de la interfaz ('es-ES') a la clave corta que usan los
 * datos de contenido ('es' | 'en'). Todo el contenido (lecciones, preguntas,
 * señales) se almacena con claves cortas.
 */
export function langKey(language = currentLanguage) {
  return String(language).toLowerCase().startsWith('es') ? 'es' : 'en';
}

/**
 * Lee un campo localizado `{ en, es }` usando el idioma indicado y
 * regresando al inglés cuando la traducción no exista.
 */
export function pickLocalized(value, language = currentLanguage) {
  if (value === null || value === undefined) return '';
  if (typeof value === 'string') return value;
  const key = langKey(language);
  return value[key] ?? value.en ?? '';
}

export const availableLanguages = Object.keys(dictionaries);

export default {
  t,
  setLanguage,
  getLanguage,
  onLanguageChange,
  getSupportedLanguages,
  getDictionary,
  langKey,
  pickLocalized
};
