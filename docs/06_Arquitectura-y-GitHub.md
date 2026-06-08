# 06 — Arquitectura del MVP & Disciplina de GitHub

| Campo | Valor |
|---|---|
| **Versión** | 0.1 (DRAFT) |
| **Fecha** | 2026-06-03 |
| **Depende de** | 00–05 |
| **Decisión núcleo** | Módulo nuevo standalone. El Tagger no se toca (caja negra). |

---

## 1. Hallazgo (estado del código existente)
- Repos del Tagger (`tagger-scripts`, `Angular-front-V2`, `development-DB-graiph`) son **privados**, no accesibles sin autenticación.
- **Los devs se fueron** → código huérfano, sin nadie que lo entienda. El CEO no programa.
- Stack inferido: Angular (front) + scripts (back) + DB. EduTagger = adaptación del Tagger.

## 2. Decisión de arquitectura (definitiva, anti-Q5)
El módulo del MVP se construye **nuevo, limpio y standalone**. El Tagger es una **caja negra externa que NO se toca ni se modifica**.
- *Por qué:* tocar código huérfano = repetir el desastre Q5 (romper, perder DB, no poder arreglar).
- *Resultado:* el Tagger no se puede romper porque no lo tocamos; el código nuevo nace con estructura, versionamiento, migraciones y backups.

## 3. Refinamiento de alcance (encoge el MVP)
Para el piloto, el módulo de aprendizaje es **autocontenido**: su propio visor de testigos + captura de observación. **Integración estrecha con el Tagger → V2** (cuando haya devs que lo entiendan). No se hace ingeniería inversa del Angular huérfano para llegar a noviembre.
> Actualizar doc 04 §2.5: "integración con flujo Tagger" pasa a "autocontenido; link-out opcional al Tagger".

## 4. Stack recomendado (a validar por el equipo dev / Antigravity)
| Capa | Recomendación | Racional |
|---|---|---|
| Frontend | Next.js / React en **Vercel** | Mainstream, handoff-able, ya conectado |
| Datos | **Supabase (Postgres)** | **Migraciones versionadas + backups automáticos = respuesta directa a Q5** |
| Seguridad de datos | RLS (row-level security) | Hace cumplir capa pública vs privada (doc 01 §5) |
| Imágenes | Storage de Supabase / Vercel | Sets de testigo etiquetados por tipo |
| Extensibilidad | Contrato de datos con **costura (seam)** | Permite enchufar el motor de similitud IA de Seba en V2 sin reescribir (doc 03 Entrada 2). Alinear formatos con Seba desde ya. |

## 5. Estructura de repositorio (UN repo nuevo, limpio)
```
graiph-metalogenesis-mvp/
  /docs        <- estos documentos 00–06 viven aquí (versionados)
  /app         <- frontend (Next.js)
  /db
    /migrations  <- cada cambio de esquema = una migración versionada
    schema.md    <- contrato de datos (doc 01)
  README.md      <- cómo correr, cómo desplegar, decisiones
  .gitignore     <- NUNCA credenciales/.env
  .env.example   <- variables sin valores reales
```
- **Separado de los repos huérfanos del Tagger.** No se mezcla.

## 6. Flujo de GitHub paso a paso (commits: cuándo y cómo)
1. **Rama `main` protegida.** Nunca se commitea directo a `main`.
2. Cada tarea = una **rama feature**: `git checkout -b feature/visor-testigos`.
3. **Commitea seguido y chico** (cada avance funcional, no al final del día). Mensaje claro: `feat: visor de set de testigos` / `fix: ...` / `docs: ...`.
4. Al terminar la tarea: `git push origin feature/...` → abrir **Pull Request** a `main`.
5. Revisar el PR (tú o un dev) → recién ahí **merge a `main`**.
6. **Migraciones de DB SIEMPRE versionadas** en `/db/migrations`. Jamás editar la base a mano en producción (esa fue la causa de tu Q5).
7. **NUNCA** commitear `.env`, claves, tokens. Si se filtra una clave, se rota.
8. Cada feature nueva (post-MVP) repite el ciclo. Una idea nueva pasa primero por el Parking Lot (doc 03).

## 7. Guardrails anti-Q5 (checklist permanente)
- [ ] Tagger nunca se modifica.
- [ ] Módulo nuevo aislado, sin dependencias del código huérfano.
- [ ] DB gestionada (Supabase) con backups automáticos verificados.
- [ ] Todo cambio de esquema = migración versionada en git.
- [ ] Agregar un yacimiento nuevo = data, NO cambio estructural que rompa el core.
- [ ] Secretos fuera del repo.

## 8. Riesgo de negocio: código legacy huérfano (R-BUS, paralelo al MVP)
No es parte del MVP, pero es crítico:
- [ ] Confirmar **acceso Owner** del CEO al org de GitHub de Graiph.
- [ ] Verificar que existan **backups de la DB del Tagger en producción** (el producto que ya factura).
- [ ] Documentar qué está desplegado y dónde.

## 9. Ítems abiertos / dependencias
- ⚠️ ¿Las ~6–8 imágenes del pórfido están accesibles como archivos (no atrapadas en el repo DB huérfano)? — **crítico para el MVP**.
- ⚠️ ¿Acceso Owner al org de GitHub? (R-BUS).
- ⚠️ Validación del stack (§4) por el equipo dev / Antigravity.
