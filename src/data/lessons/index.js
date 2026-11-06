import { lesson as roadSigns } from './road-signs.js';
import { lesson as signalsMarkings } from './signals-markings.js';
import { lesson as rightOfWay } from './right-of-way.js';
import { lesson as speedDistance } from './speed-distance.js';
import { lesson as turningLanesParking } from './turning-lanes-parking.js';
import { lesson as defensiveDriving } from './defensive-driving.js';
import { lesson as alcoholDrugs } from './alcohol-drugs.js';
import { lesson as emergencies } from './emergencies.js';
import { lesson as highwaysPassing } from './highways-passing.js';
import { lesson as floridaLaws } from './florida-laws.js';

/** Todas las lecciones ordenadas por su campo `order`. */
export const lessons = [
  roadSigns,
  signalsMarkings,
  rightOfWay,
  speedDistance,
  turningLanesParking,
  defensiveDriving,
  alcoholDrugs,
  emergencies,
  highwaysPassing,
  floridaLaws
].sort((a, b) => a.order - b.order);

export function getLesson(id) {
  return lessons.find((lesson) => lesson.id === id) ?? null;
}

export function getLessonsByCategory(categoryId) {
  return lessons.filter((lesson) => lesson.categoryId === categoryId);
}

export default lessons;
