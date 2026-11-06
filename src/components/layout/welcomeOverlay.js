import { personalization } from '../../config/personalization.js';
import { escapeHtml } from '../../utils/formatting.js';
import { icon } from '../common/icons.js';

/** Ilustración de respaldo cuando no existe imagen personal. */
function fallbackArt() {
  return `
    <svg viewBox="0 0 320 180" class="dedication__art" role="img" aria-label="Illustration of a road leading toward a horizon">
      <defs>
        <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#1D3557" />
          <stop offset="100%" stop-color="#101827" />
        </linearGradient>
        <linearGradient id="roadGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#3B4A63" />
          <stop offset="100%" stop-color="#22304A" />
        </linearGradient>
      </defs>
      <rect width="320" height="180" rx="14" fill="url(#skyGrad)" />
      <circle cx="248" cy="46" r="18" fill="#F0A9BB" opacity="0.35" />
      <circle cx="248" cy="46" r="10" fill="#F0A9BB" opacity="0.6" />
      <path d="M0 118 L86 96 L160 112 L232 92 L320 116 L320 180 L0 180 Z" fill="#16202F" />
      <path d="M118 180 L150 112 L170 112 L202 180 Z" fill="url(#roadGrad)" />
      <path d="M158 118 L162 118 L166 132 L154 132 Z" fill="#A9B8F7" opacity="0.85" />
      <path d="M160 146 L166 146 L172 168 L154 168 Z" fill="#A9B8F7" opacity="0.7" />
      <path d="M40 118 L40 84 L48 84 L48 118 Z" fill="#2C3A52" />
      <circle cx="44" cy="76" r="9" fill="#A9B8F7" opacity="0.75" />
      <path d="M280 118 L280 92 L287 92 L287 118 Z" fill="#2C3A52" />
      <circle cx="283.5" cy="85" r="8" fill="#A9B8F7" opacity="0.75" />
    </svg>
  `;
}

/**
 * Pantalla de bienvenida romántica. Se muestra la primera vez (o cuando el
 * usuario la solicita). Se puede cerrar y nunca aparece durante un simulacro.
 */
export function renderWelcomeOverlay({
  title,
  text,
  buttonLabel,
  skipLabel,
  showImage = true
}) {
  const studentName = personalization.studentName?.trim();
  const fromName = personalization.fromName?.trim();
  const greeting = studentName ? `Hi ${escapeHtml(studentName)},` : '';

  const media = showImage
    ? `
      <figure class="dedication__media">
        <img src="${escapeHtml(personalization.dedicationImage)}" alt="" class="dedication__img"
             data-fallback-hidden="true" loading="lazy" />
        ${fallbackArt()}
      </figure>
    `
    : '';

  return `
    <div class="dedication" role="dialog" aria-modal="true" aria-labelledby="dedication-title">
      <div class="dedication__scrim"></div>
      <div class="dedication__card">
        <button class="dedication__close icon-btn" type="button" data-welcome-close
                aria-label="Close">${icon('x', { size: 20 })}</button>
        ${media}
        <p class="dedication__eyebrow">
          <span class="dedication__heart" aria-hidden="true">${icon('heart', { size: 16 })}</span>
        </p>
        <h1 class="dedication__title" id="dedication-title">${escapeHtml(title)}</h1>
        <p class="dedication__text">${greeting ? `<span class="dedication__greeting">${greeting}</span> ` : ''}${escapeHtml(text)}</p>
        ${personalization.signature || fromName ? `<p class="dedication__signature">${escapeHtml(personalization.signature || fromName)}</p>` : ''}
        <div class="dedication__actions">
          <button class="btn btn--primary btn--lg" type="button" data-autofocus data-welcome-close>
            <span class="btn__label">${escapeHtml(buttonLabel)}</span>
          </button>
          ${skipLabel ? `<button class="btn btn--ghost btn--md" type="button" data-welcome-close><span class="btn__label">${escapeHtml(skipLabel)}</span></button>` : ''}
        </div>
      </div>
    </div>
  `;
}

/** Conecta los eventos de la pantalla de bienvenida. */
export function mountWelcomeOverlay(root, onClose) {
  root.querySelectorAll('[data-welcome-close]').forEach((btn) => {
    btn.addEventListener('click', () => onClose());
  });

  // Si la imagen personal no existe, se oculta y queda la ilustración de respaldo.
  const img = root.querySelector('.dedication__img');
  if (img) {
    img.addEventListener('error', () => {
      img.remove();
    });
  }
}

export default { renderWelcomeOverlay, mountWelcomeOverlay };
