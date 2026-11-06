# AUDIO CATALOG — Catálogo de narraciones y manifiesto

Referencia técnica del catálogo de narraciones y del manifiesto que conecta los scripts
de generación (Node) con el reproductor del navegador.

---

## 1. Qué es el catálogo

El catálogo se **deriva automáticamente** del contenido que ya existe en la aplicación:
lecciones, secciones y señales, en los dos idiomas de contenido (`en` y `es`). No traduce
nada: los textos ingleses y españoles provienen de los campos `en`/`es` de los datos.
Fish Audio se usa solo como **sintetizador de voz**.

Para volcarlo en consola:

```bash
npm run voices:catalog
```

### Cifras reales (catálogo actual)

| Métrica | Valor |
| --- | --- |
| Narraciones totales | **200** |
| Inglés (`en`) | **100** |
| Español (`es`) | **100** |
| Introducciones de lección | **20** (10 lecciones × 2 idiomas) |
| Secciones de lección | **120** (60 secciones × 2 idiomas) |
| Señales | **60** (30 señales × 2 idiomas) |
| Bytes de entrada totales | **123.905** |

## 2. Tipos de narración

| Tipo (`kind`) | Contenido narrado | Se usa en |
| --- | --- | --- |
| `lesson-intro` | Título + resumen de la lección | Cabecera de `LessonDetail` ("Escuchar esta lección") |
| `lesson-section` | Título + cuerpo de la sección | Cada sección de la lección ("Escuchar esta sección") |
| `sign` | Nombre + significado + uso de la señal | cada tarjeta en `Signs` ("Escuchar esta señal") |

## 3. Identificadores estables

Formato de `id` (idéntico en el catálogo y en el manifiesto):

```
lesson.<contentId>.intro.<language>              → lesson.right-of-way.intro.en
lesson.<contentId>.section.<sectionId>.<language> → lesson.right-of-way.section.four-way-stops.en
sign.<contentId>.<language>                       → sign.stop.en
```

`contentId` es el id de la lección o de la señal; `sectionId` es el id de la sección.

## 4. Campos de una entrada

Cada entrada del catálogo/manifiesto registra:

| Campo | Descripción |
| --- | --- |
| `id` | Identificador estable (ver arriba) |
| `kind` | `lesson-intro` · `lesson-section` · `sign` |
| `contentId` | id del contenido de origen |
| `sectionId` | id de la sección (o `null`) |
| `language` | `en` o `es` |
| `title` | Título legible (para el dock) |
| `text` | Texto narrado normalizado |
| `textHash` | SHA-256 de `texto + idioma + modelo + Reference ID` |
| `model` | Modelo TTS usado (p. ej. `s2-pro`) |
| `referenceId` | Reference ID de la voz (público; **no** es un secreto) |
| `format` | Formato del audio (`mp3`) |
| `file` / `outputPath` | Nombre y ruta del MP3 bajo `public/` |
| `byteSize` | Tamaño del MP3 generado |
| `status` | `ready` · `pending` · `failed` |
| `generatedAt` | Marca temporal de la última generación |

## 5. Caché e invalidación

El `textHash` incluye **texto + idioma + modelo + Reference ID**. Reglas:

- Si cambia el **texto** (editaste una lección), solo se regeneran los fragmentos afectados.
- Si cambia el **Reference ID inglés**, solo se invalidan los audios `en`.
- Si cambia el **Reference ID español**, solo se invalidan los audios `es`.
- Los audios válidos **no** se regeneran.

## 6. Manifiesto (`public/audio/manifest.json`)

Único contrato entre generación y navegador. Estructura:

```json
{
  "version": 1,
  "generatedAt": "…",
  "model": "s2-pro",
  "references": { "en": "REF_EN", "es": "REF_ES" },
  "entries": [ { "id": "sign.stop.en", "status": "ready", "outputPath": "audio/sign.stop.en.mp3", "byteSize": 12345, "…": "…" } ]
}
```

- Los **Reference IDs** pueden aparecer aquí (metadatos públicos).
- La **API key nunca** aparece en el manifiesto (`npm run voices:validate` lo comprueba).
- Si el manifiesto no existe o falla su carga, la web arranca con uno **vacío** y la
  narración se muestra como no disponible.

## 7. Estructura de archivos publicados

```
public/
  audio/
    manifest.json
    lesson.right-of-way.intro.en.mp3
    lesson.right-of-way.section.four-way-stops.es.mp3
    sign.stop.en.mp3
    …
```

Los MP3 se generan en local y se suben al repositorio; GitHub Pages los sirve como
archivos estáticos. El navegador resuelve las rutas con el **base path** de Vite, por lo
que funcionan bajo el subdirectorio del despliegue.

## 8. Cobertura y estado

```bash
npm run voices:status
```

Reporta, por idioma, cuántas narraciones están listas, pendientes, fallidas u obsoletas, y
un estado global: **SISTEMA PREPARADO** (0 audios), **AUDIO PARCIAL** o **AUDIO COMPLETO**.
