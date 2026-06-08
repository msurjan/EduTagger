# 07 — Kickoff Antigravity (build solo con Claude Code)

| Campo | Valor |
|---|---|
| **Versión** | 0.1 |
| **Fecha** | 2026-06-03 |
| **Ejecuta** | CEO solo, guiado por Claude Code en Antigravity (no-programador) |
| **Depende de** | 00–06 |

---

## 0. Antes de empezar

**Protección de IP (crítico):**
- El repo se crea en el **org de GitHub de Graiph**. EduTagger es **producto de Graiph** (Módulo 4 de tu propuesta: Graiph lo vende libre).
- **No mezclar** este desarrollo con financiamiento de Geológica ni con el stream ANID/QAQC. Constrúyelo solo y sin esa plata → queda inequívocamente como PI de Graiph.
- Los documentos 00–07, versionados y fechados en el repo, son tu **evidencia de autoría**.

**Cuentas necesarias:** GitHub (org Graiph, acceso Owner ✓), Vercel, Supabase, Antigravity con Claude Code.

**Data:** construye con **imágenes placeholder** hasta que llegue el permiso del pórfido **o** las fotos internas de Geológica (piloto cerrado). No se publica sin derecho de uso.

---

## 1. Prompt maestro para Claude Code (copia y pega tal cual)

```
Eres mi Tech Lead. Yo NO sé programar; explícame cada paso en lenguaje simple y nunca asumas que entiendo jerga.

CONTEXTO: vamos a construir "EduTagger" — una herramienta educativa de Graiph para enseñar metalogénesis sobre testigos de sondaje reales. Toda la definición está en la carpeta /docs (documentos 00 a 06). LÉELOS PRIMERO antes de escribir código y resúmeme qué entendiste.

STACK OBLIGATORIO: Next.js (React) + Supabase (Postgres) + deploy en Vercel.

REGLAS INQUEBRANTABLES:
1. Trabaja en pasos pequeños. Después de cada paso que funcione, haz un commit con mensaje claro. Nunca avances 5 cosas sin commitear.
2. NUNCA edites la base de datos a mano. Todo cambio de esquema = una migración versionada en /db/migrations. (Esto evita perder la base de datos, que es mi mayor miedo.)
3. NUNCA escribas claves, tokens ni .env en el código ni en commits. Usa variables de entorno y un .env.example sin valores.
4. El módulo es STANDALONE. No dependas de ningún código externo del "Tagger" antiguo. Diseña el contrato de datos con una "costura" para enchufar un motor de similitud a futuro (doc 06).
5. Separa capa pública (lo que ve el alumno) de capa privada (procedencia: empresa, ubicación). La capa privada nunca se expone (doc 01 §5).
6. Antes de cualquier acción destructiva (borrar tablas, resetear datos), DETENTE y pregúntame.
7. Construye solo el alcance del doc 04. Si se me ocurre algo nuevo, recuérdame que va al Parking Lot (doc 03), no al código.

PRIMERA TAREA: léete /docs, resúmeme el proyecto y propón el plan de los primeros 3 commits. No escribas código hasta que yo apruebe el plan.
```

## 2. Secuencia paso a paso (cada paso = un commit)

1. **Crear repo** privado en org Graiph: `graiph-edutagger-mvp`. Crear carpeta `/docs` y subir los documentos 00–07. → commit `docs: definición inicial del proyecto`.
2. **Inicializar proyecto** Next.js + `.gitignore` + `.env.example` + README. → commit `chore: scaffold inicial`.
3. **Conectar Supabase** (variables de entorno). → commit `feat: conexión a Supabase`.
4. **Migración del esquema** según doc 01 (ficha, sets, campos públicos/privados, `confundibles`). → commit `feat: esquema de datos v1 (migración)`.
5. **Pantallas del ciclo (doc 05)** con imágenes placeholder: observar → reflexionar → conceptualizar → discriminar → inferir. Una pantalla, un commit.
6. **Instrumentación de uso** (registrar pasos completados). → commit `feat: tracking de uso`.
7. **Deploy a Vercel.** → commit `chore: deploy inicial`.

> Solo cuando llegue la data con permiso: reemplazar placeholders por el set real del pórfido y marcar la ficha como `PUBLICADO` (doc 01 §3).

## 3. Reglas para ti (fundador solo)
- **Siempre en una rama**, nunca directo a `main`. Pídele a Claude Code que te diga el comando exacto.
- **Commitea apenas algo funcione**, no al final del día.
- Si no entiendes algo, pídele a Claude Code: *"explícamelo como si no supiera programar"*.
- **Verifica cada paso** (que la pantalla cargue, que el dato se guarde) antes de avanzar.
- **Jamás** pegues una clave o token en este chat ni en el código.

## 4. Protocolo "algo se rompió" (anti-Q5)
- Si algo deja de funcionar: **NO dejes que el agente borre y recree la base de datos para "arreglar"**. Eso es exactamente lo que te pasó antes.
- Vuelve al último commit que funcionaba: pídele *"volvamos al último commit estable, sin perder datos"*.
- Verifica que Supabase tenga **backups activados** (lo trae por defecto; confírmalo).
- Cada arreglo de esquema = una **nueva migración**, nunca un parche a mano.

## 5. Listo para piloto
Checklist en doc 04 §4. No se publica sin permiso de datos firmado (pórfido) o acuerdo de uso interno (Geológica).
