/** Lección: Semáforos y marcas viales */
export const lesson = {
  id: 'signals-markings',
  categoryId: 'signals-markings',
  order: 2,
  number: '02',
  estimatedMinutes: 12,
  title: { en: 'Traffic Signals & Road Markings', es: 'Semáforos y marcas viales' },
  summary: {
    en: 'Traffic signals and pavement markings tell you when to stop, when to go, and where your lane is. This lesson explains steady and flashing signals, turn arrows, and the meaning of white and yellow road lines so you can read the road surface itself.',
    es: 'Los semáforos y las marcas del pavimento te indican cuándo detenerte, cuándo avanzar y dónde está tu carril. Esta lección explica las señales fijas e intermitentes, las flechas de giro y el significado de las líneas blancas y amarillas para que interpretes la propia superficie de la vía.'
  },
  objectives: {
    en: [
      'Respond correctly to steady red, yellow, and green signals.',
      'Interpret flashing signals, arrows, and malfunctioning lights.',
      'Distinguish white pavement markings from yellow ones.',
      'Apply the rules for turning right on red and using crosswalks.'
    ],
    es: [
      'Responder correctamente a las señales fijas roja, amarilla y verde.',
      'Interpretar señales intermitentes, flechas y luces averiadas.',
      'Distinguir las marcas blancas del pavimento de las amarillas.',
      'Aplicar las reglas para girar a la derecha en rojo y usar los pasos de peatones.'
    ]
  },
  sections: [
    {
      id: 'steady-signals',
      title: { en: 'Steady Signals', es: 'Señales luminosas fijas' },
      body: {
        en: 'A steady red light means stop completely at the stop line, before the crosswalk, or before the intersection when there is no line. Once stopped, you may generally turn right unless a sign prohibits it, and you may turn left from a one-way street onto another one-way street, after yielding to pedestrians and traffic.\n\nA steady yellow light means the signal is about to turn red. It does not mean speed up. If you can stop safely, come to a stop; if you are already within the intersection or too close to stop safely, proceed with caution and clear the intersection.\n\nA steady green light means you may go if the way is clear. Green does not guarantee right of way, so you must still yield to pedestrians, to vehicles still in the intersection, and to oncoming traffic when you turn left. Green arrows give protected movement in the direction shown.',
        es: 'Una luz roja fija significa detenerse por completo en la línea de detención, antes del paso de peatones o antes de la intersección cuando no hay línea. Ya detenido, generalmente puedes girar a la derecha salvo que una señal lo prohíba, y puedes girar a la izquierda desde una vía de un solo sentido hacia otra de un solo sentido, tras ceder el paso a peatones y tráfico.\n\nUna luz amarilla fija significa que la señal está a punto de ponerse roja. No significa acelerar. Si puedes detenerte con seguridad, hazlo; si ya estás dentro de la intersección o demasiado cerca para detenerte con seguridad, avanza con precaución y despeja la intersección.\n\nUna luz verde fija significa que puedes avanzar si el camino está libre. El verde no garantiza la prioridad de paso, así que aún debes ceder el paso a los peatones, a los vehículos que siguen en la intersección y al tráfico en sentido contrario cuando giras a la izquierda. Las flechas verdes dan movimiento protegido en la dirección indicada.'
      }
    },
    {
      id: 'flashing-and-arrows',
      title: { en: 'Flashing Signals and Arrows', es: 'Señales intermitentes y flechas' },
      body: {
        en: 'A flashing red light works like a stop sign: come to a complete stop, yield as needed, and proceed when it is safe. A flashing yellow light means slow down and proceed with caution, watching for cross traffic and hazards. A flashing yellow arrow allows you to turn in that direction after yielding.\n\nSome traffic signals are dark because of a power failure or a malfunction. Treat a dark signal as an all-way stop: stop, then proceed in the order you arrived and yield to traffic already in the intersection. Do not assume the cross traffic has a red light when the signal is not working.\n\nSome intersections use a green arrow followed by a flashing yellow arrow for the same turn. The green arrow protects the turn, while the flashing yellow arrow means the turn is permitted but the driver must yield to oncoming traffic.',
        es: 'Una luz roja intermitente funciona como una señal de alto: detente por completo, cede el paso según sea necesario y avanza cuando sea seguro. Una luz amarilla intermitente significa reducir la velocidad y avanzar con precaución, atento al tráfico cruzado y a los peligros. Una flecha amarilla intermitente permite girar en esa dirección tras ceder el paso.\n\nAlgunos semáforos están apagados por un fallo eléctrico o una avería. Trata un semáforo apagado como un alto de cuatro vías: detente, luego avanza en el orden en que llegaste y cede el paso al tráfico que ya está en la intersección. No supongas que el tráfico cruzado tiene luz roja cuando la señal no funciona.\n\nAlgunas intersecciones usan una flecha verde seguida de una flecha amarilla intermitente para el mismo giro. La flecha verde protege el giro, mientras que la flecha amarilla intermitente significa que el giro está permitido pero el conductor debe ceder el paso al tráfico en sentido contrario.'
      }
    },
    {
      id: 'white-markings',
      title: { en: 'White Pavement Markings', es: 'Marcas blancas del pavimento' },
      body: {
        en: 'White lines separate traffic moving in the same direction. A single broken white line means you may change lanes when it is safe, while a solid white line discourages lane changes and a double solid white line means you should not cross it. White lines also mark the edge of the roadway and the right boundary of your lane.\n\nWhite markings outline crosswalks, stop lines, turn arrows, and the letters such as ONLY that show a lane is reserved for a specific movement. A solid white line across your lane before an intersection is the stop line where you must halt at a stop sign or red light.\n\nPainted arrows in white show which direction each lane must travel. If a lane is marked with a left-turn arrow, you must turn left from it rather than continuing straight, so choose your lane well before the intersection.',
        es: 'Las líneas blancas separan el tráfico que se mueve en la misma dirección. Una línea blanca discontinua simple significa que puedes cambiar de carril cuando sea seguro, mientras que una línea blanca continua desaconseja los cambios de carril y una línea blanca continua doble significa que no debes cruzarla. Las líneas blancas también marcan el borde de la calzada y el límite derecho de tu carril.\n\nLas marcas blancas delimitan pasos de peatones, líneas de detención, flechas de giro y palabras como ONLY que indican que un carril está reservado para un movimiento específico. Una línea blanca continua que cruza tu carril antes de una intersección es la línea de detención donde debes parar ante una señal de alto o una luz roja.\n\nLas flechas pintadas en blanco muestran qué dirección debe seguir cada carril. Si un carril está marcado con una flecha de giro a la izquierda, debes girar a la izquierda desde él en lugar de seguir recto, así que elige tu carril con antelación a la intersección.'
      }
    },
    {
      id: 'yellow-markings',
      title: { en: 'Yellow Pavement Markings', es: 'Marcas amarillas del pavimento' },
      body: {
        en: 'Yellow lines separate traffic moving in opposite directions. A broken yellow line means you may cross it to pass when it is safe and legal, while a solid yellow line means passing is discouraged and crossing it to pass is generally prohibited. A double solid yellow line means neither direction may cross to pass.\n\nWhen one side of a double yellow line is solid and the other is broken, the driver on the broken-line side may pass if it is safe, while the driver on the solid-line side may not. These lines show oncoming traffic where they can expect conflicting movements.\n\nA solid yellow line also marks the left edge of a divided highway or a center turn lane. A shared center lane bordered by solid and broken yellow lines is used for left turns in either direction, never for passing or normal travel.',
        es: 'Las líneas amarillas separan el tráfico que se mueve en direcciones opuestas. Una línea amarilla discontinua significa que puedes cruzarla para adelantar cuando sea seguro y legal, mientras que una línea amarilla continua desaconseja el adelantamiento y cruzar para adelantar está generalmente prohibido. Una línea amarilla continua doble significa que ninguna dirección puede cruzarla para adelantar.\n\nCuando un lado de una línea amarilla doble es continuo y el otro es discontinuo, el conductor del lado discontinuo puede adelantar si es seguro, mientras que el conductor del lado continuo no puede. Estas líneas muestran al tráfico en sentido contrario dónde puede esperar movimientos conflictivos.\n\nUna línea amarilla continua también marca el borde izquierdo de una autopista dividida o un carril central de giro. Un carril central compartido delimitado por líneas amarillas continua y discontinua se usa para girar a la izquierda en cualquier dirección, nunca para adelantar o circular con normalidad.'
      }
    },
    {
      id: 'special-markings',
      title: { en: 'Special Markings', es: 'Marcas especiales' },
      body: {
        en: 'Crosswalk markings warn drivers to expect pedestrians, whether or not they are currently visible. Even an unmarked crosswalk at an intersection is a legal crossing, so you must yield to pedestrians who are crossing there. Stop before the crosswalk so you do not block it.\n\nRailroad pavement markings, white transverse lines, and a yellow X with the letters RR warn of a railroad crossing ahead. A yellow X with the word ONLY may mark a lane reserved for a specific movement, and diamond symbols in a lane can indicate an HOV or special-use lane.\n\nWhite painted islands and chevron patterns show areas you should not drive on. Rumble strips, raised markers, and painted medians all guide traffic and separate opposing movements, especially where lanes shift such as at toll plazas or interchanges.',
        es: 'Las marcas del paso de peatones advierten a los conductores que esperen peatones, estén o no visibles en ese momento. Incluso un paso de peatones sin marcar en una intersección es un cruce legal, por lo que debes ceder el paso a los peatones que cruzan allí. Detente antes del paso para no bloquearlo.\n\nLas marcas de cruce de ferrocarril, las líneas blancas transversales y una X amarilla con las letras RR advierten de un cruce de ferrocarril adelante. Una X amarilla con la palabra ONLY puede marcar un carril reservado para un movimiento específico, y los símbolos de rombo en un carril pueden indicar un carril de uso especial o de vehículos de alta ocupación.\n\nLas islas pintadas en blanco y los patrones en cheurón muestran áreas sobre las que no debes circular. Las bandas rugosas, los marcadores elevados y las medianas pintadas guían el tráfico y separan movimientos opuestos, sobre todo donde los carriles se desplazan, como en plazas de peaje o enlaces.'
      }
    },
    {
      id: 'right-turn-on-red',
      title: { en: 'Turning Right on Red', es: 'Girar a la derecha en rojo' },
      body: {
        en: 'In Florida you may generally turn right on a steady red light after coming to a complete stop, unless a sign says no turn on red. Before turning, yield to pedestrians in the crosswalk and to any traffic approaching from the left, then complete the turn into the nearest lane when it is clear.\n\nBecause a right turn on red is a permitted movement and not a protected one, the burden is on you to be sure the way is safe. Look left, then left again, and recheck the crosswalk, since a pedestrian or cyclist may be hidden by stopped vehicles.\n\nIf a sign, a red arrow, or a steady red signal with a prohibitive sign is present, you must wait for a green light or a turn arrow. When in doubt, waiting is always acceptable and never a violation.',
        es: 'En Florida, generalmente puedes girar a la derecha con una luz roja fija después de detenerte por completo, salvo que una señal indique no girar en rojo. Antes de girar, cede el paso a los peatones en el paso y al tráfico que se aproxima desde la izquierda, y luego completa el giro hacia el carril más cercano cuando esté libre.\n\nComo girar a la derecha en rojo es un movimiento permitido y no protegido, la responsabilidad recae en ti de asegurarte de que el camino sea seguro. Mira a la izquierda, luego otra vez a la izquierda y revisa de nuevo el paso de peatones, ya que un peatón o un ciclista puede estar oculto por los vehículos detenidos.\n\nSi hay una señal, una flecha roja o una señal roja fija con un cartel prohibitivo, debes esperar una luz verde o una flecha de giro. En caso de duda, esperar siempre es aceptable y nunca es una infracción.'
      }
    }
  ],
  examples: [
    {
      title: { en: 'Solid and broken yellow lines', es: 'Líneas amarillas continua y discontinua' },
      body: {
        en: 'A broken yellow line next to your lane means you may cross it to pass when it is safe. A solid yellow line on your side of the road means you generally may not cross to pass, even if the oncoming side is broken and allows the other driver to do so.',
        es: 'Una línea amarilla discontinua junto a tu carril significa que puedes cruzarla para adelantar cuando sea seguro. Una línea amarilla continua en tu lado de la vía significa que generalmente no puedes cruzarla para adelantar, aunque el lado contrario sea discontinuo y permita hacerlo al otro conductor.'
      }
    },
    {
      title: { en: 'A flashing red light', es: 'Una luz roja intermitente' },
      body: {
        en: 'A flashing red light is treated exactly like a stop sign. Come to a complete stop, yield to crossing traffic and pedestrians, and move only when the intersection is clear, even if other cars also arrive at the same time.',
        es: 'Una luz roja intermitente se trata exactamente como una señal de alto. Detente por completo, cede el paso al tráfico cruzado y a los peatones, y avanza solo cuando la intersección esté libre, aunque otros autos lleguen al mismo tiempo.'
      }
    },
    {
      title: { en: 'A dark signal', es: 'Un semáforo apagado' },
      body: {
        en: 'When the signal is completely dark, do not assume you have the right of way. Treat the intersection as a four-way stop and take turns based on who arrived first, being extra watchful because other drivers may not follow the same rule.',
        es: 'Cuando el semáforo está completamente apagado, no supongas que tienes la prioridad. Trata la intersección como un alto de cuatro vías y toma turnos según quién llegó primero, extremando la precaución porque otros conductores podrían no seguir la misma regla.'
      }
    }
  ],
  scenarios: [
    {
      title: { en: 'Yellow light while too close to stop', es: 'Luz amarilla cuando estás demasiado cerca para frenar' },
      prompt: {
        en: 'You are already crossing the stop line when the light turns yellow. What should you do?',
        es: 'Ya estás cruzando la línea de detención cuando la luz se pone amarilla. ¿Qué deberías hacer?'
      },
      resolution: {
        en: 'Proceed through the intersection with caution and clear it without stopping. The yellow light warns that red is coming, and slamming on the brakes once you are past the line can cause a rear-end crash.',
        es: 'Avanza por la intersección con precaución y despéjala sin detenerte. La luz amarilla advierte que viene el rojo, y frenar de golpe una vez que pasaste la línea puede provocar un choque por alcance.'
      }
    },
    {
      title: { en: 'Right turn on red with a pedestrian', es: 'Giro a la derecha en rojo con un peatón' },
      prompt: {
        en: 'The light is red and you want to turn right, but a pedestrian is stepping into the crosswalk. What should you do?',
        es: 'La luz está roja y quieres girar a la derecha, pero un peatón está entrando en el paso. ¿Qué deberías hacer?'
      },
      resolution: {
        en: 'Wait until the pedestrian has safely cleared your path before completing the turn. Right turns on red are permitted only after yielding to pedestrians and traffic, so the crosswalk has priority over your turn.',
        es: 'Espera hasta que el peatón haya despejado tu trayectoria de forma segura antes de completar el giro. Los giros a la derecha en rojo se permiten solo tras ceder el paso a peatones y tráfico, por lo que el paso de peatones tiene prioridad sobre tu giro.'
      }
    }
  ],
  commonMistakes: {
    en: [
      'Speeding up when the light turns yellow instead of stopping if it is safe to do so.',
      'Turning right on red without making a full stop first.',
      'Assuming you always have the right of way just because the light is green.'
    ],
    es: [
      'Acelerar cuando la luz se pone amarilla en lugar de detenerse si es seguro hacerlo.',
      'Girar a la derecha en rojo sin detenerse por completo primero.',
      'Suponer que siempre tienes la prioridad solo porque la luz está verde.'
    ]
  },
  vocabulary: [
    { en: 'Steady signal', es: 'Señal fija', note: { en: 'A light that stays on without flashing.', es: 'Una luz que permanece encendida sin parpadear.' } },
    { en: 'Protected turn', es: 'Giro protegido', note: { en: 'A turn with a green arrow and no conflicting traffic.', es: 'Un giro con flecha verde y sin tráfico conflictivo.' } },
    { en: 'Crosswalk', es: 'Paso de peatones', note: { en: 'The area where pedestrians legally cross.', es: 'El área donde los peatones cruzan legalmente.' } },
    { en: 'Broken line', es: 'Línea discontinua', note: { en: 'A dashed line that may be crossed when safe.', es: 'Una línea de trazos que puede cruzarse cuando sea seguro.' } },
    { en: 'Solid line', es: 'Línea continua', note: { en: 'An unbroken line that should not be crossed to pass.', es: 'Una línea sin cortes que no debe cruzarse para adelantar.' } },
    { en: 'Edge line', es: 'Línea de borde', note: { en: 'A white line marking the edge of the roadway.', es: 'Una línea blanca que marca el borde de la calzada.' } },
    { en: 'Center turn lane', es: 'Carril central de giro', note: { en: 'A shared middle lane used only for left turns.', es: 'Un carril central compartido usado solo para girar a la izquierda.' } },
    { en: 'Right turn on red', es: 'Giro a la derecha en rojo', note: { en: 'A permitted right turn after a full stop unless posted otherwise.', es: 'Un giro a la derecha permitido tras detenerse por completo salvo señalización.' } }
  ],
  references: [
    {
      label: { en: 'Florida Driver License Handbook', es: 'Manual del Conductor de Florida' },
      url: 'https://www.flhsmv.gov/pdf/handbooks/englishdriverhandbook.pdf',
      section: { en: 'Traffic Signals and Pavement Markings', es: 'Semáforos y marcas del pavimento' }
    },
    {
      label: { en: 'Florida Statutes, Chapter 316', es: 'Estatutos de Florida, Capítulo 316' },
      url: 'https://www.leg.state.fl.us/statutes/',
      section: { en: 'Traffic-Control Signals and Markings', es: 'Señales luminosas y marcas de control' }
    }
  ],
  quickCheck: [
    {
      question: { en: 'What must you do at a flashing red light?', es: '¿Qué debes hacer ante una luz roja intermitente?' },
      options: [
        { en: 'Slow down and continue without stopping.', es: 'Reducir la velocidad y continuar sin detenerte.' },
        { en: 'Come to a complete stop and proceed when safe.', es: 'Detenerte por completo y avanzar cuando sea seguro.' },
        { en: 'Speed up to clear the intersection.', es: 'Acelerar para despejar la intersección.' },
        { en: 'Wait for a green arrow.', es: 'Esperar una flecha verde.' }
      ],
      correctIndex: 1,
      explanation: {
        en: 'A flashing red light is treated like a stop sign: full stop, then proceed with caution when the way is clear.',
        es: 'Una luz roja intermitente se trata como una señal de alto: alto completo y luego avanzar con precaución cuando el camino esté libre.'
      }
    },
    {
      question: { en: 'A double solid yellow line means:', es: 'Una línea amarilla continua doble significa:' },
      options: [
        { en: 'You may pass whenever you choose.', es: 'Puedes adelantar cuando quieras.' },
        { en: 'Only trucks may pass.', es: 'Solo los camiones pueden adelantar.' },
        { en: 'Neither direction may cross it to pass.', es: 'Ninguna dirección puede cruzar para adelantar.' },
        { en: 'It marks a bike lane.', es: 'Marca un carril para bicicletas.' }
      ],
      correctIndex: 2,
      explanation: {
        en: 'A double solid yellow line separates opposing traffic and means passing by crossing the lines is not permitted in either direction.',
        es: 'Una línea amarilla continua doble separa el tráfico opuesto y significa que no se permite adelantar cruzando las líneas en ninguna dirección.'
      }
    },
    {
      question: { en: 'When may you generally turn right on a steady red light?', es: '¿Cuándo puedes girar generalmente a la derecha con luz roja fija?' },
      options: [
        { en: 'Without stopping if the road looks clear.', es: 'Sin detenerte si la vía parece libre.' },
        { en: 'After a complete stop, unless a sign prohibits it.', es: 'Después de detenerte por completo, salvo que una señal lo prohíba.' },
        { en: 'Only when a green arrow appears.', es: 'Solo cuando aparece una flecha verde.' },
        { en: 'Never, in any situation.', es: 'Nunca, en ninguna situación.' }
      ],
      correctIndex: 1,
      explanation: {
        en: 'In Florida a right turn on red is permitted after a full stop and a yield to pedestrians and traffic, unless a sign says no turn on red.',
        es: 'En Florida se permite girar a la derecha en rojo tras un alto completo y ceder el paso a peatones y tráfico, salvo que una señal indique no girar en rojo.'
      }
    }
  ]
};

export default lesson;
