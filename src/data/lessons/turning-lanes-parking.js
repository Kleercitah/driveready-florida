/** Lección: Giros, carriles y estacionamiento */
export const lesson = {
  id: 'turning-lanes-parking',
  categoryId: 'turning-lanes-parking',
  order: 5,
  number: '05',
  estimatedMinutes: 12,
  title: { en: 'Turning, Lanes & Parking', es: 'Giros, carriles y estacionamiento' },
  summary: {
    en: 'Clear turns, safe lane changes, and correct parking depend on signaling early and choosing the right lane. This lesson explains turn rules, U-turns, lane discipline, and how to park legally and safely at a curb.',
    es: 'Los giros claros, los cambios de carril seguros y el estacionamiento correcto dependen de señalizar con antelación y elegir el carril adecuado. Esta lección explica las reglas de giro, los giros en U, la disciplina de carril y cómo estacionar de forma legal y segura junto al bordillo.'
  },
  objectives: {
    en: [
      'Signal and execute right and left turns into the correct lane.',
      'Change lanes safely using mirrors, signals, and head checks.',
      'Understand when U-turns are allowed and when they are not.',
      'Park legally at curbs and identify where parking is prohibited.'
    ],
    es: [
      'Señalizar y ejecutar giros a la derecha y a la izquierda hacia el carril correcto.',
      'Cambiar de carril de forma segura usando espejos, direccionales y revisión de punto ciego.',
      'Entender cuándo se permiten los giros en U y cuándo no.',
      'Estacionar legalmente junto al bordillo e identificar dónde está prohibido.'
    ]
  },
  sections: [
    {
      id: 'signal-your-turns',
      title: { en: 'Signaling Your Intentions', es: 'Señalizar tus intenciones' },
      body: {
        en: 'Turn signals let other drivers and pedestrians know what you plan to do, and Florida law requires you to signal before turning or changing lanes. Signal at least 100 feet before a turn in normal city driving, and well in advance on highways so others have time to react.\n\nA signal is a promise, so use it only when you are actually going to make the movement. Signaling far ahead and then not turning confuses other drivers, and leaving a signal on by accident can cause someone to pull out in front of you.\n\nCancel your signal after completing the turn or lane change, and if a vehicle is in your blind spot, continue signaling until it is safe to move. Good signaling is a habit that prevents the most common kinds of urban crashes.',
        es: 'Los direccionales informan a otros conductores y peatones lo que piensas hacer, y la ley de Florida exige señalizar antes de girar o cambiar de carril. Señaliza al menos 100 pies antes de un giro en conducción urbana normal y con bastante antelación en autopistas para que los demás tengan tiempo de reaccionar.\n\nUn direccional es una promesa, así que úsalo solo cuando realmente vayas a hacer el movimiento. Señalizar con mucha antelación y luego no girar confunde a los demás conductores, y dejar el direccional encendido por error puede hacer que alguien se cruce delante de ti.\n\nApaga tu direccional después de completar el giro o cambio de carril, y si hay un vehículo en tu punto ciego, sigue señalizando hasta que sea seguro moverse. Señalizar bien es un hábito que evita los tipos más comunes de choques urbanos.'
      }
    },
    {
      id: 'right-and-left-turns',
      title: { en: 'Right and Left Turns', es: 'Giros a la derecha y a la izquierda' },
      body: {
        en: 'For a right turn, come close to the right curb or edge of the road, signal early, and turn into the nearest lane of the street you are entering. For a left turn, begin from the leftmost legal lane or a dedicated left-turn lane, then turn into the lane closest to the center line of the new road.\n\nWhen two vehicles turn from opposite directions into a multi-lane road, they may generally turn into different lanes at the same time, but each must stay within its own path. Staying in your own lane avoids side-swiping and keeps the turn predictable for everyone.\n\nTurning from the wrong lane, or turning wide into the far lane, is a common cause of intersection crashes. Choose your lane early, watch for pedestrians and cyclists in the crosswalk, and complete the turn without drifting across lane lines.',
        es: 'Para un giro a la derecha, acércate al bordillo derecho o al borde de la vía, señaliza con antelación y gira hacia el carril más cercano de la calle a la que entras. Para un giro a la izquierda, comienza desde el carril legal más a la izquierda o un carril exclusivo de giro a la izquierda, y luego gira hacia el carril más próximo a la línea central de la nueva vía.\n\nCuando dos vehículos giran desde direcciones opuestas hacia una vía de varios carriles, generalmente pueden girar hacia carriles distintos al mismo tiempo, pero cada uno debe mantenerse en su propia trayectoria. Mantenerte en tu carril evita roces laterales y hace el giro predecible para todos.\n\nGirar desde el carril equivocado, o abrir demasiado el giro hacia el carril lejano, es una causa común de choques en intersecciones. Elige tu carril con antelación, atento a peatones y ciclistas en el paso, y completa el giro sin cruzar las líneas de carril.'
      }
    },
    {
      id: 'u-turns',
      title: { en: 'U-Turns', es: 'Giros en U' },
      body: {
        en: 'A U-turn lets you reverse direction, and in Florida it is generally allowed unless a sign prohibits it or it is unsafe. You may not make a U-turn where you cannot see clearly, in the middle of a curve or hill, or in a business district where signs forbid it.\n\nBefore making a U-turn, signal, check for oncoming traffic, and make sure you can complete the turn without interfering with any other vehicle or pedestrian. Never make a U-turn across a divided highway except at an opening or crossover designed for that purpose.\n\nA U-turn that forces other drivers to brake or swerve is illegal even if no sign forbids it, because it is unsafe. When you are unsure whether a U-turn is allowed, choose a legal intersection or turn-around point instead.',
        es: 'Un giro en U te permite cambiar de dirección y en Florida generalmente se permite salvo que una señal lo prohíba o sea inseguro. No puedes hacer un giro en U donde no veas con claridad, en medio de una curva o una cuesta, ni en un distrito comercial donde las señales lo prohíban.\n\nAntes de hacer un giro en U, señaliza, revisa el tráfico en sentido contrario y asegúrate de que puedes completar el giro sin interferir con ningún otro vehículo o peatón. Nunca hagas un giro en U cruzando una autopista dividida salvo en una apertura o cruce diseñado para ese fin.\n\nUn giro en U que obliga a otros conductores a frenar o desviarse es ilegal aunque ninguna señal lo prohíba, porque es inseguro. Cuando dudes de si se permite un giro en U, elige una intersección legal o un punto de retorno.'
      }
    },
    {
      id: 'lane-changes',
      title: { en: 'Changing Lanes', es: 'Cambiar de carril' },
      body: {
        en: 'Lane changes should be smooth and deliberate, never sudden. Check your mirrors, signal, then do a quick head check over your shoulder to cover the blind spot that mirrors do not show. Move only when you can see that the adjacent lane is clear and there is enough space.\n\nMaintain your speed or adjust it slightly to match traffic during the change, and never cut off a vehicle that is already there. Weaving in and out of traffic to gain a few car lengths is risky and gains almost nothing on a typical trip.\n\nKeep to the right except when passing or preparing for a left turn, and use the correct lane for your direction of travel. On a multi-lane road, staying in one lane and driving predictably is safer than constant lane changes.',
        es: 'Los cambios de carril deben ser suaves y deliberados, nunca repentinos. Revisa los espejos, señaliza y luego haz una rápida mirada por encima del hombro para cubrir el punto ciego que los espejos no muestran. Muévete solo cuando veas que el carril contiguo está libre y hay espacio suficiente.\n\nMantén tu velocidad o ajústala ligeramente para igualar el tráfico durante el cambio, y nunca cortes el paso a un vehículo que ya está allí. Zigzaguear entre el tráfico para ganar unos pocos metros es arriesgado y apenas aporta nada en un viaje típico.\n\nMantente a la derecha salvo al adelantar o al prepararte para girar a la izquierda, y usa el carril correcto para tu dirección de circulación. En una vía de varios carriles, quedarte en un carril y conducir de forma predecible es más seguro que cambiar de carril constantemente.'
      }
    },
    {
      id: 'parking-and-curbs',
      title: { en: 'Parking and Curbs', es: 'Estacionamiento y bordillos' },
      body: {
        en: 'When parking on a public road, stop with your vehicle close to and parallel with the curb, and make sure you do not block driveways, fire hydrants, or crosswalks. Set the parking brake, turn off the engine, and remove the key before leaving the vehicle.\n\nOn a two-way street, park with the right wheels within a foot of the curb. When parking facing downhill, turn your front wheels toward the curb so the car rolls into the curb if the brake fails; facing uphill with a curb, turn the wheels away from the curb.\n\nBefore opening your door, check mirrors and look over your shoulder for cyclists and passing cars. A door opened into the path of a cyclist is a common and serious crash, so use the hand that is away from the door to open it, forcing your body to turn and look back.',
        es: 'Al estacionar en una vía pública, detén el vehículo cerca del bordillo y en paralelo a él, y asegúrate de no bloquear entradas, hidrantes ni pasos de peatones. Pon el freno de mano, apaga el motor y retira la llave antes de bajar del vehículo.\n\nEn una calle de doble sentido, estaciona con las ruedas derechas a menos de un pie del bordillo. Al estacionar cuesta abajo, gira las ruedas delanteras hacia el bordillo para que el auto ruede hacia él si falla el freno; cuesta arriba con bordillo, gira las ruedas en dirección contraria al bordillo.\n\nAntes de abrir la puerta, revisa los espejos y mira por encima del hombro por si hay ciclistas y autos que pasan. Abrir la puerta en la trayectoria de un ciclista es un choque frecuente y grave, así que usa la mano más alejada de la puerta para abrirla, obligando a tu cuerpo a girar y mirar atrás.'
      }
    },
    {
      id: 'no-parking-zones',
      title: { en: 'Where Parking Is Prohibited', es: 'Dónde está prohibido estacionar' },
      body: {
        en: 'You may not park where a sign or curb marking forbids it, and you must not park within an intersection, on a crosswalk, or on a sidewalk. Parking is also prohibited in front of a driveway, within 15 feet of a fire hydrant, and near stop signs or traffic signals where it would block the view.\n\nDo not park on a bridge, in a tunnel, or on the traveled portion of a highway unless it is an emergency. On a hill, in a curve, or anywhere your vehicle blocks other drivers from seeing traffic, parking is both illegal and dangerous.\n\nParking in a space reserved for people with disabilities without a proper permit can bring a substantial fine, and these spaces are enforced closely. Always check nearby signs and curb paint, since restrictions such as no parking during certain hours are common in business districts.',
        es: 'No puedes estacionar donde una señal o marca del bordillo lo prohíba, y no debes estacionar dentro de una intersección, sobre un paso de peatones ni sobre una acera. También está prohibido estacionar frente a una entrada, a menos de 15 pies de un hidrante y cerca de señales de alto o semáforos donde se bloquearía la visibilidad.\n\nNo estaciones en un puente, en un túnel ni en la parte de circulación de una autopista salvo en una emergencia. En una cuesta, en una curva o en cualquier lugar donde tu vehículo impida a otros conductores ver el tráfico, estacionar es ilegal y peligroso.\n\nEstacionar en un espacio reservado para personas con discapacidad sin el permiso adecuado puede acarrear una multa considerable, y estos espacios se vigilan de cerca. Revisa siempre las señales cercanas y la pintura del bordillo, ya que restricciones como no estacionar en ciertos horarios son comunes en los distritos comerciales.'
      }
    }
  ],
  examples: [
    {
      title: { en: 'A right turn into the near lane', es: 'Un giro a la derecha hacia el carril cercano' },
      body: {
        en: 'For a right turn, approach close to the right curb and turn into the nearest lane, not the far lane. Turning wide can cut off drivers in the second lane and is a frequent cause of intersection crashes.',
        es: 'Para un giro a la derecha, acércate al bordillo derecho y gira hacia el carril más cercano, no al lejano. Abrir el giro puede cortar el paso a los conductores del segundo carril y es una causa frecuente de choques en intersecciones.'
      }
    },
    {
      title: { en: 'Checking the blind spot', es: 'Revisar el punto ciego' },
      body: {
        en: 'Mirrors leave a gap beside your rear quarter panel. After signaling, a quick glance over your shoulder confirms that no car or cyclist is hiding there before you move into the next lane.',
        es: 'Los espejos dejan un hueco junto a tu panel trasero. Después de señalizar, una mirada rápida por encima del hombro confirma que no hay un auto o ciclista oculto allí antes de pasar al siguiente carril.'
      }
    }
  ],
  scenarios: [
    {
      title: { en: 'A left turn with oncoming traffic', es: 'Un giro a la izquierda con tráfico contrario' },
      prompt: {
        en: 'You have a green light and want to turn left, but oncoming cars keep coming. What should you do?',
        es: 'Tienes luz verde y quieres girar a la izquierda, pero siguen viniendo autos en sentido contrario. ¿Qué deberías hacer?'
      },
      resolution: {
        en: 'Stay in the intersection or wait for a safe gap and yield to oncoming traffic until it clears or the signal changes. A green light gives you permission to enter, but a left turn must still yield to traffic going straight.',
        es: 'Permanece en la intersección o espera un hueco seguro y cede el paso al tráfico contrario hasta que se despeje o cambie la señal. La luz verde te da permiso para entrar, pero un giro a la izquierda debe ceder el paso al tráfico que va recto.'
      }
    },
    {
      title: { en: 'Parking on a downhill slope', es: 'Estacionar en una pendiente cuesta abajo' },
      prompt: {
        en: 'You park on a two-way street facing downhill next to a curb. How should you turn the wheels?',
        es: 'Estacionas en una calle de doble sentido cuesta abajo junto a un bordillo. ¿Cómo debes girar las ruedas?'
      },
      resolution: {
        en: 'Turn the front wheels toward the curb so that if the vehicle rolls, the tire meets the curb and stops it. Set the parking brake as well, and remember that facing uphill with a curb you would turn the wheels away from it.',
        es: 'Gira las ruedas delanteras hacia el bordillo para que, si el vehículo rueda, el neumático toque el bordillo y lo detenga. Pon también el freno de mano, y recuerda que cuesta arriba con bordillo girarías las ruedas en dirección contraria a él.'
      }
    }
  ],
  commonMistakes: {
    en: [
      'Turning right into the far lane instead of the nearest one.',
      'Changing lanes with only a mirror check and no head check.',
      'Leaving a turn signal on after completing a turn or lane change.'
    ],
    es: [
      'Girar a la derecha hacia el carril lejano en lugar del más cercano.',
      'Cambiar de carril solo con el espejo y sin mirar por encima del hombro.',
      'Dejar el direccional encendido después de completar un giro o cambio de carril.'
    ]
  },
  vocabulary: [
    { en: 'Turn signal', es: 'Direccional', note: { en: 'The light that shows your intention to turn or change lanes.', es: 'La luz que muestra tu intención de girar o cambiar de carril.' } },
    { en: 'Blind spot', es: 'Punto ciego', note: { en: 'An area around your car that mirrors do not show.', es: 'Un área alrededor de tu auto que los espejos no muestran.' } },
    { en: 'U-turn', es: 'Giro en U', note: { en: 'A turn that reverses your direction of travel.', es: 'Un giro que invierte tu dirección de circulación.' } },
    { en: 'Curb', es: 'Bordillo', note: { en: 'The raised edge of the roadway that borders the sidewalk.', es: 'El borde elevado de la calzada que linda con la acera.' } },
    { en: 'Parallel parking', es: 'Estacionamiento en paralelo', note: { en: 'Parking close and parallel to the curb.', es: 'Estacionar cerca y en paralelo al bordillo.' } },
    { en: 'Parking brake', es: 'Freno de mano', note: { en: 'The brake that holds a parked vehicle in place.', es: 'El freno que mantiene un vehículo estacionado en su sitio.' } },
    { en: 'Fire hydrant', es: 'Hidrante', note: { en: 'A water connection for firefighters that you must not block.', es: 'Una conexión de agua para bomberos que no debes bloquear.' } },
    { en: 'Driveway', es: 'Entrada', note: { en: 'A private access point to a property that must remain clear.', es: 'Un acceso privado a una propiedad que debe quedar libre.' } }
  ],
  references: [
    {
      label: { en: 'Florida Driver License Handbook', es: 'Manual del Conductor de Florida' },
      url: 'https://www.flhsmv.gov/pdf/handbooks/englishdriverhandbook.pdf',
      section: { en: 'Turning, Lane Changes, and Parking', es: 'Giros, cambios de carril y estacionamiento' }
    },
    {
      label: { en: 'Florida Statutes, Chapter 316', es: 'Estatutos de Florida, Capítulo 316' },
      url: 'https://www.leg.state.fl.us/statutes/',
      section: { en: 'Turning and Stopping and Parking', es: 'Giros, detención y estacionamiento' }
    }
  ],
  quickCheck: [
    {
      question: { en: 'Into which lane should you complete a right turn?', es: '¿Hacia qué carril debes completar un giro a la derecha?' },
      options: [
        { en: 'The farthest lane with room.', es: 'El carril más lejano con espacio.' },
        { en: 'The nearest lane of the new street.', es: 'El carril más cercano de la nueva calle.' },
        { en: 'Any lane, as long as you signal.', es: 'Cualquier carril, siempre que señalices.' },
        { en: 'The left lane to keep moving.', es: 'El carril izquierdo para seguir avanzando.' }
      ],
      correctIndex: 1,
      explanation: {
        en: 'A right turn should end in the nearest lane so you do not cut across other lanes and conflict with other traffic.',
        es: 'Un giro a la derecha debe terminar en el carril más cercano para no cruzar otros carriles y conflictuar con el resto del tráfico.'
      }
    },
    {
      question: { en: 'Before changing lanes, what should you do after signaling and checking your mirrors?', es: 'Antes de cambiar de carril, ¿qué debes hacer después de señalizar y revisar los espejos?' },
      options: [
        { en: 'Speed up sharply.', es: 'Acelerar bruscamente.' },
        { en: 'Glance over your shoulder to check the blind spot.', es: 'Mirar por encima del hombro para revisar el punto ciego.' },
        { en: 'Flash your headlights.', es: 'Destellar los faros.' },
        { en: 'Honk to warn others.', es: 'Tocar el claxon para avisar.' }
      ],
      correctIndex: 1,
      explanation: {
        en: 'A quick head check covers the blind spot that mirrors do not show, helping you spot a vehicle or cyclist before you move.',
        es: 'Una mirada rápida por encima del hombro cubre el punto ciego que los espejos no muestran y te ayuda a ver un vehículo o ciclista antes de moverte.'
      }
    },
    {
      question: { en: 'When parking facing downhill next to a curb, how should you turn the front wheels?', es: 'Al estacionar cuesta abajo junto a un bordillo, ¿cómo debes girar las ruedas delanteras?' },
      options: [
        { en: 'Toward the curb.', es: 'Hacia el bordillo.' },
        { en: 'Away from the curb.', es: 'En dirección contraria al bordillo.' },
        { en: 'Straight ahead.', es: 'Rectas hacia adelante.' },
        { en: 'It does not matter.', es: 'No importa.' }
      ],
      correctIndex: 0,
      explanation: {
        en: 'Facing downhill, wheels turned toward the curb let the tire meet the curb and stop the car if it rolls.',
        es: 'Cuesta abajo, girar las ruedas hacia el bordillo hace que el neumático lo toque y detenga el auto si rueda.'
      }
    }
  ]
};

export default lesson;
