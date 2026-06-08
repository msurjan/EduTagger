# 08 — Plan de Acción Maestro (qué hacer, en orden)

| Campo | Valor |
|---|---|
| **Versión** | 0.1 |
| **Fecha** | 2026-06-03 |
| **Para** | CEO Graiph — fundador no-programador, ejecuta solo con Claude Code |
| **Resume** | docs 00–07 (esta es tu hoja de ruta; no necesitas releer todo) |

**Leyenda:** 👤 = lo haces tú personalmente · 👥 = lo delegas · 🤖 = lo hace Claude Code (tú diriges y verificas)

---

## ⚡ ESTA SEMANA (desbloquea todo)

1. 👥 **Frena a los practicantes y dales el esquema.** Entrégales el **doc 01** como estructura obligatoria, más la regla de procedencia privada (empresa, ubicación y operador **nunca** se exponen al alumno). Sin esto siguen generando caos que después heredas.

2. 👤🤖 **Levanta el repo y arranca con Claude Code.** Sigue el **doc 07**:
   - Pídele a Claude Code que cree el repo `graiph-edutagger-mvp` en el **org de Graiph** (privado).
   - Sube los documentos 00–08 a una carpeta `/docs`.
   - Pega el **prompt maestro** (doc 07 §1).
   - **No dejes que escriba código** hasta que te resuma los docs y te proponga los 3 primeros commits.

3. 👤 **Inicia el permiso del pórfido.** Contacta al geólogo senior que te pasó las fotos; ofrécele aparecer en agradecimientos. En paralelo, pídele a tus abogados (las 10 hrs/mes que ya pagas) **dos plantillas**: (a) permiso/agradecimiento de la minera, (b) **cesión de PI de los practicantes** (obligatoria: redactan contenido que vas a vender).

4. 👤 **Protege lo que ya factura.** Confirma que existan **backups de la base de datos del Tagger** en producción (doc 06 R-BUS).

---

## 🛠️ APENAS TENGAS EL REPO ANDANDO (construir)

5. 👤🤖 Sigue la **secuencia de commits del doc 07 §2** con imágenes placeholder:
   esquema de datos → pantallas del ciclo de Kolb (doc 05) → tracking de uso → deploy a Vercel.
   **Un paso, un commit.** Verifica que cada cosa funcione antes de avanzar.

---

## 🔀 EN PARALELO (no bloquea el código)

6. **Contenido del pórfido.**
   - 👥 Practicantes redactan los campos del **doc 05** (contexto regional, franja, rasgos diagnósticos, look-alikes, ejercicio de inferencia).
   - 👤 Consigue al **validador de metalogénesis** y define su contrato (el royalty va con abogado; ojo a la economía unitaria — R5).

7. 👤 **Decide el primer piloto y su medición.** UST (Geología Económica, gratis) y/o Geológica (cerrado, con su data interna). Arma el **instrumento que mide el éxito = criterio de matar** (doc 02 §D): uso real + embebido en syllabus / equivalente profesional + feedback de supervisores. **Sin medición, el piloto no prueba nada.**

8. 👤 **Geológica / Propiedad Intelectual.** Lleva la propuesta de 4 módulos a un **abogado corporativo/PI antes de firmar nada**. Mantén EduTagger **fuera** de los buckets financiados/exclusivos (Módulos 2/3) para que quede de Graiph. No decidas el tema inversión/equity con entusiasmo.

---

## 🚧 ANTES DE PUBLICAR O COBRAR (el gate)
- [ ] Permiso del pórfido **firmado**, o acuerdo de uso interno con Geológica.
- [ ] Ficha del pórfido **100%** + contenido **validado**.
- [ ] Piloto **instrumentado** contra doc 02 §D.

---

## 🔁 PARA SIEMPRE (la disciplina que rompe tu patrón)
- Commitea seguido, **siempre en una rama**, **nunca** pegues claves/tokens, **migraciones versionadas**.
- **Nunca** dejes que el agente borre la base de datos para "arreglar" (tu desastre del pasado).
- Toda idea nueva → **Parking Lot (doc 03)**, no al código.
- Los documentos 00–08 son tu fuente de verdad; manténlos vivos.

---

## 👥 Quién hace qué (resumen)
| Quién | Responsabilidad |
|---|---|
| 👤 Tú | Dirigir a Claude Code, conseguir el permiso de la minera, decisiones de piloto y del deal Geológica, conseguir al validador |
| 👥 Practicantes | Data bajo el esquema del doc 01 + contenido del doc 05 |
| 👥 Abogados | Plantillas (permiso + cesión PI) y revisión del deal Geológica |
| 👥 Validador metalogénesis | Revisar/validar el contenido geológico |
| Seba (IA) | Alinear formatos de datos para compatibilidad futura — NO en el MVP |
| 🤖 Claude Code | Todo el código, guiado por el doc 07 |
