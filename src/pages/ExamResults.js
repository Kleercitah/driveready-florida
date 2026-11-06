import { buildHref } from '../config/routes.js';
import { getState } from '../services/storage.js';
import { computeExamCategoryBreakdown } from '../services/statisticsService.js';
import { questionsById, getQuestionText, getQuestionOptions, hasFullTranslation } from '../data/questions/index.js';
import { getCategoryTitle } from '../data/categories.js';
import { pickLocalized, langKey } from '../i18n/index.js';
import { escapeHtml, formatPercentValue } from '../utils/formatting.js';
import { formatDate, formatDuration } from '../utils/dates.js';
import { icon } from '../components/common/icons.js';
import { alert, button, card, badge, pageHeader, statTile } from '../components/common/ui.js';
import { barChart } from '../components/charts/charts.js';

const LETTERS = ['A', 'B', 'C', 'D'];

/**
 * Idioma de la revisión posterior al simulacro. El simulacro en sí va siempre en
 * inglés; aquí, ya entregado, el estudiante puede consultar el español. El valor
 * por defecto es inglés y no depende del idioma de la interfaz.
 */
let reviewLanguage = 'en';
let reviewResultId = null;

/** Busca un resultado por id en el historial real del usuario. */
function findResult(resultId) {
  const history = getState().examHistory ?? [];
  return history.find((entry) => entry.id === resultId) ?? null;
}

function renderReviewItem(answer, t, language, explanationLanguage, questionLanguage) {
  const question = questionsById[answer.questionId];

  if (!question) {
    return `
      <li class="review-item">
        <p class="review-item__question">${escapeHtml(answer.questionId)}</p>
        <p class="text-muted">${escapeHtml(t('results.resultNotFound'))}</p>
      </li>
    `;
  }

  const displayOptions = getQuestionOptions(question, questionLanguage);
  const isSpanish = langKey(questionLanguage) === 'es';

  const yourAnswer =
    answer.selected === null || answer.selected === undefined
      ? `<p class="review-answer review-answer--empty">${icon('circle-help', { size: 15 })} ${escapeHtml(
          t('results.noAnswer')
        )}</p>`
      : `<p class="review-answer ${answer.correct ? 'review-answer--correct' : 'review-answer--wrong'}">
           ${icon(answer.correct ? 'circle-check' : 'circle-x', { size: 15 })}
           <span><strong>${escapeHtml(t('results.yourAnswer'))}:</strong> ${escapeHtml(
             displayOptions[answer.selected] ?? '—'
           )}</span>
         </p>`;

  const correctAnswer = `
    <p class="review-answer review-answer--correct">
      ${icon('check', { size: 15 })}
      <span><strong>${escapeHtml(t('results.correctAnswer'))}:</strong> ${escapeHtml(
        displayOptions[question.correctAnswerIndex] ?? '—'
      )}</span>
    </p>
  `;

  const explanation = pickLocalized(question.explanation, explanationLanguage);
  const translation = pickLocalized(
    question.explanation,
    langKey(explanationLanguage) === 'en' ? 'es' : 'en'
  );

  return `
    <li class="review-item" id="review-${escapeHtml(answer.questionId)}">
      <div class="review-item__head">
        <span class="badge badge--neutral">${escapeHtml(
          getCategoryTitle(question.category, language)
        )}</span>
        ${badge({
          label: answer.correct ? t('common.correct') : t('common.incorrect'),
          variant: answer.correct ? 'success' : 'error',
          iconName: answer.correct ? 'circle-check' : 'circle-x'
        })}
      </div>
      <p class="review-item__question" ${isSpanish ? 'lang="es"' : ''}>${escapeHtml(
        getQuestionText(question, questionLanguage)
      )}</p>
      <div class="review-item__answers">
        ${yourAnswer}
        ${correctAnswer}
      </div>
      ${
        explanation
          ? `<div class="translation" style="margin-top:var(--space-3)">
               <p style="margin:0 0 var(--space-2)" ${langKey(explanationLanguage) === 'es' ? 'lang="es"' : ''}><strong>${escapeHtml(
                 t('common.explanation')
               )}:</strong> ${escapeHtml(explanation)}</p>
               ${
                 langKey(explanationLanguage) !== 'en' && translation
                   ? `<details><summary>${escapeHtml(t('common.english'))}</summary><p style="margin:var(--space-2) 0 0">${escapeHtml(
                       translation
                     )}</p></details>`
                   : ''
               }
             </div>`
          : ''
      }
    </li>
  `;
}

export default {
  render(ctx) {
    const { t, params, language } = ctx;

    const result = findResult(params.resultId);

    if (!result) {
      return `
        <section class="page">
          ${pageHeader({ title: t('results.title') })}
          ${alert({ tone: 'warning', title: t('results.resultNotFound'), text: t('results.resultNotFound') })}
          <div class="cluster" style="margin-top:var(--space-4)">
            ${button({ label: t('results.tryAnother'), href: buildHref('/exam'), variant: 'primary', iconName: 'play' })}
            ${button({ label: t('results.backToDashboard'), href: buildHref('/'), variant: 'ghost', iconName: 'house' })}
          </div>
        </section>
      `;
    }

    // Tras entregar el simulacro se permite consultar el español. El examen en sí
    // siempre se realizó en inglés; aquí el idioma es solo de lectura.
    // Al abrir un resultado distinto, la revisión vuelve a inglés por defecto.
    if (params.resultId !== reviewResultId) {
      reviewResultId = params.resultId;
      reviewLanguage = 'en';
    }
    const questionLanguage = reviewLanguage;
    const explanationLanguage = reviewLanguage;
    const breakdown = computeExamCategoryBreakdown(result);

    const heroClass = result.passed ? 'result-hero--passed' : 'result-hero--failed';
    const heroIcon = result.passed ? 'trophy' : 'target';
    const heroTitle = result.passed ? t('results.passed') : t('results.needsPractice');

    const hero = `
      <div class="result-hero ${heroClass}">
        <span class="result-hero__badge">
          ${icon(heroIcon, { size: 20 })} ${escapeHtml(heroTitle)}
        </span>
        <p class="result-hero__score">${escapeHtml(formatPercentValue(result.percentage))}</p>
        <p class="result-hero__message">${escapeHtml(heroTitle)}</p>
      </div>
    `;

    const tiles = `
      <div class="grid grid--results" style="margin-bottom:var(--space-6)">
        ${statTile({
          label: t('results.correctAnswers'),
          value: result.correct,
          iconName: 'circle-check',
          variant: 'success'
        })}
        ${statTile({
          label: t('results.incorrectAnswers'),
          value: result.incorrect,
          iconName: 'circle-x',
          variant: 'danger'
        })}
        ${statTile({
          label: t('results.unansweredQuestions'),
          value: result.unanswered,
          iconName: 'circle-help'
        })}
        ${statTile({
          label: t('results.finalPercentage'),
          value: formatPercentValue(result.percentage),
          iconName: 'target'
        })}
      </div>
    `;

    const meta = `
      <div class="cluster" style="margin-bottom:var(--space-6); gap:var(--space-4); color:var(--text-muted); font-size:var(--fs-sm)">
        <span>${icon('calendar', { size: 15 })} ${escapeHtml(t('results.completedOn'))}: ${escapeHtml(
          formatDate(result.submittedAt ?? result.date, language)
        )}</span>
        <span>${icon('clock', { size: 15 })} ${escapeHtml(t('results.timeSpent'))}: ${escapeHtml(
          formatDuration(result.timeSpentMs)
        )}</span>
        ${result.autoSubmitted ? badge({ label: t('exam.timeUp'), variant: 'warning' }) : ''}
      </div>
    `;

    const rows = breakdown
      .filter((row) => row.total > 0)
      .map((row) => ({
        label: getCategoryTitle(row.categoryId, language),
        value: row.accuracy,
        display: `${row.correct}/${row.total}`
      }));

    const categorySection = card({
      body: `
        <h2 class="card__title">${escapeHtml(t('results.byCategory'))}</h2>
        ${barChart({ rows, emptyMessage: t('progress.historyEmpty') })}
      `
    });

    const reviewItems = (result.answers ?? [])
      .map((answer) => renderReviewItem(answer, t, language, explanationLanguage, questionLanguage))
      .join('');

    const reviewHasTranslation = (result.answers ?? []).some(
      (answer) => questionsById[answer.questionId] && hasFullTranslation(answer.questionId)
    );
    const isSpanishReview = langKey(reviewLanguage) === 'es';

    const reviewSection = `
      <section id="exam-review" style="margin-top:var(--space-6)">
        <div class="section__head">
          <h2 class="section__title">${escapeHtml(t('results.reviewAnswers'))}</h2>
          ${
            reviewHasTranslation
              ? `<div class="quiz-lang" style="margin-bottom:0">
                   <button class="lang-toggle" type="button" data-toggle-review-language
                           aria-pressed="${isSpanishReview}"
                           aria-label="${escapeHtml(
                             isSpanishReview ? t('common.switchToEnglish') : t('common.switchToSpanish')
                           )}">
                     ${icon('languages', { size: 16 })}
                     <span class="lang-toggle__label">${escapeHtml(
                       isSpanishReview ? t('common.showInEnglish') : t('common.viewInSpanish')
                     )}</span>
                   </button>
                 </div>`
              : ''
          }
        </div>
        <ul class="list-plain" style="list-style:none;padding:0;margin:0">${reviewItems}</ul>
      </section>
    `;

    const actions = `
      <div class="result-actions">
        ${button({
          label: t('results.reviewAnswers'),
          variant: 'secondary',
          iconName: 'search',
          attrs: { 'data-scroll-review': 'true' }
        })}
        ${button({ label: t('results.tryAnother'), href: buildHref('/exam'), variant: 'primary', iconName: 'rotate-ccw' })}
        ${button({ label: t('results.backToDashboard'), href: buildHref('/'), variant: 'ghost', iconName: 'house' })}
      </div>
    `;

    return `
      <section class="page">
        ${pageHeader({
          title: t('results.title'),
          subtitle: t('results.threshold')
        })}
        ${hero}
        ${actions}
        ${meta}
        ${tiles}
        <div style="margin-bottom:var(--space-6)">${categorySection}</div>
        ${reviewSection}
      </section>
    `;
  },

  mount(root, ctx) {
    root.querySelector('[data-scroll-review]')?.addEventListener('click', () => {
      root.querySelector('#exam-review')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });

    // Cambiar el idioma de la revisión (solo lectura). No altera el resultado,
    // las respuestas ni las estadísticas ya guardadas.
    root.querySelector('[data-toggle-review-language]')?.addEventListener('click', () => {
      reviewLanguage = reviewLanguage === 'es' ? 'en' : 'es';
      ctx?.refresh?.();
      requestAnimationFrame(() => {
        root.querySelector('[data-toggle-review-language]')?.focus();
      });
    });
  }
};
