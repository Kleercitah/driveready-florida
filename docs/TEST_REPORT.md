# TEST REPORT — DriveReady Florida

Este documento registra el estado **real y ejecutado** de las pruebas del proyecto.
No se declara ninguna prueba como superada si no fue ejecutada en este entorno.

- Fecha de ejecución: 2026-11-05
- Entorno: Windows · Node.js · Vitest 2.1.9 · jsdom
- Comando de pruebas: `npm run test`
- Comando de build: `npm run build`

---

## 1. Resumen de ejecución

### `npm run test`

```
✓ tests/unit/storage.test.js          (8 tests)
✓ tests/unit/i18n.test.js             (7 tests)
✓ tests/unit/questions.test.js        (8 tests)
✓ tests/unit/engines.test.js          (14 tests)
✓ tests/unit/translation.test.js      (13 tests)
✓ tests/integration/progress.test.js  (10 tests)
✓ tests/integration/routing.test.js   (7 tests)
✓ tests/unit/audio-generation.test.js (18 tests)
✓ tests/unit/audio-player.test.js     (16 tests)
✓ tests/integration/audio-ui.test.js  (11 tests)

 Test Files  10 passed (10)
      Tests  112 passed (112)
   Duration  ~5.66s
```

**Resultado: 112/112 pruebas superadas (exit code 0).**

### `npm run build`

```
vite v5.4.21 building for production...
✓ 1603 modules transformed.
dist/index.html                   1.51 kB │ gzip:   0.72 kB
dist/assets/index-C9MzZEaG.css   46.88 kB │ gzip:   8.38 kB
dist/assets/index-D_P6bFjE.js   599.83 kB │ gzip: 166.62 kB
✓ built in ~5.86s
```

**Resultado: build de producción exitoso (exit code 0).**
Nota: Vite reporta un aviso (*warning*) porque el bundle JS supera los 500 kB. Es un aviso, no un error; el build se completa correctamente.

---

## 2. Detalle de pruebas (T01–T54 + TR01–TR13 + sistema de audio T01–T31)

> **Nota sobre la numeración:** las secciones 2.1–2.7 usan los identificadores
> `T01`–`T54` del brief original. La sección **2.8** documenta el sistema de
> narración y reutiliza los identificadores `T01`–`T31` de **su propia especificación**;
> son bancos de pruebas independientes. El total real es **109 pruebas**. Los
> identificadores de las pruebas están tomados literalmente del nombre de cada `it(...)`.

### `tests/unit/questions.test.js` — Integridad estructural del banco (T01–T08)

| Id | Prueba | Estado |
|----|--------|--------|
| T01 | El banco completo pasa la validación estructural sin errores | PASS |
| T02 | Todos los ids son únicos y recuperables por índice | PASS |
| T03 | Cada pregunta tiene exactamente 4 opciones y un índice correcto válido | PASS |
| T04 | Hay suficientes preguntas verificadas para un simulacro de 50 | PASS |
| T05 | Cada categoría declarada tiene al menos una pregunta | PASS |
| T06 | Cada pregunta declara explicación bilingüe y una fuente | PASS |
| T07 | El número de preguntas nunca se reduce a costa de la calidad | PASS |
| T08 | No hay enunciados duplicados (normalizados) | PASS |

Alcance: valida la **forma** de los datos (estructura), no la exactitud legal del contenido.

### `tests/unit/i18n.test.js` — Bilingüismo (T09–T15)

| Id | Prueba | Estado |
|----|--------|--------|
| T09 | Español e inglés declaran exactamente las mismas claves | PASS |
| T10 | `t()` resuelve claves anidadas y devuelve la clave si no existe | PASS |
| T11 | `t()` interpola marcadores `{var}` | PASS |
| T12 | Cambiar de idioma actualiza las traducciones | PASS |
| T13 | `langKey` asigna los locales a las claves cortas de los datos | PASS |
| T14 | `pickLocalized` lee `{ en, es }` y regresa al inglés | PASS |
| T15 | Los idiomas soportados incluyen inglés y español | PASS |

### `tests/unit/engines.test.js` — Motores puros (T16–T29)

Motor de práctica:

| Id | Prueba | Estado |
|----|--------|--------|
| T16 | Crea una sesión con el tamaño solicitado y preguntas únicas | PASS |
| T17 | No revela la corrección al seleccionar una opción | PASS |
| T18 | Comprobar la respuesta marca `checked` y calcula `isCorrect` | PASS |
| T19 | No permite cambiar la opción después de comprobar | PASS |
| T20 | Los resultados se calculan solo con datos reales | PASS |
| T21 | `shuffle` no muta el arreglo original | PASS |
| T22 | `finishSession` marca la sesión como terminada | PASS |

Motor del simulacro:

| Id | Prueba | Estado |
|----|--------|--------|
| T23 | Selecciona 50 preguntas únicas y verificadas | PASS |
| T24 | No inicia el simulacro si no hay suficientes preguntas verificadas | PASS |
| T25 | Registrar respuestas, banderas y conteos | PASS |
| T26 | Aprobar requiere 40 de 50 correctas (80%) | PASS |
| T27 | Las preguntas sin responder cuentan como incorrectas | PASS |
| T28 | El temporizador calcula el tiempo restante y su expiración | PASS |
| T29 | `isPassing` aplica el umbral oficial de 40/50 | PASS |

### `tests/unit/storage.test.js` — Persistencia (T30–T37)

| Id | Prueba | Estado |
|----|--------|--------|
| T30 | El estado por defecto incluye el esquema versionado | PASS |
| T31 | `normalizeState` corrige datos corruptos o incompletos | PASS |
| T32 | `updateState` persiste y notifica cambios reales | PASS |
| T33 | `validateImport` rechaza cargas inválidas | PASS |
| T34 | Exportar y volver a importar preserva el progreso | PASS |
| T35 | `resetState` devuelve el estado inicial limpio | PASS |
| T36 | Los días de actividad se registran una sola vez por día | PASS |
| T37 | El almacenamiento está disponible en el entorno de pruebas | PASS |

### `tests/integration/progress.test.js` — Progreso ↔ estadísticas (T38–T47)

| Id | Prueba | Estado |
|----|--------|--------|
| T38 | Sin actividad no hay datos inventados | PASS |
| T39 | Registrar respuestas actualiza los contadores reales | PASS |
| T40 | Las estadísticas por categoría derivan del banco real | PASS |
| T41 | Favoritos y lecciones se persisten y recuperan | PASS |
| T42 | Las preguntas falladas se recuerdan para el repaso | PASS |
| T43 | El historial de práctica y simulacros alimenta el resumen | PASS |
| T44 | El desglose por categoría de un examen usa sus respuestas reales | PASS |
| T45 | Las categorías débiles solo aparecen con datos suficientes | PASS |
| T46 | El simulacro activo se guarda y se puede abandonar | PASS |
| T47 | Las preferencias se actualizan de forma parcial | PASS |

### `tests/integration/routing.test.js` — Rutas y contenido (T48–T54)

| Id | Prueba | Estado |
|----|--------|--------|
| T48 | Las 14 rutas requeridas están definidas | PASS |
| T49 | `matchRoute` resuelve rutas estáticas y parámetros | PASS |
| T50 | Una ruta desconocida cae en NotFound | PASS |
| T51 | `buildHref` construye hashes navegables con query | PASS |
| T52 | Hay 10 módulos de lección estructuralmente válidos | PASS |
| T53 | La galería de señales incluye ilustraciones y significados bilingües | PASS |
| T54 | La configuración del examen coincide con el brief (50 · 40 · 80%) | PASS |

### `tests/unit/translation.test.js` — Traducción al español de las preguntas (TR01–TR13)

| Id | Prueba | Estado |
|----|--------|--------|
| TR01 | La cobertura de traducción es completa (enunciado + 4 opciones) | PASS |
| TR02 | Cada traducción respeta el mismo orden de 4 opciones que el inglés | PASS |
| TR03 | Por defecto el idioma de práctica es inglés (`'en'`) | PASS |
| TR04 | En español se devuelve el texto traducido y las opciones traducidas | PASS |
| TR05 | `getQuestionOptions` conserva los índices (la opción correcta no cambia) | PASS |
| TR06 | Una pregunta sin traducción cae al inglés y `hasFullTranslation` es `false` | PASS |
| TR07 | Cada categoría tiene sus 15 traducciones (150 en total) | PASS |
| TR08 | La validación del banco no emite advertencias de traducción | PASS |
| TR09 | Las explicaciones existen en inglés y español | PASS |
| TR10 | La preferencia de idioma solo admite `'en'` / `'es'` | PASS |
| TR11 | Cambiar de idioma no altera la respuesta correcta ni la seleccionada | PASS |
| TR12 | La preferencia de práctica no sobrescribe el idioma de la interfaz | PASS |
| TR13 | El simulacro permanece siempre en inglés | PASS |

### 2.8 Sistema de narración bilingüe — lote nuevo (45 pruebas)

Estas pruebas se ejecutan **sin credenciales y sin red real**: la generación usa un
`fetch` inyectado y un manifiesto en memoria, y el reproductor usa un elemento de audio
falso. **No se generó ni descargó ningún MP3 real.**

#### `tests/unit/audio-generation.test.js` — Generación (18 pruebas)

| Id | Prueba | Estado |
|----|--------|--------|
| T01 | El catálogo detecta todas las lecciones | PASS |
| T02 | El catálogo detecta todas las señales | PASS |
| T03 | Los idiomas tienen configuraciones independientes | PASS |
| T04 | Los audios ingleses usan el Reference ID inglés | PASS |
| T05 | Los audios españoles usan el Reference ID español | PASS |
| T06 | Cambiar un Reference ID invalida la caché correspondiente | PASS |
| T07 | Cambiar la voz inglesa no invalida los audios españoles | PASS |
| T08 | Cambiar la voz española no invalida los audios ingleses | PASS |
| — | El hash depende de texto, idioma, modelo y Reference ID | PASS |
| — | El catálogo es completo y estable en tamaño | PASS |
| — | Normaliza, une y mide texto narrable | PASS |
| — | `createPlan` selecciona, respeta límites y omite lo ya listo | PASS |
| — | `estimatePlan` calcula bytes y declara el costo desconocido sin tarifa | PASS |
| T09 | El dry-run nunca consume API | PASS |
| T10 | Se respetan los límites de generación | PASS |
| T11 | Los errores de la API se manejan correctamente | PASS |
| T12 | El generador no guarda respuestas corruptas como MP3 | PASS |
| T13 | Los audios generados se registran correctamente en el manifiesto | PASS |

#### `tests/unit/audio-player.test.js` — Reproductor (16 pruebas)

| Id | Prueba | Estado |
|----|--------|--------|
| T14 | Los archivos inexistentes o pendientes no aparecen disponibles | PASS |
| — | El par de idiomas informa qué narraciones existen | PASS |
| T15 | Play reproduce la narración | PASS |
| T16 | Pause pausa la narración | PASS |
| T17 | Stop detiene y vuelve al inicio | PASS |
| — | Toggle reanuda tras pausar y pausa tras reproducir | PASS |
| — | Cerrar (dismiss) detiene el audio y oculta el reproductor (conserva preferencias) | PASS |
| T18 | El selector EN reproduce el archivo inglés | PASS |
| T19 | El selector ES reproduce el archivo español | PASS |
| T20 | Cambiar de idioma reemplaza la reproducción anterior | PASS |
| T21 | Nunca se reproducen dos audios simultáneamente | PASS |
| T22 | Cambiar el idioma del audio no altera el idioma visual | PASS |
| T23 | Cambiar el idioma del audio no altera el progreso | PASS |
| T24 | Se conserva la velocidad al cambiar de idioma | PASS |
| T25 | La preferencia de idioma y velocidad persiste | PASS |
| T31 | Las rutas respetan el subdirectorio del despliegue | PASS |

#### `tests/integration/audio-ui.test.js` — Interfaz y entrega (11 pruebas)

| Id | Prueba | Estado |
|----|--------|--------|
| T26 | Si falta el audio español, la interfaz lo indica | PASS |
| — | Sin ninguna narración, el control queda inactivo sin romper la página | PASS |
| — | El control "Escuchar" reproduce y muestra el dock global | PASS |
| — | El botón de cerrar del reproductor es accesible (`aria-label` y `title`) | PASS |
| — | La narración sigue controlable al cambiar de página (señales → simulacro) | PASS |
| T27 | El reproductor está preparado para móvil y escritorio | PASS |
| — | El selector EN\|ES marca la opción activa | PASS |
| T28 | No se exponen secretos en el código ni en `dist` | PASS |
| T29 | `npm run build` está configurado | PASS |
| T30 | `npm run test` está configurado | PASS |
| — | Los comandos npm de narración existen | PASS |

**Cobertura del metalenguaje de la especificación:** T01–T31 cubiertos o superados.
T28 verifica además que ni `src/` ni `dist/` contienen `FISH_API_KEY`, los
Reference IDs, `api.fish.audio` ni tokens `Bearer`, y que `.env` está ignorado.

**Alcance real:** estas pruebas validan el **comportamiento del sistema con mocks**.
No existe ningún audio generado con Fish Audio todavía, por lo que **no** se declara
verificado el resultado sonoro real. Ver la sección 5.

---

## 3. Pruebas E2E (Playwright)

**Estado: NO EJECUTADAS.**

Playwright figura como dependencia opcional según el brief ("si es viable"). En este entorno **no se ejecutó ninguna prueba E2E de Playwright**, por lo que **no se declara ningún resultado E2E como superado**. La verificación funcional se cubrió mediante pruebas unitarias y de integración con Vitest + jsdom (T01–T54 + TR01–TR13 + el lote del sistema de audio, 109 pruebas en total).

---

## 4. Incidencias detectadas y corregidas durante las pruebas

1. **`app.js` — importación incorrecta**: `updatePreferences`, `markWelcomeSeen`, `hasSeenWelcome` y `setWelcomeSeen` se importaban desde `storage.js`, pero viven en `progressService.js`. Rompía el build. Corregido separando los imports.
2. **Pregunta duplicada `hp-004` / `tl-014`**: la validación estructural y T08 detectaron dos enunciados equivalentes sobre "rebasar por la derecha". Se reescribió `hp-004` como pregunta sobre el carril de aceleración (ver [QUESTION_REVIEW.md](./QUESTION_REVIEW.md)).
3. **Aserción incorrecta en T20**: la prueba seleccionaba dos preguntas pero solo respondía una; el conteo de `answered` era 2 en lugar de 1. Corregida la prueba para reflejar el comportamiento real del motor.

---

## 5. Limitaciones explícitas

- Estas pruebas validan **estructura, lógica y comportamiento de la aplicación**. **No** constituyen verificación legal del contenido educativo frente a la normativa vigente de Florida.
- No se ejecutaron pruebas en navegadores reales ni E2E automatizado.
- El aviso de tamaño de bundle de Vite no se considera un fallo funcional.
- **Sistema de audio:** verificado **solo con mocks** (manifiesto simulado, elemento de audio falso y `fetch` inyectado). **No se ha generado ni reproducido ningún MP3 real con Fish Audio**, porque no se dispone de credenciales en este entorno. Las pruebas confirman la lógica, el control de gasto y la interfaz, pero **no** la calidad sonora ni la aceptación real de la API. Ver [FISH_AUDIO_SETUP.md](./FISH_AUDIO_SETUP.md).
