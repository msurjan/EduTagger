# 01 — Modelo de Datos: Ficha de Yacimiento & Catálogo

| Campo | Valor |
|---|---|
| **Versión** | 0.2 (DRAFT) |
| **Fecha** | 2026-06-03 |
| **Depende de** | 00_Problem-Statement v0.4 |
| **Objetivo pedagógico** | Metalogénesis (por qué se forma el yacimiento) |
| **Propiedad del esquema** | CEO Graiph (decide y reconcilia con uso IA/ANID) |
| **Acción urgente** | Entregar este esquema a los 2 practicantes ANTES de seguir catalogando (anti-Q5). |

---

## 1. Principio
La **ficha de tipo de yacimiento** es la unidad atómica: definición de "listo" + checklist de clearance legal + contrato de datos que consumen Tagger y portal. Publica solo si está 100% **y** con permiso escrito.

## 2. Esquema de la ficha (= definición de "listo")

### 2.1 Identidad
| Campo | Tipo | Notas |
|---|---|---|
| `id_tipo` | string estable | Inmutable |
| `nombre_tipo` | string | Canónico |
| `sinonimos` | lista | Términos del currículo |
| `franja_metalogenica` | string | **Público — eje pedagógico** |
| `region_mvp` | string | Nivel tipo/región, no yacimiento nombrado |
| `estado` | enum | `LOCKED` / `EN_CURACION` / `PUBLICADO` |

### 2.2 Clearance legal (CONTROL — bloquea publicación)
| Campo | Tipo | Notas |
|---|---|---|
| `permiso_estado` | enum | `sin_gestion` / `en_negociacion` / `escrito_firmado` |
| `permiso_ref` | string (PRIVADO) | Doc firmado |
| `permiso_alcance` | texto | Uso comercial + educativo + venta por alumno |
| `jurisdiccion` | enum | CL / BR / US (Alaska = plantilla US) |

### 2.3 Procedencia (PRIVADO — nunca al alumno)
| Campo | Tipo | Notas |
|---|---|---|
| `operador` | string (PRIVADO) | AMSA/Codelco/BHP — solo interno + agradecimientos |
| `geologo_contacto` | string (PRIVADO) | Quien entregó las fotos (gestión de permiso) |
| `ubicacion_real` | string (PRIVADO) | Mapa interno "dónde hemos trabajado" |
| `notas_internas` | texto (PRIVADO) | — |

### 2.4 Contenido pedagógico (público — CONTENIDO NUEVO, R2)
| Campo | Tipo | Notas |
|---|---|---|
| `contexto_regional` | texto | Marco geológico/geodinámico |
| `modelo_genetico` | texto | Metalogénesis: cómo y por qué se forma |
| `minerales_presentes` | estructurado | **Público — eje pedagógico** |
| `rasgos_diagnosticos` | estructurado | Alteración, estructuras, mineralogía |
| `material_referencia` | lista links/citas | Enlazar, NO hospedar (R4) |
| `profundizacion_opcional` | texto | Deep-dive por yacimiento (opcional) |
| `autor` | string | Practicante que redacta |
| `validador` | string | Profe metalogénesis / CEO (R2) |

### 2.5 Sets de imágenes
| Campo | Tipo | Notas |
|---|---|---|
| `sets` | lista | ~6–8 fotos/tipo; nº cajas, formato, variaciones caja/taco |
| `etiqueta_publica` | string | Solo tipo/franja, jamás yacimiento nombrado |

### 2.6 Ejercicio de inferencia
| Campo | Tipo | Notas |
|---|---|---|
| `consigna` | texto | Qué debe inferir |
| `clave_respuesta` | estructurado | Respuesta + justificación metalogenética |
| `rubrica` | estructurado | Evaluación |

## 3. Definición de "100% listo" (gate de publicación)
Campos 2.1–2.6 completos **Y** `permiso_estado = escrito_firmado` **Y** `validador` ≠ vacío.

## 4. Catálogo borrador (PARA VALIDACIÓN DEL GEÓLOGO)
> Podar/ampliar. Instanciar fichas solo de tipos con ruta realista de datos + permiso.

| id | Tipo | Relevancia | Data declarada |
|---|---|---|---|
| `pcu` | Pórfido cuprífero | **MVP** — emblema CL | Sí (CL/BR) |
| `epi` | Epitermal Au-Ag | Alta | Por confirmar |
| `iocg` | IOCG | Alta (CL) | Por confirmar |
| `skn` | Skarn | Media | Por confirmar |
| `mco` | Manto/estratoligado Cu | Alta (CL) | Por confirmar |
| `vms` | Sulfuros masivos volcanogénicos | Media | Por confirmar |
| `aug` | Oro orogénico/vetiforme | Media | Por confirmar |
| `bif` | Hierro bandeado | Alta (BR) | Sí (BR) |
| `liq` | Salmuera de litio (salar) | Alta (CL) | Por confirmar |
| `cal` | Caliche/nitratos | Específico CL | Por confirmar |
| `pet` | Sistema petrolero | Caso US | Sí (Alaska) |

## 5. Separación de capas
- **Privada:** operador, contacto, ubicación, refs permiso. Acceso: equipo Graiph.
- **Pública:** tipo, franja, contexto, imágenes etiquetadas por tipo, ejercicio.
- Regla validada en el contrato de datos: ningún campo privado filtra a la capa pública.

## 6. Alineación con DB ANID
CEO dueño del esquema → la DB de practicantes converge con este modelo. Definir: ¿el producto educativo extiende la DB ANID o consume por contrato?
