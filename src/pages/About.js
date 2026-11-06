import { appConfig } from '../config/appConfig.js';
import { buildHref } from '../config/routes.js';
import sourcesData from '../data/sources.json';
import { escapeHtml } from '../utils/formatting.js';
import { formatDate } from '../utils/dates.js';
import { icon } from '../components/common/icons.js';
import { button, card, pageHeader, sourceLink } from '../components/common/ui.js';

const HOW_TO_KEYS = [
  'about.howToUse1',
  'about.howToUse2',
  'about.howToUse3',
  'about.howToUse4',
  'about.howToUse5'
];

export default {
  render(ctx) {
    const { t, language } = ctx;

    const sources = (sourcesData.sources ?? [])
      .map(
        (source) => `
          <li class="list__item" style="display:flex;flex-direction:column;gap:var(--space-1)">
            ${sourceLink({ url: source.url, label: source.shortLabel })}
            <span class="text-muted" style="font-size:var(--fs-xs)">${escapeHtml(source.publisher)}</span>
          </li>
        `
      )
      .join('');

    const howTo = HOW_TO_KEYS.map((key) => `<li class="list__item">${escapeHtml(t(key))}</li>`).join('');

    return `
      <section class="page">
        <div class="about-hero">
          <h1>${escapeHtml(t('about.title'))}</h1>
          <p>${escapeHtml(t('about.intro'))}</p>
        </div>

        <div class="prose" style="max-width:100%">
          <section class="section">
            <h2>${escapeHtml(t('about.howToUseTitle'))}</h2>
            <ol class="list">${howTo}</ol>
          </section>

          <section class="section">
            <h2>${escapeHtml(t('about.examFactsTitle'))}</h2>
            <p>${escapeHtml(t('about.examFactsText'))}</p>
            <div class="grid grid--results" style="margin:var(--space-4) 0">
              ${card({
                body: `<p class="card__meta">${escapeHtml(t('common.questions'))}</p><p class="stat-tile__value">${appConfig.examTotalQuestions}</p>`
              })}
              ${card({
                body: `<p class="card__meta">${escapeHtml(t('results.threshold'))}</p><p class="stat-tile__value">${appConfig.examPassingCorrect}/${appConfig.examTotalQuestions}</p>`
              })}
              ${card({
                body: `<p class="card__meta">${escapeHtml(t('results.finalPercentage'))}</p><p class="stat-tile__value">${appConfig.examPassingPercentage}%</p>`
              })}
            </div>
            <div class="callout callout--warning">
              <p style="margin:0">${escapeHtml(t('about.examDisclaimer'))}</p>
            </div>
          </section>

          <section class="section">
            <h2>${escapeHtml(t('about.sourcesTitle'))}</h2>
            <p>${escapeHtml(t('about.sourcesText'))}</p>
            <ul class="list">${sources}</ul>
            <p class="text-muted" style="font-size:var(--fs-xs)">
              ${escapeHtml(t('common.source'))}: ${escapeHtml(sourcesData.verifiedOn ?? '')} ·
              ${escapeHtml(formatDate(sourcesData.verifiedOn, language))}
            </p>
          </section>

          <section class="section">
            <h2>${escapeHtml(t('about.privacyTitle'))}</h2>
            <p>${escapeHtml(t('about.privacyText'))}</p>
          </section>

          <section class="section">
            <div class="callout">
              <p style="margin:0 0 var(--space-2)">
                <strong>${icon('shield-check', { size: 15 })} ${escapeHtml(t('about.notAffiliated'))}</strong>
              </p>
              <p style="margin:0;color:var(--text-secondary)">${escapeHtml(appConfig.disclaimer)}</p>
            </div>
          </section>
        </div>

        <div class="cluster" style="margin-top:var(--space-6)">
          ${button({ label: t('about.howToUseTitle'), href: buildHref('/learn'), variant: 'primary', iconName: 'book-open' })}
          ${button({ label: t('nav.home'), href: buildHref('/'), variant: 'ghost', iconName: 'house' })}
        </div>
      </section>
    `;
  },

  mount() {
    // Página informativa sin controladores.
  }
};
