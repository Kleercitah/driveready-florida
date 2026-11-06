import { describe, it, expect } from 'vitest';
import {
  createDefaultState,
  normalizeState,
  validateImport,
  mergeImportedState,
  getState,
  updateState,
  resetState,
  exportData,
  isStorageAvailable,
  recordActivityDay
} from '../../src/services/storage.js';
import { appConfig } from '../../src/config/appConfig.js';

/** T30–T36 · Persistencia, esquema versionado y recuperación. */

describe('Almacenamiento', () => {
  it('T30 · el estado por defecto incluye el esquema versionado', () => {
    const state = createDefaultState();
    expect(state.schemaVersion).toBe(appConfig.storageSchemaVersion);
    expect(state.preferences.language).toBe(appConfig.defaultLanguage);
    expect(Array.isArray(state.examHistory)).toBe(true);
  });

  it('T31 · normalizeState corrige datos corruptos o incompletos', () => {
    const normalized = normalizeState({
      preferences: { language: 'xx-XX' },
      lessons: null,
      examHistory: 'no-es-un-array'
    });
    expect(normalized.preferences.language).toBe(appConfig.defaultLanguage);
    expect(Array.isArray(normalized.lessons.completed)).toBe(true);
    expect(Array.isArray(normalized.examHistory)).toBe(true);
    expect(normalized.schemaVersion).toBe(appConfig.storageSchemaVersion);
  });

  it('T32 · updateState persiste y notifica cambios reales', () => {
    updateState((draft) => {
      draft.favorites.push('rs-001');
      return draft;
    });
    expect(getState().favorites).toContain('rs-001');
  });

  it('T33 · validateImport rechaza cargas inválidas', () => {
    expect(validateImport(null).valid).toBe(false);
    expect(validateImport({}).valid).toBe(false);
    expect(validateImport({ state: { preferences: {}, lessons: {}, questionStats: {} } }).valid).toBe(true);
  });

  it('T34 · exportar y volver a importar preserva el progreso', () => {
    updateState((draft) => {
      draft.questionStats['rs-001'] = {
        answered: 2,
        correct: 1,
        wrong: 1,
        lastCorrect: false,
        lastAnsweredAt: new Date().toISOString()
      };
      return draft;
    });
    const payload = exportData();
    expect(payload.state.questionStats['rs-001']).toBeDefined();

    resetState();
    expect(getState().questionStats['rs-001']).toBeUndefined();

    mergeImportedState(payload.state);
    expect(getState().questionStats['rs-001'].answered).toBe(2);
  });

  it('T35 · resetState devuelve el estado inicial limpio', () => {
    updateState((draft) => {
      draft.favorites.push('q-x');
      return draft;
    });
    resetState();
    expect(getState().favorites).toEqual([]);
    expect(getState().examHistory).toEqual([]);
  });

  it('T36 · los días de actividad se registran una sola vez por día', () => {
    recordActivityDay();
    recordActivityDay();
    const days = getState().activityDays;
    expect(new Set(days).size).toBe(days.length);
    expect(days.length).toBe(1);
  });

  it('T37 · el almacenamiento está disponible en el entorno de pruebas', () => {
    expect(isStorageAvailable()).toBe(true);
  });
});
