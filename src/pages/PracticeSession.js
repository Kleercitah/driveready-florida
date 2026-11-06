import { appConfig } from '../config/appConfig.js';
import { buildHref } from '../config/routes.js';
import { getCategoryTitle } from '../data/categories.js';
import { questionsById, hasFullTranslation } from '../data/questions/index.js';
import {
  createPracticeSession,
  getCurrentQuestion,
  setSelection,
  checkAnswer,
  isChecked,
  next,
  previous,
  isLastQuestion,
  computeResults,
  finishSession
} from '../engines/quizEngine.js';
import {
  saveActivePractice,
  clearActivePractice,
  getActivePractice,
  recordQuestionAnswer,
  recordPracticeSession,
  isFavorite,
  toggleFavorite,
  getPreferences,
  updatePreferences
} from '../services/progressService.js';
import { escapeHtml, formatPercentValue } from '../utils/formatting.js';
import { alert, badge, button, card, pageHeader, statTile } from '../components/common/ui.js';
import { icon } from '../components/common/icons.js';
import { barChart } from '../components/charts/charts.js';
import { questionCard } from '../components/quiz/questionCard.js';
import { showToast, announce } from '../components/common/toast.js';
import { resolvePracticePool } from './Practice.js';

// Estado en memoria de esta vista (se reinicia al salir de la página).
let activeSession = null;
let finishedSession = null;

if (typeof window !== 'undefined') {
  window.addEventListener('dr:leave-practice', () => {
    activeSession = null;
    finishedSession = null;
  });
}

function sessionSignature(query) {
  return `${query.scope ?? ''}|${query.category ?? ''}|${query.difficulty ?? ''}|${query.size ?? ''}`;
}

/** Recupera o crea la sesión de práctica según la URL y el estado guardado. */
function resolveSession(ctx) {
  const { scope, category, difficulty, size } = ctx.query;

  if (scope) {
    const signature = sessionSignature(ctx.query);
    if (activeSession && activeSession.signature === signature) return activeSession;
    const pool = resolvePracticePool(scope, { categoryId: category, difficulty });
    const session = createPracticeSession({
      pool,
      size: Number(size) || appConfig.practiceSizes[1],
      scope,
      categoryId: category ?? null,
      difficulty: difficulty ?? null
    });
    session.signature = signature;
    saveActivePractice(session);
    activeSession = session;
    finishedSession = null;
    return session;
  }

  if (finishedSession) return finishedSession;
  if (activeSession) return activeSession;

  const stored = getActivePractice();
  if (stored && stored.status === 'active') {
    activeSession = stored;
    return stored;
  }
  return null;
}

function renderResults(session, ctx) {
  const { t, language } = ctx;
  const results = computeResults(session);
  const rows = results.byCategory.map((entry) => ({
    label: getCategoryTitle(entry.categoryId, language),
    value: entry.accuracy,
    display: `${entry.correct}/${entry.total}`
  }));

  return `
    <section class="page">
      ${pageHeader({ title: t('practice.resultsTitle'), subtitle: t('practice.sessionTitle') })}
      <div class="result-hero result-hero--${results.accuracy >= 80 ? 'passed' : 'failed'}">
        <p class="result-hero__badge">
          ${icon(results.accuracy >= 80 ? 'trophy' : 'target', { size: 20 })}
          ${escapeHtml(t('practice.accuracy'))}: ${formatPercentValue(results.accuracy)}
        </p>
        <div class="grid grid--results">
          ${statTile({ label: t('practice.answered'), value: results.answered, iconName: 'list-ordered' })}
          ${statTile({ label: t('common.correct'), value: results.correct, iconName: 'circle-check' })}
          ${statTile({ label: t('common.incorrect'), value: results.incorrect, iconName: 'circle-x' })}
        </div>
      </div>

      <section class="section">
        <h2 class="section__title" style="margin-bottom:var(--space-4)">${escapeHtml(t('results.byCategory'))}</h2>
        ${card({ body: barChart({ rows, emptyMessage: t('dashboard.noCategories') }) })}
      </section>

      <div class="cluster" style="justify-content:center">
        ${button({
          label: t('practice.reviewMistakes'),
          href: buildHref('/review'),
          variant: 'primary',
          iconName: 'rotate-ccw'
        })}
        ${button({
          label: t('practice.newSession'),
          href: buildHref('/practice'),
          variant: 'secondary',
          iconName: 'square-pen'
        })}
      </div>
    </section>
  `;
}

export default {
  render(ctx) {
    const { t, language, params } = ctx;
    const session = resolveSession(ctx);

    if (!session) {
      return `
        <section class="page">
          ${pageHeader({ title: t('practice.sessionTitle'), breadcrumbsHtml: '' })}
          ${alert({ tone: 'info', text: t('practice.noSession') })}
          <div style="margin-top:var(--space-4)">
            ${button({ label: t('practice.backToPractice'), href: buildHref('/practice'), variant: 'primary' })}
          </div>
        </section>
      `;
    }

    if (session.status === 'finished') {
      return renderResults(session, ctx);
    }

    const question = getCurrentQuestion(session);
    if (!question) {
      return `
        <section class="page">
          ${pageHeader({ title: t('practice.sessionTitle') })}
          ${alert({ tone: 'warning', text: t('common.error') })}
        </section>
      `;
    }

    const entry = session.answers[question.id] ?? { selected: null, checked: false };
    // Idioma de las preguntas en práctica (persistente, no afecta al simulacro).
    const questionLanguage = getPreferences().practiceQuestionLanguage === 'es' ? 'es' : 'en';

    return `
      <section class="page quiz-shell">
        <div class="quiz-topbar">
          <div class="quiz-topbar__meta">
            <span class="card__meta">${escapeHtml(t('practice.sessionTitle'))}</span>
            ${badge({ label: t(`common.${question.difficulty}`), variant: 'accent' })}
          </div>
          <button class="btn btn--ghost btn--sm" type="button" data-end-session>
            ${icon('x', { size: 16 })}<span class="btn__label">${escapeHtml(t('common.finish'))}</span>
          </button>
        </div>

        ${questionCard({
          question,
          index: session.currentIndex,
          total: session.questionIds.length,
          selected: entry.selected,
          checked: entry.checked,
          t,
          language,
          questionLanguage,
          translationAvailable: hasFullTranslation(question),
          explanationLanguage: questionLanguage,
          isFavorite: isFavorite(question.id)
        })}

        <div class="quiz-actions">
          <div class="cluster">
            ${button({
              label: t('common.previous'),
              variant: 'ghost',
              size: 'md',
              iconName: 'arrow-left',
              attrs: { 'data-nav-prev': 'true' },
              disabled: session.currentIndex === 0
            })}
          </div>
          <div class="cluster">
            ${
              !entry.checked
                ? button({
                    label: t('practice.confirmAnswer'),
                    variant: 'primary',
                    size: 'md',
                    iconName: 'check',
                    attrs: { 'data-check-answer': 'true' },
                    disabled: entry.selected === null
                  })
                : button({
                    label: isLastQuestion(session) ? t('practice.finishSession') : t('practice.nextQuestion'),
                    variant: 'primary',
                    size: 'md',
                    iconName: isLastQuestion(session) ? 'flag' : 'arrow-right',
                    iconPosition: isLastQuestion(session) ? 'left' : 'right',
                    attrs: { 'data-nav-next': 'true' }
                  })
            }
          </div>
        </div>
      </section>
    `;
  },

  mount(root, ctx) {
    const { t } = ctx;
    const session = activeSession;
    if (!session || session.status !== 'active') return;

    let working = session;
    const question = getCurrentQuestion(working);
    if (!question) return;

    // Selección de opción (sin revelar la respuesta correcta)
    root.querySelectorAll('[data-option-index]').forEach((optionBtn) => {
      optionBtn.addEventListener('click', () => {
        const index = Number(optionBtn.getAttribute('data-option-index'));
        working = setSelection(working, question.id, index);
        activeSession = working;
        saveActivePractice(working);
        root.querySelectorAll('[data-option-index]').forEach((btn) => {
          const btnIndex = Number(btn.getAttribute('data-option-index'));
          btn.classList.toggle('is-selected', btnIndex === index);
          btn.setAttribute('aria-pressed', String(btnIndex === index));
        });
        const checkBtn = root.querySelector('[data-check-answer]');
        if (checkBtn) checkBtn.disabled = false;
      });
    });

    // Comprobar respuesta
    root.querySelector('[data-check-answer]')?.addEventListener('click', () => {
      const { session: checkedSession, isCorrect } = checkAnswer(working, question.id);
      if (isCorrect === null) return;
      working = checkedSession;
      activeSession = working;
      saveActivePractice(working);
      recordQuestionAnswer(question.id, isCorrect);
      announce(isCorrect ? t('a11y.correctAnswerAnnounce') : t('a11y.incorrectAnswerAnnounce'));
      ctx.refresh();
      setTimeout(() => {
        document.querySelector('.feedback')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 60);
    });

    // Marcar como favorita
    root.querySelector('[data-toggle-favorite]')?.addEventListener('click', () => {
      const nowFavorite = toggleFavorite(question.id);
      showToast(nowFavorite ? t('practice.addFavorite') : t('practice.removeFavorite'), 'success');
      ctx.refresh();
    });

    // Mostrar/ocultar traducción de la explicación
    root.querySelector('[data-toggle-translation]')?.addEventListener('click', (event) => {
      const btn = event.currentTarget;
      const text = btn.parentElement.querySelector('.translation__text');
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!expanded));
      if (text) text.hidden = expanded;
    });

    // Cambiar el idioma del enunciado y las opciones (solo contenido visual).
    // Solo se ofrece cuando la pregunta tiene traducción completa y se conserva
    // la selección, la respuesta correcta y las estadísticas (se re-renderiza la
    // vista con el mismo estado de sesión).
    root.querySelector('[data-toggle-question-language]')?.addEventListener('click', () => {
      const next = getPreferences().practiceQuestionLanguage === 'es' ? 'en' : 'es';
      updatePreferences({
        practiceQuestionLanguage: hasFullTranslation(question) ? next : 'en'
      });
      ctx.refresh();
      // Devolvemos el foco al botón para no perder la posición de teclado.
      requestAnimationFrame(() => {
        root.querySelector('[data-toggle-question-language]')?.focus();
      });
    });

    // Navegación
    root.querySelector('[data-nav-prev]')?.addEventListener('click', () => {
      working = previous(working);
      activeSession = working;
      saveActivePractice(working);
      ctx.refresh();
      ctx.scrollToTop();
    });

    root.querySelector('[data-nav-next]')?.addEventListener('click', () => {
      if (isLastQuestion(working)) {
        const { session: finished, results } = finishSession(working);
        finishedSession = finished;
        activeSession = null;
        clearActivePractice();
        recordPracticeSession({
          ...finished,
          total: results.total,
          correct: results.correct,
          incorrect: results.incorrect
        });
        showToast(t('practice.resultsTitle'), 'success');
        ctx.refresh();
        return;
      }
      working = next(working);
      activeSession = working;
      saveActivePractice(working);
      ctx.refresh();
      ctx.scrollToTop();
    });

    // Finalizar anticipadamente
    root.querySelector('[data-end-session]')?.addEventListener('click', () => {
      const { session: finished, results } = finishSession(working);
      finishedSession = finished;
      activeSession = null;
      clearActivePractice();
      recordPracticeSession({
        ...finished,
        total: results.total,
        correct: results.correct,
        incorrect: results.incorrect
      });
      ctx.refresh();
    });

    // Traducción accesible para el contexto de la pregunta
    root.setAttribute('data-session-id', working.id);
  }
};

export { activeSession, finishedSession };
