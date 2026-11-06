import { escapeHtml } from '../utils/formatting.js';
import { pickLocalized } from '../i18n/index.js';
import { signs, signCategories } from '../data/signs/index.js';
import { shuffle } from '../engines/quizEngine.js';
import { icon } from '../components/common/icons.js';
import { badge, button, card, pageHeader } from '../components/common/ui.js';
import { announce } from '../components/common/toast.js';

const RECOGNITION_ROUNDS = 10;

let activeFilter = 'all';
// Estado de la práctica de reconocimiento (en memoria, se reinicia al salir).
let recognition = null;

if (typeof window !== 'undefined') {
  window.addEventListener('dr:leave-signs', () => {
    recognition = null;
  });
}

/** Construye la ronda de reconocimiento: mostrar la señal y elegir su nombre. */
function buildRecognition() {
  const pool = shuffle(signs).slice(0, Math.min(RECOGNITION_ROUNDS, signs.length));
  const rounds = pool.map((sign) => {
    const distractors = shuffle(signs.filter((s) => s.id !== sign.id)).slice(0, 3);
    return {
      answerId: sign.id,
      options: shuffle([sign, ...distractors]).map((s) => s.id)
    };
  });
  return { rounds, index: 0, selected: null, checked: false, score: 0 };
}

function ensureRecognition() {
  if (!recognition) recognition = buildRecognition();
  return recognition;
}

function signById(id) {
  return signs.find((s) => s.id === id) ?? null;
}

function renderGallery(language, t) {
  const filtered = activeFilter === 'all' ? signs : signs.filter((s) => s.category === activeFilter);

  const chips = [
    `<button class="chip ${activeFilter === 'all' ? 'is-active' : ''}" type="button"
              data-sign-filter="all" aria-pressed="${activeFilter === 'all'}">
       ${escapeHtml(t('signs.allSigns'))} (${signs.length})
     </button>`
  ]
    .concat(
      signCategories.map((category) => {
        const count = signs.filter((s) => s.category === category.id).length;
        return `<button class="chip ${activeFilter === category.id ? 'is-active' : ''}" type="button"
                        data-sign-filter="${category.id}" aria-pressed="${activeFilter === category.id}">
                  ${escapeHtml(pickLocalized(category.label, language))} (${count})
                </button>`;
      })
    )
    .join('');

  const cardsHtml = filtered
    .map(
      (sign) => `
        <article class="sign-card">
          <div class="sign-card__art">${sign.svg}</div>
          <div class="sign-card__body">
            <h3 class="sign-card__name">${escapeHtml(pickLocalized(sign.name, language))}</h3>
            <p class="sign-card__meta">${escapeHtml(
              `${pickLocalized(sign.shape, language)} · ${pickLocalized(sign.color, language)}`
            )}</p>
            <p class="sign-card__meaning">${escapeHtml(pickLocalized(sign.meaning, language))}</p>
            <p class="sign-card__meta">${icon('map-pin', { size: 13 })} ${escapeHtml(
              pickLocalized(sign.usage, language)
            )}</p>
          </div>
        </article>
      `
    )
    .join('');

  const categoryDescription =
    activeFilter === 'all'
      ? ''
      : pickLocalized(signCategories.find((c) => c.id === activeFilter)?.description, language);

  return `
    <div class="signs-filter" role="group" aria-label="${escapeHtml(t('signs.categoryLabel'))}">${chips}</div>
    ${categoryDescription ? `<p class="text-muted" style="margin-bottom:var(--space-4)">${escapeHtml(categoryDescription)}</p>` : ''}
    <div class="signs-grid">${cardsHtml}</div>
  `;
}

function renderRecognition(language, t) {
  const state = ensureRecognition();

  if (state.index >= state.rounds.length) {
    const percent = Math.round((state.score / state.rounds.length) * 100);
    return card({
      body: `
        <div class="stack-sm" style="text-align:center">
          <p class="card__meta">${escapeHtml(t('signs.recognitionTitle'))}</p>
          <p class="stat-tile__value">${state.score}/${state.rounds.length}</p>
          <p class="text-muted">${escapeHtml(t('practice.accuracy'))}: ${percent}%</p>
          <div class="cluster" style="justify-content:center">
            ${button({ label: t('common.retry'), iconName: 'rotate-ccw', attrs: { 'data-rec-restart': 'true' } })}
          </div>
        </div>
      `
    });
  }

  const round = state.rounds[state.index];
  const answerSign = signById(round.answerId);

  const optionsHtml = round.options
    .map((id) => {
      const sign = signById(id);
      let classes = 'option';
      if (state.checked) {
        if (id === round.answerId) classes += ' is-correct';
        else if (id === state.selected) classes += ' is-incorrect';
      } else if (id === state.selected) {
        classes += ' is-selected';
      }
      return `
        <li>
          <button class="${classes}" type="button" data-rec-option="${id}"
                  ${state.checked ? 'disabled' : ''} aria-pressed="${id === state.selected}">
            <span class="option__text">${escapeHtml(pickLocalized(sign.name, language))}</span>
          </button>
        </li>
      `;
    })
    .join('');

  return card({
    body: `
      <div class="cluster" style="justify-content:space-between;margin-bottom:var(--space-3)">
        <span class="card__meta">${escapeHtml(
          t('practice.sessionProgress', { current: state.index + 1, total: state.rounds.length })
        )}</span>
        ${badge({ label: `${state.score} ✓`, variant: 'success' })}
      </div>
      <div class="sign-card__art" style="border-radius:var(--radius-md);margin-bottom:var(--space-4)">
        ${answerSign.svg}
      </div>
      <h3 class="card__title">${escapeHtml(t('signs.recognitionPromptName'))}</h3>
      <ul class="options-list">${optionsHtml}</ul>
      ${
        state.checked
          ? `<div class="feedback ${
              state.selected === round.answerId ? 'feedback--correct' : 'feedback--incorrect'
            }" role="status">
               <p class="feedback__title">${escapeHtml(
                 state.selected === round.answerId ? t('practice.correctFeedback') : t('practice.incorrectFeedback')
               )}</p>
               <p class="feedback__text">${escapeHtml(pickLocalized(answerSign.meaning, language))}</p>
             </div>
             <div class="quiz-actions" style="justify-content:flex-end">
               ${button({
                 label: t('common.next'),
                 iconName: 'arrow-right',
                 iconPosition: 'right',
                 attrs: { 'data-rec-next': 'true' }
               })}
             </div>`
          : ''
      }
    `,
    className: 'recognition-card'
  });
}

export default {
  render(ctx) {
    const { t, language } = ctx;
    const started = recognition !== null;

    return `
      <section class="page">
        ${pageHeader({
          title: t('signs.title'),
          subtitle: t('signs.subtitle'),
          actionsHtml: badge({ label: t('signs.signCount', { count: signs.length }), variant: 'accent' })
        })}

        ${
          started
            ? ''
            : `<div class="cluster" style="margin-bottom:var(--space-6)">
                 ${button({
                   label: t('signs.startRecognition'),
                   variant: 'primary',
                   iconName: 'target',
                   attrs: { 'data-start-recognition': 'true' }
                 })}
               </div>`
        }

        ${
          started
            ? `<section class="section">
                 <div class="section__head">
                   <h2 class="section__title">${escapeHtml(t('signs.recognitionTitle'))}</h2>
                 </div>
                 ${renderRecognition(language, t)}
               </section>`
            : ''
        }

        <section class="section">
          <div class="section__head">
            <h2 class="section__title">${escapeHtml(t('signs.gallery'))}</h2>
          </div>
          ${renderGallery(language, t)}
        </section>
      </section>
    `;
  },

  mount(root, ctx) {
    const { t, language } = ctx;

    root.querySelectorAll('[data-sign-filter]').forEach((chip) => {
      chip.addEventListener('click', () => {
        activeFilter = chip.getAttribute('data-sign-filter');
        ctx.refresh();
      });
    });

    root.querySelector('[data-start-recognition]')?.addEventListener('click', () => {
      recognition = buildRecognition();
      ctx.refresh();
      setTimeout(() => {
        document.querySelector('.recognition-card')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 60);
    });

    root.querySelectorAll('[data-rec-option]').forEach((optionBtn) => {
      optionBtn.addEventListener('click', () => {
        const state = ensureRecognition();
        if (state.checked) return;
        const round = state.rounds[state.index];
        const id = optionBtn.getAttribute('data-rec-option');
        state.selected = id;
        state.checked = true;
        const isCorrect = id === round.answerId;
        if (isCorrect) state.score += 1;
        announce(isCorrect ? t('a11y.correctAnswerAnnounce') : t('a11y.incorrectAnswerAnnounce'));
        ctx.refresh();
      });
    });

    root.querySelector('[data-rec-next]')?.addEventListener('click', () => {
      const state = ensureRecognition();
      state.index += 1;
      state.selected = null;
      state.checked = false;
      ctx.refresh();
      scrollToTopIfFinished(state);
    });

    root.querySelector('[data-rec-restart]')?.addEventListener('click', () => {
      recognition = buildRecognition();
      ctx.refresh();
    });
  }
};

function scrollToTopIfFinished(state) {
  if (state.index >= state.rounds.length) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
