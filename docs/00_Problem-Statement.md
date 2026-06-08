# 00 — Problem Statement & Hipótesis de Valor

| Campo | Valor |
|---|---|
| **Proyecto** | [nombre TBD] — Biblioteca curada de testigos para enseñar metalogénesis |
| **Versión** | 0.4 (DRAFT) |
| **Fecha** | 2026-06-03 |
| **Visionario / Cliente** | CEO Graiph (Geólogo, profesor UST) |
| **Tech Lead / PM** | Claude |
| **MVP** | **Pórfido cuprífero chileno** · enfoque pedagógico: **METALOGÉNESIS** |
| **Estado** | R1 en mitigación (permisos escritos vía retainer legal). Avance: gobernanza + diseño + plantillas legales. |

**Changelog v0.4:** Spine pedagógico = metalogénesis. R1: barter = agradecimientos (no piloto); operador → capa privada; sin georreferenciación. Plantillas legales vía retainer existente (permiso + cesión IP practicantes). R5 nuevo (royalty validador). Esquema DB = propiedad del CEO → imponer esquema 01 esta semana. Próximo: Value Proposition de DOS lados (alumno + director).

---

## 1. Activo existente
**Tagger (EduTagger):** descripción/dibujo de sondajes, sin IA. 4 MM CLP/año, 2 cursos × 50 (100). Despliegue: Duoc (posible U. Mayor). Banco de pruebas/canal: UST.

## 2. Problema (validado por profesor; PENDIENTE alumno + director)
Conceptos abstractos sin referente real; sin estructura mental que integre materias ("ramo pasado, ramo olvidado").

## 3. Escasez raíz
Universidades sin acceso a DB de sondajes.

## 4. Hipótesis de valor
**Objetivo pedagógico: metalogénesis** — enseñar por qué se forman los yacimientos (tectónica → franja → tipo → alteración/mineralogía), usando testigos reales representativos como evidencia. El Tagger es la superficie; el marco metalogenético + la inferencia inductiva son el foso. Profundización en yacimientos específicos = opcional (tenet §11). Publicación por tipo solo con permiso escrito + ficha 100%.

## 5. Personas
| Rol | Quién | Nota |
|---|---|---|
| Usuario | Estudiante | Aprende metalogénesis |
| Defensor | Profesores | Adopción |
| Comprador | Director de carrera | Anual renovable. Decisión nov–ene, pago mar–may. **VPC pendiente.** |
| Validador de contenido | Profe de metalogénesis | Escudo reputacional (R2). Royalty → R5. |
| Proveedor de datos | Minera (geólogo senior) | NO comprador. Barter = **agradecimientos**. |

## 6. RIESGOS
- **R1 — LEGAL (en mitigación).** Permiso escrito por tipo (uso comercial/educativo/venta por alumno). Plantillas vía retainer: (a) permiso+agradecimiento minera, (b) **cesión IP de practicantes** (obligatoria: redactan contenido vendible). Data minimizada: sin georref, operador privado, etiqueta pública = solo tipo/franja. Sistema no publica sin flag de clearance.
- **R2 — ALTO: producción de contenido.** Imágenes sin descripción → contenido 100% nuevo. ~50% del proyecto. Mitigación: practicantes redactan, profe metalogénesis + CEO validan.
- **R3 — Scope creep.** Fichas de todos = OK. Completar = secuencial-primero (§13). Embudo total = V2.
- **R4 — Copyright terceros.** Enlazar/citar, no hospedar.
- **R5 — NUEVO: economía del royalty.** Royalty al validador por licencia cambia la economía unitaria y requiere contrato (%, alcance, propiedad del contenido, salida). Resolver en fase de costos.

## 7. Tiempo
Decisión nov 2026–ene 2027 → despliegue mar 2027. MVP validado antes de nov 2026.

## 8. Disciplina de alcance (anti-Q5)
Tagger no se toca. Capa de datos = módulo aislado, contrato estable. Agregar módulo no puede tumbar core/DB.

## 9. Próximo gate
Value Proposition Canvas de **dos lados** (alumno-usuario + director-comprador) → doc 02. Luego: prototipo + costos.

## 10. Gobernanza de datos
Esquema = propiedad del CEO → imponer esquema 01 a practicantes esta semana, sirviendo también al uso IA/ANID. Procedencia (operador/ubicación) = privada. Pública = solo tipo/franja.

## 11. Tenets de diseño
Profundidad opcional y no lineal. Framing: biblioteca curada para enseñar metalogénesis, no data confidencial.

## 12. Modelo de desbloqueo por tipo
`LOCKED` → `EN_CURACION` → `PUBLICADO` (requiere ficha 100% + permiso escrito; enforced por sistema).

## 13. Principio secuencial-primero
Pórfido end-to-end (datos→contenido→UX→ejercicio→prueba UST) antes de paralelizar contenido de otros tipos.
