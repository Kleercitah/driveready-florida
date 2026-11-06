/** Lección: Leyes de tránsito de Florida */
export const lesson = {
  id: 'florida-laws',
  categoryId: 'florida-laws',
  order: 10,
  number: '10',
  estimatedMinutes: 12,
  title: { en: 'Florida Driving Laws', es: 'Leyes de tránsito de Florida' },
  summary: {
    en: 'Florida has its own driving laws that go beyond the general rules of the road. This lesson covers the Move Over law, school bus and school zone rules, the cell phone law, license classes, mandatory insurance, and the point system.',
    es: 'Florida tiene sus propias leyes de tránsito que van más allá de las reglas generales de la vía. Esta lección cubre la ley Move Over, las reglas de autobuses escolares y zonas escolares, la ley de teléfonos móviles, las clases de licencia, el seguro obligatorio y el sistema de puntos.'
  },
  objectives: {
    en: [
      'Apply the Move Over law when passing stopped emergency or service vehicles.',
      'Follow the rules for school buses and school zones.',
      'Understand Florida cell phone and texting restrictions.',
      'Identify license classes, insurance requirements, and the point system.'
    ],
    es: [
      'Aplicar la ley Move Over al pasar junto a vehículos de emergencia o de servicio detenidos.',
      'Seguir las reglas de los autobuses escolares y las zonas escolares.',
      'Entender las restricciones de Florida sobre teléfonos móviles y mensajes de texto.',
      'Identificar las clases de licencia, los requisitos de seguro y el sistema de puntos.'
    ]
  },
  sections: [
    {
      id: 'move-over-law',
      title: { en: 'The Move Over Law', es: 'La ley Move Over' },
      body: {
        en: 'Florida requires drivers to move over for emergency and service vehicles stopped on the side of the road with their lights on, such as law enforcement, fire, ambulance, tow trucks, and utility vehicles. If you are on a road with two or more lanes in your direction, move into a lane that is not next to the stopped vehicle.\n\nWhen you cannot move over safely because of traffic or the road layout, you must slow down to at least 20 mph below the posted speed limit and pass with care. The law applies on both divided and undivided roads, and it also covers sanitation and utility vehicles displaying warning lights.\n\nThe reason is simple: officers, tow operators, and utility workers are often standing on the shoulder with traffic rushing past. Moving over or slowing down gives them the space and time they need to work safely, and failing to do so can lead to a citation.',
        es: 'Florida exige que los conductores se aparten por los vehículos de emergencia y de servicio detenidos al borde de la vía con las luces encendidas, como los de las fuerzas del orden, bomberos, ambulancias, grúas y vehículos de servicios públicos. Si estás en una vía con dos o más carriles en tu dirección, muévete a un carril que no sea el contiguo al vehículo detenido.\n\nCuando no puedas apartarte con seguridad por el tráfico o la configuración de la vía, debes reducir al menos a 20 mph por debajo del límite de velocidad publicado y pasar con precaución. La ley se aplica tanto en vías divididas como no divididas y también cubre vehículos de saneamiento y de servicios públicos con luces de advertencia.\n\nLa razón es sencilla: los agentes, los operadores de grúas y los trabajadores de servicios públicos a menudo están de pie en el arcén mientras el tráfico pasa a toda velocidad. Apartarse o reducir les da el espacio y el tiempo que necesitan para trabajar con seguridad, y no hacerlo puede acarrear una multa.'
      }
    },
    {
      id: 'school-buses-and-zones',
      title: { en: 'School Buses and School Zones', es: 'Autobuses escolares y zonas escolares' },
      body: {
        en: 'When a school bus stops with its red lights flashing and its stop arm extended, you must stop in both directions and wait until the lights stop flashing, unless you are on a divided highway separated by a raised median or barrier. On such a divided highway, only traffic on the same side of the median as the bus must stop.\n\nYou must remain stopped until the red lights stop flashing and the stop arm is withdrawn, even if no children are visible. Passing a stopped school bus with active red lights is a serious violation because children may cross the road unexpectedly.\n\nSchool zones generally have a reduced speed limit, commonly around 20 mph, that applies when children are present or when the zone lights are flashing. Slow down before the zone begins and watch for crossing guards, since the goal is to protect children who may move without warning.',
        es: 'Cuando un autobús escolar se detiene con las luces rojas intermitentes encendidas y el brazo de parada extendido, debes detenerte en ambos sentidos y esperar hasta que las luces dejen de parpadear, salvo que estés en una autopista dividida por una mediana elevada o una barrera. En una autopista dividida así, solo debe detenerse el tráfico del mismo lado de la mediana que el autobús.\n\nDebes permanecer detenido hasta que las luces rojas dejen de parpadear y se retire el brazo de parada, aunque no se vean niños. Rebasar un autobús escolar detenido con las luces rojas activas es una infracción grave porque los niños pueden cruzar la vía de forma inesperada.\n\nLas zonas escolares suelen tener un límite de velocidad reducido, habitualmente alrededor de 20 mph, que se aplica cuando hay niños presentes o cuando las luces de la zona están intermitentes. Reduce antes de que empiece la zona y atento a los guardias de cruce, ya que el objetivo es proteger a los niños, que pueden moverse sin aviso.'
      }
    },
    {
      id: 'cell-phone-law',
      title: { en: 'Cell Phones and Texting', es: 'Teléfonos móviles y mensajes de texto' },
      body: {
        en: 'Florida law prohibits texting while driving as a primary offense, which means an officer can stop you for it without another reason. Typing, reading, and sending messages all count, and the law exists because texting takes your eyes, hands, and mind off the road.\n\nThe use of a handheld phone is prohibited in school zones and work zones, where you must put the device down and use only hands-free technology if it is allowed. In these areas, holding a phone while driving can lead to a citation even if you are not texting.\n\nUsing a phone when your full attention is needed is dangerous everywhere, even where it is technically permitted, such as a hands-free call. The safest habit is to set up navigation and messages before you drive and to leave the phone out of reach.',
        es: 'La ley de Florida prohíbe enviar mensajes de texto al conducir como infracción primaria, lo que significa que un agente puede detenerte por ello sin otro motivo. Escribir, leer y enviar mensajes cuentan, y la ley existe porque escribir mensajes aparta de la vía tus ojos, tus manos y tu mente.\n\nEl uso de un teléfono de forma manual está prohibido en zonas escolares y de obras, donde debes dejar el dispositivo y usar solo tecnología manos libres si está permitida. En estas zonas, sostener un teléfono mientras conduces puede acarrear una multa aunque no estés escribiendo mensajes.\n\nUsar el teléfono cuando se necesita toda tu atención es peligroso en todas partes, incluso donde técnicamente está permitido, como en una llamada manos libres. El hábito más seguro es configurar la navegación y los mensajes antes de conducir y dejar el teléfono fuera de tu alcance.'
      }
    },
    {
      id: 'license-classes',
      title: { en: 'License Classes', es: 'Clases de licencia' },
      body: {
        en: 'Florida issues driver licenses by class, and the standard one for most drivers is the Class E license, which allows you to drive a regular passenger car, a pickup, and similar non-commercial vehicles. A learner license, often called a Class E learner license, lets a beginner practice while driving with a supervising licensed driver who is at least 21.\n\nDrivers who need to operate larger or commercial vehicles must hold the appropriate commercial license, and motorcycle riders generally need a motorcycle endorsement on their license. Each class has its own tests and requirements.\n\nA Florida driver must carry a valid license while driving and show it when requested by law enforcement. Losing a license through suspension or revocation means you may not drive until the state restores it, and driving while suspended carries serious penalties.',
        es: 'Florida emite licencias de conducir por clases, y la estándar para la mayoría de los conductores es la licencia Clase E, que permite conducir un automóvil de pasajeros normal, una camioneta ligera y vehículos no comerciales similares. Una licencia de aprendiz, a menudo llamada licencia de aprendiz Clase E, permite a un principiante practicar mientras conduce acompañado por un conductor con licencia supervisor de al menos 21 años.\n\nLos conductores que necesitan manejar vehículos más grandes o comerciales deben tener la licencia comercial correspondiente, y los motociclistas generalmente necesitan un aval de motocicleta en su licencia. Cada clase tiene sus propias pruebas y requisitos.\n\nTodo conductor de Florida debe llevar una licencia válida mientras conduce y mostrarla cuando lo solicite una autoridad. Perder la licencia por suspensión o revocación significa que no puedes conducir hasta que el estado la restablezca, y conducir con la licencia suspendida conlleva sanciones graves.'
      }
    },
    {
      id: 'insurance-and-no-fault',
      title: { en: 'Insurance and No-Fault', es: 'Seguro y no-fault' },
      body: {
        en: 'Florida is a no-fault insurance state, which means that after a crash your own insurance pays for certain of your injuries first, regardless of who caused the crash. Drivers must carry Personal Injury Protection, which covers a portion of medical costs and lost income, and Property Damage Liability for damage to others property.\n\nYou must have valid insurance to register a vehicle and to drive legally, and driving without it can lead to fines, suspension of your license and registration, and higher costs later. Proof of coverage is required in many situations, including when you register or renew a vehicle.\n\nNo-fault does not mean no one is responsible for unsafe driving. A seriously injured person may still pursue a claim against the driver who caused the crash, and a driver whose unsafe actions caused harm can face both civil and criminal consequences.',
        es: 'Florida es un estado de seguro no-fault, lo que significa que tras un choque tu propio seguro paga primero ciertas lesiones tuyas, sin importar quién causó el choque. Los conductores deben contratar Protección de Lesiones Personales, que cubre una parte de los gastos médicos y los ingresos perdidos, y Responsabilidad por Daños a la Propiedad por daños a la propiedad de otros.\n\nDebes tener un seguro válido para registrar un vehículo y conducir legalmente, y conducir sin él puede acarrear multas, la suspensión de tu licencia y matrícula, y costos más altos después. La prueba de cobertura se exige en muchas situaciones, incluido el registro o la renovación de un vehículo.\n\nNo-fault no significa que nadie sea responsable por una conducción insegura. Una persona gravemente lesionada aún puede reclamar al conductor que causó el choque, y un conductor cuyas acciones inseguras causaron daño puede enfrentar consecuencias tanto civiles como penales.'
      }
    },
    {
      id: 'point-system',
      title: { en: 'The Point System', es: 'El sistema de puntos' },
      body: {
        en: 'Florida uses a point system to track traffic violations, and points are added to your driving record for convictions such as speeding and running a red light. The number of points depends on the type and severity of the violation, and more serious violations carry more points.\n\nIf you accumulate too many points in a period of time, your license can be suspended. For example, a driver who reaches 12 points within 12 months generally faces a suspension, and higher totals over longer periods bring longer suspensions. The exact thresholds are set by Florida law and your driving record can be checked with the state.\n\nPoints stay on your record for a set time and can raise your insurance costs. Some drivers can reduce points by completing an approved driving course, but this option is limited and does not erase serious violations. Safe driving is the only way to keep a clean record.',
        es: 'Florida usa un sistema de puntos para registrar las infracciones de tránsito, y los puntos se suman a tu historial de conducción por condenas como exceso de velocidad y pasarse un semáforo en rojo. El número de puntos depende del tipo y la gravedad de la infracción, y las infracciones más graves conllevan más puntos.\n\nSi acumulas demasiados puntos en un periodo de tiempo, tu licencia puede suspenderse. Por ejemplo, un conductor que llega a 12 puntos en 12 meses generalmente enfrenta una suspensión, y totales más altos en periodos más largos traen suspensiones más prolongadas. Los umbrales exactos los fija la ley de Florida y puedes consultar tu historial de conducción con el estado.\n\nLos puntos permanecen en tu historial durante un tiempo determinado y pueden aumentar tus costos de seguro. Algunos conductores pueden reducir puntos completando un curso de manejo aprobado, pero esta opción es limitada y no borra las infracciones graves. Conducir con seguridad es la única forma de mantener un historial limpio.'
      }
    },
    {
      id: 'other-florida-rules',
      title: { en: 'Other Florida Rules to Know', es: 'Otras reglas de Florida que debes conocer' },
      body: {
        en: 'Florida permits a right turn on a steady red light after a complete stop unless a sign prohibits it, and it also requires seat belts and federally approved child restraints for young children. These rules combine with the general laws of the road you have already learned.\n\nA driver must stop for a pedestrian in a crosswalk, obey a flagger in a work zone, and use headlights in rain and from sunset to sunrise. Driving while your license is suspended, reckless driving, and street racing are all serious offenses with severe penalties.\n\nLocal governments may add their own rules, so always follow posted signs, even if they differ from what you learned elsewhere. Knowing both the state law and the local sign is part of being a responsible Florida driver, and when a sign and a habit conflict, the sign controls.',
        es: 'Florida permite girar a la derecha con luz roja fija después de detenerse por completo, salvo que una señal lo prohíba, y también exige cinturones de seguridad y sillas infantiles aprobadas federalmente para los niños pequeños. Estas reglas se combinan con las leyes generales de la vía que ya has aprendido.\n\nUn conductor debe detenerse ante un peatón en un paso, obedecer a un abanderado en una zona de obras y usar los faros con lluvia y desde el atardecer hasta el amanecer. Conducir con la licencia suspendida, la conducción temeraria y las carreras callejeras son delitos graves con sanciones severas.\n\nLos gobiernos locales pueden añadir sus propias reglas, así que sigue siempre las señales publicadas, aunque difieran de lo que aprendiste en otro lugar. Conocer tanto la ley estatal como la señal local es parte de ser un conductor responsable en Florida, y cuando una señal y un hábito entran en conflicto, la señal manda.'
      }
    }
  ],
  examples: [
    {
      title: { en: 'A tow truck on the shoulder', es: 'Una grúa en el arcén' },
      body: {
        en: 'If a tow truck is stopped with its lights on and you are on a multi-lane road, move over a lane away from it. If you cannot move over safely, slow to at least 20 mph below the posted limit and pass with care.',
        es: 'Si una grúa está detenida con las luces encendidas y estás en una vía de varios carriles, cámbiate un carril para alejarte de ella. Si no puedes apartarte con seguridad, reduce al menos a 20 mph por debajo del límite publicado y pasa con precaución.'
      }
    },
    {
      title: { en: 'A school bus with red lights', es: 'Un autobús escolar con luces rojas' },
      body: {
        en: 'On a two-lane road, all traffic in both directions must stop for a school bus with flashing red lights and its stop arm out. Stay stopped until the lights stop flashing, even if you see no children.',
        es: 'En una vía de dos carriles, todo el tráfico en ambos sentidos debe detenerse ante un autobús escolar con luces rojas intermitentes y el brazo de parada extendido. Permanece detenido hasta que las luces dejen de parpadear, aunque no veas niños.'
      }
    }
  ],
  scenarios: [
    {
      title: { en: 'Passing a stopped emergency vehicle', es: 'Pasar junto a un vehículo de emergencia detenido' },
      prompt: {
        en: 'A patrol car is stopped on the shoulder with its lights flashing, and heavy traffic prevents you from changing lanes. What should you do?',
        es: 'Un auto patrulla está detenido en el arcén con las luces encendidas y el tráfico denso te impide cambiar de carril. ¿Qué deberías hacer?'
      },
      resolution: {
        en: 'Slow down to at least 20 mph below the posted speed limit and pass with care, because you cannot move over. This satisfies the Move Over law and gives the officer room to work safely.',
        es: 'Reduce al menos a 20 mph por debajo del límite de velocidad publicado y pasa con precaución, ya que no puedes cambiarte de carril. Esto cumple con la ley Move Over y le da al agente espacio para trabajar con seguridad.'
      }
    },
    {
      title: { en: 'A school bus on a divided highway', es: 'Un autobús escolar en una autopista dividida' },
      prompt: {
        en: 'A school bus stops with flashing red lights on the other side of a highway divided by a raised median. Must you stop?',
        es: 'Un autobús escolar se detiene con luces rojas intermitentes al otro lado de una autopista dividida por una mediana elevada. ¿Debes detenerte?'
      },
      resolution: {
        en: 'Generally no. On a divided highway separated by a raised median or barrier, only traffic on the same side as the bus must stop. On a two-lane road, traffic in both directions must stop.',
        es: 'Generalmente no. En una autopista dividida por una mediana elevada o una barrera, solo debe detenerse el tráfico del mismo lado que el autobús. En una vía de dos carriles, debe detenerse el tráfico en ambos sentidos.'
      }
    }
  ],
  commonMistakes: {
    en: [
      'Passing a stopped emergency or service vehicle without moving over or slowing down.',
      'Driving past a school bus with its red lights flashing on a two-lane road.',
      'Driving without the required insurance or with a suspended license.'
    ],
    es: [
      'Pasar junto a un vehículo de emergencia o de servicio detenido sin apartarse ni reducir.',
      'Pasar junto a un autobús escolar con las luces rojas intermitentes en una vía de dos carriles.',
      'Conducir sin el seguro requerido o con la licencia suspendida.'
    ]
  },
  vocabulary: [
    { en: 'Move Over law', es: 'Ley Move Over', note: { en: 'A law requiring drivers to move over or slow for stopped emergency and service vehicles.', es: 'Una ley que exige a los conductores apartarse o reducir por los vehículos de emergencia y de servicio detenidos.' } },
    { en: 'Class E license', es: 'Licencia Clase E', note: { en: 'The standard Florida license for non-commercial driving.', es: 'La licencia estándar de Florida para la conducción no comercial.' } },
    { en: 'No-fault', es: 'No-fault', note: { en: 'A system where your own insurance pays certain costs first.', es: 'Un sistema en el que tu propio seguro paga ciertos costos primero.' } },
    { en: 'Personal Injury Protection', es: 'Protección de Lesiones Personales', note: { en: 'Coverage that pays part of your injury costs after a crash.', es: 'Cobertura que paga parte de tus costos de lesiones tras un choque.' } },
    { en: 'Point system', es: 'Sistema de puntos', note: { en: 'A record of violations that can lead to suspension.', es: 'Un registro de infracciones que puede llevar a la suspensión.' } },
    { en: 'Stop arm', es: 'Brazo de parada', note: { en: 'The sign a school bus extends when it stops.', es: 'El cartel que extiende un autobús escolar cuando se detiene.' } },
    { en: 'Primary offense', es: 'Infracción primaria', note: { en: 'A violation an officer can stop you for on its own.', es: 'Una infracción por la que un agente puede detenerte por sí sola.' } },
    { en: 'Suspension', es: 'Suspensión', note: { en: 'A temporary loss of your driving privilege.', es: 'La pérdida temporal de tu privilegio de conducir.' } }
  ],
  references: [
    {
      label: { en: 'Florida Driver License Handbook', es: 'Manual del Conductor de Florida' },
      url: 'https://www.flhsmv.gov/pdf/handbooks/englishdriverhandbook.pdf',
      section: { en: 'Florida-Specific Driving Laws', es: 'Leyes de conducción propias de Florida' }
    },
    {
      label: { en: 'Florida Statutes, Chapter 322', es: 'Estatutos de Florida, Capítulo 322' },
      url: 'https://www.leg.state.fl.us/statutes/',
      section: { en: 'Driver Licenses and the Point System', es: 'Licencias de conducir y sistema de puntos' }
    }
  ],
  quickCheck: [
    {
      question: { en: 'Under the Move Over law, if you cannot change lanes safely, you must:', es: 'Según la ley Move Over, si no puedes cambiar de carril con seguridad, debes:' },
      options: [
        { en: 'Maintain your speed and stay in your lane.', es: 'Mantener tu velocidad y quedarte en tu carril.' },
        { en: 'Slow to at least 20 mph below the posted limit and pass with care.', es: 'Reducir al menos a 20 mph por debajo del límite publicado y pasar con precaución.' },
        { en: 'Stop completely until the vehicle leaves.', es: 'Detenerte por completo hasta que el vehículo se vaya.' },
        { en: 'Honk to warn the workers.', es: 'Tocar el claxon para avisar a los trabajadores.' }
      ],
      correctIndex: 1,
      explanation: {
        en: 'When moving over is not possible, the law requires slowing to at least 20 mph below the posted limit and passing carefully.',
        es: 'Cuando no es posible apartarse, la ley exige reducir al menos a 20 mph por debajo del límite publicado y pasar con precaución.'
      }
    },
    {
      question: { en: 'On a two-lane road, when a school bus stops with flashing red lights, who must stop?', es: 'En una vía de dos carriles, cuando un autobús escolar se detiene con luces rojas intermitentes, ¿quién debe detenerse?' },
      options: [
        { en: 'Only traffic behind the bus.', es: 'Solo el tráfico detrás del autobús.' },
        { en: 'Only traffic in the same direction.', es: 'Solo el tráfico en la misma dirección.' },
        { en: 'Traffic in both directions.', es: 'El tráfico en ambos sentidos.' },
        { en: 'No one has to stop.', es: 'Nadie debe detenerse.' }
      ],
      correctIndex: 2,
      explanation: {
        en: 'On a two-lane road, traffic in both directions must stop for a school bus with flashing red lights, unless separated by a raised median on a divided highway.',
        es: 'En una vía de dos carriles, el tráfico en ambos sentidos debe detenerse ante un autobús escolar con luces rojas intermitentes, salvo que esté separado por una mediana elevada en una autopista dividida.'
      }
    },
    {
      question: { en: 'What is the standard Florida license for driving a regular passenger car?', es: '¿Cuál es la licencia estándar de Florida para conducir un automóvil de pasajeros normal?' },
      options: [
        { en: 'Class A', es: 'Clase A' },
        { en: 'Class B', es: 'Clase B' },
        { en: 'Class E', es: 'Clase E' },
        { en: 'A commercial license', es: 'Una licencia comercial' }
      ],
      correctIndex: 2,
      explanation: {
        en: 'The Class E license is the standard Florida license for non-commercial driving of a regular passenger vehicle.',
        es: 'La licencia Clase E es la licencia estándar de Florida para la conducción no comercial de un vehículo de pasajeros normal.'
      }
    }
  ]
};

export default lesson;
