# QUESTION REVIEW — Revisión del banco de preguntas

## 1. Estado actual del banco

| Métrica | Valor |
| --- | --- |
| Total de preguntas | **150** |
| `verified` (aptas para simulacro) | **144** |
| `needs-review` (pendientes de 2.ª lectura) | **6** |
| Categorías con preguntas | **10 / 10** |
| Opciones por pregunta | 4 |
| Errores estructurales | **0** |

Comprobado con `npm run validate` (validación estructural del banco completo).

## 2. Qué verifica la validación automática

La función `validateQuestionBank` comprueba la **forma** de los datos:

- `id` presente y único.
- `category` dentro de las categorías declaradas.
- 4 opciones no vacías y sin duplicados normalizados.
- `correctAnswerIndex` entero y dentro de rango.
- Explicación en inglés obligatoria (la española es advertencia, no error).
- `source.url` presente.
- `reviewStatus` válido.
- Sin enunciados duplicados (comparación normalizada).

> Esta validación es **estructural**. **No demuestra** que el contenido sea correcto desde
> el punto de vista legal. La comprobación legal es un proceso editorial humano y se
> documenta en la sección 4.

## 3. Incidencia corregida en esta revisión

La validación detectó **una pregunta duplicada**: `hp-004` repetía el enunciado de `tl-014`
(ambas sobre adelantar por la derecha). Se **reescribió `hp-004`** como una pregunta distinta
y claramente correcta sobre el uso del **carril de aceleración** al incorporarse a una
autopista, manteniendo su categoría (`highways-passing`), dificultad y fuente.

Estado: **corregido**. La validación estructural pasa ahora sin errores.

## 4. Proceso de revisión editorial (legal)

1. **Redacción** de la pregunta a partir de una fuente oficial concreta.
2. **Contraste** con la sección citada del manual o del estatuto.
3. **Segunda lectura** por otra persona para confirmar matices (excepciones, cifras, penas).
4. **Clasificación** como `verified` o `needs-review`.
5. **Registro** de la fecha de verificación en `sources.json`.

## 5. Preguntas pendientes (`needs-review`)

Las 6 preguntas marcadas como `needs-review` están excluidas del simulacro. Requieren una
segunda lectura editorial antes de pasar a `verified`. Hasta entonces, la app **no inventa**
contenido para completar el banco: simplemente no las usa en el examen.

## 6. Garantías

- Solo las preguntas `verified` entran en el simulacro de 50.
- Si el número de verificadas fuera inferior a 50, el simulacro **no se inicia** y se avisa
  al usuario, en lugar de repetir o fabricar preguntas.
- Ninguna cifra mostrada en la app proviene de datos ficticios.

## 7. Limitación explícita

La revisión documentada aquí es **estructural y editorial**, no una certificación legal
externa. Ante cualquier duda, la fuente oficial prevalece.
