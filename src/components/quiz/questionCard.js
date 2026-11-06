import { escapeHtml } from '../../utils/formatting.js';
import { langKey, pickLocalized } from '../../i18n/index.js';
import { getCategoryTitle } from '../../data/categories.js';
import { getQuestionText, getQuestionOptions } from '../../data/questions/index.js';
import { icon } from '../common/icons.js';
import { badge, progressBar, sourceLink } from '../common/ui.js';

const LETTERS = ['A', 'B', 'C', 'D'];

/**
 * Tarjeta de pregunta para modo práctica/repaso.
 * Nunca revela la respuesta correcta antes de comprobarla.
 *
 * Bilingüe: `questionLanguage` ('en' | 'es') decide si el enunciado y las
 * opciones se muestran en inglés o en español. El cambio de idioma es solo
 * visual: los índices de las opciones se conservan, por lo que la selección,
 * la respuesta correcta y las estadísticas nunca se alteran.
 */
export function questionCard({
  question,
  index,
  total,
  selected = null,
  checked = false,
  t,
  language = 'en-US',
  explanationLanguage = 'en-US',
  questionLanguage = 'en',
  translationAvailable = false,
  showLanguageToggle = true,
  isFavorite = false,
  showCategory = true
}) {
  const isSpanish = langKey(questionLanguage) === 'es';
  const displayOptions = getQuestionOptions(question, questionLanguage);

  const optionsHtml = displayOptions
    .map((option, i) => {
      let classes = 'option';
      if (checked) {
        if (i === question.correctAnswerIndex) classes += ' is-correct';
        else if (i === selected) classes += ' is-incorrect';
      } else if (i === selected) {
        classes += ' is-selected';
      }

      const stateLabel = checked
        ? i === question.correctAnswerIndex
          ? t('a11y.correctAnswerAnnounce')
          : i === selected
            ? t('a11y.incorrectAnswerAnnounce')
            : ''
        : i === selected
          ? t('a11y.selected')
          : '';

      return `
        <li>
          <button class="${classes}" type="button" data-option-index="${i}"
                  ${checked ? 'disabled' : ''}
                  aria-pressed="${i === selected}"
                  ${stateLabel ? `aria-label="${escapeHtml(`${LETTERS[i]}. ${option}. ${stateLabel}`)}"` : ''}>
            <span class="option__key" aria-hidden="true">${LETTERS[i]}</span>
            <span class="option__text">${escapeHtml(option)}</span>
          </button>
        </li>
      `;
    })
    .join('');

  const explanation = pickLocalized(question.explanation, explanationLanguage);
  const secondaryExplanation = pickLocalized(
    question.explanation,
    langKey(explanationLanguage) === 'en' ? 'es' : 'en'
  );

  const feedbackHtml = checked
    ? `
      <div class="feedback ${selected === question.correctAnswerIndex ? 'feedback--correct' : 'feedback--incorrect'}"
           role="status">
        <p class="feedback__title">
          ${icon(selected === question.correctAnswerIndex ? 'circle-check' : 'circle-x', { size: 18 })}
          ${escapeHtml(
            selected === question.correctAnswerIndex ? t('practice.correctFeedback') : t('practice.incorrectFeedback')
          )}
        </p>
        ${
          selected !== question.correctAnswerIndex
            ? `<p class="feedback__text"><strong>${escapeHtml(t('practice.correctAnswerIs'))}</strong> ${escapeHtml(
                displayOptions[question.correctAnswerIndex]
              )}</p>`
            : ''
        }
        <p class="feedback__text">${escapeHtml(explanation)}</p>
        ${
          secondaryExplanation
            ? `<div class="translation">
                 <button class="translation__toggle" type="button" data-toggle-translation
                         aria-expanded="false">
                   ${icon('languages', { size: 14 })} ${escapeHtml(t('common.showTranslation'))}
                 </button>
                 <p class="translation__text" hidden>${escapeHtml(secondaryExplanation)}</p>
               </div>`
            : ''
        }
        <p class="vocab-item__note">${sourceLink({
          url: question.source.url,
          label: t('common.source'),
          section: question.source.section
        })}</p>
      </div>
    `
    : '';

  // Botón de idioma: traduce el enunciado y las cuatro opciones.
  // Si la traducción no está completa, se muestra un estado honesto (deshabilitado).
  const languageControlHtml = showLanguageToggle
    ? translationAvailable
      ? `
        <div class="quiz-lang">
          <button class="lang-toggle" type="button" data-toggle-question-language
                  aria-pressed="${isSpanish}"
                  aria-label="${escapeHtml(
                    isSpanish ? t('common.switchToEnglish') : t('common.switchToSpanish')
                  )}">
            ${icon('languages', { size: 16 })}
            <span class="lang-toggle__label">${escapeHtml(
              isSpanish ? t('common.showInEnglish') : t('common.viewInSpanish')
            )}</span>
          </button>
        </div>
      `
      : `
        <div class="quiz-lang">
          <span class="lang-toggle lang-toggle--unavailable" aria-disabled="true">
            ${icon('languages', { size: 16 })}
            <span class="lang-toggle__label">${escapeHtml(t('common.translationUnavailable'))}</span>
          </span>
        </div>
      `
    : '';

  return `
    <article class="question-card" data-question-id="${escapeHtml(question.id)}"
             data-question-language="${isSpanish ? 'es' : 'en'}">
      <div class="quiz-topbar">
        <div class="quiz-topbar__meta">
          <span class="badge badge--accent">${escapeHtml(
            t('practice.sessionProgress', { current: index + 1, total })
          )}</span>
          ${showCategory ? badge({ label: getCategoryTitle(question.category, language), variant: 'neutral' }) : ''}
          ${badge({ label: t(`common.${question.difficulty}`), variant: 'accent' })}
        </div>
        <div class="quiz-topbar__actions">
          ${languageControlHtml}
          <button class="icon-btn" type="button" data-toggle-favorite
                  aria-pressed="${isFavorite}"
                  aria-label="${escapeHtml(isFavorite ? t('practice.removeFavorite') : t('practice.addFavorite'))}"
                  title="${escapeHtml(isFavorite ? t('practice.removeFavorite') : t('practice.addFavorite'))}">
            ${icon('heart', { size: 18, className: isFavorite ? 'icon-favorite is-active' : 'icon-favorite' })}
          </button>
        </div>
      </div>

      ${progressBar({ value: index + 1, max: total, label: t('a11y.progressBarLabel') })}

      <h2 class="question-card__text" ${isSpanish ? 'lang="es"' : ''}>${escapeHtml(
        getQuestionText(question, questionLanguage)
      )}</h2>
      <ul class="options-list" ${isSpanish ? 'lang="es"' : ''}>${optionsHtml}</ul>
      ${feedbackHtml}
    </article>
  `;
}

export default questionCard;
