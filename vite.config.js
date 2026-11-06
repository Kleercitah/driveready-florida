import { defineConfig } from 'vite';

// Despliegue en GitHub Pages (repositorio `driveready-florida` →
// https://USUARIO.github.io/driveready-florida/).
//
// `base: './'` (valor por defecto) genera rutas de assets RELATIVAS, de modo que
// el mismo build funciona en desarrollo local, al previsualizar dist/ y al
// publicarse bajo CUALQUIER subdirectorio de GitHub Pages, sin codificar el
// nombre de usuario ni del repositorio.
//
// Si se quiere forzar un base path absoluto, basta con definir la variable de
// entorno al compilar:
//   VITE_BASE_PATH=/driveready-florida/ npm run build
//
// El enrutado se resuelve en el cliente con hash routing (#/ruta), por lo que la
// recarga directa de una ruta nunca depende del servidor y no requiere
// reescrituras SPA en GitHub Pages.
export default defineConfig({
  base: process.env.VITE_BASE_PATH || './',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    target: 'es2020'
  },
  server: {
    port: 5173,
    open: false
  },
  test: {
    environment: 'jsdom',
    globals: true,
    include: ['tests/**/*.test.js'],
    setupFiles: ['tests/setup.js']
  }
});
