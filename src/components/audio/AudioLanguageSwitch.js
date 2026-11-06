/**
 * Selector compacto de idioma del audio: EN | ES.
 *
 * Cambia ÚNICAMENTE el idioma de la narración. Nunca cambia el idioma de la
 * interfaz, ni el texto, ni el progreso, ni las estadísticas. Se usa sin
 * banderas y como un "segmented control" pequeño.
 */
import { escapeHtml } from '../../utils/formatting.js';
import { audioConfig } from '../../config/audioConfig.js';

const NATIVE_LABEL = { en: 'English', es: 'Español' };

/**
 * @param {{ label: string, active?: 'en'|'es', className?: string }} options
 */
export function renderAudioLanguageSwitch({ label, active = audioConfig.defaultLanguage, className = '' }) {
  const buttons = audioConfig.supportedLanguages
    .map((code) => {
      const isActive = code === active;
      return `<button class="audio-lang__btn ${isActive ? 'is-active' : ''}" type="button"
                data-audio-lang-value="${code}" aria-pressed="${isActive}"
                title="${escapeHtml(NATIVE_LABEL[code] ?? code)}">${code.toUpperCase()}</button>`;
    })
    .join('');

  return `<div class="audio-lang ${className}" role="group" aria-label="${escapeHtml(label)}" data-audio-lang>${buttons}</div>`;
}

export default { renderAudioLanguageSwitch };
