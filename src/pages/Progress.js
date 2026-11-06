import { appConfig } from '../config/appConfig.js';
import { buildHref } from '../config/routes.js';
import {
  computeProgressOverview,
  hasAnyActivity
} from '../services/statisticsService.js';
import {
  exportData,
  validateImport,
  mergeImportedState
} from '../services/storage.js';
import { getCategoryTitle } from '../data/categories.js';
import { lessons } from '../data/lessons/index.js';
import { escapeHtml, formatPercentValue } from '../utils/formatting.js';
import { formatDate } from '../utils/dates.js';
import { icon } from '../components/common/icons.js';
import {
  alert,
  badge,
  button,
  card,
  emptyState,
  pageHeader,
  statTile
} from '../components/common/ui.js';
import { confirmDialog } from '../components/common/modal.js';
import { showToast } from '../components/common/toast.js';
import { barChart, progressRing } from '../components/charts/charts.js';

function historyItem(entry, t, language) {
  const isExam = entry.kind === 'exam';
  const isPassed = isExam && entry.passed;
  return `
    <li class="timeline__item">
      <span class="timeline__icon" aria-hidden="true">${icon(
        isExam ? 'clipboard-check' : 'square-pen',
        { size: 18 }
      )}</span>
      <div class="timeline__body">
        <p class="timeline__title">${escapeHtml(
          isExam ? t('progress.activityExam') : t('progress.activityPractice')
        )}</p>
        <p class="timeline__meta">
          ${escapeHtml(formatDate(entry.date, language))} ·
          ${escapeHtml(
            isExam
              ? `${entry.correct}/${entry.total} · ${formatPercentValue(entry.percentage)}`
              : `${entry.correct}/${entry.total}`
          )}
        </p>
      </div>
      ${
        isExam
          ? badge({
              label: isPassed ? t('results.passed') : t('results.needsPractice'),
              variant: isPassed ? 'success' : 'warning'
            })
          : ''
      }
    </li>
  `;
}

export default {
  render(ctx) {
    const { t, language } = ctx;
    const overview = computeProgressOverview();
    const global = overview.global;

    if (!hasAnyActivity()) {
      return `
        <section class="page">
          ${pageHeader({ title: t('progress.title'), subtitle: t('progress.subtitle') })}
          ${emptyState({
            title: t('progress.emptyTitle'),
            text: t('progress.emptyText'),
            iconName: 'sparkles',
            actionHtml: button({ label: t('learn.title'), href: buildHref('/learn'), variant: 'primary' })
          })}
        </section>
      `;
    }

    const accuracyRows = overview.categoryStats
      .filter((category) => category.answered > 0)
      .map((category) => ({
        label: getCategoryTitle(category.categoryId, language),
        value: category.accuracy,
        display: `${formatPercentValue(category.accuracy)} · ${category.correct}/${category.answered}`
      }));

    const stats = `
      <div class="grid grid--results" style="margin-bottom:var(--space-6)">
        ${statTile({ label: t('progress.practiceSessions'), value: global.practiceCount, iconName: 'square-pen' })}
        ${statTile({ label: t('progress.examsCompleted'), value: global.examCount, iconName: 'clipboard-check' })}
        ${statTile({
          label: t('progress.bestScore'),
          value: overview.bestScore === null ? '—' : formatPercentValue(overview.bestScore),
          iconName: 'trophy'
        })}
        ${statTile({
          label: t('progress.averageScore'),
          value: overview.averageScore === null ? '—' : formatPercentValue(overview.averageScore),
          iconName: 'trending-up'
        })}
        ${statTile({ label: t('progress.uniqueQuestions'), value: global.uniqueQuestions, iconName: 'list-ordered' })}
        ${statTile({
          label: t('progress.lessonsCompleted'),
          value: `${global.lessonsCompleted}/${lessons.length}`,
          iconName: 'book-open'
        })}
        ${statTile({ label: t('progress.studyDays'), value: global.studyDays, iconName: 'flame' })}
      </div>
    `;

    const ring = card({
      body: `
        <h2 class="card__title">${escapeHtml(t('dashboard.globalAccuracy'))}</h2>
        <div style="display:grid;place-items:center;padding:var(--space-4) 0">
          ${progressRing({
            value: global.globalAccuracy,
            label: `${t('dashboard.globalAccuracy')}: ${formatPercentValue(global.globalAccuracy)}`
          })}
        </div>
      `
    });

    const accuracy = card({
      body: `
        <h2 class="card__title">${escapeHtml(t('progress.accuracyByCategory'))}</h2>
        ${barChart({ rows: accuracyRows, emptyMessage: t('progress.historyEmpty') })}
      `
    });

    const history = overview.history.length
      ? `<ul class="timeline">${overview.history
          .slice(0, 12)
          .map((entry) => historyItem(entry, t, language))
          .join('')}</ul>`
      : `<p class="text-muted">${escapeHtml(t('progress.historyEmpty'))}</p>`;

    return `
      <section class="page">
        ${pageHeader({ title: t('progress.title'), subtitle: t('progress.subtitle') })}
        ${stats}

        <div class="grid grid--cards-2" style="margin-bottom:var(--space-6)">
          ${ring}
          ${accuracy}
        </div>

        <section class="section">
          <div class="section__head">
            <h2 class="section__title">${escapeHtml(t('progress.historyTitle'))}</h2>
          </div>
          ${history}
        </section>

        <section class="section">
          <div class="settings-group">
            <h2 class="settings-group__title">${escapeHtml(t('progress.exportTitle'))}</h2>
            ${card({
              body: `
                <p class="text-muted" style="margin-top:0">${escapeHtml(t('progress.exportHelp'))}</p>
                <div class="cluster" style="margin-top:var(--space-4)">
                  ${button({
                    label: t('progress.exportButton'),
                    variant: 'secondary',
                    iconName: 'download',
                    attrs: { 'data-export-progress': 'true' }
                  })}
                </div>
              `
            })}
          </div>

          <div class="settings-group">
            <h2 class="settings-group__title">${escapeHtml(t('progress.importTitle'))}</h2>
            ${card({
              body: `
                <p class="text-muted" style="margin-top:0">${escapeHtml(t('progress.importHelp'))}</p>
                <div class="cluster" style="margin-top:var(--space-4)">
                  <label class="btn btn--ghost btn--md" for="progress-import-file">
                    <span class="btn__icon">${icon('upload', { size: 18 })}</span>
                    <span class="btn__label">${escapeHtml(t('progress.importButton'))}</span>
                  </label>
                  <input class="visually-hidden" type="file" id="progress-import-file" accept="application/json,.json" data-import-input />
                </div>
              `
            })}
          </div>
        </section>
      </section>
    `;
  },

  mount(root, ctx) {
    const { t } = ctx;

    root.querySelector('[data-export-progress]')?.addEventListener('click', () => {
      try {
        const payload = JSON.stringify(exportData(), null, 2);
        const blob = new Blob([payload], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = t('progress.exportFilename');
        document.body.appendChild(link);
        link.click();
        link.remove();
        URL.revokeObjectURL(url);
        showToast(t('progress.exportSuccess'), 'success');
      } catch (error) {
        console.error('[DriveReady] Export failed:', error);
        showToast(t('common.error'), 'error');
      }
    });

    const input = root.querySelector('[data-import-input]');
    input?.addEventListener('change', async () => {
      const file = input.files?.[0];
      if (!file) return;
      try {
        const text = await file.text();
        const parsed = JSON.parse(text);
        const check = validateImport(parsed);
        if (!check.valid) {
          showToast(t('progress.importInvalid'), 'error');
          return;
        }
        const confirmed = await confirmDialog({
          title: t('progress.importConfirmTitle'),
          text: t('progress.importConfirmText'),
          confirmLabel: t('common.confirm'),
          cancelLabel: t('common.cancel')
        });
        if (!confirmed) return;
        mergeImportedState(check.state);
        showToast(t('progress.importSuccess'), 'success');
        ctx.refresh();
      } catch (error) {
        console.error('[DriveReady] Import failed:', error);
        showToast(t('progress.importInvalid'), 'error');
      } finally {
        input.value = '';
      }
    });
  }
};
