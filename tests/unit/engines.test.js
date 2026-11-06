import { describe, it, expect } from 'vitest';
import {
  createPracticeSession,
  setSelection,
  checkAnswer,
  computeResults,
  finishSession,
  shuffle
} from '../../src/engines/quizEngine.js';
import {
  createExamSession,
  setExamAnswer,
  toggleFlag,
  countAnswered,
  countUnanswered,
  submitExam,
  timeRemaining,
  isTimeUp,
  isPassing
} from '../../src/engines/examEngine.js';
import { questions, getVerifiedQuestions } from '../../src/data/questions/index.js';
import { appConfig } from '../../src/config/appConfig.js';

/** T16–T26 · Motores puros de práctica y simulacro. */

describe('Motor de práctica', () => {
  it('T16 · crea una sesión con el tamaño solicitado y preguntas únicas', () => {
    const session = createPracticeSession({ pool: questions, size: 10 });
    expect(session.questionIds).toHaveLength(10);
    expect(new Set(session.questionIds).size).toBe(10);
    expect(session.status).toBe('active');
  });

  it('T17 · no revela la corrección al seleccionar una opción', () => {
    const session = createPracticeSession({ pool: questions, size: 1 });
    const questionId = session.questionIds[0];
    const next = setSelection(session, questionId, 2);
    expect(next.answers[questionId].selected).toBe(2);
    expect(next.answers[questionId].checked).toBe(false);
  });

  it('T18 · comprobar la respuesta marca checked y calcula isCorrect', () => {
    const session = createPracticeSession({ pool: questions, size: 1 });
    const questionId = session.questionIds[0];
    const question = questions.find((q) => q.id === questionId);
    const withSelection = setSelection(session, questionId, question.correctAnswerIndex);
    const { session: checked, isCorrect } = checkAnswer(withSelection, questionId);
    expect(isCorrect).toBe(true);
    expect(checked.answers[questionId].checked).toBe(true);
  });

  it('T19 · no permite cambiar la opción después de comprobar', () => {
    const session = createPracticeSession({ pool: questions, size: 1 });
    const questionId = session.questionIds[0];
    const withSelection = setSelection(session, questionId, 0);
    const { session: checked } = checkAnswer(withSelection, questionId);
    const recomputed = setSelection(checked, questionId, 3);
    expect(recomputed.answers[questionId].selected).toBe(0);
  });

  it('T20 · los resultados se calculan solo con datos reales', () => {
    const session = createPracticeSession({ pool: questions, size: 4 });
    const a = session.questionIds[0];
    let working = setSelection(session, a, questions.find((q) => q.id === a).correctAnswerIndex);
    working = checkAnswer(working, a).session;
    const results = computeResults(working);
    expect(results.total).toBe(4);
    expect(results.answered).toBe(1);
    expect(results.correct).toBe(1);
    expect(results.unanswered).toBe(3);
  });

  it('T21 · shuffle no muta el arreglo original', () => {
    const original = [1, 2, 3, 4, 5];
    const copy = [...original];
    shuffle(original, () => 0.5);
    expect(original).toEqual(copy);
  });

  it('T22 · finishSession marca la sesión como terminada', () => {
    const session = createPracticeSession({ pool: questions, size: 2 });
    const { session: finished } = finishSession(session);
    expect(finished.status).toBe('finished');
    expect(finished.finishedAt).toBeTruthy();
  });
});

describe('Motor del simulacro', () => {
  it('T23 · selecciona 50 preguntas únicas y verificadas', () => {
    const { session, error } = createExamSession({ pool: getVerifiedQuestions() });
    expect(error).toBeNull();
    expect(session.questionIds).toHaveLength(appConfig.examTotalQuestions);
    expect(new Set(session.questionIds).size).toBe(appConfig.examTotalQuestions);
  });

  it('T24 · no inicia el simulacro si no hay suficientes preguntas verificadas', () => {
    const tinyPool = getVerifiedQuestions().slice(0, 10);
    const { session, error } = createExamSession({ pool: tinyPool });
    expect(session).toBeNull();
    expect(error).toBe('not-enough-questions');
  });

  it('T25 · registrar respuestas, banderas y conteos', () => {
    const { session } = createExamSession({ pool: getVerifiedQuestions() });
    const id = session.questionIds[0];
    let working = setExamAnswer(session, id, 1);
    working = toggleFlag(working, id);
    expect(countAnswered(working)).toBe(1);
    expect(countUnanswered(working)).toBe(49);
    expect(working.flags).toContain(id);
  });

  it('T26 · aprobar requiere 40 de 50 correctas (80%)', () => {
    const { session } = createExamSession({ pool: getVerifiedQuestions() });
    // Respondemos correctamente las primeras 40 y dejamos el resto sin responder.
    let working = session;
    session.questionIds.forEach((id, index) => {
      if (index < appConfig.examPassingCorrect) {
        const question = questions.find((q) => q.id === id);
        working = setExamAnswer(working, id, question.correctAnswerIndex);
      }
    });
    const { result } = submitExam(working);
    expect(result.correct).toBe(appConfig.examPassingCorrect);
    expect(result.passed).toBe(true);
    expect(result.unanswered).toBe(appConfig.examTotalQuestions - appConfig.examPassingCorrect);
  });

  it('T27 · las preguntas sin responder cuentan como incorrectas', () => {
    const { session } = createExamSession({ pool: getVerifiedQuestions() });
    const { result } = submitExam(session);
    expect(result.answered).toBe(0);
    expect(result.correct).toBe(0);
    expect(result.incorrect).toBe(appConfig.examTotalQuestions);
    expect(result.passed).toBe(false);
  });

  it('T28 · el temporizador calcula el tiempo restante y su expiración', () => {
    const { session } = createExamSession({
      pool: getVerifiedQuestions(),
      timerEnabled: true,
      timerMinutes: 30
    });
    const now = new Date(session.startedAt).getTime();
    expect(timeRemaining(session, now)).toBe(30 * 60000);
    expect(isTimeUp(session, now + 31 * 60000)).toBe(true);
  });

  it('T29 · isPassing aplica el umbral oficial de 40/50', () => {
    expect(isPassing(40)).toBe(true);
    expect(isPassing(39)).toBe(false);
  });
});
