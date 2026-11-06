import bank1 from './bank-1.js';
import bank2 from './bank-2.js';
import { translationsEs as translationsBank1 } from './translations.es.bank1.js';
import { translationsEs as translationsBank2 } from './translations.es.bank2.js';
import { categoryIds } from '../categories.js';

/** Banco completo de preguntas originales (el inglés es siempre la fuente). */
export const questions = [...bank1, ...bank2];

/**
 * Capa de traducción al español, indexada por id de pregunta.
 * Cada entrada aporta `question` (enunciado) y `options` (4 opciones en el MISMO
 * orden que el banco inglés). Nunca incluye la respuesta correcta: esta se
 * conserva en `correctAnswerIndex` del banco, por lo que cambiar de idioma no
 * altera qué opción es la válida.
 */
export const questionTranslationsEs = { ...translationsBank1, ...translationsBank2 };

/** Índice por id para búsquedas O(1). */
export const questionsById = questions.reduce((acc, question) => {
  acc[question.id] = question;
  return acc;
}, {});

/** Convierte un locale ('es-ES') o clave corta ('es') a la clave de dato. */
function resolveLangKey(language) {
  return String(language).toLowerCase().startsWith('es') ? 'es' : 'en';
}

export function getQuestion(id) {
  return questionsById[id] ?? null;
}

export function getQuestionsByCategory(categoryId) {
  return questions.filter((q) => q.category === categoryId);
}

/** Solo preguntas aptas para el simulacro (revisadas). */
export function getVerifiedQuestions() {
  return questions.filter((q) => q.reviewStatus === 'verified');
}

/** Recuento por categoría. */
export function countByCategory() {
  const counts = {};
  categoryIds.forEach((id) => {
    counts[id] = 0;
  });
  questions.forEach((q) => {
    counts[q.category] = (counts[q.category] ?? 0) + 1;
  });
  return counts;
}

/**
 * Comprueba que una pregunta tenga la traducción española COMPLETA:
 * enunciado no vacío y exactamente cuatro opciones no vacías.
 * El botón "Ver en español" solo se habilita cuando esto se cumple.
 */
export function hasFullTranslation(questionOrId) {
  const id = typeof questionOrId === 'string' ? questionOrId : questionOrId?.id;
  const entry = id ? questionTranslationsEs[id] : null;
  if (!entry) return false;
  if (typeof entry.question !== 'string' || entry.question.trim().length === 0) return false;
  if (!Array.isArray(entry.options) || entry.options.length !== 4) return false;
  return entry.options.every((option) => typeof option === 'string' && option.trim().length > 0);
}

/**
 * Enunciado de la pregunta en el idioma solicitado ('en' | 'es' | 'es-ES' | 'en-US').
 * Si falta la traducción, regresa al inglés sin lanzar error.
 */
export function getQuestionText(question, language = 'en') {
  if (!question) return '';
  if (resolveLangKey(language) === 'es') {
    const entry = questionTranslationsEs[question.id];
    if (entry && typeof entry.question === 'string' && entry.question.trim()) {
      return entry.question;
    }
  }
  return question.question;
}

/**
 * Opciones en el idioma solicitado, conservando índices y orden.
 * Si la traducción no está completa, regresa las opciones en inglés.
 */
export function getQuestionOptions(question, language = 'en') {
  if (!question) return [];
  if (resolveLangKey(language) === 'es') {
    const entry = questionTranslationsEs[question.id];
    if (Array.isArray(entry?.options) && entry.options.length === question.options.length) {
      return entry.options;
    }
  }
  return question.options;
}

/** Recuento de cobertura de traducciones (para informes y pruebas). */
export function getTranslationCoverage() {
  const total = questions.length;
  const complete = questions.filter((q) => hasFullTranslation(q)).length;
  return {
    total,
    complete,
    pending: total - complete,
    percentage: total === 0 ? 0 : Math.round((complete / total) * 100)
  };
}

export default questions;
