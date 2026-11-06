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
✓ tests/unit/storage.test.js        (8 tests)
✓ tests/unit/i18n.test.js           (7 tests)
✓ tests/unit/questions.test.js      (8 tests)
✓ tests/unit/engines.test.js        (14 tests)
✓ tests/unit/translation.test.js    (13 tests)
✓ tests/integration/progress.test.js (10 tests)
✓ tests/integration/routing.test.js  (7 tests)

 Test Files  7 passed (7)
      Tests  67 passed (67)
   Duration  ~6.59s
```

**Resultado: 67/67 pruebas superadas (exit code 0).**

### `npm run build`

```
vite v5.4.21 building for production...
✓ 1603 modules transformed.
dist/index.html                   1.51 kB │ gzip:   0.72 kB
dist/assets/index-DZ778Ggc.css   41.53 kB │ gzip:   7.59 kB
dist/assets/index-CaJe1rKn.js   586.29 kB │ gzip: 163.81 kB
✓ built in ~5.86s
```

**Resultado: build de producción exitoso (exit code 0).**
Nota: Vite reporta un aviso (*warning*) porque el bundle JS supera los 500 kB. Es un aviso, no un error; el build se completa correctamente.

---

## 2. Detalle de pruebas (T01–T54 + TR01–TR13)

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

---

## 3. Pruebas E2E (Playwright)

**Estado: NO EJECUTADAS.**

Playwright figura como dependencia opcional según el brief ("si es viable"). En este entorno **no se ejecutó ninguna prueba E2E de Playwright**, por lo que **no se declara ningún resultado E2E como superado**. La verificación funcional se cubrió mediante pruebas unitarias y de integración con Vitest + jsdom (T01–T54 + TR01–TR13).

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
