# FISH AUDIO SETUP — Narración bilingüe

Guía para generar las voces inglesa y española de DriveReady Florida con **Fish Audio**.

> **Regla de oro:** Fish Audio se usa **solo en local**, desde los scripts de Node en
> `scripts/fish/`. El navegador **nunca** llama a Fish Audio, **nunca** recibe la API key
> y solo reproduce **archivos MP3 estáticos** publicados junto al manifiesto.

---

## 1. Cómo obtener una API key

1. Entra en <https://fish.audio/go-api> y crea o inicia sesión en tu cuenta.
2. Genera una **API key** (token de acceso personal).
3. Cópiala. La pegarás en tu archivo `.env` local (nunca en el repositorio).

## 2. Cómo obtener un Reference ID de una voz

El **Reference ID** identifica una **voz** (un modelo de voz entrenado o una voz de la
biblioteca). **No** es un nombre de voz ni una ruta de archivo.

1. En Fish Audio, abre la voz que quieras usar (tuya o de la biblioteca).
2. Copia su **Reference ID** (identificador del modelo de voz).
3. Necesitas **dos**: una voz inglesa y una voz española.

> Si la voz es de un tercero, usa solo voces con autorización. No clones voces ajenas
> sin permiso. No inventes Reference IDs: usa exactamente los que Fish Audio te da.

## 3. Dónde poner el Reference ID inglés

En `.env`:

```
FISH_VOICE_EN_REFERENCE_ID=<tu_reference_id_ingles>
```

Se usa **exclusivamente** en las narraciones inglesas (lecciones, secciones y señales en `en`).

## 4. Dónde poner el Reference ID español

En `.env`:

```
FISH_VOICE_ES_REFERENCE_ID=<tu_reference_id_espanol>
```

Se usa **exclusivamente** en las narraciones españolas (contenido ya traducido y validado
en los campos `es` de los datos). **Fish Audio nunca se usa como traductor.**

## 5. Cómo cambiar las voces más adelante

1. Edita el Reference ID correspondiente en `.env`.
2. Ejecuta `npm run voices:dry-run` para ver qué se regeneraría.
3. Ejecuta `npm run voices:generate -- --lang=en --confirm` (o `--lang=es`).

El **hash** de cada narración incluye el Reference ID, así que **solo** se invalidan los
audios de esa voz. Cambiar la voz inglesa **no** toca los audios españoles, y viceversa.

---

## Configuración completa de `.env`

Copia `.env.example` a `.env` y rellena los valores:

```
FISH_API_KEY=<tu_api_key>
FISH_TTS_MODEL=s2-pro

FISH_VOICE_EN_REFERENCE_ID=<voz_inglesa>
FISH_VOICE_ES_REFERENCE_ID=<voz_espanola>

FISH_AUDIO_FORMAT=mp3
FISH_MP3_BITRATE=128
FISH_SAMPLE_RATE=44100

FISH_MAX_REQUESTS=250
FISH_MAX_INPUT_BYTES=400000
FISH_MAX_ESTIMATED_USD=5

# Opcional: si se deja vacío, el coste se reporta como DESCONOCIDO.
FISH_PRICE_PER_MILLION_CHARS=
```

- `.env` y `.env.local` están **excluidos** por `.gitignore`. `.env.example` sí se versiona.
- La API key **no** usa el prefijo `VITE_` y **no** entra en el bundle del navegador.

---

## Comandos (`npm run …`)

| Comando | Qué hace | ¿Gasta créditos? |
| --- | --- | --- |
| `npm run voices:catalog` | Extrae el catálogo de narraciones del contenido existente | No |
| `npm run voices:dry-run` | Muestra qué falta y estima peticiones/bytes/coste | No |
| `npm run voices:status` | Cobertura de audio por idioma (según manifiesto y disco) | No |
| `npm run voices:sample` | Genera **una** narración de prueba | **Sí** (requiere `--confirm`) |
| `npm run voices:generate` | Genera los audios pendientes respetando los límites | **Sí** (requiere `--confirm`) |
| `npm run voices:validate` | Comprueba manifiesto y archivos en disco | No |
| `npm run voices:all` | Flujo completo (equivalente a `generate --all`) | **Sí** (requiere `--confirm`) |

### Argumentos útiles

```
--lang=en        Solo inglés
--lang=es        Solo español
--lang=all       Ambos idiomas (por defecto)
--kind=lesson-intro | lesson-section | sign
--id=<catalogId> Una narración concreta
--limit=N        Máximo de narraciones en esta ejecución
--force          Regenerar aunque ya existan
--confirm        AUTORIZA el gasto (sin él, el script solo planifica)
```

## 6. Cómo generar audios ingleses

```bash
npm run voices:generate -- --lang=en --confirm
```

## 7. Cómo generar audios españoles

```bash
npm run voices:generate -- --lang=es --confirm
```

## 8. Cómo generar ambos idiomas

```bash
npm run voices:generate -- --lang=all --confirm
```

## 9. Cómo probar una muestra

```bash
npm run voices:sample -- --lang=en --confirm
npm run voices:sample -- --lang=es --confirm
```

Genera **una** narración por ejecución para comprobar que la voz y el Reference ID
funcionan antes de una generación masiva.

## 10. Cómo validar los audios

```bash
npm run voices:validate
```

Comprueba estructura del manifiesto, IDs duplicados, existencia y tamaño de cada MP3
`ready`, hashes obsoletos y que el manifiesto **no** filtre credenciales. Devuelve código
de salida `1` si hay problemas.

## 11. Cómo publicar los MP3

Los MP3 se generan **en local** y se suben al repositorio:

```
public/audio/*.mp3          (los audios, uno por narración e idioma)
public/audio/manifest.json  (el índice)
```

Después de generar, haz *commit* de `public/audio/` y sube. **El despliegue de GitHub
Pages no genera audio**: el workflow solo ejecuta pruebas, compila y publica. El sitio
funciona aunque todavía no existan MP3 (la narración se muestra como no disponible).

## 12. Cómo funcionan los botones EN / ES

- Cada lección, sección y señal incluye un control **Escuchar** y un **selector compacto EN | ES**.
- El dock inferior (reproductor global) aparece al iniciar una narración: Play/Pause, Stop,
  barra de progreso, tiempos, velocidad (0.75× · 1.0× · 1.25× · 1.5×) y el selector EN | ES.
- El selector cambia **únicamente el idioma del audio**. **No** cambia el idioma de la
  interfaz, el texto, las preguntas, las respuestas, el progreso ni las estadísticas.
- Al cambiar EN ↔ ES durante la reproducción: se detiene el audio anterior (un único
  elemento de audio compartido), se carga el MP3 equivalente, se conserva la velocidad y
  se reanuda solo si estaba reproduciéndose.
- Si falta un idioma, su botón aparece deshabilitado; la página **nunca** sustituye el
  español por el inglés en silencio.

## 13. Cómo regenerar sin gastar de más

- El **hash** (texto + idioma + modelo + Reference ID) evita regenerar lo que no cambió.
- `npm run voices:dry-run` muestra peticiones, bytes y coste **antes** de gastar.
- Los límites `FISH_MAX_REQUESTS`, `FISH_MAX_INPUT_BYTES` y `FISH_MAX_ESTIMATED_USD`
  detienen la generación si se superan.
- Sin `--confirm` (o `FISH_ALLOW_SPEND=1`) **no se llama a la API**.
- El coste solo se calcula si defines `FISH_PRICE_PER_MILLION_CHARS`; si no, se reporta
  como **DESCONOCIDO** (nunca se inventan precios ni se asume crédito gratuito).

## 14. Cómo solucionar errores de API

| Síntoma | Causa probable | Solución |
| --- | --- | --- |
| "Falta FISH_API_KEY" | No hay clave en `.env` | Rellena `FISH_API_KEY` |
| "Falta el Reference ID…" | Falta la voz de ese idioma | Rellena `FISH_VOICE_*_REFERENCE_ID` |
| Autorización rechazada (401/403) | Clave inválida o sin permisos | Regenera la API key |
| Reference ID inválido | Voz inexistente o no autorizada | Verifica que el ID existe y es tuyo |
| "devolvió JSON en lugar de audio" | Error de la API con estado 200 | Revisa el mensaje devuelto; no se guarda nada |
| Se detiene por límites | Supera el presupuesto configurado | Sube los límites o divide con `--limit` |
| Audio demasiado corto | Respuesta vacía/truncada | Se reintenta; si persiste, revisa el texto |

Los errores 429 y 5xx se reintentan hasta 3 veces con espera creciente. Ninguna respuesta
inválida se guarda como MP3.
