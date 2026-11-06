# DriveReady Florida

**Aprende. Practica. Aprueba.**

Plataforma web estática y bilingüe para estudiar el **Florida Class E Knowledge Exam**.
Sin cuentas, sin backend y sin seguimiento: todo el progreso vive en tu navegador.

> DriveReady Florida es una herramienta de estudio independiente. **No está afiliada ni
> respaldada por el FLHSMV** y no reproduce preguntas oficiales.

---

## Qué incluye

- **10 módulos de lección** con objetivos, ejemplos, escenarios, errores comunes, vocabulario y comprobaciones rápidas.
- **Banco de 150 preguntas originales** (144 verificadas + 6 en revisión) con explicación bilingüe y fuente.
- **Práctica flexible** por categoría, dificultad, no respondidas, falladas o favoritas.
- **Galería de señales** con 30 ilustraciones SVG originales y práctica de reconocimiento.
- **Simulacro de 50 preguntas** con umbral de aprobación 40 respuestas correctas (80%), temporizador opcional y cuadrícula de navegación.
- **Estadísticas reales** derivadas únicamente de tu actividad, con exportación e importación de respaldo.
- **Repaso** de preguntas falladas, favoritas y categorías débiles.
- **Bilingüe** en-US / es-ES. En **Práctica** puedes ver la traducción al español del enunciado y de las cuatro opciones con el botón *Ver en español / Show in English* (la respuesta elegida y la correcta no cambian). El **Simulacro permanece siempre en inglés**; al terminar, la revisión permite consultar el español.
- **Narración bilingüe** de lecciones, secciones y señales con **Fish Audio**, un reproductor compacto (Play/Pause/Stop, progreso, velocidad), un botón de **cerrar (X)** y un selector **EN | ES** que cambia solo el idioma del audio, nunca el de la página. El reproductor permanece disponible al cambiar de pantalla (p. ej. de Señales a Simulacro) para poder pausar o cerrar la narración en cualquier momento. Los MP3 se generan en local y se sirven como archivos estáticos.
- **Diseño mobile-first, accesible** (foco, contraste, `aria-live`, `prefers-reduced-motion`).

## Requisitos

- Node.js 20 o superior
- npm 10 o superior

## Puesta en marcha

```bash
npm install      # instalar dependencias
npm run dev      # servidor de desarrollo (http://localhost:5173)
npm run build    # compilar a dist/
npm run preview  # previsualizar la compilación
```

## Pruebas

```bash
npm run test        # suite completa (Vitest + jsdom)
npm run test:watch  # modo interactivo
npm run validate    # validación estructural del banco de preguntas
```

112 pruebas automatizadas (unitarias + integración) cubren datos, motores,
almacenamiento, i18n, rutas, estadísticas, la cobertura de traducción al español y el
sistema de narración (catálogo, Reference IDs, caché, control de gasto, reproductor y
selector EN/ES). Consulta `docs/TEST_REPORT.md`.

## Despliegue en GitHub Pages

El repositorio se publica como `driveready-florida`, con URL
`https://USUARIO.github.io/driveready-florida/` (sustituye `USUARIO` por tu cuenta real).
El proyecto incluye `.github/workflows/deploy.yml`. Al hacer *push* a `main`, el
flujo ejecuta pruebas, compila y publica `dist/` en GitHub Pages. El `base` de Vite es
`'./'`, por lo que las rutas de assets son relativas y funcionan dentro del subdirectorio
del repositorio (opcionalmente se puede forzar un base absoluto con `VITE_BASE_PATH`).

Pasos manuales (una sola vez):

1. Sube el proyecto a un repositorio de GitHub.
2. En **Settings → Pages**, selecciona **Source: GitHub Actions**.
3. Haz *push* a `main` y sigue el flujo en la pestaña **Actions**.

Detalles completos en `docs/DEPLOYMENT.md`.

## Estructura

```
src/
  components/   UI reutilizable (iconos, tarjetas, modales, gráficos)
  config/       configuración, rutas y personalización romántica
  data/         lecciones, preguntas, señales, categorías y fuentes
  engines/      motores puros de práctica y simulacro
  i18n/         diccionarios en-US / es-ES y ayudantes de localización
  pages/        una página por ruta
  services/     almacenamiento, progreso y estadísticas
  styles/       tokens y hojas de estilo
  utils/        formato, fechas y validación
tests/          pruebas unitarias y de integración
docs/           documentación del proyecto
public/         assets estáticos (favicon; `audio/` con el manifiesto y los MP3 al generarlos)
```

## Personalización

El regalo se adapta sin tocar la lógica en `src/config/personalization.js`
(nombre, dedicatoria, firma, mensajes motivacionales e imagen opcional en
`public/images/personal/dedication.webp`).

## Documentación

| Documento | Contenido |
| --- | --- |
| `docs/PROJECT_BIBLE.md` | Visión, alcance, reglas de producto y criterios de calidad |
| `docs/USER_GUIDE.md` | Guía de uso paso a paso |
| `docs/ARCHITECTURE.md` | Arquitectura técnica y decisiones de diseño |
| `docs/CONTENT_SOURCES.md` | Fuentes oficiales y política de contenido |
| `docs/QUESTION_REVIEW.md` | Proceso y estado de revisión del banco |
| `docs/TEST_REPORT.md` | Resultados reales de las pruebas |
| `docs/DEPLOYMENT.md` | Publicación en GitHub Pages |
| `docs/FISH_AUDIO_SETUP.md` | Configuración de Fish Audio, voces y generación de narraciones |
| `docs/AUDIO_CATALOG.md` | Catálogo de narraciones, ids, caché y manifiesto |
| `docs/FINAL_DELIVERY.md` | Informe final de entrega |

## Licencia y aviso

Proyecto personal de estudio. Las referencias oficiales pertenecen a sus respectivos
organismos. DriveReady no sustituye el manual oficial ni garantiza la aprobación del
examen real.
