"use client";

import React, { useState } from "react";
import styles from "./page.module.css";
import studyStyles from "./study.module.css";
import { mockYacimiento, Yacimiento } from "../lib/mockData";

interface Marker {
  id: string;
  x: number;
  y: number;
  imageIndex: number;
  description: string;
}

export default function Home() {
  const [isInStudyMode, setIsInStudyMode] = useState<boolean>(false);
  const [currentStep, setCurrentStep] = useState<number>(1); // 1 to 5, 6 is Cierre
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);
  const [markers, setMarkers] = useState<Marker[]>([]);
  const [activeMarkerId, setActiveMarkerId] = useState<string | null>(null);
  
  // States for subsequent steps
  const [reflections, setReflections] = useState<string>("");
  const [inferenceAnswer, setInferenceAnswer] = useState<string>("");
  const [selfScore, setSelfScore] = useState<Record<number, number>>({});

  const yacimiento: Yacimiento = mockYacimiento;

  // Handle image click to place marker (Step 1)
  const handleImageClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (currentStep !== 1) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    const newMarker: Marker = {
      id: `marker_${Date.now()}`,
      x,
      y,
      imageIndex: activeImageIndex,
      description: "",
    };

    setMarkers([...markers, newMarker]);
    setActiveMarkerId(newMarker.id);
  };

  const updateMarkerDescription = (id: string, text: string) => {
    setMarkers(
      markers.map((m) => (m.id === id ? { ...m, description: text } : m))
    );
  };

  const deleteMarker = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setMarkers(markers.filter((m) => m.id !== id));
    if (activeMarkerId === id) {
      setActiveMarkerId(null);
    }
  };

  const currentImageMarkers = markers.filter(
    (m) => m.imageIndex === activeImageIndex
  );

  // Home Page View
  if (!isInStudyMode) {
    return (
      <div className={styles.container}>
        <main className={styles.main}>
          <header className={styles.header}>
            <span className={styles.badge}>Graiph Metalogénesis</span>
            <h1 className={`${styles.title} gradient-text`}>EduTagger</h1>
            <p className={styles.description}>
              Biblioteca curada de testigos de sondaje reales para enseñar y aprender metalogénesis a través de la observación y el método inductivo.
            </p>
            <button
              className={styles.button}
              onClick={() => setIsInStudyMode(true)}
              style={{ marginTop: "1rem" }}
            >
              Comenzar Ciclo de Aprendizaje
            </button>
          </header>

          <section className={styles.grid}>
            <div className={styles.card}>
              <h2 className={styles.cardTitle}>Módulo MVP: Pórfido Cuprífero</h2>
              <p className={styles.cardContent}>
                Estudia el yacimiento insignia de la geología chilena. Analiza su alteración hidrotermal, zonación potásica, fílica y propilítica, y aprende a discriminar look-alikes.
              </p>
              <span className={styles.badge} style={{ alignSelf: 'flex-start', fontSize: '0.75rem', background: 'rgba(16, 185, 129, 0.1)', color: 'var(--accent-success)', borderColor: 'rgba(16, 185, 129, 0.2)' }}>
                Listo para inicializar
              </span>
            </div>

            <div className={styles.card}>
              <h2 className={styles.cardTitle}>Gobernanza de Datos</h2>
              <p className={styles.cardContent}>
                Cumple estrictamente con la seguridad legal y la privacidad. Los datos de procedencia (minera, operador y ubicación exacta) se mantienen en una capa privada en Supabase.
              </p>
            </div>
          </section>

          <section className={styles.cycleSection}>
            <h2 className={styles.cycleTitle}>El Ciclo de Aprendizaje (Método de Kolb)</h2>
            <div className={styles.stepsGrid}>
              <div className={styles.stepCard}>
                <span className={styles.stepNumber}>1</span>
                <h3 className={styles.stepName}>Observar</h3>
                <p className={styles.stepDesc}>Ver fotos del testigo real en alta definición y marcar lo visible.</p>
              </div>
              <div className={styles.stepCard}>
                <span className={styles.stepNumber}>2</span>
                <h3 className={styles.stepName}>Reflexionar</h3>
                <p className={styles.stepDesc}>Identificar patrones repetitivos y variaciones geológicas.</p>
              </div>
              <div className={styles.stepCard}>
                <span className={styles.stepNumber}>3</span>
                <h3 className={styles.stepName}>Conceptualizar</h3>
                <p className={styles.stepDesc}>Conectar lo observado con la teoría y modelos metalogénicos.</p>
              </div>
              <div className={styles.stepCard}>
                <span className={styles.stepNumber}>4</span>
                <h3 className={styles.stepName}>Discriminar</h3>
                <p className={styles.stepDesc}>Comparar con rocas confundibles (look-alikes) curadas a mano.</p>
              </div>
              <div className={styles.stepCard}>
                <span className={styles.stepNumber}>5</span>
                <h3 className={styles.stepName}>Experimentar</h3>
                <p className={styles.stepDesc}>Resolver ejercicios de inferencia y evaluar con rúbricas.</p>
              </div>
            </div>
          </section>

          <footer className={styles.footer}>
            <p>© {new Date().getFullYear()} Graiph. Todos los derechos reservados. Módulo de aprendizaje standalone.</p>
          </footer>
        </main>
      </div>
    );
  }

  // Study Mode View
  return (
    <div className={studyStyles.studyContainer}>
      <header className={studyStyles.header}>
        <div className={studyStyles.titleGroup}>
          <h1 className={studyStyles.mainTitle}>Pórfido Cuprífero</h1>
          <span className={studyStyles.subtitle}>
            {yacimiento.franja_metalogenica} · {yacimiento.region_mvp}
          </span>
        </div>

        {/* Stepper Navigation */}
        <div className={studyStyles.stepper}>
          {[
            { num: 1, label: "Observar" },
            { num: 2, label: "Reflexionar" },
            { num: 3, label: "Conceptualizar" },
            { num: 4, label: "Discriminar" },
            { num: 5, label: "Inferir" },
            { num: 6, label: "Cierre" },
          ].map((s, idx) => (
            <React.Fragment key={s.num}>
              {idx > 0 && <div className={studyStyles.stepSeparator} />}
              <div
                className={`${studyStyles.stepIndicator} ${
                  currentStep === s.num ? studyStyles.stepIndicatorActive : ""
                }`}
              >
                <div
                  className={`${studyStyles.stepDot} ${
                    currentStep === s.num
                      ? studyStyles.stepDotActive
                      : currentStep > s.num
                      ? studyStyles.stepDotCompleted
                      : ""
                  }`}
                />
                <span>
                  {s.num}. {s.label}
                </span>
              </div>
            </React.Fragment>
          ))}
        </div>
      </header>

      {/* STEP 1: OBSERVAR */}
      {currentStep === 1 && (
        <div className={studyStyles.workspace}>
          <div className={studyStyles.leftColumn}>
            {/* Main Interactive Viewer */}
            <div className={studyStyles.viewerCard}>
              <div className={studyStyles.viewerHeader}>
                <span className={studyStyles.viewerTitle}>
                  Muestra {activeImageIndex + 1}: {yacimiento.sets[activeImageIndex].etiqueta_publica}
                </span>
                <span className={studyStyles.placeholderBadge}>
                  ⚠️ Imagen de Referencia (Placeholder)
                </span>
              </div>

              <div className={studyStyles.imageArea} onClick={handleImageClick}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={yacimiento.sets[activeImageIndex].url}
                  alt={yacimiento.sets[activeImageIndex].etiqueta_publica}
                  className={studyStyles.witnessImage}
                />
                <div className={studyStyles.imageOverlay}>
                  {currentImageMarkers.map((marker, index) => {
                    const globalIndex = markers.findIndex((m) => m.id === marker.id) + 1;
                    return (
                      <div
                        key={marker.id}
                        className={`${studyStyles.markerPin} ${
                          activeMarkerId === marker.id ? studyStyles.markerPinActive : ""
                        }`}
                        style={{ left: `${marker.x}%`, top: `${marker.y}%` }}
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveMarkerId(marker.id);
                        }}
                      >
                        {globalIndex}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Thumbnail Strip */}
            <div className={studyStyles.thumbnailStrip}>
              {yacimiento.sets.map((item, idx) => (
                <div
                  key={item.id_imagen}
                  className={`${studyStyles.thumbnailCard} ${
                    activeImageIndex === idx ? studyStyles.thumbnailCardActive : ""
                  }`}
                  onClick={() => {
                    setActiveImageIndex(idx);
                    setActiveMarkerId(null);
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.url}
                    alt={item.etiqueta_publica}
                    className={studyStyles.thumbnailImg}
                  />
                  <span className={studyStyles.thumbnailLabel}>Muestra {idx + 1}</span>
                </div>
              ))}
            </div>

            <div className={studyStyles.instructions}>
              <strong>Instrucciones del Paso 1:</strong> Observa en detalle cada una de las 6 muestras de testigos arriba.
              Haz clic directamente sobre cualquier parte de la roca para colocar un marcador y registrar una observación de textura, color o rasgo (por ejemplo: &quot;vetilla dorada&quot;, &quot;parche rosado&quot; o &quot;matriz verdosa&quot;).
              Intenta describir lo que ves <em>antes de nombrar teóricamente</em> los minerales.
            </div>
          </div>

          {/* Sidebar Observations */}
          <div className={studyStyles.rightColumn}>
            <div className={studyStyles.sidebarHeader}>
              <h2 className={studyStyles.sidebarTitle}>Tus Observaciones</h2>
              <span className={studyStyles.markerCount}>{markers.length} marcadores</span>
            </div>

            <div className={studyStyles.markerList}>
              {markers.length === 0 ? (
                <div className={studyStyles.emptyState}>
                  <span>📍</span>
                  <p>Aún no has agregado marcadores.</p>
                  <p style={{ color: "var(--text-muted)", fontSize: "0.8rem" }}>
                    Haz clic en el testigo de roca de la izquierda para comenzar a registrar tus observaciones.
                  </p>
                </div>
              ) : (
                markers.map((marker, idx) => (
                  <div
                    key={marker.id}
                    className={`${studyStyles.markerItem} ${
                      activeMarkerId === marker.id ? studyStyles.markerItemActive : ""
                    }`}
                    onClick={() => setActiveMarkerId(marker.id)}
                  >
                    <div className={studyStyles.markerItemHeader}>
                      <span className={studyStyles.markerBadge}>
                        📍 Marcador {idx + 1} (Muestra {marker.imageIndex + 1})
                      </span>
                      <button
                        className={studyStyles.deleteBtn}
                        onClick={(e) => deleteMarker(marker.id, e)}
                        title="Borrar observación"
                      >
                        ✕
                      </button>
                    </div>
                    <input
                      type="text"
                      className={studyStyles.markerInput}
                      placeholder="Describe qué color, textura o mineral ves aquí..."
                      value={marker.description}
                      onChange={(e) => updateMarkerDescription(marker.id, e.target.value)}
                      autoFocus={activeMarkerId === marker.id && marker.description === ""}
                    />
                  </div>
                ))
              )}
            </div>

            <div className={studyStyles.actionRow}>
              <button
                className={studyStyles.secondaryBtn}
                onClick={() => setIsInStudyMode(false)}
              >
                Volver
              </button>
              <button
                className={studyStyles.primaryBtn}
                onClick={() => setCurrentStep(2)}
                disabled={markers.length === 0}
                style={{ opacity: markers.length === 0 ? 0.6 : 1 }}
              >
                Continuar al Paso 2 →
              </button>
            </div>
          </div>
        </div>
      )}

      {/* STEP 2: REFLEXIONAR */}
      {currentStep === 2 && (
        <div className={studyStyles.workspace}>
          <div className={studyStyles.leftColumn}>
            <div className={studyStyles.viewerCard} style={{ padding: "2rem", alignItems: "flex-start", gap: "1.5rem" }}>
              <h2 style={{ fontSize: "1.3rem", fontWeight: "700" }}>Paso 2 — Observación Reflexiva</h2>
              <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)" }}>
                A partir de las muestras que has examinado y tus marcadores, reflexiona sobre el conjunto:
              </p>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", width: "100%" }}>
                <label style={{ fontSize: "0.9rem", fontWeight: "600", color: "var(--accent-secondary)" }}>
                  ¿Qué patrones visuales se repiten entre las diferentes muestras? ¿Qué elementos cambian a lo largo del testigo?
                </label>
                <textarea
                  className={studyStyles.markerInput}
                  style={{ minHeight: "150px", resize: "vertical" }}
                  placeholder="Escribe aquí tu reflexión sobre los rasgos y patrones observados..."
                  value={reflections}
                  onChange={(e) => setReflections(e.target.value)}
                />
              </div>
              
              <div className={studyStyles.instructions} style={{ width: "100%" }}>
                <strong>Tip pedagógico:</strong> Fíjate en cómo la densidad de las vetillas varía entre muestras, y si los parches de color rosado (alteración potásica) se asocian a algún mineral dorado específico.
              </div>
            </div>
          </div>

          <div className={studyStyles.rightColumn}>
            <div className={studyStyles.sidebarHeader}>
              <h2 className={studyStyles.sidebarTitle}>Resumen de tus marcas</h2>
            </div>
            <div className={studyStyles.markerList} style={{ maxHeight: "350px" }}>
              {markers.map((m, idx) => (
                <div key={m.id} style={{ fontSize: "0.85rem", padding: "0.5rem 0", borderBottom: "1px solid var(--border-color)" }}>
                  <strong>📍 Muestra {m.imageIndex + 1}:</strong> {m.description || "(sin descripción)"}
                </div>
              ))}
            </div>

            <div className={studyStyles.actionRow}>
              <button className={studyStyles.secondaryBtn} onClick={() => setCurrentStep(1)}>
                ← Atrás
              </button>
              <button
                className={studyStyles.primaryBtn}
                onClick={() => setCurrentStep(3)}
                disabled={reflections.trim().length === 0}
                style={{ opacity: reflections.trim().length === 0 ? 0.6 : 1 }}
              >
                Continuar al Paso 3 →
              </button>
            </div>
          </div>
        </div>
      )}

      {/* STEP 3: CONCEPTUALIZAR */}
      {currentStep === 3 && (
        <div className={studyStyles.workspace}>
          <div className={studyStyles.leftColumn}>
            <div className={studyStyles.viewerCard} style={{ padding: "2rem", alignItems: "flex-start", gap: "1.5rem" }}>
              <h2 style={{ fontSize: "1.4rem", fontWeight: "700" }}>Paso 3 — Conceptualización Abstracta</h2>
              <p style={{ fontSize: "0.95rem" }}>
                Conectemos tus observaciones con el modelo científico (metalogénesis).
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", width: "100%" }}>
                <div>
                  <h3 style={{ fontSize: "1.1rem", color: "var(--accent-secondary)", marginBottom: "0.5rem" }}>Modelo Genético (Metalogénesis)</h3>
                  <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)" }}>{yacimiento.modelo_genetico}</p>
                </div>

                <div>
                  <h3 style={{ fontSize: "1.1rem", color: "var(--accent-secondary)", marginBottom: "0.5rem" }}>Contexto Regional y Estructural</h3>
                  <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)" }}>{yacimiento.contexto_regional}</p>
                </div>

                <div>
                  <h3 style={{ fontSize: "1.1rem", color: "var(--accent-secondary)", marginBottom: "0.5rem" }}>Zonación Mineral y Ensambles</h3>
                  <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", marginBottom: "0.75rem" }}>
                    Los minerales cambian térmicamente según la cercanía al núcleo de calor:
                  </p>
                  <ul style={{ paddingLeft: "1.25rem", fontSize: "0.9rem", color: "var(--text-secondary)", display: "flex", flexDirection: "column", gap: "0.35rem" }}>
                    {yacimiento.minerales_presentes.map((m, idx) => (
                      <li key={idx}>
                        <strong>{m.tipo}:</strong> {m.minerales.join(", ")} {m.descripcion || ""}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className={studyStyles.rightColumn}>
            <div className={studyStyles.sidebarHeader}>
              <h2 className={studyStyles.sidebarTitle}>Referencias del Yacimiento</h2>
            </div>
            
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)" }}>
                Puedes complementar el estudio con estos recursos externos y cartografías del Sernageomin:
              </p>
              {yacimiento.material_referencia.map((ref, idx) => (
                <a
                  key={idx}
                  href={ref.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "block",
                    padding: "0.75rem",
                    background: "var(--bg-tertiary)",
                    border: "1px solid var(--border-color)",
                    borderRadius: "8px",
                    textDecoration: "none",
                    color: "var(--accent-secondary)",
                    fontSize: "0.85rem",
                    fontWeight: "600",
                    textAlign: "center"
                  }}
                >
                  🔗 {ref.titulo}
                </a>
              ))}
            </div>

            <div className={studyStyles.actionRow} style={{ marginTop: "auto" }}>
              <button className={studyStyles.secondaryBtn} onClick={() => setCurrentStep(2)}>
                ← Atrás
              </button>
              <button className={studyStyles.primaryBtn} onClick={() => setCurrentStep(4)}>
                Continuar al Paso 4 →
              </button>
            </div>
          </div>
        </div>
      )}

      {/* STEP 4: DISCRIMINAR (LOOK-ALIKES) */}
      {currentStep === 4 && (
        <div className={studyStyles.workspace} style={{ gridTemplateColumns: "1fr" }}>
          <div className={studyStyles.viewerCard} style={{ padding: "2rem", gap: "2rem" }}>
            <div style={{ textAlign: "center" }}>
              <h2 style={{ fontSize: "1.5rem", fontWeight: "700" }}>Paso 4 — Entrenamiento de Discriminación</h2>
              <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)", marginTop: "0.5rem" }}>
                ¿Cómo distinguimos el Pórfido Cuprífero de rocas que lucen muy similares (Look-alikes)?
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem", width: "100%" }}>
              {yacimiento.confundibles.map((c, idx) => (
                <div
                  key={idx}
                  style={{
                    background: "var(--bg-tertiary)",
                    border: "1px solid var(--border-color)",
                    borderRadius: "12px",
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: "column"
                  }}
                >
                  <div style={{ position: "relative", height: "200px" }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={c.imagen_placeholder}
                      alt={c.nombre}
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                    <span className={studyStyles.placeholderBadge} style={{ position: "absolute", top: "10px", right: "10px" }}>
                      Placeholder
                    </span>
                  </div>
                  <div style={{ padding: "1.5rem", display: "flex", flexDirection: "column", gap: "0.75rem", flex: 1 }}>
                    <h3 style={{ fontSize: "1.2rem", fontWeight: "700", color: "var(--accent-warning)" }}>{c.nombre}</h3>
                    <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: "1.5" }}>
                      <strong>Diferencia clave con el Pórfido:</strong> {c.diferencia_clave}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className={studyStyles.actionRow} style={{ width: "100%", borderTop: "1px solid var(--border-color)", paddingTop: "1.5rem" }}>
              <button className={studyStyles.secondaryBtn} onClick={() => setCurrentStep(3)}>
                ← Atrás
              </button>
              <button className={studyStyles.primaryBtn} onClick={() => setCurrentStep(5)}>
                Continuar al Paso 5 →
              </button>
            </div>
          </div>
        </div>
      )}

      {/* STEP 5: INFERIR / EXPERIMENTACIÓN ACTIVA */}
      {currentStep === 5 && (
        <div className={studyStyles.workspace}>
          <div className={studyStyles.leftColumn}>
            <div className={studyStyles.viewerCard} style={{ padding: "2rem", alignItems: "flex-start", gap: "1.5rem" }}>
              <h2 style={{ fontSize: "1.4rem", fontWeight: "700" }}>Paso 5 — Ejercicio de Inferencia Inductiva</h2>
              <div
                style={{
                  background: "rgba(99, 102, 241, 0.05)",
                  borderLeft: "4px solid var(--accent-primary)",
                  padding: "1.25rem",
                  borderRadius: "0 8px 8px 0",
                  width: "100%",
                  marginBottom: "1rem"
                }}
              >
                <p style={{ fontSize: "1rem", color: "var(--text-primary)", fontWeight: "500", lineHeight: "1.6" }}>
                  {yacimiento.consigna}
                </p>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", width: "100%" }}>
                <label style={{ fontSize: "0.9rem", fontWeight: "600", color: "var(--text-secondary)" }}>
                  Tu justificación y predicción geológica:
                </label>
                <textarea
                  className={studyStyles.markerInput}
                  style={{ minHeight: "180px", resize: "vertical" }}
                  placeholder="Redacta tu respuesta geológica inductiva integrando lo que observaste en los testigos y lo revisado en el modelo genético..."
                  value={inferenceAnswer}
                  onChange={(e) => setInferenceAnswer(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className={studyStyles.rightColumn}>
            <div className={studyStyles.sidebarHeader}>
              <h2 className={studyStyles.sidebarTitle}>Glosario Geológico</h2>
            </div>
            
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", fontSize: "0.85rem" }}>
              {yacimiento.rasgos_diagnosticos.map((r, idx) => (
                <div key={idx} style={{ padding: "0.5rem 0", borderBottom: "1px solid var(--border-color)" }}>
                  <strong style={{ color: "var(--accent-secondary)" }}>{r.nombre}:</strong>
                  <p style={{ color: "var(--text-muted)", marginTop: "0.15rem" }}>{r.descripcion}</p>
                </div>
              ))}
            </div>

            <div className={studyStyles.actionRow}>
              <button className={studyStyles.secondaryBtn} onClick={() => setCurrentStep(4)}>
                ← Atrás
              </button>
              <button
                className={studyStyles.primaryBtn}
                style={{ background: "var(--gradient-primary)", opacity: inferenceAnswer.trim().length === 0 ? 0.6 : 1 }}
                onClick={() => setCurrentStep(6)}
                disabled={inferenceAnswer.trim().length === 0}
              >
                Finalizar y Autoevaluar ✔
              </button>
            </div>
          </div>
        </div>
      )}

      {/* STEP 6: CIERRE / EVALUACIÓN */}
      {currentStep === 6 && (
        <div className={studyStyles.workspace} style={{ gridTemplateColumns: "1fr 1fr" }}>
          {/* Left: Your Answer vs Model Answer */}
          <div className={studyStyles.leftColumn}>
            <div className={studyStyles.viewerCard} style={{ padding: "2rem", alignItems: "flex-start", gap: "1.5rem", height: "100%" }}>
              <h2 style={{ fontSize: "1.4rem", fontWeight: "700" }}>Tus Respuestas vs Clave de Referencia</h2>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", width: "100%" }}>
                <div>
                  <h3 style={{ fontSize: "1rem", color: "var(--accent-primary)", marginBottom: "0.35rem" }}>Tu Respuesta de Inferencia</h3>
                  <div style={{ background: "rgba(255, 255, 255, 0.03)", padding: "1rem", borderRadius: "8px", border: "1px solid var(--border-color)", maxHeight: "200px", overflowY: "auto" }}>
                    <p style={{ fontSize: "0.9rem", whiteSpace: "pre-line" }}>{inferenceAnswer}</p>
                  </div>
                </div>

                <div>
                  <h3 style={{ fontSize: "1rem", color: "var(--accent-success)", marginBottom: "0.35rem" }}>Clave Geológica de Referencia</h3>
                  <div style={{ background: "rgba(16, 185, 129, 0.05)", padding: "1rem", borderRadius: "8px", border: "1px solid rgba(16, 185, 129, 0.2)", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                    <p style={{ fontSize: "0.9rem" }}>
                      <strong>Alteraciones diagnósticas:</strong> {yacimiento.clave_respuesta.alteracion_primaria} / {yacimiento.clave_respuesta.alteracion_sobreimpuesta}
                    </p>
                    <p style={{ fontSize: "0.9rem" }}>
                      <strong>Proceso hidrotermal:</strong> {yacimiento.clave_respuesta.proceso}
                    </p>
                    <p style={{ fontSize: "0.9rem" }}>
                      <strong>Zonación periférica:</strong> {yacimiento.clave_respuesta.periferia}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Rubric Checkboxes / Score */}
          <div className={studyStyles.rightColumn} style={{ height: "100%" }}>
            <div className={studyStyles.sidebarHeader}>
              <h2 className={studyStyles.sidebarTitle}>Autoevaluación (Rúbrica)</h2>
            </div>

            <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)" }}>
              Asigna un puntaje honesto a tu desempeño de acuerdo con los criterios del validador de metalogénesis:
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              {yacimiento.rubrica.criterios.map((crit, idx) => (
                <div key={idx} style={{ background: "var(--bg-tertiary)", padding: "1rem", borderRadius: "8px", border: "1px solid var(--border-color)" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.5rem" }}>
                    <strong style={{ fontSize: "0.9rem" }}>{crit.item}</strong>
                    <span style={{ fontSize: "0.8rem", color: "var(--accent-warning)" }}>Max: {crit.puntaje_max} pts</span>
                  </div>
                  <p style={{ fontSize: "0.8rem", color: "var(--text-muted)", marginBottom: "0.75rem" }}>{crit.descripcion}</p>
                  
                  <div style={{ display: "flex", gap: "0.5rem" }}>
                    {Array.from({ length: crit.puntaje_max + 1 }).map((_, val) => (
                      <button
                        key={val}
                        style={{
                          flex: 1,
                          padding: "0.25rem",
                          borderRadius: "4px",
                          border: "1px solid var(--border-color)",
                          background: selfScore[idx] === val ? "var(--accent-primary)" : "var(--bg-secondary)",
                          color: selfScore[idx] === val ? "#fff" : "var(--text-primary)",
                          fontSize: "0.8rem",
                          cursor: "pointer",
                          transition: "all var(--transition-fast)"
                        }}
                        onClick={() => setSelfScore({ ...selfScore, [idx]: val })}
                      >
                        {val}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: "auto", display: "flex", flexDirection: "column", gap: "1rem" }}>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "1.1rem", fontWeight: "700" }}>
                <span>Puntaje Total:</span>
                <span className="gradient-text">
                  {Object.values(selfScore).reduce((a, b) => a + b, 0)} / 10 puntos
                </span>
              </div>

              <div className={studyStyles.actionRow}>
                <button
                  className={studyStyles.secondaryBtn}
                  onClick={() => setCurrentStep(5)}
                >
                  ← Atrás
                </button>
                <button
                  className={studyStyles.primaryBtn}
                  onClick={() => {
                    // Reset study state and go back to home
                    setIsInStudyMode(false);
                    setCurrentStep(1);
                    setMarkers([]);
                    setReflections("");
                    setInferenceAnswer("");
                    setSelfScore({});
                  }}
                >
                  Finalizar Estudio ✔
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
