import { describe, it, expect } from 'vitest';
import {
  t,
  setLanguage,
  getLanguage,
  getDictionary,
  getSupportedLanguages,
  langKey,
  pickLocalized
} from '../../src/i18n/index.js';

/** T09–T14 · Bilingüismo, fallback y ayudantes de localización. */

function flattenKeys(source, prefix = '') {
  return Object.entries(source).flatMap(([key, value]) => {
    const path = prefix ? `${prefix}.${key}` : key;
    if (value && typeof value === 'object' && !Array.isArray(value)) {
      return flattenKeys(value, path);
    }
    return [path];
  });
}

describe('i18n', () => {
  it('T09 · español e inglés declaran exactamente las mismas claves', () => {
    const en = new Set(flattenKeys(getDictionary('en-US')));
    const es = new Set(flattenKeys(getDictionary('es-ES')));
    const missingInEs = [...en].filter((key) => !es.has(key));
    const missingInEn = [...es].filter((key) => !en.has(key));
    expect(missingInEs).toEqual([]);
    expect(missingInEn).toEqual([]);
  });

  it('T10 · t() resuelve claves anidadas y devuelve la clave si no existe', () => {
    setLanguage('en-US');
    expect(t('nav.home')).toBe('Dashboard');
    expect(t('clave.inexistente')).toBe('clave.inexistente');
  });

  it('T11 · t() interpola marcadores {var}', () => {
    setLanguage('en-US');
    expect(t('exam.questionLabel', { current: 3, total: 50 })).toContain('3');
    expect(t('exam.questionLabel', { current: 3, total: 50 })).toContain('50');
  });

  it('T12 · cambiar de idioma actualiza las traducciones', () => {
    setLanguage('es-ES');
    expect(getLanguage()).toBe('es-ES');
    expect(t('nav.home')).toBe('Inicio');
    setLanguage('en-US');
    expect(t('nav.home')).toBe('Dashboard');
  });

  it('T13 · langKey asigna los locales a las claves cortas de los datos', () => {
    expect(langKey('en-US')).toBe('en');
    expect(langKey('es-ES')).toBe('es');
    expect(langKey('ES-es')).toBe('es');
  });

  it('T14 · pickLocalized lee { en, es } y regresa al inglés', () => {
    const value = { en: 'Road Signs', es: 'Señales de tránsito' };
    expect(pickLocalized(value, 'en-US')).toBe('Road Signs');
    expect(pickLocalized(value, 'es-ES')).toBe('Señales de tránsito');
    expect(pickLocalized({ en: 'Only EN' }, 'es-ES')).toBe('Only EN');
    expect(pickLocalized('texto plano', 'es-ES')).toBe('texto plano');
    expect(pickLocalized(null, 'es-ES')).toBe('');
  });

  it('T15 · los idiomas soportados incluyen inglés y español', () => {
    const codes = getSupportedLanguages().map((lang) => lang.code);
    expect(codes).toContain('en-US');
    expect(codes).toContain('es-ES');
  });
});
