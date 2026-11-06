/**
 * Configuración del reproductor de audio de la aplicación.
 *
 * Solo contiene constantes de interfaz: NO hay credenciales aquí. La clave de
 * Fish Audio y los Reference IDs viven únicamente en el `.env` y en los scripts
 * de Node (`scripts/fish/`). El navegador solo lee MP3 estáticos y el manifiesto.
 */
export const audioConfig = {
  /** Ruta del manifiesto, relativa al documento (compatible con GitHub Pages). */
  manifestPath: 'audio/manifest.json',

  /** Carpeta de los MP3 dentro de `public/`. */
  audioBasePath: 'audio',

  /** Idiomas de narración (independientes del idioma de la interfaz). */
  defaultLanguage: 'en',
  supportedLanguages: ['en', 'es'],

  /** Velocidades admitidas por el reproductor. */
  speeds: [0.75, 1, 1.25, 1.5],
  defaultSpeed: 1
};

export default audioConfig;
