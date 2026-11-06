import { escapeHtml } from '../../utils/formatting.js';
import { icon } from './icons.js';

/** Avisos breves no bloqueantes y anuncios para lectores de pantalla. */

function getContainer() {
  let container = document.getElementById('toast-root');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-root';
    container.className = 'toast-root';
    container.setAttribute('aria-live', 'polite');
    container.setAttribute('aria-atomic', 'true');
    document.body.appendChild(container);
  }
  return container;
}

const ICONS = {
  success: 'circle-check',
  error: 'circle-x',
  warning: 'triangle-alert',
  info: 'info'
};

export function showToast(message, tone = 'info', duration = 3200) {
  const container = getContainer();
  const toast = document.createElement('div');
  toast.className = `toast toast--${tone}`;
  toast.setAttribute('role', tone === 'error' ? 'alert' : 'status');
  toast.innerHTML = `
    <span class="toast__icon" aria-hidden="true">${icon(ICONS[tone] ?? 'info', { size: 18 })}</span>
    <span class="toast__text">${escapeHtml(message)}</span>
  `;
  container.appendChild(toast);

  requestAnimationFrame(() => toast.classList.add('toast--visible'));

  const timer = setTimeout(() => {
    toast.classList.remove('toast--visible');
    setTimeout(() => toast.remove(), 250);
  }, duration);

  return () => {
    clearTimeout(timer);
    toast.remove();
  };
}

/** Anuncia un mensaje a lectores de pantalla sin mostrarlo visualmente. */
export function announce(message) {
  const region = document.getElementById('live-region');
  if (!region) return;
  region.textContent = '';
  // Un pequeño retraso garantiza que el lector de pantalla anuncie el cambio.
  setTimeout(() => {
    region.textContent = message;
  }, 60);
}

export default { showToast, announce };
