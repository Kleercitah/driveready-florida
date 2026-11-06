import { buildHref } from '../config/routes.js';
import { button, pageHeader } from '../components/common/ui.js';

export default {
  render(ctx) {
    const { t } = ctx;
    return `
      <section class="page">
        ${pageHeader({ title: t('notFound.title') })}
        <p class="prose">${t('notFound.text')}</p>
        <div class="cluster" style="margin-top:var(--space-5)">
          ${button({ label: t('notFound.backHome'), href: buildHref('/'), variant: 'primary', iconName: 'house' })}
        </div>
      </section>
    `;
  },

  mount() {
    // Sin controladores.
  }
};
