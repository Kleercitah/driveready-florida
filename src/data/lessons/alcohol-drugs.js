/** Lección: Alcohol, drogas e impedimento */
export const lesson = {
  id: 'alcohol-drugs',
  categoryId: 'alcohol-drugs',
  order: 7,
  number: '07',
  estimatedMinutes: 12,
  title: { en: 'Alcohol, Drugs & Impairment', es: 'Alcohol, drogas e impedimento' },
  summary: {
    en: 'Alcohol and drugs slow your judgment, reactions, and coordination long before you feel drunk. This lesson explains Florida blood alcohol limits, zero tolerance for drivers under 21, how other substances impair driving, and the legal consequences of impaired driving.',
    es: 'El alcohol y las drogas afectan tu criterio, tus reflejos y tu coordinación mucho antes de que te sientas ebrio. Esta lección explica los límites de alcohol en sangre de Florida, la tolerancia cero para conductores menores de 21 años, cómo otras sustancias afectan la conducción y las consecuencias legales de conducir impedido.'
  },
  objectives: {
    en: [
      'Describe how alcohol impairs driving ability.',
      'State the Florida BAC limits for adults and drivers under 21.',
      'Recognize that legal and illegal drugs can also impair driving.',
      'Understand the legal consequences of DUI in Florida.'
    ],
    es: [
      'Describir cómo el alcohol afecta la capacidad de conducir.',
      'Indicar los límites de alcohol en sangre de Florida para adultos y menores de 21 años.',
      'Reconocer que las drogas legales e ilegales también pueden impedir conducir.',
      'Entender las consecuencias legales del DUI en Florida.'
    ]
  },
  sections: [
    {
      id: 'how-alcohol-affects-driving',
      title: { en: 'How Alcohol Affects Driving', es: 'Cómo afecta el alcohol a la conducción' },
      body: {
        en: 'Alcohol is a depressant that slows the brain and nervous system, so it weakens the very skills driving depends on. It reduces your ability to judge speed and distance, shortens your attention span, and slows your reaction time, all before you feel intoxicated.\n\nThe first skills to go are judgment and self-control, which is why an impaired driver often feels more confident while actually driving worse. Alcohol also reduces vision, especially at night and in judging how far away lights and other cars are.\n\nThere is no safe amount of alcohol for driving. Even one or two drinks can affect your reactions, and combining alcohol with fatigue or medicine makes the impairment worse. The only reliable way to avoid alcohol impairment is not to drink before driving.',
        es: 'El alcohol es un depresor que ralentiza el cerebro y el sistema nervioso, por lo que debilita precisamente las habilidades de las que depende la conducción. Reduce tu capacidad de juzgar la velocidad y la distancia, acorta tu capacidad de atención y ralentiza tu tiempo de reacción, todo antes de que te sientas ebrio.\n\nLas primeras capacidades en perderse son el criterio y el autocontrol, por eso un conductor impedido a menudo se siente más seguro mientras en realidad conduce peor. El alcohol también reduce la visión, sobre todo de noche y al calcular a qué distancia están las luces y los demás autos.\n\nNo existe una cantidad segura de alcohol para conducir. Incluso una o dos bebidas pueden afectar tus reflejos, y combinar alcohol con fatiga o medicamentos empeora el impedimento. La única forma fiable de evitar el impedimento por alcohol es no beber antes de conducir.'
      }
    },
    {
      id: 'legal-bac-limits',
      title: { en: 'Legal BAC Limits', es: 'Límites legales de alcohol en sangre' },
      body: {
        en: 'In Florida it is illegal to drive with a blood alcohol concentration of 0.08 or higher for drivers 21 and older. Being under the limit does not mean you are safe or legal, because you can still be convicted of DUI if your normal faculties are impaired.\n\nDrivers under 21 are held to zero tolerance, which means a blood or breath alcohol level of 0.02 or higher is a violation. Because young drivers are less experienced and more affected by small amounts of alcohol, this limit is intentionally very low.\n\nCommercial drivers are also held to a lower standard, generally 0.04, because the size and weight of their vehicles make impairment far more dangerous. Knowing the limits helps, but the safest plan is always to separate drinking from driving entirely.',
        es: 'En Florida es ilegal conducir con una concentración de alcohol en sangre de 0.08 o superior para los conductores de 21 años o más. Estar por debajo del límite no significa que estés seguro o dentro de la ley, porque aún pueden condenarte por DUI si tus facultades normales están afectadas.\n\nA los conductores menores de 21 años se les aplica tolerancia cero, lo que significa que un nivel de alcohol en sangre o en el aliento de 0.02 o más es una infracción. Como los conductores jóvenes tienen menos experiencia y se ven más afectados por cantidades pequeñas de alcohol, este límite es intencionalmente muy bajo.\n\nLos conductores comerciales también están sujetos a un estándar más bajo, generalmente 0.04, porque el tamaño y el peso de sus vehículos hacen que el impedimento sea mucho más peligroso. Conocer los límites ayuda, pero el plan más seguro es separar por completo el beber de conducir.'
      }
    },
    {
      id: 'zero-tolerance',
      title: { en: 'Zero Tolerance for Under 21', es: 'Tolerancia cero para menores de 21 años' },
      body: {
        en: 'Florida enforces zero tolerance for drivers under 21, and the consequences begin with the first offense. A young driver found with a blood or breath alcohol level of 0.02 or higher can have the license suspended, even if the amount is small and even if the driver does not feel impaired.\n\nZero tolerance exists because alcohol affects young drivers more and because early habits shape lifelong behavior. Mixing alcohol with inexperience means longer reaction times, poorer judgment, and a much higher crash risk.\n\nIf you are under 21, the safest and simplest rule is not to drink at all before getting behind the wheel. If you have been drinking, call for a ride, use a designated driver, or stay where you are rather than driving.',
        es: 'Florida aplica tolerancia cero a los conductores menores de 21 años, y las consecuencias comienzan con la primera infracción. A un conductor joven que dé un nivel de alcohol en sangre o aliento de 0.02 o más se le puede suspender la licencia, aunque la cantidad sea pequeña y aunque el conductor no se sienta impedido.\n\nLa tolerancia cero existe porque el alcohol afecta más a los conductores jóvenes y porque los hábitos tempranos moldean el comportamiento de por vida. Mezclar alcohol con inexperiencia significa tiempos de reacción más largos, peor criterio y un riesgo de choque mucho mayor.\n\nSi tienes menos de 21 años, la regla más segura y sencilla es no beber nada antes de ponerte al volante. Si has bebido, pide que te lleven, usa un conductor designado o quédate donde estás en lugar de conducir.'
      }
    },
    {
      id: 'other-substances',
      title: { en: 'Other Drugs and Medications', es: 'Otras drogas y medicamentos' },
      body: {
        en: 'Drugs other than alcohol can impair driving just as seriously, and this includes both illegal drugs and prescription or over-the-counter medicines. Marijuana, for example, can slow reactions, reduce coordination, and distort the sense of time and distance.\n\nMany common medicines, such as antihistamines, sleep aids, and pain relievers, cause drowsiness or slow reactions, and their warnings often advise against driving. Combining any central nervous system medicine with alcohol multiplies the effect far beyond each one alone.\n\nIn Florida, driving under the influence of any substance, including legally prescribed medicine, is illegal when it impairs your normal faculties. Always read the label, ask your doctor or pharmacist about driving, and do not drive if a medicine makes you drowsy or unfocused.',
        es: 'Las drogas distintas del alcohol pueden impedir la conducción con la misma gravedad, y esto incluye tanto drogas ilegales como medicamentos recetados o de venta libre. La marihuana, por ejemplo, puede ralentizar los reflejos, reducir la coordinación y distorsionar la percepción del tiempo y la distancia.\n\nMuchos medicamentos comunes, como los antihistamínicos, los somníferos y los analgésicos, causan somnolencia o ralentizan los reflejos, y sus advertencias a menudo desaconsejan conducir. Combinar cualquier medicamento que actúe sobre el sistema nervioso central con alcohol multiplica el efecto mucho más allá de cada uno por separado.\n\nEn Florida, conducir bajo la influencia de cualquier sustancia, incluidos los medicamentos recetados legalmente, es ilegal cuando afecta tus facultades normales. Lee siempre la etiqueta, pregunta a tu médico o farmacéutico sobre conducir y no conduzcas si un medicamento te da sueño o te resta concentración.'
      }
    },
    {
      id: 'consequences-of-dui',
      title: { en: 'Consequences of DUI', es: 'Consecuencias del DUI' },
      body: {
        en: 'A DUI conviction in Florida carries serious costs, and the penalties grow with each offense. They can include fines, license suspension or revocation, jail time, required education or treatment programs, and the installation of an ignition interlock device on your vehicle.\n\nBeyond the legal penalties, a DUI affects your insurance rates, can cost you a job or a professional license, and stays on your record for years. If someone is injured or killed, the consequences become far more severe, including prison and lifelong responsibility.\n\nYou can be charged with DUI even if you are under the legal BAC limit or refuse the breath test. Florida law also allows enhanced penalties in some cases, such as a very high BAC or having a child in the vehicle, so the safest choice is always to not drive after drinking or using impairing substances.',
        es: 'Una condena por DUI en Florida conlleva costos graves, y las sanciones aumentan con cada infracción. Pueden incluir multas, suspensión o revocación de la licencia, cárcel, programas obligatorios de educación o tratamiento y la instalación de un dispositivo de bloqueo de encendido en tu vehículo.\n\nMás allá de las sanciones legales, un DUI afecta tus tarifas de seguro, puede costarte un empleo o una licencia profesional y permanece en tu historial durante años. Si alguien resulta herido o muere, las consecuencias se vuelven mucho más graves, incluidas la prisión y una responsabilidad de por vida.\n\nPueden imputarte un DUI aunque estés por debajo del límite legal de alcohol en sangre o te niegues a hacer la prueba de aliento. La ley de Florida también permite sanciones agravadas en algunos casos, como un nivel de alcohol muy alto o llevar a un niño en el vehículo, así que la opción más segura es siempre no conducir tras beber o consumir sustancias que impidan.'
      }
    },
    {
      id: 'recognizing-impairment',
      title: { en: 'Recognizing Impairment', es: 'Reconocer el impedimento' },
      body: {
        en: 'Because alcohol weakens your own judgment first, you are the least reliable judge of your own fitness to drive after drinking. Never rely on feeling fine; use a plan made before you drink, such as a designated driver, a rideshare, or staying overnight.\n\nWarning signs of impairment in other drivers include weaving, drifting, sudden braking, driving very slowly, and ignoring signals. If you suspect an impaired driver, keep your distance, do not try to stop them yourself, and call law enforcement with a description and location.\n\nFatigue produces effects similar to alcohol, including slow reactions and lapses in attention. Drowsy driving is dangerous on its own, so do not treat caffeine or an open window as a substitute for rest. If you are sleepy, pull over and rest.',
        es: 'Como el alcohol debilita primero tu propio criterio, eres el juez menos fiable de tu propia aptitud para conducir después de beber. Nunca te fíes de sentirte bien; usa un plan hecho antes de beber, como un conductor designado, un transporte por app o quedarte a dormir.\n\nLas señales de advertencia de impedimento en otros conductores incluyen zigzaguear, desviarse, frenar de repente, circular muy despacio e ignorar las señales. Si sospechas que un conductor está impedido, mantén la distancia, no intentes detenerlo tú mismo y llama a las autoridades con una descripción y una ubicación.\n\nLa fatiga produce efectos similares al alcohol, como reflejos lentos y lapsos de atención. Conducir con sueño es peligroso por sí solo, así que no tomes la cafeína ni una ventanilla abierta como sustituto del descanso. Si tienes sueño, oríllate y descansa.'
      }
    }
  ],
  examples: [
    {
      title: { en: 'Judgment goes first', es: 'El criterio es lo primero que se pierde' },
      body: {
        en: 'Alcohol weakens judgment before it weakens movement, so a driver may feel sharper while actually misjudging speed and gaps. That false confidence is one reason impaired driving is so dangerous.',
        es: 'El alcohol debilita el criterio antes que el movimiento, por lo que un conductor puede sentirse más lúcido mientras en realidad calcula mal la velocidad y los huecos. Esa falsa confianza es una razón por la que conducir impedido es tan peligroso.'
      }
    },
    {
      title: { en: 'Medicine that impairs driving', es: 'Medicamentos que impiden conducir' },
      body: {
        en: 'A common allergy or sleep medicine can cause drowsiness and slow reactions. Driving under the influence of such a medicine is illegal in Florida when it impairs your normal faculties, even though the medicine is legal.',
        es: 'Un medicamento común para la alergia o para dormir puede causar somnolencia y ralentizar los reflejos. Conducir bajo la influencia de ese medicamento es ilegal en Florida cuando afecta tus facultades normales, aunque el medicamento sea legal.'
      }
    }
  ],
  scenarios: [
    {
      title: { en: 'A friend offers one more drink', es: 'Un amigo te ofrece una copa más' },
      prompt: {
        en: 'You have had a couple of drinks and feel fine, then a friend offers one more before you drive home. What should you do?',
        es: 'Has tomado un par de copas y te sientes bien, y luego un amigo te ofrece una más antes de que conduzcas a casa. ¿Qué deberías hacer?'
      },
      resolution: {
        en: 'Do not drink more and do not drive. Feeling fine is not a reliable guide, because alcohol impairs judgment first, so arrange a ride, a designated driver, or stay where you are.',
        es: 'No bebas más y no conduzcas. Sentirse bien no es una guía fiable, porque el alcohol afecta primero al criterio, así que organiza que te lleven, usa un conductor designado o quédate donde estás.'
      }
    },
    {
      title: { en: 'An impaired driver nearby', es: 'Un conductor impedido cerca de ti' },
      prompt: {
        en: 'You notice a driver weaving between lanes and braking suddenly. What should you do?',
        es: 'Notas que un conductor zigzaguea entre carriles y frena de repente. ¿Qué deberías hacer?'
      },
      resolution: {
        en: 'Stay well behind, do not try to pass or stop them yourself, and call law enforcement with the location, direction, and a description of the vehicle. Keep your own driving calm and predictable.',
        es: 'Mantente bien detrás, no intentes rebasarlo ni detenerlo tú mismo y llama a las autoridades con la ubicación, la dirección y una descripción del vehículo. Mantén tu propia conducción tranquila y predecible.'
      }
    }
  ],
  commonMistakes: {
    en: [
      'Believing that feeling fine means you are safe to drive after drinking.',
      'Assuming a prescription or over-the-counter medicine cannot impair driving.',
      'Relying on coffee, food, or a cold shower to sober up before driving.'
    ],
    es: [
      'Creer que sentirse bien significa que puedes conducir con seguridad después de beber.',
      'Suponer que un medicamento recetado o de venta libre no puede impedir la conducción.',
      'Confiar en el café, la comida o una ducha fría para recuperarse antes de conducir.'
    ]
  },
  vocabulary: [
    { en: 'DUI', es: 'DUI (conducir bajo influencia)', note: { en: 'Driving under the influence of alcohol or drugs.', es: 'Conducir bajo la influencia del alcohol o las drogas.' } },
    { en: 'BAC', es: 'Concentración de alcohol en sangre', note: { en: 'The measured amount of alcohol in the blood.', es: 'La cantidad de alcohol medida en la sangre.' } },
    { en: 'Zero tolerance', es: 'Tolerancia cero', note: { en: 'A very low legal limit applied to drivers under 21.', es: 'Un límite legal muy bajo que se aplica a los conductores menores de 21 años.' } },
    { en: 'Impairment', es: 'Impedimento', note: { en: 'A reduced ability to drive safely.', es: 'Una capacidad reducida para conducir con seguridad.' } },
    { en: 'Ignition interlock', es: 'Bloqueo de encendido', note: { en: 'A device that tests the driver breath before the car starts.', es: 'Un dispositivo que prueba el aliento del conductor antes de arrancar el auto.' } },
    { en: 'Designated driver', es: 'Conductor designado', note: { en: 'A person who stays sober to drive others home.', es: 'Una persona que se mantiene sobria para llevar a otros a casa.' } },
    { en: 'Depressant', es: 'Depresor', note: { en: 'A substance that slows the nervous system.', es: 'Una sustancia que ralentiza el sistema nervioso.' } },
    { en: 'Drowsy driving', es: 'Conducir con sueño', note: { en: 'Driving while tired, which slows reactions like alcohol.', es: 'Conducir cansado, lo que ralentiza los reflejos como el alcohol.' } }
  ],
  references: [
    {
      label: { en: 'Florida Driver License Handbook', es: 'Manual del Conductor de Florida' },
      url: 'https://www.flhsmv.gov/pdf/handbooks/englishdriverhandbook.pdf',
      section: { en: 'Alcohol and Other Drugs', es: 'Alcohol y otras drogas' }
    },
    {
      label: { en: 'Florida Statutes, Chapter 316', es: 'Estatutos de Florida, Capítulo 316' },
      url: 'https://www.leg.state.fl.us/statutes/',
      section: { en: 'Driving Under the Influence', es: 'Conducir bajo la influencia' }
    }
  ],
  quickCheck: [
    {
      question: { en: 'In Florida, the legal BAC limit for drivers 21 and older is:', es: 'En Florida, el límite legal de alcohol en sangre para conductores de 21 años o más es:' },
      options: [
        { en: '0.02', es: '0.02' },
        { en: '0.05', es: '0.05' },
        { en: '0.08', es: '0.08' },
        { en: '0.10', es: '0.10' }
      ],
      correctIndex: 2,
      explanation: {
        en: 'For drivers 21 and older, the legal limit is 0.08, though you can still be convicted of DUI below that level if your faculties are impaired.',
        es: 'Para los conductores de 21 años o más, el límite legal es 0.08, aunque aún pueden condenarte por DUI por debajo de ese nivel si tus facultades están afectadas.'
      }
    },
    {
      question: { en: 'What is the BAC limit for drivers under 21 in Florida?', es: '¿Cuál es el límite de alcohol en sangre para conductores menores de 21 años en Florida?' },
      options: [
        { en: '0.02', es: '0.02' },
        { en: '0.08', es: '0.08' },
        { en: '0.05', es: '0.05' },
        { en: 'There is no limit.', es: 'No hay límite.' }
      ],
      correctIndex: 0,
      explanation: {
        en: 'Florida applies zero tolerance to drivers under 21, so a level of 0.02 or higher is a violation.',
        es: 'Florida aplica tolerancia cero a los conductores menores de 21 años, por lo que un nivel de 0.02 o más es una infracción.'
      }
    },
    {
      question: { en: 'Which medicine can impair driving?', es: '¿Qué medicamento puede impedir la conducción?' },
      options: [
        { en: 'Only illegal drugs.', es: 'Solo las drogas ilegales.' },
        { en: 'Only medicines labeled for sleep.', es: 'Solo los medicamentos para dormir.' },
        { en: 'Some legal prescription and over-the-counter medicines.', es: 'Algunos medicamentos legales recetados y de venta libre.' },
        { en: 'No legal medicine can impair driving.', es: 'Ningún medicamento legal puede impedir la conducción.' }
      ],
      correctIndex: 2,
      explanation: {
        en: 'Many legal medicines, such as antihistamines and sleep aids, can cause drowsiness and slow reactions, and driving impaired by them is illegal in Florida.',
        es: 'Muchos medicamentos legales, como los antihistamínicos y los somníferos, pueden causar somnolencia y ralentizar los reflejos, y conducir impedido por ellos es ilegal en Florida.'
      }
    }
  ]
};

export default lesson;
