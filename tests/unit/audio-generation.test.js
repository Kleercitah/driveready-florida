/**
 * Auditoría T01–T13 · Sistema de narración (lado Node).
 *
 * Cubre el catálogo, los Reference IDs independientes, la invalidación de caché,
 * los límites de gasto, el manejo de errores de la API y el registro de audios
 * en el manifiesto. NO llama a Fish Audio: usa mocks e inyecta un `fetch` falso.
 */
import { describe, it, expect, vi, beforeEach } from 'vitest';

// El manifiesto se mantiene en memoria: ninguna prueba escribe en el disco real.
vi.mock('../../scripts/fish/manifest.js', async (importOriginal) => {
  const actual = await importOriginal();
  const memory = { manifest: actual.emptyManifest() };
  return {
    ...actual,
    readManifest: () => JSON.parse(JSON.stringify(memory.manifest)),
    writeManifest: (manifest) => {
      memory.manifest = { ...manifest, generatedAt: new Date().toISOString() };
      return memory.manifest;
    },
    __memory: memory,
    __resetMemory: () => {
      memory.manifest = actual.emptyManifest();
    }
  };
});

// Evita cualquier efecto secundario en disco (mkdirSync / writeFileSync).
vi.mock('node:fs', async (importOriginal) => {
  const actual = await importOriginal();
  return { ...actual, mkdirSync: vi.fn(), writeFileSync: vi.fn() };
});

import {
  readConfig,
  describeLanguageReadiness,
  referenceIdForLanguage,
  synthesize,
  isValidAudioBuffer,
  FishApiError
} from '../../scripts/fish/fishClient.js';
import {
  buildCatalog,
  summarizeCatalog,
  catalogId,
  ENTRY_KINDS,
  lessonIntroText,
  signText
} from '../../scripts/fish/buildCatalog.js';
import { createPlan, estimatePlan, checkLimits, formatCost } from '../../scripts/fish/plan.js';
import {
  normalizeText,
  joinNarration,
  byteLength,
  computeTextHash
} from '../../scripts/fish/textProcessing.js';
import { runEstimate } from '../../scripts/fish/estimateCosts.js';
import { runGeneration } from '../../scripts/fish/generateAudio.js';
import { __memory, __resetMemory } from '../../scripts/fish/manifest.js';
import { lessons } from '../../src/data/lessons/index.js';
import { signs } from '../../src/data/signs/index.js';

const REF_EN = 'REF_EN';
const REF_ES = 'REF_ES';

function makeConfig(env = {}) {
  return readConfig({
    FISH_API_KEY: 'test-key-000000000000',
    FISH_TTS_MODEL: 's2-pro',
    FISH_VOICE_EN_REFERENCE_ID: REF_EN,
    FISH_VOICE_ES_REFERENCE_ID: REF_ES,
    ...env
  });
}

function tinyResponse(bytes) {
  return {
    ok: true,
    status: 200,
    headers: { get: () => 'audio/mpeg' },
    arrayBuffer: async () => new ArrayBuffer(bytes)
  };
}

beforeEach(() => {
  __resetMemory();
});

describe('Catálogo y Reference IDs', () => {
  it('T01 · el catálogo detecta todas las lecciones', () => {
    const catalog = buildCatalog({ config: makeConfig() });
    const intros = catalog.filter((entry) => entry.kind === ENTRY_KINDS.LESSON_INTRO);
    expect(intros.length).toBe(lessons.length * 2);
    expect(catalog.some((entry) => entry.id === 'lesson.right-of-way.intro.en')).toBe(true);
    expect(catalog.some((entry) => entry.id === 'lesson.right-of-way.intro.es')).toBe(true);
  });

  it('T02 · el catálogo detecta todas las señales', () => {
    const catalog = buildCatalog({ config: makeConfig() });
    const signEntries = catalog.filter((entry) => entry.kind === ENTRY_KINDS.SIGN);
    expect(signEntries.length).toBe(signs.length * 2);
    expect(catalog.some((entry) => entry.id === 'sign.stop.en')).toBe(true);
    expect(catalog.some((entry) => entry.id === 'sign.stop.es')).toBe(true);
  });

  it('T03 · los idiomas tienen configuraciones independientes', () => {
    const both = readConfig({
      FISH_VOICE_EN_REFERENCE_ID: 'A',
      FISH_VOICE_ES_REFERENCE_ID: 'B'
    });
    expect(both.voiceEn).toBe('A');
    expect(both.voiceEs).toBe('B');
    expect(describeLanguageReadiness(both)).toEqual({ en: true, es: true });

    const onlyEn = readConfig({ FISH_VOICE_EN_REFERENCE_ID: 'A' });
    expect(describeLanguageReadiness(onlyEn)).toEqual({ en: true, es: false });
    expect(referenceIdForLanguage(onlyEn, 'es')).toBe('');
  });

  it('T04 · los audios ingleses usan el Reference ID inglés', () => {
    const catalog = buildCatalog({ config: makeConfig() });
    const english = catalog.filter((entry) => entry.language === 'en');
    expect(english.length).toBeGreaterThan(0);
    expect(english.every((entry) => entry.referenceId === REF_EN)).toBe(true);
  });

  it('T05 · los audios españoles usan el Reference ID español', () => {
    const catalog = buildCatalog({ config: makeConfig() });
    const spanish = catalog.filter((entry) => entry.language === 'es');
    expect(spanish.length).toBeGreaterThan(0);
    expect(spanish.every((entry) => entry.referenceId === REF_ES)).toBe(true);
  });
});

describe('Caché por hash e invalidación selectiva', () => {
  const STOP_EN = 'sign.stop.en';

  function readyMap(catalog) {
    return new Map(
      catalog.map((entry) => [entry.id, { ...entry, status: 'ready', byteSize: 4096, generatedAt: 'x' }])
    );
  }

  it('T06 · cambiar un Reference ID invalida la caché correspondiente', () => {
    const base = buildCatalog({ config: makeConfig() }).find((e) => e.id === STOP_EN);
    const existing = readyMap([base]);

    const rebuilt = buildCatalog({
      config: makeConfig({ FISH_VOICE_EN_REFERENCE_ID: 'REF_EN_NUEVO' }),
      existingEntries: existing
    }).find((e) => e.id === STOP_EN);

    expect(rebuilt.textHash).not.toBe(base.textHash);
    expect(rebuilt.status).toBe('pending');
    expect(rebuilt.byteSize).toBe(0);

    // Sin cambios, el audio válido se conserva (no se regenera).
    const untouched = buildCatalog({ config: makeConfig(), existingEntries: existing }).find(
      (e) => e.id === STOP_EN
    );
    expect(untouched.status).toBe('ready');
    expect(untouched.byteSize).toBe(4096);
  });

  it('T07 · cambiar la voz inglesa no invalida los audios españoles', () => {
    const base = buildCatalog({ config: makeConfig() });
    const changed = buildCatalog({
      config: makeConfig({ FISH_VOICE_EN_REFERENCE_ID: 'REF_EN_NUEVO' }),
      existingEntries: readyMap(base)
    });

    expect(changed.filter((e) => e.language === 'en').every((e) => e.status === 'pending')).toBe(true);
    expect(changed.filter((e) => e.language === 'es').every((e) => e.status === 'ready')).toBe(true);
  });

  it('T08 · cambiar la voz española no invalida los audios ingleses', () => {
    const base = buildCatalog({ config: makeConfig() });
    const changed = buildCatalog({
      config: makeConfig({ FISH_VOICE_ES_REFERENCE_ID: 'REF_ES_NUEVO' }),
      existingEntries: readyMap(base)
    });

    expect(changed.filter((e) => e.language === 'es').every((e) => e.status === 'pending')).toBe(true);
    expect(changed.filter((e) => e.language === 'en').every((e) => e.status === 'ready')).toBe(true);
  });

  it('el hash depende de texto, idioma, modelo y Reference ID', () => {
    const base = { text: 'Hola', language: 'es', model: 's2-pro', referenceId: REF_ES };
    const h = computeTextHash(base);
    expect(computeTextHash({ ...base, referenceId: 'OTRO' })).not.toBe(h);
    expect(computeTextHash({ ...base, model: 's1' })).not.toBe(h);
    expect(computeTextHash({ ...base, language: 'en' })).not.toBe(h);
    expect(computeTextHash({ ...base, text: 'Adiós' })).not.toBe(h);
  });

  it('el catálogo es completo y estable en tamaño', () => {
    const summary = summarizeCatalog(buildCatalog({ config: makeConfig() }));
    const expected =
      lessons.length * 2 + // introducciones (EN + ES)
      lessons.reduce((n, lesson) => n + (lesson.sections?.length ?? 0), 0) * 2 + // secciones
      signs.length * 2; // señales
    expect(summary.total).toBe(expected);
    expect(summary.byLanguage.en).toBe(summary.byLanguage.es);
    expect(summary.totalBytes).toBeGreaterThan(0);
  });
});

describe('Utilidades de texto y planificación', () => {
  it('normaliza, une y mide texto narrable', () => {
    expect(normalizeText('  Hola \n\n  mundo \r\n')).toBe('Hola mundo');
    expect(joinNarration(['Título', '', null, 'Cuerpo'])).toBe('Título. Cuerpo');
    expect(byteLength('á')).toBe(2);
    expect(byteLength('')).toBe(0);
    expect(lessonIntroText({ title: { en: 'T' }, summary: { en: 'S' } }, 'en')).toBe('T. S');
    expect(signText({ name: { en: 'Stop' }, meaning: { en: 'M' }, usage: { en: 'U' } }, 'en')).toBe(
      'Stop. M. U'
    );
    expect(catalogId({ kind: ENTRY_KINDS.SIGN, contentId: 'stop', language: 'en' })).toBe('sign.stop.en');
    expect(catalogId({ kind: ENTRY_KINDS.LESSON_INTRO, contentId: 'x', language: 'es' })).toBe(
      'lesson.x.intro.es'
    );
    expect(
      catalogId({ kind: ENTRY_KINDS.LESSON_SECTION, contentId: 'x', sectionId: 'y', language: 'en' })
    ).toBe('lesson.x.section.y.en');
  });

  it('createPlan selecciona, respeta límites y omite lo ya listo', () => {
    const c = (id, kind, language, status = 'pending', byteSize = 0) => ({ id, kind, language, status, byteSize });
    const catalog = [
      c('a.en', 'sign', 'en', 'ready', 100),
      c('a.es', 'sign', 'es', 'pending'),
      c('b.en', 'lesson-intro', 'en', 'pending'),
      c('b.es', 'lesson-intro', 'es', 'pending')
    ];

    const plan = createPlan(catalog, { language: 'en' });
    expect(plan.requested.map((e) => e.id)).toEqual(['a.en', 'b.en']);
    expect(plan.skippedReady.map((e) => e.id)).toEqual(['a.en']);
    expect(plan.toGenerate.map((e) => e.id)).toEqual(['b.en']);

    expect(createPlan(catalog, { limit: 1 }).toGenerate.length).toBe(1);
    expect(createPlan(catalog, { force: true }).skippedReady.length).toBe(0);
    expect(createPlan(catalog, { id: 'a.es' }).toGenerate.map((e) => e.id)).toEqual(['a.es']);
  });

  it('estimatePlan calcula bytes y declara el costo desconocido sin tarifa', () => {
    const entries = [{ text: 'abc' }, { text: 'ábc' }];
    const unknown = estimatePlan(entries, { pricePerMillionChars: null });
    expect(unknown.requests).toBe(2);
    expect(unknown.inputBytes).toBe(3 + 4);
    expect(unknown.currencyKnown).toBe(false);
    expect(unknown.estimatedUsd).toBeNull();
    expect(formatCost(unknown)).toContain('DESCONOCIDO');

    const known = estimatePlan(entries, { pricePerMillionChars: 15 });
    expect(known.currencyKnown).toBe(true);
    expect(known.estimatedUsd).toBeCloseTo((known.chars / 1_000_000) * 15, 10);
    expect(formatCost(known)).toContain('USD');
  });
});

describe('Control de gasto y errores de API', () => {
  it('T09 · el dry-run nunca consume API', async () => {
    const fetchSpy = vi.fn(() => {
      throw new Error('La API no debe llamarse');
    });

    const logs = [];
    runEstimate({ options: {}, config: makeConfig(), log: (line) => logs.push(line) });

    const result = await runGeneration({
      options: { limit: 1 },
      config: makeConfig(),
      fetchImpl: fetchSpy,
      log: () => {},
      writeFile: vi.fn()
    });

    expect(fetchSpy).not.toHaveBeenCalled();
    expect(result.dryRun).toBe(true);
    expect(result.generated).toBe(0);
    expect(logs.length).toBeGreaterThan(0);
  });

  it('T10 · se respetan los límites de generación', () => {
    const config = makeConfig();
    const ok = checkLimits(
      { requests: 10, inputBytes: 1000, currencyKnown: false, estimatedUsd: null },
      config
    );
    expect(ok.ok).toBe(true);

    const tooMany = checkLimits(
      { requests: 9999, inputBytes: 10, currencyKnown: false, estimatedUsd: null },
      config
    );
    expect(tooMany.ok).toBe(false);
    expect(tooMany.violations.join(' ')).toContain('FISH_MAX_REQUESTS');

    const tooExpensive = checkLimits(
      { requests: 1, inputBytes: 10, currencyKnown: true, estimatedUsd: 99 },
      config
    );
    expect(tooExpensive.ok).toBe(false);
    expect(tooExpensive.violations.join(' ')).toContain('FISH_MAX_ESTIMATED_USD');
  });

  it('T11 · los errores de la API se manejan correctamente', async () => {
    const unauthorized = vi.fn(async () => ({
      ok: false,
      status: 401,
      headers: { get: () => 'application/json' },
      json: async () => ({ message: 'unauthorized' })
    }));
    await expect(
      synthesize('hola', { referenceId: REF_EN, config: makeConfig(), fetchImpl: unauthorized })
    ).rejects.toBeInstanceOf(FishApiError);

    // 200 con JSON (error disfrazado) nunca debe aceptarse como audio.
    const jsonOk = vi.fn(async () => ({
      ok: true,
      status: 200,
      headers: { get: () => 'application/json' },
      text: async () => '{"detail":"boom"}'
    }));
    await expect(
      synthesize('hola', { referenceId: REF_EN, config: makeConfig(), fetchImpl: jsonOk })
    ).rejects.toBeInstanceOf(FishApiError);

    // Falta la API key: error claro y sin red.
    await expect(
      synthesize('hola', { referenceId: REF_EN, config: readConfig({}), fetchImpl: unauthorized })
    ).rejects.toBeInstanceOf(FishApiError);
  });

  it('T12 · el generador no guarda respuestas corruptas como MP3', async () => {
    expect(isValidAudioBuffer(Buffer.alloc(64))).toBe(false);
    expect(isValidAudioBuffer(Buffer.alloc(1024))).toBe(true);

    const writeFile = vi.fn();
    const corrupt = vi.fn(async () => tinyResponse(64));

    const result = await runGeneration({
      options: { id: 'sign.stop.en', confirm: true },
      config: makeConfig(),
      fetchImpl: corrupt,
      log: () => {},
      writeFile
    });

    expect(writeFile).not.toHaveBeenCalled();
    expect(result.generated).toBe(0);
    expect(result.failed).toBe(1);

    const entry = __memory.manifest.entries.find((e) => e.id === 'sign.stop.en');
    expect(entry.status).toBe('failed');
  });

  it('T13 · los audios generados se registran correctamente en el manifiesto', async () => {
    const writeFile = vi.fn();
    const ok = vi.fn(async () => tinyResponse(2048));

    const result = await runGeneration({
      options: { id: 'sign.stop.en', confirm: true },
      config: makeConfig(),
      fetchImpl: ok,
      log: () => {},
      writeFile
    });

    expect(result.generated).toBe(1);
    expect(writeFile).toHaveBeenCalledTimes(1);
    expect(writeFile.mock.calls[0][0]).toContain('sign.stop.en.mp3');
    expect(writeFile.mock.calls[0][1].length).toBe(2048);

    const { manifest } = __memory;
    const entry = manifest.entries.find((e) => e.id === 'sign.stop.en');
    expect(entry.status).toBe('ready');
    expect(entry.byteSize).toBe(2048);
    expect(entry.outputPath).toBe('audio/sign.stop.en.mp3');
    expect(entry.referenceId).toBe(REF_EN);
    expect(manifest.model).toBe('s2-pro');
    expect(manifest.references).toEqual({ en: REF_EN, es: REF_ES });
  });
});
