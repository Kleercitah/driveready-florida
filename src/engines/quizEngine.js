import { createId } from '../utils/dates.js';
import { questionsById } from '../data/questions/index.js';
import { percentage } from '../utils/formatting.js';

/**
 * Motor de práctica. Funciones puras que reciben y devuelven un objeto de sesión
 * serializable, de modo que las sesiones puedan guardarse y retomarse.
 *
 * Forma de la sesión:
 * {
 *   id, type: 'practice', scope, categoryId, difficulty,
 *   questionIds: [...], answers: { [questionId]: { selected, checked } },
 *   currentIndex, startedAt, finishedAt, status: 'active' | 'finished'
 * }
 */

/** Barajado Fisher-Yates no mutante. */
export function shuffle(list, random = Math.random) {
  const copy = [...list];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

/**
 * Crea una sesión de práctica.
 * `pool` es el conjunto de preguntas candidatas (ya filtradas por el llamador).
 */
export function createPracticeSession({
  pool,
  size,
  scope = 'all',
  categoryId = null,
  difficulty = null,
  random = Math.random
}) {
  const unique = dedupe(pool);
  const selected = shuffle(unique, random).slice(0, Math.min(size, unique.length));

  return {
    id: createId('practice'),
    type: 'practice',
    scope,
    categoryId,
    difficulty,
    questionIds: selected.map((q) => q.id),
    answers: {},
    currentIndex: 0,
    startedAt: new Date().toISOString(),
    finishedAt: null,
    status: 'active',
    total: selected.length
  };
}

function dedupe(list) {
  const seen = new Set();
  return list.filter((item) => {
    if (!item || seen.has(item.id)) return false;
    seen.add(item.id);
    return true;
  });
}

export function getCurrentQuestion(session) {
  const id = session.questionIds[session.currentIndex];
  return questionsById[id] ?? null;
}

/** Guarda la opción seleccionada sin revelar la respuesta correcta. */
export function setSelection(session, questionId, optionIndex) {
  const current = session.answers[questionId] ?? { selected: null, checked: false };
  if (current.checked) return session; // no se puede cambiar después de comprobar
  return {
    ...session,
    answers: {
      ...session.answers,
      [questionId]: { selected: optionIndex, checked: false }
    }
  };
}

/** Comprueba la respuesta actual y devuelve { session, isCorrect }. */
export function checkAnswer(session, questionId) {
  const question = questionsById[questionId];
  const entry = session.answers[questionId];
  if (!question || !entry || entry.selected === null || entry.selected === undefined) {
    return { session, isCorrect: null };
  }
  if (entry.checked) {
    return { session, isCorrect: entry.selected === question.correctAnswerIndex };
  }
  const isCorrect = entry.selected === question.correctAnswerIndex;
  return {
    session: {
      ...session,
      answers: {
        ...session.answers,
        [questionId]: { ...entry, checked: true }
      }
    },
    isCorrect
  };
}

export function isAnswered(session, questionId) {
  const entry = session.answers[questionId];
  return Boolean(entry) && entry.selected !== null && entry.selected !== undefined;
}

export function isChecked(session, questionId) {
  return Boolean(session.answers[questionId]?.checked);
}

export function goTo(session, index) {
  const clamped = Math.max(0, Math.min(index, session.questionIds.length - 1));
  return { ...session, currentIndex: clamped };
}

export function next(session) {
  return goTo(session, session.currentIndex + 1);
}

export function previous(session) {
  return goTo(session, session.currentIndex - 1);
}

export function isLastQuestion(session) {
  return session.currentIndex >= session.questionIds.length - 1;
}

export function canFinish(session) {
  return session.questionIds.every((id) => isChecked(session, id));
}

/** Finaliza la sesión y calcula los resultados reales. */
export function finishSession(session) {
  const finished = {
    ...session,
    status: 'finished',
    finishedAt: new Date().toISOString()
  };
  return { session: finished, results: computeResults(finished) };
}

export function computeResults(session) {
  const byCategory = {};
  let correct = 0;
  let incorrect = 0;
  let answered = 0;

  session.questionIds.forEach((questionId) => {
    const question = questionsById[questionId];
    const entry = session.answers[questionId];
    if (!question) return;

    byCategory[question.category] = byCategory[question.category] ?? {
      categoryId: question.category,
      total: 0,
      correct: 0,
      incorrect: 0
    };
    byCategory[question.category].total += 1;

    if (entry && entry.selected !== null && entry.selected !== undefined) {
      answered += 1;
      if (entry.selected === question.correctAnswerIndex) {
        correct += 1;
        byCategory[question.category].correct += 1;
      } else {
        incorrect += 1;
        byCategory[question.category].incorrect += 1;
      }
    }
  });

  return {
    total: session.questionIds.length,
    answered,
    correct,
    incorrect,
    unanswered: session.questionIds.length - answered,
    accuracy: percentage(correct, session.questionIds.length),
    byCategory: Object.values(byCategory).map((c) => ({
      ...c,
      accuracy: c.total ? percentage(c.correct, c.total) : 0
    }))
  };
}

export default {
  shuffle,
  createPracticeSession,
  getCurrentQuestion,
  setSelection,
  checkAnswer,
  isAnswered,
  isChecked,
  goTo,
  next,
  previous,
  isLastQuestion,
  canFinish,
  finishSession,
  computeResults
};
