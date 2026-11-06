/**
 * Configuración central de DriveReady Florida.
 * Un único punto de verdad para valores de examen, idiomas, almacenamiento,
 * enlaces oficiales e información de marca.
 */
export const appConfig = {
  appName: 'DriveReady Florida',
  shortName: 'DriveReady',
  version: '1.0.0',
  tagline: 'Learn. Practice. Pass.',
  subTagline: 'Your road to success starts here.',

  defaultLanguage: 'en-US',
  supportedLanguages: ['en-US', 'es-ES'],
  fallbackLanguage: 'en-US',

  // Fuentes oficiales de referencia (no afiliación).
  officialHandbookUrl:
    'https://www.flhsmv.gov/pdf/handbooks/englishdriverhandbook.pdf',
  flhsmvUrl: 'https://www.flhsmv.gov/',
  floridaStatutesUrl: 'https://www.leg.state.fl.us/statutes/',
  disclaimer:
    'DriveReady Florida is an independent study tool. It is not affiliated with, endorsed by, or connected to the Florida Department of Highway Safety and Motor Vehicles (FLHSMV).',

  // Datos del Florida Class E Knowledge Exam.
  examTotalQuestions: 50,
  examPassingCorrect: 40,
  examPassingPercentage: 80,
  examQuestionBankMinimum: 50,

  // Configuración de práctica (valores de la aplicación, no oficiales).
  practiceSizes: [5, 10, 20],
  practiceCustomMin: 3,
  practiceCustomMax: 40,

  // Temporizador opcional de práctica.
  practiceTimerDefaultMinutes: 60,

  storageSchemaVersion: 1,
  storagePrefix: 'driveready',

  // Objetivo de estudio recomendado por la aplicación (no exigido por Florida).
  recommendedStudyAccuracy: 80,
  recommendedLessonsCompleted: 10,

  contactPlaceholder: ''
};

export default appConfig;
