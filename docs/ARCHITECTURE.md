# ARCHITECTURE — DriveReady Florida

## 1. Resumen

Aplicación **estática** de una sola página con **hash routing** (`#/ruta`). Se compila con
Vite a `dist/` y se puede servir desde cualquier subdirectorio (GitHub Pages incluido).
No hay servidor, ni backend, ni llamadas de red en tiempo de ejecución.

## 2. Pila

| Capa | Tecnología |
| --- | --- |
| Lenguaje | JavaScript moderno (ES Modules) |
| Build | Vite 5 |
| Estilos | CSS puro con tokens (`variables.css`) |
| Iconos | Lucide Icons serializados a SVG en línea |
| Persistencia | `localStorage` (con respaldo en memoria) |
| Pruebas | Vitest + jsdom |

Sin frameworks SPA. La interfaz se construye con plantillas de cadena y un ciclo de
render explícito.

## 3. Estructura de carpetas

```
src/
  app.js            arranque, enrutado y ciclo de render
  main.js           importa estilos y arranca la app
  config/           appConfig, rutas, personalización
  i18n/             diccionarios en-US / es-ES y ayudantes
  data/             contenido (lecciones, preguntas + traducción ES, señales, categorías, fuentes)
  engines/          motores puros (quizEngine, examEngine)
  services/         storage, progressService, statisticsService
  pages/            una página por ruta
  components/       UI reutilizable
  utils/            formato, fechas, validación
  styles/           variables, global, layout, components, pages
```

## 4. Enrutado

- [routes.js](file:///c:/Users/pompo/OneDrive/Desktop/DRIVEREADY%20FLORIDA/src/config/routes.js) define las rutas como `pattern` de segmentos.
- `matchRoute(path)` resuelve la ruta y sus parámetros; `buildHref` construye los `href`.
- Se usa hash routing para que recargar una ruta nunca dependa del servidor.
- `base: './'` en Vite genera rutas de assets relativas, válidas en subdirectorios.

## 5. Ciclo de render

`app.js` expone `render({ navigation })`:

- En una **navegación** real se reposiciona el scroll y se enfoca `#main-region`.
- En un **refresh** de estado (`refresh()`, `navigation: false`) se conserva el scroll y
  el foco, de modo que responder una pregunta no salta al inicio.

Cada página es un módulo con esta forma:

```js
export default {
  render(ctx) { return '<section class="page">…</section>'; },
  mount(root, ctx) { /* eventos */ }
};
```

El objeto `ctx` contiene: `t`, `route`, `params`, `query`, `language`, `navigate`,
`refresh`, `scrollToTop` y `appConfig`.

## 6. Estado y persistencia

- [storage.js](file:///c:/Users/pompo/OneDrive/Desktop/DRIVEREADY%20FLORIDA/src/services/storage.js) es la única fuente de verdad persistida.
- Estado **versionado** (`storageSchemaVersion`) con `migrate` y `normalizeState`.
- `updateState(mutator)` clona, muta y guarda; notifica a los suscriptores.
- Manejo de **corrupción** (respaldo `:corrupt-backup`) y de **cuota agotada**
  (`StorageQuotaError`), con **respaldo en memoria** si `localStorage` no está disponible.
- Exportación/importación con `validateImport` + `mergeImportedState` (fusión, nunca
  sobrescritura silenciosa).

## 7. Motores puros

- [quizEngine.js](file:///c:/Users/pompo/OneDrive/Desktop/DRIVEREADY%20FLORIDA/src/engines/quizEngine.js) y [examEngine.js](file:///c:/Users/pompo/OneDrive/Desktop/DRIVEREADY%20FLORIDA/src/engines/examEngine.js) son **funciones puras**: reciben y devuelven sesiones
  serializables, sin efectos secundarios. Las páginas se encargan de persistir.

## 8. Internacionalización

- Diccionarios `en-US` y `es-ES` con la **misma estructura de claves** (verificado por
  prueba).
- `t(key, vars)` resuelve claves con puntos y hace **fallback al inglés**.
- Los datos de contenido usan claves cortas `en`/`es`. Los ayudantes `langKey()` y
  `pickLocalized()` traducen entre el locale de la interfaz y las claves de datos.

### 8.1 Capa de traducción de preguntas (ES)

El inglés permanece como **fuente única** del banco; la traducción española es una capa
externa indexada por `id`, de modo que **ningún `id` ni `correctAnswerIndex` se modifica**.

- Los archivos [translations.es.bank1.js](file:///c:/Users/pompo/OneDrive/Desktop/DRIVEREADY%20FLORIDA/src/data/questions/translations.es.bank1.js) y [translations.es.bank2.js](file:///c:/Users/pompo/OneDrive/Desktop/DRIVEREADY%20FLORIDA/src/data/questions/translations.es.bank2.js) contienen
  `{ [id]: { question, options[4] } }` (el orden de `options` **coincide** con el inglés).
- [questions/index.js](file:///c:/Users/pompo/OneDrive/Desktop/DRIVEREADY%20FLORIDA/src/data/questions/index.js) fusiona ambas capas en `questionTranslationsEs` y expone:
  - `hasFullTranslation(q)`: `true` solo si hay enunciado y **las cuatro** opciones (permite
    un estado honesto "Traducción no disponible todavía" cuando falta algo).
  - `getQuestionText(q, language)`: devuelve ES si existe, con **fallback a EN**.
  - `getQuestionOptions(q, language)`: devuelve las opciones ES con **los mismos índices**;
    cada elemento conserva su posición, por lo que la opción correcta no cambia.
  - `getTranslationCoverage()`: `{ total, complete, pending, percentage }`.
- La **preferencia de idioma de práctica** se guarda en `preferences.practiceQuestionLanguage`
  (`'en' | 'es'`, por defecto `'en'`) y **no** afecta al idioma de la interfaz.
- **Práctica** usa el botón bilingüe (`quiz-lang` / `lang-toggle`); **Simulacro**
  ([ExamSession.js](file:///c:/Users/pompo/OneDrive/Desktop/DRIVEREADY%20FLORIDA/src/pages/ExamSession.js)) consume siempre `question.question` / `question.options` (inglés).
  La revisión posterior ([ExamResults.js](file:///c:/Users/pompo/OneDrive/Desktop/DRIVEREADY%20FLORIDA/src/pages/ExamResults.js)) sí permite alternar a español con estado local
  `reviewLanguage` (vuelve a `'en'` al abrir otro resultado).

## 9. Accesibilidad

- Enlace "saltar al contenido", foco visible, `aria-live` para anuncios.
- Modales con **focus trap**, cierre con `Escape` y restauración de foco.
- `prefers-reduced-motion` respetado y forzable desde Ajustes.
- Gráficos acompañados de listas semánticas y etiquetas `aria-label`.

## 10. Rendimiento y límites conocidos

- El bundle principal ronda los 598 kB (~164 kB gzip). Es aceptable para una app de una
  sola página; si crece, conviene dividir páginas con `import()` dinámico.
- No hay service worker: la app no funciona sin conexión tras la primera descarga.

## 11. Sistema de narración bilingüe (Fish Audio)

La narración es **opcional y de degradación elegante**: si no existen audios publicados, la
interfaz funciona igual y el control de escucha queda inactivo. El navegador **nunca** habla
con Fish Audio ni recibe credenciales.

### 11.1 Separación estricta de responsabilidades

| Plano | Dónde corre | Qué hace | Qué NO hace |
| --- | --- | --- | --- |
| Generación | Node.js (`scripts/fish/*`) | Lee el contenido, sintetiza MP3 con Fish Audio, escribe el manifiesto | No se ejecuta en el navegador ni en CI de despliegue |
| Consumo | Navegador (`src/audio/*`) | Lee el manifiesto y reproduce MP3 estáticos | No conoce la API key ni llama a `api.fish.audio` |

El único contrato entre ambos planos es [manifest.json](file:///c:/Users/pompo/OneDrive/Desktop/DRIVEREADY%20FLORIDA/public/audio/manifest.json),
generado en `public/audio/` y copiado tal cual a `dist/` por Vite.

### 11.2 Generación (lado Node)

```
scripts/fish/
  buildCatalog.js     catálogo de narraciones desde el contenido real (ids estables)
  textProcessing.js   normalización de texto, hash de contenido
  plan.js             plan de generación, estimación de costo y límites
  fishClient.js       cliente HTTP de Fish Audio (modelo en la cabecera `model`)
  generateAudio.js    ejecución con reintentos, --confirm y registro en el manifiesto
  estimateCosts.js    dry-run sin gasto
  validateAudio.js    verificación de MP3 y ausencia de secretos
  manifest.js         lectura/escritura del manifiesto
```

- El catálogo deriva de los datos existentes: **20 intros de lección + 120 secciones +
 60 señales = 200 narraciones** (100 EN / 100 ES).
- Cada entrada se identifica por `lesson.<id>.intro.<lang>`, `lesson.<id>.<sectionId>.<lang>`
  o `sign.<id>.<lang>`.
- El **hash de caché** combina `texto + idioma + modelo + Reference ID`; cambiar una voz
  invalida **solo** las entradas de ese idioma.
- El modelo viaja en la **cabecera HTTP `model`** (`s1` | `s2-pro`), nunca en el cuerpo.

### 11.3 Consumo (lado navegador)

- [audioManifest.js](file:///c:/Users/pompo/OneDrive/Desktop/DRIVEREADY%20FLORIDA/src/audio/audioManifest.js) carga el manifiesto una vez (con caché) usando
  `import.meta.env.BASE_URL`, por lo que funciona en cualquier subdirectorio de GitHub Pages.
- [audioController.js](file:///c:/Users/pompo/OneDrive/Desktop/DRIVEREADY%20FLORIDA/src/audio/audioController.js) es el **controlador único**: un solo elemento
  `<audio>` compartido garantiza que nunca suenen dos narraciones a la vez.
- `setAudioLanguage()` cambia **solo** el idioma del audio: guarda la preferencia, detiene la
  pista anterior y reanuda únicamente si estaba reproduciendo; **no** toca el idioma visual,
  el progreso, las preguntas ni las estadísticas.
- Preferencias en `localStorage`: `preferences.audioLanguage` (inicial `'en'`) y
  `preferences.audioSpeed` (inicial `1`).

### 11.4 Componentes de interfaz

- [AudioLanguageSwitch.js](file:///c:/Users/pompo/OneDrive/Desktop/DRIVEREADY%20FLORIDA/src/components/audio/AudioLanguageSwitch.js) — selector compacto `EN | ES` (segmented control).
- [ListenButton.js](file:///c:/Users/pompo/OneDrive/Desktop/DRIVEREADY%20FLORIDA/src/components/audio/ListenButton.js) — botón de escucha por lección/sección/señal.
- [AudioPlayer.js](file:///c:/Users/pompo/OneDrive/Desktop/DRIVEREADY%20FLORIDA/src/components/audio/AudioPlayer.js) — dock con Play/Pause/Stop, **botón de cerrar (X)**, progreso, tiempos y
  velocidades (0.75× / 1× / 1.25× / 1.5×).
- El dock vive en el armazón (`appShell`), por lo que **persiste al cambiar de página**:
  desde cualquier pantalla (incluido el Simulacro) se puede pausar o cerrar la narración.
  `dismiss()` detiene el audio, oculta el dock y conserva las preferencias de idioma y velocidad.
- Estilos en [audio.css](file:///c:/Users/pompo/OneDrive/Desktop/DRIVEREADY%20FLORIDA/src/styles/audio.css) con tokens Midnight Study; sin banderas, usando
  las etiquetas `EN` / `ES`.

## 12. Documentación de audio

| Documento | Contenido |
| --- | --- |
| [FISH_AUDIO_SETUP.md](./FISH_AUDIO_SETUP.md) | Configurar API key y Reference IDs, comandos, generación y errores |
| [AUDIO_CATALOG.md](./AUDIO_CATALOG.md) | Cifras reales del catálogo, ids, caché y estructura del manifiesto |
