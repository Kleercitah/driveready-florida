import { icon } from '../common/icons.js';
import { escapeHtml } from '../../utils/formatting.js';
import { buildHref } from '../../config/routes.js';
import { appConfig } from '../../config/appConfig.js';
import { renderAudioDock } from '../audio/AudioPlayer.js';
import { getAudioLanguage } from '../../audio/audioController.js';

/** Elementos de navegación principal. */
export const NAV_ITEMS = [
  { route: 'home', path: '/', icon: 'house', labelKey: 'nav.home' },
  { route: 'learn', path: '/learn', icon: 'book-open', labelKey: 'nav.learn' },
  { route: 'practice', path: '/practice', icon: 'square-pen', labelKey: 'nav.practice' },
  { route: 'signs', path: '/signs', icon: 'signpost', labelKey: 'nav.signs' },
  { route: 'exam', path: '/exam', icon: 'clipboard-check', labelKey: 'nav.exam' },
  { route: 'review', path: '/review', icon: 'rotate-ccw', labelKey: 'nav.review' },
  { route: 'progress', path: '/progress', icon: 'chart-column', labelKey: 'nav.progress' },
  { route: 'settings', path: '/settings', icon: 'settings', labelKey: 'nav.settings' },
  { route: 'about', path: '/about', icon: 'info', labelKey: 'nav.about' }
];

const PRIMARY_MOBILE = ['home', 'learn', 'practice', 'exam', 'progress'];

function navLink(item, { activeRoute, t, variant }) {
  const isActive = activeRoute === item.route ||
    (item.route === 'learn' && activeRoute === 'lesson') ||
    (item.route === 'practice' && activeRoute === 'practiceSession') ||
    (item.route === 'exam' && (activeRoute === 'examSession' || activeRoute === 'examResults'));
  const classes = [`nav-link`, variant ? `nav-link--${variant}` : '', isActive ? 'is-active' : '']
    .filter(Boolean)
    .join(' ');
  return `
    <a class="${classes}" href="${buildHref(item.path)}" data-route="${item.route}"
       ${isActive ? 'aria-current="page"' : ''}>
      <span class="nav-link__icon" aria-hidden="true">${icon(item.icon, { size: variant === 'bottom' ? 22 : 19 })}</span>
      <span class="nav-link__label">${escapeHtml(t(item.labelKey))}</span>
    </a>
  `;
}

export function renderHeader({ t, activeRoute, language }) {
  const languageOptions = appConfig.supportedLanguages
    .map((code) => {
      const label = code === 'en-US' ? 'EN' : 'ES';
      const native = code === 'en-US' ? 'English' : 'Español';
      return `<button class="lang-switch__option ${code === language ? 'is-active' : ''}" type="button"
                data-set-language="${code}" aria-pressed="${code === language}" title="${native}">${label}</button>`;
    })
    .join('');

  return `
    <header class="app-header">
      <div class="app-header__inner">
        <button class="icon-btn app-header__menu" type="button" data-open-drawer
                aria-label="${escapeHtml(t('nav.openMenu'))}" aria-expanded="false" aria-controls="app-drawer">
          ${icon('menu', { size: 22 })}
        </button>

        <a class="brand" href="${buildHref('/')}" aria-label="${escapeHtml(t('common.appName'))}">
          <span class="brand__mark" aria-hidden="true">DR</span>
          <span class="brand__text">
            <span class="brand__name">${escapeHtml(t('common.shortName'))}</span>
            <span class="brand__tag">Florida Class E</span>
          </span>
        </a>

        <div class="app-header__actions">
          <div class="lang-switch" role="group" aria-label="${escapeHtml(t('settings.interfaceLanguage'))}">
            ${languageOptions}
          </div>
          <a class="icon-btn" href="${buildHref('/settings')}" aria-label="${escapeHtml(t('nav.settings'))}">
            ${icon('settings', { size: 20 })}
          </a>
        </div>
      </div>
    </header>
  `;
}

export function renderSidebar({ t, activeRoute }) {
  const items = NAV_ITEMS.map((item) => navLink(item, { activeRoute, t })).join('');
  return `
    <aside class="app-sidebar" aria-label="${escapeHtml(t('nav.menu'))}">
      <nav class="app-sidebar__nav">${items}</nav>
      <div class="app-sidebar__footer">
        <p class="app-sidebar__note">${escapeHtml(t('about.notAffiliated'))}</p>
        <p class="app-sidebar__version">v${appConfig.version}</p>
      </div>
    </aside>
  `;
}

export function renderDrawer({ t, activeRoute }) {
  const items = NAV_ITEMS.map((item) => navLink(item, { activeRoute, t })).join('');
  return `
    <div class="app-drawer" id="app-drawer" hidden>
      <div class="app-drawer__scrim" data-close-drawer></div>
      <div class="app-drawer__panel" role="dialog" aria-modal="true" aria-label="${escapeHtml(t('nav.menu'))}">
        <div class="app-drawer__head">
          <span class="app-drawer__title">${escapeHtml(t('nav.menu'))}</span>
          <button class="icon-btn" type="button" data-close-drawer aria-label="${escapeHtml(t('nav.closeMenu'))}">
            ${icon('x', { size: 20 })}
          </button>
        </div>
        <nav class="app-drawer__nav">${items}</nav>
      </div>
    </div>
  `;
}

export function renderBottomNav({ t, activeRoute }) {
  const items = NAV_ITEMS.filter((item) => PRIMARY_MOBILE.includes(item.route))
    .map((item) => navLink(item, { activeRoute, t, variant: 'bottom' }))
    .join('');
  return `
    <nav class="app-bottom-nav" aria-label="${escapeHtml(t('nav.menu'))}">
      ${items}
    </nav>
  `;
}

/** Estructura completa de la aplicación. */
export function renderShell({ t, activeRoute, language, pageHtml }) {
  return `
    ${renderHeader({ t, activeRoute, language })}
    <div class="app-body">
      ${renderSidebar({ t, activeRoute })}
      <main class="app-main" id="main-region" tabindex="-1">
        ${pageHtml}
      </main>
    </div>
    ${renderBottomNav({ t, activeRoute })}
    ${renderAudioDock({ t, language: getAudioLanguage() })}
    ${renderDrawer({ t, activeRoute })}
  `;
}

export default { renderShell, renderHeader, renderSidebar, renderBottomNav, renderDrawer, NAV_ITEMS };
