/**
 * Catálogo de señales de tránsito de Florida.
 * Las ilustraciones SVG son originales, dibujadas con formas básicas siguiendo
 * las convenciones del MUTCD (color, forma y texto). No se copian recursos externos.
 */

const handbook = 'https://www.flhsmv.gov/pdf/handbooks/englishdriverhandbook.pdf';

export const signCategories = [
  {
    id: 'regulatory',
    label: { en: 'Regulatory', es: 'Reglamentaria' },
    description: {
      en: 'Signs that give orders you must obey, such as stopping, yielding or respecting a speed limit.',
      es: 'Señales que dan órdenes que debes obedecer, como detenerte, ceder el paso o respetar un límite de velocidad.'
    }
  },
  {
    id: 'warning',
    label: { en: 'Warning', es: 'Preventiva' },
    description: {
      en: 'Signs that warn you about road conditions, hazards or changes ahead.',
      es: 'Señales que te advierten sobre condiciones de la vía, peligros o cambios adelante.'
    }
  },
  {
    id: 'guide',
    label: { en: 'Guide', es: 'Informativa' },
    description: {
      en: 'Signs that give information, directions and distances to help you navigate.',
      es: 'Señales que brindan información, direcciones y distancias para ayudarte a orientarte.'
    }
  },
  {
    id: 'school',
    label: { en: 'School & Pedestrian', es: 'Escolar y peatones' },
    description: {
      en: 'Signs about schools, students and pedestrian crossings.',
      es: 'Señales sobre escuelas, estudiantes y cruces peatonales.'
    }
  },
  {
    id: 'construction',
    label: { en: 'Work Zone', es: 'Zona de obras' },
    description: {
      en: 'Orange signs that guide you through work zones and temporary road changes.',
      es: 'Señales naranjas que te guían por zonas de obras y cambios temporales en la vía.'
    }
  }
];

export const signs = [
  {
    id: 'stop',
    name: { en: 'Stop', es: 'Alto / Pare' },
    category: 'regulatory',
    shape: { en: 'Octagon', es: 'Octágono' },
    color: { en: 'Red with white text', es: 'Rojo con texto blanco' },
    meaning: {
      en: 'Come to a complete stop at the stop line or before entering the crosswalk, then proceed only when it is safe and you have the right of way.',
      es: 'Detente por completo en la línea de alto o antes de entrar al cruce peatonal, y avanza solo cuando sea seguro y tengas el derecho de paso.'
    },
    usage: {
      en: 'You will see it at intersections, at the end of highway exit ramps and before railroad crossings.',
      es: 'La verás en intersecciones, al final de las rampas de salida de autopistas y antes de cruces de tren.'
    },
    alt: { en: 'Red octagonal sign with the word STOP in white letters', es: 'Señal de alto octagonal roja con la palabra STOP en letras blancas' },
    source: { url: handbook, section: 'Traffic Signs' },
    svg: '<svg viewBox="0 0 120 120" role="img" aria-hidden="true" focusable="false"><polygon points="40,6 80,6 114,40 114,80 80,114 40,114 6,80 6,40" fill="#C8102E" stroke="#FFFFFF" stroke-width="6"/><text x="60" y="70" text-anchor="middle" font-family="Arial, sans-serif" font-size="30" font-weight="bold" fill="#FFFFFF">STOP</text></svg>'
  },
  {
    id: 'yield',
    name: { en: 'Yield', es: 'Ceda el paso' },
    category: 'regulatory',
    shape: { en: 'Triangle pointing down', es: 'Triángulo invertido' },
    color: { en: 'Red and white', es: 'Roja y blanca' },
    meaning: {
      en: 'Slow down and let other vehicles, bicyclists and pedestrians go first. Stop if necessary. You must give the right of way.',
      es: 'Reduce la velocidad y deja pasar primero a otros vehículos, ciclistas y peatones. Detente si es necesario. Debes ceder el derecho de paso.'
    },
    usage: {
      en: 'Found at intersections and at freeway on-ramps where traffic on the main road has priority.',
      es: 'Se encuentra en intersecciones y en las rampas de incorporación donde el tráfico de la vía principal tiene prioridad.'
    },
    alt: { en: 'Red and white triangular sign pointing down with the word YIELD', es: 'Señal triangular roja y blanca hacia abajo con la palabra YIELD' },
    source: { url: handbook, section: 'Traffic Signs' },
    svg: '<svg viewBox="0 0 120 120" role="img" aria-hidden="true" focusable="false"><polygon points="6,10 114,10 60,112" fill="#C8102E" stroke="#C8102E" stroke-width="6" stroke-linejoin="round"/><polygon points="26,26 94,26 60,92" fill="#FFFFFF"/><text x="60" y="52" text-anchor="middle" font-family="Arial, sans-serif" font-size="24" font-weight="bold" fill="#C8102E">YIELD</text></svg>'
  },
  {
    id: 'do-not-enter',
    name: { en: 'Do Not Enter', es: 'No entrar' },
    category: 'regulatory',
    shape: { en: 'Square with a red circle', es: 'Cuadrado con círculo rojo' },
    color: { en: 'Red, white and black', es: 'Roja, blanca y negra' },
    meaning: {
      en: 'Do not drive past this sign. The road or lane ahead is closed to traffic coming from your direction.',
      es: 'No pases de esta señal. La vía o el carril que está adelante está cerrado al tráfico que viene en tu dirección.'
    },
    usage: {
      en: 'Posted at wrong-way entrances to divided highways, on one-way streets and at restricted exits.',
      es: 'Se coloca en entradas en sentido contrario a autopistas divididas, en calles de una sola dirección y en salidas restringidas.'
    },
    alt: { en: 'Square sign with a red circle and a white bar, reading DO NOT ENTER', es: 'Señal cuadrada con un círculo rojo y una barra blanca que dice DO NOT ENTER' },
    source: { url: handbook, section: 'Traffic Signs' },
    svg: '<svg viewBox="0 0 120 120" role="img" aria-hidden="true" focusable="false"><rect x="4" y="4" width="112" height="112" fill="#FFFFFF" stroke="#111111" stroke-width="3"/><circle cx="60" cy="60" r="52" fill="#C8102E"/><rect x="24" y="54" width="72" height="12" fill="#FFFFFF"/><text x="60" y="44" text-anchor="middle" font-family="Arial, sans-serif" font-size="15" font-weight="bold" fill="#FFFFFF">DO NOT</text><text x="60" y="90" text-anchor="middle" font-family="Arial, sans-serif" font-size="15" font-weight="bold" fill="#FFFFFF">ENTER</text></svg>'
  },
  {
    id: 'no-u-turn',
    name: { en: 'No U-Turn', es: 'Giro en U prohibido' },
    category: 'regulatory',
    shape: { en: 'Square with a red circle and slash', es: 'Cuadrado con círculo y barra roja' },
    color: { en: 'White, black and red', es: 'Blanca, negra y roja' },
    meaning: {
      en: 'U-turns are not allowed at this location.',
      es: 'No se permiten giros en U en este lugar.'
    },
    usage: {
      en: 'Used at intersections, medians and driveways where turning around would be unsafe or would disrupt traffic.',
      es: 'Se usa en intersecciones, medianas y accesos donde dar vuelta sería inseguro o interrumpiría el tráfico.'
    },
    alt: { en: 'White sign with a black U-turn arrow crossed by a red circle and slash', es: 'Señal blanca con una flecha negra de giro en U cruzada por un círculo y una barra rojos' },
    source: { url: handbook, section: 'Traffic Signs' },
    svg: '<svg viewBox="0 0 120 120" role="img" aria-hidden="true" focusable="false"><rect x="8" y="8" width="104" height="104" fill="#FFFFFF" stroke="#111111" stroke-width="3"/><path d="M46,90 L46,58 Q46,42 60,42 Q74,42 74,58 L74,74" fill="none" stroke="#111111" stroke-width="9" stroke-linecap="round"/><polygon points="64,74 84,74 74,92" fill="#111111"/><circle cx="60" cy="60" r="50" fill="none" stroke="#C8102E" stroke-width="9"/><line x1="25" y1="25" x2="95" y2="95" stroke="#C8102E" stroke-width="9"/></svg>'
  },
  {
    id: 'speed-limit',
    name: { en: 'Speed Limit', es: 'Límite de velocidad' },
    category: 'regulatory',
    shape: { en: 'Vertical rectangle', es: 'Rectángulo vertical' },
    color: { en: 'White with black text', es: 'Blanca con texto negro' },
    meaning: {
      en: 'Shows the maximum legal speed, in miles per hour, that you may drive under good conditions.',
      es: 'Indica la velocidad máxima legal, en millas por hora, que puedes conducir en buenas condiciones.'
    },
    usage: {
      en: 'Posted along streets and highways. Where no limit is posted, the limits set by Florida law apply.',
      es: 'Se coloca a lo largo de calles y autopistas. Donde no hay límite señalado, aplican los límites de la ley de Florida.'
    },
    alt: { en: 'White rectangular sign reading SPEED LIMIT 35 in black', es: 'Señal rectangular blanca que dice SPEED LIMIT 35 en negro' },
    source: { url: handbook, section: 'Traffic Signs' },
    svg: '<svg viewBox="0 0 120 120" role="img" aria-hidden="true" focusable="false"><rect x="18" y="6" width="84" height="108" rx="6" fill="#FFFFFF" stroke="#111111" stroke-width="4"/><text x="60" y="36" text-anchor="middle" font-family="Arial, sans-serif" font-size="20" font-weight="bold" fill="#111111">SPEED</text><text x="60" y="58" text-anchor="middle" font-family="Arial, sans-serif" font-size="20" font-weight="bold" fill="#111111">LIMIT</text><text x="60" y="102" text-anchor="middle" font-family="Arial, sans-serif" font-size="44" font-weight="bold" fill="#111111">35</text></svg>'
  },
  {
    id: 'no-parking',
    name: { en: 'No Parking', es: 'No estacionar' },
    category: 'regulatory',
    shape: { en: 'Vertical rectangle', es: 'Rectángulo vertical' },
    color: { en: 'White with black and red', es: 'Blanca con negro y rojo' },
    meaning: {
      en: 'Parking is not allowed at any time along the section of roadway controlled by this sign.',
      es: 'No se permite estacionar en ningún momento a lo largo del tramo de vía controlado por esta señal.'
    },
    usage: {
      en: 'Found on city streets and near fire hydrants, bus stops and driveways.',
      es: 'Se encuentra en calles de la ciudad y cerca de hidrantes, paradas de autobús y accesos.'
    },
    alt: { en: 'White sign with a black letter P crossed by a red circle and slash, reading NO PARKING', es: 'Señal blanca con la letra P en negro cruzada por un círculo y una barra rojos, que dice NO PARKING' },
    source: { url: handbook, section: 'Traffic Signs' },
    svg: '<svg viewBox="0 0 120 120" role="img" aria-hidden="true" focusable="false"><rect x="14" y="6" width="92" height="108" rx="6" fill="#FFFFFF" stroke="#111111" stroke-width="4"/><text x="60" y="30" text-anchor="middle" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="#111111">NO PARKING</text><text x="60" y="82" text-anchor="middle" font-family="Arial, sans-serif" font-size="54" font-weight="bold" fill="#111111">P</text><circle cx="60" cy="62" r="34" fill="none" stroke="#C8102E" stroke-width="7"/><line x1="37" y1="39" x2="83" y2="85" stroke="#C8102E" stroke-width="7"/></svg>'
  },
  {
    id: 'one-way',
    name: { en: 'One Way', es: 'Una sola dirección' },
    category: 'regulatory',
    shape: { en: 'Horizontal rectangle', es: 'Rectángulo horizontal' },
    color: { en: 'Black with white text and arrow', es: 'Negra con texto y flecha blancos' },
    meaning: {
      en: 'Traffic on this street or roadway moves in only one direction, shown by the arrow.',
      es: 'El tráfico en esta calle o vía circula en una sola dirección, indicada por la flecha.'
    },
    usage: {
      en: 'Posted at intersections with one-way streets and along divided roadways.',
      es: 'Se coloca en intersecciones con calles de una sola dirección y a lo largo de vías divididas.'
    },
    alt: { en: 'Black horizontal sign with a white right-pointing arrow and the words ONE WAY', es: 'Señal horizontal negra con una flecha blanca apuntando a la derecha y las palabras ONE WAY' },
    source: { url: handbook, section: 'Traffic Signs' },
    svg: '<svg viewBox="0 0 120 120" role="img" aria-hidden="true" focusable="false"><rect x="6" y="26" width="108" height="68" rx="4" fill="#111111"/><path d="M18,50 L72,50" stroke="#FFFFFF" stroke-width="10" stroke-linecap="round"/><polygon points="68,36 96,50 68,64" fill="#FFFFFF"/><text x="60" y="84" text-anchor="middle" font-family="Arial, sans-serif" font-size="18" font-weight="bold" fill="#FFFFFF">ONE WAY</text></svg>'
  },
  {
    id: 'wrong-way',
    name: { en: 'Wrong Way', es: 'Sentido contrario' },
    category: 'regulatory',
    shape: { en: 'Horizontal rectangle', es: 'Rectángulo horizontal' },
    color: { en: 'Red with white text', es: 'Roja con texto blanco' },
    meaning: {
      en: 'You are entering a roadway against the flow of traffic. Turn around as soon as it is safe to do so.',
      es: 'Estás entrando a una vía en sentido contrario al tráfico. Da vuelta en cuanto sea seguro.'
    },
    usage: {
      en: 'Mounted facing drivers who are about to enter a divided highway or one-way street the wrong way.',
      es: 'Se monta frente a los conductores que están por entrar en sentido contrario a una autopista dividida o calle de una sola dirección.'
    },
    alt: { en: 'Red horizontal sign reading WRONG WAY in white letters', es: 'Señal horizontal roja que dice WRONG WAY en letras blancas' },
    source: { url: handbook, section: 'Traffic Signs' },
    svg: '<svg viewBox="0 0 120 120" role="img" aria-hidden="true" focusable="false"><rect x="6" y="26" width="108" height="68" fill="#C8102E" stroke="#FFFFFF" stroke-width="4"/><text x="60" y="58" text-anchor="middle" font-family="Arial, sans-serif" font-size="20" font-weight="bold" fill="#FFFFFF">WRONG</text><text x="60" y="82" text-anchor="middle" font-family="Arial, sans-serif" font-size="20" font-weight="bold" fill="#FFFFFF">WAY</text></svg>'
  },
  {
    id: 'keep-right',
    name: { en: 'Keep Right', es: 'Mantente a la derecha' },
    category: 'regulatory',
    shape: { en: 'Square', es: 'Cuadrado' },
    color: { en: 'White with black symbol', es: 'Blanca con símbolo negro' },
    meaning: {
      en: 'Pass to the right of a median, island or obstacle. Do not go to the left of it.',
      es: 'Pasa por la derecha de una mediana, isleta u obstáculo. No pases por su izquierda.'
    },
    usage: {
      en: 'Placed on medians and islands that traffic can pass on only one side.',
      es: 'Se coloca en medianas e isletas por las que el tráfico solo puede pasar por un lado.'
    },
    alt: { en: 'White square sign with a black right-curving arrow meaning keep right', es: 'Señal cuadrada blanca con una flecha negra curvada a la derecha que indica mantenerse a la derecha' },
    source: { url: handbook, section: 'Traffic Signs' },
    svg: '<svg viewBox="0 0 120 120" role="img" aria-hidden="true" focusable="false"><rect x="8" y="8" width="104" height="104" rx="6" fill="#FFFFFF" stroke="#111111" stroke-width="4"/><line x1="52" y1="22" x2="52" y2="100" stroke="#111111" stroke-width="9" stroke-linecap="round"/><path d="M72,100 L72,58 Q72,40 88,40 L90,40" fill="none" stroke="#111111" stroke-width="9" stroke-linecap="round"/><polygon points="86,28 104,40 86,52" fill="#111111"/></svg>'
  },
  {
    id: 'no-left-turn',
    name: { en: 'No Left Turn', es: 'Giro a la izquierda prohibido' },
    category: 'regulatory',
    shape: { en: 'Square with a red circle and slash', es: 'Cuadrado con círculo y barra roja' },
    color: { en: 'White, black and red', es: 'Blanca, negra y roja' },
    meaning: {
      en: 'Left turns are not allowed at this intersection.',
      es: 'No se permiten giros a la izquierda en esta intersección.'
    },
    usage: {
      en: 'Used where left turns would block traffic or create a safety hazard.',
      es: 'Se usa donde los giros a la izquierda bloquearían el tráfico o crearían un riesgo de seguridad.'
    },
    alt: { en: 'White sign with a black left-turn arrow crossed by a red circle and slash', es: 'Señal blanca con una flecha negra de giro a la izquierda cruzada por un círculo y una barra rojos' },
    source: { url: handbook, section: 'Traffic Signs' },
    svg: '<svg viewBox="0 0 120 120" role="img" aria-hidden="true" focusable="false"><rect x="8" y="8" width="104" height="104" fill="#FFFFFF" stroke="#111111" stroke-width="3"/><path d="M76,90 L76,58 Q76,42 60,42 L46,42" fill="none" stroke="#111111" stroke-width="9" stroke-linecap="round"/><polygon points="50,30 30,42 50,54" fill="#111111"/><circle cx="60" cy="60" r="50" fill="none" stroke="#C8102E" stroke-width="9"/><line x1="25" y1="25" x2="95" y2="95" stroke="#C8102E" stroke-width="9"/></svg>'
  },
  {
    id: 'do-not-pass',
    name: { en: 'Do Not Pass', es: 'No adelantar' },
    category: 'regulatory',
    shape: { en: 'Vertical rectangle', es: 'Rectángulo vertical' },
    color: { en: 'White with black text', es: 'Blanca con texto negro' },
    meaning: {
      en: 'Do not pass other vehicles on this section of road. Stay in your lane and wait until passing is allowed.',
      es: 'No adelantes a otros vehículos en este tramo de la vía. Mantente en tu carril y espera a que se permita adelantar.'
    },
    usage: {
      en: 'Used on two-lane roads with curves, hills or limited sight distance where passing is unsafe.',
      es: 'Se usa en vías de dos carriles con curvas, colinas o poca visibilidad donde adelantar es inseguro.'
    },
    alt: { en: 'White rectangular sign reading DO NOT PASS in black letters with a downward arrow', es: 'Señal rectangular blanca que dice DO NOT PASS en letras negras con una flecha' },
    source: { url: handbook, section: 'Traffic Signs' },
    svg: '<svg viewBox="0 0 120 120" role="img" aria-hidden="true" focusable="false"><rect x="18" y="6" width="84" height="108" rx="6" fill="#FFFFFF" stroke="#111111" stroke-width="4"/><text x="60" y="38" text-anchor="middle" font-family="Arial, sans-serif" font-size="18" font-weight="bold" fill="#111111">DO NOT</text><text x="60" y="60" text-anchor="middle" font-family="Arial, sans-serif" font-size="18" font-weight="bold" fill="#111111">PASS</text><path d="M46,104 L46,84 Q46,74 58,74 L74,74" fill="none" stroke="#111111" stroke-width="8" stroke-linecap="round"/><polygon points="72,64 92,74 72,84" fill="#111111"/></svg>'
  },
  {
    id: 'curve',
    name: { en: 'Curve Ahead', es: 'Curva adelante' },
    category: 'warning',
    shape: { en: 'Diamond', es: 'Rombo' },
    color: { en: 'Yellow with black symbol', es: 'Amarilla con símbolo negro' },
    meaning: {
      en: 'A curve is ahead. Slow down before the curve and obey the safe speed.',
      es: 'Hay una curva adelante. Reduce la velocidad antes de la curva y respeta la velocidad segura.'
    },
    usage: {
      en: 'Placed before curves where the safe speed is lower than the posted limit.',
      es: 'Se coloca antes de curvas donde la velocidad segura es menor que el límite señalado.'
    },
    alt: { en: 'Yellow diamond with a black curved arrow showing a curve ahead', es: 'Rombo amarillo con una flecha negra curvada que indica una curva adelante' },
    source: { url: handbook, section: 'Traffic Signs' },
    svg: '<svg viewBox="0 0 120 120" role="img" aria-hidden="true" focusable="false"><polygon points="60,6 114,60 60,114 6,60" fill="#F2C200" stroke="#111111" stroke-width="4"/><path d="M68,102 L68,66 Q68,50 52,50 L46,50" fill="none" stroke="#111111" stroke-width="10" stroke-linecap="round"/><polygon points="50,36 28,50 50,64" fill="#111111"/></svg>'
  },
  {
    id: 'intersection',
    name: { en: 'Intersection Ahead', es: 'Intersección adelante' },
    category: 'warning',
    shape: { en: 'Diamond', es: 'Rombo' },
    color: { en: 'Yellow with black symbol', es: 'Amarilla con símbolo negro' },
    meaning: {
      en: 'A four-way intersection is ahead. Watch for crossing and turning traffic.',
      es: 'Hay una intersección de cuatro vías adelante. Presta atención al tráfico que cruza o gira.'
    },
    usage: {
      en: 'Posted on rural roads and streets where drivers may not expect a crossroad.',
      es: 'Se coloca en caminos rurales y calles donde los conductores podrían no esperar un cruce.'
    },
    alt: { en: 'Yellow diamond with a black cross symbol showing an intersection ahead', es: 'Rombo amarillo con un símbolo negro en forma de cruz que indica una intersección adelante' },
    source: { url: handbook, section: 'Traffic Signs' },
    svg: '<svg viewBox="0 0 120 120" role="img" aria-hidden="true" focusable="false"><polygon points="60,6 114,60 60,114 6,60" fill="#F2C200" stroke="#111111" stroke-width="4"/><rect x="53" y="30" width="14" height="60" fill="#111111"/><rect x="30" y="53" width="60" height="14" fill="#111111"/></svg>'
  },
  {
    id: 'pedestrian-crossing',
    name: { en: 'Pedestrian Crossing', es: 'Cruce de peatones' },
    category: 'warning',
    shape: { en: 'Diamond', es: 'Rombo' },
    color: { en: 'Yellow with black symbol', es: 'Amarilla con símbolo negro' },
    meaning: {
      en: 'Pedestrians may be crossing the road ahead. Slow down and be ready to stop.',
      es: 'Puede haber peatones cruzando la vía adelante. Reduce la velocidad y prepárate para detenerte.'
    },
    usage: {
      en: 'Found near schools, parks, shopping areas and other places where people cross.',
      es: 'Se encuentra cerca de escuelas, parques, zonas comerciales y otros lugares donde cruza la gente.'
    },
    alt: { en: 'Yellow diamond with a black walking figure showing a pedestrian crossing', es: 'Rombo amarillo con la silueta negra de un peatón caminando que indica un cruce de peatones' },
    source: { url: handbook, section: 'Traffic Signs' },
    svg: '<svg viewBox="0 0 120 120" role="img" aria-hidden="true" focusable="false"><polygon points="60,6 114,60 60,114 6,60" fill="#F2C200" stroke="#111111" stroke-width="4"/><circle cx="60" cy="34" r="7" fill="#111111"/><path d="M60,42 L60,66" stroke="#111111" stroke-width="6" stroke-linecap="round"/><path d="M60,50 L44,58" stroke="#111111" stroke-width="5" stroke-linecap="round"/><path d="M60,50 L76,44" stroke="#111111" stroke-width="5" stroke-linecap="round"/><path d="M60,66 L48,92" stroke="#111111" stroke-width="6" stroke-linecap="round"/><path d="M60,66 L74,88" stroke="#111111" stroke-width="6" stroke-linecap="round"/></svg>'
  },
  {
    id: 'deer-crossing',
    name: { en: 'Deer Crossing', es: 'Cruce de ciervos' },
    category: 'warning',
    shape: { en: 'Diamond', es: 'Rombo' },
    color: { en: 'Yellow with black symbol', es: 'Amarilla con símbolo negro' },
    meaning: {
      en: 'Deer often cross the road in this area. Slow down, especially at dawn and dusk.',
      es: 'Los ciervos cruzan con frecuencia la vía en esta zona. Reduce la velocidad, sobre todo al amanecer y al anochecer.'
    },
    usage: {
      en: 'Placed on rural roads and highways near wooded areas where deer are common.',
      es: 'Se coloca en caminos rurales y autopistas cerca de zonas boscosas donde abundan los ciervos.'
    },
    alt: { en: 'Yellow diamond with a black leaping deer showing a deer crossing', es: 'Rombo amarillo con la silueta negra de un ciervo saltando que indica un cruce de ciervos' },
    source: { url: handbook, section: 'Traffic Signs' },
    svg: '<svg viewBox="0 0 120 120" role="img" aria-hidden="true" focusable="false"><polygon points="60,6 114,60 60,114 6,60" fill="#F2C200" stroke="#111111" stroke-width="4"/><ellipse cx="56" cy="70" rx="16" ry="9" fill="#111111"/><path d="M68,64 L77,48" stroke="#111111" stroke-width="7" stroke-linecap="round"/><ellipse cx="80" cy="45" rx="6.5" ry="4.5" fill="#111111"/><path d="M77,42 L71,31 M77,42 L81,28 M81,28 L85,32 M71,31 L67,25" fill="none" stroke="#111111" stroke-width="3" stroke-linecap="round"/><path d="M47,78 L43,94 M55,79 L53,96 M65,78 L70,92 M73,74 L80,88" fill="none" stroke="#111111" stroke-width="4" stroke-linecap="round"/></svg>'
  },
  {
    id: 'traffic-signal-ahead',
    name: { en: 'Traffic Signal Ahead', es: 'Semáforo adelante' },
    category: 'warning',
    shape: { en: 'Diamond', es: 'Rombo' },
    color: { en: 'Yellow with black symbol', es: 'Amarilla con símbolo negro' },
    meaning: {
      en: 'A traffic signal is ahead. Be ready to stop if the light turns red.',
      es: 'Hay un semáforo adelante. Prepárate para detenerte si la luz cambia a rojo.'
    },
    usage: {
      en: 'Placed before signals that drivers may not see in time, such as after a hill or a curve.',
      es: 'Se coloca antes de semáforos que los conductores podrían no ver a tiempo, como después de una colina o una curva.'
    },
    alt: { en: 'Yellow diamond with a black traffic signal showing a signal ahead', es: 'Rombo amarillo con un semáforo negro que indica un semáforo adelante' },
    source: { url: handbook, section: 'Traffic Signs' },
    svg: '<svg viewBox="0 0 120 120" role="img" aria-hidden="true" focusable="false"><polygon points="60,6 114,60 60,114 6,60" fill="#F2C200" stroke="#111111" stroke-width="4"/><rect x="50" y="24" width="20" height="52" rx="5" fill="#111111"/><circle cx="60" cy="34" r="4.5" fill="#F2C200"/><circle cx="60" cy="50" r="4.5" fill="#F2C200"/><circle cx="60" cy="66" r="4.5" fill="#F2C200"/><rect x="57" y="76" width="6" height="20" fill="#111111"/></svg>'
  },
  {
    id: 'slippery-when-wet',
    name: { en: 'Slippery When Wet', es: 'Resbaladizo cuando está mojado' },
    category: 'warning',
    shape: { en: 'Diamond', es: 'Rombo' },
    color: { en: 'Yellow with black symbol', es: 'Amarilla con símbolo negro' },
    meaning: {
      en: 'The road may be slippery when wet. Slow down and avoid sudden braking or turning in the rain.',
      es: 'La vía puede volverse resbaladiza cuando está mojada. Reduce la velocidad y evita frenar o girar bruscamente con lluvia.'
    },
    usage: {
      en: 'Used on bridges, overpasses and pavement that loses traction when wet.',
      es: 'Se usa en puentes, pasos elevados y pavimento que pierde agarre cuando está mojado.'
    },
    alt: { en: 'Yellow diamond with a black car and wavy lines showing a slippery road', es: 'Rombo amarillo con un auto negro y líneas onduladas que indican una vía resbaladiza' },
    source: { url: handbook, section: 'Traffic Signs' },
    svg: '<svg viewBox="0 0 120 120" role="img" aria-hidden="true" focusable="false"><polygon points="60,6 114,60 60,114 6,60" fill="#F2C200" stroke="#111111" stroke-width="4"/><rect x="52" y="36" width="24" height="12" rx="3" fill="#111111"/><rect x="44" y="44" width="42" height="16" rx="4" fill="#111111"/><circle cx="54" cy="62" r="6" fill="#111111"/><circle cx="78" cy="62" r="6" fill="#111111"/><path d="M34,80 q6,-7 12,0 t12,0 t12,0" fill="none" stroke="#111111" stroke-width="4" stroke-linecap="round"/><path d="M34,92 q6,-7 12,0 t12,0 t12,0" fill="none" stroke="#111111" stroke-width="4" stroke-linecap="round"/></svg>'
  },
  {
    id: 'railroad-crossbuck',
    name: { en: 'Railroad Crossing Ahead', es: 'Cruce de tren adelante' },
    category: 'warning',
    shape: { en: 'Round', es: 'Circular' },
    color: { en: 'Yellow with black symbol', es: 'Amarilla con símbolo negro' },
    meaning: {
      en: 'A railroad crossing is ahead. Slow down, look and listen, and be ready to stop.',
      es: 'Hay un cruce de tren adelante. Reduce la velocidad, mira y escucha, y prepárate para detenerte.'
    },
    usage: {
      en: 'Placed in advance of railroad crossings that do not have gates or flashing lights.',
      es: 'Se coloca con anticipación a los cruces de tren que no tienen barreras ni luces intermitentes.'
    },
    alt: { en: 'Yellow circular sign with a black X and the letter R on each side, for a railroad crossing ahead', es: 'Señal circular amarilla con una X negra y la letra R a cada lado, para un cruce de tren adelante' },
    source: { url: handbook, section: 'Traffic Signs' },
    svg: '<svg viewBox="0 0 120 120" role="img" aria-hidden="true" focusable="false"><circle cx="60" cy="60" r="54" fill="#F2C200" stroke="#111111" stroke-width="4"/><line x1="28" y1="28" x2="92" y2="92" stroke="#111111" stroke-width="8" stroke-linecap="round"/><line x1="92" y1="28" x2="28" y2="92" stroke="#111111" stroke-width="8" stroke-linecap="round"/><text x="37" y="76" text-anchor="middle" font-family="Arial, sans-serif" font-size="20" font-weight="bold" fill="#111111">R</text><text x="83" y="76" text-anchor="middle" font-family="Arial, sans-serif" font-size="20" font-weight="bold" fill="#111111">R</text></svg>'
  },
  {
    id: 'two-way-traffic',
    name: { en: 'Two-Way Traffic', es: 'Tráfico en dos sentidos' },
    category: 'warning',
    shape: { en: 'Diamond', es: 'Rombo' },
    color: { en: 'Yellow with black symbol', es: 'Amarilla con símbolo negro' },
    meaning: {
      en: 'Two-way traffic is ahead. Keep right and do not drive in the oncoming lane.',
      es: 'Hay tráfico en dos sentidos adelante. Mantente a la derecha y no circules en el carril de sentido contrario.'
    },
    usage: {
      en: 'Used where a one-way road becomes two-way or after a divided highway ends.',
      es: 'Se usa donde una vía de un solo sentido se convierte en dos sentidos o después de que termina una autopista dividida.'
    },
    alt: { en: 'Yellow diamond with two black arrows pointing in opposite directions for two-way traffic', es: 'Rombo amarillo con dos flechas negras en sentidos opuestos que indican tráfico en dos sentidos' },
    source: { url: handbook, section: 'Traffic Signs' },
    svg: '<svg viewBox="0 0 120 120" role="img" aria-hidden="true" focusable="false"><polygon points="60,6 114,60 60,114 6,60" fill="#F2C200" stroke="#111111" stroke-width="4"/><path d="M48,88 L48,44" stroke="#111111" stroke-width="8" stroke-linecap="round"/><polygon points="40,44 56,44 48,30" fill="#111111"/><path d="M72,32 L72,76" stroke="#111111" stroke-width="8" stroke-linecap="round"/><polygon points="64,76 80,76 72,90" fill="#111111"/></svg>'
  },
  {
    id: 'merge',
    name: { en: 'Merge', es: 'Incorporación' },
    category: 'warning',
    shape: { en: 'Diamond', es: 'Rombo' },
    color: { en: 'Yellow with black symbol', es: 'Amarilla con símbolo negro' },
    meaning: {
      en: 'Another lane of traffic will merge into yours. Adjust your speed and let merging vehicles in.',
      es: 'Otro carril de tráfico se unirá al tuyo. Ajusta tu velocidad y deja entrar a los vehículos que se incorporan.'
    },
    usage: {
      en: 'Posted where an on-ramp or side road joins the roadway you are on.',
      es: 'Se coloca donde una rampa o vía lateral se une a la vía por la que circulas.'
    },
    alt: { en: 'Yellow diamond with black lines merging into one for a merge ahead', es: 'Rombo amarillo con líneas negras que se unen en una para indicar una incorporación adelante' },
    source: { url: handbook, section: 'Traffic Signs' },
    svg: '<svg viewBox="0 0 120 120" role="img" aria-hidden="true" focusable="false"><polygon points="60,6 114,60 60,114 6,60" fill="#F2C200" stroke="#111111" stroke-width="4"/><path d="M72,94 L72,50" stroke="#111111" stroke-width="8" stroke-linecap="round"/><polygon points="64,50 80,50 72,36" fill="#111111"/><path d="M46,94 C46,68 72,74 72,60" fill="none" stroke="#111111" stroke-width="8" stroke-linecap="round"/></svg>'
  },
  {
    id: 'lane-ends',
    name: { en: 'Lane Ends', es: 'Fin del carril' },
    category: 'warning',
    shape: { en: 'Diamond', es: 'Rombo' },
    color: { en: 'Yellow with black symbol', es: 'Amarilla con símbolo negro' },
    meaning: {
      en: 'A lane ends ahead. Merge into the lane that continues and do not cut off other drivers.',
      es: 'Un carril termina adelante. Incorpórate al carril que continúa y no cierres el paso a otros conductores.'
    },
    usage: {
      en: 'Used where a lane is dropped, such as before a merge area or a bridge.',
      es: 'Se usa donde se elimina un carril, como antes de una zona de incorporación o un puente.'
    },
    alt: { en: 'Yellow diamond with two black lines joining into one to show that a lane ends', es: 'Rombo amarillo con dos líneas negras que se unen en una para indicar que un carril termina' },
    source: { url: handbook, section: 'Traffic Signs' },
    svg: '<svg viewBox="0 0 120 120" role="img" aria-hidden="true" focusable="false"><polygon points="60,6 114,60 60,114 6,60" fill="#F2C200" stroke="#111111" stroke-width="4"/><path d="M68,94 L68,32" stroke="#111111" stroke-width="8" stroke-linecap="round"/><path d="M44,84 Q44,52 68,46" fill="none" stroke="#111111" stroke-width="8" stroke-linecap="round"/></svg>'
  },
  {
    id: 'interstate-shield',
    name: { en: 'Interstate Shield', es: 'Escudo interestatal' },
    category: 'guide',
    shape: { en: 'Shield', es: 'Escudo' },
    color: { en: 'Blue, red and white', es: 'Azul, rojo y blanco' },
    meaning: {
      en: 'Identifies an Interstate highway and its route number. Interstates are the fastest, limited-access highways.',
      es: 'Identifica una autopista interestatal y su número de ruta. Las interestatales son las vías más rápidas de acceso limitado.'
    },
    usage: {
      en: 'Posted on guide signs, trailblazers and markers along the Interstate system.',
      es: 'Se coloca en señales informativas, orientadoras y marcadores a lo largo del sistema interestatal.'
    },
    alt: { en: 'Blue and red Interstate shield with the route number 95 in white', es: 'Escudo interestatal azul y rojo con el número de ruta 95 en blanco' },
    source: { url: handbook, section: 'Traffic Signs' },
    svg: '<svg viewBox="0 0 120 120" role="img" aria-hidden="true" focusable="false"><path d="M60,6 C82,6 100,12 100,12 C100,58 92,92 60,114 C28,92 20,58 20,12 C20,12 38,6 60,6 Z" fill="#003399" stroke="#FFFFFF" stroke-width="4"/><path d="M20,12 C20,12 38,6 60,6 C82,6 100,12 100,12 L100,30 L20,30 Z" fill="#C8102E"/><text x="60" y="25" text-anchor="middle" font-family="Arial, sans-serif" font-size="8" font-weight="bold" fill="#FFFFFF">INTERSTATE</text><text x="60" y="78" text-anchor="middle" font-family="Arial, sans-serif" font-size="38" font-weight="bold" fill="#FFFFFF">95</text></svg>'
  },
  {
    id: 'exit-only',
    name: { en: 'Exit Only', es: 'Solo salida' },
    category: 'guide',
    shape: { en: 'Horizontal rectangle', es: 'Rectángulo horizontal' },
    color: { en: 'Green with white text', es: 'Verde con texto blanco' },
    meaning: {
      en: 'This lane goes only to the exit. If you want to continue straight, move to another lane.',
      es: 'Este carril va solo hacia la salida. Si quieres seguir de frente, cámbiate a otro carril.'
    },
    usage: {
      en: 'Placed over or beside lanes that leave the highway at an exit ramp.',
      es: 'Se coloca sobre o junto a los carriles que salen de la autopista por una rampa de salida.'
    },
    alt: { en: 'Green rectangular sign reading EXIT ONLY in white letters', es: 'Señal rectangular verde que dice EXIT ONLY en letras blancas' },
    source: { url: handbook, section: 'Traffic Signs' },
    svg: '<svg viewBox="0 0 120 120" role="img" aria-hidden="true" focusable="false"><rect x="6" y="30" width="108" height="60" rx="4" fill="#0B6E3B" stroke="#FFFFFF" stroke-width="4"/><text x="60" y="56" text-anchor="middle" font-family="Arial, sans-serif" font-size="22" font-weight="bold" fill="#FFFFFF">EXIT</text><text x="60" y="80" text-anchor="middle" font-family="Arial, sans-serif" font-size="22" font-weight="bold" fill="#FFFFFF">ONLY</text></svg>'
  },
  {
    id: 'mile-marker',
    name: { en: 'Mile Marker', es: 'Marcador de milla' },
    category: 'guide',
    shape: { en: 'Vertical rectangle', es: 'Rectángulo vertical' },
    color: { en: 'Green with white numbers', es: 'Verde con números blancos' },
    meaning: {
      en: 'Shows the number of miles from where the road begins in the state. It helps you and emergency services find your location.',
      es: 'Indica el número de millas desde donde comienza la vía en el estado. Ayuda a ti y a los servicios de emergencia a ubicar tu posición.'
    },
    usage: {
      en: 'Placed at intervals along highways so drivers can report their location after a breakdown.',
      es: 'Se coloca a intervalos a lo largo de las autopistas para que los conductores puedan reportar su ubicación tras una avería.'
    },
    alt: { en: 'Green vertical sign with the white number 27, a highway mile marker', es: 'Señal vertical verde con el número blanco 27, un marcador de milla de autopista' },
    source: { url: handbook, section: 'Traffic Signs' },
    svg: '<svg viewBox="0 0 120 120" role="img" aria-hidden="true" focusable="false"><rect x="34" y="8" width="52" height="104" rx="6" fill="#0B6E3B" stroke="#FFFFFF" stroke-width="4"/><text x="60" y="40" text-anchor="middle" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="#FFFFFF">MILE</text><text x="60" y="90" text-anchor="middle" font-family="Arial, sans-serif" font-size="46" font-weight="bold" fill="#FFFFFF">27</text></svg>'
  },
  {
    id: 'services',
    name: { en: 'Services', es: 'Servicios' },
    category: 'guide',
    shape: { en: 'Horizontal rectangle', es: 'Rectángulo horizontal' },
    color: { en: 'Blue with white symbols', es: 'Azul con símbolos blancos' },
    meaning: {
      en: 'Shows that services such as gas, food or lodging are available at the next exit.',
      es: 'Indica que hay servicios como gasolina, comida o alojamiento en la próxima salida.'
    },
    usage: {
      en: 'Posted before exits that have the services shown on the sign.',
      es: 'Se coloca antes de las salidas que tienen los servicios mostrados en la señal.'
    },
    alt: { en: 'Blue sign with white symbols for gas, food and lodging services', es: 'Señal azul con símbolos blancos de gasolina, comida y alojamiento' },
    source: { url: handbook, section: 'Traffic Signs' },
    svg: '<svg viewBox="0 0 120 120" role="img" aria-hidden="true" focusable="false"><rect x="4" y="24" width="112" height="72" rx="6" fill="#003399" stroke="#FFFFFF" stroke-width="4"/><rect x="16" y="41" width="22" height="6" fill="#FFFFFF"/><rect x="18" y="47" width="18" height="25" rx="2" fill="#FFFFFF"/><rect x="36" y="53" width="7" height="4" fill="#FFFFFF"/><rect x="55" y="42" width="3" height="10" fill="#FFFFFF"/><rect x="60" y="42" width="3" height="10" fill="#FFFFFF"/><rect x="65" y="42" width="3" height="10" fill="#FFFFFF"/><rect x="59" y="50" width="5" height="22" fill="#FFFFFF"/><rect x="74" y="42" width="6" height="16" fill="#FFFFFF"/><rect x="75" y="56" width="4" height="16" fill="#FFFFFF"/><rect x="86" y="48" width="5" height="20" fill="#FFFFFF"/><rect x="86" y="58" width="26" height="9" rx="3" fill="#FFFFFF"/><rect x="92" y="53" width="9" height="6" rx="2" fill="#FFFFFF"/></svg>'
  },
  {
    id: 'school-zone',
    name: { en: 'School Zone', es: 'Zona escolar' },
    category: 'school',
    shape: { en: 'Pentagon', es: 'Pentágono' },
    color: { en: 'Yellow with black text', es: 'Amarilla con texto negro' },
    meaning: {
      en: 'Marks the beginning of a school zone. Obey the posted school speed limit while the lights flash or students are present.',
      es: 'Marca el inicio de una zona escolar. Respeta el límite de velocidad escolar cuando las luces parpadean o hay estudiantes presentes.'
    },
    usage: {
      en: 'Placed at the entrance to areas around schools where children may be near the road.',
      es: 'Se coloca en la entrada de las zonas alrededor de escuelas donde puede haber niños cerca de la vía.'
    },
    alt: { en: 'Yellow pentagon sign with the word SCHOOL in black', es: 'Señal pentagonal amarilla con la palabra SCHOOL en negro' },
    source: { url: handbook, section: 'Traffic Signs' },
    svg: '<svg viewBox="0 0 120 120" role="img" aria-hidden="true" focusable="false"><polygon points="60,6 110,44 90,114 30,114 10,44" fill="#F2C200" stroke="#111111" stroke-width="4"/><text x="60" y="70" text-anchor="middle" font-family="Arial, sans-serif" font-size="20" font-weight="bold" fill="#111111">SCHOOL</text></svg>'
  },
  {
    id: 'school-crossing',
    name: { en: 'School Crossing', es: 'Cruce escolar' },
    category: 'school',
    shape: { en: 'Pentagon', es: 'Pentágono' },
    color: { en: 'Yellow with black symbol', es: 'Amarilla con símbolo negro' },
    meaning: {
      en: 'Children are crossing the road here. Stop for the crossing guard and for students in the crosswalk.',
      es: 'Hay niños cruzando la vía aquí. Detente ante el guarda escolar y ante los estudiantes en el cruce peatonal.'
    },
    usage: {
      en: 'Posted at and near school crossings where children walk to and from school.',
      es: 'Se coloca en los cruces escolares y cerca de ellos, por donde caminan los niños hacia la escuela.'
    },
    alt: { en: 'Yellow pentagon sign with two black children walking, for a school crossing', es: 'Señal pentagonal amarilla con dos niños negros caminando, para un cruce escolar' },
    source: { url: handbook, section: 'Traffic Signs' },
    svg: '<svg viewBox="0 0 120 120" role="img" aria-hidden="true" focusable="false"><polygon points="60,6 110,44 90,114 30,114 10,44" fill="#F2C200" stroke="#111111" stroke-width="4"/><circle cx="46" cy="52" r="6" fill="#111111"/><path d="M46,59 L46,78" stroke="#111111" stroke-width="5" stroke-linecap="round"/><path d="M46,64 L36,70" stroke="#111111" stroke-width="4" stroke-linecap="round"/><path d="M46,64 L56,60" stroke="#111111" stroke-width="4" stroke-linecap="round"/><path d="M46,78 L39,100" stroke="#111111" stroke-width="5" stroke-linecap="round"/><path d="M46,78 L54,98" stroke="#111111" stroke-width="5" stroke-linecap="round"/><circle cx="72" cy="56" r="6" fill="#111111"/><path d="M72,63 L72,80" stroke="#111111" stroke-width="5" stroke-linecap="round"/><path d="M72,67 L82,62" stroke="#111111" stroke-width="4" stroke-linecap="round"/><path d="M72,67 L64,74" stroke="#111111" stroke-width="4" stroke-linecap="round"/><path d="M72,80 L66,100" stroke="#111111" stroke-width="5" stroke-linecap="round"/><path d="M72,80 L80,98" stroke="#111111" stroke-width="5" stroke-linecap="round"/></svg>'
  },
  {
    id: 'work-zone',
    name: { en: 'Road Work Ahead', es: 'Trabajos en la vía adelante' },
    category: 'construction',
    shape: { en: 'Diamond', es: 'Rombo' },
    color: { en: 'Orange with black symbol', es: 'Naranja con símbolo negro' },
    meaning: {
      en: 'Road work is ahead. Slow down, watch for workers and equipment, and be ready to stop.',
      es: 'Hay trabajos en la vía adelante. Reduce la velocidad, observa a los trabajadores y equipos, y prepárate para detenerte.'
    },
    usage: {
      en: 'Placed in advance of construction, maintenance and utility work on the roadway.',
      es: 'Se coloca con anticipación a trabajos de construcción, mantenimiento y servicios en la vía.'
    },
    alt: { en: 'Orange diamond with a black worker using a shovel, for road work ahead', es: 'Rombo naranja con un trabajador negro usando una pala, para trabajos en la vía adelante' },
    source: { url: handbook, section: 'Traffic Signs' },
    svg: '<svg viewBox="0 0 120 120" role="img" aria-hidden="true" focusable="false"><polygon points="60,6 114,60 60,114 6,60" fill="#F26B1D" stroke="#111111" stroke-width="4"/><circle cx="56" cy="34" r="8" fill="#111111"/><path d="M56,42 L56,68" stroke="#111111" stroke-width="7" stroke-linecap="round"/><path d="M56,50 L74,60" stroke="#111111" stroke-width="5" stroke-linecap="round"/><path d="M56,50 L42,58" stroke="#111111" stroke-width="5" stroke-linecap="round"/><path d="M56,68 L48,92" stroke="#111111" stroke-width="7" stroke-linecap="round"/><path d="M56,68 L66,92" stroke="#111111" stroke-width="7" stroke-linecap="round"/><path d="M74,60 L86,70" stroke="#111111" stroke-width="4" stroke-linecap="round"/><polygon points="82,68 92,66 92,76" fill="#111111"/></svg>'
  },
  {
    id: 'flagger',
    name: { en: 'Flagger Ahead', es: 'Abanderado adelante' },
    category: 'construction',
    shape: { en: 'Diamond', es: 'Rombo' },
    color: { en: 'Orange with black symbol', es: 'Naranja con símbolo negro' },
    meaning: {
      en: 'A flagger controls traffic ahead. Follow the flagger signals and stop or go when directed.',
      es: 'Un abanderado controla el tráfico adelante. Sigue sus señales y detente o avanza según lo indique.'
    },
    usage: {
      en: 'Used in work zones where traffic must take turns through a single open lane.',
      es: 'Se usa en zonas de obras donde el tráfico debe alternarse por un solo carril abierto.'
    },
    alt: { en: 'Orange diamond with a black figure holding a flag, for a flagger ahead', es: 'Rombo naranja con una figura negra sosteniendo una bandera, para un abanderado adelante' },
    source: { url: handbook, section: 'Traffic Signs' },
    svg: '<svg viewBox="0 0 120 120" role="img" aria-hidden="true" focusable="false"><polygon points="60,6 114,60 60,114 6,60" fill="#F26B1D" stroke="#111111" stroke-width="4"/><circle cx="48" cy="38" r="7" fill="#111111"/><path d="M48,45 L48,68" stroke="#111111" stroke-width="6" stroke-linecap="round"/><path d="M48,52 L62,44" stroke="#111111" stroke-width="5" stroke-linecap="round"/><path d="M62,44 L84,44" stroke="#111111" stroke-width="4" stroke-linecap="round"/><polygon points="82,34 96,44 82,54" fill="#111111"/><path d="M48,68 L40,92" stroke="#111111" stroke-width="6" stroke-linecap="round"/><path d="M48,68 L58,92" stroke="#111111" stroke-width="6" stroke-linecap="round"/></svg>'
  },
  {
    id: 'detour',
    name: { en: 'Detour', es: 'Desvío' },
    category: 'construction',
    shape: { en: 'Horizontal rectangle', es: 'Rectángulo horizontal' },
    color: { en: 'Black with orange text', es: 'Negra con texto naranja' },
    meaning: {
      en: 'The road ahead is closed. Follow this route to go around the closed area.',
      es: 'La vía adelante está cerrada. Sigue esta ruta para rodear el área cerrada.'
    },
    usage: {
      en: 'Posted along the temporary route that takes traffic around a closed road or work zone.',
      es: 'Se coloca a lo largo de la ruta temporal que desvía el tráfico alrededor de una vía cerrada o zona de obras.'
    },
    alt: { en: 'Black rectangular sign with orange DETOUR text and an arrow', es: 'Señal rectangular negra con el texto DETOUR en naranja y una flecha' },
    source: { url: handbook, section: 'Traffic Signs' },
    svg: '<svg viewBox="0 0 120 120" role="img" aria-hidden="true" focusable="false"><rect x="6" y="26" width="108" height="68" rx="4" fill="#111111" stroke="#F26B1D" stroke-width="5"/><text x="60" y="56" text-anchor="middle" font-family="Arial, sans-serif" font-size="24" font-weight="bold" fill="#F26B1D">DETOUR</text><path d="M24,78 L84,78" stroke="#F26B1D" stroke-width="8" stroke-linecap="round"/><polygon points="80,68 100,78 80,88" fill="#F26B1D"/></svg>'
  }
];

export default signs;
