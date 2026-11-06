import { appConfig } from '../config/appConfig.js';
import { personalization } from '../config/personalization.js';
import { buildHref } from '../config/routes.js';
import { getCategoryTitle } from '../data/categories.js';
import { lessons } from '../data/lessons/index.js';
import { computeGlobalStats, computeCategoryStats, hasAnyActivity } from '../services/statisticsService.js';
import { getActiveExam, getActivePractice } from '../services/progressService.js';
import { escapeHtml, formatPercentValue } from '../utils/formatting.js';
import { icon } from '../components/common/icons.js';
import { button, card, progressBar, statTile, alert } from '../components/common/ui.js';
import { barChart } from '../components/charts/charts.js';

const QUICK_ACTIONS = [
  { route: 'learn', path: '/learn', icon: 'book-open', titleKey: 'dashboard.quickLearn', descKey: 'learn.subtitle' },
  { route: 'practice', path: '/practice', icon: 'square-pen', titleKey: 'dashboard.quickPractice', descKey: 'practice.subtitle' },
  { route: 'signs', path: '/signs', icon: 'signpost', titleKey: 'dashboard.quickSigns', descKey: 'signs.subtitle' },
  { route: 'exam', path: '/exam', icon: 'clipboard-check', titleKey: 'dashboard.quickExam', descKey: 'exam.subtitle' },
  { route: 'review', path: '/review', icon: 'rotate-ccw', titleKey: 'dashboard.quickReview', descKey: 'review.subtitle' },
  { route: 'progress', path: '/progress', icon: 'chart-column', titleKey: 'dashboard.quickProgress', descKey: 'progress.subtitle' }
];

function pickMotivation() {
  const messages = personalization.motivationalMessages;
  if (!messages || messages.length === 0) return null;
  // Selección estable por día: no parpadea entre renderizados.
  const dayIndex = new Date().getDate();
  return messages[dayIndex % messages.length];
}

function resumeBanner(t) {
  const exam = getActiveExam();
  const practice = getActivePractice();
  if (exam && exam.status === 'active') {
    return alert({
      tone: 'warning',
      title: t('exam.resumeTitle'),
      text: t('exam.resumeText'),
      className: 'resume-banner'
    }) + `<div class="cluster" style="margin-top:var(--space-3)">${button({
      label: t('exam.resumeContinue'),
      href: buildHref('/exam/session'),
      variant: 'primary',
      size: 'sm'
    })}</div>`;
  }
  if (practice && practice.status === 'active') {
    return alert({
      tone: 'info',
      title: t('practice.resumeHint'),
      text: t('practice.sessionProgress', {
        current: (practice.currentIndex ?? 0) + 1,
        total: practice.total ?? practice.questionIds.length
      })
    }) + `<div class="cluster" style="margin-top:var(--space-3)">${button({
      label: t('common.continue'),
      href: buildHref('/practice/session'),
      variant: 'primary',
      size: 'sm'
    })}</div>`;
  }
  return '';
}

export default {
  render(ctx) {
    const { t, language } = ctx;
    const stats = computeGlobalStats();
    const categoryStats = computeCategoryStats();
    const active = hasAnyActivity();
    const motivation = pickMotivation();

    const statsHtml = `
      <div class="stat-grid">
        ${statTile({
          label: t('dashboard.questionsAnswered'),
          value: stats.questionsAnswered,
          iconName: 'list-ordered',
          hint: `${stats.uniqueQuestions} ${t('progress.uniqueQuestions').toLowerCase()}`
        })}
        ${statTile({
          label: t('dashboard.globalAccuracy'),
          value: stats.questionsAnswered ? formatPercentValue(stats.globalAccuracy) : '—',
          iconName: 'target'
        })}
        ${statTile({
          label: t('dashboard.lessonsCompleted'),
          value: `${stats.lessonsCompleted}/${lessons.length}`,
          iconName: 'book-open'
        })}
        ${statTile({
          label: t('dashboard.lastScore'),
          value: stats.lastScore === null ? '—' : formatPercentValue(stats.lastScore),
          iconName: 'trophy',
          hint: stats.examCount ? `${stats.examCount} × ${t('progress.examsCompleted').toLowerCase()}` : null
        })}
        ${statTile({
          label: t('dashboard.studyDays'),
          value: stats.studyDays,
          iconName: 'flame'
        })}
      </div>
    `;

    const answeredCategories = categoryStats.filter((c) => c.answered > 0);
    const categoryChart = barChart({
      rows: answeredCategories.map((c) => ({
        label: getCategoryTitle(c.categoryId, language),
        value: c.accuracy,
        display: `${formatPercentValue(c.accuracy)} · ${c.answered}`
      })),
      emptyMessage: t('dashboard.noCategories')
    });

    const quickActions = QUICK_ACTIONS.map(
      (action) => `
        <a class="quick-card" href="${buildHref(action.path)}">
          <span class="quick-card__icon" aria-hidden="true">${icon(action.icon, { size: 20 })}</span>
          <h3 class="quick-card__title">${escapeHtml(t(action.titleKey))}</h3>
          <p class="quick-card__desc">${escapeHtml(t(action.descKey))}</p>
          <span class="quick-card__cta">${escapeHtml(t('common.start'))} ${icon('arrow-right', { size: 14 })}</span>
        </a>
      `
    ).join('');

    const progressNote = active
      ? '<p class="text-muted">' + escapeHtml(t('dashboard.goalNote')) + '</p>'
      : '';

    return `
      <section class="page">
        <div class="hero">
          <p class="hero__eyebrow">${escapeHtml(appConfig.tagline)}</p>
          <h1 class="hero__title">${escapeHtml(t('dashboard.heroTitle'))}</h1>
          <p class="hero__text">${escapeHtml(t('dashboard.heroDescription'))}</p>
          <p class="hero__love">
            ${icon('heart', { size: 15 })}
            <span>${escapeHtml(personalization.heroLoveNote)}</span>
          </p>
          <div class="hero__actions">
            ${button({
              label: t('dashboard.continueLearning'),
              href: buildHref(active ? '/practice' : '/learn'),
              variant: 'primary',
              size: 'lg',
              iconName: 'arrow-right',
              iconPosition: 'right'
            })}
            ${button({
              label: t('dashboard.takeExam'),
              href: buildHref('/exam'),
              variant: 'ghost',
              size: 'lg',
              iconName: 'clipboard-check'
            })}
          </div>
        </div>

        ${resumeBanner(t)}

        <section class="section" aria-labelledby="dashboard-stats">
          <div class="section__head">
            <h2 class="section__title" id="dashboard-stats">${escapeHtml(t('dashboard.statsTitle'))}</h2>
            <a class="section__link" href="${buildHref('/progress')}">${escapeHtml(t('nav.progress'))}</a>
          </div>
          ${
            active
              ? statsHtml
              : `<div class="empty-state" style="margin-bottom:var(--space-4)">
                   <span class="empty-state__icon" aria-hidden="true">${icon('sparkles', { size: 28 })}</span>
                   <h3 class="empty-state__title">${escapeHtml(t('dashboard.newUserTitle'))}</h3>
                   <p class="empty-state__text">${escapeHtml(t('dashboard.newUserText'))}</p>
                 </div>
                 ${statsHtml}`
          }
        </section>

        <section class="section" aria-labelledby="dashboard-quick">
          <div class="section__head">
            <h2 class="section__title" id="dashboard-quick">${escapeHtml(t('dashboard.quickActions'))}</h2>
          </div>
          <div class="grid grid--quick">${quickActions}</div>
        </section>

        <section class="section" aria-labelledby="dashboard-categories">
          <div class="section__head">
            <h2 class="section__title" id="dashboard-categories">${escapeHtml(t('dashboard.categoryProgress'))}</h2>
          </div>
          ${card({ body: categoryChart })}
        </section>

        ${
          motivation
            ? `<section class="section">
                 <p class="quote">“${escapeHtml(motivation)}”</p>
               </section>`
            : ''
        }

        ${
          active
            ? `<section class="section">
                 <div class="section__head">
                   <h2 class="section__title">${escapeHtml(t('dashboard.goalTitle'))}</h2>
                 </div>
                 ${card({
                   body: `
                     <div class="grid grid--cards-2">
                       <div>
                         <p class="card__meta">${escapeHtml(t('dashboard.goalAccuracy'))}</p>
                         ${progressBar({
                           value: stats.globalAccuracy,
                           max: appConfig.recommendedStudyAccuracy,
                           showValue: true,
                           variant: 'success',
                           label: t('dashboard.goalAccuracy')
                         })}
                       </div>
                       <div>
                         <p class="card__meta">${escapeHtml(t('dashboard.goalLessons'))}</p>
                         ${progressBar({
                           value: stats.lessonsCompleted,
                           max: appConfig.recommendedLessonsCompleted,
                           showValue: true,
                           variant: 'success',
                           label: t('dashboard.goalLessons')
                         })}
                       </div>
                     </div>
                     ${progressNote}
                   `
                 })}
               </section>`
            : ''
        }
      </section>
    `;
  },

  mount() {
    // El dashboard no requiere controladores adicionales.
  }
};
