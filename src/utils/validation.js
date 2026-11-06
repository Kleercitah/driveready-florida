import { categoryIds, difficultyLevels } from '../data/categories.js';
import { normalizeText } from './formatting.js';

/**
 * Validación ESTRUCTURAL del banco de preguntas.
 *
 * Importante: un validador estructural comprueba la forma de los datos
 * (ids, opciones, rangos, campos obligatorios). NO demuestra que el contenido
 * sea jurídicamente correcto. La verificación legal es un proceso editorial
 * separado y se documenta en docs/QUESTION_REVIEW.md.
 */
export function validateQuestionBank(questions, options = {}) {
  const validCategories = options.categoryIds ?? categoryIds;
  const validDifficulties = options.difficultyLevels ?? difficultyLevels;
  const validReviewStatuses = ['verified', 'needs-review'];
  // Predicado opcional que indica si una pregunta tiene traducción completa.
  const translationAvailable = options.translationAvailable ?? null;

  const errors = [];
  const warnings = [];
  const seenIds = new Map();
  const seenNormalized = new Map();
  let translated = 0;

  questions.forEach((question, index) => {
    const where = `[${index}] ${question?.id ?? 'sin-id'}`;

    if (!question || typeof question !== 'object') {
      errors.push(`${where}: la pregunta no es un objeto válido.`);
      return;
    }

    // id
    if (!question.id || typeof question.id !== 'string') {
      errors.push(`${where}: falta el id.`);
    } else if (seenIds.has(question.id)) {
      errors.push(`${where}: id duplicado (también en el índice ${seenIds.get(question.id)}).`);
    } else {
      seenIds.set(question.id, index);
    }

    // category
    if (!validCategories.includes(question.category)) {
      errors.push(`${where}: categoría inválida "${question.category}".`);
    }

    // difficulty
    if (question.difficulty && !validDifficulties.includes(question.difficulty)) {
      warnings.push(`${where}: dificultad desconocida "${question.difficulty}".`);
    }

    // question text
    if (!question.question || String(question.question).trim().length < 8) {
      errors.push(`${where}: enunciado vacío o demasiado corto.`);
    }

    // options
    if (!Array.isArray(question.options)) {
      errors.push(`${where}: falta el arreglo de opciones.`);
    } else {
      if (question.options.length !== 4) {
        errors.push(`${where}: se esperaban 4 opciones y hay ${question.options.length}.`);
      }
      question.options.forEach((opt, i) => {
        if (!opt || String(opt).trim().length === 0) {
          errors.push(`${where}: la opción ${i} está vacía.`);
        }
      });
      const normalizedOptions = question.options.map((o) => normalizeText(o));
      const unique = new Set(normalizedOptions);
      if (unique.size !== normalizedOptions.length) {
        errors.push(`${where}: hay opciones duplicadas.`);
      }
    }

    // correct answer
    if (
      !Number.isInteger(question.correctAnswerIndex) ||
      question.correctAnswerIndex < 0 ||
      (Array.isArray(question.options) && question.correctAnswerIndex >= question.options.length)
    ) {
      errors.push(`${where}: correctAnswerIndex fuera de rango.`);
    }

    // explanations
    if (!question.explanation || !question.explanation.en) {
      errors.push(`${where}: falta la explicación en inglés.`);
    }
    if (!question.explanation || !question.explanation.es) {
      warnings.push(`${where}: falta la explicación en español.`);
    }

    // source
    if (!question.source || !question.source.url) {
      errors.push(`${where}: falta la referencia (source.url).`);
    }

    // review metadata
    if (!question.reviewStatus) {
      errors.push(`${where}: falta reviewStatus.`);
    } else if (!validReviewStatuses.includes(question.reviewStatus)) {
      errors.push(`${where}: reviewStatus inválido "${question.reviewStatus}".`);
    }

    // normalized duplicate detection
    const fingerprint = normalizeText(question.question);
    if (fingerprint) {
      if (seenNormalized.has(fingerprint)) {
        errors.push(
          `${where}: pregunta duplicada (coincide con ${seenNormalized.get(fingerprint)}).`
        );
      } else {
        seenNormalized.set(fingerprint, question.id ?? index);
      }
    }

    // Cobertura de traducción al español (no bloquea el banco: la pregunta se
    // muestra en inglés y el botón queda deshabilitado con un aviso honesto).
    if (translationAvailable) {
      if (translationAvailable(question)) translated += 1;
      else warnings.push(`${where}: sin traducción completa al español (se mostrará en inglés).`);
    }
  });

  const verified = questions.filter((q) => q.reviewStatus === 'verified').length;
  const needsReview = questions.filter((q) => q.reviewStatus === 'needs-review').length;

  return {
    valid: errors.length === 0,
    errors,
    warnings,
    stats: {
      total: questions.length,
      verified,
      needsReview,
      categories: validCategories.length,
      translated: translationAvailable ? translated : null
    }
  };
}

/** Valida la estructura de una lección. */
export function validateLesson(lesson) {
  const errors = [];
  if (!lesson || typeof lesson !== 'object') return { valid: false, errors: ['lección inválida'] };
  if (!lesson.id) errors.push('falta id');
  if (!lesson.title?.en || !lesson.title?.es) errors.push('título incompleto');
  if (!Array.isArray(lesson.sections) || lesson.sections.length < 3) {
    errors.push('se esperaban al menos 3 secciones');
  }
  if (!Array.isArray(lesson.quickCheck)) errors.push('faltan preguntas de comprobación');
  return { valid: errors.length === 0, errors };
}

export default { validateQuestionBank, validateLesson };
