/**
 * Auditoría T14–T25 y T31 · Reproductor de narración (lado navegador).
 *
 * Verifica el manifiesto, el controlador único de audio, el cambio de idioma
 * EN/ES sin alterar la interfaz ni el progreso, y las rutas compatibles con el
 * subdirectorio de GitHub Pages. Usa un manifiesto simulado y un elemento de
 * audio falso: nunca se reproduce audio real ni se llama a Fish Audio.
 */
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import {
  manifestUrl,
  entryId,
  loadAudioManifest,
  emptyAudioManifest,
  getReadyEntry,
  hasAudio,
  resolveAudioUrl,
  languagePair,
  __resetAudioManifestCache,
  AUDIO_KINDS
} from '../../src/audio/audioManifest.js';
import {
  getAudioState,
  getAudioLanguage,
  getAudioSpeed,
  play,
  pause,
  stop,
  dismiss,
  toggleAudio,
  setAudioSpeed,
  setAudioLanguage,
  __setMediaFactoryForTests
} from '../../src/audio/audioController.js';
import { getState, updateState } from '../../src/services/storage.js';
import { getLanguage, setLanguage } from '../../src/i18n/index.js';

const MANIFEST = {
  version: 1,
  generatedAt: '2026-01-01T00:00:00.000Z',
  model: 's2-pro',
  references: { en: 'REF_EN', es: 'REF_ES' },
  entries: [
    { id: 'sign.stop.en', kind: 'sign', contentId: 'stop', sectionId: null, language: 'en', status: 'ready', outputPath: 'audio/sign.stop.en.mp3', byteSize: 1000 },
    { id: 'sign.stop.es', kind: 'sign', contentId: 'stop', sectionId: null, language: 'es', status: 'ready', outputPath: 'audio/sign.stop.es.mp3', byteSize: 1000 },
    { id: 'lesson.right-of-way.intro.en', kind: 'lesson-intro', contentId: 'right-of-way', sectionId: null, language: 'en', status: 'ready', outputPath: 'audio/lesson.right-of-way.intro.en.mp3', byteSize: 1000 },
    { id: 'lesson.right-of-way.intro.es', kind: 'lesson-intro', contentId: 'right-of-way', sectionId: null, language: 'es', status: 'pending', outputPath: 'audio/lesson.right-of-way.intro.es.mp3', byteSize: 0 }
  ]
};

const STOP = { kind: AUDIO_KINDS.SIGN, contentId: 'stop', title: 'Stop' };
const INTRO = { kind: AUDIO_KINDS.LESSON_INTRO, contentId: 'right-of-way', title: 'Right of Way' };

/** Elemento de audio falso: registra fuentes y emite eventos como el real. */
function createFakeMedia() {
  const listeners = new Map();
  const media = { preload: '', playbackRate: 1, currentTime: 0, duration: 120, paused: true, srcHistory: [] };
  let srcValue = '';
  Object.defineProperty(media, 'src', {
    get: () => srcValue,
    set: (value) => {
      srcValue = value;
      media.srcHistory.push(value);
    }
  });
  media.addEventListener = (type, fn) => {
    if (!listeners.has(type)) listeners.set(type, []);
    listeners.get(type).push(fn);
  };
  media.removeEventListener = () => {};
  media.dispatch = (type) => (listeners.get(type) ?? []).forEach((fn) => fn({ type }));
  media.play = () => {
    media.paused = false;
    media.dispatch('play');
    return Promise.resolve();
  };
  media.pause = () => {
    if (media.paused) return;
    media.paused = true;
    media.dispatch('pause');
  };
  return media;
}

let media;
let mediaInstances;
let fetchMock;

function installMediaFactory() {
  mediaInstances = [];
  media = null;
  __setMediaFactoryForTests(() => {
    media = createFakeMedia();
    mediaInstances.push(media);
    return media;
  });
}

beforeEach(() => {
  __resetAudioManifestCache();
  installMediaFactory();
  fetchMock = vi.fn(async () => ({ ok: true, status: 200, json: async () => MANIFEST }));
  vi.stubGlobal('fetch', fetchMock);
});

afterEach(() => {
  vi.unstubAllGlobals();
  vi.unstubAllEnvs();
  __resetAudioManifestCache();
});

describe('Manifiesto y disponibilidad', () => {
  it('T14 · los archivos inexistentes o pendientes no aparecen disponibles', async () => {
    const manifest = await loadAudioManifest();
    expect(hasAudio(manifest, 'sign.stop.en')).toBe(true);
    expect(hasAudio(manifest, 'sign.stop.es')).toBe(true);
    expect(hasAudio(manifest, 'sign.yield.en')).toBe(false); // no existe
    expect(hasAudio(manifest, 'lesson.right-of-way.intro.es')).toBe(false); // pendiente
    expect(getReadyEntry(manifest, 'lesson.right-of-way.intro.es')).toBeNull();

    // Si el manifiesto no puede cargarse, la app sigue funcionando sin audio.
    __resetAudioManifestCache();
    vi.stubGlobal('fetch', vi.fn(async () => ({ ok: false, status: 404 })));
    const fallback = await loadAudioManifest();
    expect(hasAudio(fallback, 'sign.stop.en')).toBe(false);
    expect(emptyAudioManifest().byId.size).toBe(0);
  });

  it('el par de idiomas informa qué narraciones existen', async () => {
    const manifest = await loadAudioManifest();
    const pair = languagePair({ kind: AUDIO_KINDS.LESSON_INTRO, contentId: 'right-of-way' }, manifest);
    expect(pair.ids.en).toBe('lesson.right-of-way.intro.en');
    expect(pair.ids.es).toBe('lesson.right-of-way.intro.es');
    expect(pair.available).toEqual(['en']);
  });
});

describe('Reproductor · controles básicos', () => {
  it('T15 · Play reproduce la narración', async () => {
    await play(STOP);
    const state = getAudioState();
    expect(state.active).toBe(true);
    expect(state.status).toBe('playing');
    expect(state.id).toBe('sign.stop.en');
    expect(media.src.endsWith('audio/sign.stop.en.mp3')).toBe(true);
  });

  it('T16 · Pause pausa la narración', async () => {
    await play(STOP);
    pause();
    expect(getAudioState().status).toBe('paused');
  });

  it('T17 · Stop detiene y vuelve al inicio', async () => {
    await play(STOP);
    media.currentTime = 42;
    stop();
    const state = getAudioState();
    expect(state.status).toBe('idle');
    expect(state.currentTime).toBe(0);
  });

  it('toggle reanuda tras pausar y pausa tras reproducir', async () => {
    await toggleAudio(STOP);
    expect(getAudioState().status).toBe('playing');
    await toggleAudio(STOP);
    expect(getAudioState().status).toBe('paused');
  });

  it('cierra (dismiss) la narración, detiene el audio y oculta el reproductor', async () => {
    await setAudioLanguage('en');
    setAudioSpeed(1.5);
    await play(STOP);
    expect(getAudioState().active).toBe(true);

    dismiss();
    const state = getAudioState();
    expect(state.active).toBe(false);
    expect(state.status).toBe('idle');
    expect(state.id).toBeNull();
    expect(state.currentTime).toBe(0);
    expect(media.paused).toBe(true);
    // Las preferencias se conservan tras cerrar.
    expect(getAudioLanguage()).toBe('en');
    expect(getAudioSpeed()).toBe(1.5);
  });
});

describe('Selector EN / ES', () => {
  it('T18 · el selector EN reproduce el archivo inglés', async () => {
    await setAudioLanguage('en');
    await play(STOP);
    expect(getAudioState().id).toBe('sign.stop.en');
    expect(media.src.endsWith('audio/sign.stop.en.mp3')).toBe(true);
  });

  it('T19 · el selector ES reproduce el archivo español', async () => {
    await setAudioLanguage('es');
    await play(STOP);
    expect(getAudioState().id).toBe('sign.stop.es');
    expect(getAudioState().language).toBe('es');
    expect(media.src.endsWith('audio/sign.stop.es.mp3')).toBe(true);
  });

  it('T20 · cambiar de idioma reemplaza la reproducción anterior', async () => {
    await play(STOP);
    const firstSrc = media.src;
    await setAudioLanguage('es');
    expect(media.src).not.toBe(firstSrc);
    expect(media.src.endsWith('audio/sign.stop.es.mp3')).toBe(true);
    expect(media.srcHistory.length).toBeGreaterThanOrEqual(2);
    expect(getAudioState().id).toBe('sign.stop.es');
  });

  it('T21 · nunca se reproducen dos audios simultáneamente', async () => {
    await play(STOP);
    await play(INTRO);
    expect(mediaInstances.length).toBe(1); // un único elemento compartido
    expect(getAudioState().id).toBe('lesson.right-of-way.intro.en');
  });

  it('T22 · cambiar el idioma del audio no altera el idioma visual', async () => {
    setLanguage('es-ES');
    const interfaceLanguage = getLanguage();
    const preferenceLanguage = getState().preferences.language;
    await setAudioLanguage('en');
    expect(getLanguage()).toBe(interfaceLanguage);
    expect(getState().preferences.language).toBe(preferenceLanguage);
    setLanguage('en-US');
  });

  it('T23 · cambiar el idioma del audio no altera el progreso', async () => {
    updateState((draft) => {
      draft.favorites.push('q-1');
      draft.activePractice = { id: 'p1' };
      return draft;
    });
    await setAudioLanguage('es');
    const state = getState();
    expect(state.favorites).toContain('q-1');
    expect(state.activePractice).toEqual({ id: 'p1' });
    expect(state.preferences.audioLanguage).toBe('es');
  });

  it('T24 · se conserva la velocidad al cambiar de idioma', async () => {
    setAudioSpeed(1.5);
    await play(STOP);
    expect(media.playbackRate).toBe(1.5);
    await setAudioLanguage('es');
    expect(media.playbackRate).toBe(1.5);
    expect(getAudioSpeed()).toBe(1.5);
  });

  it('T25 · la preferencia de idioma y velocidad persiste', async () => {
    await setAudioLanguage('es');
    setAudioSpeed(1.25);
    expect(getState().preferences.audioLanguage).toBe('es');
    expect(getState().preferences.audioSpeed).toBe(1.25);

    // Un "siguiente audio" arranca con las preferencias guardadas.
    installMediaFactory();
    expect(getAudioLanguage()).toBe('es');
    expect(getAudioSpeed()).toBe(1.25);
  });
});

describe('Compatibilidad con GitHub Pages', () => {
  it('T31 · las rutas respetan el subdirectorio del despliegue', () => {
    expect(entryId({ kind: AUDIO_KINDS.SIGN, contentId: 'stop', language: 'en' })).toBe('sign.stop.en');

    vi.stubEnv('BASE_URL', '/driveready-florida/');
    expect(manifestUrl()).toBe('/driveready-florida/audio/manifest.json');
    expect(resolveAudioUrl({ outputPath: 'audio/sign.stop.en.mp3' })).toBe(
      '/driveready-florida/audio/sign.stop.en.mp3'
    );
    // La ruta se construye con el base path: nunca fija un dominio ni un repo.
    expect(manifestUrl()).not.toContain('http');
  });
});
