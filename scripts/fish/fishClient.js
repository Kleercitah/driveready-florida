/**
 * Cliente de Fish Audio para GENERACIÓN LOCAL (Node.js).
 *
 * Endpoint verificado en la documentación oficial vigente:
 *   POST https://api.fish.audio/v1/tts
 *   Cabeceras: Authorization: Bearer <key>, Content-Type: application/json,
 *              model: <s1 | s2-pro>
 *   Cuerpo (JSON): text (requerido), reference_id, format, mp3_bitrate, ...
 *   Respuesta: bytes de audio (no JSON).
 *
 * IMPORTANTE: el modelo se envía en la CABECERA `model`, no en el cuerpo.
 * Este archivo NUNCA debe importarse desde el código del navegador.
 */
import { readFileSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';

export const FISH_API_BASE = 'https://api.fish.audio';
export const FISH_TTS_PATH = '/v1/tts';

/** Parser mínimo de `.env` (sin dependencias externas). */
export function parseEnv(content) {
  const result = {};
  String(content ?? '')
    .split(/\r?\n/)
    .forEach((line) => {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith('#')) return;
      const eq = trimmed.indexOf('=');
      if (eq === -1) return;
      const key = trimmed.slice(0, eq).trim();
      let value = trimmed.slice(eq + 1).trim();
      if (
        (value.startsWith('"') && value.endsWith('"')) ||
        (value.startsWith("'") && value.endsWith("'"))
      ) {
        value = value.slice(1, -1);
      }
      result[key] = value;
    });
  return result;
}

/** Carga `.env` (y `.env.local`) sin sobrescribir variables ya definidas. */
export function loadEnv(cwd = process.cwd()) {
  const loaded = {};
  for (const name of ['.env', '.env.local']) {
    const file = resolve(cwd, name);
    if (!existsSync(file)) continue;
    Object.assign(loaded, parseEnv(readFileSync(file, 'utf8')));
  }
  Object.entries(loaded).forEach(([key, value]) => {
    if (process.env[key] === undefined) process.env[key] = value;
  });
  return loaded;
}

function num(value, fallback) {
  const parsed = Number(value);
  return Number.isFinite(parsed) && parsed > 0 ? parsed : fallback;
}

/** Lee y valida la configuración desde el entorno. No imprime secretos. */
export function readConfig(env = process.env) {
  return {
    apiKey: env.FISH_API_KEY || '',
    model: env.FISH_TTS_MODEL || 's2-pro',
    format: env.FISH_AUDIO_FORMAT || 'mp3',
    mp3Bitrate: num(env.FISH_MP3_BITRATE, 128),
    sampleRate: num(env.FISH_SAMPLE_RATE, 44100),
    voiceEn: env.FISH_VOICE_EN_REFERENCE_ID || '',
    voiceEs: env.FISH_VOICE_ES_REFERENCE_ID || '',
    maxRequests: num(env.FISH_MAX_REQUESTS, 250),
    maxInputBytes: num(env.FISH_MAX_INPUT_BYTES, 400000),
    maxEstimatedUsd: num(env.FISH_MAX_ESTIMATED_USD, 5),
    pricePerMillionChars: env.FISH_PRICE_PER_MILLION_CHARS
      ? num(env.FISH_PRICE_PER_MILLION_CHARS, 0)
      : null
  };
}

/** Indica qué idiomas tienen Reference ID configurado. */
export function describeLanguageReadiness(config) {
  return {
    en: Boolean(config.voiceEn),
    es: Boolean(config.voiceEs)
  };
}

/** Reference ID de la voz correspondiente al idioma ('en' | 'es'). */
export function referenceIdForLanguage(config, language) {
  return language === 'es' ? config.voiceEs : config.voiceEn;
}

export class FishApiError extends Error {
  constructor(message, { status = null, body = null } = {}) {
    super(message);
    this.name = 'FishApiError';
    this.status = status;
    this.body = body;
  }
}

/**
 * Sintetiza texto y devuelve un Buffer con el audio.
 * @param {string} text
 * @param {{ referenceId: string, config: object, fetchImpl?: Function, timeoutMs?: number }} options
 */
export async function synthesize(text, { referenceId, config, fetchImpl = fetch, timeoutMs = 120000 }) {
  if (!config?.apiKey) {
    throw new FishApiError('Falta FISH_API_KEY. Configura tu clave en el archivo .env.');
  }
  if (!referenceId) {
    throw new FishApiError('Falta el Reference ID de la voz para este idioma.');
  }

  const body = {
    text,
    reference_id: referenceId,
    format: config.format,
    chunk_length: 300,
    normalize: true,
    latency: 'normal'
  };
  if (config.format === 'mp3') body.mp3_bitrate = config.mp3Bitrate;
  if (config.sampleRate) body.sample_rate = config.sampleRate;

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);

  let response;
  try {
    response = await fetchImpl(`${FISH_API_BASE}${FISH_TTS_PATH}`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${config.apiKey}`,
        'Content-Type': 'application/json',
        model: config.model
      },
      body: JSON.stringify(body),
      signal: controller.signal
    });
  } catch (error) {
    clearTimeout(timer);
    throw new FishApiError(`Error de red al llamar a Fish Audio: ${error.message}`);
  }
  clearTimeout(timer);

  const contentType = response.headers?.get?.('content-type') ?? '';

  if (!response.ok) {
    let detail = '';
    try {
      detail = JSON.stringify(await response.json());
    } catch {
      try {
        detail = await response.text();
      } catch {
        detail = '';
      }
    }
    throw new FishApiError(`Fish Audio respondió ${response.status}.`, {
      status: response.status,
      body: detail
    });
  }

  // Un error puede llegar con estado 200 pero cuerpo JSON; nunca debe guardarse.
  if (contentType.includes('application/json')) {
    const detail = await response.text();
    throw new FishApiError('Fish Audio devolvió JSON en lugar de audio.', { body: detail });
  }

  const arrayBuffer = await response.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

  if (!isValidAudioBuffer(buffer)) {
    throw new FishApiError('La respuesta de audio está vacía o es demasiado pequeña.');
  }
  return buffer;
}

/** Comprueba de forma básica que los bytes parecen un audio válido. */
export function isValidAudioBuffer(buffer) {
  return Buffer.isBuffer(buffer) && buffer.length > 256;
}

export default {
  FISH_API_BASE,
  FISH_TTS_PATH,
  parseEnv,
  loadEnv,
  readConfig,
  describeLanguageReadiness,
  referenceIdForLanguage,
  synthesize,
  isValidAudioBuffer,
  FishApiError
};
