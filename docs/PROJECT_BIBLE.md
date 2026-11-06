# PROJECT BIBLE — DriveReady Florida

## 1. Qué es

DriveReady Florida es una **aplicación web estática** para estudiar el *Florida Class E
Knowledge Exam*. Está pensada como un regalo personal: bella, tranquila, mobile-first y
accesible, con una pequeña dedicatoria romántica en la primera visita.

## 2. Para quién

Una sola persona que va a presentar el examen teórico de Florida. No hay cuentas, ni
multiusuario, ni administración.

## 3. Principios de producto

1. **Contenido real, nunca relleno.** Ninguna pantalla queda vacía ni con datos ficticios.
2. **La cantidad nunca por encima de la calidad.** Es preferible menos preguntas bien
   revisadas que muchas dudosas.
3. **Honestidad sobre el examen.** La app deja claro que es una simulación de estudio y
   que no está afiliada al FLHSMV.
4. **Calma y confianza.** Nada de presión, ni de cuentas atrás agresivas, ni de mensajes
   alarmistas. El temporizador es opcional y se etiqueta como herramienta de práctica.
5. **Todo local.** Sin backend, sin autenticación, sin analítica y sin red obligatoria.

## 4. Reglas del examen (configuración de estudio)

| Regla | Valor |
| --- | --- |
| Preguntas por simulacro | 50 |
| Respuestas correctas para aprobar | 40 |
| Porcentaje de aprobación | 80% |
| Preguntas sin responder | cuentan como incorrectas |
| Pistas o explicaciones durante el examen | ninguna (solo al entregar) |
| Idioma del examen | inglés |

Estos valores son la **configuración de estudio de DriveReady**. No reproducen la
distribución, el orden ni los tiempos del examen oficial.

## 5. Alcance

**Dentro del alcance**

- 10 módulos de lección con contenido sustancial y comprobaciones rápidas.
- Banco de preguntas originales con explicación bilingüe y fuente.
- Práctica configurable y simulacro completo.
- Galería de señales y práctica de reconocimiento.
- Estadísticas reales, repaso y ajustes.
- Documentación y pruebas automatizadas.

**Fuera del alcance**

- Backend, cuentas, sincronización entre dispositivos.
- Cualquier servicio de pago o IA generativa de pago.
- Frameworks SPA (React/Vue/Angular/Next).
- Afirmar que la app garantiza aprobar el examen real.

## 6. Rutas

`/`, `/learn`, `/learn/:lessonId`, `/practice`, `/practice/session`, `/signs`, `/exam`,
`/exam/session`, `/exam/results/:resultId`, `/progress`, `/review`, `/settings`, `/about`
y una página de error.

## 7. Identidad visual

- **Colores base:** Midnight `#101827`, Ocean `#1D3557`, Lavender `#A9B8F7`, Snow `#F7F8FC`.
- **Rosa `#F0A9BB`:** reservada a los detalles románticos (dedicatoria, corazón del dashboard).
- **Tipografías:** Outfit para títulos, Inter para el cuerpo.
- **Tono:** sobrio, editorial y cinematográfico. Sin neón ni HUD decorativo.

## 8. Criterios de calidad

- Ninguna página queda vacía o con funciones pendientes.
- Toda cifra mostrada proviene de datos reales almacenados.
- La interfaz respeta `prefers-reduced-motion`, el foco visible y los anuncios `aria-live`.
- Las pruebas **no se declaran superadas si no se ejecutaron**.

## 9. Fuera del control de la app

- La exactitud legal vigente: verificar siempre el manual oficial.
- El resultado del examen real.
- El comportamiento de la caché del navegador del usuario.
