/**
 * Botón "Escuchar" + selector compacto EN | ES para una narración concreta
 * (una lección, una sección o una señal).
 *
 * Es marcado + datos: el comportamiento se conecta en `AudioPlayer.js`
 * (`mountAudioUI`), que es el único punto que habla con el controlador.
 */
import { escapeHtml } from '../../utils/formatting.js';
import { icon } from '../common/icons.js';
import { audioConfig } from '../../config/audioConfig.js';
import { renderAudioLanguageSwitch } from './AudioLanguageSwitch.js';

/**
 * @param {{
 *   t: Function,
 *   kind: string,
 *   contentId: string,
 *   sectionId?: string|null,
 *   title: string,
 *   language?: 'en'|'es'
 * }} options
 */
export function renderListenControl({
  t,
  kind,
  contentId,
  sectionId = null,
  title,
  language = audioConfig.defaultLanguage
}) {
  return `
    <div class="listen" data-listen
         data-audio-kind="${escapeHtml(kind)}"
         data-audio-content="${escapeHtml(contentId)}"
         ${sectionId ? `data-audio-section="${escapeHtml(sectionId)}"` : ''}
         data-audio-title="${escapeHtml(title)}">
      <button class="listen__btn" type="button" data-audio-toggle aria-pressed="false">
        <span class="listen__icon" data-audio-icon>${icon('volume-2', { size: 18 })}</span>
        <span class="listen__label" data-audio-label>${escapeHtml(t('audio.listen'))}</span>
      </button>
      ${renderAudioLanguageSwitch({ label: t('audio.audioLanguage'), active: language })}
    </div>
  `;
}

export default { renderListenControl };
