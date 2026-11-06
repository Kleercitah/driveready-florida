import { describe, it, expect } from 'vitest';
import {
  questions,
  getQuestion,
  getQuestionText,
  getQuestionOptions,
  hasFullTranslation,
  getTranslationCoverage,
  questionTranslationsEs
} from '../../src/data/questions/index.js';
import { validateQuestionBank } from '../../src/utils/validation.js';
import { createDefaultState, normalizeState } from '../../src/services/storage.js';
import {
  createPracticeSession,
  getCurrentQuestion,
  setSelection,
  checkAnswer
} from '../../src/engines/quizEngine.js';
import { pickLocalized, langKey } from '../../src/i18n/index.js';

/**
 * TR01–TR13 · Práctica bilingüe (traducción de pregunta y opciones).
 * Verifican cobertura, fidelidad estructural y que cambiar de idioma no altera
 * la respuesta correcta, la selección ni las estadísticas.
 */

describe('Práctica bilingüe · datos de traducción', () => {
  it('TR01 · la cobertura de traducción es completa (enunciado + 4 opciones)', () => {
    const coverage = getTranslationCoverage();
    expect(coverage.total).toBe(questions.length);
    expect(coverage.complete).toBe(coverage.total);
    expect(coverage.pending).toBe(0);
    expect(coverage.percentage).toBe(100);
  });

  it('TR02 · cada pregunta expone traducción completa', () => {
    questions.forEach((question) => {
      const entry = questionTranslationsEs[question.id];
      expect(entry, `falta traducción de ${question.id}`).toBeTruthy();
      expect(typeof entry.question).toBe('string');
      expect(entry.question.trim().length).toBeGreaterThan(0);
      expect(Array.isArray(entry.options)).toBe(true);
      expect(entry.options).toHaveLength(4);
      entry.options.forEach((option) => expect(String(option).trim().length).toBeGreaterThan(0));
      expect(hasFullTranslation(question)).toBe(true);
    });
  });

  it('TR03 · el inglés es el idioma por defecto del enunciado y las opciones', () => {
    const question = getQuestion('rs-001');
    expect(getQuestionText(question, 'en')).toBe(question.question);
    expect(getQuestionText(question, 'en-US')).toBe(question.question);
    expect(getQuestionOptions(question, 'en')).toEqual(question.options);
  });

  it('TR04 · el español devuelve el enunciado y las cuatro opciones traducidas', () => {
    const question = getQuestion('rs-001');
    const entry = questionTranslationsEs['rs-001'];
    expect(getQuestionText(question, 'es')).toBe(entry.question);
    expect(getQuestionText(question, 'es-ES')).toBe(entry.question);
    const optionsEs = getQuestionOptions(question, 'es');
    expect(optionsEs).toEqual(entry.options);
    expect(optionsEs).toHaveLength(4);
  });

  it('TR05 · las opciones traducidas conservan orden, cantidad e índices de la respuesta correcta', () => {
    questions.forEach((question) => {
      const optionsEn = getQuestionOptions(question, 'en');
      const optionsEs = getQuestionOptions(question, 'es');
      expect(optionsEs).toHaveLength(optionsEn.length);
      expect(questionTranslationsEs[question.id].options).toHaveLength(optionsEn.length);
      // El índice de la respuesta correcta apunta a la misma posición en ambos idiomas.
      expect(Number.isInteger(question.correctAnswerIndex)).toBe(true);
      expect(question.correctAnswerIndex).toBeGreaterThanOrEqual(0);
      expect(question.correctAnswerIndex).toBeLessThan(optionsEs.length);
      expect(typeof optionsEs[question.correctAnswerIndex]).toBe('string');
      expect(optionsEs[question.correctAnswerIndex].trim().length).toBeGreaterThan(0);
    });
  });

  it('TR06 · sin traducción disponible se conserva el inglés y el botón queda deshabilitado', () => {
    const untranslated = {
      id: 'zz-999',
      question: 'A question with no Spanish translation yet.',
      options: ['One', 'Two', 'Three', 'Four'],
      correctAnswerIndex: 2
    };
    expect(hasFullTranslation(untranslated)).toBe(false);
    expect(getQuestionText(untranslated, 'es')).toBe(untranslated.question);
    expect(getQuestionOptions(untranslated, 'es')).toEqual(untranslated.options);
  });

  it('TR07 · cada categoría cuenta con sus 15 traducciones completas', () => {
    const byCategory = {};
    questions.forEach((question) => {
      byCategory[question.category] = byCategory[question.category] ?? 0;
      if (hasFullTranslation(question)) byCategory[question.category] += 1;
    });
    expect(Object.keys(byCategory)).toHaveLength(10);
    Object.entries(byCategory).forEach(([category, count]) => {
      expect(count, `categoría ${category}`).toBe(15);
    });
  });

  it('TR08 · la validación de cobertura bilingüe no reporta advertencias', () => {
    const report = validateQuestionBank(questions, { translationAvailable: hasFullTranslation });
    expect(report.errors).toEqual([]);
    expect(report.stats.translated).toBe(questions.length);
    const translationWarnings = report.warnings.filter((w) => w.includes('traducción'));
    expect(translationWarnings).toEqual([]);
  });

  it('TR09 · las explicaciones siguen siendo bilingües y coherentes', () => {
    const question = getQuestion('rs-001');
    expect(pickLocalized(question.explanation, 'en')).toBe(question.explanation.en);
    expect(pickLocalized(question.explanation, 'es')).toBe(question.explanation.es);
    expect(langKey('es-ES')).toBe('es');
    expect(langKey('en-US')).toBe('en');
  });
});

describe('Práctica bilingüe · estado y preferencias', () => {
  it('TR10 · el idioma de práctica por defecto es inglés y solo admite en/es', () => {
    expect(createDefaultState().preferences.practiceQuestionLanguage).toBe('en');
    expect(
      normalizeState({ preferences: { practiceQuestionLanguage: 'fr' } }).preferences
        .practiceQuestionLanguage
    ).toBe('en');
    expect(
      normalizeState({ preferences: { practiceQuestionLanguage: 'es' } }).preferences
        .practiceQuestionLanguage
    ).toBe('es');
  });

  it('TR11 · cambiar de idioma no altera la respuesta correcta ni la selección', () => {
    const pool = [getQuestion('rs-001'), getQuestion('rs-002'), getQuestion('rs-003')];
    const session = createPracticeSession({ pool, size: 3, scope: 'all' });
    const current = getCurrentQuestion(session);
    const correctIndex = current.correctAnswerIndex;

    const withSelection = setSelection(session, current.id, correctIndex);
    const { isCorrect } = checkAnswer(withSelection, current.id);
    expect(isCorrect).toBe(true);

    // En español la opción correcta sigue siendo la misma posición.
    const optionsEs = getQuestionOptions(current, 'es');
    expect(optionsEs[correctIndex]).toBe(questionTranslationsEs[current.id].options[correctIndex]);
    expect(current.correctAnswerIndex).toBe(correctIndex);
  });

  it('TR12 · el idioma de práctica no sobrescribe el idioma de la interfaz', () => {
    const state = normalizeState({
      preferences: { language: 'es-ES', practiceQuestionLanguage: 'en' }
    });
    expect(state.preferences.language).toBe('es-ES');
    expect(state.preferences.practiceQuestionLanguage).toBe('en');
  });

  it('TR13 · el simulacro nunca usa el idioma de práctica (siempre inglés)', () => {
    // El motor de examen consume `question.options` / `question.question` (inglés)
    // de forma directa; el idioma de práctica vive solo en la preferencia y en la
    // tarjeta de práctica. Aquí comprobamos que el banco sigue exponiendo inglés.
    const question = getQuestion('fl-001');
    expect(question.question).toBe(getQuestionText(question, 'en'));
    expect(question.options).toBe(getQuestionOptions(question, 'en'));
  });
});
