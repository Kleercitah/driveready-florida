/** Lección: Autopistas y adelantamiento */
export const lesson = {
  id: 'highways-passing',
  categoryId: 'highways-passing',
  order: 9,
  number: '09',
  estimatedMinutes: 12,
  title: { en: 'Highways & Passing', es: 'Autopistas y adelantamiento' },
  summary: {
    en: 'Highways and interstates move traffic fast, which rewards smooth, predictable driving. This lesson explains how to enter and exit highways, when passing is legal and safe, and how to drive on limited-access roads.',
    es: 'Las autopistas y las interestatales mueven el tráfico rápido, lo que premia una conducción suave y predecible. Esta lección explica cómo entrar y salir de las autopistas, cuándo adelantar es legal y seguro, y cómo circular por vías de acceso limitado.'
  },
  objectives: {
    en: [
      'Enter a highway safely using the on-ramp to match speed.',
      'Apply the rules for passing and for being passed.',
      'Recognize when passing is unsafe or prohibited.',
      'Exit safely and use express lanes and interstates correctly.'
    ],
    es: [
      'Incorporarte a una autopista con seguridad usando la rampa para igualar la velocidad.',
      'Aplicar las reglas para adelantar y para ser adelantado.',
      'Reconocer cuándo adelantar es inseguro o está prohibido.',
      'Salir con seguridad y usar correctamente los carriles expresos y las interestatales.'
    ]
  },
  sections: [
    {
      id: 'entering-the-highway',
      title: { en: 'Entering a Highway', es: 'Incorporarse a una autopista' },
      body: {
        en: 'An on-ramp is designed to let you build up speed so you can merge into highway traffic at a similar speed. Use the full length of the ramp to accelerate, check your mirrors, and look over your shoulder for a gap before you merge.\n\nTraffic already on the highway has the right of way, so you must yield and find a safe opening rather than expecting others to move over. If the ramp ends and traffic is heavy, you may need to slow and adjust, but you must still merge without forcing others to brake.\n\nOnce you are on the highway, settle into a steady speed and keep to the right except when passing. Entering at too low a speed creates a dangerous speed difference, and stopping at the end of a ramp is one of the riskiest mistakes on highways.',
        es: 'Una rampa de incorporación está diseñada para que ganes velocidad y puedas fusionarte con el tráfico de la autopista a una velocidad similar. Usa toda la longitud de la rampa para acelerar, revisa los espejos y mira por encima del hombro por si hay un hueco antes de incorporarte.\n\nEl tráfico que ya está en la autopista tiene la prioridad, así que debes ceder y buscar una abertura segura en lugar de esperar que los demás se aparten. Si la rampa termina y el tráfico es denso, puede que tengas que reducir y ajustarte, pero aun así debes incorporarte sin obligar a frenar a los demás.\n\nUna vez en la autopista, mantén una velocidad constante y circula por la derecha salvo al adelantar. Incorporarte a una velocidad demasiado baja crea una diferencia peligrosa, y detenerte al final de una rampa es uno de los errores más arriesgados en las autopistas.'
      }
    },
    {
      id: 'matching-speed-and-merging',
      title: { en: 'Matching Speed and Choosing a Lane', es: 'Igualar la velocidad y elegir un carril' },
      body: {
        en: 'Merging safely means matching the speed of traffic in the lane you are joining, not the speed of the ramp you just left. Look for a gap that is large enough to fit your vehicle plus a safety margin, then move in smoothly rather than abruptly.\n\nOn a highway with several lanes, the right lane is generally for slower traffic and vehicles entering and leaving, while the left lanes are for faster traffic and passing. The far-left paved shoulder is not a driving lane, and it is only for emergencies or disabled vehicles.\n\nOn many Florida freeways, the leftmost lane is a managed express lane. These lanes may require a transponder and a toll, and drivers who enter them without paying can be fined. Plan your lane changes early and never cross the solid lines that separate express lanes from general lanes.',
        es: 'Incorporarte con seguridad significa igualar la velocidad del tráfico del carril al que te unes, no la velocidad de la rampa que acabas de dejar. Busca un hueco lo bastante grande para que quepa tu vehículo más un margen de seguridad, y luego entra de forma suave en lugar de brusca.\n\nEn una autopista con varios carriles, el carril derecho es generalmente para el tráfico más lento y para los vehículos que entran y salen, mientras que los carriles izquierdos son para el tráfico más rápido y para adelantar. El arcén pavimentado más a la izquierda no es un carril de circulación y es solo para emergencias o vehículos averiados.\n\nEn muchas autopistas de Florida, el carril más a la izquierda es un carril expreso gestionado. Estos carriles pueden requerir un transpondedor y un peaje, y los conductores que entren en ellos sin pagar pueden ser multados. Planifica tus cambios de carril con antelación y nunca cruces las líneas continuas que separan los carriles expresos de los carriles generales.'
      }
    },
    {
      id: 'passing-rules',
      title: { en: 'Rules for Passing', es: 'Reglas para adelantar' },
      body: {
        en: 'Passing is normally done on the left, and you must signal before you pull out, check that the way is clear, and return to the original lane only when you can see the passed vehicle in your mirror. On a multi-lane road, the vehicle being passed should not speed up to block you.\n\nWhen you pass a vehicle, accelerate smoothly and move through the other driver blind spot without lingering, then signal and return to the lane at a safe distance. Maintain your speed during the pass so the maneuver is quick and predictable.\n\nPassing is prohibited where it would be unsafe, such as on a curve, at the crest of a hill, at a railroad crossing, or at an intersection, and wherever a solid yellow line, a no-passing sign, or a pennant marks the zone. In these places you simply wait until you reach a legal passing area.',
        es: 'El adelantamiento se hace normalmente por la izquierda, y debes señalizar antes de salir, comprobar que el camino está libre y volver al carril original solo cuando veas el vehículo rebasado en tu espejo. En una vía de varios carriles, el vehículo al que adelantas no debería acelerar para bloquearte.\n\nCuando rebases un vehículo, acelera con suavidad y atraviesa el punto ciego del otro conductor sin quedarte, luego señaliza y vuelve al carril a una distancia segura. Mantén tu velocidad durante el adelantamiento para que la maniobra sea rápida y predecible.\n\nAdelantar está prohibido donde sería inseguro, como en una curva, en la cima de una cuesta, en un cruce de ferrocarril o en una intersección, y dondequiera que una línea amarilla continua, una señal de no adelantar o un banderín marque la zona. En esos lugares simplemente esperas hasta llegar a una zona de adelantamiento legal.'
      }
    },
    {
      id: 'when-not-to-pass',
      title: { en: 'When Not to Pass', es: 'Cuándo no adelantar' },
      body: {
        en: 'Never pass when you cannot see far enough ahead to complete the maneuver safely, because an oncoming vehicle could appear with no time to react. Do not pass when approaching a hill crest, a curve, a bridge, a tunnel, or a railroad crossing where your view is blocked.\n\nDo not pass at intersections or where a solid line, a sign, or a pennant forbids it. Do not pass a vehicle that has stopped at a crosswalk, a school bus loading or unloading children, or an emergency vehicle that is responding to a call.\n\nWhenever you are unsure whether passing is safe or legal, wait. The few seconds you might save are not worth the risk of a head-on crash, which is among the most serious kinds of collisions on two-lane roads.',
        es: 'Nunca adelantes cuando no puedas ver lo suficiente hacia adelante para completar la maniobra con seguridad, porque un vehículo en sentido contrario podría aparecer sin tiempo para reaccionar. No adelantes al acercarte a la cima de una cuesta, una curva, un puente, un túnel o un cruce de ferrocarril donde tu visión esté bloqueada.\n\nNo adelantes en intersecciones ni donde una línea continua, una señal o un banderín lo prohíban. No adelantes a un vehículo detenido en un paso de peatones, a un autobús escolar subiendo o bajando niños ni a un vehículo de emergencia que responde a una llamada.\n\nSiempre que dudes de si adelantar es seguro o legal, espera. Los pocos segundos que podrías ahorrar no valen el riesgo de un choque frontal, que es uno de los tipos más graves de colisión en vías de dos carriles.'
      }
    },
    {
      id: 'being-passed',
      title: { en: 'Being Passed', es: 'Cuando te adelantan' },
      body: {
        en: 'When another driver wants to pass you, keep to the right, hold your speed steady, and give them room to complete the pass. Do not speed up, because that keeps the passing driver alongside you longer and increases the danger for both of you.\n\nIf you see a vehicle that has started to pass and cannot finish safely, slowing down slightly can help it return to the lane sooner. Being predictable is more valuable than being right, and courtesy prevents crashes.\n\nThe same rules apply to cyclists and motorcyclists you are passing: give them enough space, and never crowd them into the edge of the road. Move over a lane when possible to give anyone you pass a comfortable margin.',
        es: 'Cuando otro conductor quiere adelantarte, mantente a la derecha, conserva una velocidad constante y dale espacio para completar el adelantamiento. No aceleres, porque eso mantiene al conductor que adelanta más tiempo a tu lado y aumenta el peligro para ambos.\n\nSi ves un vehículo que ha empezado a adelantar y no puede terminar con seguridad, reducir ligeramente la velocidad puede ayudarlo a volver al carril antes. Ser predecible vale más que tener razón, y la cortesía evita choques.\n\nLas mismas reglas se aplican a los ciclistas y motociclistas que adelantas: dales suficiente espacio y nunca los acorrales contra el borde de la vía. Cambia de carril cuando sea posible para dar a quien adelantas un margen cómodo.'
      }
    },
    {
      id: 'exiting-the-highway',
      title: { en: 'Exiting the Highway', es: 'Salir de la autopista' },
      body: {
        en: 'Plan your exit well ahead by watching the guide signs and moving into the correct lane early. Signal before the exit, slow down after you are on the deceleration ramp rather than in the travel lane, and obey the advisory speed posted for the curve of the ramp.\n\nDo not cross a gore area, which is the triangular zone marked with white lines, and do not back up if you miss the exit. Continue to the next exit and turn around safely, because backing up on a highway is both illegal and extremely dangerous.\n\nIf you are exiting from an express or toll lane, make sure you know the rules for that lane and pay as required. Missing a toll can lead to a violation notice, and trying to squeeze across the barriers at the last moment risks a serious crash.',
        es: 'Planifica tu salida con antelación observando las señales informativas y pasando al carril correcto temprano. Señaliza antes de la salida, reduce la velocidad después de estar en la rampa de desaceleración y no en el carril de circulación, y respeta la velocidad recomendada que se indica para la curva de la rampa.\n\nNo cruces una zona de separación, que es la zona triangular marcada con líneas blancas, y no retrocedas si te pasas la salida. Continúa hasta la siguiente salida y da la vuelta con seguridad, porque retroceder en una autopista es ilegal y sumamente peligroso.\n\nSi sales desde un carril expreso o de peaje, asegúrate de conocer las reglas de ese carril y pagar lo que corresponda. Perder un peaje puede generar un aviso de infracción, e intentar cruzar las barreras en el último momento arriesga un choque grave.'
      }
    }
  ],
  examples: [
    {
      title: { en: 'Using the full on-ramp', es: 'Usar toda la rampa de incorporación' },
      body: {
        en: 'The on-ramp is your space to build speed. Using only part of it leaves you entering slower than traffic, which forces other drivers to brake and makes the merge dangerous.',
        es: 'La rampa de incorporación es tu espacio para ganar velocidad. Usar solo una parte te hace entrar más lento que el tráfico, lo que obliga a otros conductores a frenar y hace peligrosa la incorporación.'
      }
    },
    {
      title: { en: 'A pass in a no-passing zone', es: 'Un adelantamiento en zona de no adelantar' },
      body: {
        en: 'A solid yellow line on your side, or a pennant sign, means passing is not allowed on that stretch. Even if the road looks clear, a hidden oncoming car on a curve or hill crest leaves no room to recover.',
        es: 'Una línea amarilla continua en tu lado, o una señal de banderín, significa que no se permite adelantar en ese tramo. Aunque la vía parezca libre, un auto oculto que venga en sentido contrario en una curva o una cima deja sin margen para reaccionar.'
      }
    }
  ],
  scenarios: [
    {
      title: { en: 'Merging onto a busy highway', es: 'Incorporarte a una autopista concurrida' },
      prompt: {
        en: 'You are on an on-ramp and the highway is busy. What is the correct way to merge?',
        es: 'Estás en una rampa de incorporación y la autopista está concurrida. ¿Cuál es la forma correcta de incorporarte?'
      },
      resolution: {
        en: 'Use the ramp to match the speed of highway traffic, signal, and merge into a safe gap while yielding to traffic already on the highway. Do not stop at the end of the ramp, because that creates a dangerous speed difference.',
        es: 'Usa la rampa para igualar la velocidad del tráfico de la autopista, señaliza e incorpórate a un hueco seguro cediendo el paso al tráfico que ya está en la autopista. No te detengas al final de la rampa, porque eso crea una diferencia de velocidad peligrosa.'
      }
    },
    {
      title: { en: 'Approaching a slow truck on a two-lane road', es: 'Acercarse a un camión lento en una vía de dos carriles' },
      prompt: {
        en: 'You are behind a slow truck on a two-lane road and you want to pass, but there is a curve ahead. What should you do?',
        es: 'Estás detrás de un camión lento en una vía de dos carriles y quieres adelantar, pero hay una curva adelante. ¿Qué deberías hacer?'
      },
      resolution: {
        en: 'Do not pass where your view is blocked by the curve. Wait for a straight stretch with a broken line and clear oncoming traffic, then pass quickly and return to your lane only when you can see the truck in your mirror.',
        es: 'No adelantes donde la curva te bloquea la visión. Espera a un tramo recto con línea discontinua y sin tráfico en sentido contrario, luego adelanta rápido y vuelve a tu carril solo cuando veas el camión en tu espejo.'
      }
    }
  ],
  commonMistakes: {
    en: [
      'Merging onto a highway at too low a speed or stopping at the end of the ramp.',
      'Passing where a curve, hill, or solid line blocks your view.',
      'Speeding up while another vehicle is passing you.'
    ],
    es: [
      'Incorporarte a una autopista a muy baja velocidad o detenerte al final de la rampa.',
      'Adelantar donde una curva, una cuesta o una línea continua bloquean tu visión.',
      'Acelerar mientras otro vehículo te está adelantando.'
    ]
  },
  vocabulary: [
    { en: 'On-ramp', es: 'Rampa de incorporación', note: { en: 'The ramp used to enter a highway.', es: 'La rampa que se usa para entrar a una autopista.' } },
    { en: 'Merge', es: 'Incorporarse', note: { en: 'To join the flow of traffic smoothly.', es: 'Unirse al flujo del tráfico con suavidad.' } },
    { en: 'Passing', es: 'Adelantamiento', note: { en: 'Moving ahead of another vehicle in the same direction.', es: 'Avanzar por delante de otro vehículo en la misma dirección.' } },
    { en: 'No-passing zone', es: 'Zona de no adelantamiento', note: { en: 'A stretch where passing is not allowed.', es: 'Un tramo donde no se permite adelantar.' } },
    { en: 'Gore area', es: 'Zona de separación', note: { en: 'A triangular area between a lane and an exit that you must not drive on.', es: 'Un área triangular entre un carril y una salida por la que no debes circular.' } },
    { en: 'Express lane', es: 'Carril expreso', note: { en: 'A managed lane that may require a toll or transponder.', es: 'Un carril gestionado que puede requerir un peaje o transpondedor.' } },
    { en: 'Deceleration ramp', es: 'Rampa de desaceleración', note: { en: 'The ramp where you slow down after leaving the highway.', es: 'La rampa donde reduces la velocidad tras dejar la autopista.' } },
    { en: 'Shoulder', es: 'Arcén', note: { en: 'The edge of the road, which is not a driving lane.', es: 'El borde de la vía, que no es un carril de circulación.' } }
  ],
  references: [
    {
      label: { en: 'Florida Driver License Handbook', es: 'Manual del Conductor de Florida' },
      url: 'https://www.flhsmv.gov/pdf/handbooks/englishdriverhandbook.pdf',
      section: { en: 'Freeways and Passing', es: 'Autopistas y adelantamiento' }
    },
    {
      label: { en: 'Florida Statutes, Chapter 316', es: 'Estatutos de Florida, Capítulo 316' },
      url: 'https://www.leg.state.fl.us/statutes/',
      section: { en: 'Overtaking and Passing', es: 'Rebasar y adelantar' }
    }
  ],
  quickCheck: [
    {
      question: { en: 'When merging onto a highway, who has the right of way?', es: 'Al incorporarte a una autopista, ¿quién tiene la prioridad?' },
      options: [
        { en: 'The merging vehicle.', es: 'El vehículo que se incorpora.' },
        { en: 'Traffic already on the highway.', es: 'El tráfico que ya está en la autopista.' },
        { en: 'Whichever vehicle is larger.', es: 'El vehículo que sea más grande.' },
        { en: 'Whoever signals first.', es: 'El que señalice primero.' }
      ],
      correctIndex: 1,
      explanation: {
        en: 'A driver entering a highway must yield to traffic already on it, using the ramp to match speed and find a safe gap.',
        es: 'Un conductor que entra a una autopista debe ceder el paso al tráfico que ya está en ella, usando la rampa para igualar la velocidad y encontrar un hueco seguro.'
      }
    },
    {
      question: { en: 'Passing is normally done:', es: 'El adelantamiento se hace normalmente:' },
      options: [
        { en: 'On the right.', es: 'Por la derecha.' },
        { en: 'On the left.', es: 'Por la izquierda.' },
        { en: 'On the shoulder.', es: 'Por el arcén.' },
        { en: 'In the center turn lane.', es: 'En el carril central de giro.' }
      ],
      correctIndex: 1,
      explanation: {
        en: 'Passing is normally done on the left, with a signal, a clear view, and a return to the lane only when it is safe.',
        es: 'El adelantamiento se hace normalmente por la izquierda, con señal, visión clara y una vuelta al carril solo cuando sea seguro.'
      }
    },
    {
      question: { en: 'What should you do when another vehicle is passing you?', es: '¿Qué debes hacer cuando otro vehículo te está adelantando?' },
      options: [
        { en: 'Speed up to stop the pass.', es: 'Acelerar para impedir el adelantamiento.' },
        { en: 'Move left into its path.', es: 'Moverte a la izquierda en su trayectoria.' },
        { en: 'Hold your speed and keep to the right.', es: 'Mantener tu velocidad y permanecer a la derecha.' },
        { en: 'Brake hard suddenly.', es: 'Frenar bruscamente de golpe.' }
      ],
      correctIndex: 2,
      explanation: {
        en: 'Helping the passing driver by holding a steady speed and keeping right lets them complete the pass sooner and reduces risk.',
        es: 'Ayudar al conductor que adelanta manteniendo una velocidad constante y la derecha le permite completar el adelantamiento antes y reduce el riesgo.'
      }
    }
  ]
};

export default lesson;
