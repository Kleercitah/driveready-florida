import { beforeEach } from 'vitest';
import { __resetForTests } from '../src/services/storage.js';

/**
 * Configuración compartida de Vitest (entorno jsdom).
 * Garantiza un almacenamiento limpio y estable antes de cada prueba.
 */

if (typeof window !== 'undefined') {
  if (!window.matchMedia) {
    window.matchMedia = () => ({
      matches: false,
      media: '',
      addEventListener() {},
      removeEventListener() {},
      addListener() {},
      removeListener() {},
      dispatchEvent() {
        return false;
      }
    });
  }

  if (!window.scrollTo) {
    window.scrollTo = () => {};
  }
}

beforeEach(() => {
  try {
    window.localStorage.clear();
  } catch {
    /* almacenamiento no disponible en este entorno */
  }
  __resetForTests();
});
