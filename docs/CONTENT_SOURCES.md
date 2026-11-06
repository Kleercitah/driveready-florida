# CONTENT SOURCES — Fuentes y política de contenido

## 1. Política

Todo el contenido educativo de DriveReady Florida es **original**: se redacta y se revisa a
partir de fuentes oficiales, sin copiar preguntas ni textos protegidos. Las preguntas **no
reproducen** el examen oficial ni su distribución.

La app **no está afiliada** al FLHSMV.

## 2. Fuentes oficiales de referencia

Fuente única de verdad: [sources.json](file:///c:/Users/pompo/OneDrive/Desktop/DRIVEREADY%20FLORIDA/src/data/sources.json)

| Id | Fuente | Editor | Tipo |
| --- | --- | --- | --- |
| `fl-handbook` | Florida Driver License Handbook | FLHSMV | manual |
| `fl-handbook-spanish` | Manual del Conductor de Florida | FLHSMV | manual |
| `fl-statutes-316` | Florida Statutes, Cap. 316 (Uniform Traffic Control) | The Florida Legislature | estatuto |
| `fl-statutes-322` | Florida Statutes, Cap. 322 (Driver Licenses) | The Florida Legislature | estatuto |
| `fl-statutes-893` | Florida Statutes, Cap. 893 (Drug Abuse Prevention) | The Florida Legislature | estatuto |
| `muta-manual` | Manual on Uniform Traffic Control Devices (MUTCD) | FHWA / U.S. DOT | estándar |
| `nhtsa-impaired` | NHTSA — Drunk and Drugged Driving | NHTSA | agencia |

Cada pregunta cita su fuente en el campo `source` (`url`, `section`, `edition`).
Fecha de verificación de fuentes registrada en `sources.json`.

## 3. Cómo se clasifica una pregunta

- `reviewStatus: 'verified'` → redactada y revisada contra las fuentes; apta para el simulacro.
- `reviewStatus: 'needs-review'` → estructura correcta, pendiente de una segunda lectura
  editorial para confirmar matices legales.

Solo las preguntas `verified` alimentan el simulacro de 50 preguntas.

## 4. Temas cubiertos (10 módulos)

1. Señales de tránsito
2. Semáforos y marcas viales
3. Prioridad de paso
4. Velocidad y distancia de seguimiento
5. Giros, carriles y estacionamiento
6. Conducción defensiva y seguridad
7. Alcohol, drogas e impedimento
8. Emergencias y situaciones especiales
9. Autopistas y adelantamiento
10. Leyes de tránsito de Florida

## 5. Ilustraciones de señales

Las 30 ilustraciones de señales son **SVG originales** dibujados con formas básicas
siguiendo las convenciones de color, forma y texto del MUTCD. No se copian recursos
externos.

## 6. Limitaciones y avisos

- Las normas de tránsito cambian. Verifica siempre la edición vigente del manual oficial
  antes de presentar el examen.
- DriveReady **no garantiza** aprobar el examen real.
- Las secciones "Move Over", DUI y sistema de puntos se describen según las fuentes
  listadas; pueden variar con reformas legislativas.
- La fecha de verificación de las fuentes es **2026-11-05**. Revisa si hubo cambios
  posteriores.

## 7. Enlaces útiles

- Manual del conductor (FLHSMV): <https://www.flhsmv.gov/pdf/handbooks/englishdriverhandbook.pdf>
- Portal FLHSMV: <https://www.flhsmv.gov/>
- Estatutos de Florida: <https://www.leg.state.fl.us/statutes/>
