import { appConfig } from './config/appConfig.js';
import { personalization } from './config/personalization.js';
import { matchRoute, buildHref } from './config/routes.js';
import { t, setLanguage, getLanguage } from './i18n/index.js';
import { renderShell } from './components/layout/appShell.js';
import { renderWelcomeOverlay, mountWelcomeOverlay } from './components/layout/welcomeOverlay.js';
import { mountAudioUI } from './components/audio/AudioPlayer.js';
import { getState, subscribe } from './services/storage.js';
import {
  updatePreferences,
  markWelcomeSeen,
  hasSeenWelcome,
  setWelcomeSeen
} from './services/progressService.js';

import Home from './pages/Home.js';
import Learn from './pages/Learn.js';
import LessonDetail from './pages/LessonDetail.js';
import Practice from './pages/Practice.js';
import PracticeSession from './pages/PracticeSession.js';
import Signs from './pages/Signs.js';
import Exam from './pages/Exam.js';
import ExamSession from './pages/ExamSession.js';
import ExamResults from './pages/ExamResults.js';
import Progress from './pages/Progress.js';
import Review from './pages/Review.js';
import Settings from './pages/Settings.js';
import About from './pages/About.js';
import NotFound from './pages/NotFound.js';

const PAGES = {
  Home,
  Learn,
  LessonDetail,
  Practice,
  PracticeSession,
  Signs,
  Exam,
  ExamSession,
  ExamResults,
  Progress,
  Review,
  Settings,
  About,
  NotFound
};

let currentRoute = { name: 'home', page: 'Home' };
let currentParams = {};
let currentQuery = {};
let currentPage = null;
let welcomeShownThisSession = false;

/** Lee el hash actual y lo separa en ruta, parámetros y query string. */
export function parseHash() {
  const raw = window.location.hash.replace(/^#/, '') || '/';
  const [pathPart, queryPart] = raw.split('?');
  const query = {};
  if (queryPart) {
    new URLSearchParams(queryPart).forEach((value, key) => {
      query[key] = value;
    });
  }
  const { route, params } = matchRoute(pathPart);
  return { route, params, query, path: pathPart };
}

/** Navega a una ruta de la aplicación. */
export function navigate(path, query = null) {
  const href = buildHref(path, query);
  if (window.location.hash === href) {
    render();
    return;
  }
  window.location.hash = href;
}

/**
 * Re-renderiza la ruta actual conservando la posición de scroll y el foco.
 * Se usa para cambios de estado dentro de una misma pantalla (responder una
 * pregunta, marcar una favorita, etc.), donde saltar al inicio molestaría.
 */
export function refresh() {
  render({ navigation: false });
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'auto' });
}

function applyReducedMotion(preference) {
  const root = document.documentElement;
  if (preference === 'on') root.dataset.reducedMotion = 'true';
  else if (preference === 'off') root.dataset.reducedMotion = 'false';
  else delete root.dataset.reducedMotion;
}

/** Construye el contexto que se entrega a cada página. */
function createContext() {
  return {
    t,
    route: currentRoute,
    params: currentParams,
    query: currentQuery,
    language: getLanguage(),
    navigate,
    refresh,
    scrollToTop,
    appConfig
  };
}

/**
 * Renderiza la aplicación completa.
 * `navigation` indica si se trata de un cambio de pantalla real (navegación o
 * primer arranque): solo entonces se reposiciona el scroll y se enfoca el
 * contenido principal.
 */
export function render({ navigation = true } = {}) {
  const appRoot = document.getElementById('app');
  if (!appRoot) return;

  const { route, params, query } = parseHash();
  currentRoute = route;
  currentParams = params;
  currentQuery = query;

  const pageModule = PAGES[route.page] ?? NotFound;
  currentPage = pageModule;
  const ctx = createContext();

  let pageHtml = '';
  try {
    pageHtml = pageModule.render(ctx) ?? '';
  } catch (error) {
    console.error('[DriveReady] Error rendering page:', error);
    pageHtml = `
      <section class="page">
        <div class="alert alert--error" role="alert">
          <div class="alert__body">
            <p class="alert__title">${t('common.error')}</p>
            <p class="alert__text">${t('common.notFoundText')}</p>
          </div>
        </div>
      </section>`;
  }

  appRoot.innerHTML = renderShell({
    t,
    activeRoute: route.name,
    language: getLanguage(),
    pageHtml
  });

  // El drawer vive dentro de #app y se destruye al re-renderizar. Si el usuario
  // navega desde el menú lateral, hay que soltar el bloqueo de scroll del body
  // (`overflow: hidden`); de lo contrario la página quedaría sin poder desplazarse.
  document.body.classList.remove('has-drawer-open');

  // Montaje de la página (eventos).
  const main = appRoot.querySelector('#main-region');
  if (main && typeof pageModule.mount === 'function') {
    try {
      pageModule.mount(main, ctx);
    } catch (error) {
      console.error('[DriveReady] Error mounting page:', error);
    }
  }

  wireShellEvents(appRoot);
  // Reproductor global + controles "Escuchar" de la página actual.
  mountAudioUI(appRoot, ctx);
  updateDocumentTitle(route, params);

  // Gestión de foco: al cambiar de pantalla, enfocamos el contenido principal.
  if (navigation && main && !welcomeShownThisSession) main.focus({ preventScroll: true });
  if (navigation) scrollToTop();
}

function updateDocumentTitle(route, params) {
  const base = `${t('common.shortName')} Florida`;
  let suffix = t(route.titleKey ?? 'nav.home');
  if (route.name === 'lesson' && params.lessonId) {
    suffix = t('nav.lesson');
  }
  document.title = `${suffix} · ${base}`;
}

/** Conecta los eventos del armazón (drawer, idioma). */
function wireShellEvents(appRoot) {
  const drawer = appRoot.querySelector('#app-drawer');
  const menuButton = appRoot.querySelector('[data-open-drawer]');

  const openDrawer = () => {
    if (!drawer) return;
    drawer.hidden = false;
    document.body.classList.add('has-drawer-open');
    menuButton?.setAttribute('aria-expanded', 'true');
    drawer.querySelector('[data-close-drawer]')?.focus();
  };

  const closeDrawer = () => {
    if (!drawer) return;
    drawer.hidden = true;
    document.body.classList.remove('has-drawer-open');
    menuButton?.setAttribute('aria-expanded', 'false');
    menuButton?.focus();
  };

  menuButton?.addEventListener('click', openDrawer);
  drawer?.querySelectorAll('[data-close-drawer]').forEach((el) => el.addEventListener('click', closeDrawer));
  drawer?.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeDrawer();
  });

  appRoot.querySelectorAll('[data-set-language]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const lang = btn.getAttribute('data-set-language');
      changeLanguage(lang);
    });
  });
}

/** Cambia el idioma de la interfaz y persiste la preferencia. */
export function changeLanguage(language) {
  setLanguage(language);
  updatePreferences({ language });
  render();
}

/** Muestra la pantalla de bienvenida romántica. */
export function showWelcome({ force = false } = {}) {
  if (!personalization.showWelcomeOnFirstVisit && !force) return;
  if (!force && hasSeenWelcome()) return;
  if (document.querySelector('.dedication')) return;

  const wrapper = document.createElement('div');
  wrapper.innerHTML = renderWelcomeOverlay({
    title: personalization.welcome.title,
    text: personalization.welcome.text,
    buttonLabel: personalization.welcome.buttonLabel,
    skipLabel: personalization.welcome.skipLabel,
    showImage: true
  });

  const overlay = wrapper.firstElementChild;
  document.body.appendChild(overlay);
  document.body.classList.add('has-overlay-open');
  welcomeShownThisSession = true;

  const close = () => {
    overlay.classList.add('dedication--closing');
    setTimeout(() => {
      overlay.remove();
      document.body.classList.remove('has-overlay-open');
      if (!hasSeenWelcome()) markWelcomeSeen();
      document.getElementById('main-region')?.focus({ preventScroll: true });
    }, 220);
  };

  mountWelcomeOverlay(overlay, close);
  overlay.querySelector('[data-autofocus]')?.focus();
}

/** Inicia la aplicación. */
export function startApp() {
  const state = getState();

  setLanguage(state.preferences.language ?? appConfig.defaultLanguage);
  applyReducedMotion(state.preferences.reducedMotion);

  window.addEventListener('hashchange', () => {
    render();
    if (window.location.hash === '#/__welcome') {
      showWelcome({ force: true });
      window.location.hash = '#/';
    }
  });

  if (!window.location.hash) {
    window.location.hash = '#/';
  }

  render();

  if (personalization.showWelcomeOnFirstVisit && !hasSeenWelcome()) {
    setTimeout(() => showWelcome(), 320);
  }

  // Re-renderiza cuando cambian las preferencias relevantes de idioma.
  subscribe((next) => {
    if (next.preferences.language !== getLanguage()) {
      setLanguage(next.preferences.language);
      render();
    }
    applyReducedMotion(next.preferences.reducedMotion);
  });

  window.DriveReady = {
    navigate,
    refresh,
    showWelcome,
    setWelcomeSeen,
    version: appConfig.version
  };
}

export { personalization, appConfig };
export default { startApp, render, navigate, refresh, changeLanguage, showWelcome, parseHash };
