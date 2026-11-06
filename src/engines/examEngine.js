import { appConfig } from '../config/appConfig.js';
import { createId } from '../utils/dates.js';
import { questionsById } from '../data/questions/index.js';
import { categoryIds } from '../data/categories.js';
import { percentage } from '../utils/formatting.js';
import { shuffle } from './quizEngine.js';

/**
 * Motor del simulacro Class E.
 *
 * Forma de la sesión:
 * {
 *   id, type: 'exam', questionIds: [...], answers: { [questionId]: index },
 *   flags: [...], currentIndex, startedAt, status: 'active' | 'submitted',
 *   timer: { enabled, minutes, expiresAt }, distribution: {...}
 * }
 */

/** ¿Hay suficientes preguntas verificadas para un simulacro completo? */
export function hasEnoughQuestions(pool, required = appConfig.examQuestionBankMinimum) {
  const unique = new Set(pool.map((q) => q.id));
  return unique.size >= required;
}

/**
 * Selecciona `total` preguntas distintas repartidas por categorías.
 * La distribución es una configuración interna de DriveReady y NO reproduce la
 * distribución del examen oficial.
 */
export function selectBalancedQuestions(pool, total, random = Math.random) {
  const unique = [];
  const seen = new Set();
  pool.forEach((q) => {
    if (q && !seen.has(q.id)) {
      seen.add(q.id);
      unique.push(q);
    }
  });

  const byCategory = {};
  categoryIds.forEach((id) => {
    byCategory[id] = [];
  });
  unique.forEach((q) => {
    if (!byCategory[q.category]) byCategory[q.category] = [];
    byCategory[q.category].push(q);
  });

  const shuffledGroups = {};
  Object.entries(byCategory).forEach(([id, list]) => {
    shuffledGroups[id] = shuffle(list, random);
  });

  const categoryOrder = shuffle(categoryIds.filter((id) => shuffledGroups[id].length > 0), random);
  const base = Math.floor(total / categoryOrder.length);
  const remainder = total % categoryOrder.length;
  const selected = [];
  const selectedIds = new Set();

  categoryOrder.forEach((id, index) => {
    const quota = base + (index < remainder ? 1 : 0);
    shuffledGroups[id].slice(0, quota).forEach((q) => {
      selected.push(q);
      selectedIds.add(q.id);
    });
  });

  if (selected.length < total) {
    const rest = shuffle(
      unique.filter((q) => !selectedIds.has(q.id)),
      random
    );
    for (const q of rest) {
      if (selected.length >= total) break;
      selected.push(q);
      selectedIds.add(q.id);
    }
  }

  const distribution = {};
  selected.forEach((q) => {
    distribution[q.category] = (distribution[q.category] ?? 0) + 1;
  });

  return { questions: shuffle(selected, random).slice(0, total), distribution };
}

/** Crea la sesión de simulacro. Devuelve { session, error }. */
export function createExamSession({
  pool,
  total = appConfig.examTotalQuestions,
  timerEnabled = false,
  timerMinutes = appConfig.practiceTimerDefaultMinutes,
  random = Math.random
}) {
  if (!hasEnoughQuestions(pool, total)) {
    return { session: null, error: 'not-enough-questions', available: new Set(pool.map((q) => q.id)).size };
  }

  const { questions, distribution } = selectBalancedQuestions(pool, total, random);
  const startedAt = new Date();

  const session = {
    id: createId('exam'),
    type: 'exam',
    questionIds: questions.map((q) => q.id),
    answers: {},
    flags: [],
    currentIndex: 0,
    startedAt: startedAt.toISOString(),
    status: 'active',
    total: questions.length,
    timer: {
      enabled: Boolean(timerEnabled),
      minutes: Number(timerMinutes) || appConfig.practiceTimerDefaultMinutes,
      expiresAt: timerEnabled
        ? new Date(startedAt.getTime() + (Number(timerMinutes) || 0) * 60000).toISOString()
        : null
    },
    distribution
  };

  return { session, error: null };
}

export function getExamQuestion(session, index = session.currentIndex) {
  const id = session.questionIds[index];
  return questionsById[id] ?? null;
}

export function setExamAnswer(session, questionId, optionIndex) {
  return {
    ...session,
    answers: { ...session.answers, [questionId]: optionIndex }
  };
}

export function clearExamAnswer(session, questionId) {
  const answers = { ...session.answers };
  delete answers[questionId];
  return { ...session, answers };
}

export function toggleFlag(session, questionId) {
  const has = session.flags.includes(questionId);
  return {
    ...session,
    flags: has ? session.flags.filter((id) => id !== questionId) : [...session.flags, questionId]
  };
}

export function gotoExamQuestion(session, index) {
  const clamped = Math.max(0, Math.min(index, session.questionIds.length - 1));
  return { ...session, currentIndex: clamped };
}

export function countAnswered(session) {
  return session.questionIds.filter((id) => session.answers[id] !== undefined).length;
}

export function countUnanswered(session) {
  return session.questionIds.length - countAnswered(session);
}

/** Tiempo restante en ms (o null si el temporizador está desactivado). */
export function timeRemaining(session, now = Date.now()) {
  if (!session.timer?.enabled || !session.timer.expiresAt) return null;
  return new Date(session.timer.expiresAt).getTime() - now;
}

export function isTimeUp(session, now = Date.now()) {
  const remaining = timeRemaining(session, now);
  return remaining !== null && remaining <= 0;
}

/**
 * Entrega el examen y produce un resultado inmutable.
 * Las preguntas sin responder cuentan como incorrectas.
 */
export function submitExam(session, { autoSubmitted = false, now = new Date() } = {}) {
  const answers = session.questionIds.map((questionId) => {
    const question = questionsById[questionId];
    const selected = session.answers[questionId];
    const hasAnswer = selected !== undefined && selected !== null;
    return {
      questionId,
      category: question?.category ?? null,
      selected: hasAnswer ? selected : null,
      correct: hasAnswer && question ? selected === question.correctAnswerIndex : false,
      correctAnswerIndex: question?.correctAnswerIndex ?? null
    };
  });

  const correct = answers.filter((a) => a.correct).length;
  const answered = answers.filter((a) => a.selected !== null).length;
  const total = answers.length;

  const byCategory = {};
  answers.forEach((a) => {
    if (!a.category) return;
    byCategory[a.category] = byCategory[a.category] ?? {
      categoryId: a.category,
      total: 0,
      correct: 0,
      incorrect: 0
    };
    byCategory[a.category].total += 1;
    if (a.correct) byCategory[a.category].correct += 1;
    else byCategory[a.category].incorrect += 1;
  });

  const passed = correct >= appConfig.examPassingCorrect;

  const result = {
    id: session.id.replace('exam_', 'result_'),
    type: 'exam',
    date: now.toISOString(),
    startedAt: session.startedAt,
    submittedAt: now.toISOString(),
    timeSpentMs: now.getTime() - new Date(session.startedAt).getTime(),
    autoSubmitted,
    total,
    answered,
    correct,
    incorrect: total - correct,
    unanswered: total - answered,
    percentage: percentage(correct, total),
    passed,
    passingCorrect: appConfig.examPassingCorrect,
    answers,
    questionIds: [...session.questionIds],
    byCategory: Object.values(byCategory).map((c) => ({
      ...c,
      accuracy: c.total ? percentage(c.correct, c.total) : 0
    })),
    timerEnabled: Boolean(session.timer?.enabled),
    timerMinutes: session.timer?.minutes ?? null
  };

  return {
    result,
    session: { ...session, status: 'submitted', submittedAt: result.submittedAt }
  };
}

/** Comprueba que un resultado cumpla las condiciones para aprobar. */
export function isPassing(correct, total = appConfig.examTotalQuestions) {
  if (total === appConfig.examTotalQuestions) {
    return correct >= appConfig.examPassingCorrect;
  }
  return percentage(correct, total) >= appConfig.examPassingPercentage;
}

export default {
  hasEnoughQuestions,
  selectBalancedQuestions,
  createExamSession,
  getExamQuestion,
  setExamAnswer,
  clearExamAnswer,
  toggleFlag,
  gotoExamQuestion,
  countAnswered,
  countUnanswered,
  timeRemaining,
  isTimeUp,
  submitExam,
  isPassing
};
