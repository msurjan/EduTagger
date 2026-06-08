# 03 — Parking Lot / Backlog de Visión

| Campo | Valor |
|---|---|
| **Versión** | 0.5 |
| **Fecha** | 2026-06-03 |
| **Propósito** | Capturar ideas nuevas SIN meterlas al MVP. Anti-scope-creep (anti-Q5). |

> **Regla dura:** nada de este documento se construye hasta que el MVP cumpla su criterio de éxito (doc 02 §D). Las ideas no se botan; se secuencian. Toda idea nueva a mitad de camino entra aquí primero y se evalúa, no al build.

---

## ENTRADA 1 — Marketplace de talento de tres lados
**Estado:** PARQUEADO (V2+). Semilla relacional permitida ahora.

**Idea:** plataforma que conecta mineras (proveedoras de datos) ↔ universidades ↔ alumnos. Las mineras lanzan desafíos/alianzas de práctica; los alumnos validados con buenos resultados acceden a esas prácticas.

**Por qué es valioso:** convierte empleabilidad (rezagada) en directa y medible; barter de datos más fuerte que agradecimientos.

**Por qué NO en el MVP:** depende de que el MVP exista (no hay alumnos validados sin la herramienta); plataforma multi-lado (huevo-gallina); superficie legal nueva (consentimiento de datos del alumno, equidad del scoring); riesgo de abandono del core.

**Semilla permitida ahora:** mencionar a la minera, en la negociación de permiso, que a futuro los alumnos validados podrían ser pipeline de talento. Relación, NO feature.

**Gate:** MVP validado (doc 02 §D) + decisión de abrir V2.

---

## ENTRADA 2 — Integración con el Tagger-IA de similitud (Seba)
**Estado:** PARQUEADO (V2). Semilla de compatibilidad permitida ahora.

**Idea:** EduTagger pasa a ser (o a incluir) el nuevo Tagger con **búsqueda de similitudes** que desarrolla Seba (Líder IA). Automatiza la discriminación entre rocas/testigos look-alike.

**Por qué es valioso:** automatiza y escala el entrenamiento de **discriminación** ("entre cosas idénticas, ¿a qué nos enfrentamos?") — la habilidad real del geólogo. En el MVP esa pedagogía se hace a mano (doc 05); el motor de Seba la escala.

**Por qué NO en el MVP:**
- Reintroduce IA que el MVP recortó (doc 04).
- **Amarra el deadline de nov al avance de Seba + infra de IA no controlada** = trampa de dependencia.

**Semillas permitidas ahora (sin construir):**
- Diseñar el contrato de datos del MVP con una **costura/seam** para enchufar el motor de similitud en V2 sin reescribir (doc 06 §4).
- **Alinear formatos de datos con Seba** (etiquetas/esquema de imágenes) para compatibilidad futura. Coordinación, no acoplamiento de plazos.

**Decisión de portafolio diferida:** ¿EduTagger = Tagger-IA de Seba + capa de aprendizaje, un solo producto? Se decide DESPUÉS de validar el MVP, no bajo presión de deadline.

**Gate:** MVP validado + decisión de portafolio + infra IA lista.

---

## ENTRADA 3 — Videos de contexto con NotebookLM / agentes
**Estado:** PARQUEADO (V2). 

**Idea:** generar videos explicativos del contexto geológico de cada proyecto (NotebookLM / agentes que los creen) para que el usuario entienda zona y tipos de roca rápido.

**Por qué NO en el MVP:** reintroduce IA (recortada del MVP, doc 04); scope nuevo; el ciclo de pórfido (doc 05) no lo necesita para probar la hipótesis.

**Gate:** MVP validado + decisión de abrir capa de IA (junto con Entrada 2).

---

## ENTRADA 4 — Admin / Repositorio histórico de muestras de referencia
**Estado:** PARQUEADO (V2 — plataforma de datos).

**Idea:** un panel de administración propio para crear y gestionar "muestras base / muestras tipo" — la combinación canónica de litología/alteración de cada yacimiento. Repositorio histórico de Graiph.

**Por qué es valioso:** ES el moat de datos (doc 00 §4) y el activo de Graiph; es también lo que el motor de similitud de Seba (Entrada 2) compararía a futuro.

**Por qué NO en el MVP:**
- No prueba la hipótesis del MVP (¿funciona el ciclo de aprendizaje?). Eso se valida con UN yacimiento.
- Admin completo = login + CRUD + gestión de imágenes + permisos = scope grande que corre la fecha de nov.
- Superficie de seguridad nueva = más formas de romper (anti-Q5).

**Interino para el MVP:** gestionar contenido vía `seed`/migración + validador revisando contenido directo. Sin admin para un solo yacimiento.

**Gate:** MVP validado + necesidad real de 2-3 yacimientos con producción de contenido recurrente.

---

## ENTRADA 5 — Atlas macro→micro (mapa de franjas + navegación multi-yacimiento)
**Estado:** PARQUEADO (V2 — plataforma).

**Idea:** mapa gigante interactivo con las franjas metalogénicas → zoom a yacimientos con su contexto → cada yacimiento con sus tipos de roca, fotos y sondajes tipo.

**Por qué es valioso:** es la cáscara de navegación natural del producto y conecta con el repositorio de referencia (Entrada 4).

**Por qué NO en el MVP:** el MVP tiene UN yacimiento. Un atlas multi-franja/multi-yacimiento es scope grande que corre la fecha de nov. En el MVP, "lo macro" = una pantalla simple de contexto.

**Gate:** MVP validado + varios yacimientos publicados.

---

## ENTRADA 6 — Base de conocimiento desde PDFs (PDF→MD)
**Estado:** PARQUEADO (V2).

**Idea:** subir bibliografía en PDF, convertirla a MD y usarla como base de conocimiento del producto.

**Por qué NO en el MVP:** feature de gestión de contenido = scope; y **copyright (R4)**: papers/libros de terceros no se pueden hospedar. Material propio del CEO u open-access, sí.

**Interino MVP:** referencias = enlaces y citas, no archivos hospedados.

**Gate:** MVP validado + revisión de derechos del material a hospedar.

---

## Cómo se usa este documento
1. Idea nueva → entrada aquí (no al build).
2. Se evalúa contra el MVP: ¿estrictamente necesaria para validar la hipótesis? Si no → parqueada.
3. Se reabre solo cumpliendo su gate.
