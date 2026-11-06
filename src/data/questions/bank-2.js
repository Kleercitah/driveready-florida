/**
 * Banco de preguntas — Bloque 2.
 * Categorías: defensive-driving, alcohol-drugs, emergencies, highways-passing, florida-laws.
 * Contenido original redactado para estudiar. No reproduce preguntas oficiales.
 */

const handbook = 'https://www.flhsmv.gov/pdf/handbooks/englishdriverhandbook.pdf';
const statutes = 'https://www.leg.state.fl.us/statutes/';

export const questions = [
  // ---------------------------------------------------------------------------
  // Defensive Driving (dd-001 .. dd-015)
  // ---------------------------------------------------------------------------
  {
    id: 'dd-001',
    category: 'defensive-driving',
    difficulty: 'beginner',
    question:
      'Under normal driving conditions, what is the recommended minimum following distance behind the vehicle ahead?',
    options: ['One second', 'Two seconds', 'Three seconds', 'Five seconds'],
    correctAnswerIndex: 2,
    explanation: {
      en: 'Under normal conditions, following at least three seconds behind the vehicle ahead gives you time to react to sudden changes. This gap should be increased in rain, darkness, or when following motorcycles and large trucks.',
      es: 'En condiciones normales, mantener al menos tres segundos de distancia con el vehículo de adelante te da tiempo para reaccionar ante cambios repentinos. Esta distancia debe aumentarse con lluvia, oscuridad o al seguir motocicletas y camiones grandes.'
    },
    source: { url: handbook, section: 'Defensive Driving', edition: 'FLHSMV' },
    reviewStatus: 'verified',
    tags: ['following-distance', 'safety'],
    image: null,
    learningObjective: 'Apply the three-second following distance rule.',
    relatedLessonId: 'defensive-driving'
  },
  {
    id: 'dd-002',
    category: 'defensive-driving',
    difficulty: 'beginner',
    question: 'When driving in heavy rain, how should you adjust your following distance?',
    options: [
      'Keep it exactly the same as in dry weather',
      'Decrease it to stay closer to the car ahead',
      'Increase it to allow more reaction time',
      'Ignore the car ahead and match its speed only'
    ],
    correctAnswerIndex: 2,
    explanation: {
      en: 'Wet roads reduce traction and increase stopping distances, so you should increase the space between your vehicle and the one ahead. More distance gives you extra time to brake smoothly and avoid a collision.',
      es: 'Las carreteras mojadas reducen la tracción y aumentan las distancias de frenado, por lo que debes aumentar el espacio con el vehículo de adelante. Más distancia te da tiempo adicional para frenar suavemente y evitar una colisión.'
    },
    source: { url: handbook, section: 'Defensive Driving', edition: 'FLHSMV' },
    reviewStatus: 'verified',
    tags: ['weather', 'following-distance'],
    image: null,
    learningObjective: 'Adjust following distance to poor weather conditions.',
    relatedLessonId: 'defensive-driving'
  },
  {
    id: 'dd-003',
    category: 'defensive-driving',
    difficulty: 'beginner',
    question:
      'Defensive drivers keep their eyes moving and look well ahead of the vehicle mainly in order to...',
    options: [
      'Admire the scenery along the road',
      'Spot hazards early enough to respond in time',
      'Avoid having to use the mirrors',
      'Keep the radio at a safe volume'
    ],
    correctAnswerIndex: 1,
    explanation: {
      en: 'Scanning far ahead lets you identify hazards early and react smoothly instead of suddenly. It also helps you plan lane position and speed before problems reach you.',
      es: 'Observar bien hacia adelante te permite identificar peligros con anticipación y reaccionar con suavidad en lugar de forma repentina. También te ayuda a planear la posición y la velocidad antes de que los problemas te alcancen.'
    },
    source: { url: handbook, section: 'Defensive Driving', edition: 'FLHSMV' },
    reviewStatus: 'verified',
    tags: ['scanning', 'awareness'],
    image: null,
    learningObjective: 'Scan well ahead to identify hazards early.',
    relatedLessonId: 'defensive-driving'
  },
  {
    id: 'dd-004',
    category: 'defensive-driving',
    difficulty: 'beginner',
    question:
      'Before changing lanes, what should you do in addition to checking your mirrors?',
    options: [
      'Sound the horn to warn other drivers',
      'Turn your head briefly to check the blind spot',
      'Accelerate sharply to move first',
      'Flash your high beams'
    ],
    correctAnswerIndex: 1,
    explanation: {
      en: 'Mirrors do not show everything; a quick glance over your shoulder checks the blind spot where a vehicle could be hidden. Signal your intention before moving and keep both hands ready on the wheel.',
      es: 'Los espejos no muestran todo; una mirada rápida por encima del hombro revisa el punto ciego donde puede ocultarse un vehículo. Señaliza tu intención antes de moverte y mantén ambas manos listas en el volante.'
    },
    source: { url: handbook, section: 'Defensive Driving', edition: 'FLHSMV' },
    reviewStatus: 'verified',
    tags: ['lane-change', 'blind-spot'],
    image: null,
    learningObjective: 'Check the blind spot before changing lanes.',
    relatedLessonId: 'defensive-driving'
  },
  {
    id: 'dd-005',
    category: 'defensive-driving',
    difficulty: 'beginner',
    question: 'Which statement about safety belts is correct?',
    options: [
      'They are only needed on highways',
      'They should be worn by the driver and passengers to reduce injury',
      'They replace the need to drive carefully',
      'They are optional for short trips'
    ],
    correctAnswerIndex: 1,
    explanation: {
      en: 'Safety belts hold occupants in place and reduce the chance of serious injury or ejection in a crash. They work best when worn correctly for every trip, no matter how short.',
      es: 'Los cinturones de seguridad sujetan a los ocupantes y reducen la posibilidad de lesiones graves o de ser expulsados en un choque. Funcionan mejor cuando se usan correctamente en cada viaje, sin importar lo corto que sea.'
    },
    source: { url: handbook, section: 'Defensive Driving', edition: 'FLHSMV' },
    reviewStatus: 'verified',
    tags: ['safety-belts', 'occupant-protection'],
    image: null,
    learningObjective: 'Understand the purpose of safety belts.',
    relatedLessonId: 'defensive-driving'
  },
  {
    id: 'dd-006',
    category: 'defensive-driving',
    difficulty: 'intermediate',
    question: 'When sharing the road with a motorcycle, a driver should...',
    options: [
      'Share the same lane with the rider',
      'Give the motorcycle the full lane width',
      'Drive very close behind the motorcycle',
      'Honk to warn the rider'
    ],
    correctAnswerIndex: 1,
    explanation: {
      en: 'A motorcycle is entitled to the full width of a lane, and it may need to adjust position for surface hazards or wind. Never crowd a motorcycle, because it can stop more quickly than you expect.',
      es: 'Una motocicleta tiene derecho a todo el ancho de un carril y puede necesitar ajustar su posición por peligros en la vía o por el viento. Nunca te acerques demasiado a una motocicleta, porque puede detenerse más rápido de lo que esperas.'
    },
    source: { url: handbook, section: 'Sharing the Road', edition: 'FLHSMV' },
    reviewStatus: 'verified',
    tags: ['motorcycles', 'sharing-the-road'],
    image: null,
    learningObjective: 'Allow motorcycles the full use of a lane.',
    relatedLessonId: 'defensive-driving'
  },
  {
    id: 'dd-007',
    category: 'defensive-driving',
    difficulty: 'intermediate',
    question:
      'Large trucks have blind spots, often called No-Zones. To drive safely near a truck you should...',
    options: [
      'Stay alongside the cab for a long time',
      'Avoid lingering in the truck blind spots',
      'Follow closely to save road space',
      'Cut in front immediately after passing'
    ],
    correctAnswerIndex: 1,
    explanation: {
      en: 'Trucks have large blind spots in front, on the sides, and behind, so lingering there means the driver cannot see you. Pass or move away promptly rather than staying hidden in a No-Zone.',
      es: 'Los camiones tienen grandes puntos ciegos al frente, a los lados y detrás, por lo que quedarse allí significa que el conductor no puede verte. Adelanta o aléjate rápidamente en lugar de permanecer oculto en una zona ciega.'
    },
    source: { url: handbook, section: 'Sharing the Road', edition: 'FLHSMV' },
    reviewStatus: 'verified',
    tags: ['trucks', 'blind-spot'],
    image: null,
    learningObjective: 'Avoid truck blind spots while sharing the road.',
    relatedLessonId: 'defensive-driving'
  },
  {
    id: 'dd-008',
    category: 'defensive-driving',
    difficulty: 'beginner',
    question: 'When driving in fog, you should...',
    options: [
      'Use high-beam headlights',
      'Slow down and use low-beam headlights',
      'Speed up to get through it faster',
      'Turn on the interior lights'
    ],
    correctAnswerIndex: 1,
    explanation: {
      en: 'High beams reflect off fog and make it harder to see, while low beams cut under the fog. Reducing speed also shortens your stopping distance in limited visibility.',
      es: 'Las luces altas reflejan la niebla y dificultan la visión, mientras que las luces bajas pasan por debajo de la niebla. Reducir la velocidad también acorta tu distancia de frenado cuando la visibilidad es limitada.'
    },
    source: { url: handbook, section: 'Special Driving Conditions', edition: 'FLHSMV' },
    reviewStatus: 'verified',
    tags: ['fog', 'visibility'],
    image: null,
    learningObjective: 'Use low beams and reduce speed in fog.',
    relatedLessonId: 'defensive-driving'
  },
  {
    id: 'dd-009',
    category: 'defensive-driving',
    difficulty: 'intermediate',
    question:
      'Compared with daytime driving, at night you should generally...',
    options: [
      'Drive faster to spend less time on the road',
      'Reduce speed and increase following distance',
      'Use only parking lights',
      'Follow the vehicle ahead more closely'
    ],
    correctAnswerIndex: 1,
    explanation: {
      en: 'At night you can see less and hazards appear later, so driving slower and keeping more space compensates for reduced visibility. Following another vehicle closely at night hides hazards behind it.',
      es: 'De noche ves menos y los peligros aparecen más tarde, por lo que conducir más despacio y mantener más espacio compensa la visibilidad reducida. Seguir de cerca a otro vehículo de noche oculta los peligros que están detrás de él.'
    },
    source: { url: handbook, section: 'Special Driving Conditions', edition: 'FLHSMV' },
    reviewStatus: 'verified',
    tags: ['night-driving', 'visibility'],
    image: null,
    learningObjective: 'Adjust speed and spacing for night driving.',
    relatedLessonId: 'defensive-driving'
  },
  {
    id: 'dd-010',
    category: 'defensive-driving',
    difficulty: 'beginner',
    question: 'How should a driver treat pedestrians in a marked crosswalk?',
    options: [
      'Honk so they hurry across',
      'Yield the right of way to them',
      'Pass them on the shoulder',
      'Expect them to stop for vehicles'
    ],
    correctAnswerIndex: 1,
    explanation: {
      en: 'Pedestrians in a crosswalk have the right of way, and drivers must yield until they have crossed safely. Pressuring pedestrians with the horn can cause them to stumble or make unsafe choices.',
      es: 'Los peatones en un paso de cebra tienen prioridad de paso y los conductores deben ceder hasta que crucen de forma segura. Presionar a los peatones con la bocina puede hacer que tropiecen o tomen decisiones inseguras.'
    },
    source: { url: handbook, section: 'Sharing the Road', edition: 'FLHSMV' },
    reviewStatus: 'verified',
    tags: ['pedestrians', 'right-of-way'],
    image: null,
    learningObjective: 'Yield to pedestrians in crosswalks.',
    relatedLessonId: 'defensive-driving'
  },
  {
    id: 'dd-011',
    category: 'defensive-driving',
    difficulty: 'beginner',
    question:
      'If you feel sleepy while driving on a long trip, the safest action is to...',
    options: [
      'Open the window and keep going',
      'Turn up the radio for alertness',
      'Pull over in a safe place and rest',
      'Drive faster to arrive sooner'
    ],
    correctAnswerIndex: 2,
    explanation: {
      en: 'Drowsiness cannot be fixed by fresh air, music, or caffeine for long, and it slows your reactions like alcohol. The only reliable solution is to stop in a safe place and rest until you are alert.',
      es: 'La somnolencia no se corrige con aire fresco, música ni cafeína por mucho tiempo, y reduce tus reflejos como el alcohol. La única solución confiable es detenerte en un lugar seguro y descansar hasta estar alerta.'
    },
    source: { url: handbook, section: 'Defensive Driving', edition: 'FLHSMV' },
    reviewStatus: 'verified',
    tags: ['fatigue', 'rest-stops'],
    image: null,
    learningObjective: 'Recognize drowsy driving and stop to rest.',
    relatedLessonId: 'defensive-driving'
  },
  {
    id: 'dd-012',
    category: 'defensive-driving',
    difficulty: 'intermediate',
    question:
      'If another driver is behaving aggressively toward you, you should...',
    options: [
      'Challenge them so they back down',
      'Avoid eye contact and let them pass',
      'Speed up to stay ahead of them',
      'Brake suddenly to warn them'
    ],
    correctAnswerIndex: 1,
    explanation: {
      en: 'Reacting to an aggressive driver can escalate the situation and lead to a crash or confrontation. Staying calm, avoiding eye contact, and letting them go is the safest response.',
      es: 'Reaccionar ante un conductor agresivo puede empeorar la situación y provocar un choque o un enfrentamiento. Mantener la calma, evitar el contacto visual y dejarlo pasar es la respuesta más segura.'
    },
    source: { url: handbook, section: 'Defensive Driving', edition: 'FLHSMV' },
    reviewStatus: 'verified',
    tags: ['aggressive-driving', 'road-rage'],
    image: null,
    learningObjective: 'Respond safely to an aggressive driver.',
    relatedLessonId: 'defensive-driving'
  },
  {
    id: 'dd-013',
    category: 'defensive-driving',
    difficulty: 'intermediate',
    question: 'Keeping a "space cushion" around your vehicle means...',
    options: [
      'Driving in the middle of two lanes',
      'Leaving room on all sides to react to hazards',
      'Staying right next to other vehicles',
      'Avoiding the use of the brakes entirely'
    ],
    correctAnswerIndex: 1,
    explanation: {
      en: 'A space cushion is empty space on the front, sides, and rear of your car that gives you room to stop or swerve. Maintaining it reduces the chance that someone else\'s mistake becomes your crash.',
      es: 'Un colchón de espacio es el espacio vacío al frente, a los lados y detrás de tu auto que te da margen para frenar o esquivar. Mantenerlo reduce la probabilidad de que el error de otro se convierta en tu choque.'
    },
    source: { url: handbook, section: 'Defensive Driving', edition: 'FLHSMV' },
    reviewStatus: 'verified',
    tags: ['space-cushion', 'safety'],
    image: null,
    learningObjective: 'Maintain a space cushion around the vehicle.',
    relatedLessonId: 'defensive-driving'
  },
  {
    id: 'dd-014',
    category: 'defensive-driving',
    difficulty: 'beginner',
    question:
      'Turning on your headlights when it is raining or dim helps mainly to...',
    options: [
      'Save fuel during the trip',
      'Help other drivers see your vehicle',
      'Keep the road surface dry',
      'Cool the engine faster'
    ],
    correctAnswerIndex: 1,
    explanation: {
      en: 'Headlights make your vehicle more visible to others in rain, fog, or low light, which helps them judge your position and speed. Being seen is just as important as seeing the road yourself.',
      es: 'Los faros hacen que tu vehículo sea más visible para los demás con lluvia, niebla o poca luz, lo que les ayuda a calcular tu posición y velocidad. Que te vean es tan importante como ver tú la carretera.'
    },
    source: { url: handbook, section: 'Defensive Driving', edition: 'FLHSMV' },
    reviewStatus: 'verified',
    tags: ['headlights', 'visibility'],
    image: null,
    learningObjective: 'Use headlights to be seen in low visibility.',
    relatedLessonId: 'defensive-driving'
  },
  {
    id: 'dd-015',
    category: 'defensive-driving',
    difficulty: 'intermediate',
    question: 'Approaching an intersection, a defensive driver should...',
    options: [
      'Assume cross traffic will always stop',
      'Scan left, right, and ahead for hazards',
      'Accelerate to beat a changing light',
      'Rely only on the traffic signal'
    ],
    correctAnswerIndex: 1,
    explanation: {
      en: 'Even with a green light, other drivers may run the signal or make mistakes, so scanning all directions lets you react in time. Covering the brake and checking traffic as you enter is a core defensive habit.',
      es: 'Aun con luz verde, otros conductores pueden pasarse la señal o cometer errores, por lo que observar en todas las direcciones te permite reaccionar a tiempo. Cubrir el freno y revisar el tráfico al entrar es un hábito defensivo clave.'
    },
    source: { url: handbook, section: 'Defensive Driving', edition: 'FLHSMV' },
    reviewStatus: 'verified',
    tags: ['intersections', 'scanning'],
    image: null,
    learningObjective: 'Scan intersections for cross traffic hazards.',
    relatedLessonId: 'defensive-driving'
  },

  // ---------------------------------------------------------------------------
  // Alcohol & Drugs (ad-001 .. ad-015)
  // ---------------------------------------------------------------------------
  {
    id: 'ad-001',
    category: 'alcohol-drugs',
    difficulty: 'beginner',
    question:
      'In Florida, a driver who is 21 or older is considered impaired for DUI at what blood alcohol concentration (BAC)?',
    options: ['0.02 or higher', '0.05 or higher', '0.08 or higher', '0.10 or higher'],
    correctAnswerIndex: 2,
    explanation: {
      en: 'For drivers 21 and older in Florida, a BAC of 0.08 or higher is the legal threshold for DUI. Reaching that level while driving can lead to arrest and serious penalties.',
      es: 'Para los conductores de 21 años o más en Florida, un BAC de 0.08 o superior es el umbral legal de DUI. Alcanzar ese nivel mientras conduces puede llevar al arresto y a sanciones graves.'
    },
    source: { url: statutes, section: 'Chapter 316.193', edition: 'Florida Statutes' },
    reviewStatus: 'verified',
    tags: ['dui', 'bac'],
    image: null,
    learningObjective: 'Identify the legal BAC limit for drivers 21 and older.',
    relatedLessonId: 'alcohol-drugs'
  },
  {
    id: 'ad-002',
    category: 'alcohol-drugs',
    difficulty: 'beginner',
    question:
      'Florida\'s "zero tolerance" law means a driver under 21 with what BAC level can face DUI penalties?',
    options: ['0.02 or higher', '0.08 or higher', '0.10 or higher', '0.15 or higher'],
    correctAnswerIndex: 0,
    explanation: {
      en: 'For drivers under 21, Florida enforces a zero tolerance policy: a BAC of 0.02 or higher can result in DUI penalties. Even a small amount of alcohol can bring consequences for young drivers.',
      es: 'Para los conductores menores de 21 años, Florida aplica una política de tolerancia cero: un BAC de 0.02 o superior puede generar sanciones por DUI. Incluso una pequeña cantidad de alcohol puede traer consecuencias para los conductores jóvenes.'
    },
    source: { url: statutes, section: 'Chapter 322.2616', edition: 'Florida Statutes' },
    reviewStatus: 'verified',
    tags: ['dui', 'zero-tolerance', 'underage'],
    image: null,
    learningObjective: 'State the zero tolerance BAC level for drivers under 21.',
    relatedLessonId: 'alcohol-drugs'
  },
  {
    id: 'ad-003',
    category: 'alcohol-drugs',
    difficulty: 'intermediate',
    question:
      'Can a person be charged with DUI in Florida even with a BAC below 0.08?',
    options: [
      'No, only the BAC number matters',
      'Yes, if they are under the influence of alcohol or drugs that impair driving',
      'Only if the driver is under 21',
      'Only when driving at night'
    ],
    correctAnswerIndex: 1,
    explanation: {
      en: 'Florida law allows a DUI charge when a person is under the influence of alcohol, drugs, or substances that impair their ability to drive safely, regardless of the exact BAC. Impairment, not just a number, is what the law addresses.',
      es: 'La ley de Florida permite un cargo de DUI cuando una persona está bajo la influencia de alcohol, drogas o sustancias que afectan su capacidad de conducir con seguridad, sin importar el BAC exacto. La ley se refiere al impedimento, no solo a un número.'
    },
    source: { url: statutes, section: 'Chapter 316.193', edition: 'Florida Statutes' },
    reviewStatus: 'verified',
    tags: ['dui', 'impairment'],
    image: null,
    learningObjective: 'Understand that DUI can be based on impairment, not only BAC.',
    relatedLessonId: 'alcohol-drugs'
  },
  {
    id: 'ad-004',
    category: 'alcohol-drugs',
    difficulty: 'beginner',
    question: 'How does alcohol typically affect driving ability?',
    options: [
      'It improves reaction time',
      'It sharpens vision at night',
      'It reduces judgment, coordination, and reaction time',
      'It has no effect in small amounts'
    ],
    correctAnswerIndex: 2,
    explanation: {
      en: 'Alcohol slows the brain and body, hurting judgment, coordination, and reaction time. These effects begin before a driver feels them and make safe driving much harder.',
      es: 'El alcohol ralentiza el cerebro y el cuerpo, afectando el juicio, la coordinación y el tiempo de reacción. Estos efectos comienzan antes de que el conductor los perciba y dificultan mucho la conducción segura.'
    },
    source: { url: handbook, section: 'Alcohol and Drugs', edition: 'FLHSMV' },
    reviewStatus: 'verified',
    tags: ['alcohol', 'effects'],
    image: null,
    learningObjective: 'Describe how alcohol impairs driving skills.',
    relatedLessonId: 'alcohol-drugs'
  },
  {
    id: 'ad-005',
    category: 'alcohol-drugs',
    difficulty: 'beginner',
    question: 'Which of these can be a consequence of a DUI conviction in Florida?',
    options: [
      'No penalty at all on a first offense',
      'Fines, possible jail time, and license suspension',
      'Only a verbal warning',
      'A free course with no record kept'
    ],
    correctAnswerIndex: 1,
    explanation: {
      en: 'A DUI conviction in Florida can bring fines, possible jail time, license suspension, and required courses or equipment. Consequences can increase with repeat offenses and higher BAC readings.',
      es: 'Una condena por DUI en Florida puede traer multas, posible cárcel, suspensión de licencia y cursos o equipos obligatorios. Las consecuencias pueden aumentar con reincidencias y lecturas de BAC más altas.'
    },
    source: { url: statutes, section: 'Chapter 316.193', edition: 'Florida Statutes' },
    reviewStatus: 'verified',
    tags: ['dui', 'penalties'],
    image: null,
    learningObjective: 'Recognize common DUI consequences in Florida.',
    relatedLessonId: 'alcohol-drugs'
  },
  {
    id: 'ad-006',
    category: 'alcohol-drugs',
    difficulty: 'intermediate',
    question: 'An ignition interlock device in Florida is...',
    options: [
      'A device that checks the driver\'s breath before the car will start',
      'A premium stereo upgrade',
      'A GPS tracking system only',
      'A type of emergency brake'
    ],
    correctAnswerIndex: 0,
    explanation: {
      en: 'An ignition interlock requires the driver to provide a breath sample before the engine will start, helping prevent driving after drinking. Courts may order installation as a condition after certain DUI offenses.',
      es: 'Un dispositivo de bloqueo de encendido exige que el conductor dé una muestra de aliento antes de que el motor arranque, ayudando a evitar conducir tras beber. Los tribunales pueden ordenar su instalación como condición tras ciertos delitos de DUI.'
    },
    source: { url: statutes, section: 'Chapter 316.1938', edition: 'Florida Statutes' },
    reviewStatus: 'verified',
    tags: ['dui', 'ignition-interlock'],
    image: null,
    learningObjective: 'Explain what an ignition interlock device does.',
    relatedLessonId: 'alcohol-drugs'
  },
  {
    id: 'ad-007',
    category: 'alcohol-drugs',
    difficulty: 'advanced',
    question:
      'Under Florida\'s implied consent law, refusing to submit to a lawful breath, blood, or urine test...',
    options: [
      'Has no consequence for the driver',
      'Can result in suspension of your driver license',
      'Is always permitted with no penalty at all',
      'Removes the officer\'s authority to investigate'
    ],
    correctAnswerIndex: 1,
    explanation: {
      en: 'By driving in Florida, you consent to lawful tests of your breath, blood, or urine when properly requested. Refusing can lead to suspension of your driver license as a separate penalty.',
      es: 'Al conducir en Florida, aceptas someterte a pruebas legales de aliento, sangre u orina cuando se soliciten debidamente. Negarte puede provocar la suspensión de tu licencia de conducir como sanción aparte.'
    },
    source: { url: statutes, section: 'Chapter 316.1932', edition: 'Florida Statutes' },
    reviewStatus: 'verified',
    tags: ['dui', 'implied-consent'],
    image: null,
    learningObjective: 'Understand implied consent and refusal consequences.',
    relatedLessonId: 'alcohol-drugs'
  },
  {
    id: 'ad-008',
    category: 'alcohol-drugs',
    difficulty: 'intermediate',
    question: 'In Florida, an open container of alcohol is generally not allowed...',
    options: [
      'Inside a locked trunk',
      'In the passenger area of a motor vehicle on the road',
      'In a car parked and turned off in a driveway',
      'Inside a closed cooler kept in the trunk'
    ],
    correctAnswerIndex: 1,
    explanation: {
      en: 'Florida law generally prohibits an open container of alcohol in the passenger area of a vehicle being operated on the road. Locked trunks and places not normally occupied by passengers are treated differently.',
      es: 'La ley de Florida generalmente prohíbe un envase abierto de alcohol en el área de pasajeros de un vehículo que circula por la vía. Los baúles cerrados y los lugares que normalmente no ocupan pasajeros se tratan de forma distinta.'
    },
    source: { url: statutes, section: 'Chapter 316.1936', edition: 'Florida Statutes' },
    reviewStatus: 'verified',
    tags: ['open-container', 'alcohol'],
    image: null,
    learningObjective: 'Know where open alcohol containers are not allowed.',
    relatedLessonId: 'alcohol-drugs'
  },
  {
    id: 'ad-009',
    category: 'alcohol-drugs',
    difficulty: 'intermediate',
    question: 'Mixing alcohol with other drugs, including some medicines, usually...',
    options: [
      'Reduces the effects of the alcohol',
      'Increases impairment and risk',
      'Has no interaction at all',
      'Makes driving safer'
    ],
    correctAnswerIndex: 1,
    explanation: {
      en: 'Combining alcohol with drugs or medicines tends to multiply the impairing effects on the brain and body. This can make a driver far less able to see, decide, and react safely.',
      es: 'Combinar alcohol con drogas o medicamentos tiende a multiplicar los efectos que afectan el cerebro y el cuerpo. Esto puede reducir mucho la capacidad del conductor para ver, decidir y reaccionar con seguridad.'
    },
    source: { url: handbook, section: 'Alcohol and Drugs', edition: 'FLHSMV' },
    reviewStatus: 'verified',
    tags: ['drugs', 'impairment'],
    image: null,
    learningObjective: 'Recognize the risk of mixing alcohol with other drugs.',
    relatedLessonId: 'alcohol-drugs'
  },
  {
    id: 'ad-010',
    category: 'alcohol-drugs',
    difficulty: 'beginner',
    question: 'The safest plan when you will drink at an event is to...',
    options: [
      'Drink only beer so you stay sharp',
      'Designate a sober driver in advance',
      'Eat a big meal and then drive slowly',
      'Drink strong coffee before driving'
    ],
    correctAnswerIndex: 1,
    explanation: {
      en: 'Planning a sober driver ahead of time removes the risk of impaired driving entirely. Eating or switching drinks does not prevent impairment, so the sober driver plan is the safest.',
      es: 'Planear un conductor sobrio con anticipación elimina por completo el riesgo de conducir impedido. Comer o cambiar de bebida no evita el impedimento, por lo que el plan del conductor sobrio es el más seguro.'
    },
    source: { url: handbook, section: 'Alcohol and Drugs', edition: 'FLHSMV' },
    reviewStatus: 'verified',
    tags: ['prevention', 'designated-driver'],
    image: null,
    learningObjective: 'Plan a sober ride to prevent impaired driving.',
    relatedLessonId: 'alcohol-drugs'
  },
  {
    id: 'ad-011',
    category: 'alcohol-drugs',
    difficulty: 'intermediate',
    question: 'Which of these actually helps a person who has been drinking become sober?',
    options: ['Strong coffee', 'A cold shower', 'Time without more alcohol', 'Fresh outdoor air'],
    correctAnswerIndex: 2,
    explanation: {
      en: 'The body breaks down alcohol at its own steady rate, and only time lets a person become sober. Coffee, cold showers, and fresh air may make someone feel alert but do not remove the alcohol.',
      es: 'El cuerpo descompone el alcohol a su propio ritmo constante y solo el tiempo hace que una persona se sobriedad. El café, las duchas frías y el aire fresco pueden hacer que alguien se sienta alerta, pero no eliminan el alcohol.'
    },
    source: { url: 'https://www.nhtsa.gov/risky-driving/drunk-driving', section: 'Drunk Driving', edition: 'NHTSA' },
    reviewStatus: 'verified',
    tags: ['alcohol', 'myths'],
    image: null,
    learningObjective: 'Disprove common myths about sobering up.',
    relatedLessonId: 'alcohol-drugs'
  },
  {
    id: 'ad-012',
    category: 'alcohol-drugs',
    difficulty: 'intermediate',
    question:
      'Prescription or over-the-counter medicines can lead to a DUI when...',
    options: [
      'They are taken with food',
      'They impair your ability to drive safely',
      'They are taken in the morning',
      'They are legally sold without a prescription'
    ],
    correctAnswerIndex: 1,
    explanation: {
      en: 'A driver can be charged with DUI if a legally obtained medicine impairs their ability to drive safely. Reading labels and checking with a pharmacist helps you know whether a medicine can affect driving.',
      es: 'Un conductor puede ser acusado de DUI si un medicamento obtenido legalmente afecta su capacidad de conducir con seguridad. Leer las etiquetas y consultar con un farmacéutico ayuda a saber si un medicamento puede afectar la conducción.'
    },
    source: { url: handbook, section: 'Alcohol and Drugs', edition: 'FLHSMV' },
    reviewStatus: 'verified',
    tags: ['medicines', 'impairment'],
    image: null,
    learningObjective: 'Know that some medicines can impair driving.',
    relatedLessonId: 'alcohol-drugs'
  },
  {
    id: 'ad-013',
    category: 'alcohol-drugs',
    difficulty: 'advanced',
    question:
      'Causing a fatal crash while driving under the influence in Florida can lead to...',
    options: [
      'Only a small traffic fine',
      'Serious charges such as DUI manslaughter',
      'No charges if no one complains',
      'A warning letter by mail'
    ],
    correctAnswerIndex: 1,
    explanation: {
      en: 'When an impaired driver causes a death, Florida can bring severe charges such as DUI manslaughter. These offenses carry heavy penalties that increase with prior convictions.',
      es: 'Cuando un conductor impedido causa una muerte, Florida puede presentar cargos graves como homicidio involuntario por DUI. Estos delitos conllevan sanciones severas que aumentan con condenas previas.'
    },
    source: { url: statutes, section: 'Chapter 316.193', edition: 'Florida Statutes' },
    reviewStatus: 'verified',
    tags: ['dui', 'fatal-crash'],
    image: null,
    learningObjective: 'Understand the severity of DUI manslaughter.',
    relatedLessonId: 'alcohol-drugs'
  },
  {
    id: 'ad-014',
    category: 'alcohol-drugs',
    difficulty: 'intermediate',
    question:
      'A driver can be impaired by alcohol before noticing the effects because...',
    options: [
      'Alcohol has a strong taste that warns you',
      'Alcohol affects judgment first, so you may not realize you are impaired',
      'The body gives clear warnings in time',
      'Impairment only appears after many hours'
    ],
    correctAnswerIndex: 1,
    explanation: {
      en: 'Alcohol impairs the very judgment a person would use to notice impairment, so the effects often go unrecognized. This is why drivers should decide not to drink before driving, rather than judging their own condition.',
      es: 'El alcohol afecta justamente el juicio que una persona usaría para notar el impedimento, por lo que los efectos suelen pasar inadvertidos. Por eso los conductores deben decidir no beber antes de conducir, en lugar de juzgar su propia condición.'
    },
    source: { url: handbook, section: 'Alcohol and Drugs', edition: 'FLHSMV' },
    reviewStatus: 'verified',
    tags: ['alcohol', 'judgment'],
    image: null,
    learningObjective: 'Explain why impairment goes unnoticed.',
    relatedLessonId: 'alcohol-drugs'
  },
  {
    id: 'ad-015',
    category: 'alcohol-drugs',
    difficulty: 'intermediate',
    question: 'Alcohol commonly affects a driver by...',
    options: [
      'Improving night vision',
      'Reducing the ability to judge speed and distance',
      'Making reactions faster',
      'Increasing concentration on the road'
    ],
    correctAnswerIndex: 1,
    explanation: {
      en: 'Alcohol distorts perception, so drivers misjudge the speed of other vehicles and the distance to hazards. This faulty judgment leads to poor decisions that no amount of skill can correct.',
      es: 'El alcohol distorsiona la percepción, por lo que los conductores calculan mal la velocidad de otros vehículos y la distancia a los peligros. Ese mal juicio lleva a decisiones equivocadas que ninguna habilidad puede corregir.'
    },
    source: { url: handbook, section: 'Alcohol and Drugs', edition: 'FLHSMV' },
    reviewStatus: 'verified',
    tags: ['alcohol', 'perception'],
    image: null,
    learningObjective: 'Recognize how alcohol distorts speed and distance judgment.',
    relatedLessonId: 'alcohol-drugs'
  },

  // ---------------------------------------------------------------------------
  // Emergencies (em-001 .. em-015)
  // ---------------------------------------------------------------------------
  {
    id: 'em-001',
    category: 'emergencies',
    difficulty: 'intermediate',
    question:
      'If a tire suddenly blows out while you are driving, you should...',
    options: [
      'Brake as hard as possible immediately',
      'Hold the steering wheel firmly and ease off the accelerator',
      'Turn sharply off the road',
      'Accelerate to stabilize the car'
    ],
    correctAnswerIndex: 1,
    explanation: {
      en: 'A blowout can pull the car to one side, so grip the wheel firmly and release the accelerator to let the vehicle slow gradually. Hard braking or sharp steering can cause a loss of control.',
      es: 'Un reventón puede tirar el auto hacia un lado, así que sujeta el volante con firmeza y suelta el acelerador para que el vehículo reduzca la velocidad poco a poco. Frenar bruscamente o girar con fuerza puede hacerte perder el control.'
    },
    source: { url: handbook, section: 'Emergencies', edition: 'FLHSMV' },
    reviewStatus: 'verified',
    tags: ['blowout', 'control'],
    image: null,
    learningObjective: 'Respond correctly to a tire blowout.',
    relatedLessonId: 'emergencies'
  },
  {
    id: 'em-002',
    category: 'emergencies',
    difficulty: 'advanced',
    question: 'If your hydraulic brakes fail, you should first...',
    options: [
      'Shift to neutral and coast',
      'Pump the brake pedal firmly and repeatedly',
      'Turn off the engine immediately',
      'Accelerate to reach a hill'
    ],
    correctAnswerIndex: 1,
    explanation: {
      en: 'Pumping a hydraulic brake pedal may rebuild enough pressure to slow the vehicle. If that does not work, use the parking brake gradually and look for a safe place to stop.',
      es: 'Bombear el pedal de freno hidráulico puede volver a generar suficiente presión para reducir la velocidad. Si eso no funciona, usa el freno de mano poco a poco y busca un lugar seguro para detenerte.'
    },
    source: { url: handbook, section: 'Emergencies', edition: 'FLHSMV' },
    reviewStatus: 'verified',
    tags: ['brake-failure', 'control'],
    image: null,
    learningObjective: 'Respond to hydraulic brake failure.',
    relatedLessonId: 'emergencies'
  },
  {
    id: 'em-003',
    category: 'emergencies',
    difficulty: 'intermediate',
    question: 'If your vehicle starts to skid, what is the best response?',
    options: [
      'Brake as hard as you can',
      'Steer in the direction you want to go and avoid hard braking',
      'Accelerate sharply to regain grip',
      'Turn the wheel opposite to the skid'
    ],
    correctAnswerIndex: 1,
    explanation: {
      en: 'In a skid you should look and steer where you want the car to go while easing off the accelerator. Hard braking or overcorrecting the wheel usually makes the skid worse.',
      es: 'En un derrape debes mirar y dirigir el auto hacia donde quieres ir mientras sueltas el acelerador. Frenar con fuerza o girar el volante en exceso suele empeorar el derrape.'
    },
    source: { url: handbook, section: 'Emergencies', edition: 'FLHSMV' },
    reviewStatus: 'verified',
    tags: ['skid', 'control'],
    image: null,
    learningObjective: 'Recover safely from a skid.',
    relatedLessonId: 'emergencies'
  },
  {
    id: 'em-004',
    category: 'emergencies',
    difficulty: 'intermediate',
    question: 'Hydroplaning happens when...',
    options: [
      'The tires grip the road better than usual',
      'The tires ride on a film of water and lose contact with the road',
      'The engine floods with fuel',
      'The brakes get wet and work better'
    ],
    correctAnswerIndex: 1,
    explanation: {
      en: 'Hydroplaning occurs when water lifts the tires off the pavement so they no longer grip. With little or no traction, steering and braking stop responding normally.',
      es: 'La aquaplaning ocurre cuando el agua levanta los neumáticos del pavimento y dejan de agarrar. Con poca o ninguna tracción, la dirección y los frenos dejan de responder con normalidad.'
    },
    source: { url: handbook, section: 'Special Driving Conditions', edition: 'FLHSMV' },
    reviewStatus: 'verified',
    tags: ['hydroplaning', 'weather'],
    image: null,
    learningObjective: 'Understand what causes hydroplaning.',
    relatedLessonId: 'emergencies'
  },
  {
    id: 'em-005',
    category: 'emergencies',
    difficulty: 'intermediate',
    question: 'If your car begins to hydroplane, you should...',
    options: [
      'Brake hard to regain grip',
      'Slow down gradually and avoid sudden braking or steering',
      'Speed up to push through the water',
      'Turn the wheel quickly from side to side'
    ],
    correctAnswerIndex: 1,
    explanation: {
      en: 'When hydroplaning, ease off the accelerator and let the car slow until the tires regain contact with the road. Sudden braking or steering can trigger a spin in these low-traction conditions.',
      es: 'Al aquaplanear, suelta el acelerador y deja que el auto reduzca la velocidad hasta que los neumáticos vuelvan a tocar la carretera. Frenar o girar de repente puede provocar un trompo en estas condiciones de poca tracción.'
    },
    source: { url: handbook, section: 'Special Driving Conditions', edition: 'FLHSMV' },
    reviewStatus: 'verified',
    tags: ['hydroplaning', 'recovery'],
    image: null,
    learningObjective: 'Respond safely to hydroplaning.',
    relatedLessonId: 'emergencies'
  },
  {
    id: 'em-006',
    category: 'emergencies',
    difficulty: 'beginner',
    question: 'At a railroad crossing, a driver should...',
    options: [
      'Stop on the tracks if traffic is slow',
      'Never stop on the tracks and wait until there is room to fully cross',
      'Race the train to save time',
      'Ignore the lights if no train is visible'
    ],
    correctAnswerIndex: 1,
    explanation: {
      en: 'You should only start across a railroad crossing when there is room to clear the tracks completely. Stopping on the tracks leaves you trapped if a train approaches.',
      es: 'Solo debes comenzar a cruzar un paso a nivel cuando haya espacio para superar las vías por completo. Detenerte sobre las vías te deja atrapado si se aproxima un tren.'
    },
    source: { url: handbook, section: 'Railroad Crossings', edition: 'FLHSMV' },
    reviewStatus: 'verified',
    tags: ['railroad', 'crossing'],
    image: null,
    learningObjective: 'Keep railroad crossings clear.',
    relatedLessonId: 'emergencies'
  },
  {
    id: 'em-007',
    category: 'emergencies',
    difficulty: 'beginner',
    question:
      'When the crossing gates lower or the lights and sirens activate at a railroad crossing, you should...',
    options: [
      'Drive around the lowered gates',
      'Stop and wait until it is safe and the signal clears',
      'Speed across before the train arrives',
      'Honk and continue through'
    ],
    correctAnswerIndex: 1,
    explanation: {
      en: 'A lowered gate or active signal means a train is coming, and you must stop and wait until the signal clears. Driving around the gate is dangerous and illegal.',
      es: 'Una barrera bajada o una señal activa significa que viene un tren, y debes detenerte y esperar hasta que la señal se despeje. Rodear la barrera es peligroso e ilegal.'
    },
    source: { url: handbook, section: 'Railroad Crossings', edition: 'FLHSMV' },
    reviewStatus: 'verified',
    tags: ['railroad', 'signals'],
    image: null,
    learningObjective: 'Stop for active railroad crossing signals.',
    relatedLessonId: 'emergencies'
  },
  {
    id: 'em-008',
    category: 'emergencies',
    difficulty: 'beginner',
    question:
      'When an emergency vehicle with sirens and flashing lights approaches from behind, you should...',
    options: [
      'Speed up to stay ahead of it',
      'Pull to the right and stop until it passes',
      'Keep driving exactly as you were',
      'Stop in the middle of the road'
    ],
    correctAnswerIndex: 1,
    explanation: {
      en: 'Drivers must pull over to the right and stop so the emergency vehicle can pass quickly and safely. Blocking the road or speeding up can delay help and cause a crash.',
      es: 'Los conductores deben orillarse a la derecha y detenerse para que el vehículo de emergencia pase rápido y seguro. Bloquear la vía o acelerar puede retrasar la ayuda y provocar un choque.'
    },
    source: { url: handbook, section: 'Emergencies', edition: 'FLHSMV' },
    reviewStatus: 'verified',
    tags: ['emergency-vehicle', 'yielding'],
    image: null,
    learningObjective: 'Yield to approaching emergency vehicles.',
    relatedLessonId: 'emergencies'
  },
  {
    id: 'em-009',
    category: 'emergencies',
    difficulty: 'intermediate',
    question:
      'If you notice smoke or fire from your vehicle while driving, the best action is to...',
    options: [
      'Keep driving to reach a crowded area',
      'Pull over safely, turn off the engine, and get away from the vehicle',
      'Open the hood and look closely right away',
      'Park inside a garage to block the smoke'
    ],
    correctAnswerIndex: 1,
    explanation: {
      en: 'A vehicle fire can spread quickly and produce toxic smoke, so stop safely, shut off the engine, and move people away. Opening the hood can feed the fire with more oxygen and cause burns.',
      es: 'Un incendio en el vehículo puede propagarse rápido y producir humo tóxico, así que detente de forma segura, apaga el motor y aleja a las personas. Abrir el cofre puede avivar el fuego con más oxígeno y causar quemaduras.'
    },
    source: { url: handbook, section: 'Emergencies', edition: 'FLHSMV' },
    reviewStatus: 'verified',
    tags: ['fire', 'vehicle'],
    image: null,
    learningObjective: 'Respond to a vehicle fire safely.',
    relatedLessonId: 'emergencies'
  },
  {
    id: 'em-010',
    category: 'emergencies',
    difficulty: 'advanced',
    question: 'If the accelerator pedal sticks, you should...',
    options: [
      'Turn off the engine and lock the steering column',
      'Shift to neutral and brake while steering to a safe stop',
      'Ignore it and keep driving at speed',
      'Open the door and step out as you move'
    ],
    correctAnswerIndex: 1,
    explanation: {
      en: 'Shifting to neutral removes power to the wheels so you can brake, then steer to a safe place and stop. Turning the key to lock can disable the steering and power brakes, making things worse.',
      es: 'Cambiar a neutral quita la fuerza a las ruedas para que puedas frenar, luego dirigirte a un lugar seguro y detenerte. Girar la llave hasta el bloqueo puede desactivar la dirección y los frenos asistidos, empeorando la situación.'
    },
    source: { url: handbook, section: 'Emergencies', edition: 'FLHSMV' },
    reviewStatus: 'verified',
    tags: ['stuck-accelerator', 'control'],
    image: null,
    learningObjective: 'Handle a stuck accelerator pedal.',
    relatedLessonId: 'emergencies'
  },
  {
    id: 'em-011',
    category: 'emergencies',
    difficulty: 'advanced',
    question: 'If your vehicle goes into deep water, you should...',
    options: [
      'Wait until it fills completely before moving',
      'Unbuckle and escape through a window as the car begins to float',
      'Force the door open against the water pressure first',
      'Stay inside and only make phone calls'
    ],
    correctAnswerIndex: 1,
    explanation: {
      en: 'A car often stays afloat briefly, so the best chance to escape is through a window before water pressure seals the doors. Getting out early is far safer than waiting for the car to sink.',
      es: 'Un auto suele flotar brevemente, así que la mejor oportunidad de escapar es por una ventana antes de que la presión del agua selle las puertas. Salir temprano es mucho más seguro que esperar a que el auto se hunda.'
    },
    source: { url: handbook, section: 'Emergencies', edition: 'FLHSMV' },
    reviewStatus: 'needs-review',
    tags: ['water', 'escape'],
    image: null,
    learningObjective: 'Know how to escape a vehicle in water.',
    relatedLessonId: 'emergencies'
  },
  {
    id: 'em-012',
    category: 'emergencies',
    difficulty: 'beginner',
    question: 'If your car breaks down on the road, you should...',
    options: [
      'Leave it in the travel lane and walk away',
      'Move it off the road if possible and turn on the hazard lights',
      'Stand behind it in the traffic lane',
      'Turn off all lights so drivers are not distracted'
    ],
    correctAnswerIndex: 1,
    explanation: {
      en: 'Get the car off the road if you can and switch on the hazard lights to warn other drivers. If you can only stop in a lane, use signals and stay out of traffic while you get help.',
      es: 'Saca el auto de la vía si puedes y enciende las luces de emergencia para avisar a los demás conductores. Si solo puedes detenerte en un carril, usa las señales y mantente fuera del tráfico mientras consigues ayuda.'
    },
    source: { url: handbook, section: 'Emergencies', edition: 'FLHSMV' },
    reviewStatus: 'verified',
    tags: ['breakdown', 'hazard-lights'],
    image: null,
    learningObjective: 'Respond safely to a vehicle breakdown.',
    relatedLessonId: 'emergencies'
  },
  {
    id: 'em-013',
    category: 'emergencies',
    difficulty: 'advanced',
    question: 'To avoid brake fade on long, steep downgrades, you should...',
    options: [
      'Ride the brakes continuously all the way down',
      'Use a lower gear and brake in intervals',
      'Coast in neutral to save fuel',
      'Turn off the engine to save the brakes'
    ],
    correctAnswerIndex: 1,
    explanation: {
      en: 'Continuous braking overheats the brakes and reduces their grip, a condition called brake fade. Using a lower gear lets the engine help slow the car, so you only brake in short intervals.',
      es: 'Frenar de forma continua sobrecalienta los frenos y reduce su agarre, una condición llamada fatiga de frenos. Usar un cambio más bajo deja que el motor ayude a frenar el auto, así solo usas los frenos en intervalos cortos.'
    },
    source: { url: handbook, section: 'Special Driving Conditions', edition: 'FLHSMV' },
    reviewStatus: 'verified',
    tags: ['brakes', 'downgrade'],
    image: null,
    learningObjective: 'Prevent brake fade on steep downgrades.',
    relatedLessonId: 'emergencies'
  },
  {
    id: 'em-014',
    category: 'emergencies',
    difficulty: 'intermediate',
    question: 'If your headlights fail at night, you should...',
    options: [
      'Speed up to reach a town quickly',
      'Slow down, use any available lighting or signals, and ease off the road safely',
      'Turn on the interior lights and keep driving fast',
      'Stop suddenly in your lane'
    ],
    correctAnswerIndex: 1,
    explanation: {
      en: 'With no headlights, you should slow down, use hazard lights or turn signals to be seen, and get off the road at a safe spot. Stopping abruptly in a traffic lane risks being hit from behind.',
      es: 'Sin faros, debes reducir la velocidad, usar las luces de emergencia o los direccionales para que te vean, y salir de la vía en un lugar seguro. Detenerte de repente en un carril de tráfico te expone a un choque por detrás.'
    },
    source: { url: handbook, section: 'Emergencies', edition: 'FLHSMV' },
    reviewStatus: 'verified',
    tags: ['headlights', 'breakdown'],
    image: null,
    learningObjective: 'Respond to headlight failure at night.',
    relatedLessonId: 'emergencies'
  },
  {
    id: 'em-015',
    category: 'emergencies',
    difficulty: 'intermediate',
    question: 'If your engine overheats, you should...',
    options: [
      'Keep driving fast so air cools the engine',
      'Pull over safely and let it cool before checking',
      'Pour cold water on the engine right away',
      'Drive to the nearest hill and park on it'
    ],
    correctAnswerIndex: 1,
    explanation: {
      en: 'An overheating engine should be shut off in a safe place and allowed to cool before you inspect it. Opening a hot radiator or adding cold water can release scalding steam or crack the engine.',
      es: 'Un motor sobrecalentado debe apagarse en un lugar seguro y dejarse enfriar antes de revisarlo. Abrir un radiador caliente o añadir agua fría puede liberar vapor hirviente o agrietar el motor.'
    },
    source: { url: handbook, section: 'Emergencies', edition: 'FLHSMV' },
    reviewStatus: 'verified',
    tags: ['overheating', 'breakdown'],
    image: null,
    learningObjective: 'Handle an overheated engine safely.',
    relatedLessonId: 'emergencies'
  },

  // ---------------------------------------------------------------------------
  // Highways & Passing (hp-001 .. hp-015)
  // ---------------------------------------------------------------------------
  {
    id: 'hp-001',
    category: 'highways-passing',
    difficulty: 'beginner',
    question: 'When entering a highway from an entrance ramp, you should...',
    options: [
      'Stop at the end of the ramp and wait',
      'Use the acceleration lane to match traffic speed and merge safely',
      'Merge very slowly into the first lane',
      'Cross all lanes to the left immediately'
    ],
    correctAnswerIndex: 1,
    explanation: {
      en: 'The acceleration lane lets you build speed so you can merge at, or close to, the speed of highway traffic. Merging too slowly forces other drivers to brake and creates a hazard.',
      es: 'El carril de aceleración te permite ganar velocidad para incorporarte a la velocidad del tráfico de la autopista, o cerca de ella. Incorporarte demasiado despacio obliga a otros a frenar y crea un peligro.'
    },
    source: { url: handbook, section: 'Highways', edition: 'FLHSMV' },
    reviewStatus: 'verified',
    tags: ['merging', 'highway'],
    image: null,
    learningObjective: 'Merge onto a highway using the acceleration lane.',
    relatedLessonId: 'highways-passing'
  },
  {
    id: 'hp-002',
    category: 'highways-passing',
    difficulty: 'beginner',
    question: 'Who must yield when you are merging onto a highway?',
    options: [
      'The traffic already on the highway',
      'You, the merging driver',
      'Whichever car is faster',
      'No one, since the ramp has priority'
    ],
    correctAnswerIndex: 1,
    explanation: {
      en: 'Drivers on the highway are not required to make room for you, so the merging driver must yield and fit into a safe gap. Adjust your speed to the traffic rather than expecting it to adjust to you.',
      es: 'Los conductores que ya están en la autopista no están obligados a darte espacio, así que el conductor que se incorpora debe ceder y encajar en un hueco seguro. Ajusta tu velocidad al tráfico en lugar de esperar que el tráfico se ajuste a ti.'
    },
    source: { url: handbook, section: 'Highways', edition: 'FLHSMV' },
    reviewStatus: 'verified',
    tags: ['merging', 'right-of-way'],
    image: null,
    learningObjective: 'Yield to highway traffic when merging.',
    relatedLessonId: 'highways-passing'
  },
  {
    id: 'hp-003',
    category: 'highways-passing',
    difficulty: 'beginner',
    question: 'Under normal conditions, the proper side to pass another vehicle is...',
    options: ['On the right', 'On the left', 'On the shoulder', 'Wherever there is room'],
    correctAnswerIndex: 1,
    explanation: {
      en: 'Passing on the left is the standard, because other drivers expect it and the driver being passed can see you. Passing on the shoulder or the right is unsafe and often illegal.',
      es: 'Adelantar por la izquierda es lo estándar, porque los otros conductores lo esperan y quien es adelantado puede verte. Adelantar por el arcén o por la derecha es inseguro y a menudo ilegal.'
    },
    source: { url: handbook, section: 'Passing', edition: 'FLHSMV' },
    reviewStatus: 'verified',
    tags: ['passing', 'left'],
    image: null,
    learningObjective: 'Pass on the left under normal conditions.',
    relatedLessonId: 'highways-passing'
  },
  {
    id: 'hp-004',
    category: 'highways-passing',
    difficulty: 'intermediate',
    question: 'When entering an interstate highway from an entrance ramp, you should:',
    options: [
      'Stop at the end of the ramp and wait for a large gap in traffic',
      'Use the acceleration lane to reach a speed that matches highway traffic, then merge when it is safe',
      'Merge at the bottom of the ramp and let highway traffic adjust to you',
      'Drive slowly on the ramp and enter at the lowest possible speed'
    ],
    correctAnswerIndex: 1,
    explanation: {
      en: 'Entrance ramps lead into an acceleration lane. Use that lane to build up speed so it matches the traffic already on the highway, check your mirrors and blind spot, signal, and merge only when there is a safe gap. Stopping at the end of a ramp is dangerous because following traffic does not expect it.',
      es: 'Las rampas de acceso conducen a un carril de aceleración. Úsalo para ganar velocidad hasta igualar la del tráfico que ya circula por la autopista, revisa los espejos y el punto ciego, señaliza y fusiónate solo cuando haya un espacio seguro. Detenerse al final de la rampa es peligroso porque el tráfico que viene detrás no lo espera.'
    },
    source: { url: handbook, section: 'Freeway Driving', edition: 'FLHSMV' },
    reviewStatus: 'verified',
    tags: ['highways', 'merging', 'acceleration-lane'],
    image: null,
    learningObjective: 'Merge safely onto a highway using the acceleration lane.',
    relatedLessonId: 'highways-passing'
  },
  {
    id: 'hp-005',
    category: 'highways-passing',
    difficulty: 'beginner',
    question: 'A solid yellow line on your side of the road means...',
    options: [
      'Passing is allowed at any time',
      'You may not pass because visibility or road conditions are unsafe',
      'The road is a one-way street',
      'The speed limit is higher than normal'
    ],
    correctAnswerIndex: 1,
    explanation: {
      en: 'A solid yellow line on your side warns that passing is not permitted because the view ahead or the road layout is unsafe. A broken yellow line on your side means you may pass when it is clear.',
      es: 'Una línea amarilla continua de tu lado advierte que no se permite adelantar porque la visibilidad al frente o el trazado de la vía no son seguros. Una línea amarilla discontinua de tu lado significa que puedes adelantar cuando esté despejado.'
    },
    source: { url: handbook, section: 'Pavement Markings', edition: 'FLHSMV' },
    reviewStatus: 'verified',
    tags: ['markings', 'passing'],
    image: null,
    learningObjective: 'Interpret a solid yellow line for passing.',
    relatedLessonId: 'highways-passing'
  },
  {
    id: 'hp-006',
    category: 'highways-passing',
    difficulty: 'intermediate',
    question: 'Passing another vehicle is not allowed...',
    options: [
      'On any road at any time',
      'At railroad crossings and within certain distances of them',
      'Only when driving at night',
      'Only in the right lane'
    ],
    correctAnswerIndex: 1,
    explanation: {
      en: 'Passing near railroad crossings is prohibited because you cannot see or stop for a train in time. Other restricted areas include intersections, bridges, and tunnels where the view or space is limited.',
      es: 'Adelantar cerca de pasos a nivel está prohibido porque no puedes ver o detenerte a tiempo ante un tren. Otras zonas restringidas incluyen intersecciones, puentes y túneles donde la vista o el espacio son limitados.'
    },
    source: { url: handbook, section: 'Passing', edition: 'FLHSMV' },
    reviewStatus: 'verified',
    tags: ['passing', 'railroad'],
    image: null,
    learningObjective: 'Know where passing is prohibited.',
    relatedLessonId: 'highways-passing'
  },
  {
    id: 'hp-007',
    category: 'highways-passing',
    difficulty: 'beginner',
    question: 'When another vehicle is passing you, you should...',
    options: [
      'Speed up to prevent the pass',
      'Maintain your speed and stay in your lane',
      'Move onto the shoulder to help them',
      'Honk to warn the other driver'
    ],
    correctAnswerIndex: 1,
    explanation: {
      en: 'When being passed, hold a steady speed and stay in your lane so the other driver can complete the pass safely. Speeding up or drifting can cause the passing driver to run out of room.',
      es: 'Cuando te están adelantando, mantén una velocidad estable y permanece en tu carril para que el otro conductor complete el adelantamiento con seguridad. Acelerar o desviarte puede dejar sin espacio al conductor que adelanta.'
    },
    source: { url: handbook, section: 'Passing', edition: 'FLHSMV' },
    reviewStatus: 'verified',
    tags: ['passing', 'cooperation'],
    image: null,
    learningObjective: 'Cooperate safely when being passed.',
    relatedLessonId: 'highways-passing'
  },
  {
    id: 'hp-008',
    category: 'highways-passing',
    difficulty: 'intermediate',
    question: 'On a multi-lane highway, the left lane is generally...',
    options: [
      'For parking and stopping',
      'For passing and faster-moving traffic',
      'Only for trucks and buses',
      'For emergency stopping only'
    ],
    correctAnswerIndex: 1,
    explanation: {
      en: 'The left lane is intended for passing and for traffic moving faster than the other lanes. Staying in the left lane when not passing can slow traffic and encourage risky lane changes by others.',
      es: 'El carril izquierdo está destinado al adelantamiento y al tráfico que se mueve más rápido que los otros carriles. Permanecer en el carril izquierdo sin adelantar puede frenar el tráfico y provocar cambios de carril arriesgados por parte de otros.'
    },
    source: { url: handbook, section: 'Highways', edition: 'FLHSMV' },
    reviewStatus: 'verified',
    tags: ['lanes', 'passing'],
    image: null,
    learningObjective: 'Use the left lane properly on multi-lane highways.',
    relatedLessonId: 'highways-passing'
  },
  {
    id: 'hp-009',
    category: 'highways-passing',
    difficulty: 'beginner',
    question: 'Slower drivers on a multi-lane road should...',
    options: [
      'Stay in the left lane for safety',
      'Keep to the right lanes',
      'Drive in the middle lane at all times',
      'Change lanes frequently to stay alert'
    ],
    correctAnswerIndex: 1,
    explanation: {
      en: 'Slower vehicles belong in the right lanes so faster traffic can pass on the left. Staying left while driving slowly blocks traffic and creates an unsafe speed difference.',
      es: 'Los vehículos más lentos deben ir en los carriles derechos para que el tráfico más rápido pueda adelantar por la izquierda. Quedarse a la izquierda conduciendo despacio bloquea el tráfico y crea una diferencia de velocidad peligrosa.'
    },
    source: { url: handbook, section: 'Highways', edition: 'FLHSMV' },
    reviewStatus: 'verified',
    tags: ['lanes', 'slow-traffic'],
    image: null,
    learningObjective: 'Keep right when driving slower than traffic.',
    relatedLessonId: 'highways-passing'
  },
  {
    id: 'hp-010',
    category: 'highways-passing',
    difficulty: 'intermediate',
    question: 'Before passing on a two-lane road, you should check that...',
    options: [
      'The radio is turned down',
      'There is enough clear distance ahead and no oncoming traffic',
      'Your passengers agree with the decision',
      'The road surface is wet'
    ],
    correctAnswerIndex: 1,
    explanation: {
      en: 'On a two-lane road you must be sure you can complete the pass before any oncoming vehicle reaches you. A clear view and enough distance in front of the vehicle you pass are essential.',
      es: 'En una vía de dos carriles debes asegurarte de poder completar el adelantamiento antes de que llegue algún vehículo de frente. Una vista despejada y suficiente distancia por delante del vehículo que adelantas son esenciales.'
    },
    source: { url: handbook, section: 'Passing', edition: 'FLHSMV' },
    reviewStatus: 'verified',
    tags: ['passing', 'two-lane'],
    image: null,
    learningObjective: 'Judge safe passing distance on two-lane roads.',
    relatedLessonId: 'highways-passing'
  },
  {
    id: 'hp-011',
    category: 'highways-passing',
    difficulty: 'intermediate',
    question: 'When passing a large truck, you should...',
    options: [
      'Stay in its blind spot as long as possible',
      'Move through quickly and avoid lingering alongside it',
      'Pass on the shoulder to stay visible',
      'Follow closely first to build momentum'
    ],
    correctAnswerIndex: 1,
    explanation: {
      en: 'Trucks have long blind spots on their sides, so you should pass promptly and not linger alongside. Make sure you can see the truck cab in your mirror before you pull back in front of it.',
      es: 'Los camiones tienen largos puntos ciegos a los lados, así que debes adelantar con prontitud y no quedarte a su lado. Asegúrate de ver la cabina del camión en tu espejo antes de volver a incorporarte delante de él.'
    },
    source: { url: handbook, section: 'Sharing the Road', edition: 'FLHSMV' },
    reviewStatus: 'verified',
    tags: ['trucks', 'passing'],
    image: null,
    learningObjective: 'Pass large trucks safely.',
    relatedLessonId: 'highways-passing'
  },
  {
    id: 'hp-012',
    category: 'highways-passing',
    difficulty: 'intermediate',
    question: 'When leaving an interstate, you should...',
    options: [
      'Brake in the through lanes before the exit',
      'Signal early and move into the deceleration lane before slowing',
      'Exit from whichever lane is closest',
      'Stop at the top of the ramp to check traffic'
    ],
    correctAnswerIndex: 1,
    explanation: {
      en: 'Use the deceleration lane to slow down after leaving the main travel lanes so you do not disrupt faster traffic. Signalling early lets others know your intentions and keeps the exit safe.',
      es: 'Usa el carril de desaceleración para reducir la velocidad después de salir de los carriles principales para no interrumpir el tráfico rápido. Señalizar con anticipación avisa a los demás de tus intenciones y mantiene la salida segura.'
    },
    source: { url: handbook, section: 'Highways', edition: 'FLHSMV' },
    reviewStatus: 'verified',
    tags: ['exiting', 'highway'],
    image: null,
    learningObjective: 'Exit a highway using the deceleration lane.',
    relatedLessonId: 'highways-passing'
  },
  {
    id: 'hp-013',
    category: 'highways-passing',
    difficulty: 'advanced',
    question: 'The crossover areas in the median of a divided highway are...',
    options: [
      'Free U-turn lanes for any driver',
      'For emergency use only, not for regular turns',
      'Designated parking areas',
      'Legal passing zones'
    ],
    correctAnswerIndex: 1,
    explanation: {
      en: 'Median crossovers on divided highways are reserved for emergency and authorized vehicles, not for everyday turns. Using them for normal driving is dangerous and prohibited.',
      es: 'Los cruces en el camellón de las vías divididas están reservados para vehículos de emergencia y autorizados, no para giros cotidianos. Usarlos para la conducción normal es peligroso y está prohibido.'
    },
    source: { url: handbook, section: 'Highways', edition: 'FLHSMV' },
    reviewStatus: 'verified',
    tags: ['median', 'emergency-use'],
    image: null,
    learningObjective: 'Respect emergency-only median crossovers.',
    relatedLessonId: 'highways-passing'
  },
  {
    id: 'hp-014',
    category: 'highways-passing',
    difficulty: 'intermediate',
    question: 'When following a motorcycle on the highway, you should increase your following distance because...',
    options: [
      'Motorcycles are always slow',
      'A motorcycle can stop more quickly than a car',
      'They block your view of the road',
      'They use more fuel than cars'
    ],
    correctAnswerIndex: 1,
    explanation: {
      en: 'Motorcycles can brake and stop in a shorter distance than cars, so a bigger gap prevents you from rear-ending the rider. The extra space also gives the rider room to avoid surface hazards.',
      es: 'Las motocicletas pueden frenar y detenerse en menos distancia que los autos, así que un mayor espacio evita que choques por detrás con el motociclista. El espacio extra también le da margen al motociclista para esquivar peligros en la vía.'
    },
    source: { url: handbook, section: 'Sharing the Road', edition: 'FLHSMV' },
    reviewStatus: 'verified',
    tags: ['motorcycles', 'following-distance'],
    image: null,
    learningObjective: 'Keep extra distance behind motorcycles.',
    relatedLessonId: 'highways-passing'
  },
  {
    id: 'hp-015',
    category: 'highways-passing',
    difficulty: 'intermediate',
    question: 'Passing is dangerous and usually not allowed when...',
    options: [
      'Driving on a straight, open road',
      'Approaching a hill or curve where you cannot see far ahead',
      'The road ahead is clear for a long distance',
      'You are in the left lane on a wide highway'
    ],
    correctAnswerIndex: 1,
    explanation: {
      en: 'When you cannot see far enough ahead on a hill or curve, you cannot know if a vehicle is coming, so passing is unsafe. Restricted sight distance is the key reason these areas are marked as no-passing zones.',
      es: 'Cuando no puedes ver lo suficiente hacia adelante en una colina o curva, no puedes saber si viene un vehículo, por lo que adelantar es inseguro. La distancia de visión restringida es la razón clave por la que estas zonas se marcan como de no adelantamiento.'
    },
    source: { url: handbook, section: 'Passing', edition: 'FLHSMV' },
    reviewStatus: 'verified',
    tags: ['passing', 'sight-distance'],
    image: null,
    learningObjective: 'Avoid passing where sight distance is limited.',
    relatedLessonId: 'highways-passing'
  },

  // ---------------------------------------------------------------------------
  // Florida Laws (fl-001 .. fl-015)
  // ---------------------------------------------------------------------------
  {
    id: 'fl-001',
    category: 'florida-laws',
    difficulty: 'beginner',
    question: 'Florida\'s Move Over law requires drivers to...',
    options: [
      'Stop completely when passing any parked car',
      'Change lanes away from an emergency or service vehicle stopped with lights, if it is safe',
      'Honk when passing a stopped vehicle',
      'Speed up to pass stopped vehicles quickly'
    ],
    correctAnswerIndex: 1,
    explanation: {
      en: 'Florida\'s Move Over law tells drivers to move one lane away from stopped emergency or service vehicles displaying warning lights, when it is safe to do so. This protects officers, tow operators, and other workers at roadside.',
      es: 'La ley Move Over de Florida indica a los conductores moverse un carril alejándose de vehículos de emergencia o de servicio detenidos con luces de advertencia, cuando sea seguro hacerlo. Esto protege a agentes, operadores de grúa y otros trabajadores en la vía.'
    },
    source: { url: statutes, section: 'Chapter 316.126', edition: 'Florida Statutes' },
    reviewStatus: 'verified',
    tags: ['move-over', 'emergency-vehicles'],
    image: null,
    learningObjective: 'Apply Florida\'s Move Over law.',
    relatedLessonId: 'florida-laws'
  },
  {
    id: 'fl-002',
    category: 'florida-laws',
    difficulty: 'intermediate',
    question:
      'If you cannot safely change lanes under Florida\'s Move Over law, you should...',
    options: [
      'Speed up and pass quickly',
      'Reduce speed to 20 mph below the posted speed limit',
      'Stop in your lane until the vehicle moves',
      'Move closer to the stopped vehicle'
    ],
    correctAnswerIndex: 1,
    explanation: {
      en: 'When changing lanes is not possible, the law requires reducing speed to 20 mph below the posted limit while passing the stopped vehicle. This gives both you and roadside workers a safer margin.',
      es: 'Cuando no es posible cambiar de carril, la ley exige reducir la velocidad a 20 mph por debajo del límite publicado al pasar junto al vehículo detenido. Esto da un margen más seguro tanto a ti como a los trabajadores en la vía.'
    },
    source: { url: statutes, section: 'Chapter 316.126', edition: 'Florida Statutes' },
    reviewStatus: 'verified',
    tags: ['move-over', 'speed'],
    image: null,
    learningObjective: 'Reduce speed when unable to move over.',
    relatedLessonId: 'florida-laws'
  },
  {
    id: 'fl-003',
    category: 'florida-laws',
    difficulty: 'beginner',
    question: 'In Florida, the Class E license is...',
    options: [
      'For motorcycles only',
      'The standard license for driving non-commercial cars',
      'For commercial trucks and buses',
      'A license for operating boats'
    ],
    correctAnswerIndex: 1,
    explanation: {
      en: 'The Class E license is Florida\'s standard driver license for operating non-commercial cars and light trucks. Commercial and motorcycle operation require different license classes or endorsements.',
      es: 'La licencia Clase E es la licencia de conducir estándar de Florida para operar automóviles y camionetas no comerciales. La operación comercial y de motocicletas requiere otras clases o endosos.'
    },
    source: { url: statutes, section: 'Chapter 322', edition: 'Florida Statutes' },
    reviewStatus: 'verified',
    tags: ['license-classes', 'class-e'],
    image: null,
    learningObjective: 'Identify what a Class E license allows.',
    relatedLessonId: 'florida-laws'
  },
  {
    id: 'fl-004',
    category: 'florida-laws',
    difficulty: 'intermediate',
    question: 'Florida is a "no-fault" state for auto insurance. This means that...',
    options: [
      'No driver can ever be found at fault',
      'You first claim certain benefits from your own insurance after a crash',
      'Auto insurance is optional in Florida',
      'The police pay for damage in a crash'
    ],
    correctAnswerIndex: 1,
    explanation: {
      en: 'In a no-fault system, injured drivers usually collect certain benefits such as PIP from their own insurer first, regardless of who caused the crash. Fault can still matter later for other claims.',
      es: 'En un sistema sin culpa, los conductores lesionados normalmente cobran ciertos beneficios como el PIP de su propio seguro primero, sin importar quién causó el choque. La culpa aún puede importar después para otras reclamaciones.'
    },
    source: { url: handbook, section: 'Insurance', edition: 'FLHSMV' },
    reviewStatus: 'verified',
    tags: ['insurance', 'no-fault'],
    image: null,
    learningObjective: 'Understand Florida\'s no-fault insurance system.',
    relatedLessonId: 'florida-laws'
  },
  {
    id: 'fl-005',
    category: 'florida-laws',
    difficulty: 'intermediate',
    question: 'In Florida\'s point system, accumulating too many points...',
    options: [
      'Raises your speed limit allowance',
      'Can lead to suspension of your driver license',
      'Gives you a discount on insurance',
      'Has no effect on your driving record'
    ],
    correctAnswerIndex: 1,
    explanation: {
      en: 'Florida adds points to your record for certain traffic convictions, and too many points within a period can suspend your license. Points also affect insurance costs and your driving history.',
      es: 'Florida suma puntos a tu historial por ciertas condenas de tránsito, y demasiados puntos en un periodo pueden suspender tu licencia. Los puntos también afectan el costo del seguro y tu historial de conducción.'
    },
    source: { url: statutes, section: 'Chapter 322.27', edition: 'Florida Statutes' },
    reviewStatus: 'verified',
    tags: ['points', 'license-suspension'],
    image: null,
    learningObjective: 'Know the consequences of accumulating points.',
    relatedLessonId: 'florida-laws'
  },
  {
    id: 'fl-006',
    category: 'florida-laws',
    difficulty: 'beginner',
    question: 'Under Florida law, texting while driving is...',
    options: [
      'Allowed at red lights only',
      'Prohibited for drivers',
      'Allowed at any speed if hands are free',
      'Required in order to use voice features'
    ],
    correctAnswerIndex: 1,
    explanation: {
      en: 'Florida law prohibits typing or reading text messages while driving because it distracts the driver from the road. Even a brief glance away can be enough to cause a crash.',
      es: 'La ley de Florida prohíbe escribir o leer mensajes de texto mientras se conduce porque distrae al conductor de la vía. Incluso una mirada breve puede ser suficiente para provocar un choque.'
    },
    source: { url: statutes, section: 'Chapter 316.305', edition: 'Florida Statutes' },
    reviewStatus: 'verified',
    tags: ['distracted-driving', 'texting'],
    image: null,
    learningObjective: 'Know that texting while driving is prohibited.',
    relatedLessonId: 'florida-laws'
  },
  {
    id: 'fl-007',
    category: 'florida-laws',
    difficulty: 'intermediate',
    question: 'Florida prohibits the handheld use of a wireless phone...',
    options: [
      'Everywhere at all times',
      'In school and work zones',
      'Only on rural highways',
      'Only inside parking lots'
    ],
    correctAnswerIndex: 1,
    explanation: {
      en: 'Florida specifically prohibits handheld use of a wireless communication device in school and work zones. These areas require extra attention because children or workers are nearby.',
      es: 'Florida prohíbe específicamente el uso manual de un dispositivo de comunicación inalámbrico en zonas escolares y de trabajo. Estas zonas exigen mayor atención porque hay niños o trabajadores cerca.'
    },
    source: { url: statutes, section: 'Chapter 316.306', edition: 'Florida Statutes' },
    reviewStatus: 'verified',
    tags: ['distracted-driving', 'school-zone'],
    image: null,
    learningObjective: 'Know handheld phone rules in school and work zones.',
    relatedLessonId: 'florida-laws'
  },
  {
    id: 'fl-008',
    category: 'florida-laws',
    difficulty: 'beginner',
    question:
      'When a school bus stops with its red lights flashing on a two-lane road, you must...',
    options: [
      'Pass slowly while watching for children',
      'Stop until the lights stop flashing',
      'Honk to alert the children',
      'Continue if you do not see any children'
    ],
    correctAnswerIndex: 1,
    explanation: {
      en: 'On a two-lane road, traffic in both directions must stop for a school bus with its red lights flashing until the lights stop and children are clear. The flashing lights mean children are getting on or off.',
      es: 'En una vía de dos carriles, el tráfico en ambas direcciones debe detenerse ante un autobús escolar con luces rojas intermitentes hasta que las luces se apaguen y los niños estén a salvo. Las luces intermitentes significan que los niños suben o bajan.'
    },
    source: { url: statutes, section: 'Chapter 316.172', edition: 'Florida Statutes' },
    reviewStatus: 'verified',
    tags: ['school-bus', 'stopping'],
    image: null,
    learningObjective: 'Stop for school buses with red lights flashing.',
    relatedLessonId: 'florida-laws'
  },
  {
    id: 'fl-009',
    category: 'florida-laws',
    difficulty: 'beginner',
    question: 'Florida law requires that young children riding in a vehicle be...',
    options: [
      'Held on an adult\'s lap',
      'Secured in an approved child restraint seat',
      'Seated in the front passenger seat',
      'Left unrestrained if they stay quiet'
    ],
    correctAnswerIndex: 1,
    explanation: {
      en: 'Florida requires young children to be secured in an approved child restraint that fits their size and age. A properly installed child seat greatly reduces the risk of injury in a crash.',
      es: 'Florida exige que los niños pequeños vayan asegurados en un sistema de retención infantil aprobado y adecuado a su tamaño y edad. Una silla infantil bien instalada reduce mucho el riesgo de lesiones en un choque.'
    },
    source: { url: statutes, section: 'Chapter 316.613', edition: 'Florida Statutes' },
    reviewStatus: 'verified',
    tags: ['child-restraint', 'occupant-protection'],
    image: null,
    learningObjective: 'Know Florida\'s child restraint requirement.',
    relatedLessonId: 'florida-laws'
  },
  {
    id: 'fl-010',
    category: 'florida-laws',
    difficulty: 'intermediate',
    question: 'Florida\'s safety belt law generally requires...',
    options: [
      'Only the driver to buckle up',
      'Front-seat occupants and anyone under 18 to be belted',
      'No one to use a belt if the car is old',
      'Only back-seat passengers to be belted'
    ],
    correctAnswerIndex: 1,
    explanation: {
      en: 'Florida\'s safety belt law requires front-seat occupants to wear belts and all passengers under 18 to be buckled, regardless of where they sit. The driver is responsible for ensuring younger occupants are restrained.',
      es: 'La ley de cinturones de Florida exige que los ocupantes del asiento delantero usen cinturón y que todos los pasajeros menores de 18 años vayan sujetos, sin importar dónde se sienten. El conductor es responsable de que los ocupantes más jóvenes estén asegurados.'
    },
    source: { url: statutes, section: 'Chapter 316.614', edition: 'Florida Statutes' },
    reviewStatus: 'verified',
    tags: ['safety-belts', 'law'],
    image: null,
    learningObjective: 'Know who must wear a safety belt in Florida.',
    relatedLessonId: 'florida-laws'
  },
  {
    id: 'fl-011',
    category: 'florida-laws',
    difficulty: 'intermediate',
    question: 'Florida law requires drivers to maintain which type of insurance coverage?',
    options: [
      'No insurance at all for private cars',
      'Personal Injury Protection (PIP) and Property Damage Liability (PDL)',
      'Only health insurance',
      'Only collision coverage'
    ],
    correctAnswerIndex: 1,
    explanation: {
      en: 'Florida requires drivers to carry Personal Injury Protection and Property Damage Liability coverage to operate a vehicle. Driving without the required coverage can lead to penalties, including license suspension.',
      es: 'Florida exige que los conductores lleven cobertura de Protección de Lesiones Personales y de Responsabilidad por Daños a la Propiedad para operar un vehículo. Conducir sin la cobertura exigida puede acarrear sanciones, incluida la suspensión de la licencia.'
    },
    source: { url: statutes, section: 'Chapter 324.022', edition: 'Florida Statutes' },
    reviewStatus: 'verified',
    tags: ['insurance', 'requirements'],
    image: null,
    learningObjective: 'Identify Florida\'s required insurance coverage.',
    relatedLessonId: 'florida-laws'
  },
  {
    id: 'fl-012',
    category: 'florida-laws',
    difficulty: 'beginner',
    question: 'In Florida, a right turn on red is generally allowed...',
    options: [
      'Never under any circumstances',
      'After a full stop, unless a sign prohibits it',
      'Without stopping if the road is clear',
      'Only during nighttime hours'
    ],
    correctAnswerIndex: 1,
    explanation: {
      en: 'Florida generally allows a right turn on red after coming to a complete stop, unless a sign forbids it. You must still yield to pedestrians and to traffic that has the right of way.',
      es: 'Florida generalmente permite girar a la derecha con luz roja después de detenerse por completo, salvo que un letrero lo prohíba. Aun así debes ceder el paso a los peatones y al tráfico que tiene prioridad.'
    },
    source: { url: statutes, section: 'Chapter 316.075', edition: 'Florida Statutes' },
    reviewStatus: 'verified',
    tags: ['turns', 'red-light'],
    image: null,
    learningObjective: 'Know the rules for turning right on red.',
    relatedLessonId: 'florida-laws'
  },
  {
    id: 'fl-013',
    category: 'florida-laws',
    difficulty: 'intermediate',
    question: 'In certain cases, Florida allows some drivers to reduce points on their record by...',
    options: [
      'Paying no fines at all',
      'Completing an approved driving improvement or traffic course',
      'Ignoring tickets without consequence',
      'Driving faster to earn a clean record'
    ],
    correctAnswerIndex: 1,
    explanation: {
      en: 'Florida may allow eligible drivers to complete an approved driving improvement course to avoid having certain points added, depending on the offense and eligibility. Checking with the state agency confirms whether a driver qualifies.',
      es: 'Florida puede permitir que conductores elegibles completen un curso aprobado de mejoramiento de conducción para evitar que se sumen ciertos puntos, según la infracción y la elegibilidad. Consultar con la agencia estatal confirma si un conductor califica.'
    },
    source: { url: statutes, section: 'Chapter 318.14', edition: 'Florida Statutes' },
    reviewStatus: 'needs-review',
    tags: ['points', 'driver-improvement'],
    image: null,
    learningObjective: 'Understand how a driving course can affect points.',
    relatedLessonId: 'florida-laws'
  },
  {
    id: 'fl-014',
    category: 'florida-laws',
    difficulty: 'intermediate',
    question: 'In Florida, driving with a suspended or revoked license is...',
    options: [
      'Allowed if you drive slowly',
      'Illegal and can result in additional penalties',
      'Allowed for short trips to the store',
      'Only a warning with no penalty'
    ],
    correctAnswerIndex: 1,
    explanation: {
      en: 'Driving while your license is suspended or revoked is a separate offense that can add penalties on top of the original suspension. You must resolve the suspension and reinstate your license before driving.',
      es: 'Conducir con la licencia suspendida o revocada es un delito aparte que puede sumar sanciones además de la suspensión original. Debes resolver la suspensión y reactivar tu licencia antes de conducir.'
    },
    source: { url: statutes, section: 'Chapter 322.34', edition: 'Florida Statutes' },
    reviewStatus: 'verified',
    tags: ['license-suspension', 'offenses'],
    image: null,
    learningObjective: 'Know the consequences of driving with a suspended license.',
    relatedLessonId: 'florida-laws'
  },
  {
    id: 'fl-015',
    category: 'florida-laws',
    difficulty: 'beginner',
    question: 'Under Florida law, a driver involved in a crash is required to...',
    options: [
      'Leave the scene quickly to avoid traffic',
      'Stop, provide the required information, and give aid as required',
      'Drive home first and report later',
      'Call a friend instead of reporting'
    ],
    correctAnswerIndex: 1,
    explanation: {
      en: 'Florida law requires drivers involved in a crash to stop, exchange required information, and render aid as the situation demands. Leaving the scene of a crash with injury or damage can lead to serious charges.',
      es: 'La ley de Florida exige que los conductores involucrados en un choque se detengan, intercambien la información requerida y presten auxilio según lo demande la situación. Abandonar la escena de un choque con lesiones o daños puede llevar a cargos graves.'
    },
    source: { url: statutes, section: 'Chapter 316.062', edition: 'Florida Statutes' },
    reviewStatus: 'verified',
    tags: ['crash', 'duties'],
    image: null,
    learningObjective: 'Know the duties of a driver in a crash.',
    relatedLessonId: 'florida-laws'
  }
];

export default questions;
