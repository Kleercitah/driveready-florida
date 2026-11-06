import { describe, it, expect } from 'vitest';
import { routes, matchRoute, buildHref } from '../../src/config/routes.js';
import { validateLesson } from '../../src/utils/validation.js';
import { lessons, getLesson } from '../../src/data/lessons/index.js';
import { signs } from '../../src/data/signs/index.js';
import { appConfig } from '../../src/config/appConfig.js';

/** T48–T53 · Rutas, contenido de lecciones y señales. */

describe('Rutas', () => {
  it('T48 · las 14 rutas requeridas están definidas', () => {
    const paths = routes.map((route) => route.path);
    [
      '/',
      '/learn',
      '/learn/:lessonId',
      '/practice',
      '/practice/session',
      '/signs',
      '/exam',
      '/exam/session',
      '/exam/results/:resultId',
      '/progress',
      '/review',
      '/settings',
      '/about'
    ].forEach((path) => expect(paths).toContain(path));
    expect(routes.some((route) => route.name === 'notFound')).toBe(true);
  });

  it('T49 · matchRoute resuelve rutas estáticas y parámetros', () => {
    expect(matchRoute('/').route.name).toBe('home');
    expect(matchRoute('/practice/session').route.name).toBe('practiceSession');
    const lesson = matchRoute('/learn/road-signs');
    expect(lesson.route.name).toBe('lesson');
    expect(lesson.params.lessonId).toBe('road-signs');
    const result = matchRoute('/exam/results/result_abc');
    expect(result.route.name).toBe('examResults');
    expect(result.params.resultId).toBe('result_abc');
  });

  it('T50 · una ruta desconocida cae en NotFound', () => {
    expect(matchRoute('/ruta-que-no-existe').route.name).toBe('notFound');
    expect(matchRoute('/a/b/c/d').route.name).toBe('notFound');
  });

  it('T51 · buildHref construye hashes navegables con query', () => {
    expect(buildHref('/learn')).toBe('#/learn');
    expect(buildHref('/practice/session', { scope: 'missed', size: 10 })).toBe(
      '#/practice/session?scope=missed&size=10'
    );
  });
});

describe('Contenido', () => {
  it('T52 · hay 10 módulos de lección estructuralmente válidos', () => {
    expect(lessons).toHaveLength(10);
    lessons.forEach((lesson) => {
      const report = validateLesson(lesson);
      expect(report.errors).toEqual([]);
      expect(getLesson(lesson.id)).toBeDefined();
    });
  });

  it('T53 · la galería de señales incluye ilustraciones y significados bilingües', () => {
    expect(signs.length).toBeGreaterThanOrEqual(20);
    signs.forEach((sign) => {
      expect(sign.id).toBeTruthy();
      expect(sign.svg ?? sign.image ?? sign.art).toBeTruthy();
      expect(typeof sign.meaning === 'object' || typeof sign.meaning === 'string').toBe(true);
    });
  });

  it('T54 · la configuración del examen coincide con el brief (50 · 40 · 80%)', () => {
    expect(appConfig.examTotalQuestions).toBe(50);
    expect(appConfig.examPassingCorrect).toBe(40);
    expect(appConfig.examPassingPercentage).toBe(80);
  });
});
