import { escapeHtml } from '../../utils/formatting.js';

/**
 * Sistema de modales accesible: atrapa el foco, cierra con Escape y devuelve el
 * foco al elemento que lo abrió.
 */

const FOCUSABLE =
  'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';

let activeModal = null;

function getRoot() {
  return document.getElementById('modal-root') ?? document.body;
}

export function openModal({
  title,
  bodyHtml = '',
  actionsHtml = '',
  dismissible = true,
  size = 'md',
  onMount = null,
  onClose = null
}) {
  closeModal();

  const previouslyFocused = document.activeElement;
  const overlay = document.createElement('div');
  overlay.className = 'modal-overlay';
  overlay.innerHTML = `
    <div class="modal modal--${size}" role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <div class="modal__header">
        <h2 class="modal__title" id="modal-title">${escapeHtml(title)}</h2>
        ${
          dismissible
            ? '<button class="modal__close" type="button" data-modal-close aria-label="Close dialog">&times;</button>'
            : ''
        }
      </div>
      <div class="modal__body">${bodyHtml}</div>
      ${actionsHtml ? `<div class="modal__actions">${actionsHtml}</div>` : ''}
    </div>
  `;

  function handleKeydown(event) {
    if (event.key === 'Escape' && dismissible) {
      event.preventDefault();
      close();
      return;
    }
    if (event.key === 'Tab') {
      const focusables = overlay.querySelectorAll(FOCUSABLE);
      if (focusables.length === 0) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }
  }

  function handleOverlayClick(event) {
    if (event.target === overlay && dismissible) close();
  }

  let closed = false;
  function close() {
    if (closed) return;
    closed = true;
    document.removeEventListener('keydown', handleKeydown);
    overlay.removeEventListener('mousedown', handleOverlayClick);
    overlay.remove();
    if (previouslyFocused instanceof HTMLElement) previouslyFocused.focus();
    activeModal = null;
    if (typeof onClose === 'function') onClose();
  }

  overlay.addEventListener('mousedown', handleOverlayClick);
  overlay.querySelectorAll('[data-modal-close]').forEach((btn) => {
    btn.addEventListener('click', close);
  });
  document.addEventListener('keydown', handleKeydown);
  getRoot().appendChild(overlay);

  const focusable = overlay.querySelector('[data-autofocus]') ?? overlay.querySelector(FOCUSABLE);
  if (focusable instanceof HTMLElement) focusable.focus();

  activeModal = { overlay, close };
  if (typeof onMount === 'function') onMount(overlay, close);

  return close;
}

export function closeModal() {
  if (activeModal) activeModal.close();
}

export function isModalOpen() {
  return Boolean(activeModal);
}

/** Diálogo de confirmación que devuelve una promesa. */
export function confirmDialog({
  title,
  text,
  confirmLabel = 'Confirm',
  cancelLabel = 'Cancel',
  tone = 'primary',
  dismissible = true
}) {
  return new Promise((resolve) => {
    let resolved = false;
    const settle = (value) => {
      if (resolved) return;
      resolved = true;
      resolve(value);
    };

    const actionsHtml = `
      <button class="btn btn--ghost btn--md" type="button" data-confirm-cancel>
        <span class="btn__label">${escapeHtml(cancelLabel)}</span>
      </button>
      <button class="btn btn--${tone} btn--md" type="button" data-autofocus data-confirm-accept>
        <span class="btn__label">${escapeHtml(confirmLabel)}</span>
      </button>
    `;

    const close = openModal({
      title,
      bodyHtml: `<p class="modal__text">${escapeHtml(text)}</p>`,
      actionsHtml,
      dismissible,
      size: 'sm',
      onMount: (overlay, closeFn) => {
        overlay.querySelector('[data-confirm-accept]').addEventListener('click', () => {
          settle(true);
          closeFn();
        });
        overlay.querySelector('[data-confirm-cancel]').addEventListener('click', () => {
          settle(false);
          closeFn();
        });
      },
      onClose: () => settle(false)
    });

    return close;
  });
}

export default { openModal, closeModal, isModalOpen, confirmDialog };
