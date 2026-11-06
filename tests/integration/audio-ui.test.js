/**
 * Auditoría T26–T30 · Interfaz del reproductor y entrega.
 *
 * Comprueba que la interfaz indica cuándo falta una narración, que el
 * reproductor se monta y funciona, que no hay secretos expuestos, y que los
 * comandos de compilación y prueba están configurados.
 */
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { resolve, join } from 'node:path';
import { renderListenControl } from '../../src/components/audio/ListenButton.js';
import { renderAudioLanguageSwitch } from '../../src/components/audio/AudioLanguageSwitch.js';
import { renderAudioDock, mountAudioUI, formatTime } from '../../src/components/audio/AudioPlayer.js';
import {
  getAudioState,
  __setMediaFactoryForTests
} from '../../src/audio/audioController.js';
import { __resetAudioManifestCache } from '../../src/audio/audioManifest.js';
import { t } from '../../src/i18n/index.js';

const ROOT = process.cwd();

function createFakeMedia() {
  const listeners = new Map();
  const media = { preload: '', playbackRate: 1, currentTime: 0, duration: 90, paused: true, src: '' };
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

function flush() {
  return new Promise((resolveTick) => setTimeout(resolveTick, 0));
}

function walk(dir) {
  return readdirSync(dir).flatMap((name) => {
    const full = join(dir, name);
    return statSync(full).isDirectory() ? walk(full) : [full];
  });
}

function stubManifest(entries) {
  const manifest = { version: 1, model: 's2-pro', references: { en: 'REF_EN', es: 'REF_ES' }, entries };
  vi.stubGlobal('fetch', vi.fn(async () => ({ ok: true, status: 200, json: async () => manifest })));
}

beforeEach(() => {
  __resetAudioManifestCache();
  __setMediaFactoryForTests(() => createFakeMedia());
  document.body.className = '';
  document.body.innerHTML = '';
});

afterEach(() => {
  vi.unstubAllGlobals();
  vi.unstubAllEnvs();
  __resetAudioManifestCache();
  document.body.className = '';
  document.body.innerHTML = '';
});

describe('Estado de disponibilidad en la interfaz', () => {
  it('T26 · si falta el audio español, la interfaz lo indica', async () => {
    stubManifest([
      { id: 'sign.stop.en', kind: 'sign', contentId: 'stop', language: 'en', status: 'ready', outputPath: 'audio/sign.stop.en.mp3', byteSize: 10 }
    ]);
    document.body.innerHTML = `<div id="root">${renderListenControl({
      t,
      kind: 'sign',
      contentId: 'stop',
      title: 'Stop'
    })}</div>`;
    const root = document.getElementById('root');
    mountAudioUI(root, { t });
    await flush();

    const esButton = root.querySelector('[data-audio-lang-value="es"]');
    const enButton = root.querySelector('[data-audio-lang-value="en"]');
    expect(esButton.disabled).toBe(true);
    expect(esButton.classList.contains('is-unavailable')).toBe(true);
    expect(enButton.disabled).toBe(false);
    expect(root.querySelector('[data-audio-toggle]').disabled).toBe(false);
    expect(root.querySelector('[data-listen]').classList.contains('is-unavailable')).toBe(false);
  });

  it('sin ninguna narración, el control queda inactivo sin romper la página', async () => {
    stubManifest([]);
    document.body.innerHTML = `<div id="root">${renderListenControl({
      t,
      kind: 'sign',
      contentId: 'stop',
      title: 'Stop'
    })}</div>`;
    const root = document.getElementById('root');
    mountAudioUI(root, { t });
    await flush();

    const listen = root.querySelector('[data-listen]');
    expect(listen.classList.contains('is-unavailable')).toBe(true);
    expect(root.querySelector('[data-audio-toggle]').disabled).toBe(true);
  });

  it('el control "Escuchar" reproduce y muestra el dock global', async () => {
    stubManifest([
      { id: 'sign.stop.en', kind: 'sign', contentId: 'stop', language: 'en', status: 'ready', outputPath: 'audio/sign.stop.en.mp3', byteSize: 10 }
    ]);
    document.body.innerHTML = `<div id="root">${renderAudioDock({ t })}${renderListenControl({
      t,
      kind: 'sign',
      contentId: 'stop',
      title: 'Stop'
    })}</div>`;
    const root = document.getElementById('root');
    mountAudioUI(root, { t });
    await flush();

    root.querySelector('[data-audio-toggle]').click();
    await flush();

    expect(getAudioState().status).toBe('playing');
    expect(document.querySelector('[data-audio-dock]').hidden).toBe(false);
    expect(document.body.classList.contains('has-audio-dock')).toBe(true);
  });

  it('el botón de cerrar del reproductor es accesible', () => {
    const dock = renderAudioDock({ t });
    expect(dock).toContain('data-audio-dock-close');
    expect(dock).toMatch(/data-audio-dock-close[^>]*aria-label="[^"]+"/);
    expect(dock).toMatch(/data-audio-dock-close[^>]*title="[^"]+"/);
  });

  it('la narración sigue controlable al cambiar de página (señales → simulacro)', async () => {
    stubManifest([
      { id: 'sign.stop.en', kind: 'sign', contentId: 'stop', language: 'en', status: 'ready', outputPath: 'audio/sign.stop.en.mp3', byteSize: 10 }
    ]);

    // 1) Página de señales con su control "Escuchar".
    document.body.innerHTML = `<div id="root">${renderAudioDock({ t })}${renderListenControl({
      t,
      kind: 'sign',
      contentId: 'stop',
      title: 'Stop'
    })}</div>`;
    mountAudioUI(document.getElementById('root'), { t });
    await flush();
    document.querySelector('[data-audio-toggle]').click();
    await flush();
    expect(getAudioState().status).toBe('playing');

    // 2) Navegación: se reconstruye el armazón con otra página (sin controles de escucha).
    document.body.innerHTML = `<div id="root">${renderAudioDock({ t })}</div>`;
    mountAudioUI(document.getElementById('root'), { t });
    await flush();

    const dock = document.querySelector('[data-audio-dock]');
    expect(dock.hidden).toBe(false); // el reproductor sigue visible
    expect(getAudioState().status).toBe('playing'); // y sigue sonando

    // 3) Se puede pausar desde el dock en la nueva página.
    dock.querySelector('[data-audio-dock-toggle]').click();
    await flush();
    expect(getAudioState().status).toBe('paused');

    // 4) Se puede cerrar desde el dock en la nueva página.
    dock.querySelector('[data-audio-dock-close]').click();
    await flush();
    expect(getAudioState().active).toBe(false);
    expect(dock.hidden).toBe(true);
    expect(document.body.classList.contains('has-audio-dock')).toBe(false);
  });
});

describe('Reproductor · estructura y móvil', () => {
  it('T27 · el reproductor está preparado para móvil y escritorio', () => {
    expect(formatTime(0)).toBe('0:00');
    expect(formatTime(65)).toBe('1:05');
    expect(formatTime(125)).toBe('2:05');

    const dock = renderAudioDock({ t });
    expect(dock).toContain('data-audio-dock');
    expect(dock).toContain('hidden');
    expect(dock).toContain('data-audio-dock-toggle');
    expect(dock).toContain('data-audio-dock-stop');
    expect(dock).toContain('data-audio-dock-progress');
    ['0.75', '1', '1.25', '1.5'].forEach((speed) => {
      expect(dock).toContain(`data-audio-speed-value="${speed}"`);
    });
    expect(dock).toContain('data-audio-lang-value="en"');
    expect(dock).toContain('data-audio-lang-value="es"');

    const css = readFileSync(resolve(ROOT, 'src/styles/audio.css'), 'utf8');
    expect(css).toMatch(/@media\s*\(max-width:\s*640px\)/);
    expect(css).toMatch(/@media\s*\(min-width:\s*900px\)/);
    expect(css).toContain('.audio-dock');
    expect(css).toContain('.audio-lang');
  });

  it('el selector EN|ES marca la opción activa', () => {
    const es = renderAudioLanguageSwitch({ label: 'Audio language', active: 'es' });
    expect(es).toContain('data-audio-lang-value="es"');
    expect(es).toMatch(/data-audio-lang-value="es"[^>]*aria-pressed="true"|aria-pressed="true"[^>]*data-audio-lang-value="es"/);
  });
});

describe('Entrega · seguridad y comandos', () => {
  it('T28 · no se exponen secretos en el código ni en dist', () => {
    const secret = /FISH_API_KEY|FISH_VOICE_EN_REFERENCE_ID|FISH_VOICE_ES_REFERENCE_ID|api\.fish\.audio|Bearer\s+[A-Za-z0-9._-]{8,}/;

    const srcOffenders = walk(resolve(ROOT, 'src')).filter((file) => secret.test(readFileSync(file, 'utf8')));
    expect(srcOffenders).toEqual([]);

    const dist = resolve(ROOT, 'dist');
    if (existsSync(dist)) {
      const distOffenders = walk(dist).filter((file) => secret.test(readFileSync(file, 'utf8')));
      expect(distOffenders).toEqual([]);
    }

    const gitignore = readFileSync(resolve(ROOT, '.gitignore'), 'utf8');
    expect(gitignore).toMatch(/^\.env$/m);
    expect(gitignore).toMatch(/!\.env\.example/);
  });

  it('T29 · npm run build está configurado', () => {
    const pkg = JSON.parse(readFileSync(resolve(ROOT, 'package.json'), 'utf8'));
    expect(pkg.scripts.build).toBe('vite build');
    const vite = readFileSync(resolve(ROOT, 'vite.config.js'), 'utf8');
    expect(vite).toMatch(/outDir:\s*'dist'/);
    expect(vite).toMatch(/base:\s*process\.env\.VITE_BASE_PATH\s*\|\|\s*'\.\/'/);
  });

  it('T30 · npm run test está configurado', () => {
    const pkg = JSON.parse(readFileSync(resolve(ROOT, 'package.json'), 'utf8'));
    expect(pkg.scripts.test).toBe('vitest run');
    const vite = readFileSync(resolve(ROOT, 'vite.config.js'), 'utf8');
    expect(vite).toMatch(/include:\s*\['tests\/\*\*\/\*\.test\.js'\]/);
  });

  it('los comandos npm de narración existen', () => {
    const { scripts } = JSON.parse(readFileSync(resolve(ROOT, 'package.json'), 'utf8'));
    ['voices:catalog', 'voices:dry-run', 'voices:sample', 'voices:generate', 'voices:validate', 'voices:status', 'voices:all'].forEach(
      (name) => expect(scripts[name]).toBeTruthy()
    );
  });
});
