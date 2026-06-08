# 05 — Diseño de Aprendizaje del MVP (Ciclo de Kolb — Unidad Pórfido)

| Campo | Valor |
|---|---|
| **Versión** | 0.3 (DRAFT) |
| **Fecha** | 2026-06-03 |
| **Depende de** | 04 MVP-Scope |
| **Marco** | Ciclo de Kolb + entrenamiento de discriminación (look-alikes) |
| **⚠️ Nota** | La geología es BORRADOR ilustrativo. El cliente (geólogo) valida/corrige. |

**Changelog v0.3:** Agregado **alcance honesto del medio RGB** (§1b). Objetivo = familiaridad visual con el rango de apariencias, NO identificación mineral.

---

## 1. Dolor que ataca el diseño
- El alumno aprende definiciones sin ver nunca el referente real.
- El problema duro no es diferenciar lo que ya sabe, sino **discriminar entre cosas que se ven idénticas**.

## 1b. Alcance honesto del medio (RGB) — integridad y reputación (R2)
- **El objetivo NO es identificar minerales.** Desde fotos RGB no se identifica mineral de forma confiable (eso es terreno o tecnología espectral).
- **El objetivo ES:** familiaridad visual con el **rango de formas** en que se ve una combinación litología/alteración, sobre **muestras de referencia validadas**.
- Limitación declarada al alumno: estas son referencias; la identificación real requiere terreno/tech.
- Esto valida el enfoque **standalone "observar, no mapear en detalle"**: no se necesita loguear en detalle un testigo que no se tiene en la mano.

## 2. Alcance de la unidad (UNA rebanada vertical)
Un (1) ciclo sobre **pórfido cuprífero**. Observables acotados a lo diagnóstico del pórfido (NO biblioteca general):
- Alteración: zonación potásica → fílica → propilítica (verificar).
- Sulfuros: calcopirita, pirita, molibdenita, bornita.
- Textura: stockwork de vetillas, diseminado.
- **Look-alikes curados a mano:** con qué se confunde y cómo distinguirlo (a nivel de apariencia/forma, no de ID definitiva). Sin IA en el MVP.

## 3. El ciclo (flujo del alumno)

### Paso 1 — Experiencia concreta (ver antes de nombrar)
Set real de testigos de pórfido. **Observa y marca lo que ve.** Sin imponer nombres.

### Paso 2 — Observación reflexiva
Prompts: ¿qué patrones se repiten? ¿qué cambia a lo largo del testigo? Apoyo: primer visual de observables diagnósticos (§2).

### Paso 3 — Conceptualización abstracta (anclar concepto a lo visto)
Conceptos ligados a lo observado: la zonación indica el proceso X; el ensamble = sistema porfírico. Macro: franja metalogénica y contexto (mapas públicos Sernageomin).

### Paso 4 — Discriminación (look-alikes)
Casos que se ven casi idénticos pero NO lo son. El alumno distingue **por apariencia/forma observable** y justifica — entendiendo los límites del RGB (§1b). Curado a mano por el validador. *(V2: el motor de similitud de Seba propone look-alikes automáticamente.)*

### Paso 5 — Experimentación activa (predecir / qué esperar)
Dada la franja y el sistema: ¿qué más esperarías encontrar? ¿el blanco? ¿qué harías en terreno? Opcional: aplicar a otro set.

### Cierre — Feedback
Clave + justificación metalogenética + **rúbrica**. Sin IA: autoevaluación y/o discusión con el profe.

## 4. Mapeo a la ficha (doc 01)
| Paso | Campos |
|---|---|
| 1–2 | `sets`, `rasgos_diagnosticos` |
| 3 | `contexto_regional`, `franja_metalogenica`, `modelo_genetico`, `minerales_presentes` + Sernageomin |
| 4 | `confundibles` (campo nuevo) |
| 5 | `consigna`, `clave_respuesta`, `rubrica` |

## 5. Requisitos para desarrollo
- Visor de set autocontenido (Tagger no se modifica; doc 06).
- Prompts de observación/reflexión + registro.
- Pantalla de conceptualización (contenido + mapas).
- Pantalla de discriminación (comparar confundibles).
- Tarea de inferencia + revelado de clave/rúbrica.
- Instrumentación de uso por paso.

## 6. Ítems abiertos
- ⚠️ Cliente valida la geología (§2–§4).
- Agregar campo `confundibles` a la ficha (doc 01).
- Captura/almacenamiento de respuesta del alumno (sin datos sensibles).
- Instrumento de feedback de supervisores (doc 02 §F).
