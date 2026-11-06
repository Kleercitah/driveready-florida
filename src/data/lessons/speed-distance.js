/** Lección: Velocidad y distancia */
export const lesson = {
  id: 'speed-distance',
  categoryId: 'speed-distance',
  order: 4,
  number: '04',
  estimatedMinutes: 12,
  title: { en: 'Speed & Following Distance', es: 'Velocidad y distancia' },
  summary: {
    en: 'Speed limits set a maximum for good conditions, not a guarantee of safety. This lesson covers Florida default speed limits, the two-second following rule, and how speed affects your stopping distance in real traffic.',
    es: 'Los límites de velocidad fijan un máximo para buenas condiciones, no una garantía de seguridad. Esta lección cubre los límites de velocidad por defecto en Florida, la regla de seguimiento de dos segundos y cómo la velocidad afecta tu distancia de frenado en el tráfico real.'
  },
  objectives: {
    en: [
      'Recall Florida default speed limits for common road types.',
      'Use the two-second rule and adjust it for conditions.',
      'Explain how speed lengthens stopping distance.',
      'Slow correctly in school, work, and residential zones.'
    ],
    es: [
      'Recordar los límites de velocidad por defecto en Florida para los tipos comunes de vía.',
      'Usar la regla de los dos segundos y ajustarla según las condiciones.',
      'Explicar cómo la velocidad alarga la distancia de frenado.',
      'Reducir correctamente la velocidad en zonas escolares, de obras y residenciales.'
    ]
  },
  sections: [
    {
      id: 'default-speed-limits',
      title: { en: 'Florida Default Speed Limits', es: 'Límites de velocidad por defecto en Florida' },
      body: {
        en: 'When no sign is posted, Florida sets default speed limits you are expected to know. The limit is generally 30 mph in a business or residential district, 55 mph on a two-lane undivided road outside an urban area, and up to 70 mph where posted on interstate and limited-access highways.\n\nThese defaults apply only where no lower or higher limit is posted, and a posted sign always governs the specific stretch of road. Many local streets and some state roads have their own posted limits that fit local conditions, and those signs must be followed.\n\nA speed limit is the maximum for ideal conditions, and it is never a required speed. Driving significantly slower than surrounding traffic can also be unsafe, but you are always allowed to go slower when conditions demand it, and you must never exceed the posted maximum.',
        es: 'Cuando no hay una señal publicada, Florida establece límites de velocidad por defecto que se espera que conozcas. El límite es generalmente 30 mph en un distrito comercial o residencial, 55 mph en una vía de dos carriles no dividida fuera de una zona urbana y hasta 70 mph donde esté señalado en autopistas interestatales y de acceso limitado.\n\nEstos valores por defecto se aplican solo donde no hay un límite más bajo o más alto señalado, y una señal publicada siempre rige el tramo específico de la vía. Muchas calles locales y algunas carreteras estatales tienen sus propios límites publicados que se ajustan a las condiciones locales, y esas señales deben respetarse.\n\nUn límite de velocidad es el máximo para condiciones ideales y nunca es una velocidad obligatoria. Circular mucho más despacio que el tráfico que te rodea también puede ser inseguro, pero siempre puedes ir más despacio cuando las condiciones lo exijan, y nunca debes superar el máximo publicado.'
      }
    },
    {
      id: 'posted-and-basic-speed-law',
      title: { en: 'Posted Limits and the Basic Speed Law', es: 'Límites publicados y la ley básica de velocidad' },
      body: {
        en: 'The basic speed law means you must always drive at a speed that is safe for the current conditions, even if that speed is lower than the posted limit. Rain, fog, darkness, heavy traffic, and road construction are all reasons to slow below the maximum.\n\nThe posted limit does not protect you from a citation if you are driving too fast for conditions. If an officer judges your speed unsafe for the situation, you can be cited even while technically below the posted number, because safety, not the sign alone, defines a reasonable speed.\n\nSpeed limits are often reduced near schools, parks, and intersections where more people are likely to be near the road. Watch for yellow warning signs and extra speed limit signs that signal a change is coming, and slow before you reach the point where the new limit applies.',
        es: 'La ley básica de velocidad significa que siempre debes conducir a una velocidad que sea segura para las condiciones actuales, aunque esa velocidad sea inferior al límite publicado. La lluvia, la niebla, la oscuridad, el tráfico denso y las obras son motivos para reducir por debajo del máximo.\n\nEl límite publicado no te protege de una multa si conduces demasiado rápido para las condiciones. Si un agente considera que tu velocidad es insegura para la situación, pueden multarte aun estando técnicamente por debajo del número publicado, porque la seguridad, y no solo la señal, define una velocidad razonable.\n\nLos límites de velocidad suelen reducirse cerca de escuelas, parques e intersecciones donde es probable que más personas estén cerca de la vía. Atento a las señales preventivas amarillas y a las señales de límite adicionales que indican un cambio próximo, y reduce antes de llegar al punto donde se aplica el nuevo límite.'
      }
    },
    {
      id: 'following-distance',
      title: { en: 'Following Distance', es: 'Distancia de seguimiento' },
      body: {
        en: 'A safe following distance gives you time to react to the car ahead without relying on their brake lights. Use the two-second rule as a minimum in good conditions: pick a fixed object ahead, and when the car in front passes it, count two seconds before you reach it. If you reach it sooner, you are following too closely.\n\nIncrease the count to three, four, or more seconds when you are behind a large truck, on a wet or slippery road, in heavy traffic, at night, or when visibility is reduced. Tailgating removes your reaction time and is a leading cause of rear-end crashes.\n\nWhen someone follows you too closely, do not brake suddenly to teach them a lesson. Instead, increase the space ahead of you so you can slow gradually, and let the impatient driver pass when it is safe.',
        es: 'Una distancia de seguimiento segura te da tiempo para reaccionar al auto de delante sin depender de sus luces de freno. Usa la regla de los dos segundos como mínimo en buenas condiciones: elige un objeto fijo adelante y, cuando el auto de delante lo pase, cuenta dos segundos antes de llegar tú a él. Si llegas antes, estás siguiendo demasiado de cerca.\n\nAumenta la cuenta a tres, cuatro o más segundos cuando vayas detrás de un camión grande, en una vía mojada o resbaladiza, en tráfico denso, de noche o cuando la visibilidad se reduzca. Ir pegado reduce tu tiempo de reacción y es una de las principales causas de choques por alcance.\n\nCuando alguien te sigue demasiado de cerca, no frenes de golpe para darle una lección. En su lugar, aumenta el espacio delante de ti para poder reducir poco a poco, y deja que el conductor impaciente te rebase cuando sea seguro.'
      }
    },
    {
      id: 'stopping-distance',
      title: { en: 'Stopping Distance', es: 'Distancia de frenado' },
      body: {
        en: 'Stopping distance is the sum of your reaction distance and your braking distance. Reaction distance is how far you travel during the moment before you actually brake, and braking distance is how far the car takes to stop once the brakes engage. Both grow as speed increases.\n\nBecause braking distance increases with the square of your speed, going twice as fast can take about four times the distance to stop. This is why speeding near pedestrians, bicyclists, or a stopped bus is so dangerous: you simply cannot stop in time if someone steps out.\n\nWet roads, worn tires, and heavy loads all lengthen braking distance. In the rain, allow extra following space and slow below the posted limit so your total stopping distance fits within the room you actually have.',
        es: 'La distancia de frenado es la suma de tu distancia de reacción y tu distancia de frenado mecánico. La distancia de reacción es lo que avanzas durante el instante antes de frenar realmente, y la distancia de frenado mecánico es lo que tarda el auto en detenerse una vez que los frenos actúan. Ambas aumentan con la velocidad.\n\nComo la distancia de frenado aumenta con el cuadrado de tu velocidad, ir al doble de velocidad puede requerir unas cuatro veces más distancia para detenerte. Por eso exceder la velocidad cerca de peatones, ciclistas o un autobús detenido es tan peligroso: simplemente no puedes detenerte a tiempo si alguien se cruza.\n\nLas vías mojadas, los neumáticos desgastados y las cargas pesadas alargan la distancia de frenado. Con lluvia, deja un espacio de seguimiento extra y reduce por debajo del límite publicado para que tu distancia total de frenado quepa en el espacio del que realmente dispones.'
      }
    },
    {
      id: 'special-zones-speed',
      title: { en: 'School, Work, and Residential Zones', es: 'Zonas escolares, de obras y residenciales' },
      body: {
        en: 'School zones often have a much lower speed limit, commonly around 20 mph, and these limits usually apply when children are present or when the lights are flashing. Slow down before you reach the school and watch for crossing guards and children who may move unpredictably.\n\nWork zones usually post temporary speed limits that may be lower than the normal limit, and fines can be higher for speeding there. Residential and business districts generally have a 30 mph default limit, but parked cars, driveways, and pedestrians mean you should stay alert and ready to slow.\n\nIn any of these zones, the goal is not just to match the number but to match the level of risk. Where there are people near the road, driving the posted limit at night or in rain may still be too fast, so use the basic speed law to guide your choice.',
        es: 'Las zonas escolares suelen tener un límite de velocidad mucho más bajo, habitualmente alrededor de 20 mph, y estos límites suelen aplicarse cuando hay niños presentes o cuando las luces están intermitentes. Reduce antes de llegar a la escuela y atento a los guardias de cruce y a los niños, que pueden moverse de forma imprevisible.\n\nLas zonas de obras suelen publicar límites de velocidad temporales que pueden ser inferiores al normal, y las multas por exceso de velocidad allí pueden ser mayores. Los distritos residenciales y comerciales tienen generalmente un límite por defecto de 30 mph, pero los autos estacionados, las entradas y los peatones exigen estar alerta y listo para reducir.\n\nEn cualquiera de estas zonas, el objetivo no es solo igualar el número sino igualar el nivel de riesgo. Donde hay personas cerca de la vía, circular al límite publicado de noche o con lluvia puede seguir siendo demasiado rápido, así que usa la ley básica de velocidad para guiar tu elección.'
      }
    }
  ],
  examples: [
    {
      title: { en: 'Counting two seconds', es: 'Contar dos segundos' },
      body: {
        en: 'Choose a sign or bridge ahead. When the rear of the car in front passes it, count one-two seconds. If your front bumper reaches it before you finish counting two, you are following too closely and should ease off the accelerator.',
        es: 'Elige una señal o un puente adelante. Cuando la parte trasera del auto de delante lo pase, cuenta uno-dos segundos. Si tu parachoques delantero llega antes de terminar de contar dos, estás siguiendo demasiado de cerca y debes soltar el acelerador.'
      }
    },
    {
      title: { en: 'Doubling your speed', es: 'Duplicar tu velocidad' },
      body: {
        en: 'Going twice as fast does not simply double your stopping distance; it can multiply it by about four. That is why a speed that feels comfortable on an open road becomes dangerous near people or stopped traffic.',
        es: 'Ir al doble de velocidad no duplica sin más tu distancia de frenado; puede multiplicarla por unos cuatro. Por eso una velocidad que parece cómoda en una vía abierta se vuelve peligrosa cerca de personas o tráfico detenido.'
      }
    }
  ],
  scenarios: [
    {
      title: { en: 'Heavy rain on the highway', es: 'Lluvia intensa en la autopista' },
      prompt: {
        en: 'The posted limit is 65 mph and it starts raining hard. What speed should you choose?',
        es: 'El límite publicado es 65 mph y empieza a llover con fuerza. ¿Qué velocidad deberías elegir?'
      },
      resolution: {
        en: 'Slow below 65 mph to a speed that is safe for the rain and increase your following distance. The posted limit is a maximum for good conditions, and the basic speed law requires you to match the weather.',
        es: 'Reduce por debajo de 65 mph hasta una velocidad segura para la lluvia y aumenta tu distancia de seguimiento. El límite publicado es un máximo para buenas condiciones, y la ley básica de velocidad exige adaptarte al clima.'
      }
    },
    {
      title: { en: 'A tailgater behind you', es: 'Un conductor pegado detrás de ti' },
      prompt: {
        en: 'A driver is following you very closely on a single-lane road. What is the safest response?',
        es: 'Un conductor te sigue muy de cerca en una vía de un solo carril. ¿Cuál es la respuesta más segura?'
      },
      resolution: {
        en: 'Increase the space ahead of you so you can slow gradually, and let the tailgater pass when it is safe. Braking sharply to punish them would risk a crash and could injure you as well.',
        es: 'Aumenta el espacio delante de ti para poder reducir poco a poco y deja que el conductor pegado te rebase cuando sea seguro. Frenar bruscamente para castigarlo provocaría un choque y podría lesionarte a ti también.'
      }
    }
  ],
  commonMistakes: {
    en: [
      'Treating the posted speed limit as a target rather than a maximum for good conditions.',
      'Following too closely in rain, at night, or behind large trucks.',
      'Driving the posted speed through a school zone even when children are present.'
    ],
    es: [
      'Tratar el límite publicado como un objetivo en lugar de un máximo para buenas condiciones.',
      'Seguir demasiado de cerca con lluvia, de noche o detrás de camiones grandes.',
      'Circular al límite publicado por una zona escolar incluso cuando hay niños presentes.'
    ]
  },
  vocabulary: [
    { en: 'Speed limit', es: 'Límite de velocidad', note: { en: 'The maximum legal speed for good conditions.', es: 'La velocidad máxima legal para buenas condiciones.' } },
    { en: 'Basic speed law', es: 'Ley básica de velocidad', note: { en: 'The rule that you must never drive faster than is safe for conditions.', es: 'La regla de que nunca debes conducir más rápido de lo seguro para las condiciones.' } },
    { en: 'Two-second rule', es: 'Regla de los dos segundos', note: { en: 'A minimum following distance in good conditions.', es: 'Una distancia mínima de seguimiento en buenas condiciones.' } },
    { en: 'Following distance', es: 'Distancia de seguimiento', note: { en: 'The gap between you and the vehicle ahead.', es: 'El espacio entre tú y el vehículo de delante.' } },
    { en: 'Reaction distance', es: 'Distancia de reacción', note: { en: 'How far you travel before you begin braking.', es: 'Lo que avanzas antes de empezar a frenar.' } },
    { en: 'Stopping distance', es: 'Distancia de frenado', note: { en: 'Reaction distance plus braking distance.', es: 'La distancia de reacción más la distancia de frenado.' } },
    { en: 'Tailgating', es: 'Ir pegado al de delante', note: { en: 'Following another vehicle too closely.', es: 'Seguir a otro vehículo demasiado de cerca.' } },
    { en: 'School zone', es: 'Zona escolar', note: { en: 'An area near a school with a reduced speed limit.', es: 'Un área cerca de una escuela con un límite de velocidad reducido.' } }
  ],
  references: [
    {
      label: { en: 'Florida Driver License Handbook', es: 'Manual del Conductor de Florida' },
      url: 'https://www.flhsmv.gov/pdf/handbooks/englishdriverhandbook.pdf',
      section: { en: 'Speed Limits and Following Distance', es: 'Límites de velocidad y distancia de seguimiento' }
    },
    {
      label: { en: 'Florida Statutes, Chapter 316', es: 'Estatutos de Florida, Capítulo 316' },
      url: 'https://www.leg.state.fl.us/statutes/',
      section: { en: 'Speed Limits', es: 'Límites de velocidad' }
    }
  ],
  quickCheck: [
    {
      question: { en: 'What is the general default speed limit in a Florida residential or business district when no sign is posted?', es: '¿Cuál es el límite de velocidad por defecto general en un distrito residencial o comercial de Florida cuando no hay señal publicada?' },
      options: [
        { en: '20 mph', es: '20 mph' },
        { en: '30 mph', es: '30 mph' },
        { en: '45 mph', es: '45 mph' },
        { en: '55 mph', es: '55 mph' }
      ],
      correctIndex: 1,
      explanation: {
        en: 'Florida uses a 30 mph default limit in residential and business districts unless a sign posts a different number.',
        es: 'Florida usa un límite por defecto de 30 mph en distritos residenciales y comerciales salvo que una señal indique otro número.'
      }
    },
    {
      question: { en: 'What is the minimum following distance in good conditions using the two-second rule?', es: '¿Cuál es la distancia mínima de seguimiento en buenas condiciones según la regla de los dos segundos?' },
      options: [
        { en: 'One car length for every 10 mph', es: 'Un largo de auto por cada 10 mph' },
        { en: 'Half a second', es: 'Medio segundo' },
        { en: 'Two seconds', es: 'Dos segundos' },
        { en: 'Ten seconds', es: 'Diez segundos' }
      ],
      correctIndex: 2,
      explanation: {
        en: 'The two-second rule is the minimum gap in good conditions, and it should be increased in rain, darkness, or behind large vehicles.',
        es: 'La regla de los dos segundos es el espacio mínimo en buenas condiciones, y debe aumentarse con lluvia, oscuridad o detrás de vehículos grandes.'
      }
    },
    {
      question: { en: 'Why is speeding especially dangerous near pedestrians?', es: '¿Por qué es especialmente peligroso exceder la velocidad cerca de peatones?' },
      options: [
        { en: 'It uses more fuel.', es: 'Consume más combustible.' },
        { en: 'It increases stopping distance greatly, so you may not stop in time.', es: 'Aumenta mucho la distancia de frenado, por lo que podrías no detenerte a tiempo.' },
        { en: 'It wears out tires faster.', es: 'Desgasta los neumáticos más rápido.' },
        { en: 'It is only a problem on dirt roads.', es: 'Solo es un problema en caminos de tierra.' }
      ],
      correctIndex: 1,
      explanation: {
        en: 'Higher speed sharply increases stopping distance, so you may be unable to stop if a pedestrian steps into your path.',
        es: 'Una mayor velocidad aumenta mucho la distancia de frenado, por lo que podrías no poder detenerte si un peatón se cruza en tu camino.'
      }
    }
  ]
};

export default lesson;
