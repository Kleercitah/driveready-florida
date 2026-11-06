/**
 * Controlador ÚNICO de audio.
 *
 * Existe un solo elemento de audio en toda la aplicación, por lo que nunca
 * suenan dos narraciones a la vez. El idioma del audio es independiente del
 * idioma de la interfaz y de las preguntas de práctica.
 *
 * Responsabilidades:
 *  - cargar la narración correcta desde el manifiesto;
 *  - play / pause / stop, progreso, tiempos y velocidad;
 *  - cambiar de idioma EN <-> ES sin alterar el resto de la interfaz;
 *  - recordar idioma y velocidad en localStorage.
 */
import { audioConfig } from '../config/audioConfig.js';
import { getState as readAppState, updateState } from '../services/storage.js';
import {
  loadAudioManifest,
  getReadyEntry,
  resolveAudioUrl,
  entryId
} from './audioManifest.js';

let media = null;
let mediaFactory = () => new Audio();

const listeners = new Set();
let state = null;
let current = null; // { ids, kind, contentId, sectionId, title, language }

function preferredLanguage() {
  const prefs = readAppState().preferences ?? {};
  return audioConfig.supportedLanguages.includes(prefs.audioLanguage)
    ? prefs.audioLanguage
    : audioConfig.defaultLanguage;
}

function preferredSpeed() {
  const prefs = readAppState().preferences ?? {};
  const value = Number(prefs.audioSpeed);
  return audioConfig.speeds.includes(value) ? value : audioConfig.defaultSpeed;
}

function initialState() {
  return {
    active: false,
    id: null,
    title: null,
    language: preferredLanguage(),
    status: 'idle',
    currentTime: 0,
    duration: 0,
    speed: preferredSpeed(),
    error: null
  };
}

function ensureState() {
  if (!state) state = initialState();
  return state;
}

function setState(patch) {
  state = { ...ensureState(), ...patch };
  listeners.forEach((fn) => fn({ ...state }));
}

/** Estado actual (copia inmutable). */
export function getAudioState() {
  return { ...ensureState() };
}

export function subscribeToAudio(callback) {
  listeners.add(callback);
  return () => listeners.delete(callback);
}

export function getAudioLanguage() {
  return ensureState().language;
}

export function getAudioSpeed() {
  return ensureState().speed;
}

function ensureMedia() {
  if (media) return media;
  media = mediaFactory();
  media.preload = 'metadata';

  media.addEventListener('timeupdate', () => {
    setState({ currentTime: media.currentTime || 0 });
  });
  media.addEventListener('loadedmetadata', () => {
    setState({ duration: Number.isFinite(media.duration) ? media.duration : 0 });
  });
  media.addEventListener('play', () => {
    setState({ status: 'playing', error: null });
  });
  media.addEventListener('pause', () => {
    const s = ensureState().status;
    if (s === 'playing' || s === 'loading') setState({ status: 'paused' });
  });
  media.addEventListener('ended', () => {
    setState({ status: 'ended', currentTime: media.duration || 0 });
  });
  media.addEventListener('error', () => {
    setState({ status: 'error', error: 'media-error' });
  });
  return media;
}

async function safePlay() {
  try {
    const result = media.play();
    if (result && typeof result.then === 'function') await result;
    if (ensureState().status !== 'playing') setState({ status: 'playing', error: null });
    return true;
  } catch (error) {
    setState({ status: 'paused', error: 'play-rejected' });
    return false;
  }
}

function sameTrack(params) {
  if (!current) return false;
  if (current.kind !== params.kind) return false;
  if (current.contentId !== params.contentId) return false;
  if ((current.sectionId ?? null) !== (params.sectionId ?? null)) return false;
  return true;
}

function idsFor(params, language) {
  if (params.ids && params.ids[language]) return params.ids[language];
  return entryId({
    kind: params.kind,
    contentId: params.contentId,
    sectionId: params.sectionId,
    language
  });
}

async function load(params, { autoplay = true, language = null } = {}) {
  const targetLanguage =
    language ?? params.language ?? ensureState().language ?? audioConfig.defaultLanguage;
  const manifest = await loadAudioManifest();
  const id = idsFor(params, targetLanguage);
  const entry = getReadyEntry(manifest, id);

  current = {
    ids: params.ids ?? null,
    kind: params.kind,
    contentId: params.contentId,
    sectionId: params.sectionId ?? null,
    title: params.title ?? null,
    language: targetLanguage
  };

  if (!entry) {
    const element = ensureMedia();
    element.pause?.();
    setState({
      active: true,
      id,
      title: current.title,
      language: targetLanguage,
      status: 'error',
      error: 'no-audio',
      currentTime: 0,
      duration: 0
    });
    return getAudioState();
  }

  const element = ensureMedia();
  element.src = resolveAudioUrl(entry);
  element.playbackRate = ensureState().speed;
  try {
    element.currentTime = 0;
  } catch {
    /* algunos entornos no permiten fijar currentTime sin metadatos */
  }

  setState({
    active: true,
    id,
    title: current.title,
    language: targetLanguage,
    status: 'loading',
    error: null,
    currentTime: 0,
    duration: 0
  });

  if (autoplay) await safePlay();
  else setState({ status: 'paused' });

  return getAudioState();
}

/** Carga una narración sin reproducirla (para conocer su disponibilidad). */
export function prepare(params) {
  return load(params, { autoplay: false });
}

/** Reproduce (o reinicia) una narración. */
export function play(params) {
  return load(params, { autoplay: true });
}

export function pause() {
  if (!media) return getAudioState();
  media.pause();
  if (ensureState().status === 'playing' || ensureState().status === 'loading') {
    setState({ status: 'paused' });
  }
  return getAudioState();
}

/** Detiene y vuelve al inicio, conservando la narración cargada. */
export function stop() {
  const element = ensureMedia();
  element.pause?.();
  try {
    element.currentTime = 0;
  } catch {
    /* noop */
  }
  const s = ensureState();
  setState({
    status: s.active ? 'idle' : 'idle',
    currentTime: 0
  });
  return getAudioState();
}

/**
 * Cierra la narración: detiene el audio y oculta el reproductor global.
 * Conserva las preferencias (idioma y velocidad). La siguiente vez que se
 * pulse "Escuchar" se vuelve a cargar la narración desde el principio.
 */
export function dismiss() {
  const element = ensureMedia();
  element.pause?.();
  try {
    element.currentTime = 0;
  } catch {
    /* noop */
  }
  current = null;
  setState({
    active: false,
    id: null,
    title: null,
    status: 'idle',
    currentTime: 0,
    duration: 0,
    error: null
  });
  return getAudioState();
}

/** Alterna play/pausa para una narración concreta. */
export async function toggleAudio(params) {
  const s = ensureState();
  if (!current || !sameTrack(params)) {
    return load(params, { autoplay: true });
  }
  if (s.status === 'playing') {
    pause();
    return getAudioState();
  }
  if (s.status === 'paused' || s.status === 'ended') {
    await safePlay();
    return getAudioState();
  }
  return load(params, { autoplay: true });
}

/** Alterna play/pausa de la narración cargada actualmente (usado por el dock). */
export async function toggleCurrent() {
  const s = ensureState();
  if (!current || !s.active || s.status === 'idle' || s.status === 'error') return getAudioState();
  if (s.status === 'playing') {
    pause();
    return getAudioState();
  }
  await safePlay();
  return getAudioState();
}

/** Salta a una posición relativa (0..1). */
export function seekRatio(ratio) {
  const element = ensureMedia();
  const duration = Number(element.duration);
  if (!Number.isFinite(duration) || duration <= 0) return getAudioState();
  const time = Math.max(0, Math.min(1, ratio)) * duration;
  element.currentTime = time;
  setState({ currentTime: time });
  return getAudioState();
}

/** Cambia la velocidad de reproducción (0.75 / 1 / 1.25 / 1.5). */
export function setAudioSpeed(speed) {
  const value = Number(speed);
  const next = audioConfig.speeds.includes(value) ? value : audioConfig.defaultSpeed;
  if (media) media.playbackRate = next;
  setState({ speed: next });
  updateState((draft) => {
    draft.preferences.audioSpeed = next;
    return draft;
  });
  return getAudioState();
}

/**
 * Cambia SOLO el idioma del audio. No toca la interfaz ni el progreso.
 * Si había una narración cargada, carga su equivalente en el otro idioma y
 * reanuda únicamente si estaba reproduciéndose.
 */
export async function setAudioLanguage(language) {
  const next = audioConfig.supportedLanguages.includes(language)
    ? language
    : audioConfig.defaultLanguage;

  updateState((draft) => {
    draft.preferences.audioLanguage = next;
    return draft;
  });

  if (!current) {
    setState({ language: next });
    return getAudioState();
  }

  const wasPlaying = ['playing', 'loading'].includes(ensureState().status);
  const params = { ...current };
  return load(params, { autoplay: wasPlaying, language: next });
}

/** Solo para pruebas: permite inyectar un elemento de audio falso. */
export function __setMediaFactoryForTests(factory) {
  mediaFactory = factory;
  media = null;
  state = null;
  current = null;
  listeners.clear();
}

export default {
  getAudioState,
  subscribeToAudio,
  getAudioLanguage,
  getAudioSpeed,
  prepare,
  play,
  pause,
  stop,
  dismiss,
  toggleAudio,
  toggleCurrent,
  seekRatio,
  setAudioSpeed,
  setAudioLanguage
};
