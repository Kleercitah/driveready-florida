import { buildHref } from '../config/routes.js';
import {
  getExamQuestion,
  setExamAnswer,
  toggleFlag,
  gotoExamQuestion,
  countAnswered,
  countUnanswered,
  timeRemaining,
  submitExam
} from '../engines/examEngine.js';
import {
  getActiveExam,
  saveActiveExam,
  clearActiveExam,
  recordExamResult
} from '../services/progressService.js';
import { escapeHtml } from '../utils/formatting.js';
import { formatClock } from '../utils/dates.js';
import { icon } from '../components/common/icons.js';
import { alert, button, card, pageHeader, progressBar } from '../components/common/ui.js';
import { confirmDialog } from '../components/common/modal.js';
import { showToast } from '../components/common/toast.js';

const LETTERS = ['A', 'B', 'C', 'D'];

let liveSession = null;
let submittedResult = null;
let timerHandle = null;

function clearTimer() {
  if (timerHandle) {
    clearInterval(timerHandle);
    timerHandle = null;
  }
}

if (typeof window !== 'undefined') {
  // Al salir de la pantalla del examen detenemos el temporizador para que no
  // entregue el examen desde otra ruta.
  window.addEventListener('hashchange', () => {
    if (!window.location.hash.startsWith('#/exam/session')) clearTimer();
  });
}

/** Recupera la sesión activa (en memoria o guardada). */
function resolveSession() {
  if (liveSession && liveSession.status === 'active') return liveSession;
  const stored = getActiveExam();
  if (stored && stored.status === 'active') {
    liveSession = stored;
    return stored;
  }
  return null;
}

function renderQuestion(session, t) {
  const question = getExamQuestion(session);
  if (!question) return '';
  const selected = session.answers[question.id];

  const optionsHtml = question.options
    .map(
      (option, i) => `
        <li>
          <button class="option ${i === selected ? 'is-selected' : ''}" type="button"
                  data-exam-option="${i}" aria-pressed="${i === selected}">
            <span class="option__key" aria-hidden="true">${LETTERS[i]}</span>
            <span class="option__text">${escapeHtml(option)}</span>
          </button>
        </li>
      `
    )
    .join('');

  return `
    <article class="question-card">
      ${progressBar({ value: session.currentIndex + 1, max: session.questionIds.length, label: t('a11y.progressBarLabel') })}
      <div class="quiz-topbar" style="margin-top:var(--space-3)">
        <span class="badge badge--accent">${escapeHtml(
          t('exam.questionLabel', { current: session.currentIndex + 1, total: session.questionIds.length })
        )}</span>
      </div>
      <h2 class="question-card__text">${escapeHtml(question.question)}</h2>
      <ul class="options-list">${optionsHtml}</ul>
    </article>
  `;
}

function renderAnswerGrid(session, t) {
  const buttons = session.questionIds
    .map((id, index) => {
      const answered = session.answers[id] !== undefined;
      const flagged = session.flags.includes(id);
      const classes = [
        'exam-grid__btn',
        answered ? 'is-answered' : '',
        index === session.currentIndex ? 'is-current' : '',
        flagged ? 'is-flagged' : ''
      ]
        .filter(Boolean)
        .join(' ');
      const label = `${t('common.question')} ${index + 1}${flagged ? `, ${t('exam.flagged')}` : ''}`;
      return `<li><button class="${classes}" type="button" data-exam-goto="${index}"
                     aria-current="${index === session.currentIndex ? 'true' : 'false'}"
                     aria-label="${escapeHtml(label)}">${index + 1}</button></li>`;
    })
    .join('');

  return card({
    body: `
      <h2 class="card__title" style="margin-bottom:var(--space-3)">${escapeHtml(t('exam.answerGrid'))}</h2>
      <ul class="exam-grid">${buttons}</ul>
      <div class="exam-legend">
        <span class="exam-legend__item"><span class="legend-dot legend-dot--answered"></span>${escapeHtml(t('exam.gridLegendAnswered'))}</span>
        <span class="exam-legend__item"><span class="legend-dot"></span>${escapeHtml(t('exam.gridLegendUnanswered'))}</span>
        <span class="exam-legend__item"><span class="legend-dot legend-dot--flag"></span>${escapeHtml(t('exam.gridLegendFlagged'))}</span>
      </div>
    `
  });
}

export default {
  render(ctx) {
    const { t } = ctx;

    if (submittedResult) {
      return `
        <section class="page">
          ${pageHeader({ title: t('exam.sessionTitle') })}
          ${alert({ tone: 'info', title: t('exam.alreadySubmitted') })}
          <div class="cluster" style="margin-top:var(--space-4)">
            ${button({
              label: t('results.viewResults'),
              href: buildHref(`/exam/results/${encodeURIComponent(submittedResult.id)}`),
              variant: 'primary'
            })}
            ${button({ label: t('results.tryAnother'), href: buildHref('/exam'), variant: 'ghost' })}
          </div>
        </section>
      `;
    }

    const session = resolveSession();

    if (!session) {
      clearTimer();
      return `
        <section class="page">
          ${pageHeader({ title: t('exam.sessionTitle') })}
          ${alert({ tone: 'warning', title: t('exam.interrupted'), text: t('exam.leaveWarning') })}
          <div class="cluster" style="margin-top:var(--space-4)">
            ${button({ label: t('exam.startExam'), href: buildHref('/exam'), variant: 'primary', iconName: 'play' })}
          </div>
        </section>
      `;
    }

    const answered = countAnswered(session);
    const total = session.questionIds.length;
    const question = getExamQuestion(session);
    const isFlagged = question ? session.flags.includes(question.id) : false;
    const timerEnabled = Boolean(session.timer?.enabled);
    const remaining = timerEnabled ? timeRemaining(session) : null;

    return `
      <section class="page exam-shell">
        <div class="exam-topbar">
          <div class="quiz-topbar__meta">
            <span class="card__meta">${escapeHtml(t('exam.questionLabel', { current: session.currentIndex + 1, total }))}</span>
            <span class="card__meta">${answered}/${total}</span>
            ${
              timerEnabled
                ? `<span class="timer-pill" data-timer-pill>
                     ${icon('clock', { size: 15 })}
                     <span data-timer-text>${formatClock(remaining ?? 0)}</span>
                   </span>`
                : ''
            }
          </div>
          <div class="cluster">
            <button class="btn btn--ghost btn--sm" type="button" data-exam-flag aria-pressed="${isFlagged}">
              ${icon('flag', { size: 15 })}
              <span class="btn__label">${escapeHtml(isFlagged ? t('exam.unflag') : t('exam.flag'))}</span>
            </button>
            ${button({ label: t('exam.submit'), variant: 'primary', size: 'sm', iconName: 'check-check', attrs: { 'data-exam-submit': 'true' } })}
          </div>
        </div>

        ${timerEnabled ? `<p class="timer-note" style="margin-bottom:var(--space-4)">${escapeHtml(t('exam.timerLabel'))}</p>` : ''}

        <div class="exam-layout">
          <div>
            ${renderQuestion(session, t)}
            <div class="quiz-actions">
              <div class="cluster">
                ${button({
                  label: t('common.previous'),
                  variant: 'ghost',
                  iconName: 'arrow-left',
                  attrs: { 'data-exam-prev': 'true' },
                  disabled: session.currentIndex === 0
                })}
              </div>
              <div class="cluster">
                ${button({
                  label: t('common.next'),
                  variant: 'secondary',
                  iconName: 'arrow-right',
                  iconPosition: 'right',
                  attrs: { 'data-exam-next': 'true' },
                  disabled: session.currentIndex >= total - 1
                })}
              </div>
            </div>
          </div>

          <aside class="exam-sidebar">
            ${renderAnswerGrid(session, t)}
            <div style="margin-top:var(--space-4)">
              ${button({
                label: t('exam.submit'),
                variant: 'primary',
                size: 'lg',
                className: 'btn--block',
                iconName: 'check-check',
                attrs: { 'data-exam-submit': 'true' }
              })}
            </div>
          </aside>
        </div>
      </section>
    `;
  },

  mount(root, ctx) {
    const { t, navigate, refresh, scrollToTop } = ctx;

    let current = resolveSession();
    if (!current) {
      clearTimer();
      return;
    }

    const persist = (next) => {
      current = next;
      liveSession = next;
      saveActiveExam(next);
    };

    const submit = (auto) => {
      const { result } = submitExam(current, { autoSubmitted: Boolean(auto) });
      recordExamResult(result);
      clearActiveExam();
      submittedResult = result;
      liveSession = null;
      clearTimer();
      if (auto) showToast(t('exam.timeUp'), 'warning');
      navigate(`/exam/results/${encodeURIComponent(result.id)}`);
    };

    const askSubmit = async () => {
      const unanswered = countUnanswered(current);
      const confirmed = await confirmDialog({
        title: t('exam.submitTitle'),
        text:
          unanswered > 0
            ? t('exam.submitConfirmUnanswered', { count: unanswered })
            : t('exam.submitConfirmAll'),
        confirmLabel: t('exam.submitConfirm'),
        cancelLabel: t('common.cancel'),
        tone: 'primary'
      });
      if (confirmed) submit(false);
    };

    root.querySelectorAll('[data-exam-option]').forEach((optionBtn) => {
      optionBtn.addEventListener('click', () => {
        const question = getExamQuestion(current);
        if (!question) return;
        const index = Number(optionBtn.getAttribute('data-exam-option'));
        persist(setExamAnswer(current, question.id, index));
        refresh();
      });
    });

    root.querySelector('[data-exam-flag]')?.addEventListener('click', () => {
      const question = getExamQuestion(current);
      if (!question) return;
      persist(toggleFlag(current, question.id));
      refresh();
    });

    root.querySelectorAll('[data-exam-goto]').forEach((btn) => {
      btn.addEventListener('click', () => {
        persist(gotoExamQuestion(current, Number(btn.getAttribute('data-exam-goto'))));
        refresh();
        scrollToTop();
      });
    });

    root.querySelector('[data-exam-prev]')?.addEventListener('click', () => {
      persist(gotoExamQuestion(current, current.currentIndex - 1));
      refresh();
      scrollToTop();
    });

    root.querySelector('[data-exam-next]')?.addEventListener('click', () => {
      persist(gotoExamQuestion(current, current.currentIndex + 1));
      refresh();
      scrollToTop();
    });

    root.querySelectorAll('[data-exam-submit]').forEach((btn) => {
      btn.addEventListener('click', askSubmit);
    });

    // Temporizador de práctica (opcional).
    clearTimer();
    if (current.timer?.enabled) {
      const pill = root.querySelector('[data-timer-pill]');
      const text = pill?.querySelector('[data-timer-text]');
      const tick = () => {
        const remaining = timeRemaining(current);
        if (remaining === null) return;
        if (remaining <= 0) {
          clearTimer();
          submit(true);
          return;
        }
        if (text) text.textContent = formatClock(remaining);
        pill?.classList.toggle('is-low', remaining <= 60000);
      };
      tick();
      timerHandle = setInterval(tick, 1000);
    }
  }
};

export { liveSession, submittedResult };
