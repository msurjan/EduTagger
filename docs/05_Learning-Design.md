# 05 — Diseño de Aprendizaje del MVP (flujo macro→micro)

| Campo | Valor |
|---|---|
| **Versión** | 0.4 (DRAFT) |
| **Fecha** | 2026-06-03 |
| **Depende de** | 04 MVP-Scope |
| **Marco** | Aprendizaje escalonado (equipar antes de observar) + discriminación de look-alikes |
| **⚠️ Nota** | La geología es BORRADOR; el validador la corrige. |

**Changelog v0.4:** **Re-secuenciado** de "observar primero" (Kolb puro) a **macro→micro con descripción como capstone**. Un novato no puede describir a ciegas: primero se equipa, y mapear el testigo es el paso FINAL. **Orden cerrado** (no se re-litiga hasta tener datos del piloto).

---

## 1. Dolor + principio de diseño
- El alumno aprende definiciones sin ver el referente real, y no integra entre ramos.
- El problema duro: discriminar entre cosas que se ven idénticas.
- **Principio nuevo (corrección del cliente):** un novato no puede describir un testigo sin marco previo. Se le **equipa primero**; la descripción/mapeo del testigo es la **demostración final**, no el punto de partida.
- **Honestidad RGB:** el objetivo es familiaridad visual con el rango de apariencias de combinaciones lito/alteración, NO identificación mineral (eso es terreno/tech).

## 2. Alcance de la unidad (UNA rebanada vertical)
Un (1) flujo completo sobre **pórfido cuprífero** (ref. Collahuasi, contenido borrador).
- **"Macro" = una pantalla simple de contexto** (franja + ubicación), NO un atlas interactivo de franjas (eso es V2, doc 03).
- Observables acotados a lo diagnóstico del pórfido (no biblioteca general).

## 3. El flujo (orden cerrado)

### Paso 1 — Contexto macro (orientar)
Pantalla simple: la franja metalogénica (Eoceno tardío–Oligoceno temprano, norte de Chile), dónde estamos, qué tipo de sistema vamos a estudiar. Sin atlas interactivo.

### Paso 2 — Conceptualización guiada (equipar)
El marco validado: qué es un pórfido Cu-Mo, el modelo genético/metalogénesis, las alteraciones (potásica, propilítica, fílica, argílica, argílica avanzada) y los minerales clave que esperar. Aquí el alumno *adquiere* el lenguaje.

### Paso 3 — Observación guiada del testigo (reconocer)
Ahora ve el testigo real (placeholder hasta tener permiso). **No describe a ciegas:** se le guía a *reconocer* lo aprendido ("ubica la alteración potásica", "encuentra la calcopirita"). Marcadores + notas.

### Paso 4 — Discriminación (look-alikes)
Comparar con confundibles (skarn de Cu, epitermal de alta sulfuración): distinguir por apariencia/forma, entendiendo los límites del RGB.

### Paso 5 — Descripción / inferencia del testigo (CAPSTONE)
Recién aquí el alumno **describe/mapea el testigo y hace la inferencia metalogenética** por su cuenta. Es la demostración de que integró todo. *El sondaje es el paso final.*

### Cierre — Feedback
Clave + justificación + **rúbrica** (autoevaluación / profe). Sin IA.

## 4. Mapeo a la ficha (doc 01)
| Paso | Campos |
|---|---|
| 1 | `franja_metalogenica`, `region_mvp`, `contexto_regional` |
| 2 | `modelo_genetico`, `minerales_presentes`, `rasgos_diagnosticos`, `material_referencia` |
| 3 | `sets` (imágenes) |
| 4 | `confundibles` |
| 5 | `consigna`, `clave_respuesta`, `rubrica` |

## 5. Requisitos para desarrollo
- Pantalla de contexto macro simple (no atlas).
- Pantalla de conceptualización (contenido + enlaces).
- Visor de testigo con marcadores/notas (reconocimiento guiado).
- Pantalla de discriminación.
- Pantalla de descripción/inferencia + revelado de clave/rúbrica (capstone).
- Instrumentación de uso por paso.

## 6. Ítems abiertos
- ⚠️ Validador confirma la geología.
- Reordenar las pantallas ya construidas a este flujo (no rehacer).
- Captura/almacenamiento de respuestas (sin datos sensibles).
