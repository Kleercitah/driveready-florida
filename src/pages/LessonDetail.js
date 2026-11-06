import { buildHref } from '../config/routes.js';
import { pickLocalized } from '../i18n/index.js';
import { getLesson, lessons } from '../data/lessons/index.js';
import { getQuestionsByCategory } from '../data/questions/index.js';
import { getCategoryTitle } from '../data/categories.js';
import { isLessonCompleted } from '../services/progressService.js';
import { setLessonCompleted } from '../services/progressService.js';
import { escapeHtml } from '../utils/formatting.js';
import { icon } from '../components/common/icons.js';
import { alert, badge, breadcrumbs, button, card, pageHeader } from '../components/common/ui.js';
import { renderListenControl } from '../components/audio/ListenButton.js';
import { AUDIO_KINDS } from '../audio/audioManifest.js';
import { getAudioLanguage } from '../audio/audioController.js';
import { showToast, announce } from '../components/common/toast.js';

const LETTERS = ['A', 'B', 'C', 'D'];

function renderBody(text) {
  return String(text)
    .split('\n\n')
    .filter(Boolean)
    .map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`)
    .join('');
}

function renderQuickCheck(lesson, t, language) {
  return lesson.quickCheck
    .map((item, index) => {
      const question = pickLocalized(item.question, language);
      const options = item.options
        .map((option, i) => {
          const text = pickLocalized(option, language);
          return `
            <li>
              <button class="option" type="button" data-check-index="${i}" data-question-index="${index}">
                <span class="option__key" aria-hidden="true">${LETTERS[i]}</span>
                <span class="option__text">${escapeHtml(text)}</span>
              </button>
            </li>
          `;
        })
        .join('');
      const explanation = pickLocalized(item.explanation, language);
      return `
        <div class="card" data-quick-check="${index}" style="margin-bottom:var(--space-4)">
          <p class="card__meta">${escapeHtml(t('learn.quickCheck'))} ${index + 1}/${lesson.quickCheck.length}</p>
          <h3 class="card__title">${escapeHtml(question)}</h3>
          <ul class="options-list">${options}</ul>
          <div class="feedback" data-feedback hidden>
            <p class="feedback__title"></p>
            <p class="feedback__text">${escapeHtml(explanation)}</p>
          </div>
        </div>
      `;
    })
    .join('');
}

export default {
  render(ctx) {
    const { t, language, params } = ctx;
    const lesson = getLesson(params.lessonId);

    if (!lesson) {
      return `
        <section class="page">
          ${pageHeader({ title: t('learn.lessonNotFound') })}
          ${alert({ tone: 'warning', text: t('learn.lessonNotFound') })}
          <div style="margin-top:var(--space-4)">
            ${button({ label: t('learn.backToModules'), href: buildHref('/learn'), variant: 'primary' })}
          </div>
        </section>
      `;
    }

    const completed = isLessonCompleted(lesson.id);
    const relatedCount = getQuestionsByCategory(lesson.categoryId).length;
    const index = lessons.findIndex((l) => l.id === lesson.id);
    const prev = lessons[index - 1] ?? null;
    const next = lessons[index + 1] ?? null;
    const audioLanguage = getAudioLanguage();

    const toc = lesson.sections
      .map(
        (section, i) =>
          `<li><a href="#/learn/${lesson.id}#section-${section.id}" data-toc-link="section-${section.id}">${escapeHtml(
            pickLocalized(section.title, language)
          )}</a></li>`
      )
      .join('');

    const sections = lesson.sections
      .map(
        (section) => `
          <article class="lesson-section" id="section-${section.id}">
            <div class="lesson-section__head">
              <h2 class="lesson-section__title">${escapeHtml(pickLocalized(section.title, language))}</h2>
              ${renderListenControl({
                t,
                kind: AUDIO_KINDS.LESSON_SECTION,
                contentId: lesson.id,
                sectionId: section.id,
                title: pickLocalized(section.title, language),
                language: audioLanguage
              })}
            </div>
            <div class="lesson-prose">${renderBody(pickLocalized(section.body, language))}</div>
          </article>
        `
      )
      .join('');

    const objectives = pickLocalized(lesson.objectives, language)
      .map((objective) => `<li>${escapeHtml(objective)}</li>`)
      .join('');

    const examples = lesson.examples
      .map(
        (example) => `
          <div class="callout">
            <p class="card__title" style="margin-bottom:var(--space-1)">${escapeHtml(
              pickLocalized(example.title, language)
            )}</p>
            <p style="margin:0">${escapeHtml(pickLocalized(example.body, language))}</p>
          </div>
        `
      )
      .join('');

    const scenarios = (lesson.scenarios ?? [])
      .map(
        (scenario) => `
          <div class="callout callout--rose">
            <p class="card__title" style="margin-bottom:var(--space-1)">${escapeHtml(
              pickLocalized(scenario.title, language)
            )}</p>
            <p style="margin-bottom:var(--space-2)">${escapeHtml(pickLocalized(scenario.prompt, language))}</p>
            <p style="margin:0"><strong>${escapeHtml(t('learn.howToAct'))}:</strong> ${escapeHtml(
              pickLocalized(scenario.resolution, language)
            )}</p>
          </div>
        `
      )
      .join('');

    const mistakes = pickLocalized(lesson.commonMistakes, language)
      .map((mistake) => `<li>${escapeHtml(mistake)}</li>`)
      .join('');

    const vocabulary = lesson.vocabulary
      .map(
        (item) => `
          <li class="vocab-item">
            <div class="vocab-item__head">
              <span class="vocab-item__en">${escapeHtml(item.en)}</span>
              <span class="vocab-item__es">${escapeHtml(item.es)}</span>
            </div>
            ${item.note ? `<p class="vocab-item__note">${escapeHtml(pickLocalized(item.note, language))}</p>` : ''}
          </li>
        `
      )
      .join('');

    const references = lesson.references
      .map(
        (reference) => `
          <li class="list__item">
            <a class="source-link" href="${escapeHtml(reference.url)}" target="_blank" rel="noopener noreferrer">
              ${icon('external-link', { size: 14 })}
              <span>${escapeHtml(pickLocalized(reference.label, language))} — ${escapeHtml(
                pickLocalized(reference.section, language)
              )}</span>
            </a>
          </li>
        `
      )
      .join('');

    const crumb = breadcrumbs({
      label: t('a11y.breadcrumb'),
      items: [
        { label: t('nav.home'), href: buildHref('/') },
        { label: t('learn.title'), href: buildHref('/learn') },
        { label: pickLocalized(lesson.title, language) }
      ]
    });

    return `
      <section class="page">
        ${pageHeader({
          title: pickLocalized(lesson.title, language),
          subtitle: pickLocalized(lesson.summary, language),
          breadcrumbsHtml: crumb,
          actionsHtml: `
            ${badge({ label: `${lesson.number} · ${getCategoryTitle(lesson.categoryId, language)}`, variant: 'accent' })}
            ${completed ? badge({ label: t('learn.completed'), variant: 'success', iconName: 'check' }) : ''}
          `
        })}

        <div class="listen-row">
          ${renderListenControl({
            t,
            kind: AUDIO_KINDS.LESSON_INTRO,
            contentId: lesson.id,
            title: pickLocalized(lesson.title, language),
            language: audioLanguage
          })}
        </div>

        <div class="lesson-layout">
          <div>
            <nav class="lesson-toc" aria-label="${escapeHtml(t('learn.sections'))}">
              <p class="lesson-toc__title">${escapeHtml(t('learn.sections'))}</p>
              <ol>${toc}</ol>
            </nav>
          </div>

          <div class="stack-lg">
            <div class="card">
              <h2 class="card__title">${escapeHtml(t('learn.objectives'))}</h2>
              <ul>${objectives}</ul>
            </div>

            ${sections}

            ${examples ? `<section><h2 class="lesson-section__title">${escapeHtml(t('learn.examples'))}</h2>${examples}</section>` : ''}
            ${scenarios ? `<section>${scenarios}</section>` : ''}

            <section class="card">
              <h2 class="card__title">${escapeHtml(t('learn.commonMistakes'))}</h2>
              <ul>${mistakes}</ul>
            </section>

            <section class="card">
              <h2 class="card__title">${escapeHtml(t('learn.vocabulary'))}</h2>
              <ul style="list-style:none;padding:0;margin:0">${vocabulary}</ul>
            </section>

            <section>
              <h2 class="lesson-section__title">${escapeHtml(t('learn.quickCheck'))}</h2>
              ${renderQuickCheck(lesson, t, language)}
            </section>

            <section class="card">
              <h2 class="card__title">${escapeHtml(t('learn.references'))}</h2>
              <ul class="list">${references}</ul>
            </section>

            <section class="cluster" style="justify-content:space-between;gap:var(--space-3)">
              <div>
                ${button({
                  label: completed ? t('learn.markIncomplete') : t('learn.markComplete'),
                  variant: completed ? 'ghost' : 'primary',
                  iconName: completed ? 'rotate-ccw' : 'check',
                  attrs: { 'data-toggle-complete': lesson.id, 'aria-pressed': String(completed) }
                })}
              </div>
              <div class="cluster">
                ${button({
                  label: `${t('learn.relatedPractice')} (${relatedCount})`,
                  href: buildHref('/practice/session', { scope: 'category', category: lesson.categoryId, size: 10 }),
                  variant: 'secondary',
                  iconName: 'square-pen'
                })}
              </div>
            </section>

            <nav class="cluster" style="justify-content:space-between" aria-label="${escapeHtml(t('learn.modules'))}">
              ${
                prev
                  ? button({
                      label: `${prev.number} ${pickLocalized(prev.title, language)}`,
                      href: buildHref(`/learn/${prev.id}`),
                      variant: 'ghost',
                      size: 'sm',
                      iconName: 'arrow-left'
                    })
                  : '<span></span>'
              }
              ${
                next
                  ? button({
                      label: `${next.number} ${pickLocalized(next.title, language)}`,
                      href: buildHref(`/learn/${next.id}`),
                      variant: 'ghost',
                      size: 'sm',
                      iconName: 'arrow-right',
                      iconPosition: 'right'
                    })
                  : ''
              }
            </nav>
          </div>
        </div>
      </section>
    `;
  },

  mount(root, ctx) {
    const { t, language } = ctx;
    const lessonId = ctx.params.lessonId;
    const lesson = getLesson(lessonId);
    if (!lesson) return;

    // Marcar como completada
    const toggle = root.querySelector('[data-toggle-complete]');
    toggle?.addEventListener('click', () => {
      const nowCompleted = !isLessonCompleted(lessonId);
      setLessonCompleted(lessonId, nowCompleted);
      showToast(nowCompleted ? t('learn.completed') : t('learn.markIncomplete'), 'success');
      ctx.refresh();
    });

    // Comprobación rápida
    root.querySelectorAll('[data-quick-check]').forEach((card) => {
      const index = Number(card.getAttribute('data-quick-check'));
      const item = lesson.quickCheck[index];
      const feedback = card.querySelector('[data-feedback]');
      const title = feedback.querySelector('.feedback__title');

      card.querySelectorAll('[data-check-index]').forEach((optionBtn) => {
        optionBtn.addEventListener('click', () => {
          const selected = Number(optionBtn.getAttribute('data-check-index'));
          const isCorrect = selected === item.correctIndex;
          card.querySelectorAll('[data-check-index]').forEach((btn) => {
            btn.disabled = true;
            const btnIndex = Number(btn.getAttribute('data-check-index'));
            if (btnIndex === item.correctIndex) btn.classList.add('is-correct');
            else if (btnIndex === selected) btn.classList.add('is-incorrect');
          });
          feedback.hidden = false;
          feedback.classList.add(isCorrect ? 'feedback--correct' : 'feedback--incorrect');
          title.innerHTML = `${icon(isCorrect ? 'circle-check' : 'circle-x', { size: 18 })} ${escapeHtml(
            isCorrect ? t('practice.correctFeedback') : t('practice.incorrectFeedback')
          )}`;
          announce(isCorrect ? t('a11y.correctAnswerAnnounce') : t('a11y.incorrectAnswerAnnounce'));
        });
      });
    });

    // Enlaces del índice: desplazamiento suave dentro de la página
    root.querySelectorAll('[data-toc-link]').forEach((link) => {
      link.addEventListener('click', (event) => {
        event.preventDefault();
        const targetId = link.getAttribute('data-toc-link');
        const target = document.getElementById(targetId);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          target.setAttribute('tabindex', '-1');
          target.focus({ preventScroll: true });
        }
      });
    });
  }
};
