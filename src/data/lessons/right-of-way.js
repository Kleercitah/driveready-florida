/** Lección: Prioridad de paso */
export const lesson = {
  id: 'right-of-way',
  categoryId: 'right-of-way',
  order: 3,
  number: '03',
  estimatedMinutes: 12,
  title: { en: 'Right of Way', es: 'Prioridad de paso' },
  summary: {
    en: 'Right of way is not something you take; it is something you yield. This lesson explains who goes first at intersections, four-way stops, and crosswalks, and how to yield to emergency vehicles and pedestrians safely.',
    es: 'La prioridad de paso no se toma, se cede. Esta lección explica quién pasa primero en intersecciones, altos de cuatro vías y pasos de peatones, y cómo ceder el paso a vehículos de emergencia y peatones de forma segura.'
  },
  objectives: {
    en: [
      'Apply the rules for who proceeds first at intersections.',
      'Take turns correctly at four-way and uncontrolled intersections.',
      'Yield properly to pedestrians, cyclists, and emergency vehicles.',
      'Understand that right of way is given, never demanded.'
    ],
    es: [
      'Aplicar las reglas sobre quién avanza primero en las intersecciones.',
      'Tomar turnos correctamente en altos de cuatro vías e intersecciones sin control.',
      'Ceder el paso adecuadamente a peatones, ciclistas y vehículos de emergencia.',
      'Entender que la prioridad de paso se concede y nunca se exige.'
    ]
  },
  sections: [
    {
      id: 'intersections-basics',
      title: { en: 'How Intersections Work', es: 'Cómo funcionan las intersecciones' },
      body: {
        en: 'Right of way rules keep traffic moving in a predictable order when paths cross, and they exist to prevent confusion rather than to reward speed. The basic principle is that you yield to traffic already in the intersection and to traffic that has the legal priority, and you only proceed when it is safe.\n\nSignals, signs, and pavement markings usually tell you who goes first. Where none of them control the intersection, standard rules apply: yield to the vehicle on your right, and yield to traffic on the larger or main road when you are entering from a smaller one.\n\nA driver who has the right of way should still be ready to give it up to avoid a crash. The law may say one driver had priority, but that does not protect anyone from injury, so a defensive driver watches for others who may not yield.',
        es: 'Las reglas de prioridad de paso mantienen el tráfico en un orden predecible cuando las trayectorias se cruzan, y existen para evitar la confusión, no para premiar la velocidad. El principio básico es que cedes el paso al tráfico que ya está en la intersección y al que tiene la prioridad legal, y solo avanzas cuando es seguro.\n\nLos semáforos, las señales y las marcas del pavimento normalmente indican quién pasa primero. Donde ninguno de ellos controla la intersección, se aplican reglas estándar: cede el paso al vehículo de tu derecha y cede el paso al tráfico de la vía más grande o principal cuando entras desde una más pequeña.\n\nEl conductor que tiene la prioridad de paso aún debe estar listo para cederla y evitar un choque. La ley puede decir que un conductor tenía prioridad, pero eso no protege a nadie de las lesiones, así que el conductor defensivo vigila a quienes podrían no ceder.'
      }
    },
    {
      id: 'four-way-stops',
      title: { en: 'Four-Way Stops', es: 'Altos de cuatro vías' },
      body: {
        en: 'At a four-way stop, the first vehicle to stop is the first to go. If two vehicles arrive at about the same time, the driver on the left yields to the driver on the right. If several vehicles arrive together, each moves in turn, usually in a clockwise order.\n\nThe key is a full stop, not a rolling one. Once you have stopped, watch the other drivers to be sure they also intend to stop, because people sometimes misjudge who arrived first. Make eye contact or use a clear gesture when you are unsure.\n\nDo not wave another driver through if it would create confusion with other traffic. At a busy four-way stop, the safest approach is to take your turn predictably and to proceed only when the path across the intersection is truly clear.',
        es: 'En un alto de cuatro vías, el primer vehículo que se detiene es el primero que avanza. Si dos vehículos llegan casi al mismo tiempo, el conductor de la izquierda cede el paso al de la derecha. Si varios vehículos llegan juntos, cada uno avanza por turno, normalmente en orden de las agujas del reloj.\n\nLa clave es detenerse por completo, no solo reducir. Una vez detenido, observa a los demás conductores para asegurarte de que ellos también piensan detenerse, porque a veces las personas calculan mal quién llegó primero. Haz contacto visual o usa un gesto claro cuando tengas dudas.\n\nNo le indiques a otro conductor que pase si eso crea confusión con el resto del tráfico. En un alto de cuatro vías concurrido, el enfoque más seguro es tomar tu turno de forma predecible y avanzar solo cuando el cruce de la intersección esté realmente libre.'
      }
    },
    {
      id: 'uncontrolled-intersections',
      title: { en: 'Uncontrolled Intersections', es: 'Intersecciones sin control' },
      body: {
        en: 'An uncontrolled intersection has no signs or signals telling you who goes first. When two vehicles arrive at about the same time, the driver on the left must yield to the vehicle on the right. When you are entering a main road from a side road or driveway, you yield to traffic already on the main road.\n\nUncontrolled intersections often appear in residential areas where sightlines are limited by parked cars, hedges, or corners. Approach them slowly enough that you can stop if a vehicle, pedestrian, or cyclist appears, and cover the brake so your reaction is immediate.\n\nA vehicle turning left must also yield to oncoming traffic that is going straight or turning right. Being the first to arrive does not give a left-turning driver permission to cut across approaching traffic before it is safe.',
        es: 'Una intersección sin control no tiene señales ni semáforos que indiquen quién pasa primero. Cuando dos vehículos llegan casi al mismo tiempo, el conductor de la izquierda debe ceder el paso al vehículo de la derecha. Cuando entras a una vía principal desde una lateral o una entrada, cedes el paso al tráfico que ya está en la vía principal.\n\nLas intersecciones sin control suelen aparecer en zonas residenciales donde la visibilidad está limitada por autos estacionados, setos o esquinas. Acércate a una velocidad suficientemente baja para poder detenerte si aparece un vehículo, un peatón o un ciclista, y mantén el pie sobre el freno para reaccionar al instante.\n\nUn vehículo que gira a la izquierda también debe ceder el paso al tráfico en sentido contrario que sigue recto o gira a la derecha. Haber llegado primero no le da permiso al conductor que gira a la izquierda para cruzar el tráfico que se aproxima antes de que sea seguro.'
      }
    },
    {
      id: 'pedestrians',
      title: { en: 'Pedestrians and Crosswalks', es: 'Peatones y pasos de peatones' },
      body: {
        en: 'Pedestrians generally have the right of way in crosswalks and at intersections, whether or not the crosswalk is painted. You must yield and often must stop for a pedestrian who is in your lane or crossing toward it, and you should not pass a vehicle that has stopped for a pedestrian.\n\nBlind pedestrians may use a white cane or a guide dog, and they always have the right of way at a crosswalk even outside of one in some situations. Give them plenty of space and time, and never honk to hurry a pedestrian, since that can cause someone to stumble.\n\nA pedestrian who jaywalks, meaning crossing outside a crosswalk where there are signals, commits a violation, but drivers should still avoid hitting anyone. Yielding promptly avoids an emergency and keeps everyone safer, regardless of who technically has priority.',
        es: 'Los peatones generalmente tienen la prioridad de paso en los pasos de peatones y en las intersecciones, esté o no pintado el paso. Debes ceder y con frecuencia detenerte ante un peatón que está en tu carril o cruza hacia él, y no debes rebasar a un vehículo que se ha detenido por un peatón.\n\nLos peatones ciegos pueden usar un bastón blanco o un perro guía, y siempre tienen la prioridad de paso en un paso de peatones e incluso fuera de uno en ciertas situaciones. Dales bastante espacio y tiempo, y nunca toques el claxon para apurar a un peatón, ya que eso puede hacer que alguien tropiece.\n\nUn peatón que cruza fuera del paso, es decir, fuera de un cruce donde hay señales, comete una infracción, pero los conductores aún deben evitar atropellar a cualquiera. Ceder con prontitud evita una emergencia y mantiene a todos más seguros, sin importar quién tenga técnicamente la prioridad.'
      }
    },
    {
      id: 'emergency-vehicles',
      title: { en: 'Emergency and Special Vehicles', es: 'Vehículos de emergencia y especiales' },
      body: {
        en: 'When an emergency vehicle approaches with lights and a siren, pull over to the right edge of the road and stop until it passes. Do not block an intersection: if you are in one, clear it first and then pull over. If the emergency vehicle is on the other side of a divided highway, you may generally continue.\n\nAfter an emergency vehicle passes, check carefully before pulling back into traffic, since other emergency vehicles may be following. Never chase or follow an emergency vehicle closely to take advantage of the gap it creates.\n\nYou must also yield to school buses with flashing red lights and to vehicles such as postal trucks, garbage trucks, and buses that are making frequent stops. Give them room to stop and restart, and never pass a stopped school bus that is loading or unloading children.',
        es: 'Cuando un vehículo de emergencia se aproxima con luces y sirena, oríllate al borde derecho de la vía y detente hasta que pase. No bloquees una intersección: si estás dentro de una, despéjala primero y luego oríllate. Si el vehículo de emergencia está al otro lado de una autopista dividida, generalmente puedes continuar.\n\nDespués de que pase un vehículo de emergencia, revisa con cuidado antes de incorporarte de nuevo al tráfico, ya que pueden venir otros vehículos de emergencia. Nunca persigas ni sigas de cerca a un vehículo de emergencia para aprovechar el hueco que abre.\n\nTambién debes ceder el paso a los autobuses escolares con luces rojas intermitentes y a vehículos como camiones postales, camiones de basura y autobuses que hacen paradas frecuentes. Dales espacio para detenerse y reanudar la marcha, y nunca rebases un autobús escolar detenido que está subiendo o bajando niños.'
      }
    },
    {
      id: 'yielding-when-turning',
      title: { en: 'Yielding While Turning and Merging', es: 'Ceder el paso al girar e incorporarse' },
      body: {
        en: 'Drivers who are turning generally yield to traffic that is not turning. A left-turning driver waits for oncoming vehicles going straight or turning right, and a driver entering a road from a driveway or parking lot yields to all traffic on the road.\n\nWhen you merge from an on-ramp onto a highway, you yield to traffic already on the highway and use the ramp to match its speed. When lanes merge into one, drivers in the ending lane yield to those in the continuing lane, though cooperative drivers often take turns.\n\nCyclists and motorcyclists have the same rights and responsibilities as other drivers, so yield to them as you would to a car. Give them a full lane when possible and never squeeze past them, since they need room to avoid hazards like potholes and debris.',
        es: 'Los conductores que giran generalmente ceden el paso al tráfico que no gira. El conductor que gira a la izquierda espera a los vehículos en sentido contrario que van rectos o giran a la derecha, y el conductor que entra a una vía desde una entrada o un estacionamiento cede el paso a todo el tráfico de la vía.\n\nCuando te incorporas desde una rampa a una autopista, cedes el paso al tráfico que ya está en la autopista y usas la rampa para igualar su velocidad. Cuando los carriles se fusionan en uno, los conductores del carril que termina ceden el paso a los del carril que continúa, aunque los conductores cooperativos suelen tomar turnos.\n\nLos ciclistas y motociclistas tienen los mismos derechos y responsabilidades que los demás conductores, así que cédeles el paso como lo harías con un auto. Dales un carril completo cuando sea posible y nunca los rebases apretándolos, ya que necesitan espacio para evitar peligros como baches y escombros.'
      }
    }
  ],
  examples: [
    {
      title: { en: 'Two cars reach a four-way stop together', es: 'Dos autos llegan juntos a un alto de cuatro vías' },
      body: {
        en: 'When two vehicles stop at about the same time, the driver on the left yields to the driver on the right. If you are the one on the right, you may go first, but only after confirming the other driver is actually stopping.',
        es: 'Cuando dos vehículos se detienen casi al mismo tiempo, el conductor de la izquierda cede el paso al de la derecha. Si tú eres el de la derecha, puedes pasar primero, pero solo después de confirmar que el otro conductor realmente se está deteniendo.'
      }
    },
    {
      title: { en: 'Turning left across oncoming traffic', es: 'Girar a la izquierda cruzando el tráfico contrario' },
      body: {
        en: 'A driver turning left must yield to oncoming traffic going straight or turning right. Even with a green light, the left-turning driver waits for a safe gap instead of forcing oncoming cars to brake.',
        es: 'Un conductor que gira a la izquierda debe ceder el paso al tráfico contrario que va recto o gira a la derecha. Incluso con luz verde, el conductor que gira a la izquierda espera un hueco seguro en lugar de obligar a frenar a los autos que vienen.'
      }
    }
  ],
  scenarios: [
    {
      title: { en: 'An emergency vehicle approaches', es: 'Se aproxima un vehículo de emergencia' },
      prompt: {
        en: 'You are stopped at a red light in the middle of an intersection when an ambulance approaches from behind with lights and siren. What should you do?',
        es: 'Estás detenido en un semáforo en rojo en medio de una intersección cuando una ambulancia se aproxima por detrás con luces y sirena. ¿Qué deberías hacer?'
      },
      resolution: {
        en: 'Clear the intersection first by completing your movement when it is safe, then pull to the right and stop until the ambulance passes. Blocking the intersection would stop the emergency vehicle, so clearing it takes priority.',
        es: 'Despeja primero la intersección completando tu movimiento cuando sea seguro, luego oríllate a la derecha y detente hasta que pase la ambulancia. Bloquear la intersección detendría al vehículo de emergencia, así que despejarla tiene prioridad.'
      }
    },
    {
      title: { en: 'A car stopped for a pedestrian', es: 'Un auto detenido por un peatón' },
      prompt: {
        en: 'The car ahead of you stops near a crosswalk, but you cannot see any pedestrian. Should you pass it?',
        es: 'El auto delante de ti se detiene cerca de un paso de peatones, pero no ves a ningún peatón. ¿Deberías rebasarlo?'
      },
      resolution: {
        en: 'Do not pass. The stopped car may be yielding to a pedestrian, cyclist, or child you cannot yet see. Passing a vehicle stopped at a crosswalk is dangerous and generally prohibited, so wait until you can see the crosswalk is clear.',
        es: 'No lo rebases. El auto detenido puede estar cediendo el paso a un peatón, un ciclista o un niño que aún no ves. Rebasar a un vehículo detenido en un paso de peatones es peligroso y generalmente está prohibido, así que espera hasta ver que el paso esté libre.'
      }
    }
  ],
  commonMistakes: {
    en: [
      'Thinking right of way is something to take rather than to yield.',
      'Rolling through a four-way stop instead of making a full stop.',
      'Passing a vehicle that has stopped at a crosswalk for a pedestrian.'
    ],
    es: [
      'Pensar que la prioridad de paso es algo que se toma en lugar de ceder.',
      'Pasar por un alto de cuatro vías sin detenerse por completo.',
      'Rebasar a un vehículo que se ha detenido en un paso de peatones por un peatón.'
    ]
  },
  vocabulary: [
    { en: 'Right of way', es: 'Prioridad de paso', note: { en: 'The legal right to proceed first in a given situation.', es: 'El derecho legal a avanzar primero en una situación dada.' } },
    { en: 'Yield', es: 'Ceder el paso', note: { en: 'To let another road user go before you.', es: 'Dejar que otro usuario de la vía pase antes que tú.' } },
    { en: 'Uncontrolled intersection', es: 'Intersección sin control', note: { en: 'A crossing with no signs or signals.', es: 'Un cruce sin señales ni semáforos.' } },
    { en: 'Crosswalk', es: 'Paso de peatones', note: { en: 'The area where pedestrians cross the road.', es: 'El área donde los peatones cruzan la vía.' } },
    { en: 'Jaywalk', es: 'Cruzar fuera del paso', note: { en: 'To cross a road where crossing is not allowed.', es: 'Cruzar una vía donde no está permitido.' } },
    { en: 'Merge', es: 'Incorporarse', note: { en: 'To join a stream of traffic from a ramp or lane.', es: 'Unirse a un flujo de tráfico desde una rampa o carril.' } },
    { en: 'Siren', es: 'Sirena', note: { en: 'The audible warning used by emergency vehicles.', es: 'La advertencia sonora que usan los vehículos de emergencia.' } },
    { en: 'Space cushion', es: 'Espacio de seguridad', note: { en: 'The protective distance you keep around your vehicle.', es: 'La distancia protectora que mantienes alrededor de tu vehículo.' } }
  ],
  references: [
    {
      label: { en: 'Florida Driver License Handbook', es: 'Manual del Conductor de Florida' },
      url: 'https://www.flhsmv.gov/pdf/handbooks/englishdriverhandbook.pdf',
      section: { en: 'Right of Way', es: 'Prioridad de paso' }
    },
    {
      label: { en: 'Florida Statutes, Chapter 316', es: 'Estatutos de Florida, Capítulo 316' },
      url: 'https://www.leg.state.fl.us/statutes/',
      section: { en: 'Right-of-Way Rules', es: 'Reglas de prioridad de paso' }
    }
  ],
  quickCheck: [
    {
      question: { en: 'At a four-way stop, if two vehicles arrive at about the same time, who goes first?', es: 'En un alto de cuatro vías, si dos vehículos llegan casi al mismo tiempo, ¿quién pasa primero?' },
      options: [
        { en: 'The driver on the left.', es: 'El conductor de la izquierda.' },
        { en: 'The driver on the right.', es: 'El conductor de la derecha.' },
        { en: 'The larger vehicle.', es: 'El vehículo más grande.' },
        { en: 'The driver going straight.', es: 'El conductor que va recto.' }
      ],
      correctIndex: 1,
      explanation: {
        en: 'When two vehicles arrive together, the driver on the left yields to the driver on the right, who may proceed first.',
        es: 'Cuando dos vehículos llegan juntos, el conductor de la izquierda cede el paso al de la derecha, que puede avanzar primero.'
      }
    },
    {
      question: { en: 'What should you do when an emergency vehicle with lights and siren approaches from behind?', es: '¿Qué debes hacer cuando un vehículo de emergencia con luces y sirena se aproxima por detrás?' },
      options: [
        { en: 'Speed up to stay ahead of it.', es: 'Acelerar para mantenerte delante.' },
        { en: 'Stop wherever you are, including in an intersection.', es: 'Detenerte donde estés, incluso en una intersección.' },
        { en: 'Pull to the right edge and stop, after clearing any intersection.', es: 'Orillarte al borde derecho y detenerte, tras despejar cualquier intersección.' },
        { en: 'Follow it closely to get through traffic.', es: 'Seguirlo de cerca para avanzar en el tráfico.' }
      ],
      correctIndex: 2,
      explanation: {
        en: 'Pull to the right and stop, but clear an intersection first so you do not block the emergency vehicle.',
        es: 'Oríllate a la derecha y detente, pero despeja primero la intersección para no bloquear al vehículo de emergencia.'
      }
    },
    {
      question: { en: 'A car ahead of you stops at a crosswalk but no pedestrian is visible. What should you do?', es: 'Un auto delante de ti se detiene en un paso de peatones pero no se ve ningún peatón. ¿Qué debes hacer?' },
      options: [
        { en: 'Pass it quickly before traffic builds up.', es: 'Rebasarlo rápido antes de que se acumule el tráfico.' },
        { en: 'Not pass it, because a pedestrian may be hidden.', es: 'No rebasarlo, porque puede haber un peatón oculto.' },
        { en: 'Honk to warn the other driver.', es: 'Tocar el claxon para avisar al otro conductor.' },
        { en: 'Stop and wait regardless of the light.', es: 'Detenerte y esperar sin importar la luz.' }
      ],
      correctIndex: 1,
      explanation: {
        en: 'You should not pass a vehicle stopped at a crosswalk, because a pedestrian or cyclist may be hidden from your view.',
        es: 'No debes rebasar a un vehículo detenido en un paso de peatones, porque un peatón o ciclista puede estar oculto a tu vista.'
      }
    }
  ]
};

export default lesson;
