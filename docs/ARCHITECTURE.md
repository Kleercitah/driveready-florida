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

- El bundle principal ronda los 586 kB (~164 kB gzip). Es aceptable para una app de una
  sola página; si crece, conviene dividir páginas con `import()` dinámico.
- No hay service worker: la app no funciona sin conexión tras la primera descarga.
