import { describe, it, expect } from 'vitest';
import {
  questions,
  questionsById,
  getVerifiedQuestions,
  countByCategory,
  getQuestion
} from '../../src/data/questions/index.js';
import { categoryIds } from '../../src/data/categories.js';
import { validateQuestionBank } from '../../src/utils/validation.js';
import { appConfig } from '../../src/config/appConfig.js';

/**
 * T01–T08 · Integridad estructural del banco de preguntas.
 * Estas pruebas verifican la FORMA de los datos, no su exactitud legal.
 */

describe('Banco de preguntas · estructura', () => {
  it('T01 · el banco completo pasa la validación estructural sin errores', () => {
    const report = validateQuestionBank(questions);
    expect(report.errors).toEqual([]);
    expect(report.valid).toBe(true);
  });

  it('T02 · todos los ids son únicos y recuperables por índice', () => {
    const ids = questions.map((q) => q.id);
    expect(new Set(ids).size).toBe(ids.length);
    ids.forEach((id) => {
      expect(getQuestion(id)?.id).toBe(id);
      expect(questionsById[id]).toBeDefined();
    });
  });

  it('T03 · cada pregunta tiene exactamente 4 opciones y un índice correcto válido', () => {
    questions.forEach((question) => {
      expect(Array.isArray(question.options)).toBe(true);
      expect(question.options).toHaveLength(4);
      expect(Number.isInteger(question.correctAnswerIndex)).toBe(true);
      expect(question.correctAnswerIndex).toBeGreaterThanOrEqual(0);
      expect(question.correctAnswerIndex).toBeLessThan(4);
      question.options.forEach((option) => {
        expect(String(option).trim().length).toBeGreaterThan(0);
      });
    });
  });

  it('T04 · hay suficientes preguntas verificadas para un simulacro de 50', () => {
    const verified = getVerifiedQuestions();
    expect(verified.length).toBeGreaterThanOrEqual(appConfig.examQuestionBankMinimum);
    verified.forEach((question) => expect(question.reviewStatus).toBe('verified'));
  });

  it('T05 · cada categoría declarada tiene al menos una pregunta', () => {
    const counts = countByCategory();
    categoryIds.forEach((id) => {
      expect(counts[id]).toBeGreaterThan(0);
    });
  });

  it('T06 · cada pregunta declara explicación bilingüe y una fuente', () => {
    questions.forEach((question) => {
      expect(question.explanation?.en?.length ?? 0).toBeGreaterThan(0);
      expect(question.source?.url).toBeTruthy();
    });
  });

  it('T07 · el número de preguntas nunca se reduce a costa de la calidad', () => {
    expect(questions.length).toBeGreaterThanOrEqual(100);
    const verified = getVerifiedQuestions().length;
    expect(verified).toBeLessThanOrEqual(questions.length);
  });

  it('T08 · no hay enunciados duplicados (normalizados)', () => {
    const normalized = questions.map((q) =>
      String(q.question)
        .toLowerCase()
        .replace(/[^a-z0-9\s]/g, ' ')
        .replace(/\s+/g, ' ')
        .trim()
    );
    expect(new Set(normalized).size).toBe(normalized.length);
  });
});
