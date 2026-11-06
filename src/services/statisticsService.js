import { getState } from './storage.js';
import { questionsById } from '../data/questions/index.js';
import { categories, categoryIds } from '../data/categories.js';
import { percentage } from '../utils/formatting.js';

/**
 * Servicio de estadísticas. Todos los valores se derivan exclusivamente de
 * datos reales almacenados. Nunca se generan cifras ficticias.
 */

/** Totales globales de respuestas y precisión. */
export function computeGlobalStats() {
  const { questionStats, lessons, activityDays, examHistory, practiceHistory } = getState();

  let answered = 0;
  let correct = 0;
  Object.values(questionStats).forEach((stat) => {
    answered += stat.answered || 0;
    correct += stat.correct || 0;
  });

  const lastExam = examHistory[0] ?? null;

  return {
    questionsAnswered: answered,
    uniqueQuestions: Object.keys(questionStats).length,
    globalAccuracy: answered ? percentage(correct, answered) : 0,
    totalCorrect: correct,
    totalIncorrect: answered - correct,
    lessonsCompleted: lessons.completed.length,
    studyDays: activityDays.length,
    lastScore: lastExam ? lastExam.percentage : null,
    examCount: examHistory.length,
    practiceCount: practiceHistory.length
  };
}

/** Estadísticas por categoría basadas en las respuestas reales. */
export function computeCategoryStats() {
  const { questionStats } = getState();

  const base = {};
  categoryIds.forEach((id) => {
    base[id] = { categoryId: id, answered: 0, correct: 0, wrong: 0, accuracy: 0, uniqueAnswered: 0 };
  });

  Object.entries(questionStats).forEach(([questionId, stat]) => {
    const question = questionsById[questionId];
    if (!question) return;
    const entry = base[question.category];
    if (!entry) return;
    entry.answered += stat.answered || 0;
    entry.correct += stat.correct || 0;
    entry.wrong += stat.wrong || 0;
    entry.uniqueAnswered += 1;
  });

  return categories.map((category) => {
    const entry = base[category.id];
    return {
      ...entry,
      title: category.title,
      number: category.number,
      accuracy: entry.answered ? percentage(entry.correct, entry.answered) : 0
    };
  });
}

/** Rendimiento por categoría de un examen concreto. */
export function computeExamCategoryBreakdown(exam) {
  const map = {};
  categoryIds.forEach((id) => {
    map[id] = { categoryId: id, total: 0, correct: 0, wrong: 0 };
  });

  (exam.answers ?? []).forEach((answer) => {
    const question = questionsById[answer.questionId];
    if (!question) return;
    const entry = map[question.category];
    if (!entry) return;
    entry.total += 1;
    if (answer.correct) entry.correct += 1;
    else entry.wrong += 1;
  });

  return categories.map((category) => {
    const entry = map[category.id];
    return {
      ...entry,
      title: category.title,
      accuracy: entry.total ? percentage(entry.correct, entry.total) : 0
    };
  });
}

/** Resumen completo para la página de progreso. */
export function computeProgressOverview() {
  const state = getState();
  const global = computeGlobalStats();
  const examScores = state.examHistory.map((e) => e.percentage);
  const bestScore = examScores.length ? Math.max(...examScores) : null;
  const averageScore = examScores.length
    ? Math.round(examScores.reduce((a, b) => a + b, 0) / examScores.length)
    : null;

  const history = [
    ...state.practiceHistory.map((p) => ({ ...p, kind: 'practice' })),
    ...state.examHistory.map((e) => ({ ...e, kind: 'exam' }))
  ].sort((a, b) => (a.date < b.date ? 1 : -1));

  return {
    global,
    bestScore,
    averageScore,
    lastScore: global.lastScore,
    categoryStats: computeCategoryStats(),
    history,
    activityDays: [...state.activityDays]
  };
}

/** Categorías más débiles (con datos reales y precisión baja). */
export function computeWeakestCategories(limit = 3) {
  return computeCategoryStats()
    .filter((c) => c.answered >= 3)
    .sort((a, b) => a.accuracy - b.accuracy)
    .slice(0, limit);
}

/** ¿Tiene el usuario algún dato real registrado? */
export function hasAnyActivity() {
  const state = getState();
  return (
    Object.keys(state.questionStats).length > 0 ||
    state.practiceHistory.length > 0 ||
    state.examHistory.length > 0 ||
    state.lessons.completed.length > 0
  );
}

export default {
  computeGlobalStats,
  computeCategoryStats,
  computeExamCategoryBreakdown,
  computeProgressOverview,
  computeWeakestCategories,
  hasAnyActivity
};
