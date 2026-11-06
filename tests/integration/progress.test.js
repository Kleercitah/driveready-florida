import { describe, it, expect } from 'vitest';
import {
  recordQuestionAnswer,
  toggleFavorite,
  isFavorite,
  setLessonCompleted,
  isLessonCompleted,
  recordPracticeSession,
  recordExamResult,
  getMissedQuestionIds,
  getFavorites,
  saveActiveExam,
  getActiveExam,
  clearActiveExam,
  getPreferences,
  updatePreferences
} from '../../src/services/progressService.js';
import {
  computeGlobalStats,
  computeCategoryStats,
  computeExamCategoryBreakdown,
  computeProgressOverview,
  computeWeakestCategories,
  hasAnyActivity
} from '../../src/services/statisticsService.js';
import { createExamSession, submitExam } from '../../src/engines/examEngine.js';
import { getVerifiedQuestions } from '../../src/data/questions/index.js';

/** T38–T45 · Integración progreso ↔ estadísticas con datos reales. */

describe('Progreso y estadísticas', () => {
  it('T38 · sin actividad no hay datos inventados', () => {
    expect(hasAnyActivity()).toBe(false);
    const stats = computeGlobalStats();
    expect(stats.questionsAnswered).toBe(0);
    expect(stats.globalAccuracy).toBe(0);
    expect(stats.lastScore).toBeNull();
  });

  it('T39 · registrar respuestas actualiza los contadores reales', () => {
    recordQuestionAnswer('rs-001', true);
    recordQuestionAnswer('rs-001', false);
    recordQuestionAnswer('rs-002', true);
    const stats = computeGlobalStats();
    expect(stats.questionsAnswered).toBe(3);
    expect(stats.totalCorrect).toBe(2);
    expect(stats.totalIncorrect).toBe(1);
    expect(stats.uniqueQuestions).toBe(2);
    expect(hasAnyActivity()).toBe(true);
  });

  it('T40 · las estadísticas por categoría derivan del banco real', () => {
    recordQuestionAnswer('rs-001', true);
    recordQuestionAnswer('rs-002', false);
    const categories = computeCategoryStats();
    const roadSigns = categories.find((c) => c.categoryId === 'road-signs');
    expect(roadSigns.answered).toBe(2);
    expect(roadSigns.correct).toBe(1);
    expect(roadSigns.accuracy).toBe(50);
  });

  it('T41 · favoritos y lecciones se persisten y recuperan', () => {
    expect(toggleFavorite('rs-003')).toBe(true);
    expect(isFavorite('rs-003')).toBe(true);
    expect(getFavorites()).toContain('rs-003');
    expect(toggleFavorite('rs-003')).toBe(false);
    expect(isFavorite('rs-003')).toBe(false);

    setLessonCompleted('road-signs', true);
    expect(isLessonCompleted('road-signs')).toBe(true);
    setLessonCompleted('road-signs', false);
    expect(isLessonCompleted('road-signs')).toBe(false);
  });

  it('T42 · las preguntas falladas se recuerdan para el repaso', () => {
    recordQuestionAnswer('rs-001', false);
    recordQuestionAnswer('rs-002', true);
    const missed = getMissedQuestionIds();
    expect(missed).toContain('rs-001');
    expect(missed).not.toContain('rs-002');
  });

  it('T43 · el historial de práctica y simulacros alimenta el resumen', () => {
    recordPracticeSession({ id: 'p1', total: 10, correct: 8, incorrect: 2, finishedAt: new Date().toISOString() });
    const { result } = submitExam(createExamSession({ pool: getVerifiedQuestions() }).session);
    recordExamResult(result);

    const overview = computeProgressOverview();
    expect(overview.history.length).toBe(2);
    expect(overview.averageScore).toBe(result.percentage);
    expect(overview.bestScore).toBe(result.percentage);
    expect(computeGlobalStats().practiceCount).toBe(1);
    expect(computeGlobalStats().examCount).toBe(1);
  });

  it('T44 · el desglose por categoría de un examen usa sus respuestas reales', () => {
    const { session } = createExamSession({ pool: getVerifiedQuestions() });
    const { result } = submitExam(session);
    const breakdown = computeExamCategoryBreakdown(result);
    const totalInBreakdown = breakdown.reduce((sum, row) => sum + row.total, 0);
    expect(totalInBreakdown).toBe(result.total);
  });

  it('T45 · las categorías débiles solo aparecen con datos suficientes', () => {
    expect(computeWeakestCategories()).toEqual([]);
    recordQuestionAnswer('rs-001', false);
    recordQuestionAnswer('rs-002', false);
    recordQuestionAnswer('rs-003', false);
    const weakest = computeWeakestCategories();
    expect(weakest.length).toBeGreaterThan(0);
    expect(weakest[0].accuracy).toBe(0);
  });
});

describe('Sesiones activas y preferencias', () => {
  it('T46 · el simulacro activo se guarda y se puede abandonar', () => {
    const { session } = createExamSession({ pool: getVerifiedQuestions() });
    saveActiveExam(session);
    expect(getActiveExam()?.id).toBe(session.id);
    clearActiveExam();
    expect(getActiveExam()).toBeNull();
  });

  it('T47 · las preferencias se actualizan de forma parcial', () => {
    const before = getPreferences();
    updatePreferences({ timerEnabled: true, timerMinutes: 45 });
    const after = getPreferences();
    expect(after.timerEnabled).toBe(true);
    expect(after.timerMinutes).toBe(45);
    expect(after.language).toBe(before.language);
  });
});
