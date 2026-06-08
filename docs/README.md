# EduTagger — Documentación del Proyecto (Graiph)

Herramienta educativa de Graiph para enseñar **metalogénesis** sobre testigos de sondaje reales. Estos documentos son la fuente de verdad del proyecto: definen qué se construye, por qué, y cómo, **antes** de escribir código.

> **Empieza por aquí:** lee el **08 (Plan de Acción)** para saber qué hacer. El resto es el detalle.

## Orden de lectura
| # | Documento | Qué es |
|---|---|---|
| 00 | Problem-Statement | Problema, hipótesis de valor, riesgos, personas |
| 01 | Data-Model y Catálogo | Esquema de la "ficha de yacimiento" + catálogo de tipos |
| 02 | Value-Proposition-Canvas | Valor para alumno y comprador + segmento profesional (Geológica) |
| 03 | Parking-Lot-Backlog | Ideas parqueadas (no van al MVP) — disciplina anti-scope-creep |
| 04 | MVP-Scope | Qué entra y qué NO entra al MVP. La línea. |
| 05 | Learning-Design | El ciclo de Kolb sobre el pórfido (mecánica pedagógica) |
| 06 | Arquitectura-y-GitHub | Cómo se construye sin romper nada + flujo de commits |
| 07 | Kickoff-Antigravity | Prompt maestro y pasos para construir con Claude Code |
| 08 | Plan-de-Acción | **Qué hacer, en orden, quién lo hace** |

## Estado actual (al 2026-06-03)
- **MVP:** pórfido cuprífero chileno · enseñar metalogénesis · **sin IA**.
- **Stack:** Next.js + Supabase + Vercel.
- **Arquitectura:** módulo nuevo standalone; el Tagger antiguo NO se toca.
- **Piloto:** UST (Geología Económica, gratis) y/o Geológica (cerrado, data interna).

## Bloqueantes abiertos
- **R1 (legal):** permiso de uso de los datos del pórfido (o acuerdo de uso interno con Geológica). No se publica sin esto.
- **PI con Geológica:** sin definir. Requiere abogado. Mantener EduTagger como PI de Graiph.

## Reglas que no se rompen
1. Toda idea nueva → Parking Lot (03), no al código.
2. El Tagger antiguo no se toca.
3. Migraciones versionadas; nunca borrar la base de datos para "arreglar".
4. Nunca subir claves/tokens al repo.
