import { buildHref } from '../config/routes.js';
import { getSupportedLanguages, setLanguage } from '../i18n/index.js';
import {
  getPreferences,
  updatePreferences,
  resetAll
} from '../services/progressService.js';
import { escapeHtml } from '../utils/formatting.js';
import { button, card, pageHeader } from '../components/common/ui.js';
import { confirmDialog } from '../components/common/modal.js';
import { showToast } from '../components/common/toast.js';

function languageOptions(selected) {
  return getSupportedLanguages()
    .map(
      (lang) =>
        `<option value="${escapeHtml(lang.code)}" ${lang.code === selected ? 'selected' : ''}>${escapeHtml(
          lang.label
        )}</option>`
    )
    .join('');
}

export default {
  render(ctx) {
    const { t } = ctx;
    const prefs = getPreferences();

    return `
      <section class="page">
        ${pageHeader({ title: t('settings.title'), subtitle: t('settings.subtitle') })}

        <div class="settings-group">
          <h2 class="settings-group__title">${escapeHtml(t('settings.languageSection'))}</h2>
          ${card({
            body: `
              <div class="field">
                <label class="field__label" for="settings-language">${escapeHtml(
                  t('settings.interfaceLanguage')
                )}</label>
                <select class="select" id="settings-language" data-setting="language">
                  ${languageOptions(prefs.language)}
                </select>
              </div>
              <div class="field">
                <label class="field__label" for="settings-explanation-language">${escapeHtml(
                  t('settings.explanationLanguage')
                )}</label>
                <select class="select" id="settings-explanation-language" data-setting="explanationLanguage">
                  ${languageOptions(prefs.explanationLanguage)}
                </select>
                <p class="field__hint">${escapeHtml(t('settings.explanationHelp'))}</p>
              </div>
              <p class="text-muted" style="font-size:var(--fs-sm)">${escapeHtml(
                t('settings.examLanguageNote')
              )}</p>
            `
          })}
        </div>

        <div class="settings-group">
          <h2 class="settings-group__title">${escapeHtml(t('settings.appearance'))}</h2>
          ${card({
            body: `
              <label class="switch-row" for="settings-motivational">
                <input type="checkbox" id="settings-motivational" data-setting="showMotivational"
                       ${prefs.showMotivational ? 'checked' : ''} />
                <span class="switch-row__text">
                  <span class="switch-row__title">${escapeHtml(t('settings.showMotivational'))}</span>
                </span>
              </label>
              <div class="field" style="margin-top:var(--space-4)">
                <label class="field__label" for="settings-motion">${escapeHtml(
                  t('settings.reducedMotion')
                )}</label>
                <select class="select" id="settings-motion" data-setting="reducedMotion">
                  <option value="system" ${prefs.reducedMotion === 'system' ? 'selected' : ''}>${escapeHtml(
                    t('settings.systemDefault')
                  )}</option>
                  <option value="on" ${prefs.reducedMotion === 'on' ? 'selected' : ''}>${escapeHtml(
                    t('settings.on')
                  )}</option>
                  <option value="off" ${prefs.reducedMotion === 'off' ? 'selected' : ''}>${escapeHtml(
                    t('settings.off')
                  )}</option>
                </select>
                <p class="field__hint">${escapeHtml(t('settings.reducedMotionHelp'))}</p>
              </div>
            `
          })}
        </div>

        <div class="settings-group">
          <h2 class="settings-group__title">${escapeHtml(t('settings.personalizationTitle'))}</h2>
          ${card({
            body: `
              <p class="text-muted" style="margin-top:0">${escapeHtml(t('settings.dedicationHelp'))}</p>
              <div class="cluster" style="margin-top:var(--space-4)">
                ${button({
                  label: t('settings.showWelcomeNow'),
                  variant: 'secondary',
                  iconName: 'heart',
                  attrs: { 'data-show-welcome': 'true' }
                })}
              </div>
            `
          })}
        </div>

        <div class="settings-group">
          <h2 class="settings-group__title">${escapeHtml(t('settings.dataSection'))}</h2>
          ${card({
            body: `
              <p class="text-muted" style="margin-top:0">${escapeHtml(t('settings.storageHelp'))}</p>
              <div class="cluster" style="margin-top:var(--space-4)">
                ${button({ label: t('progress.exportButton'), href: buildHref('/progress'), variant: 'ghost', iconName: 'download' })}
              </div>
              <hr style="margin:var(--space-5) 0;border:0;border-top:1px solid var(--border-subtle)" />
              <h3 class="card__title" style="font-size:var(--fs-md)">${escapeHtml(t('settings.resetTitle'))}</h3>
              <p class="text-muted">${escapeHtml(t('settings.resetHelp'))}</p>
              <div class="cluster" style="margin-top:var(--space-3)">
                ${button({
                  label: t('settings.resetButton'),
                  variant: 'danger',
                  iconName: 'trash-2',
                  attrs: { 'data-reset-data': 'true' }
                })}
              </div>
            `
          })}
        </div>
      </section>
    `;
  },

  mount(root, ctx) {
    const { t } = ctx;

    const save = (partial, { rerender = false } = {}) => {
      updatePreferences(partial);
      showToast(t('settings.savedNotice'), 'success');
      if (rerender) ctx.refresh();
    };

    root.querySelector('[data-setting="language"]')?.addEventListener('change', (event) => {
      const language = event.target.value;
      setLanguage(language);
      updatePreferences({ language });
      ctx.refresh();
      ctx.scrollToTop();
    });

    root.querySelector('[data-setting="explanationLanguage"]')?.addEventListener('change', (event) => {
      save({ explanationLanguage: event.target.value });
    });

    root.querySelector('[data-setting="showMotivational"]')?.addEventListener('change', (event) => {
      save({ showMotivational: event.target.checked });
    });

    root.querySelector('[data-setting="reducedMotion"]')?.addEventListener('change', (event) => {
      save({ reducedMotion: event.target.value }, { rerender: true });
    });

    root.querySelector('[data-show-welcome]')?.addEventListener('click', () => {
      window.DriveReady?.showWelcome?.({ force: true });
    });

    root.querySelector('[data-reset-data]')?.addEventListener('click', async () => {
      const confirmed = await confirmDialog({
        title: t('settings.resetConfirmTitle'),
        text: t('settings.resetConfirmText'),
        confirmLabel: t('settings.resetButton'),
        cancelLabel: t('common.cancel'),
        tone: 'danger'
      });
      if (!confirmed) return;
      resetAll();
      showToast(t('settings.resetDone'), 'success');
      ctx.navigate('/');
    });
  }
};
