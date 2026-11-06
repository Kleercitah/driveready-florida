import { buildHref } from '../config/routes.js';
import { pickLocalized } from '../i18n/index.js';
import { lessons } from '../data/lessons/index.js';
import { getState } from '../services/storage.js';
import { escapeHtml, formatPercentValue } from '../utils/formatting.js';
import { badge, pageHeader, progressBar } from '../components/common/ui.js';
import { icon } from '../components/common/icons.js';

export default {
  render(ctx) {
    const { t, language } = ctx;
    const completed = getState().lessons.completed;
    const completedCount = lessons.filter((l) => completed.includes(l.id)).length;
    const overallPercent = Math.round((completedCount / lessons.length) * 100);

    const cards = lessons
      .map((lesson) => {
        const isDone = completed.includes(lesson.id);
        return `
          <a class="card card--interactive module-card" href="${buildHref(`/learn/${lesson.id}`)}">
            <div class="module-card__head">
              <div>
                <span class="module-card__number">${escapeHtml(lesson.number)}</span>
                <h3 class="module-card__title">${escapeHtml(pickLocalized(lesson.title, language))}</h3>
              </div>
              ${isDone ? badge({ label: t('learn.completed'), variant: 'success', iconName: 'check' }) : ''}
            </div>
            <p class="module-card__desc">${escapeHtml(pickLocalized(lesson.summary, language))}</p>
            <div class="module-card__footer">
              <span class="card__meta">
                ${icon('clock', { size: 14 })} ${lesson.estimatedMinutes} ${escapeHtml(t('learn.estimatedTime'))}
              </span>
              <span class="section__link">${escapeHtml(t('common.start'))} ${icon('arrow-right', { size: 14 })}</span>
            </div>
          </a>
        `;
      })
      .join('');

    return `
      <section class="page">
        ${pageHeader({ title: t('learn.title'), subtitle: t('learn.subtitle') })}

        <div class="card" style="margin-bottom:var(--space-6)">
          <div class="stack-sm">
            <div class="cluster" style="justify-content:space-between">
              <span class="card__meta">${escapeHtml(t('learn.progressLabel'))}</span>
              <span class="card__meta"><strong>${completedCount}/${lessons.length}</strong> · ${formatPercentValue(overallPercent)}</span>
            </div>
            ${progressBar({
              value: completedCount,
              max: lessons.length,
              label: t('learn.progressLabel'),
              variant: 'success'
            })}
            ${completedCount === lessons.length ? `<p class="text-muted" style="margin:var(--space-2) 0 0">${escapeHtml(t('learn.allModulesCompleted'))}</p>` : ''}
          </div>
        </div>

        <h2 class="section__title" style="margin-bottom:var(--space-4)">${escapeHtml(t('learn.modules'))}</h2>
        <div class="grid grid--modules">${cards}</div>
      </section>
    `;
  },

  mount() {}
};
