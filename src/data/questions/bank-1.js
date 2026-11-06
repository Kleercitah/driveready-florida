/**
 * Banco de preguntas — Bloque 1.
 * Categorías: road-signs, signals-markings, right-of-way, speed-distance, turning-lanes-parking.
 * Contenido original redactado para estudiar. No reproduce preguntas oficiales.
 */

const handbook = 'https://www.flhsmv.gov/pdf/handbooks/englishdriverhandbook.pdf';
const statutes = 'https://www.leg.state.fl.us/statutes/';

export const questions = [
  // ---------------------------------------------------------------- road-signs
  {
    id: 'rs-001',
    category: 'road-signs',
    difficulty: 'beginner',
    question: 'What must you do when you see a red octagonal sign?',
    options: [
      'Slow down and continue if the way is clear',
      'Come to a complete stop',
      'Yield only to traffic on your left',
      'Increase speed to clear the intersection'
    ],
    correctAnswerIndex: 1,
    explanation: {
      en: 'A red octagon is the standard shape used only for STOP signs. You must bring the vehicle to a complete stop, then proceed only when it is safe and you have the right of way.',
      es: 'El octágono rojo es la forma estándar que se usa únicamente para las señales de STOP (PARE). Debes detener el vehículo por completo y avanzar solo cuando sea seguro y tengas la prioridad.'
    },
    source: { url: handbook, section: 'Traffic Signs', edition: 'FLHSMV' },
    reviewStatus: 'verified',
    tags: ['signs', 'regulatory', 'stop'],
    image: null,
    learningObjective: 'Recognize the STOP sign shape and the required action.',
    relatedLessonId: 'road-signs'
  },
  {
    id: 'rs-002',
    category: 'road-signs',
    difficulty: 'beginner',
    question: 'An inverted triangle sign requires you to do which of the following?',
    options: [
      'Stop completely before proceeding',
      'Yield to traffic and pedestrians',
      'Reduce speed through a work zone',
      'Merge with traffic from the left'
    ],
    correctAnswerIndex: 1,
    explanation: {
      en: 'The inverted triangle is the standard shape for a YIELD sign. You must slow down and let other traffic and pedestrians go first, stopping if necessary.',
      es: 'El triángulo invertido es la forma estándar de la señal de CEDA EL PASO (YIELD). Debes reducir la velocidad y dejar pasar primero al tráfico y a los peatones, deteniéndote si es necesario.'
    },
    source: { url: handbook, section: 'Traffic Signs', edition: 'FLHSMV' },
    reviewStatus: 'verified',
    tags: ['signs', 'regulatory', 'yield'],
    image: null,
    learningObjective: 'Identify the YIELD sign and its meaning.',
    relatedLessonId: 'road-signs'
  },
  {
    id: 'rs-003',
    category: 'road-signs',
    difficulty: 'beginner',
    question: 'A yellow diamond-shaped sign is generally used to:',
    options: [
      'Give regulations that drivers must obey',
      'Warn of a hazard or changing road condition',
      'Provide directions to nearby services',
      'Mark a construction zone'
    ],
    correctAnswerIndex: 1,
    explanation: {
      en: 'Warning signs are usually yellow diamonds. They alert you to hazards or changing conditions ahead, such as curves, intersections, or lane changes.',
      es: 'Las señales preventivas suelen ser rombos amarillos. Advierten sobre peligros o cambios en la vía, como curvas, intersecciones o cambios de carril.'
    },
    source: { url: handbook, section: 'Traffic Signs', edition: 'FLHSMV' },
    reviewStatus: 'verified',
    tags: ['signs', 'warning'],
    image: null,
    learningObjective: 'Recognize warning signs by shape and color.',
    relatedLessonId: 'road-signs'
  },
  {
    id: 'rs-004',
    category: 'road-signs',
    difficulty: 'beginner',
    question: 'Orange signs and orange pavement markings warn drivers about:',
    options: [
      'School zones',
      'Work zones and construction',
      'Railroad crossings',
      'Rest areas'
    ],
    correctAnswerIndex: 1,
    explanation: {
      en: 'Orange is used for construction and maintenance areas. These signs and markings warn you of workers, equipment, or temporary road changes.',
      es: 'El naranja se usa en zonas de obras y mantenimiento. Estas señales y marcas te advierten de trabajadores, equipos o cambios temporales en la vía.'
    },
    source: { url: handbook, section: 'Traffic Signs', edition: 'FLHSMV' },
    reviewStatus: 'verified',
    tags: ['signs', 'work-zone'],
    image: null,
    learningObjective: 'Associate orange signs with work zones.',
    relatedLessonId: 'road-signs'
  },
  {
    id: 'rs-005',
    category: 'road-signs',
    difficulty: 'beginner',
    question: 'Green highway signs generally provide:',
    options: [
      'Warnings about hazards',
      'Regulatory orders that must be obeyed',
      'Guidance such as destinations and distances',
      'Construction information'
    ],
    correctAnswerIndex: 2,
    explanation: {
      en: 'Green signs are guide signs. They give information such as destinations, exits, and distances to help you navigate.',
      es: 'Las señales verdes son informativas. Proporcionan datos como destinos, salidas y distancias para ayudarte a navegar.'
    },
    source: { url: handbook, section: 'Traffic Signs', edition: 'FLHSMV' },
    reviewStatus: 'verified',
    tags: ['signs', 'guide'],
    image: null,
    learningObjective: 'Identify the purpose of green guide signs.',
    relatedLessonId: 'road-signs'
  },
  {
    id: 'rs-006',
    category: 'road-signs',
    difficulty: 'intermediate',
    question: 'A red circle with a diagonal slash drawn through a symbol generally indicates:',
    options: [
      'That the action is permitted',
      'That the action is prohibited',
      'A warning about the action',
      'A suggested, optional action'
    ],
    correctAnswerIndex: 1,
    explanation: {
      en: 'A red circle with a diagonal slash is a regulatory symbol meaning the pictured action is not allowed. For example, it may prohibit a turn or a U-turn.',
      es: 'Un círculo rojo con una barra diagonal es un símbolo reglamentario que significa que la acción mostrada no está permitida. Por ejemplo, puede prohibir un giro o un giro en U.'
    },
    source: { url: handbook, section: 'Traffic Signs', edition: 'FLHSMV' },
    reviewStatus: 'verified',
    tags: ['signs', 'regulatory'],
    image: null,
    learningObjective: 'Interpret the prohibited-action symbol on regulatory signs.',
    relatedLessonId: 'road-signs'
  },
  {
    id: 'rs-007',
    category: 'road-signs',
    difficulty: 'intermediate',
    question: 'Which fluorescent color is used on incident management signs related to emergencies?',
    options: [
      'Fluorescent pink',
      'Orange',
      'Green',
      'Blue'
    ],
    correctAnswerIndex: 0,
    explanation: {
      en: 'Fluorescent pink or fluorescent yellow-green is used for incident management signs. These direct drivers around or away from emergency situations.',
      es: 'El rosa fluorescente o el amarillo-verde fluorescente se usa en señales de gestión de incidentes. Estas orientan a los conductores alrededor de emergencias o para alejarlos de ellas.'
    },
    source: { url: handbook, section: 'Traffic Signs', edition: 'FLHSMV' },
    reviewStatus: 'verified',
    tags: ['signs', 'incident-management'],
    image: null,
    learningObjective: 'Recognize the color used for incident management signs.',
    relatedLessonId: 'road-signs'
  },
  {
    id: 'rs-008',
    category: 'road-signs',
    difficulty: 'beginner',
    question: 'Blue signs along the highway usually indicate:',
    options: [
      'Motorist services such as fuel, food and lodging',
      'Regulatory speed limits',
      'Warnings about curves',
      'Work zones ahead'
    ],
    correctAnswerIndex: 0,
    explanation: {
      en: 'Blue signs point to motorist services, such as gas, food, lodging, and hospitals. They help you find services near the highway.',
      es: 'Las señales azules indican servicios al conductor, como gasolina, comida, alojamiento y hospitales. Te ayudan a encontrar servicios cercanos a la autopista.'
    },
    source: { url: handbook, section: 'Traffic Signs', edition: 'FLHSMV' },
    reviewStatus: 'verified',
    tags: ['signs', 'services'],
    image: null,
    learningObjective: 'Identify blue signs as motorist service information.',
    relatedLessonId: 'road-signs'
  },
  {
    id: 'rs-009',
    category: 'road-signs',
    difficulty: 'beginner',
    question: 'A speed limit sign is an example of which type of sign?',
    options: [
      'Warning sign',
      'Regulatory sign',
      'Guide sign',
      'Construction sign'
    ],
    correctAnswerIndex: 1,
    explanation: {
      en: 'Speed limit signs are regulatory signs. They state a legal rule that drivers must obey.',
      es: 'Las señales de límite de velocidad son reglamentarias. Establecen una norma legal que los conductores deben obedecer.'
    },
    source: { url: handbook, section: 'Traffic Signs', edition: 'FLHSMV' },
    reviewStatus: 'verified',
    tags: ['signs', 'regulatory', 'speed'],
    image: null,
    learningObjective: 'Classify speed limit signs as regulatory.',
    relatedLessonId: 'road-signs'
  },
  {
    id: 'rs-010',
    category: 'road-signs',
    difficulty: 'intermediate',
    question: 'At a railroad crossing, what does the crossbuck sign tell you?',
    options: [
      'You must yield to any approaching train',
      'You must stop completely every time',
      'You should sound your horn before crossing',
      'You should speed up to cross quickly'
    ],
    correctAnswerIndex: 0,
    explanation: {
      en: 'The crossbuck marks a railroad crossing and means you must yield to trains. Stop if a train is approaching, and cross only when it is clearly safe.',
      es: 'El cruce en aspa (crossbuck) marca un cruce de ferrocarril y significa que debes ceder el paso a los trenes. Deténte si se acerca un tren y cruza solo cuando sea claramente seguro.'
    },
    source: { url: handbook, section: 'Traffic Signs', edition: 'FLHSMV' },
    reviewStatus: 'verified',
    tags: ['signs', 'railroad'],
    image: null,
    learningObjective: 'Understand the meaning of a railroad crossbuck sign.',
    relatedLessonId: 'road-signs'
  },
  {
    id: 'rs-011',
    category: 'road-signs',
    difficulty: 'beginner',
    question: 'What does a YIELD sign require you to do?',
    options: [
      'Stop for at least three seconds every time',
      'Slow down and yield to traffic and pedestrians, stopping if necessary',
      'Merge without reducing your speed',
      'Yield only to vehicles on your right'
    ],
    correctAnswerIndex: 1,
    explanation: {
      en: 'A YIELD sign means you must slow down and let crossing traffic and pedestrians go first. Stop if needed before you enter or cross the road.',
      es: 'La señal de CEDA EL PASO significa que debes reducir la velocidad y dejar pasar primero al tráfico transversal y a los peatones. Deténte si es necesario antes de entrar o cruzar.'
    },
    source: { url: handbook, section: 'Traffic Signs', edition: 'FLHSMV' },
    reviewStatus: 'verified',
    tags: ['signs', 'regulatory', 'yield'],
    image: null,
    learningObjective: 'Apply the correct action at a YIELD sign.',
    relatedLessonId: 'road-signs'
  },
  {
    id: 'rs-012',
    category: 'road-signs',
    difficulty: 'intermediate',
    question: 'A five-sided (pentagon-shaped) sign typically marks:',
    options: [
      'A school zone or school crossing',
      'A hospital entrance',
      'A railroad crossing',
      'A rest area'
    ],
    correctAnswerIndex: 0,
    explanation: {
      en: 'A five-sided sign marks a school zone or school crossing. It warns you to watch for children and reduce speed when indicated.',
      es: 'Una señal de cinco lados marca una zona o cruce escolar. Te advierte que vigiles a los niños y reduzcas la velocidad cuando se indique.'
    },
    source: { url: handbook, section: 'Traffic Signs', edition: 'FLHSMV' },
    reviewStatus: 'verified',
    tags: ['signs', 'school'],
    image: null,
    learningObjective: 'Identify five-sided signs as school zone markings.',
    relatedLessonId: 'road-signs'
  },
  {
    id: 'rs-013',
    category: 'road-signs',
    difficulty: 'beginner',
    question: 'Warning signs are generally which shape and color?',
    options: [
      'Round and red',
      'Yellow diamond',
      'Green rectangle',
      'Blue circle'
    ],
    correctAnswerIndex: 1,
    explanation: {
      en: 'Most warning signs are yellow diamonds. The color and shape help you quickly recognize that a warning, not a rule, is ahead.',
      es: 'La mayoría de las señales preventivas son rombos amarillos. El color y la forma te ayudan a reconocer rápidamente que se aproxima una advertencia, no una regla.'
    },
    source: { url: handbook, section: 'Traffic Signs', edition: 'FLHSMV' },
    reviewStatus: 'verified',
    tags: ['signs', 'warning'],
    image: null,
    learningObjective: 'Recall the standard shape and color of warning signs.',
    relatedLessonId: 'road-signs'
  },
  {
    id: 'rs-014',
    category: 'road-signs',
    difficulty: 'intermediate',
    question: 'A "Do Not Enter" sign looks like:',
    options: [
      'A red circle with a white horizontal bar',
      'A yellow triangle',
      'A green square',
      'A blue rectangle'
    ],
    correctAnswerIndex: 0,
    explanation: {
      en: 'A "Do Not Enter" sign is a red square with a white horizontal bar. It warns that you must not enter that road or lane.',
      es: 'La señal de "NO ENTRE" es un cuadrado rojo con una barra horizontal blanca. Advierte que no debes entrar a esa vía o carril.'
    },
    source: { url: handbook, section: 'Traffic Signs', edition: 'FLHSMV' },
    reviewStatus: 'verified',
    tags: ['signs', 'regulatory'],
    image: null,
    learningObjective: 'Recognize the Do Not Enter sign design.',
    relatedLessonId: 'road-signs'
  },
  {
    id: 'rs-015',
    category: 'road-signs',
    difficulty: 'beginner',
    question: 'Which type of sign gives orders that must be obeyed, such as speed limits or turn restrictions?',
    options: [
      'Regulatory signs',
      'Warning signs',
      'Guide signs',
      'Service signs'
    ],
    correctAnswerIndex: 0,
    explanation: {
      en: 'Regulatory signs give orders you must obey. Examples include speed limits, stop and yield rules, and turn or parking restrictions.',
      es: 'Las señales reglamentarias dan órdenes que debes obedecer. Ejemplos son los límites de velocidad, las reglas de alto y ceda el paso, y las restricciones de giro o estacionamiento.'
    },
    source: { url: handbook, section: 'Traffic Signs', edition: 'FLHSMV' },
    reviewStatus: 'verified',
    tags: ['signs', 'regulatory'],
    image: null,
    learningObjective: 'Distinguish regulatory signs from other sign types.',
    relatedLessonId: 'road-signs'
  },

  // ---------------------------------------------------------- signals-markings
  {
    id: 'sm-001',
    category: 'signals-markings',
    difficulty: 'beginner',
    question: 'When a traffic light shows a steady red, you must:',
    options: [
      'Stop completely and remain stopped until the light changes, unless a turn on red is allowed',
      'Slow down and proceed carefully',
      'Stop only if pedestrians are present',
      'Continue through if the intersection looks clear'
    ],
    correctAnswerIndex: 0,
    explanation: {
      en: 'A steady red means stop and stay stopped until the signal changes. You may turn on red only if it is allowed and you have first made a complete stop.',
      es: 'La luz roja fija significa detenerse y permanecer detenido hasta que cambie la señal. Puedes girar en rojo solo si está permitido y después de hacer un alto total.'
    },
    source: { url: handbook, section: 'Traffic Signals', edition: 'FLHSMV' },
    reviewStatus: 'verified',
    tags: ['signals', 'red-light'],
    image: null,
    learningObjective: 'Apply the correct action at a steady red light.',
    relatedLessonId: 'signals-markings'
  },
  {
    id: 'sm-002',
    category: 'signals-markings',
    difficulty: 'beginner',
    question: 'After a complete stop at a steady red light, a right turn is generally allowed unless:',
    options: [
      'There is no crosswalk',
      'A sign prohibits the turn',
      'Other traffic is moving',
      'You used your turn signal'
    ],
    correctAnswerIndex: 1,
    explanation: {
      en: 'A right turn on red is usually allowed after a complete stop, unless a sign says it is prohibited. You must still yield to pedestrians and traffic.',
      es: 'Girar a la derecha en rojo suele permitirse tras un alto total, salvo que una señal lo prohíba. Aun así debes ceder el paso a peatones y tráfico.'
    },
    source: { url: handbook, section: 'Traffic Signals', edition: 'FLHSMV' },
    reviewStatus: 'verified',
    tags: ['signals', 'right-turn', 'red-light'],
    image: null,
    learningObjective: 'Know the conditions for a right turn on red.',
    relatedLessonId: 'signals-markings'
  },
  {
    id: 'sm-003',
    category: 'signals-markings',
    difficulty: 'intermediate',
    question: 'Turning left after a complete stop on a red light is allowed when:',
    options: [
      'You are on a one-way street turning onto another one-way street and it is not prohibited',
      'You are on a two-way street turning onto a two-way street',
      'The light has been red for more than 30 seconds',
      'There is no other traffic nearby'
    ],
    correctAnswerIndex: 0,
    explanation: {
      en: 'A left turn on red is allowed only when both streets are one-way and no sign prohibits it. You must stop completely first and yield to others.',
      es: 'El giro a la izquierda en rojo solo se permite cuando ambas calles son de sentido único y ninguna señal lo prohíbe. Primero debes detenerte por completo y ceder el paso.'
    },
    source: { url: handbook, section: 'Traffic Signals', edition: 'FLHSMV' },
    reviewStatus: 'verified',
    tags: ['signals', 'left-turn', 'red-light'],
    image: null,
    learningObjective: 'Know the one-way to one-way left turn on red rule.',
    relatedLessonId: 'signals-markings'
  },
  {
    id: 'sm-004',
    category: 'signals-markings',
    difficulty: 'beginner',
    question: 'A flashing red traffic signal means:',
    options: [
      'Come to a complete stop and proceed when safe, like a stop sign',
      'Slow down and yield without stopping',
      'Proceed with caution without stopping',
      'The signal is broken and you should turn around'
    ],
    correctAnswerIndex: 0,
    explanation: {
      en: 'A flashing red signal is treated like a stop sign. Stop completely, then proceed when it is safe and you have the right of way.',
      es: 'Una luz roja intermitente se trata como una señal de alto. Deténte por completo y avanza cuando sea seguro y tengas la prioridad.'
    },
    source: { url: handbook, section: 'Traffic Signals', edition: 'FLHSMV' },
    reviewStatus: 'verified',
    tags: ['signals', 'flashing', 'stop'],
    image: null,
    learningObjective: 'Treat a flashing red signal as a stop.',
    relatedLessonId: 'signals-markings'
  },
  {
    id: 'sm-005',
    category: 'signals-markings',
    difficulty: 'intermediate',
    question: 'A flashing yellow traffic signal means:',
    options: [
      'Stop completely before entering the intersection',
      'Slow down and proceed with caution',
      'The speed limit increases ahead',
      'Prepare to turn only'
    ],
    correctAnswerIndex: 1,
    explanation: {
      en: 'A flashing yellow signal means proceed with caution. Slow down and be alert for other traffic and pedestrians before entering.',
      es: 'Una luz amarilla intermitente significa avanzar con precaución. Reduce la velocidad y mantente atento al tráfico y a los peatones antes de entrar.'
    },
    source: { url: handbook, section: 'Traffic Signals', edition: 'FLHSMV' },
    reviewStatus: 'verified',
    tags: ['signals', 'flashing', 'caution'],
    image: null,
    learningObjective: 'Interpret a flashing yellow signal.',
    relatedLessonId: 'signals-markings'
  },
  {
    id: 'sm-006',
    category: 'signals-markings',
    difficulty: 'intermediate',
    question: 'If a traffic signal is not working (dark or broken), you should:',
    options: [
      'Treat the intersection as a four-way stop',
      'Proceed without stopping if you have the right of way',
      'Turn around and find another route',
      'Wait for the police before you can move'
    ],
    correctAnswerIndex: 0,
    explanation: {
      en: 'When a signal is out, treat the intersection as all-way stops. Stop, then take turns using the same rules as a four-way stop.',
      es: 'Cuando un semáforo no funciona, trata la intersección como un alto para todos los sentidos. Deténte y avanza por turnos usando las mismas reglas de un alto de cuatro vías.'
    },
    source: { url: handbook, section: 'Traffic Signals', edition: 'FLHSMV' },
    reviewStatus: 'verified',
    tags: ['signals', 'four-way-stop'],
    image: null,
    learningObjective: 'Respond correctly to a non-working traffic signal.',
    relatedLessonId: 'signals-markings'
  },
  {
    id: 'sm-007',
    category: 'signals-markings',
    difficulty: 'beginner',
    question: 'A steady yellow light means:',
    options: [
      'Speed up to beat the red',
      'The light is about to turn red, so stop if you can do so safely',
      'Stop only if you are turning left',
      'The intersection is closed'
    ],
    correctAnswerIndex: 1,
    explanation: {
      en: 'A steady yellow light warns that the signal is changing to red. Stop if you can do so safely; do not speed up to try to beat the light.',
      es: 'La luz amarilla fija advierte que el semáforo cambiará a rojo. Deténte si puedes hacerlo con seguridad; no aceleres para intentar ganarle a la luz.'
    },
    source: { url: handbook, section: 'Traffic Signals', edition: 'FLHSMV' },
    reviewStatus: 'verified',
    tags: ['signals', 'yellow-light'],
    image: null,
    learningObjective: 'Know the correct response to a steady yellow light.',
    relatedLessonId: 'signals-markings'
  },
  {
    id: 'sm-008',
    category: 'signals-markings',
    difficulty: 'intermediate',
    question: 'A green arrow signal means:',
    options: [
      'You may proceed in the direction of the arrow after yielding to oncoming traffic',
      'You have a protected movement in the direction of the arrow',
      'You must stop before turning',
      'The signal is about to change to red'
    ],
    correctAnswerIndex: 1,
    explanation: {
      en: 'A green arrow gives you a protected movement. When the arrow is displayed, oncoming traffic is stopped, so you may proceed in that direction.',
      es: 'Una flecha verde te da un movimiento protegido. Cuando se muestra la flecha, el tráfico que viene de frente está detenido, por lo que puedes avanzar en esa dirección.'
    },
    source: { url: handbook, section: 'Traffic Signals', edition: 'FLHSMV' },
    reviewStatus: 'verified',
    tags: ['signals', 'green-arrow'],
    image: null,
    learningObjective: 'Interpret a green arrow signal correctly.',
    relatedLessonId: 'signals-markings'
  },
  {
    id: 'sm-009',
    category: 'signals-markings',
    difficulty: 'beginner',
    question: 'Two solid yellow lines in the center of the road mean:',
    options: [
      'Passing is permitted in both directions',
      'Passing is prohibited in both directions',
      'The closest lane is for turning only',
      'You must merge to the left'
    ],
    correctAnswerIndex: 1,
    explanation: {
      en: 'Double solid yellow lines mean passing is not allowed in either direction. You may still cross them to turn into a driveway or side road when it is safe.',
      es: 'Las líneas amarillas dobles continuas significan que no se permite adelantar en ninguna dirección. Aun puedes cruzarlas para girar hacia una entrada o vía lateral cuando sea seguro.'
    },
    source: { url: handbook, section: 'Pavement Markings', edition: 'FLHSMV' },
    reviewStatus: 'verified',
    tags: ['markings', 'no-passing'],
    image: null,
    learningObjective: 'Read double solid yellow lines correctly.',
    relatedLessonId: 'signals-markings'
  },
  {
    id: 'sm-010',
    category: 'signals-markings',
    difficulty: 'intermediate',
    question: 'A single broken yellow line in the center of the road means:',
    options: [
      'You may pass when it is safe and legal',
      'You must never pass the vehicle ahead',
      'You may only make a left turn',
      'The road is one-way'
    ],
    correctAnswerIndex: 0,
    explanation: {
      en: 'A broken yellow line means passing is allowed on your side when it is safe. Be sure there is enough clear distance before passing.',
      es: 'Una línea amarilla discontinua significa que se permite adelantar de tu lado cuando sea seguro. Asegúrate de tener distancia libre suficiente antes de adelantar.'
    },
    source: { url: handbook, section: 'Pavement Markings', edition: 'FLHSMV' },
    reviewStatus: 'verified',
    tags: ['markings', 'passing'],
    image: null,
    learningObjective: 'Recognize a passing zone marked by a broken yellow line.',
    relatedLessonId: 'signals-markings'
  },
  {
    id: 'sm-011',
    category: 'signals-markings',
    difficulty: 'beginner',
    question: 'Broken white lane lines mean:',
    options: [
      'You may change lanes when it is safe',
      'You must stay in your lane at all times',
      'The lane is about to end',
      'You may park there'
    ],
    correctAnswerIndex: 0,
    explanation: {
      en: 'Broken white lines separate lanes going the same direction. You may change lanes when it is safe, after signaling and checking your blind spot.',
      es: 'Las líneas blancas discontinuas separan carriles que van en la misma dirección. Puedes cambiar de carril cuando sea seguro, después de señalizar y revisar el punto ciego.'
    },
    source: { url: handbook, section: 'Pavement Markings', edition: 'FLHSMV' },
    reviewStatus: 'verified',
    tags: ['markings', 'lane-change'],
    image: null,
    learningObjective: 'Interpret broken white lane lines.',
    relatedLessonId: 'signals-markings'
  },
  {
    id: 'sm-012',
    category: 'signals-markings',
    difficulty: 'intermediate',
    question: 'A solid white line between lanes of traffic is used to:',
    options: [
      'Encourage drivers not to cross, discouraging lane changes',
      'Show where passing is allowed',
      'Divide traffic moving in opposite directions',
      'Mark a fire lane'
    ],
    correctAnswerIndex: 0,
    explanation: {
      en: 'A solid white line separates lanes going the same direction and discourages crossing. Lane changes across it are discouraged, though legal in some ordinary situations.',
      es: 'Una línea blanca continua separa carriles de la misma dirección y desaconseja cruzarla. Los cambios de carril sobre ella no se recomiendan, aunque pueden ser legales en algunas situaciones comunes.'
    },
    source: { url: handbook, section: 'Pavement Markings', edition: 'FLHSMV' },
    reviewStatus: 'needs-review',
    tags: ['markings', 'lane-change'],
    image: null,
    learningObjective: 'Understand the meaning of a solid white lane line.',
    relatedLessonId: 'signals-markings'
  },
  {
    id: 'sm-013',
    category: 'signals-markings',
    difficulty: 'intermediate',
    question: 'Yellow lines on the roadway generally separate:',
    options: [
      'Traffic moving in the same direction',
      'Traffic moving in opposite directions',
      'Parking areas from travel lanes',
      'Bicycle lanes from car lanes'
    ],
    correctAnswerIndex: 1,
    explanation: {
      en: 'Yellow lines separate traffic moving in opposite directions. White lines separate traffic moving in the same direction.',
      es: 'Las líneas amarillas separan el tráfico que va en direcciones opuestas. Las líneas blancas separan el tráfico que va en la misma dirección.'
    },
    source: { url: handbook, section: 'Pavement Markings', edition: 'FLHSMV' },
    reviewStatus: 'verified',
    tags: ['markings', 'center-line'],
    image: null,
    learningObjective: 'Know that yellow lines divide opposite directions.',
    relatedLessonId: 'signals-markings'
  },
  {
    id: 'sm-014',
    category: 'signals-markings',
    difficulty: 'intermediate',
    question: 'White lines on the roadway generally separate:',
    options: [
      'Traffic moving in opposite directions',
      'Traffic moving in the same direction',
      'Crosswalks from parking areas',
      'Two-way roads only'
    ],
    correctAnswerIndex: 1,
    explanation: {
      en: 'White lines separate lanes of traffic going in the same direction. They also mark road edges and crosswalks.',
      es: 'Las líneas blancas separan carriles que van en la misma dirección. También marcan los bordes de la vía y los cruces peatonales.'
    },
    source: { url: handbook, section: 'Pavement Markings', edition: 'FLHSMV' },
    reviewStatus: 'verified',
    tags: ['markings', 'lane-lines'],
    image: null,
    learningObjective: 'Know that white lines divide same-direction traffic.',
    relatedLessonId: 'signals-markings'
  },
  {
    id: 'sm-015',
    category: 'signals-markings',
    difficulty: 'advanced',
    question: 'A solid yellow line on your side of the center line means:',
    options: [
      'You may pass if you speed up',
      'Passing is not allowed on your side, though you may cross it to turn left into a driveway',
      'You must drive on the shoulder',
      'You may park along the line'
    ],
    correctAnswerIndex: 1,
    explanation: {
      en: 'A solid yellow line on your side means passing is not allowed from your side of the road. You may still cross it to make a left turn into a driveway or side road.',
      es: 'Una línea amarilla continua de tu lado significa que no se permite adelantar desde tu lado de la vía. Aun puedes cruzarla para girar a la izquierda hacia una entrada o vía lateral.'
    },
    source: { url: handbook, section: 'Pavement Markings', edition: 'FLHSMV' },
    reviewStatus: 'verified',
    tags: ['markings', 'no-passing', 'turn'],
    image: null,
    learningObjective: 'Interpret a solid yellow line on your side of the center line.',
    relatedLessonId: 'signals-markings'
  },

  // ------------------------------------------------------------- right-of-way
  {
    id: 'rw-001',
    category: 'right-of-way',
    difficulty: 'beginner',
    question: 'At an intersection with no signs or signals, who has the right of way?',
    options: [
      'The vehicle on the left',
      'The vehicle on the right',
      'The faster vehicle',
      'The larger vehicle'
    ],
    correctAnswerIndex: 1,
    explanation: {
      en: 'At an uncontrolled intersection, the vehicle on the right has the right of way. Slow down and be ready to stop if the other driver does not yield.',
      es: 'En una intersección sin control, el vehículo de la derecha tiene la prioridad. Reduce la velocidad y prepárate para detenerte si el otro conductor no cede el paso.'
    },
    source: { url: handbook, section: 'Right-of-Way', edition: 'FLHSMV' },
    reviewStatus: 'verified',
    tags: ['right-of-way', 'intersection'],
    image: null,
    learningObjective: 'Apply the vehicle-on-the-right rule at uncontrolled intersections.',
    relatedLessonId: 'right-of-way'
  },
  {
    id: 'rw-002',
    category: 'right-of-way',
    difficulty: 'beginner',
    question: 'At a four-way stop, when two vehicles arrive at the same time, who goes first?',
    options: [
      'The vehicle on the right',
      'The vehicle on the left',
      'The vehicle that honks first',
      'The vehicle that is turning left'
    ],
    correctAnswerIndex: 0,
    explanation: {
      en: 'When two vehicles reach a four-way stop at the same time, the driver on the left yields to the driver on the right. The vehicle on the right goes first.',
      es: 'Cuando dos vehículos llegan a un alto de cuatro vías al mismo tiempo, el conductor de la izquierda cede el paso al de la derecha. El vehículo de la derecha pasa primero.'
    },
    source: { url: handbook, section: 'Right-of-Way', edition: 'FLHSMV' },
    reviewStatus: 'verified',
    tags: ['right-of-way', 'four-way-stop'],
    image: null,
    learningObjective: 'Use the right-of-way rule at four-way stops.',
    relatedLessonId: 'right-of-way'
  },
  {
    id: 'rw-003',
    category: 'right-of-way',
    difficulty: 'beginner',
    question: 'At a four-way stop, the first vehicle to stop:',
    options: [
      'Goes first',
      'Goes last',
      'Must wait for the largest vehicle',
      'Must always yield to the right'
    ],
    correctAnswerIndex: 0,
    explanation: {
      en: 'At a four-way stop, vehicles take turns in the order they stopped. The first driver to stop is the first to go.',
      es: 'En un alto de cuatro vías, los vehículos avanzan por turnos en el orden en que se detuvieron. El primer conductor en detenerse es el primero en pasar.'
    },
    source: { url: handbook, section: 'Right-of-Way', edition: 'FLHSMV' },
    reviewStatus: 'verified',
    tags: ['right-of-way', 'four-way-stop'],
    image: null,
    learningObjective: 'Know that the first vehicle to stop at a four-way stop goes first.',
    relatedLessonId: 'right-of-way'
  },
  {
    id: 'rw-004',
    category: 'right-of-way',
    difficulty: 'intermediate',
    question: 'When a pedestrian is crossing in a marked crosswalk, you must:',
    options: [
      'Stop and yield the right of way',
      'Sound your horn and continue',
      'Drive around the pedestrian',
      'Speed up to pass first'
    ],
    correctAnswerIndex: 0,
    explanation: {
      en: 'Drivers must stop and yield to pedestrians in a marked crosswalk. Do not pass other vehicles that have stopped for a pedestrian.',
      es: 'Los conductores deben detenerse y ceder el paso a los peatones en un cruce peatonal marcado. No rebases a otros vehículos que se detuvieron por un peatón.'
    },
    source: { url: handbook, section: 'Right-of-Way', edition: 'FLHSMV' },
    reviewStatus: 'verified',
    tags: ['right-of-way', 'pedestrians'],
    image: null,
    learningObjective: 'Yield to pedestrians in marked crosswalks.',
    relatedLessonId: 'right-of-way'
  },
  {
    id: 'rw-005',
    category: 'right-of-way',
    difficulty: 'intermediate',
    question: 'If a vehicle is still in the intersection when your light turns green, you should:',
    options: [
      'Go immediately and force them out',
      'Wait until the intersection clears before proceeding',
      'Honk until they move',
      'Turn right on red instead'
    ],
    correctAnswerIndex: 1,
    explanation: {
      en: 'Even with a green light, you must not enter an intersection you cannot clear. Wait for the vehicle ahead to move so you do not block traffic.',
      es: 'Aun con luz verde, no debes entrar a una intersección que no puedas despejar. Espera a que el vehículo de adelante avance para no bloquear el tráfico.'
    },
    source: { url: handbook, section: 'Right-of-Way', edition: 'FLHSMV' },
    reviewStatus: 'verified',
    tags: ['right-of-way', 'intersection'],
    image: null,
    learningObjective: 'Avoid blocking an intersection you cannot clear.',
    relatedLessonId: 'right-of-way'
  },
  {
    id: 'rw-006',
    category: 'right-of-way',
    difficulty: 'intermediate',
    question: 'When turning left on a green light, you must yield to:',
    options: [
      'Traffic behind you',
      'Oncoming traffic and pedestrians in the crosswalk',
      'No one, because you have the right of way',
      'Only large trucks'
    ],
    correctAnswerIndex: 1,
    explanation: {
      en: 'A green light does not give you the right of way for a left turn. You must yield to oncoming traffic and to pedestrians before you turn.',
      es: 'La luz verde no te da prioridad para girar a la izquierda. Debes ceder el paso al tráfico que viene de frente y a los peatones antes de girar.'
    },
    source: { url: handbook, section: 'Right-of-Way', edition: 'FLHSMV' },
    reviewStatus: 'verified',
    tags: ['right-of-way', 'left-turn'],
    image: null,
    learningObjective: 'Yield to oncoming traffic when turning left on green.',
    relatedLessonId: 'right-of-way'
  },
  {
    id: 'rw-007',
    category: 'right-of-way',
    difficulty: 'beginner',
    question: 'When an emergency vehicle with lights and siren approaches, you must:',
    options: [
      'Speed up to stay ahead of it',
      'Pull to the right side of the road and stop',
      'Stop in your current lane',
      'Continue at the same speed'
    ],
    correctAnswerIndex: 1,
    explanation: {
      en: 'When an emergency vehicle approaches with lights and siren, pull to the right edge of the road and stop. Do not block intersections.',
      es: 'Cuando se acerca un vehículo de emergencia con luces y sirena, oríllate a la derecha y detente. No bloquees las intersecciones.'
    },
    source: { url: handbook, section: 'Right-of-Way', edition: 'FLHSMV' },
    reviewStatus: 'verified',
    tags: ['right-of-way', 'emergency-vehicle'],
    image: null,
    learningObjective: 'Respond correctly to an approaching emergency vehicle.',
    relatedLessonId: 'right-of-way'
  },
  {
    id: 'rw-008',
    category: 'right-of-way',
    difficulty: 'intermediate',
    question: 'When a school bus stops with its red lights flashing, you must stop:',
    options: [
      'Only if you are directly behind it',
      'If you are traveling in either direction, unless the highway is divided by a physical median',
      'Never, if you are on the other side of the road',
      'Only during school hours'
    ],
    correctAnswerIndex: 1,
    explanation: {
      en: 'You must stop for a school bus with flashing red lights in both directions. The only exception is when the roadway is divided by a physical barrier such as a raised median.',
      es: 'Debes detenerte por un autobús escolar con luces rojas intermitentes en ambos sentidos. La única excepción es cuando la vía está dividida por una barrera física, como una mediana elevada.'
    },
    source: { url: handbook, section: 'Right-of-Way', edition: 'FLHSMV' },
    reviewStatus: 'verified',
    tags: ['right-of-way', 'school-bus'],
    image: null,
    learningObjective: 'Know the school bus stop rule and its exception.',
    relatedLessonId: 'right-of-way'
  },
  {
    id: 'rw-009',
    category: 'right-of-way',
    difficulty: 'intermediate',
    question: 'When entering a road from a driveway or alley, you must yield to:',
    options: [
      'Only vehicles on your left',
      'All traffic already on the road and pedestrians',
      'No one if you are turning right',
      'Only pedestrians'
    ],
    correctAnswerIndex: 1,
    explanation: {
      en: 'If you enter from a driveway, alley, or parking lot, you must yield to traffic already on the road and to pedestrians. Stop and look both directions first.',
      es: 'Si entras desde una entrada, un callejón o un estacionamiento, debes ceder el paso al tráfico que ya está en la vía y a los peatones. Deténte y mira en ambas direcciones primero.'
    },
    source: { url: handbook, section: 'Right-of-Way', edition: 'FLHSMV' },
    reviewStatus: 'verified',
    tags: ['right-of-way', 'driveway'],
    image: null,
    learningObjective: 'Yield when entering a road from a driveway or alley.',
    relatedLessonId: 'right-of-way'
  },
  {
    id: 'rw-010',
    category: 'right-of-way',
    difficulty: 'intermediate',
    question: 'When entering a roundabout, you must yield to:',
    options: [
      'Traffic entering from the left',
      'Traffic already in the roundabout',
      'Traffic on your right only',
      'No one, because entering traffic has priority'
    ],
    correctAnswerIndex: 1,
    explanation: {
      en: 'In a roundabout, traffic already circulating has the right of way. Yield to vehicles in the circle and enter only when there is a safe gap.',
      es: 'En una rotonda, el tráfico que ya circula tiene la prioridad. Cede el paso a los vehículos que están en el círculo y entra solo cuando haya un espacio seguro.'
    },
    source: { url: handbook, section: 'Right-of-Way', edition: 'FLHSMV' },
    reviewStatus: 'verified',
    tags: ['right-of-way', 'roundabout'],
    image: null,
    learningObjective: 'Yield to circulating traffic in a roundabout.',
    relatedLessonId: 'right-of-way'
  },
  {
    id: 'rw-011',
    category: 'right-of-way',
    difficulty: 'advanced',
    question: 'At a T-intersection, traffic on the road that ends must:',
    options: [
      'Yield to traffic on the through road',
      'Always go first',
      'Yield only if turning left',
      'Ignore all other traffic'
    ],
    correctAnswerIndex: 0,
    explanation: {
      en: 'At a T-intersection, the road that ends is the terminating road. Drivers there must yield to traffic on the continuous through road.',
      es: 'En una intersección en T, la vía que termina es la vía secundaria. Los conductores que están en ella deben ceder el paso al tráfico de la vía continua que pasa de largo.'
    },
    source: { url: handbook, section: 'Right-of-Way', edition: 'FLHSMV' },
    reviewStatus: 'verified',
    tags: ['right-of-way', 't-intersection'],
    image: null,
    learningObjective: 'Apply right of way at a T-intersection.',
    relatedLessonId: 'right-of-way'
  },
  {
    id: 'rw-012',
    category: 'right-of-way',
    difficulty: 'intermediate',
    question: 'Which of the following must you be prepared to yield to?',
    options: [
      'Only other cars',
      'Traffic already in the intersection, pedestrians, and vehicles on your right at an uncontrolled crossing',
      'Only pedestrians with a cane',
      'Only emergency vehicles'
    ],
    correctAnswerIndex: 1,
    explanation: {
      en: 'You must be ready to yield to traffic already in the intersection, to pedestrians, and to the vehicle on your right at an uncontrolled crossing. Yielding prevents disputes and crashes.',
      es: 'Debes estar listo para ceder el paso al tráfico que ya está en la intersección, a los peatones y al vehículo de tu derecha en un cruce sin control. Ceder evita conflictos y choques.'
    },
    source: { url: handbook, section: 'Right-of-Way', edition: 'FLHSMV' },
    reviewStatus: 'verified',
    tags: ['right-of-way', 'yield'],
    image: null,
    learningObjective: 'List the main situations that require yielding.',
    relatedLessonId: 'right-of-way'
  },
  {
    id: 'rw-013',
    category: 'right-of-way',
    difficulty: 'intermediate',
    question: 'A pedestrian using a white cane or guide dog:',
    options: [
      'Must yield to all vehicles',
      'Must be given the right of way at all times',
      'Has no special right of way',
      'May cross only in a marked crosswalk'
    ],
    correctAnswerIndex: 1,
    explanation: {
      en: 'Drivers must always yield to a pedestrian who is using a white cane or guide dog. Take extra care because the person may not see or hear your vehicle.',
      es: 'Los conductores deben ceder siempre el paso a un peatón que use bastón blanco o perro guía. Ten especial cuidado porque esa persona puede no ver ni oír tu vehículo.'
    },
    source: { url: statutes, section: 'Florida Statutes 316.1301', edition: 'FLHSMV' },
    reviewStatus: 'verified',
    tags: ['right-of-way', 'pedestrians', 'accessibility'],
    image: null,
    learningObjective: 'Yield to pedestrians with white canes or guide dogs.',
    relatedLessonId: 'right-of-way'
  },
  {
    id: 'rw-014',
    category: 'right-of-way',
    difficulty: 'intermediate',
    question: 'At a railroad crossing with a lowered gate, you should:',
    options: [
      'Go around the gate carefully',
      'Stop and wait until the gate rises and the lights stop flashing',
      'Drive over the gate if you can',
      'Continue if no train is visible'
    ],
    correctAnswerIndex: 1,
    explanation: {
      en: 'Never go around a lowered gate or flashing lights. Stop and wait until the gate rises and the signal stops before you cross.',
      es: 'Nunca rodees una barrera bajada ni luces intermitentes. Deténte y espera hasta que la barrera suba y la señal se apague antes de cruzar.'
    },
    source: { url: handbook, section: 'Right-of-Way', edition: 'FLHSMV' },
    reviewStatus: 'verified',
    tags: ['right-of-way', 'railroad'],
    image: null,
    learningObjective: 'Follow the correct procedure at a gated railroad crossing.',
    relatedLessonId: 'right-of-way'
  },
  {
    id: 'rw-015',
    category: 'right-of-way',
    difficulty: 'advanced',
    question: 'At an uncontrolled intersection, if you are turning left and another vehicle approaches straight from the opposite direction, you should:',
    options: [
      'Go first because you are turning',
      'Yield and let the other vehicle pass',
      'Flash your lights and go',
      'Honk and proceed'
    ],
    correctAnswerIndex: 1,
    explanation: {
      en: 'A driver turning left must yield to oncoming traffic going straight. Let the other vehicle pass, then complete your turn when it is clear.',
      es: 'El conductor que gira a la izquierda debe ceder el paso al tráfico que viene de frente y sigue recto. Deja pasar al otro vehículo y luego completa tu giro cuando esté despejado.'
    },
    source: { url: handbook, section: 'Right-of-Way', edition: 'FLHSMV' },
    reviewStatus: 'verified',
    tags: ['right-of-way', 'left-turn'],
    image: null,
    learningObjective: 'Yield to oncoming traffic when turning left at an uncontrolled crossing.',
    relatedLessonId: 'right-of-way'
  },

  // ------------------------------------------------------------ speed-distance
  {
    id: 'sd-001',
    category: 'speed-distance',
    difficulty: 'beginner',
    question: 'Unless otherwise posted, the speed limit in a residential or business district in Florida is:',
    options: ['20 mph', '25 mph', '30 mph', '35 mph'],
    correctAnswerIndex: 2,
    explanation: {
      en: 'Florida sets a default speed limit of 30 mph in residential and business districts unless a sign shows a different limit. Always obey posted signs when they apply.',
      es: 'Florida establece un límite de velocidad por defecto de 30 mph en zonas residenciales y comerciales, salvo que una señal indique otro límite. Obedece siempre las señales publicadas.'
    },
    source: { url: statutes, section: 'Florida Statutes 316.183', edition: 'FLHSMV' },
    reviewStatus: 'verified',
    tags: ['speed', 'speed-limits'],
    image: null,
    learningObjective: 'Know the default speed limit in residential and business districts.',
    relatedLessonId: 'speed-distance'
  },
  {
    id: 'sd-002',
    category: 'speed-distance',
    difficulty: 'beginner',
    question: 'Unless otherwise posted, the speed limit on a two-lane undivided highway outside an urban area is:',
    options: ['45 mph', '55 mph', '60 mph', '70 mph'],
    correctAnswerIndex: 1,
    explanation: {
      en: 'On two-lane undivided roads outside urban areas, the default limit is 55 mph unless posted otherwise. Adjust your speed to conditions even below the limit.',
      es: 'En vías de dos carriles no divididas fuera de zonas urbanas, el límite por defecto es 55 mph salvo que se indique otra cosa. Ajusta tu velocidad a las condiciones, incluso por debajo del límite.'
    },
    source: { url: statutes, section: 'Florida Statutes 316.183', edition: 'FLHSMV' },
    reviewStatus: 'verified',
    tags: ['speed', 'speed-limits'],
    image: null,
    learningObjective: 'Know the rural two-lane default speed limit.',
    relatedLessonId: 'speed-distance'
  },
  {
    id: 'sd-003',
    category: 'speed-distance',
    difficulty: 'beginner',
    question: 'The maximum speed limit on Florida interstate highways is:',
    options: ['65 mph', '70 mph', '75 mph', '80 mph'],
    correctAnswerIndex: 1,
    explanation: {
      en: 'The maximum posted speed limit on Florida interstate highways is 70 mph. Some stretches may be posted lower based on local conditions.',
      es: 'El límite de velocidad máximo publicado en las interestatales de Florida es 70 mph. Algunos tramos pueden estar señalizados a menor velocidad según las condiciones locales.'
    },
    source: { url: statutes, section: 'Florida Statutes 316.183', edition: 'FLHSMV' },
    reviewStatus: 'verified',
    tags: ['speed', 'interstate'],
    image: null,
    learningObjective: 'Recall the maximum interstate speed limit in Florida.',
    relatedLessonId: 'speed-distance'
  },
  {
    id: 'sd-004',
    category: 'speed-distance',
    difficulty: 'intermediate',
    question: 'In a school zone when the warning lights are flashing, the posted speed limit is usually:',
    options: ['15 mph', '20 mph', '25 mph', '30 mph'],
    correctAnswerIndex: 1,
    explanation: {
      en: 'Florida school zones generally post a 20 mph limit that applies when the lights are flashing. Slow down and watch for children during school hours.',
      es: 'Las zonas escolares de Florida suelen indicar un límite de 20 mph que aplica cuando las luces están intermitentes. Reduce la velocidad y vigila a los niños durante el horario escolar.'
    },
    source: { url: statutes, section: 'Florida Statutes 316.1895', edition: 'FLHSMV' },
    reviewStatus: 'verified',
    tags: ['speed', 'school-zone'],
    image: null,
    learningObjective: 'Know the school zone speed limit when lights flash.',
    relatedLessonId: 'speed-distance'
  },
  {
    id: 'sd-005',
    category: 'speed-distance',
    difficulty: 'intermediate',
    question: 'Florida recommends a safe following distance of at least:',
    options: [
      'One car length for every 10 mph',
      'Two seconds in normal conditions, and more in bad weather',
      'Half a car length at any speed',
      'Ten car lengths at all times'
    ],
    correctAnswerIndex: 1,
    explanation: {
      en: 'A common safe following rule is at least two seconds behind the vehicle ahead in good conditions. Increase the gap in rain, fog, or low light.',
      es: 'Una regla segura y común es mantener al menos dos segundos de distancia con el vehículo de adelante en buenas condiciones. Aumenta el espacio en lluvia, niebla o poca luz.'
    },
    source: { url: handbook, section: 'Following Distance', edition: 'FLHSMV' },
    reviewStatus: 'needs-review',
    tags: ['distance', 'following'],
    image: null,
    learningObjective: 'Apply a safe following distance in normal conditions.',
    relatedLessonId: 'speed-distance'
  },
  {
    id: 'sd-006',
    category: 'speed-distance',
    difficulty: 'intermediate',
    question: 'If the road is wet or foggy, you should:',
    options: [
      'Keep the posted speed limit',
      'Reduce your speed and increase your following distance',
      'Speed up to get through the area quickly',
      'Turn on your high-beam headlights only'
    ],
    correctAnswerIndex: 1,
    explanation: {
      en: 'Bad weather reduces traction and visibility, so slow down and leave more space. This gives you more time to react and stop safely.',
      es: 'El mal tiempo reduce la adherencia y la visibilidad, así que reduce la velocidad y deja más espacio. Esto te da más tiempo para reaccionar y detenerte con seguridad.'
    },
    source: { url: handbook, section: 'Speed Limits', edition: 'FLHSMV' },
    reviewStatus: 'verified',
    tags: ['speed', 'weather'],
    image: null,
    learningObjective: 'Adjust speed and distance for wet or foggy conditions.',
    relatedLessonId: 'speed-distance'
  },
  {
    id: 'sd-007',
    category: 'speed-distance',
    difficulty: 'intermediate',
    question: "Florida's basic speed law means you must:",
    options: [
      'Always drive at the posted speed limit',
      'Never drive faster than is safe for the current conditions, even below the limit',
      'Drive at least the posted speed limit',
      'Match the speed of the fastest car'
    ],
    correctAnswerIndex: 1,
    explanation: {
      en: 'The basic speed law says you must never drive faster than is safe for current conditions. A posted limit is not a guarantee that the speed is safe.',
      es: 'La ley básica de velocidad dice que nunca debes conducir más rápido de lo que es seguro según las condiciones actuales. Un límite publicado no garantiza que esa velocidad sea segura.'
    },
    source: { url: statutes, section: 'Florida Statutes 316.183', edition: 'FLHSMV' },
    reviewStatus: 'verified',
    tags: ['speed', 'safe-speed'],
    image: null,
    learningObjective: 'Understand that speed must always fit conditions.',
    relatedLessonId: 'speed-distance'
  },
  {
    id: 'sd-008',
    category: 'speed-distance',
    difficulty: 'advanced',
    question: 'Total stopping distance is made up of:',
    options: [
      'Only reaction distance',
      'Perception distance, reaction distance, and braking distance',
      'Only braking distance',
      'Only the distance to the car ahead'
    ],
    correctAnswerIndex: 1,
    explanation: {
      en: 'Total stopping distance is the sum of perception time, reaction time, and braking distance. All three increase with speed and are affected by road conditions.',
      es: 'La distancia total de frenado es la suma del tiempo de percepción, el tiempo de reacción y la distancia de frenado. Los tres aumentan con la velocidad y se ven afectados por las condiciones de la vía.'
    },
    source: { url: handbook, section: 'Stopping Distance', edition: 'FLHSMV' },
    reviewStatus: 'verified',
    tags: ['distance', 'stopping'],
    image: null,
    learningObjective: 'Identify the components of total stopping distance.',
    relatedLessonId: 'speed-distance'
  },
  {
    id: 'sd-009',
    category: 'speed-distance',
    difficulty: 'intermediate',
    question: 'Compared with dry pavement, stopping distances on wet pavement are:',
    options: [
      'About the same',
      'Longer',
      'Shorter',
      'Unaffected by weather'
    ],
    correctAnswerIndex: 1,
    explanation: {
      en: 'Wet pavement reduces tire grip, so stopping distances become longer than on dry pavement. Leave extra space and reduce speed when the road is wet.',
      es: 'El pavimento mojado reduce la adherencia de las llantas, por lo que las distancias de frenado son mayores que en pavimento seco. Deja más espacio y reduce la velocidad cuando la vía esté mojada.'
    },
    source: { url: handbook, section: 'Stopping Distance', edition: 'FLHSMV' },
    reviewStatus: 'needs-review',
    tags: ['distance', 'weather', 'stopping'],
    image: null,
    learningObjective: 'Understand that wet roads increase stopping distance.',
    relatedLessonId: 'speed-distance'
  },
  {
    id: 'sd-010',
    category: 'speed-distance',
    difficulty: 'intermediate',
    question: 'Driving much slower than the surrounding traffic can be dangerous because:',
    options: [
      'It saves fuel',
      'It can cause others to rear-end you and forces them to pass',
      'It is always illegal',
      'It is required on all highways'
    ],
    correctAnswerIndex: 1,
    explanation: {
      en: 'Driving well below the flow of traffic increases the chance of being rear-ended and forces others to pass. Keep up with the safe flow without exceeding the limit.',
      es: 'Conducir muy por debajo del flujo del tráfico aumenta el riesgo de que te choquen por detrás y obliga a otros a rebasarte. Mantén el flujo seguro sin exceder el límite.'
    },
    source: { url: handbook, section: 'Speed Limits', edition: 'FLHSMV' },
    reviewStatus: 'verified',
    tags: ['speed', 'traffic-flow'],
    image: null,
    learningObjective: 'Recognize the danger of driving too slowly.',
    relatedLessonId: 'speed-distance'
  },
  {
    id: 'sd-011',
    category: 'speed-distance',
    difficulty: 'intermediate',
    question: 'When approaching a work zone, you should:',
    options: [
      'Maintain the posted speed limit at all times',
      'Slow down, follow posted work-zone speeds and be ready to stop',
      'Speed up to clear the area quickly',
      'Drive on the shoulder if the lane is closed'
    ],
    correctAnswerIndex: 1,
    explanation: {
      en: 'Work zones may have lower posted speeds, workers, and changing lanes. Slow down, obey the signs, and be ready to stop for workers and equipment.',
      es: 'Las zonas de obras pueden tener velocidades más bajas, trabajadores y carriles que cambian. Reduce la velocidad, obedece las señales y prepárate para detenerte por trabajadores y equipos.'
    },
    source: { url: handbook, section: 'Work Zones', edition: 'FLHSMV' },
    reviewStatus: 'verified',
    tags: ['speed', 'work-zone'],
    image: null,
    learningObjective: 'Adjust speed and attention in work zones.',
    relatedLessonId: 'speed-distance'
  },
  {
    id: 'sd-012',
    category: 'speed-distance',
    difficulty: 'advanced',
    question: 'To reduce the chance of hydroplaning on a wet road, you should:',
    options: [
      'Drive faster so the tires stay on top of the water',
      'Slow down and avoid sudden braking or steering',
      'Follow the vehicle ahead more closely',
      'Turn off your headlights'
    ],
    correctAnswerIndex: 1,
    explanation: {
      en: 'Hydroplaning happens when tires ride on a film of water. Slowing down and making smooth inputs help the tires keep contact with the road.',
      es: 'El hidroplaneo ocurre cuando las llantas se deslizan sobre una película de agua. Reducir la velocidad y hacer movimientos suaves ayudan a que las llantas mantengan contacto con la vía.'
    },
    source: { url: handbook, section: 'Driving in Bad Weather', edition: 'FLHSMV' },
    reviewStatus: 'needs-review',
    tags: ['speed', 'weather', 'traction'],
    image: null,
    learningObjective: 'Reduce hydroplaning risk on wet roads.',
    relatedLessonId: 'speed-distance'
  },
  {
    id: 'sd-013',
    category: 'speed-distance',
    difficulty: 'intermediate',
    question: 'When following a motorcycle, you should:',
    options: [
      'Follow more closely because it is smaller',
      'Allow the same or greater following distance as for other vehicles',
      'Pass it within the same lane',
      'Flash your lights to make it move over'
    ],
    correctAnswerIndex: 1,
    explanation: {
      en: 'Motorcycles can stop faster than cars, so leave the same or more distance. Never share a lane or pass a motorcycle within its lane.',
      es: 'Las motocicletas pueden frenar más rápido que los autos, así que deja la misma distancia o más. Nunca compartas el carril ni rebases a una motocicleta dentro de su carril.'
    },
    source: { url: handbook, section: 'Sharing the Road', edition: 'FLHSMV' },
    reviewStatus: 'verified',
    tags: ['distance', 'motorcycle'],
    image: null,
    learningObjective: 'Maintain a safe following distance behind motorcycles.',
    relatedLessonId: 'speed-distance'
  },
  {
    id: 'sd-014',
    category: 'speed-distance',
    difficulty: 'advanced',
    question: 'When entering a curve, you should slow down:',
    options: [
      'After you are already in the curve',
      'Before you enter the curve',
      'Only if the road is wet',
      'Never; keep a constant speed'
    ],
    correctAnswerIndex: 1,
    explanation: {
      en: 'Slow down before entering a curve and accelerate gently after the curve begins to open. Braking hard inside a curve can cause a skid.',
      es: 'Reduce la velocidad antes de entrar a la curva y acelera suavemente cuando la curva empiece a abrirse. Frenar fuerte dentro de la curva puede provocar un derrape.'
    },
    source: { url: handbook, section: 'Curves', edition: 'FLHSMV' },
    reviewStatus: 'verified',
    tags: ['speed', 'curves'],
    image: null,
    learningObjective: 'Slow down before entering a curve.',
    relatedLessonId: 'speed-distance'
  },
  {
    id: 'sd-015',
    category: 'speed-distance',
    difficulty: 'beginner',
    question: 'A yellow advisory speed sign on a curve indicates:',
    options: [
      'A legal speed limit',
      'A recommended safe speed for that condition',
      'The minimum speed allowed',
      'The speed limit for trucks only'
    ],
    correctAnswerIndex: 1,
    explanation: {
      en: 'A yellow advisory speed sign suggests a safe speed for a curve or other condition. It is not a legal limit, but exceeding it may be unsafe.',
      es: 'Una señal amarilla de velocidad recomendada sugiere una velocidad segura para una curva u otra condición. No es un límite legal, pero excederla puede ser peligroso.'
    },
    source: { url: handbook, section: 'Speed Limits', edition: 'FLHSMV' },
    reviewStatus: 'verified',
    tags: ['speed', 'advisory', 'curves'],
    image: null,
    learningObjective: 'Read yellow advisory speed signs correctly.',
    relatedLessonId: 'speed-distance'
  },

  // ------------------------------------------------------ turning-lanes-parking
  {
    id: 'tl-001',
    category: 'turning-lanes-parking',
    difficulty: 'beginner',
    question: 'How far before a turn must you signal in Florida?',
    options: ['100 feet', '50 feet', 'There is no requirement', '500 feet'],
    correctAnswerIndex: 0,
    explanation: {
      en: 'Florida requires you to signal at least 100 feet before a turn. Signal early so other drivers know what you plan to do.',
      es: 'Florida exige que señalices al menos 100 pies (30 metros) antes de girar. Señaliza con anticipación para que otros conductores sepan qué planeas hacer.'
    },
    source: { url: statutes, section: 'Florida Statutes 316.155', edition: 'FLHSMV' },
    reviewStatus: 'verified',
    tags: ['turning', 'turn-signal'],
    image: null,
    learningObjective: 'Know the required signal distance before a turn.',
    relatedLessonId: 'turning-lanes-parking'
  },
  {
    id: 'tl-002',
    category: 'turning-lanes-parking',
    difficulty: 'beginner',
    question: 'Before changing lanes, you should:',
    options: [
      'Signal, check mirrors and blind spot, then move when safe',
      'Signal only, then move over',
      'Honk and move over',
      'Move first, then signal'
    ],
    correctAnswerIndex: 0,
    explanation: {
      en: 'A safe lane change means signaling, checking your mirrors and blind spot, then moving only when there is a clear gap. Never rely on mirrors alone.',
      es: 'Un cambio de carril seguro consiste en señalizar, revisar los espejos y el punto ciego, y luego moverse solo cuando haya un espacio libre. Nunca confíes solo en los espejos.'
    },
    source: { url: handbook, section: 'Lane Changes', edition: 'FLHSMV' },
    reviewStatus: 'verified',
    tags: ['lanes', 'lane-change'],
    image: null,
    learningObjective: 'Perform a safe lane change with a head check.',
    relatedLessonId: 'turning-lanes-parking'
  },
  {
    id: 'tl-003',
    category: 'turning-lanes-parking',
    difficulty: 'beginner',
    question: 'In Florida, U-turns are:',
    options: [
      'Allowed everywhere at any time',
      'Allowed unless a sign prohibits them and it can be done safely',
      'Never allowed on any road',
      'Allowed only on interstates'
    ],
    correctAnswerIndex: 1,
    explanation: {
      en: 'U-turns are allowed in Florida unless a sign prohibits them, and only when you can see clearly and turn safely. Never make one where it is unsafe or restricted.',
      es: 'Los giros en U se permiten en Florida salvo que una señal los prohíba, y solo cuando puedas ver con claridad y girar con seguridad. Nunca los hagas donde sea inseguro o esté restringido.'
    },
    source: { url: statutes, section: 'Florida Statutes 316.1515', edition: 'FLHSMV' },
    reviewStatus: 'verified',
    tags: ['turning', 'u-turn'],
    image: null,
    learningObjective: 'Know the general Florida rule on U-turns.',
    relatedLessonId: 'turning-lanes-parking'
  },
  {
    id: 'tl-004',
    category: 'turning-lanes-parking',
    difficulty: 'intermediate',
    question: 'When parking downhill next to a curb, you should turn your front wheels:',
    options: ['Toward the curb', 'Away from the curb', 'Straight ahead', 'Parallel to the center line'],
    correctAnswerIndex: 0,
    explanation: {
      en: 'When parked downhill with a curb, turn the wheels toward the curb and set the parking brake. This keeps the vehicle from rolling into traffic.',
      es: 'Al estacionar cuesta abajo junto a un bordillo, gira las ruedas delanteras hacia el bordillo y pon el freno de mano. Así evitas que el vehículo ruede hacia el tráfico.'
    },
    source: { url: handbook, section: 'Parking', edition: 'FLHSMV' },
    reviewStatus: 'verified',
    tags: ['parking', 'curb'],
    image: null,
    learningObjective: 'Position wheels correctly when parking downhill with a curb.',
    relatedLessonId: 'turning-lanes-parking'
  },
  {
    id: 'tl-005',
    category: 'turning-lanes-parking',
    difficulty: 'intermediate',
    question: 'When parking uphill next to a curb, you should turn your front wheels:',
    options: ['Toward the curb', 'Away from the curb', 'Straight ahead', 'Toward the center line only'],
    correctAnswerIndex: 1,
    explanation: {
      en: 'When parked uphill with a curb, turn the wheels away from the curb so the rear of the wheel can catch the curb if the car rolls. Always set the parking brake.',
      es: 'Al estacionar cuesta arriba junto a un bordillo, gira las ruedas hacia afuera del bordillo para que la llanta pueda apoyarse en él si el auto rueda. Pon siempre el freno de mano.'
    },
    source: { url: handbook, section: 'Parking', edition: 'FLHSMV' },
    reviewStatus: 'verified',
    tags: ['parking', 'curb'],
    image: null,
    learningObjective: 'Position wheels correctly when parking uphill with a curb.',
    relatedLessonId: 'turning-lanes-parking'
  },
  {
    id: 'tl-006',
    category: 'turning-lanes-parking',
    difficulty: 'intermediate',
    question: 'You should not park within how many feet of a fire hydrant?',
    options: ['5 feet', '10 feet', '15 feet', '25 feet'],
    correctAnswerIndex: 2,
    explanation: {
      en: 'Florida prohibits parking within 15 feet of a fire hydrant. Keeping that space clear allows firefighters to reach the hydrant quickly.',
      es: 'Florida prohíbe estacionar a menos de 15 pies (unos 4.5 metros) de una boca de incendios. Mantener ese espacio libre permite a los bomberos llegar rápido a la boca.'
    },
    source: { url: statutes, section: 'Florida Statutes 316.1945', edition: 'FLHSMV' },
    reviewStatus: 'verified',
    tags: ['parking', 'restrictions'],
    image: null,
    learningObjective: 'Know the parking distance rule for fire hydrants.',
    relatedLessonId: 'turning-lanes-parking'
  },
  {
    id: 'tl-007',
    category: 'turning-lanes-parking',
    difficulty: 'intermediate',
    question: 'Parking is not allowed within how many feet of a crosswalk at an intersection?',
    options: ['10 feet', '20 feet', '30 feet', '50 feet'],
    correctAnswerIndex: 1,
    explanation: {
      en: 'Florida does not allow parking within 20 feet of a crosswalk at an intersection. This keeps sight lines clear for drivers and pedestrians.',
      es: 'Florida no permite estacionar a menos de 20 pies (unos 6 metros) de un cruce peatonal en una intersección. Esto mantiene despejada la visibilidad para conductores y peatones.'
    },
    source: { url: statutes, section: 'Florida Statutes 316.1945', edition: 'FLHSMV' },
    reviewStatus: 'verified',
    tags: ['parking', 'restrictions', 'crosswalk'],
    image: null,
    learningObjective: 'Know the parking distance rule near crosswalks.',
    relatedLessonId: 'turning-lanes-parking'
  },
  {
    id: 'tl-008',
    category: 'turning-lanes-parking',
    difficulty: 'intermediate',
    question: 'Parking is not allowed within how many feet of a stop sign or traffic signal at the side of the road?',
    options: ['15 feet', '20 feet', '30 feet', '50 feet'],
    correctAnswerIndex: 2,
    explanation: {
      en: 'Florida prohibits parking within 30 feet of a stop sign, yield sign, or traffic signal located at the side of the road. This keeps signs and signals visible.',
      es: 'Florida prohíbe estacionar a menos de 30 pies (unos 9 metros) de una señal de alto, ceda el paso o semáforo ubicado al costado de la vía. Esto mantiene visibles las señales y semáforos.'
    },
    source: { url: statutes, section: 'Florida Statutes 316.1945', edition: 'FLHSMV' },
    reviewStatus: 'verified',
    tags: ['parking', 'restrictions'],
    image: null,
    learningObjective: 'Know the parking distance rule near stop signs and signals.',
    relatedLessonId: 'turning-lanes-parking'
  },
  {
    id: 'tl-009',
    category: 'turning-lanes-parking',
    difficulty: 'intermediate',
    question: 'Parking is not allowed within how many feet of a railroad crossing?',
    options: ['15 feet', '25 feet', '50 feet', '100 feet'],
    correctAnswerIndex: 2,
    explanation: {
      en: 'Florida prohibits parking within 50 feet of a railroad crossing. Keeping that area clear preserves sight lines for drivers and trains.',
      es: 'Florida prohíbe estacionar a menos de 50 pies (unos 15 metros) de un cruce de ferrocarril. Mantener esa zona libre preserva la visibilidad para conductores y trenes.'
    },
    source: { url: statutes, section: 'Florida Statutes 316.1945', edition: 'FLHSMV' },
    reviewStatus: 'verified',
    tags: ['parking', 'restrictions', 'railroad'],
    image: null,
    learningObjective: 'Know the parking distance rule near railroad crossings.',
    relatedLessonId: 'turning-lanes-parking'
  },
  {
    id: 'tl-010',
    category: 'turning-lanes-parking',
    difficulty: 'intermediate',
    question: 'Which of the following is a place where parking is generally not allowed?',
    options: [
      'In a marked parking space',
      'On a bridge or in a tunnel',
      'In a parking lot',
      'Beside a parking meter'
    ],
    correctAnswerIndex: 1,
    explanation: {
      en: 'Parking on a bridge, in a tunnel, or on a railroad track is not allowed. These spots are unsafe and block traffic or emergency access.',
      es: 'No se permite estacionar en un puente, en un túnel ni sobre vías de tren. Estos lugares son inseguros y bloquean el tráfico o el acceso de emergencia.'
    },
    source: { url: handbook, section: 'Parking', edition: 'FLHSMV' },
    reviewStatus: 'verified',
    tags: ['parking', 'restrictions'],
    image: null,
    learningObjective: 'Identify locations where parking is prohibited.',
    relatedLessonId: 'turning-lanes-parking'
  },
  {
    id: 'tl-011',
    category: 'turning-lanes-parking',
    difficulty: 'beginner',
    question: 'When you park parallel to a curb, your wheels should be within how many inches of the curb?',
    options: ['6 inches', '12 inches', '18 inches', '24 inches'],
    correctAnswerIndex: 1,
    explanation: {
      en: 'When parallel parking, the wheels nearest the curb should be within 12 inches of it. Parking too far out can block traffic and lead to a ticket.',
      es: 'Al estacionar en paralelo, las ruedas más cercanas al bordillo deben quedar a 12 pulgadas (unos 30 cm) o menos de él. Estacionar demasiado lejos puede bloquear el tráfico y generar una multa.'
    },
    source: { url: handbook, section: 'Parking', edition: 'FLHSMV' },
    reviewStatus: 'verified',
    tags: ['parking', 'parallel-parking'],
    image: null,
    learningObjective: 'Park parallel within the allowed distance from the curb.',
    relatedLessonId: 'turning-lanes-parking'
  },
  {
    id: 'tl-012',
    category: 'turning-lanes-parking',
    difficulty: 'intermediate',
    question: 'To make a right turn, you should:',
    options: [
      'Turn from the lane nearest the right curb and end in the lane nearest the right curb',
      'Turn from any lane you choose',
      'Turn from the left lane',
      'Swing left before turning'
    ],
    correctAnswerIndex: 0,
    explanation: {
      en: 'A right turn is made from the lane nearest the right curb into the lane nearest the right curb. Do not swing wide or turn from the wrong lane.',
      es: 'El giro a la derecha se hace desde el carril más cercano al bordillo derecho hacia el carril más cercano al bordillo derecho. No abras demasiado el giro ni gires desde el carril equivocado.'
    },
    source: { url: handbook, section: 'Turning', edition: 'FLHSMV' },
    reviewStatus: 'verified',
    tags: ['turning', 'right-turn'],
    image: null,
    learningObjective: 'Make a right turn from and into the correct lane.',
    relatedLessonId: 'turning-lanes-parking'
  },
  {
    id: 'tl-013',
    category: 'turning-lanes-parking',
    difficulty: 'intermediate',
    question: 'When making a left turn from a two-way street onto another two-way street, you should turn into:',
    options: [
      'The lane nearest the center line of the street you are entering',
      'The right lane of the street you are entering',
      'Either lane, at any speed',
      'The shoulder of the street you are entering'
    ],
    correctAnswerIndex: 0,
    explanation: {
      en: 'A left turn from a two-way street onto a two-way street should end in the lane nearest the center line. Turning into the far lane can cut off other drivers.',
      es: 'Un giro a la izquierda de una vía de doble sentido a otra de doble sentido debe terminar en el carril más cercano a la línea central. Girar hacia el carril lejano puede cortar el paso a otros conductores.'
    },
    source: { url: handbook, section: 'Turning', edition: 'FLHSMV' },
    reviewStatus: 'verified',
    tags: ['turning', 'left-turn'],
    image: null,
    learningObjective: 'Complete a left turn into the proper lane.',
    relatedLessonId: 'turning-lanes-parking'
  },
  {
    id: 'tl-014',
    category: 'turning-lanes-parking',
    difficulty: 'intermediate',
    question: 'Passing on the right is allowed when:',
    options: [
      'The vehicle ahead is making or about to make a left turn and there is room to pass safely on the right',
      'You drive on the shoulder to pass',
      'Traffic is slow and you want to move ahead',
      'You are inside an intersection'
    ],
    correctAnswerIndex: 0,
    explanation: {
      en: 'You may pass on the right when the vehicle ahead is turning left and there is a lane or paved area to pass safely. Never pass on the shoulder or in an intersection.',
      es: 'Puedes rebasar por la derecha cuando el vehículo de adelante gira a la izquierda y hay un carril o zona pavimentada para rebasar con seguridad. Nunca rebases por el acotamiento ni dentro de una intersección.'
    },
    source: { url: handbook, section: 'Passing', edition: 'FLHSMV' },
    reviewStatus: 'verified',
    tags: ['passing', 'lanes'],
    image: null,
    learningObjective: 'Know when passing on the right is permitted.',
    relatedLessonId: 'turning-lanes-parking'
  },
  {
    id: 'tl-015',
    category: 'turning-lanes-parking',
    difficulty: 'beginner',
    question: 'A two-way left-turn lane in the center of a road is used:',
    options: [
      'To pass slow vehicles',
      'Only to make left turns in either direction',
      'As a regular travel lane',
      'To park briefly while running errands'
    ],
    correctAnswerIndex: 1,
    explanation: {
      en: 'A center two-way left-turn lane is shared by both directions only for making left turns. Do not use it as a travel or passing lane.',
      es: 'El carril central de giro a la izquierda de doble sentido se comparte por ambos lados solo para hacer giros a la izquierda. No lo uses como carril de circulación ni para rebasar.'
    },
    source: { url: handbook, section: 'Lanes', edition: 'FLHSMV' },
    reviewStatus: 'verified',
    tags: ['lanes', 'left-turn'],
    image: null,
    learningObjective: 'Use a center two-way left-turn lane correctly.',
    relatedLessonId: 'turning-lanes-parking'
  }
];

export default questions;
