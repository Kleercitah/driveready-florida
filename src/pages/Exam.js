import { appConfig } from '../config/appConfig.js';
import { buildHref } from '../config/routes.js';
import { getVerifiedQuestions } from '../data/questions/index.js';
import { createExamSession } from '../engines/examEngine.js';
import {
  saveActiveExam,
  getActiveExam,
  clearActiveExam,
  getPreferences,
  updatePreferences
} from '../services/progressService.js';
import { escapeHtml } from '../utils/formatting.js';
import { icon } from '../components/common/icons.js';
import { alert, badge, button, card, pageHeader, statTile } from '../components/common/ui.js';
import { confirmDialog } from '../components/common/modal.js';
import { showToast } from '../components/common/toast.js';

const RULE_KEYS = ['exam.rule1', 'exam.rule2', 'exam.rule3', 'exam.rule4', 'exam.rule5'];

export default {
  render(ctx) {
    const { t } = ctx;
    const verified = getVerifiedQuestions();
    const enough = verified.length >= appConfig.examQuestionBankMinimum;
    const active = getActiveExam();
    const prefs = getPreferences();

    const rules = `
      <ol class="list">
        ${RULE_KEYS.map((key) => `<li class="list__item">${escapeHtml(t(key))}</li>`).join('')}
      </ol>
    `;

    if (!enough) {
      return `
        <section class="page">
          ${pageHeader({ title: t('exam.title'), subtitle: t('exam.subtitle') })}
          ${alert({ tone: 'warning', title: t('exam.notEnoughTitle'), text: t('exam.notEnoughText', { count: verified.length }) })}
          <div class="cluster" style="margin-top:var(--space-4)">
            ${button({ label: t('exam.practiceInstead'), href: buildHref('/practice'), variant: 'primary', iconName: 'square-pen' })}
          </div>
        </section>
      `;
    }

    const resume = active && active.status === 'active'
      ? `${alert({ tone: 'info', title: t('exam.resumeTitle'), text: t('exam.resumeText') })}
         <div class="cluster" style="margin:var(--space-3) 0 var(--space-6)">
           ${button({ label: t('exam.resumeContinue'), href: buildHref('/exam/session'), variant: 'primary', iconName: 'play' })}
           ${button({ label: t('exam.resumeAbandon'), variant: 'ghost', iconName: 'trash-2', attrs: { 'data-abandon-exam': 'true' } })}
         </div>`
      : '';

    return `
      <section class="page">
        ${pageHeader({
          title: t('exam.title'),
          subtitle: t('exam.subtitle'),
          actionsHtml: badge({ label: `${verified.length} ${t('common.questions').toLowerCase()}`, variant: 'success', iconName: 'badge-check' })
        })}

        ${resume}

        <div class="grid grid--cards-2" style="margin-bottom:var(--space-6)">
          ${statTile({ label: t('common.questions'), value: appConfig.examTotalQuestions, iconName: 'list-ordered' })}
          ${statTile({ label: t('results.threshold'), value: `${appConfig.examPassingCorrect}/${appConfig.examTotalQuestions}`, iconName: 'target' })}
        </div>

        ${card({ body: `<h2 class="card__title">${escapeHtml(t('exam.rulesTitle'))}</h2>${rules}` })}

        <div style="margin:var(--space-5) 0">
          ${alert({ tone: 'warning', title: t('exam.noticeTitle'), text: t('exam.noticeText') })}
        </div>

        <form class="card" data-exam-form novalidate>
          <label class="switch-row" for="exam-timer">
            <input type="checkbox" id="exam-timer" name="exam-timer" ${prefs.timerEnabled ? 'checked' : ''} />
            <span class="switch-row__text">
              <span class="switch-row__title">${escapeHtml(t('exam.timerOn'))}</span>
              <span class="switch-row__desc">${escapeHtml(t('exam.timerLabel'))}</span>
            </span>
          </label>

          <div class="field" data-timer-minutes-field ${prefs.timerEnabled ? '' : 'hidden'}>
            <label class="field__label" for="exam-timer-minutes">${escapeHtml(t('exam.timerMinutes'))}</label>
            <input class="input" type="number" id="exam-timer-minutes" name="exam-timer-minutes"
                   min="10" max="180" step="5" value="${prefs.timerMinutes ?? appConfig.practiceTimerDefaultMinutes}" />
          </div>

          <div class="quiz-actions" style="justify-content:flex-end">
            ${button({ label: t('exam.startExam'), variant: 'primary', size: 'lg', type: 'submit', iconName: 'play' })}
          </div>
        </form>
      </section>
    `;
  },

  mount(root, ctx) {
    const { t, navigate } = ctx;

    root.querySelector('[data-abandon-exam]')?.addEventListener('click', async () => {
      const confirmed = await confirmDialog({
        title: t('exam.resumeAbandon'),
        text: t('exam.resumeText'),
        confirmLabel: t('exam.resumeAbandon'),
        cancelLabel: t('common.cancel'),
        tone: 'danger'
      });
      if (!confirmed) return;
      clearActiveExam();
      showToast(t('exam.resumeAbandon'), 'info');
      ctx.refresh();
    });

    const form = root.querySelector('[data-exam-form]');
    if (!form) return;

    const timerCheckbox = form.querySelector('#exam-timer');
    const minutesField = form.querySelector('[data-timer-minutes-field]');

    timerCheckbox?.addEventListener('change', () => {
      minutesField.hidden = !timerCheckbox.checked;
    });

    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const timerEnabled = Boolean(timerCheckbox?.checked);
      const timerMinutes = Number.parseInt(form.querySelector('#exam-timer-minutes')?.value, 10);

      updatePreferences({
        timerEnabled,
        timerMinutes: Number.isFinite(timerMinutes) ? timerMinutes : appConfig.practiceTimerDefaultMinutes
      });

      const { session, error } = createExamSession({
        pool: getVerifiedQuestions(),
        total: appConfig.examTotalQuestions,
        timerEnabled,
        timerMinutes
      });

      if (error || !session) {
        showToast(t('exam.notEnoughTitle'), 'error');
        return;
      }

      saveActiveExam(session);
      navigate('/exam/session');
    });
  }
};
