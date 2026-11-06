/**
 * Definición de rutas de la aplicación.
 *
 * Se usa hash routing (#/ruta) para garantizar que GitHub Pages sirva la
 * aplicación correctamente bajo un subdirectorio sin configuración de servidor.
 *
 * `pattern` usa segmentos separados por '/'; los segmentos que comienzan con ':'
 * son parámetros dinámicos.
 */
export const routes = [
  { name: 'home', path: '/', pattern: [], page: 'Home', titleKey: 'nav.home' },
  { name: 'learn', path: '/learn', pattern: ['learn'], page: 'Learn', titleKey: 'nav.learn' },
  {
    name: 'lesson',
    path: '/learn/:lessonId',
    pattern: ['learn', ':lessonId'],
    page: 'LessonDetail',
    titleKey: 'nav.lesson'
  },
  { name: 'practice', path: '/practice', pattern: ['practice'], page: 'Practice', titleKey: 'nav.practice' },
  {
    name: 'practiceSession',
    path: '/practice/session',
    pattern: ['practice', 'session'],
    page: 'PracticeSession',
    titleKey: 'nav.practiceSession'
  },
  { name: 'signs', path: '/signs', pattern: ['signs'], page: 'Signs', titleKey: 'nav.signs' },
  { name: 'exam', path: '/exam', pattern: ['exam'], page: 'Exam', titleKey: 'nav.exam' },
  {
    name: 'examSession',
    path: '/exam/session',
    pattern: ['exam', 'session'],
    page: 'ExamSession',
    titleKey: 'nav.examSession'
  },
  {
    name: 'examResults',
    path: '/exam/results/:resultId',
    pattern: ['exam', 'results', ':resultId'],
    page: 'ExamResults',
    titleKey: 'nav.examResults'
  },
  { name: 'progress', path: '/progress', pattern: ['progress'], page: 'Progress', titleKey: 'nav.progress' },
  { name: 'review', path: '/review', pattern: ['review'], page: 'Review', titleKey: 'nav.review' },
  { name: 'settings', path: '/settings', pattern: ['settings'], page: 'Settings', titleKey: 'nav.settings' },
  { name: 'about', path: '/about', pattern: ['about'], page: 'About', titleKey: 'nav.about' },
  { name: 'notFound', path: '*', pattern: null, page: 'NotFound', titleKey: 'nav.notFound' }
];

/** Resuelve una ruta a partir del hash actual. */
export function matchRoute(pathname) {
  const clean = normalizePath(pathname);
  const segments = clean === '/' ? [] : clean.split('/').filter(Boolean);

  for (const route of routes) {
    if (!route.pattern) continue;
    if (route.pattern.length !== segments.length) continue;

    const params = {};
    let matches = true;

    for (let i = 0; i < route.pattern.length; i += 1) {
      const token = route.pattern[i];
      if (token.startsWith(':')) {
        params[token.slice(1)] = decodeURIComponent(segments[i]);
      } else if (token !== segments[i]) {
        matches = false;
        break;
      }
    }

    if (matches) return { route, params };
  }

  return { route: routes.find((r) => r.name === 'notFound'), params: {} };
}

function normalizePath(path) {
  if (!path) return '/';
  let value = path.trim();
  if (!value.startsWith('/')) value = `/${value}`;
  value = value.replace(/\/+$/, '');
  return value === '' ? '/' : value;
}

/** Construye un href de hash navegable. */
export function buildHref(path, query) {
  const base = `#${normalizePath(path)}`;
  if (!query || Object.keys(query).length === 0) return base;
  const params = new URLSearchParams();
  Object.entries(query).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== '') {
      params.set(key, String(value));
    }
  });
  const queryString = params.toString();
  return queryString ? `${base}?${queryString}` : base;
}

export default routes;
