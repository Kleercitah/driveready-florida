/** Lección: Emergencias y situaciones especiales */
export const lesson = {
  id: 'emergencies',
  categoryId: 'emergencies',
  order: 8,
  number: '08',
  estimatedMinutes: 12,
  title: { en: 'Emergencies & Special Situations', es: 'Emergencias y situaciones especiales' },
  summary: {
    en: 'Emergencies demand calm, correct reactions rather than panic. This lesson covers brake failure, tire blowouts, skids, railroad crossings, and weather hazards, so you know what to do before a sudden problem happens.',
    es: 'Las emergencias exigen reacciones tranquilas y correctas en lugar de pánico. Esta lección cubre el fallo de frenos, los reventones de neumáticos, los derrapes, los cruces de ferrocarril y los peligros del clima, para que sepas qué hacer antes de que ocurra un problema repentino.'
  },
  objectives: {
    en: [
      'Respond correctly to brake failure and tire blowouts.',
      'Recover safely from a skid on a slippery surface.',
      'Behave safely at railroad crossings and around trains.',
      'Handle vehicle breakdowns and severe weather hazards.'
    ],
    es: [
      'Responder correctamente a un fallo de frenos y a un reventón de neumático.',
      'Recuperarte con seguridad de un derrape en una superficie resbaladiza.',
      'Actuar con seguridad en los cruces de ferrocarril y cerca de los trenes.',
      'Manejar averías del vehículo y peligros meteorológicos graves.'
    ]
  },
  sections: [
    {
      id: 'brake-failure',
      title: { en: 'Brake Failure', es: 'Fallo de frenos' },
      body: {
        en: 'If your brakes fail, stay calm and pump the brake pedal firmly and repeatedly, because this can build up pressure and restore some braking. Downshift to a lower gear so the engine helps slow the car, and apply the parking brake gradually rather than all at once.\n\nLook for an escape route, such as an open shoulder, an uphill grade, or a gravel area that will slow you. If you must stop quickly, you can rub the wheels against a curb or guardrail to shed speed, but do it gently to avoid losing control or spinning.\n\nAvoid turning off the engine while moving, because you would lose power steering and possibly the ability to steer. Sound your horn and flash your lights to warn others, and only use the parking brake fully once you are prepared for a sudden stop.',
        es: 'Si fallan los frenos, mantén la calma y bombea el pedal del freno con firmeza y repetidamente, porque esto puede generar presión y recuperar algo de frenado. Reduce a una marcha más baja para que el motor ayude a frenar el auto, y aplica el freno de mano poco a poco en lugar de golpe.\n\nBusca una ruta de escape, como un arcén libre, una pendiente ascendente o una zona de grava que te frene. Si debes detenerte rápido, puedes rozar las ruedas contra un bordillo o una barandilla para perder velocidad, pero hazlo suavemente para no perder el control ni girar.\n\nEvita apagar el motor en movimiento, porque perderías la dirección asistida y posiblemente la capacidad de dirigir. Toca el claxon y destella las luces para avisar a los demás, y usa el freno de mano a fondo solo cuando estés preparado para una parada repentina.'
      }
    },
    {
      id: 'tire-blowout',
      title: { en: 'Tire Blowouts', es: 'Reventón de neumáticos' },
      body: {
        en: 'When a tire blows out, the car may pull to the side of the failed tire and the steering may jerk. Grip the wheel firmly with both hands, keep the car going straight, and ease off the accelerator slowly instead of braking hard.\n\nDo not slam on the brakes, because that can make the car swerve or roll, especially if the failure is at the front. Let the car slow gradually, then pull off the road to a safe place well away from traffic before you change the tire or call for help.\n\nIf a front tire blows, the pull will be stronger, so keep the wheel straight and steer gently as you slow. Turn on your hazard lights as soon as you can to warn drivers behind you that you are slowing.',
        es: 'Cuando un neumático revienta, el auto puede tirar hacia el lado del neumático dañado y la dirección puede dar un tirón. Agarra el volante con firmeza con las dos manos, mantén el auto recto y suelta el acelerador despacio en lugar de frenar con fuerza.\n\nNo claves los frenos, porque eso puede hacer que el auto se desvíe o vuelque, sobre todo si el fallo es en el frente. Deja que el auto reduzca poco a poco y luego oríllate a un lugar seguro bien apartado del tráfico antes de cambiar el neumático o pedir ayuda.\n\nSi revienta un neumático delantero, el tirón será más fuerte, así que mantén el volante recto y dirige con suavidad mientras reduces. Enciende las luces de emergencia en cuanto puedas para avisar a los conductores de detrás de que estás reduciendo.'
      }
    },
    {
      id: 'skids',
      title: { en: 'Skids', es: 'Derrapes' },
      body: {
        en: 'A skid happens when the tires lose grip, often on a wet road, ice, sand, or during hard braking. If your rear wheels skid, steer gently in the direction you want the front of the car to go, and ease off the accelerator and brakes so the tires can regain traction.\n\nIf your front wheels skid, you lose steering and the car goes straight even as you turn the wheel. Ease off the accelerator and brakes to let the front tires grip again, then steer where you want to go. In both cases, look and steer where you want the car to go, not at what you fear hitting.\n\nPreventing a skid is easier than fixing one. Slow down before curves and wet surfaces, brake gently, and avoid sudden steering, which is what breaks the grip in the first place. On Florida roads, the first rain after a dry spell is especially slippery.',
        es: 'Un derrape ocurre cuando los neumáticos pierden agarre, a menudo en una vía mojada, con hielo, arena o durante un frenado fuerte. Si las ruedas traseras derrapan, dirige suavemente en la dirección hacia la que quieres que vaya el frente del auto y suelta el acelerador y los frenos para que los neumáticos recuperen tracción.\n\nSi las ruedas delanteras derrapan, pierdes la dirección y el auto sigue recto aunque gires el volante. Suelta el acelerador y los frenos para que los neumáticos delanteros vuelvan a agarrar, y luego dirige hacia donde quieres ir. En ambos casos, mira y dirige hacia donde quieres que vaya el auto, no hacia lo que temes golpear.\n\nPrevenir un derrape es más fácil que corregirlo. Reduce antes de las curvas y de las superficies mojadas, frena con suavidad y evita girar bruscamente, que es lo que rompe el agarre en primer lugar. En las vías de Florida, la primera lluvia tras un periodo seco es especialmente resbaladiza.'
      }
    },
    {
      id: 'railroad-crossings',
      title: { en: 'Railroad Crossings', es: 'Cruces de ferrocarril' },
      body: {
        en: 'Railroad crossings require you to slow down and look both ways, because a train cannot stop quickly and always has the right of way. If warning lights are flashing, a gate is lowering, or you can see or hear a train, stop well before the tracks and wait.\n\nNever stop on the tracks or start across unless you are sure you can clear the entire crossing, including any vehicle in front of you. If your vehicle stalls on the tracks, get everyone out and away from the tracks immediately, then call for help rather than trying to restart the car.\n\nTrains can be closer and moving faster than they appear, and at night a train may be silent until it is very near. At a crossing with no gates or lights, stop, look both ways, and listen before you proceed, and never try to beat a train.',
        es: 'Los cruces de ferrocarril exigen que reduzcas y mires en ambos sentidos, porque un tren no puede detenerse rápido y siempre tiene la prioridad. Si las luces de advertencia parpadean, una barrera está bajando o puedes ver u oír un tren, detente bien antes de las vías y espera.\n\nNunca te detengas sobre las vías ni empieces a cruzar salvo que estés seguro de poder despejar todo el cruce, incluido cualquier vehículo que tengas delante. Si tu vehículo se cala sobre las vías, saca a todos del auto y aléjate de las vías de inmediato, y luego pide ayuda en lugar de intentar arrancar el auto.\n\nLos trenes pueden estar más cerca y moverse más rápido de lo que parecen, y de noche un tren puede ser silencioso hasta que está muy cerca. En un cruce sin barreras ni luces, detente, mira en ambos sentidos y escucha antes de avanzar, y nunca trates de ganarle a un tren.'
      }
    },
    {
      id: 'breakdowns-and-hazards',
      title: { en: 'Breakdowns and Road Hazards', es: 'Averías y peligros en la vía' },
      body: {
        en: 'If your vehicle breaks down, get it as far off the traveled lane as you can and onto the shoulder or a safe area. Turn on your hazard lights, raise the hood if it is safe, and stay in the vehicle with your seat belt on if traffic makes standing outside dangerous.\n\nPlace warning triangles or reflectors behind your car when it is safe and you have them, especially on a highway, so approaching drivers have time to change lanes. When help is far away, call for roadside assistance and give a clear description of your location using mile markers.\n\nDebris, potholes, and animals are common roadway hazards. Do not swerve sharply at the last second, since that can cause a worse crash than the hazard itself; slow down in a controlled way and steer around only when you have checked that the space beside you is clear.',
        es: 'Si tu vehículo se avería, llévalo lo más lejos posible del carril de circulación, al arcén o a una zona segura. Enciende las luces de emergencia, levanta el capó si es seguro y permanece en el vehículo con el cinturón puesto si el tráfico hace peligroso estar de pie afuera.\n\nColoca triángulos de advertencia o reflectores detrás de tu auto cuando sea seguro y los tengas, sobre todo en una autopista, para que los conductores que se aproximan tengan tiempo de cambiar de carril. Cuando la ayuda esté lejos, llama a asistencia en carretera y da una descripción clara de tu ubicación usando los marcadores de milla.\n\nLos escombros, los baches y los animales son peligros comunes en la vía. No gires bruscamente en el último segundo, ya que eso puede causar un choque peor que el propio peligro; reduce de forma controlada y esquiva solo cuando hayas comprobado que el espacio a tu lado está libre.'
      }
    },
    {
      id: 'severe-weather',
      title: { en: 'Severe Weather', es: 'Clima severo' },
      body: {
        en: 'Florida is known for sudden downpours, lightning, and tropical storms. When heavy rain reduces visibility, slow down, use your headlights, and increase your following distance, and if you cannot see well, pull off the road in a safe place rather than continuing blindly.\n\nIf you are caught in strong wind or a tornado warning, do not try to outrun it in the car. Get out of the vehicle and take shelter in a sturdy building, or if none is available, lie in a low ditch and protect your head, because a vehicle can be blown over.\n\nNever drive through moving flood water, because even shallow water can hide a washed-out road or sweep a car away. Water deep enough to cover the road is a reason to stop and turn around, not to test how far you can go.',
        es: 'Florida es conocida por los aguaceros repentinos, los rayos y las tormentas tropicales. Cuando la lluvia intensa reduce la visibilidad, reduce la velocidad, usa los faros y aumenta tu distancia de seguimiento, y si no ves bien, oríllate en un lugar seguro en lugar de seguir a ciegas.\n\nSi te sorprenden vientos fuertes o un aviso de tornado, no intentes escapar en el auto. Baja del vehículo y refúgiate en un edificio sólido o, si no hay ninguno disponible, túmbate en una zanja baja y protégete la cabeza, porque un vehículo puede volcar por el viento.\n\nNunca conduzcas por agua de inundación en movimiento, porque incluso el agua poco profunda puede ocultar una vía socavada o arrastrar un auto. El agua lo bastante profunda para cubrir la vía es motivo para detenerte y dar la vuelta, no para probar hasta dónde puedes llegar.'
      }
    }
  ],
  examples: [
    {
      title: { en: 'Pumping the brakes', es: 'Bombear los frenos' },
      body: {
        en: 'When brakes fail, pumping the pedal can sometimes restore pressure, and downshifting uses the engine to help slow the car. Looking for an escape route matters as much as slowing down.',
        es: 'Cuando fallan los frenos, bombear el pedal a veces recupera presión, y reducir marchas usa el motor para ayudar a frenar el auto. Buscar una ruta de escape importa tanto como reducir la velocidad.'
      }
    },
    {
      title: { en: 'Steering into a skid', es: 'Dirigir hacia el derrape' },
      body: {
        en: 'If the rear of the car slides, steer gently in the direction you want the front to point and ease off the pedals. This helps the tires regain grip instead of making the slide worse.',
        es: 'Si la parte trasera del auto se desliza, dirige suavemente hacia donde quieres que apunte el frente y suelta los pedales. Esto ayuda a que los neumáticos recuperen agarre en lugar de empeorar el deslizamiento.'
      }
    }
  ],
  scenarios: [
    {
      title: { en: 'A tire blows at highway speed', es: 'Revienta un neumático a velocidad de autopista' },
      prompt: {
        en: 'A front tire blows out while you are driving at highway speed. What should you do?',
        es: 'Revienta un neumático delantero mientras circulas a velocidad de autopista. ¿Qué deberías hacer?'
      },
      resolution: {
        en: 'Grip the wheel firmly, keep the car straight, and ease off the accelerator without braking hard. Let the car slow gradually, then pull off to a safe place well away from traffic.',
        es: 'Agarra el volante con firmeza, mantén el auto recto y suelta el acelerador sin frenar con fuerza. Deja que el auto reduzca poco a poco y luego oríllate a un lugar seguro bien apartado del tráfico.'
      }
    },
    {
      title: { en: 'Stalled on railroad tracks', es: 'Calado sobre las vías del tren' },
      prompt: {
        en: 'Your car stalls on a railroad crossing and warning lights begin to flash. What should you do?',
        es: 'Tu auto se cala sobre un cruce de ferrocarril y las luces de advertencia empiezan a parpadear. ¿Qué deberías hacer?'
      },
      resolution: {
        en: 'Get everyone out and move well away from the tracks immediately, then call for help. Do not stay in the car to try to restart it, because a train cannot stop in time.',
        es: 'Saca a todos y aléjate bien de las vías de inmediato, y luego pide ayuda. No te quedes en el auto intentando arrancarlo, porque un tren no puede detenerse a tiempo.'
      }
    }
  ],
  commonMistakes: {
    en: [
      'Slamming on the brakes after a tire blowout instead of easing off the accelerator.',
      'Stopping or lingering on railroad tracks.',
      'Driving into moving flood water to test its depth.'
    ],
    es: [
      'Clavar los frenos tras un reventón de neumático en lugar de soltar el acelerador.',
      'Detenerse o quedarse sobre las vías del tren.',
      'Conducir hacia agua de inundación en movimiento para probar su profundidad.'
    ]
  },
  vocabulary: [
    { en: 'Blowout', es: 'Reventón', note: { en: 'A sudden loss of tire air pressure.', es: 'Una pérdida repentina de presión de aire en un neumático.' } },
    { en: 'Skid', es: 'Derrape', note: { en: 'Sliding when tires lose grip.', es: 'Deslizarse cuando los neumáticos pierden agarre.' } },
    { en: 'Traction', es: 'Tracción', note: { en: 'The grip between tires and the road.', es: 'El agarre entre los neumáticos y la vía.' } },
    { en: 'Hazard lights', es: 'Luces de emergencia', note: { en: 'Flashing lights that warn others of a problem.', es: 'Luces intermitentes que advierten a los demás de un problema.' } },
    { en: 'Shoulder', es: 'Arcén', note: { en: 'The edge of the road outside the travel lane.', es: 'El borde de la vía fuera del carril de circulación.' } },
    { en: 'Downshift', es: 'Reducir marcha', note: { en: 'To move to a lower gear to help slow down.', es: 'Cambiar a una marcha más baja para ayudar a frenar.' } },
    { en: 'Railroad crossing', es: 'Cruce de ferrocarril', note: { en: 'A place where the road crosses train tracks.', es: 'Un lugar donde la vía cruza las vías del tren.' } },
    { en: 'Flash flood', es: 'Inundación repentina', note: { en: 'A sudden, fast rise of water on roads.', es: 'Una subida repentina y rápida del agua en las vías.' } }
  ],
  references: [
    {
      label: { en: 'Florida Driver License Handbook', es: 'Manual del Conductor de Florida' },
      url: 'https://www.flhsmv.gov/pdf/handbooks/englishdriverhandbook.pdf',
      section: { en: 'Handling Emergencies', es: 'Manejo de emergencias' }
    },
    {
      label: { en: 'Florida Statutes, Chapter 316', es: 'Estatutos de Florida, Capítulo 316' },
      url: 'https://www.leg.state.fl.us/statutes/',
      section: { en: 'Railroad Crossings and Stopping', es: 'Cruces de ferrocarril y detención' }
    }
  ],
  quickCheck: [
    {
      question: { en: 'What should you do first if a front tire blows out at speed?', es: '¿Qué debes hacer primero si revienta un neumático delantero a velocidad?' },
      options: [
        { en: 'Brake as hard as you can.', es: 'Frenar con toda tu fuerza.' },
        { en: 'Grip the wheel, keep straight, and ease off the accelerator.', es: 'Agarra el volante, mantén el auto recto y suelta el acelerador.' },
        { en: 'Turn sharply to the shoulder.', es: 'Girar bruscamente hacia el arcén.' },
        { en: 'Turn off the engine immediately.', es: 'Apagar el motor de inmediato.' }
      ],
      correctIndex: 1,
      explanation: {
        en: 'Holding the wheel firmly and easing off the accelerator lets the car slow gradually without swerving or rolling, unlike hard braking.',
        es: 'Sujetar el volante con firmeza y soltar el acelerador deja que el auto reduzca poco a poco sin desviarse ni volcar, a diferencia de frenar con fuerza.'
      }
    },
    {
      question: { en: 'What should you do if your vehicle stalls on railroad tracks?', es: '¿Qué debes hacer si tu vehículo se cala sobre las vías del tren?' },
      options: [
        { en: 'Stay inside and keep trying to start it.', es: 'Quedarte dentro e intentar arrancarlo.' },
        { en: 'Get everyone out and move away from the tracks.', es: 'Sacar a todos y alejarse de las vías.' },
        { en: 'Push the car slowly by yourself.', es: 'Empujar el auto despacio tú solo.' },
        { en: 'Wait for the gate to lift.', es: 'Esperar a que suba la barrera.' }
      ],
      correctIndex: 1,
      explanation: {
        en: 'A train cannot stop in time, so getting everyone out and away from the tracks immediately is the safest action.',
        es: 'Un tren no puede detenerse a tiempo, así que sacar a todos y alejarse de las vías de inmediato es la acción más segura.'
      }
    },
    {
      question: { en: 'If the rear of your car starts to skid, you should:', es: 'Si la parte trasera de tu auto empieza a derrapar, deberías:' },
      options: [
        { en: 'Brake hard and hold the wheel straight.', es: 'Frenar fuerte y mantener el volante recto.' },
        { en: 'Steer gently toward where you want the car to go and ease off the pedals.', es: 'Dirigir suavemente hacia donde quieres que vaya el auto y soltar los pedales.' },
        { en: 'Accelerate to pull out of the skid.', es: 'Acelerar para salir del derrape.' },
        { en: 'Turn the wheel away from the direction of travel.', es: 'Girar el volante en dirección contraria a la marcha.' }
      ],
      correctIndex: 1,
      explanation: {
        en: 'Steering gently in the direction you want to go and easing off the pedals helps the tires regain grip during a rear-wheel skid.',
        es: 'Dirigir suavemente hacia donde quieres ir y soltar los pedales ayuda a que los neumáticos recuperen agarre durante un derrape de ruedas traseras.'
      }
    }
  ]
};

export default lesson;
