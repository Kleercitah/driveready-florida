import { escapeHtml, formatPercentValue } from '../../utils/formatting.js';
import { icon } from './icons.js';

/** Botón con variantes. `attrs` permite añadir data-* y aria-*. */
export function button({
  label,
  variant = 'primary',
  size = 'md',
  iconName = null,
  iconPosition = 'left',
  href = null,
  disabled = false,
  type = 'button',
  className = '',
  attrs = {},
  ariaLabel = null
}) {
  const classes = ['btn', `btn--${variant}`, `btn--${size}`, className].filter(Boolean).join(' ');
  const attributes = Object.entries(attrs)
    .filter(([, value]) => value !== undefined && value !== null && value !== false)
    .map(([key, value]) => `${key}="${escapeHtml(value)}"`)
    .join(' ');

  const iconMarkup = iconName ? `<span class="btn__icon">${icon(iconName, { size: size === 'lg' ? 22 : 18 })}</span>` : '';
  const content = `${iconPosition === 'left' ? iconMarkup : ''}<span class="btn__label">${escapeHtml(label)}</span>${
    iconPosition === 'right' ? iconMarkup : ''
  }`;

  const aria = ariaLabel ? ` aria-label="${escapeHtml(ariaLabel)}"` : '';
  const disabledAttr = disabled ? ' disabled aria-disabled="true"' : '';

  if (href && !disabled) {
    return `<a class="${classes}" href="${escapeHtml(href)}"${aria} ${attributes}>${content}</a>`;
  }
  return `<button class="${classes}" type="${type}"${aria}${disabledAttr} ${attributes}>${content}</button>`;
}

/** Tarjeta básica. */
export function card({ body, className = '', tag = 'div', attrs = {}, interactive = false }) {
  const classes = ['card', interactive ? 'card--interactive' : '', className].filter(Boolean).join(' ');
  const attributes = Object.entries(attrs)
    .map(([key, value]) => `${key}="${escapeHtml(value)}"`)
    .join(' ');
  return `<${tag} class="${classes}" ${attributes}>${body}</${tag}>`;
}

/** Insignia/Badge. */
export function badge({ label, variant = 'neutral', iconName = null }) {
  const iconMarkup = iconName ? icon(iconName, { size: 14 }) : '';
  return `<span class="badge badge--${variant}">${iconMarkup}<span>${escapeHtml(label)}</span></span>`;
}

/** Barra de progreso accesible. */
export function progressBar({ value, max = 100, label = null, showValue = false, variant = 'default' }) {
  const safeMax = max || 1;
  const percent = Math.max(0, Math.min(100, Math.round((value / safeMax) * 100)));
  const ariaLabel = label ? `aria-label="${escapeHtml(label)}"` : 'aria-label="Progress"';
  return `
    <div class="progress ${variant === 'success' ? 'progress--success' : ''}" role="progressbar" ${ariaLabel}
         aria-valuemin="0" aria-valuemax="${safeMax}" aria-valuenow="${value}">
      <div class="progress__track">
        <div class="progress__fill" style="width:${percent}%"></div>
      </div>
      ${showValue ? `<span class="progress__value">${percent}%</span>` : ''}
    </div>
  `;
}

/** Bloque de estadística con valor real. */
export function statTile({ label, value, iconName = null, hint = null, variant = 'default' }) {
  return `
    <div class="stat-tile stat-tile--${variant}">
      <div class="stat-tile__head">
        ${iconName ? `<span class="stat-tile__icon">${icon(iconName, { size: 18 })}</span>` : ''}
        <span class="stat-tile__label">${escapeHtml(label)}</span>
      </div>
      <p class="stat-tile__value">${escapeHtml(String(value))}</p>
      ${hint ? `<p class="stat-tile__hint">${escapeHtml(hint)}</p>` : ''}
    </div>
  `;
}

/** Estado vacío. */
export function emptyState({ title, text = null, iconName = 'sparkles', actionHtml = '' }) {
  return `
    <div class="empty-state">
      <span class="empty-state__icon" aria-hidden="true">${icon(iconName, { size: 28 })}</span>
      <h3 class="empty-state__title">${escapeHtml(title)}</h3>
      ${text ? `<p class="empty-state__text">${escapeHtml(text)}</p>` : ''}
      ${actionHtml ? `<div class="empty-state__action">${actionHtml}</div>` : ''}
    </div>
  `;
}

/** Mensaje de alerta. */
export function alert({ tone = 'info', title = null, text, iconName = null, className = '' }) {
  const toneIcon =
    iconName ?? (tone === 'success' ? 'circle-check' : tone === 'error' ? 'circle-x' : tone === 'warning' ? 'triangle-alert' : 'info');
  return `
    <div class="alert alert--${tone} ${className}" role="${tone === 'error' ? 'alert' : 'status'}">
      <span class="alert__icon" aria-hidden="true">${icon(toneIcon, { size: 18 })}</span>
      <div class="alert__body">
        ${title ? `<p class="alert__title">${escapeHtml(title)}</p>` : ''}
        <p class="alert__text">${escapeHtml(text)}</p>
      </div>
    </div>
  `;
}

/** Ruta de navegación (breadcrumbs). */
export function breadcrumbs({ items, label = 'Breadcrumb' }) {
  if (!items || items.length === 0) return '';
  const rendered = items
    .map((item, index) => {
      const isLast = index === items.length - 1;
      if (isLast || !item.href) {
        return `<li class="breadcrumbs__item" aria-current="page">${escapeHtml(item.label)}</li>`;
      }
      return `<li class="breadcrumbs__item"><a href="${escapeHtml(item.href)}">${escapeHtml(item.label)}</a></li>`;
    })
    .join('');
  return `<nav class="breadcrumbs" aria-label="${escapeHtml(label)}"><ol>${rendered}</ol></nav>`;
}

/** Encabezado de página con título y subtítulo. */
export function pageHeader({ eyebrow = null, title, subtitle = null, actionsHtml = '', breadcrumbsHtml = '' }) {
  return `
    <header class="page-header">
      ${breadcrumbsHtml}
      ${eyebrow ? `<p class="page-header__eyebrow">${escapeHtml(eyebrow)}</p>` : ''}
      <div class="page-header__row">
        <div>
          <h1 class="page-header__title">${escapeHtml(title)}</h1>
          ${subtitle ? `<p class="page-header__subtitle">${escapeHtml(subtitle)}</p>` : ''}
        </div>
        ${actionsHtml ? `<div class="page-header__actions">${actionsHtml}</div>` : ''}
      </div>
    </header>
  `;
}

/** Barra de precisión con color según valor. */
export function accuracyBar({ correct, total, label }) {
  const percent = total ? Math.round((correct / total) * 100) : 0;
  const variant = percent >= 80 ? 'success' : percent >= 60 ? 'warning' : 'danger';
  return `
    <div class="accuracy-bar accuracy-bar--${variant}">
      <div class="accuracy-bar__head">
        <span>${escapeHtml(label)}</span>
        <span class="accuracy-bar__value">${formatPercentValue(percent)}</span>
      </div>
      <div class="progress__track"><div class="progress__fill" style="width:${percent}%"></div></div>
    </div>
  `;
}

/** Fila de vocabulario. */
export function vocabularyRow({ en, es, note }) {
  return `
    <li class="vocab-item">
      <div class="vocab-item__head">
        <span class="vocab-item__en">${escapeHtml(en)}</span>
        <span class="vocab-item__es">${escapeHtml(es)}</span>
      </div>
      ${note ? `<p class="vocab-item__note">${escapeHtml(note)}</p>` : ''}
    </li>
  `;
}

/** Enlace de referencia a fuente oficial. */
export function sourceLink({ url, label, section = null }) {
  return `
    <a class="source-link" href="${escapeHtml(url)}" target="_blank" rel="noopener noreferrer">
      ${icon('external-link', { size: 14 })}
      <span>${escapeHtml(section ? `${label} — ${section}` : label)}</span>
    </a>
  `;
}

export default {
  button,
  card,
  badge,
  progressBar,
  statTile,
  emptyState,
  alert,
  breadcrumbs,
  pageHeader,
  accuracyBar,
  vocabularyRow,
  sourceLink
};
