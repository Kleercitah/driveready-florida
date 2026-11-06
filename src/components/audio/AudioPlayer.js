/**
 * Reproductor de narración (dock global) y montaje de la interfaz de audio.
 *
 * El dock vive en el armazón de la aplicación para que siga visible al cambiar
 * de página. `mountAudioUI` conecta el dock y todos los controles "Escuchar"
 * de la página actual con el controlador único de audio.
 */
import { escapeHtml } from '../../utils/formatting.js';
import { icon } from '../common/icons.js';
import { audioConfig } from '../../config/audioConfig.js';
import {
  getAudioState,
  getAudioLanguage,
  subscribeToAudio,
  toggleAudio,
  toggleCurrent,
  stop,
  dismiss,
  seekRatio,
  setAudioSpeed,
  setAudioLanguage
} from '../../audio/audioController.js';
import { loadAudioManifest, entryId, hasAudio } from '../../audio/audioManifest.js';
import { renderAudioLanguageSwitch } from './AudioLanguageSwitch.js';

/** Formatea segundos como m:ss. */
export function formatTime(seconds) {
  const total = Number.isFinite(seconds) && seconds > 0 ? Math.floor(seconds) : 0;
  const minutes = Math.floor(total / 60);
  const rest = total % 60;
  return `${minutes}:${String(rest).padStart(2, '0')}`;
}

/** Reproductor global (barra inferior). Se oculta mientras no haya narración. */
export function renderAudioDock({ t, language = audioConfig.defaultLanguage }) {
  const speeds = audioConfig.speeds
    .map(
      (speed) =>
        `<button class="audio-speed__btn" type="button" data-audio-speed-value="${speed}"
                 aria-pressed="${speed === audioConfig.defaultSpeed}">${speed}×</button>`
    )
    .join('');

  return `
    <div class="audio-dock" data-audio-dock hidden role="region" aria-label="${escapeHtml(t('audio.playerLabel'))}">
      <div class="audio-dock__head">
        <div class="audio-dock__meta">
          <span class="audio-dock__eyebrow">${icon('volume-2', { size: 14 })}<span>${escapeHtml(
            t('audio.narration')
          )}</span></span>
          <p class="audio-dock__title" data-audio-dock-title></p>
        </div>
        <button class="audio-dock__close" type="button" data-audio-dock-close
                aria-label="${escapeHtml(t('audio.close'))}" title="${escapeHtml(t('audio.close'))}">
          ${icon('x', { size: 18 })}
        </button>
      </div>

      <div class="audio-dock__body">
        <div class="audio-dock__controls">
          <button class="audio-btn audio-btn--primary" type="button" data-audio-dock-toggle
                  aria-label="${escapeHtml(t('audio.playPause'))}">
            <span data-audio-dock-icon>${icon('play', { size: 18 })}</span>
          </button>
          <button class="audio-btn" type="button" data-audio-dock-stop aria-label="${escapeHtml(t('audio.stop'))}">
            ${icon('circle-stop', { size: 18 })}
          </button>
        </div>

        <div class="audio-dock__progress" data-audio-dock-progress role="slider" tabindex="0"
             aria-label="${escapeHtml(t('audio.progress'))}" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0">
          <div class="audio-dock__bar"><div class="audio-dock__fill" data-audio-dock-fill></div></div>
        </div>

        <span class="audio-dock__time" data-audio-dock-time>0:00 / 0:00</span>
      </div>

      <div class="audio-dock__options">
        <div class="audio-speed" role="group" aria-label="${escapeHtml(t('audio.speed'))}" data-audio-speed>${speeds}</div>

        ${renderAudioLanguageSwitch({
          label: t('audio.audioLanguage'),
          active: language,
          className: 'audio-lang--dock'
        })}
      </div>
    </div>
  `;
}

let unsubscribe = null;

function paramsFor(element) {
  return {
    kind: element.getAttribute('data-audio-kind'),
    contentId: element.getAttribute('data-audio-content'),
    sectionId: element.getAttribute('data-audio-section') || null,
    title: element.getAttribute('data-audio-title') || null
  };
}

function applyLanguageButtons(container, activeLanguage, available = null) {
  container.querySelectorAll('[data-audio-lang-value]').forEach((button) => {
    const value = button.getAttribute('data-audio-lang-value');
    button.classList.toggle('is-active', value === activeLanguage);
    button.setAttribute('aria-pressed', String(value === activeLanguage));
    if (available) {
      const ok = available.includes(value);
      button.disabled = !ok;
      button.classList.toggle('is-unavailable', !ok);
    }
  });
}

function renderState({ dock, controls, manifest, t }) {
  const state = getAudioState();

  // El dock es fijo: reservamos espacio al final del contenido cuando está visible.
  if (typeof document !== 'undefined') {
    document.body.classList.toggle('has-audio-dock', state.active);
  }

  if (dock) {
    dock.hidden = !state.active;
    const titleEl = dock.querySelector('[data-audio-dock-title]');
    if (titleEl) titleEl.textContent = state.title ?? '';

    const iconEl = dock.querySelector('[data-audio-dock-icon]');
    if (iconEl) {
      iconEl.innerHTML =
        state.status === 'playing' ? icon('pause', { size: 18 }) : icon('play', { size: 18 });
    }

    const ratio = state.duration ? Math.min(1, state.currentTime / state.duration) : 0;
    const fill = dock.querySelector('[data-audio-dock-fill]');
    if (fill) fill.style.width = `${Math.round(ratio * 100)}%`;

    const timeEl = dock.querySelector('[data-audio-dock-time]');
    if (timeEl) timeEl.textContent = `${formatTime(state.currentTime)} / ${formatTime(state.duration)}`;

    const progressEl = dock.querySelector('[data-audio-dock-progress]');
    if (progressEl) progressEl.setAttribute('aria-valuenow', String(Math.round(ratio * 100)));

    dock.querySelectorAll('[data-audio-speed-value]').forEach((button) => {
      const value = Number(button.getAttribute('data-audio-speed-value'));
      const isActive = value === state.speed;
      button.classList.toggle('is-active', isActive);
      button.setAttribute('aria-pressed', String(isActive));
    });

    applyLanguageButtons(dock, state.language);
  }

  controls.forEach((element) => {
    const params = paramsFor(element);
    const id = entryId({ ...params, language: state.language });
    const isActive = state.active && state.id === id;
    const playing = isActive && (state.status === 'playing' || state.status === 'loading');

    const toggle = element.querySelector('[data-audio-toggle]');
    if (toggle) {
      toggle.classList.toggle('is-playing', playing);
      toggle.setAttribute('aria-pressed', String(playing));
    }

    const iconEl = element.querySelector('[data-audio-icon]');
    if (iconEl) {
      iconEl.innerHTML = playing ? icon('pause', { size: 18 }) : icon('volume-2', { size: 18 });
    }

    const labelEl = element.querySelector('[data-audio-label]');
    if (labelEl) {
      labelEl.textContent = playing
        ? t('audio.pause')
        : isActive
          ? t('audio.resume')
          : t('audio.listen');
    }

    if (manifest) {
      const available = audioConfig.supportedLanguages.filter((language) =>
        hasAudio(
          manifest,
          entryId({
            kind: params.kind,
            contentId: params.contentId,
            sectionId: params.sectionId,
            language
          })
        )
      );
      const anyAvailable = available.length > 0;
      element.classList.toggle('is-unavailable', !anyAvailable);
      if (toggle) toggle.disabled = !anyAvailable;
      applyLanguageButtons(element, state.language, available);
    }
  });
}

/**
 * Conecta el dock y los controles "Escuchar" presentes en `root`.
 * Se puede llamar en cada renderizado: cancela la suscripción anterior.
 */
export function mountAudioUI(root, ctx) {
  if (unsubscribe) {
    unsubscribe();
    unsubscribe = null;
  }

  const dock = root.querySelector('[data-audio-dock]');
  const controls = Array.from(root.querySelectorAll('[data-listen]'));
  if (!dock && controls.length === 0) return;

  let manifest = null;
  const t = ctx.t;

  controls.forEach((element) => {
    const params = paramsFor(element);
    element.querySelector('[data-audio-toggle]')?.addEventListener('click', () => {
      toggleAudio(params);
    });
    element.querySelectorAll('[data-audio-lang-value]').forEach((button) => {
      button.addEventListener('click', () => {
        setAudioLanguage(button.getAttribute('data-audio-lang-value'));
      });
    });
  });

  if (dock) {
    dock.querySelector('[data-audio-dock-toggle]')?.addEventListener('click', () => toggleCurrent());
    dock.querySelector('[data-audio-dock-stop]')?.addEventListener('click', () => stop());
    dock.querySelector('[data-audio-dock-close]')?.addEventListener('click', () => dismiss());
    dock.querySelectorAll('[data-audio-speed-value]').forEach((button) => {
      button.addEventListener('click', () =>
        setAudioSpeed(Number(button.getAttribute('data-audio-speed-value')))
      );
    });
    dock.querySelectorAll('[data-audio-lang-value]').forEach((button) => {
      button.addEventListener('click', () =>
        setAudioLanguage(button.getAttribute('data-audio-lang-value'))
      );
    });

    const progressEl = dock.querySelector('[data-audio-dock-progress]');
    if (progressEl) {
      progressEl.addEventListener('click', (event) => {
        const rect = progressEl.getBoundingClientRect();
        if (!rect.width) return;
        seekRatio((event.clientX - rect.left) / rect.width);
      });
      progressEl.addEventListener('keydown', (event) => {
        const state = getAudioState();
        const ratio = state.duration ? state.currentTime / state.duration : 0;
        if (event.key === 'ArrowRight') {
          seekRatio(Math.min(1, ratio + 0.05));
          event.preventDefault();
        } else if (event.key === 'ArrowLeft') {
          seekRatio(Math.max(0, ratio - 0.05));
          event.preventDefault();
        }
      });
    }
  }

  const update = () => renderState({ dock, controls, manifest, t });
  unsubscribe = subscribeToAudio(update);
  update();

  loadAudioManifest().then((loaded) => {
    manifest = loaded;
    update();
  });
}

export default { renderAudioDock, mountAudioUI, formatTime };
