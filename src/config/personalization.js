/**
 * Personalización romántica de la aplicación.
 *
 * Edita este archivo para adaptar el regalo sin tocar la lógica del proyecto.
 * Los campos vacíos se muestran con valores neutros y nunca rompen la interfaz.
 */
export const personalization = {
  // Mostrar la pantalla de bienvenida la primera vez.
  showWelcomeOnFirstVisit: true,

  // Nombre del estudiante. Déjalo vacío ('') para usar un saludo neutro.
  studentName: '',

  // Nombre de quien regala la página. Déjalo vacío ('') para omitir la firma.
  fromName: '',

  welcome: {
    title: 'A little something for you ♡',
    text:
      "I made this little space to help you reach your goal Estefano. Take your time, believe in yourself, and remember that I'm always cheering for you.",
    buttonLabel: "Let's get started",
    skipLabel: 'Explore on my own'
  },

  // Detalle romántico del dashboard.
  heroLoveNote: 'Hecho con amor para cada paso delante.',

  // Mensajes motivacionales discretos (se muestran fuera de los simulacros).
  motivationalMessages: [
    'Every question brings you one step closer.',
    'Progress matters more than perfection.',
    "You've got this, one mile at a time.",
    'Small steps today, confidence tomorrow.',
    'Study a little, learn a lot.'
  ],

  // Mensajes de resultado.
  passedMessage: 'You did it! Keep that confidence going.',
  needsPracticeMessage:
    "You're making progress. Let's work on the questions that challenged you.",

  // Ruta de la imagen personal opcional (relativa a /public).
  // Si el archivo no existe, se usa una ilustración SVG/CSS de respaldo.
  dedicationImage: 'images/personal/dedication.webp',

  // Firma mostrada al pie de la tarjeta de bienvenida.
  signature: ''
};

export default personalization;
