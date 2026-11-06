# DEPLOYMENT — DriveReady Florida

Guía para compilar y publicar la aplicación. La app es **100 % estática**: no tiene backend, base de datos ni autenticación. El canal de publicación previsto es **GitHub Pages**, a través del workflow oficial incluido en el repositorio.

---

## 1. Requisitos

- Node.js 20 o superior
- npm 10 o superior
- (Opcional) una cuenta de GitHub para desplegar en GitHub Pages

---

## 2. Comandos disponibles

Definidos en `package.json`:

| Comando | Descripción |
|---------|-------------|
| `npm install` | Instala las dependencias |
| `npm run dev` | Servidor de desarrollo en `http://localhost:5173` |
| `npm run build` | Compila la versión de producción en `dist/` |
| `npm run preview` | Sirve localmente la carpeta `dist/` compilada |
| `npm run test` | Ejecuta la suite de Vitest (una sola pasada) |
| `npm run test:watch` | Vitest en modo vigilancia |
| `npm run validate` | Valida solo el banco de preguntas |

---

## 3. Build local

```bash
npm install
npm run test      # recomendado: verde antes de publicar
npm run build
npm run preview   # verifica dist/ en http://localhost:4173
```

El build genera:

```
dist/
  index.html
  favicon.svg
  assets/index-*.css
  assets/index-*.js
```

La configuración usa `base: process.env.VITE_BASE_PATH || './'` (ver [vite.config.js](../vite.config.js)). El valor por defecto `'./'` genera rutas de assets **relativas**, válidas en cualquier subdirectorio (incluido GitHub Pages). También se puede forzar un base absoluto si se desea:

```bash
VITE_BASE_PATH=/driveready-florida/ npm run build   # Linux/macOS
$env:VITE_BASE_PATH="/driveready-florida/"; npm run build   # PowerShell
```

El enrutado es **hash routing** (`#/ruta`), por lo que la recarga directa de cualquier ruta no depende de configurar un *fallback* en el servidor. **No se necesita ningún `404.html` ni redirección.**

---

## 4. Despliegue en GitHub Pages

Repositorio: **`driveready-florida`**
URL publicada: **`https://USUARIO.github.io/driveready-florida/`** (`USUARIO` = tu cuenta real de GitHub).

El proyecto incluye un workflow listo en [.github/workflows/deploy.yml](../.github/workflows/deploy.yml), que se activa con **push a `main`** y también **manualmente** (`workflow_dispatch`).

### Pasos

1. Crea un repositorio en GitHub llamado **`driveready-florida`** y sube el proyecto a la rama `main`.
2. En el repositorio, entra en **Settings → Pages**.
3. En **Build and deployment → Source**, selecciona **GitHub Actions**.
4. Cada push a `main` disparará el workflow, que:
   - hace checkout del código,
   - configura Node 20,
   - instala dependencias con `npm ci`,
   - ejecuta `npm run test` (el despliegue se detiene si las pruebas fallan),
   - ejecuta `npm run build`,
   - sube `dist/` como artefacto y lo publica en GitHub Pages.
5. La URL publicada aparece en la pestaña **Actions** o en **Settings → Pages**.

### Comandos para publicar

```bash
# 1. Verifica en local
npm install
npm run test        # debe pasar (67/67)
npm run build       # genera dist/
npm run preview     # revisa http://localhost:4173

# 2. Publica (requiere autorización explícita del usuario)
git add .
git commit -m "feat: práctica bilingüe y despliegue en GitHub Pages"
git push origin main
```

Tras el `git push`, GitHub Actions compila y publica automáticamente. No hay pasos de subida manual.

> **Aviso importante:** este documento describe *cómo* desplegar. La publicación real en GitHub Pages **no se ha ejecutado ni verificado** desde este entorno, por lo que **no se afirma que un sitio en vivo esté funcionando**. El build de producción sí fue verificado localmente (ver [TEST_REPORT.md](./TEST_REPORT.md)).

---

## 5. Proveedor de despliegue

El despliegue de este proyecto es **exclusivamente mediante GitHub Pages**, con las acciones oficiales de GitHub (`actions/checkout`, `actions/setup-node`, `actions/configure-pages`, `actions/upload-pages-artifact`, `actions/deploy-pages`). No se utiliza Vercel, Netlify, Firebase Hosting ni otros proveedores.

La app sigue siendo 100 % estática, por lo que el contenido de `dist/` podría servirse desde cualquier servidor de archivos estáticos (Nginx, Apache, S3…), pero ese no es el canal de publicación previsto.

---

## 6. Personalización antes de publicar

- **Dedicatoria romántica y nombres:** edita [src/config/personalization.js](../src/config/personalization.js).
- **Idioma por defecto, umbrales del examen:** edita [src/config/appConfig.js](../src/config/appConfig.js).
- **Colores y tipografía:** edita [src/styles/variables.css](../src/styles/variables.css).

---

## 7. Lista de verificación previa a la publicación

- [ ] `npm run test` en verde (67/67).
- [ ] `npm run build` sin errores.
- [ ] `npm run preview` revisado en móvil y escritorio.
- [ ] Botón **Ver en español / Show in English** funciona en Práctica y no altera la respuesta.
- [ ] El simulacro sigue en inglés (sin botón de traducción).
- [ ] Repositorio renombrado a `driveready-florida`.
- [ ] Dedicatoria y nombres personalizados correctamente.
- [ ] Enlace "no afiliado con FLHSMV" visible en Acerca de.
- [ ] Fuente de GitHub Pages configurada en **GitHub Actions**.
- [ ] Workflow ejecutado correctamente tras el primer push.
