import { appConfig } from '../config/appConfig.js';
import { buildHref } from '../config/routes.js';
import { categories, getCategoryTitle } from '../data/categories.js';
import { questions, getVerifiedQuestions } from '../data/questions/index.js';
import { getMissedQuestionIds, getFavorites, getActivePractice } from '../services/progressService.js';
import { getState } from '../services/storage.js';
import { escapeHtml } from '../utils/formatting.js';
import { alert, button, card, pageHeader } from '../components/common/ui.js';

/** Calcula el conjunto de preguntas disponibles para una selección. */
export function resolvePracticePool(scope, { categoryId = null, difficulty = null } = {}) {
  switch (scope) {
    case 'category':
      return questions.filter((q) => q.category === categoryId);
    case 'unanswered': {
      const stats = getState().questionStats;
      return questions.filter((q) => !stats[q.id]);
    }
    case 'missed': {
      const missed = new Set(getMissedQuestionIds(100));
      return questions.filter((q) => missed.has(q.id));
    }
    case 'favorites': {
      const favorites = new Set(getFavorites());
      return questions.filter((q) => favorites.has(q.id));
    }
    case 'difficulty':
      return questions.filter((q) => q.difficulty === difficulty);
    case 'all':
    default:
      return [...questions];
  }
}

export default {
  render(ctx) {
    const { t, language } = ctx;
    const active = getActivePractice();
    const totalQuestions = questions.length;

    const categoryOptions = categories
      .map((category) => {
        const count = questions.filter((q) => q.category === category.id).length;
        return `<option value="${category.id}">${escapeHtml(
          `${category.number} · ${getCategoryTitle(category.id, language)} (${count})`
        )}</option>`;
      })
      .join('');

    const sizeOptions = appConfig.practiceSizes
      .map(
        (size, i) => `
          <label class="radio-option">
            <input type="radio" name="practice-size" value="${size}" ${i === 1 ? 'checked' : ''} />
            <span>${size} ${escapeHtml(t('common.questions').toLowerCase())}</span>
          </label>
        `
      )
      .join('');

    return `
      <section class="page">
        ${pageHeader({ title: t('practice.title'), subtitle: t('practice.subtitle') })}

        ${
          active
            ? alert({
                tone: 'warning',
                title: t('practice.resumeHint'),
                text: t('practice.sessionProgress', {
                  current: (active.currentIndex ?? 0) + 1,
                  total: active.total ?? active.questionIds.length
                })
              }) +
              `<div class="cluster" style="margin:var(--space-3) 0 var(--space-6)">
                 ${button({ label: t('common.continue'), href: buildHref('/practice/session'), variant: 'primary' })}
               </div>`
            : ''
        }

        <form class="card" data-practice-form novalidate>
          <h2 class="card__title">${escapeHtml(t('practice.setupTitle'))}</h2>

          <fieldset style="border:0;padding:0;margin:0 0 var(--space-5)">
            <legend class="field__label">${escapeHtml(t('practice.chooseScope'))}</legend>
            <div class="radio-group">
              <label class="radio-option">
                <input type="radio" name="practice-scope" value="all" checked />
                <span>${escapeHtml(t('practice.scopeAll'))} (${totalQuestions})</span>
              </label>
              <label class="radio-option">
                <input type="radio" name="practice-scope" value="category" />
                <span>${escapeHtml(t('practice.scopeCategory'))}</span>
              </label>
              <label class="radio-option">
                <input type="radio" name="practice-scope" value="unanswered" />
                <span>${escapeHtml(t('practice.scopeUnanswered'))}</span>
              </label>
              <label class="radio-option">
                <input type="radio" name="practice-scope" value="missed" />
                <span>${escapeHtml(t('practice.scopeMissed'))}</span>
              </label>
              <label class="radio-option">
                <input type="radio" name="practice-scope" value="favorites" />
                <span>${escapeHtml(t('practice.scopeFavorites'))}</span>
              </label>
              <label class="radio-option">
                <input type="radio" name="practice-scope" value="difficulty" />
                <span>${escapeHtml(t('practice.scopeDifficulty'))}</span>
              </label>
            </div>
          </fieldset>

          <div class="field" data-category-field hidden>
            <label class="field__label" for="practice-category">${escapeHtml(t('practice.chooseCategory'))}</label>
            <select class="select" id="practice-category" name="practice-category">
              ${categoryOptions}
            </select>
          </div>

          <div class="field" data-difficulty-field hidden>
            <label class="field__label" for="practice-difficulty">${escapeHtml(t('practice.chooseDifficulty'))}</label>
            <select class="select" id="practice-difficulty" name="practice-difficulty">
              <option value="beginner">${escapeHtml(t('common.beginner'))}</option>
              <option value="intermediate">${escapeHtml(t('common.intermediate'))}</option>
              <option value="advanced">${escapeHtml(t('common.advanced'))}</option>
            </select>
          </div>

          <fieldset style="border:0;padding:0;margin:0 0 var(--space-4)">
            <legend class="field__label">${escapeHtml(t('practice.chooseLength'))}</legend>
            <div class="radio-group">${sizeOptions}</div>
          </fieldset>

          <div class="field">
            <label class="field__label" for="practice-custom">
              ${escapeHtml(t('practice.customLength'))} <span class="text-muted">(${escapeHtml(t('common.optional'))})</span>
            </label>
            <input class="input" type="number" id="practice-custom" name="practice-custom"
                   min="${appConfig.practiceCustomMin}" max="${appConfig.practiceCustomMax}"
                   placeholder="${appConfig.practiceCustomMin}–${appConfig.practiceCustomMax}" />
            <p class="field__hint" data-pool-hint>
              ${escapeHtml(t('practice.availablePool'))}: <strong data-pool-count>${totalQuestions}</strong>
            </p>
          </div>

          <div data-form-error></div>

          <div class="quiz-actions" style="justify-content:flex-end">
            ${button({
              label: t('practice.startSession'),
              variant: 'primary',
              size: 'lg',
              type: 'submit',
              iconName: 'play'
            })}
          </div>
        </form>
      </section>
    `;
  },

  mount(root, ctx) {
    const { t, navigate } = ctx;
    const form = root.querySelector('[data-practice-form]');
    if (!form) return;

    const categoryField = form.querySelector('[data-category-field]');
    const difficultyField = form.querySelector('[data-difficulty-field]');
    const errorBox = form.querySelector('[data-form-error]');
    const poolCount = form.querySelector('[data-pool-count]');
    const scopeRadios = form.querySelectorAll('input[name="practice-scope"]');
    const customInput = form.querySelector('#practice-custom');

    const currentScope = () => form.querySelector('input[name="practice-scope"]:checked')?.value ?? 'all';

    const updatePool = () => {
      const scope = currentScope();
      categoryField.hidden = scope !== 'category';
      difficultyField.hidden = scope !== 'difficulty';
      const pool = resolvePracticePool(scope, {
        categoryId: form.querySelector('#practice-category')?.value,
        difficulty: form.querySelector('#practice-difficulty')?.value
      });
      poolCount.textContent = String(pool.length);
      return pool.length;
    };

    scopeRadios.forEach((radio) => radio.addEventListener('change', updatePool));
    form.querySelector('#practice-category')?.addEventListener('change', updatePool);
    form.querySelector('#practice-difficulty')?.addEventListener('change', updatePool);
    updatePool();

    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const scope = currentScope();
      const categoryId = form.querySelector('#practice-category')?.value ?? null;
      const difficulty = form.querySelector('#practice-difficulty')?.value ?? null;

      const pool = resolvePracticePool(scope, { categoryId, difficulty });
      const customValue = Number.parseInt(customInput.value, 10);
      const selectedSize = form.querySelector('input[name="practice-size"]:checked')?.value;
      const size = Number.isFinite(customValue) && customValue > 0 ? customValue : Number(selectedSize);

      if (pool.length < 1) {
        errorBox.innerHTML = alert({ tone: 'error', text: t('practice.notEnoughQuestions') });
        return;
      }

      const effectiveSize = Math.min(size, pool.length);
      navigate('/practice/session', { scope, category: categoryId, difficulty, size: effectiveSize });
    });
  }
};
