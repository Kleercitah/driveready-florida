import { pickLocalized } from '../i18n/index.js';

/**
 * Fuente única de verdad para las categorías (módulos) de DriveReady.
 * Los ids se usan en lecciones, preguntas, señales y estadísticas.
 */
export const categories = [
  {
    id: 'road-signs',
    order: 1,
    number: '01',
    title: { en: 'Road Signs', es: 'Señales de tránsito' },
    description: {
      en: 'Regulatory, warning, guide and work-zone signs you will meet on Florida roads.',
      es: 'Señales reglamentarias, preventivas, informativas y de obras que verás en Florida.'
    }
  },
  {
    id: 'signals-markings',
    order: 2,
    number: '02',
    title: { en: 'Traffic Signals & Road Markings', es: 'Semáforos y marcas viales' },
    description: {
      en: 'Traffic lights, pavement markings and what each color and line tells you to do.',
      es: 'Semáforos, marcas en el pavimento y lo que cada color y línea te indica.'
    }
  },
  {
    id: 'right-of-way',
    order: 3,
    number: '03',
    title: { en: 'Right of Way', es: 'Prioridad de paso' },
    description: {
      en: 'Intersections, four-way stops, pedestrians and who goes first.',
      es: 'Intersecciones, altos de cuatro vías, peatones y quién pasa primero.'
    }
  },
  {
    id: 'speed-distance',
    order: 4,
    number: '04',
    title: { en: 'Speed & Following Distance', es: 'Velocidad y distancia' },
    description: {
      en: 'Speed limits, safe following distance and adjusting to conditions.',
      es: 'Límites de velocidad, distancia segura y adaptación a las condiciones.'
    }
  },
  {
    id: 'turning-lanes-parking',
    order: 5,
    number: '05',
    title: { en: 'Turning, Lanes & Parking', es: 'Giros, carriles y estacionamiento' },
    description: {
      en: 'Turn signals, lane changes, U-turns, parking rules and curbs.',
      es: 'Direccionales, cambios de carril, giros en U, reglas de estacionamiento.'
    }
  },
  {
    id: 'defensive-driving',
    order: 6,
    number: '06',
    title: { en: 'Defensive Driving & Safety', es: 'Conducción defensiva y seguridad' },
    description: {
      en: 'Scanning, space cushions, seat belts, distractions and sharing the road.',
      es: 'Observación, espacio de seguridad, cinturones, distracciones y convivencia vial.'
    }
  },
  {
    id: 'alcohol-drugs',
    order: 7,
    number: '07',
    title: { en: 'Alcohol, Drugs & Impairment', es: 'Alcohol, drogas e impedimento' },
    description: {
      en: 'DUI limits, impairment effects and Florida consequences.',
      es: 'Límites de DUI, efectos del impedimento y consecuencias en Florida.'
    }
  },
  {
    id: 'emergencies',
    order: 8,
    number: '08',
    title: { en: 'Emergencies & Special Situations', es: 'Emergencias y situaciones especiales' },
    description: {
      en: 'Brake failure, blowouts, skids, railroad crossings and weather.',
      es: 'Fallo de frenos, reventones, derrapes, cruces de tren y clima.'
    }
  },
  {
    id: 'highways-passing',
    order: 9,
    number: '09',
    title: { en: 'Highways & Passing', es: 'Autopistas y adelantamiento' },
    description: {
      en: 'Entering highways, passing rules, and interstate driving.',
      es: 'Incorporación a autopistas, reglas de adelantamiento y manejo en interestatales.'
    }
  },
  {
    id: 'florida-laws',
    order: 10,
    number: '10',
    title: { en: 'Florida Driving Laws', es: 'Leyes de tránsito de Florida' },
    description: {
      en: 'Florida-specific rules: Move Over, license classes, insurance and point system.',
      es: 'Reglas propias de Florida: Move Over, clases de licencia, seguro y sistema de puntos.'
    }
  }
];

export const categoryIds = categories.map((c) => c.id);

export const difficultyLevels = ['beginner', 'intermediate', 'advanced'];

export function getCategory(id) {
  return categories.find((c) => c.id === id) ?? null;
}

export function getCategoryTitle(id, language = 'en') {
  const category = getCategory(id);
  if (!category) return id;
  return pickLocalized(category.title, language);
}

/** Descripción localizada de una categoría (con regreso al inglés). */
export function getCategoryDescription(id, language = 'en') {
  const category = getCategory(id);
  if (!category) return '';
  return pickLocalized(category.description, language);
}

export default categories;
