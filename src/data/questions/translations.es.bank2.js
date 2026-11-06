/**
 * Traducciones al español · banco 2
 * (defensive-driving, alcohol-drugs, emergencies, highways-passing, florida-laws).
 *
 * Clave = id de la pregunta. `options` conserva el MISMO orden que el banco
 * (índice 0 = opción A, 1 = B, 2 = C, 3 = D). La respuesta correcta NO cambia:
 * solo se traduce el contenido visible.
 */
export const translationsEs = {
  // ---------------------------------------------------------------------------
  // Defensive Driving (dd-001 .. dd-015)
  // ---------------------------------------------------------------------------
  'dd-001': {
    question: 'En condiciones normales de conducción, ¿cuál es la distancia mínima recomendada de seguimiento respecto al vehículo de adelante?',
    options: ['Un segundo', 'Dos segundos', 'Tres segundos', 'Cinco segundos']
  },
  'dd-002': {
    question: 'Cuando conduces bajo lluvia intensa, ¿cómo debes ajustar tu distancia de seguimiento?',
    options: [
      'Mantenerla exactamente igual que con tiempo seco',
      'Reducirla para ir más cerca del auto de adelante',
      'Aumentarla para tener más tiempo de reacción',
      'Ignorar el auto de adelante y solo igualar su velocidad'
    ]
  },
  'dd-003': {
    question: 'Los conductores defensivos mantienen la vista en movimiento y miran bien hacia adelante del vehículo principalmente para...',
    options: [
      'Admirar el paisaje a lo largo de la vía',
      'Detectar peligros con suficiente anticipación para reaccionar a tiempo',
      'Evitar tener que usar los espejos',
      'Mantener la radio a un volumen seguro'
    ]
  },
  'dd-004': {
    question: 'Antes de cambiar de carril, ¿qué debes hacer además de revisar los espejos?',
    options: [
      'Tocar la bocina para avisar a otros conductores',
      'Girar brevemente la cabeza para revisar el punto ciego',
      'Acelerar bruscamente para avanzar primero',
      'Encender las luces altas'
    ]
  },
  'dd-005': {
    question: '¿Cuál afirmación sobre los cinturones de seguridad es correcta?',
    options: [
      'Solo se necesitan en las autopistas',
      'Deben usarlos el conductor y los pasajeros para reducir las lesiones',
      'Reemplazan la necesidad de conducir con cuidado',
      'Son opcionales en los viajes cortos'
    ]
  },
  'dd-006': {
    question: 'Al compartir la vía con una motocicleta, un conductor debe...',
    options: [
      'Compartir el mismo carril con el motociclista',
      'Darle a la motocicleta todo el ancho del carril',
      'Conducir muy cerca detrás de la motocicleta',
      'Tocar la bocina para avisar al motociclista'
    ]
  },
  'dd-007': {
    question: 'Los camiones grandes tienen puntos ciegos, a menudo llamados zonas de exclusión (No-Zones). Para conducir con seguridad cerca de un camión debes...',
    options: [
      'Permanecer al lado de la cabina durante mucho tiempo',
      'Evitar quedarte en los puntos ciegos del camión',
      'Seguirlo de cerca para ahorrar espacio en la vía',
      'Cortarle el paso justo después de adelantarlo'
    ]
  },
  'dd-008': {
    question: 'Cuando conduces con niebla, debes...',
    options: [
      'Usar las luces altas',
      'Reducir la velocidad y usar las luces bajas',
      'Acelerar para atravesarla más rápido',
      'Encender las luces interiores'
    ]
  },
  'dd-009': {
    question: 'En comparación con la conducción de día, por la noche generalmente debes...',
    options: [
      'Conducir más rápido para pasar menos tiempo en la vía',
      'Reducir la velocidad y aumentar la distancia de seguimiento',
      'Usar solo las luces de posición',
      'Seguir más de cerca al vehículo de adelante'
    ]
  },
  'dd-010': {
    question: '¿Cómo debe tratar un conductor a los peatones en un paso peatonal marcado?',
    options: [
      'Tocar la bocina para que crucen rápido',
      'Cederles el derecho de paso',
      'Adelantarlos por la berma',
      'Esperar que se detengan ante los vehículos'
    ]
  },
  'dd-011': {
    question: 'Si sientes sueño mientras conduces en un viaje largo, la acción más segura es...',
    options: [
      'Abrir la ventana y continuar',
      'Subir el volumen de la radio para mantenerte alerta',
      'Orillarte en un lugar seguro y descansar',
      'Conducir más rápido para llegar antes'
    ]
  },
  'dd-012': {
    question: 'Si otro conductor se comporta de forma agresiva contigo, debes...',
    options: [
      'Desafiarlo para que se eche atrás',
      'Evitar el contacto visual y dejarlo pasar',
      'Acelerar para mantenerte delante de él',
      'Frenar de repente para avisarle'
    ]
  },
  'dd-013': {
    question: 'Mantener un "colchón de espacio" alrededor de tu vehículo significa...',
    options: [
      'Conducir en medio de dos carriles',
      'Dejar espacio por todos los lados para reaccionar ante peligros',
      'Mantenerte justo al lado de otros vehículos',
      'Evitar por completo el uso de los frenos'
    ]
  },
  'dd-014': {
    question: 'Encender los faros cuando está lloviendo o hay poca luz sirve principalmente para...',
    options: [
      'Ahorrar combustible durante el viaje',
      'Ayudar a que otros conductores vean tu vehículo',
      'Mantener seco el pavimento',
      'Enfriar el motor más rápido'
    ]
  },
  'dd-015': {
    question: 'Al acercarse a una intersección, un conductor defensivo debe...',
    options: [
      'Asumir que el tráfico transversal siempre se detendrá',
      'Observar a la izquierda, a la derecha y al frente en busca de peligros',
      'Acelerar para ganarle al cambio de luz',
      'Confiar solo en el semáforo'
    ]
  },

  // ---------------------------------------------------------------------------
  // Alcohol & Drugs (ad-001 .. ad-015)
  // ---------------------------------------------------------------------------
  'ad-001': {
    question: 'En Florida, un conductor de 21 años o más se considera impedido para DUI (conducir bajo los efectos del alcohol) con qué contenido de alcohol en sangre (BAC)?',
    options: ['0.02 o superior', '0.05 o superior', '0.08 o superior', '0.10 o superior']
  },
  'ad-002': {
    question: 'La ley de "tolerancia cero" de Florida significa que un conductor menor de 21 años con qué nivel de BAC (alcohol en sangre) puede enfrentar sanciones por DUI?',
    options: ['0.02 o superior', '0.08 o superior', '0.10 o superior', '0.15 o superior']
  },
  'ad-003': {
    question: '¿Puede una persona ser acusada de DUI (conducir bajo los efectos del alcohol) en Florida incluso con un BAC (alcohol en sangre) inferior a 0.08?',
    options: [
      'No, solo importa el número del BAC',
      'Sí, si está bajo la influencia de alcohol o drogas que afectan la conducción',
      'Solo si el conductor es menor de 21 años',
      'Solo cuando conduce de noche'
    ]
  },
  'ad-004': {
    question: '¿Cómo afecta normalmente el alcohol a la capacidad de conducir?',
    options: [
      'Mejora el tiempo de reacción',
      'Agudiza la visión nocturna',
      'Reduce el juicio, la coordinación y el tiempo de reacción',
      'No tiene efecto en pequeñas cantidades'
    ]
  },
  'ad-005': {
    question: '¿Cuál de estas puede ser una consecuencia de una condena por DUI (conducir bajo los efectos del alcohol) en Florida?',
    options: [
      'Ninguna sanción en una primera infracción',
      'Multas, posible cárcel y suspensión de la licencia',
      'Solo una advertencia verbal',
      'Un curso gratuito sin que quede registro'
    ]
  },
  'ad-006': {
    question: 'Un dispositivo de bloqueo de encendido en Florida es...',
    options: [
      'Un dispositivo que revisa el aliento del conductor antes de que el auto arranque',
      'Una mejora de estéreo de lujo',
      'Solo un sistema de rastreo GPS',
      'Un tipo de freno de emergencia'
    ]
  },
  'ad-007': {
    question: 'Según la ley de consentimiento implícito de Florida, negarse a someterse a una prueba legal de aliento, sangre u orina...',
    options: [
      'No tiene ninguna consecuencia para el conductor',
      'Puede provocar la suspensión de tu licencia de conducir',
      'Siempre se permite sin ninguna sanción',
      'Elimina la autoridad del agente para investigar'
    ]
  },
  'ad-008': {
    question: 'En Florida, por lo general no se permite un envase abierto de alcohol...',
    options: [
      'Dentro de un baúl cerrado con llave',
      'En el área de pasajeros de un vehículo en circulación por la vía',
      'En un auto estacionado y apagado en una entrada',
      'Dentro de una nevera cerrada guardada en el baúl'
    ]
  },
  'ad-009': {
    question: 'Mezclar alcohol con otras drogas, incluidos algunos medicamentos, por lo general...',
    options: [
      'Reduce los efectos del alcohol',
      'Aumenta el impedimento y el riesgo',
      'No tiene ninguna interacción',
      'Hace que conducir sea más seguro'
    ]
  },
  'ad-010': {
    question: 'El plan más seguro cuando vas a beber en un evento es...',
    options: [
      'Beber solo cerveza para mantenerte lúcido',
      'Designar con antelación a un conductor sobrio',
      'Comer mucho y luego conducir despacio',
      'Beber café cargado antes de conducir'
    ]
  },
  'ad-011': {
    question: '¿Cuál de estos realmente ayuda a una persona que ha estado bebiendo a recuperar la sobriedad?',
    options: ['Café cargado', 'Una ducha fría', 'Tiempo sin beber más alcohol', 'Aire fresco al exterior']
  },
  'ad-012': {
    question: 'Los medicamentos con receta o de venta libre pueden llevar a un DUI (conducir bajo los efectos del alcohol o drogas) cuando...',
    options: [
      'Se toman con comida',
      'Afectan tu capacidad de conducir con seguridad',
      'Se toman por la mañana',
      'Se venden legalmente sin receta'
    ]
  },
  'ad-013': {
    question: 'Causar un choque fatal mientras conduces bajo los efectos del alcohol o drogas en Florida puede llevar a...',
    options: [
      'Solo una pequeña multa de tránsito',
      'Cargos graves como homicidio involuntario por DUI',
      'Ningún cargo si nadie se queja',
      'Una carta de advertencia por correo'
    ]
  },
  'ad-014': {
    question: 'Un conductor puede estar impedido por el alcohol antes de notar los efectos porque...',
    options: [
      'El alcohol tiene un sabor fuerte que te advierte',
      'El alcohol afecta primero el juicio, por lo que quizá no te des cuenta de que estás impedido',
      'El cuerpo da advertencias claras a tiempo',
      'El impedimento solo aparece después de muchas horas'
    ]
  },
  'ad-015': {
    question: 'El alcohol suele afectar al conductor al...',
    options: [
      'Mejorar la visión nocturna',
      'Reducir la capacidad de juzgar la velocidad y la distancia',
      'Hacer más rápidas las reacciones',
      'Aumentar la concentración en la vía'
    ]
  },

  // ---------------------------------------------------------------------------
  // Emergencies (em-001 .. em-015)
  // ---------------------------------------------------------------------------
  'em-001': {
    question: 'Si un neumático revienta de repente mientras conduces, debes...',
    options: [
      'Frenar lo más fuerte posible de inmediato',
      'Sujetar el volante con firmeza y soltar el acelerador',
      'Girar bruscamente fuera de la vía',
      'Acelerar para estabilizar el auto'
    ]
  },
  'em-002': {
    question: 'Si fallan tus frenos hidráulicos, primero debes...',
    options: [
      'Cambiar a neutral y dejar que ruede',
      'Bombear el pedal del freno con firmeza y repetidamente',
      'Apagar el motor de inmediato',
      'Acelerar para llegar a una cuesta'
    ]
  },
  'em-003': {
    question: 'Si tu vehículo empieza a derrapar, ¿cuál es la mejor respuesta?',
    options: [
      'Frenar lo más fuerte que puedas',
      'Dirigir el volante hacia donde quieres ir y evitar frenar con fuerza',
      'Acelerar bruscamente para recuperar el agarre',
      'Girar el volante en sentido contrario al derrape'
    ]
  },
  'em-004': {
    question: 'El aquaplaneo ocurre cuando...',
    options: [
      'Los neumáticos agarran la carretera mejor de lo habitual',
      'Los neumáticos ruedan sobre una película de agua y pierden contacto con la carretera',
      'El motor se inunda de combustible',
      'Los frenos se mojan y funcionan mejor'
    ]
  },
  'em-005': {
    question: 'Si tu auto empieza a aquaplanear, debes...',
    options: [
      'Frenar fuerte para recuperar el agarre',
      'Reducir la velocidad poco a poco y evitar frenar o girar de repente',
      'Acelerar para atravesar el agua',
      'Girar el volante rápidamente de un lado a otro'
    ]
  },
  'em-006': {
    question: 'En un paso a nivel, un conductor debe...',
    options: [
      'Detenerse sobre las vías si el tráfico va lento',
      'Nunca detenerse sobre las vías y esperar hasta que haya espacio para cruzar por completo',
      'Competir con el tren para ahorrar tiempo',
      'Ignorar las luces si no se ve ningún tren'
    ]
  },
  'em-007': {
    question: 'Cuando bajan las barreras o se activan las luces y sirenas en un paso a nivel, debes...',
    options: [
      'Rodear las barreras bajadas',
      'Detenerte y esperar hasta que sea seguro y la señal se despeje',
      'Cruzar a toda velocidad antes de que llegue el tren',
      'Tocar la bocina y continuar'
    ]
  },
  'em-008': {
    question: 'Cuando un vehículo de emergencia con sirenas y luces intermitentes se acerca por detrás, debes...',
    options: [
      'Acelerar para mantenerte delante de él',
      'Orillarte a la derecha y detenerte hasta que pase',
      'Seguir conduciendo exactamente igual',
      'Detenerte en medio de la vía'
    ]
  },
  'em-009': {
    question: 'Si notas humo o fuego proveniente de tu vehículo mientras conduces, la mejor acción es...',
    options: [
      'Seguir conduciendo para llegar a una zona concurrida',
      'Orillarte de forma segura, apagar el motor y alejarte del vehículo',
      'Abrir el cofre y mirar de cerca de inmediato',
      'Estacionar dentro de un garaje para bloquear el humo'
    ]
  },
  'em-010': {
    question: 'Si el pedal del acelerador se atasca, debes...',
    options: [
      'Apagar el motor y bloquear la columna de dirección',
      'Cambiar a neutral y frenar mientras diriges hacia una parada segura',
      'Ignorarlo y seguir conduciendo a velocidad',
      'Abrir la puerta y salir mientras te mueves'
    ]
  },
  'em-011': {
    question: 'Si tu vehículo cae en agua profunda, debes...',
    options: [
      'Esperar hasta que se llene por completo antes de moverte',
      'Desabrocharte y escapar por una ventana mientras el auto empieza a flotar',
      'Forzar la puerta contra la presión del agua primero',
      'Quedarte dentro y solo hacer llamadas telefónicas'
    ]
  },
  'em-012': {
    question: 'Si tu auto se avería en la vía, debes...',
    options: [
      'Dejarlo en el carril de circulación e irte caminando',
      'Sacarlo de la vía si es posible y encender las luces de emergencia',
      'Pararte detrás de él en el carril de tráfico',
      'Apagar todas las luces para no distraer a los conductores'
    ]
  },
  'em-013': {
    question: 'Para evitar la fatiga de frenos en bajadas largas y empinadas, debes...',
    options: [
      'Mantener los frenos pisados continuamente durante toda la bajada',
      'Usar un cambio más bajo y frenar por intervalos',
      'Rodar en neutral para ahorrar combustible',
      'Apagar el motor para ahorrar los frenos'
    ]
  },
  'em-014': {
    question: 'Si tus faros fallan de noche, debes...',
    options: [
      'Acelerar para llegar rápido a un pueblo',
      'Reducir la velocidad, usar cualquier iluminación o señal disponible y salir de la vía con seguridad',
      'Encender las luces interiores y seguir conduciendo rápido',
      'Detenerte de repente en tu carril'
    ]
  },
  'em-015': {
    question: 'Si tu motor se sobrecalienta, debes...',
    options: [
      'Seguir conduciendo rápido para que el aire enfríe el motor',
      'Orillarte de forma segura y dejarlo enfriar antes de revisar',
      'Echar agua fría al motor de inmediato',
      'Conducir hasta la colina más cercana y estacionarte en ella'
    ]
  },

  // ---------------------------------------------------------------------------
  // Highways & Passing (hp-001 .. hp-015)
  // ---------------------------------------------------------------------------
  'hp-001': {
    question: 'Al entrar a una autopista desde una rampa de acceso, debes...',
    options: [
      'Detenerte al final de la rampa y esperar',
      'Usar el carril de aceleración para igualar la velocidad del tráfico e incorporarte con seguridad',
      'Incorporarte muy despacio al primer carril',
      'Cruzar todos los carriles hacia la izquierda de inmediato'
    ]
  },
  'hp-002': {
    question: '¿Quién debe ceder el paso cuando te incorporas a una autopista?',
    options: [
      'El tráfico que ya está en la autopista',
      'Tú, el conductor que se incorpora',
      'El auto que sea más rápido',
      'Nadie, ya que la rampa tiene prioridad'
    ]
  },
  'hp-003': {
    question: 'En condiciones normales, el lado correcto para adelantar a otro vehículo es...',
    options: ['Por la derecha', 'Por la izquierda', 'Por la berma', 'Donde sea que haya espacio']
  },
  'hp-004': {
    question: 'Al entrar a una autopista interestatal desde una rampa de acceso, debes:',
    options: [
      'Detenerte al final de la rampa y esperar un hueco grande en el tráfico',
      'Usar el carril de aceleración para alcanzar una velocidad que iguale la del tráfico de la autopista y luego incorporarte cuando sea seguro',
      'Incorporarte al pie de la rampa y dejar que el tráfico de la autopista se ajuste a ti',
      'Conducir despacio en la rampa y entrar a la velocidad más baja posible'
    ]
  },
  'hp-005': {
    question: 'Una línea amarilla continua de tu lado de la vía significa...',
    options: [
      'Se permite adelantar en cualquier momento',
      'No puedes adelantar porque la visibilidad o las condiciones de la vía no son seguras',
      'La vía es de un solo sentido',
      'El límite de velocidad es mayor de lo normal'
    ]
  },
  'hp-006': {
    question: 'No se permite adelantar a otro vehículo...',
    options: [
      'En cualquier vía y en cualquier momento',
      'En los pasos a nivel y dentro de ciertas distancias de ellos',
      'Solo cuando se conduce de noche',
      'Solo en el carril derecho'
    ]
  },
  'hp-007': {
    question: 'Cuando otro vehículo te está adelantando, debes...',
    options: [
      'Acelerar para impedir el adelantamiento',
      'Mantener tu velocidad y permanecer en tu carril',
      'Moverte a la berma para ayudarlo',
      'Tocar la bocina para avisar al otro conductor'
    ]
  },
  'hp-008': {
    question: 'En una autopista de varios carriles, el carril izquierdo generalmente es...',
    options: [
      'Para estacionar y detenerse',
      'Para adelantar y para el tráfico que se mueve más rápido',
      'Solo para camiones y autobuses',
      'Solo para detenerse en emergencias'
    ]
  },
  'hp-009': {
    question: 'Los conductores más lentos en una vía de varios carriles deben...',
    options: [
      'Mantenerse en el carril izquierdo por seguridad',
      'Mantenerse en los carriles derechos',
      'Conducir en el carril central en todo momento',
      'Cambiar de carril con frecuencia para mantenerse alerta'
    ]
  },
  'hp-010': {
    question: 'Antes de adelantar en una vía de dos carriles, debes comprobar que...',
    options: [
      'La radio esté bajada',
      'Hay suficiente distancia despejada por delante y no hay tráfico de frente',
      'Tus pasajeros estén de acuerdo con la decisión',
      'La superficie de la vía esté mojada'
    ]
  },
  'hp-011': {
    question: 'Al adelantar a un camión grande, debes...',
    options: [
      'Quedarte en su punto ciego todo el tiempo posible',
      'Avanzar rápidamente y evitar permanecer a su lado',
      'Adelantarlo por la berma para mantenerte visible',
      'Seguirlo de cerca primero para tomar impulso'
    ]
  },
  'hp-012': {
    question: 'Al salir de una interestatal, debes...',
    options: [
      'Frenar en los carriles principales antes de la salida',
      'Señalizar con anticipación y pasar al carril de desaceleración antes de reducir la velocidad',
      'Salir desde el carril que esté más cerca',
      'Detenerte en lo alto de la rampa para revisar el tráfico'
    ]
  },
  'hp-013': {
    question: 'Las zonas de cruce en la mediana de una autopista dividida son...',
    options: [
      'Carriles libres para dar vuelta en U para cualquier conductor',
      'Solo para uso de emergencia, no para giros habituales',
      'Áreas de estacionamiento designadas',
      'Zonas legales de adelantamiento'
    ]
  },
  'hp-014': {
    question: 'Al seguir a una motocicleta en la autopista, debes aumentar tu distancia de seguimiento porque...',
    options: [
      'Las motocicletas siempre son lentas',
      'Una motocicleta puede detenerse más rápido que un auto',
      'Bloquean tu vista de la carretera',
      'Usan más combustible que los autos'
    ]
  },
  'hp-015': {
    question: 'Adelantar es peligroso y normalmente no se permite cuando...',
    options: [
      'Conduces en una vía recta y abierta',
      'Te acercas a una colina o curva donde no puedes ver muy adelante',
      'La vía por delante está despejada por una larga distancia',
      'Estás en el carril izquierdo de una autopista ancha'
    ]
  },

  // ---------------------------------------------------------------------------
  // Florida Laws (fl-001 .. fl-015)
  // ---------------------------------------------------------------------------
  'fl-001': {
    question: 'La ley Move Over de Florida exige que los conductores...',
    options: [
      'Se detengan por completo al pasar cualquier auto estacionado',
      'Cambien de carril alejándose de un vehículo de emergencia o de servicio detenido con luces, si es seguro',
      'Toquen la bocina al pasar un vehículo detenido',
      'Aceleren para pasar rápidamente los vehículos detenidos'
    ]
  },
  'fl-002': {
    question: 'Si no puedes cambiar de carril con seguridad según la ley Move Over de Florida, debes...',
    options: [
      'Acelerar y pasar rápido',
      'Reducir la velocidad a 20 mph por debajo del límite publicado',
      'Detenerte en tu carril hasta que el vehículo se mueva',
      'Acercarte más al vehículo detenido'
    ]
  },
  'fl-003': {
    question: 'En Florida, la licencia Clase E es...',
    options: [
      'Solo para motocicletas',
      'La licencia estándar para conducir autos no comerciales',
      'Para camiones y autobuses comerciales',
      'Una licencia para operar embarcaciones'
    ]
  },
  'fl-004': {
    question: 'Florida es un estado de "sin culpa" para el seguro de auto. Esto significa que...',
    options: [
      'Ningún conductor puede ser declarado culpable',
      'Primero reclamas ciertos beneficios de tu propio seguro tras un choque',
      'El seguro de auto es opcional en Florida',
      'La policía paga los daños en un choque'
    ]
  },
  'fl-005': {
    question: 'En el sistema de puntos de Florida, acumular demasiados puntos...',
    options: [
      'Aumenta tu margen de límite de velocidad',
      'Puede llevar a la suspensión de tu licencia de conducir',
      'Te da un descuento en el seguro',
      'No tiene efecto en tu historial de conducción'
    ]
  },
  'fl-006': {
    question: 'Según la ley de Florida, enviar mensajes de texto mientras se conduce...',
    options: [
      'Se permite solo en los semáforos en rojo',
      'Está prohibido para los conductores',
      'Se permite a cualquier velocidad si las manos están libres',
      'Es obligatorio para usar funciones de voz'
    ]
  },
  'fl-007': {
    question: 'Florida prohíbe el uso manual de un teléfono inalámbrico...',
    options: [
      'En todas partes y en todo momento',
      'En zonas escolares y de obras',
      'Solo en autopistas rurales',
      'Solo dentro de estacionamientos'
    ]
  },
  'fl-008': {
    question: 'Cuando un autobús escolar se detiene con sus luces rojas intermitentes en una vía de dos carriles, debes...',
    options: [
      'Pasar despacio mientras observas a los niños',
      'Detenerte hasta que las luces dejen de parpadear',
      'Tocar la bocina para alertar a los niños',
      'Continuar si no ves ningún niño'
    ]
  },
  'fl-009': {
    question: 'La ley de Florida exige que los niños pequeños que viajan en un vehículo...',
    options: [
      'Vayan en el regazo de un adulto',
      'Vayan asegurados en una silla de retención infantil aprobada',
      'Vayan sentados en el asiento delantero del pasajero',
      'Queden sin sujeción si se mantienen tranquilos'
    ]
  },
  'fl-010': {
    question: 'La ley de cinturones de seguridad de Florida generalmente exige...',
    options: [
      'Que solo el conductor se abroche el cinturón',
      'Que los ocupantes del asiento delantero y cualquier persona menor de 18 años usen cinturón',
      'Que nadie use cinturón si el auto es viejo',
      'Que solo los pasajeros del asiento trasero usen cinturón'
    ]
  },
  'fl-011': {
    question: 'La ley de Florida exige que los conductores mantengan qué tipo de cobertura de seguro?',
    options: [
      'Ningún seguro para autos privados',
      'Protección de Lesiones Personales (PIP) y Responsabilidad por Daños a la Propiedad (PDL)',
      'Solo seguro de salud',
      'Solo cobertura de colisión'
    ]
  },
  'fl-012': {
    question: 'En Florida, generalmente se permite girar a la derecha con luz roja...',
    options: [
      'Nunca bajo ninguna circunstancia',
      'Después de una parada completa, salvo que un letrero lo prohíba',
      'Sin detenerse si la vía está despejada',
      'Solo durante las horas de la noche'
    ]
  },
  'fl-013': {
    question: 'En ciertos casos, Florida permite que algunos conductores reduzcan puntos de su historial al...',
    options: [
      'No pagar ninguna multa',
      'Completar un curso aprobado de mejoramiento de conducción o de tránsito',
      'Ignorar las multas sin consecuencias',
      'Conducir más rápido para obtener un historial limpio'
    ]
  },
  'fl-014': {
    question: 'En Florida, conducir con la licencia suspendida o revocada es...',
    options: [
      'Permitido si conduces despacio',
      'Ilegal y puede resultar en sanciones adicionales',
      'Permitido para viajes cortos a la tienda',
      'Solo una advertencia sin sanción'
    ]
  },
  'fl-015': {
    question: 'Según la ley de Florida, un conductor involucrado en un choque está obligado a...',
    options: [
      'Abandonar la escena rápidamente para evitar el tráfico',
      'Detenerse, proporcionar la información requerida y prestar auxilio según corresponda',
      'Conducir a casa primero y reportar después',
      'Llamar a un amigo en lugar de reportar'
    ]
  }
};

export default translationsEs;
