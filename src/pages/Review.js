import { buildHref } from '../config/routes.js';
import { getCategoryTitle } from '../data/categories.js';
import { questionsById } from '../data/questions/index.js';
import {
  getMissedQuestionIds,
  getFavorites,
  getQuestionStat
} from '../services/progressService.js';
import { computeWeakestCategories } from '../services/statisticsService.js';
import { escapeHtml, formatPercentValue } from '../utils/formatting.js';
import { formatDate } from '../utils/dates.js';
import { icon } from '../components/common/icons.js';
import { badge, button, card, emptyState, pageHeader } from '../components/common/ui.js';
import { barChart } from '../components/charts/charts.js';

function statLine(questionId, t, language) {
  const stat = getQuestionStat(questionId);
  if (!stat) {
    return `<p class="timeline__meta">${escapeHtml(t('review.neverAnswered'))}</p>`;
  }
  return `
    <ul class="cluster" style="list-style:none;padding:0;margin:var(--space-3) 0 0;gap:var(--space-4);font-size:var(--fs-xs);color:var(--text-muted)">
      <li>${escapeHtml(t('review.timesAnswered'))}: <strong>${stat.answered}</strong></li>
      <li>${escapeHtml(t('review.timesCorrect'))}: <strong>${stat.correct}</strong></li>
      <li>${escapeHtml(t('review.timesWrong'))}: <strong>${stat.wrong}</strong></li>
      <li>${escapeHtml(t('review.lastAttempt'))}: <strong>${escapeHtml(
        formatDate(stat.lastAnsweredAt, language)
      )}</strong></li>
    </ul>
  `;
}

function questionItem(question, t, language) {
  return `
    <li class="review-item">
      <div class="review-item__head">
        ${badge({ label: getCategoryTitle(question.category, language), variant: 'accent' })}
        ${badge({ label: t(`common.${question.difficulty}`), variant: 'neutral' })}
      </div>
      <p class="review-item__question">${escapeHtml(question.question)}</p>
      ${statLine(question.id, t, language)}
      <div class="cluster" style="margin-top:var(--space-3)">
        <a class="section__link" href="${buildHref(`/learn/${question.relatedLessonId}`)}">
          ${icon('book-open', { size: 14 })} ${escapeHtml(t('review.openLesson'))}
        </a>
      </div>
    </li>
  `;
}

export default {
  render(ctx) {
    const { t, language } = ctx;

    const missed = getMissedQuestionIds(12)
      .map((id) => questionsById[id])
      .filter(Boolean);
    const favorites = getFavorites()
      .map((id) => questionsById[id])
      .filter(Boolean);
    const weakest = computeWeakestCategories(3);

    const weakChart = barChart({
      rows: weakest.map((category) => ({
        label: getCategoryTitle(category.categoryId, language),
        value: category.accuracy,
        display: `${formatPercentValue(category.accuracy)} · ${category.correct}/${category.answered}`
      })),
      emptyMessage: t('review.noWeak')
    });

    const missedSection = missed.length
      ? `<ul style="list-style:none;padding:0;margin:0">${missed
          .map((question) => questionItem(question, t, language))
          .join('')}</ul>`
      : emptyState({ title: t('review.noMissed'), iconName: 'circle-check' });

    const favoritesSection = favorites.length
      ? `<ul style="list-style:none;padding:0;margin:0">${favorites
          .map((question) => questionItem(question, t, language))
          .join('')}</ul>`
      : emptyState({ title: t('review.noFavorites'), iconName: 'heart' });

    return `
      <section class="page">
        ${pageHeader({ title: t('review.title'), subtitle: t('review.subtitle') })}

        <div class="cluster" style="margin-bottom:var(--space-6)">
          ${button({
            label: t('review.practiceThese'),
            href: buildHref('/practice/session', { scope: 'missed', size: 10 }),
            variant: 'primary',
            iconName: 'rotate-ccw'
          })}
          ${button({
            label: t('practice.scopeFavorites'),
            href: buildHref('/practice/session', { scope: 'favorites', size: 10 }),
            variant: 'secondary',
            iconName: 'star'
          })}
        </div>

        <section class="section">
          <div class="section__head">
            <h2 class="section__title">${escapeHtml(t('review.weakTitle'))}</h2>
          </div>
          ${card({ body: weakChart })}
        </section>

        <section class="section">
          <div class="section__head">
            <h2 class="section__title">${escapeHtml(t('review.missedTitle'))}</h2>
          </div>
          ${missedSection}
        </section>

        <section class="section">
          <div class="section__head">
            <h2 class="section__title">${escapeHtml(t('review.favoritesTitle'))}</h2>
          </div>
          ${favoritesSection}
        </section>

        <p class="text-muted" style="font-size:var(--fs-xs)">${escapeHtml(t('review.metricNote'))}</p>
      </section>
    `;
  },

  mount() {
    // La página de repaso es de solo lectura.
  }
};
