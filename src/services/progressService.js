import { updateState, getState, recordActivityDay, resetState } from './storage.js';

/**
 * Servicio de progreso: registra respuestas, lecciones, favoritas y sesiones.
 * Cada mutación actualiza el estado persistido y dispara a los suscriptores.
 */

/** Registra una respuesta de práctica y actualiza contadores por pregunta. */
export function recordQuestionAnswer(questionId, isCorrect) {
  recordActivityDay();
  updateState((draft) => {
    const stat = draft.questionStats[questionId] ?? {
      answered: 0,
      correct: 0,
      wrong: 0,
      lastCorrect: null,
      lastAnsweredAt: null
    };
    stat.answered += 1;
    if (isCorrect) stat.correct += 1;
    else stat.wrong += 1;
    stat.lastCorrect = Boolean(isCorrect);
    stat.lastAnsweredAt = new Date().toISOString();
    draft.questionStats[questionId] = stat;
    return draft;
  });
}

/** Alterna una pregunta como favorita. Devuelve el nuevo estado. */
export function toggleFavorite(questionId) {
  let isFavorite = false;
  updateState((draft) => {
    if (draft.favorites.includes(questionId)) {
      draft.favorites = draft.favorites.filter((id) => id !== questionId);
      isFavorite = false;
    } else {
      draft.favorites.push(questionId);
      isFavorite = true;
    }
    return draft;
  });
  return isFavorite;
}

export function isFavorite(questionId) {
  return getState().favorites.includes(questionId);
}

export function getFavorites() {
  return [...getState().favorites];
}

/** Marca o desmarca una lección como completada. */
export function setLessonCompleted(lessonId, completed) {
  updateState((draft) => {
    const set = new Set(draft.lessons.completed);
    if (completed) {
      set.add(lessonId);
      if (!draft.activityDays.includes(todayKey())) draft.activityDays.push(todayKey());
    } else {
      set.delete(lessonId);
    }
    draft.lessons.completed = Array.from(set);
    return draft;
  });
}

export function isLessonCompleted(lessonId) {
  return getState().lessons.completed.includes(lessonId);
}

export function getCompletedLessons() {
  return [...getState().lessons.completed];
}

/** Registra una sesión de práctica terminada. */
export function recordPracticeSession(session) {
  recordActivityDay();
  const entry = {
    id: session.id,
    type: 'practice',
    date: session.finishedAt ?? new Date().toISOString(),
    scope: session.scope ?? 'all',
    categoryId: session.categoryId ?? null,
    total: session.total,
    correct: session.correct,
    incorrect: session.incorrect,
    questionIds: session.questionIds ?? []
  };
  updateState((draft) => {
    draft.practiceHistory.unshift(entry);
    if (draft.practiceHistory.length > 200) draft.practiceHistory.length = 200;
    return draft;
  });
  return entry;
}

/** Registra el resultado de un simulacro terminado. */
export function recordExamResult(result) {
  recordActivityDay();
  updateState((draft) => {
    draft.examHistory.unshift(result);
    if (draft.examHistory.length > 100) draft.examHistory.length = 100;
    return draft;
  });
  return result;
}

/** Estadística individual de una pregunta. */
export function getQuestionStat(questionId) {
  return getState().questionStats[questionId] ?? null;
}

export function getAllQuestionStats() {
  return { ...getState().questionStats };
}

/** Ids de preguntas falladas (último intento incorrecto). */
export function getMissedQuestionIds(limit = 50) {
  const stats = getState().questionStats;
  return Object.entries(stats)
    .filter(([, s]) => s.lastCorrect === false)
    .sort((a, b) => (a[1].lastAnsweredAt < b[1].lastAnsweredAt ? 1 : -1))
    .slice(0, limit)
    .map(([id]) => id);
}

/** Ids de preguntas nunca respondidas. */
export function getUnansweredQuestionIds(allIds) {
  const stats = getState().questionStats;
  return allIds.filter((id) => !stats[id]);
}

/** Guarda la sesión de práctica activa (permite retomarla). */
export function saveActivePractice(session) {
  updateState((draft) => {
    draft.activePractice = session;
    return draft;
  });
}

export function getActivePractice() {
  return getState().activePractice;
}

export function clearActivePractice() {
  updateState((draft) => {
    draft.activePractice = null;
    return draft;
  });
}

/** Guarda el simulacro activo. */
export function saveActiveExam(exam) {
  updateState((draft) => {
    draft.activeExam = exam;
    return draft;
  });
}

export function getActiveExam() {
  return getState().activeExam;
}

export function clearActiveExam() {
  updateState((draft) => {
    draft.activeExam = null;
    return draft;
  });
}

export function markWelcomeSeen() {
  updateState((draft) => {
    draft.welcome.seen = true;
    return draft;
  });
}

export function hasSeenWelcome() {
  return Boolean(getState().welcome.seen);
}

export function setWelcomeSeen(value) {
  updateState((draft) => {
    draft.welcome.seen = Boolean(value);
    return draft;
  });
}

export function getPreferences() {
  return { ...getState().preferences };
}

export function updatePreferences(partial) {
  updateState((draft) => {
    draft.preferences = { ...draft.preferences, ...partial };
    return draft;
  });
  return getPreferences();
}

export function resetAll() {
  return resetState();
}

function todayKey() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(
    d.getDate()
  ).padStart(2, '0')}`;
}

export default {
  recordQuestionAnswer,
  toggleFavorite,
  isFavorite,
  getFavorites,
  setLessonCompleted,
  isLessonCompleted,
  getCompletedLessons,
  recordPracticeSession,
  recordExamResult,
  getQuestionStat,
  getAllQuestionStats,
  getMissedQuestionIds,
  getUnansweredQuestionIds,
  saveActivePractice,
  getActivePractice,
  clearActivePractice,
  saveActiveExam,
  getActiveExam,
  clearActiveExam,
  markWelcomeSeen,
  hasSeenWelcome,
  setWelcomeSeen,
  getPreferences,
  updatePreferences,
  resetAll
};
