# 04 — Definición de Alcance del MVP

| Campo | Valor |
|---|---|
| **Versión** | 0.2 (DRAFT) |
| **Fecha** | 2026-06-03 |
| **Depende de** | 00 v0.4 · 01 v0.2 · 02 v0.1 · 03 v0.1 · 05 v0.1 |
| **MVP** | Pórfido cuprífero chileno · enseñar metalogénesis sobre testigo real |
| **IA** | NO en MVP (primer incremento V2) |
| **Piloto** | Geología Económica, UST — test gratuito, antes de nov 2026 |

**Changelog v0.2:** IA resuelta (NO). Vehículo de piloto = Geología Económica UST. Sernageomin como fuente pública de capa macro. Mecánica pedagógica → doc 05. App de terreno resuelta a FUERA. Caveats de piloto gratuito (§8).

---

## 1. Hipótesis única que prueba el MVP
> Estudiantes que trabajan testigos reales de **pórfido** con un **ciclo de aprendizaje metalogenético** (doc 05) se sienten/demuestran más preparados, y un director embebe el producto en ≥2 syllabi oficiales y quiere renovar.

Si no se valida, no procede. (Métrica = doc 02 §D.)

## 2. DENTRO del alcance
1. **Un (1) tipo:** pórfido cuprífero chileno. Ficha 100% (doc 01) + permiso escrito.
2. **Contenido metalogenético del pórfido:** contexto, franja, modelo genético, rasgos diagnósticos. Redactado por practicantes, **validado**. Capa macro (franja/ocurrencias) puede apoyarse en **fuentes públicas Sernageomin** (verificar términos de uso/redistribución).
3. **Set curado:** ~6–8 imágenes reales representativas, etiquetadas solo por tipo; capa privada separada.
4. **Flujo de aprendizaje (doc 05), orden macro→micro:** contexto macro → conceptualización (equipar) → observación guiada → discriminación → **descripción/inferencia del testigo como capstone**. Evaluación por rúbrica / profe (**sin IA**).
5. **Integración con el flujo del Tagger** (describir/marcar → ciclo). **El Tagger NO se modifica.**
6. **Instrumentación de uso** (adopción de la cohorte).
7. **Material de referencia:** enlaces/citas. **No hospedar** (R4).

## 3. FUERA del alcance (cada una → Parking Lot)
| Fuera | Por qué |
|---|---|
| Otros tipos de yacimiento | Fichas LOCKED. Secuencial-primero (00 §13). |
| Escalera completa de tipos de roca/minerales | MVP = una rebanada vertical (doc 05 §2). V2. |
| IA / visión computacional / tutor automático | Resuelto: V2. |
| Integración con Tagger-IA de similitud (Seba) | V2. Amarra el deadline a infra/avance que no controlas. Parking Lot 03 Entrada 2. Discriminación se hace a mano en MVP. |
| "Embudo total" (papers/libros hospedados) | R4 copyright; solo enlaces. |
| Marketplace de talento / features para reclutadores | Parking Lot (03). Depende del MVP. |
| Multi-universidad / escalamiento | Solo UST en el piloto. |
| Atlas mundial / mapa global | Scope creep clásico. |
| Reescribir o modificar el Tagger | Anti-Q5: el core que funciona no se toca. |
| Gamificación / rankings / scoring para reclutar | Ligado al marketplace; V2+. |
| App offline / endurecida para terreno | FUERA: uso es aula/autoestudio (Geología Económica). V2 si surge uso en campo. |

## 4. Definición de "listo para piloto"
- [ ] Ficha pórfido 100% (doc 01) + **permiso escrito firmado**.
- [ ] Contenido validado por profe de metalogénesis.
- [ ] Ciclo de aprendizaje (doc 05) implementado con rúbrica.
- [ ] Integrado al flujo del Tagger.
- [ ] Uso instrumentado.
- [ ] Capa de datos = **módulo aislado, contrato estable, migraciones + backup** (anti-Q5).

## 5. Éxito / criterio de matar
Comprometido en doc 02 §D. No se re-discute salvo nueva versión de ese doc.

## 6. Ruta crítica y dependencias
1. **Permiso pórfido (CEO) — BLOQUEANTE #1.** Prioridad absoluta.
2. Esquema de datos a practicantes (**esta semana**).
3. Contenido pórfido (practicantes → validador) + mapas Sernageomin.
4. Software: módulo de datos + ciclo (doc 05) + tracking.
5. Integración con Tagger.
6. Piloto UST (Geología Económica).

> 3 y 4 avanzan en paralelo con placeholders mientras 1 se negocia; **no se publica sin permiso firmado.**

## 7. La regla de la línea
Todo lo que no esté en §2 está fuera. Idea nueva → Parking Lot (03), se evalúa contra §1, se reabre solo cumpliendo su gate. **Sin excepciones a mitad de camino.**

## 8. Sobre el piloto gratuito (Geología Económica, UST)
- **Instrumentado contra doc 02 §D**, o no es evidencia.
- **Gratis prueba deseabilidad, no disposición a pagar.** La conversión a línea pagada (ciclo nov-ene) es hipótesis aparte.
- Conflicto de interés a vigilar (profe-CEO en su propia universidad): aceptable para piloto, no es prueba de negocio replicable (doc 02 §E).
