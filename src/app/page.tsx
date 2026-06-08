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
  const [currentStep, setCurrentStep] = useState<number>(1); // 1 to 5
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);
  const [activeImageIndexStep3, setActiveImageIndexStep3] = useState<number>(0);
  const [markers, setMarkers] = useState<Marker[]>([]);
  const [activeMarkerId, setActiveMarkerId] = useState<string | null>(null);
  const [showRubric, setShowRubric] = useState<boolean>(false);
  
  // States for final steps
  const [inferenceAnswer, setInferenceAnswer] = useState<string>( "");
  const [selfScore, setSelfScore] = useState<Record<number, number>>({});

  const yacimiento: Yacimiento = mockYacimiento;

  // Handle image click to place marker (Step 5)
  const handleImageClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (currentStep !== 5) return;

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
              onClick={() => {
                setIsInStudyMode(true);
                setCurrentStep(1);
                setMarkers([]);
                setInferenceAnswer("");
                setSelfScore({});
                setShowRubric(false);
              }}
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
                <h3 className={styles.stepName}>Contexto Macro</h3>
                <p className={styles.stepDesc}>Ubicación regional de la franja metalogénica y marco general.</p>
              </div>
              <div className={styles.stepCard}>
                <span className={styles.stepNumber}>2</span>
                <h3 className={styles.stepName}>Conceptualización</h3>
                <p className={styles.stepDesc}>Conectar con la teoría geológica y modelos de formación.</p>
              </div>
              <div className={styles.stepCard}>
                <span className={styles.stepNumber}>3</span>
                <h3 className={styles.stepName}>Observación Guiada</h3>
                <p className={styles.stepDesc}>Ver las muestras reales de sondaje y leer sus rasgos diagnósticos.</p>
              </div>
              <div className={styles.stepCard}>
                <span className={styles.stepNumber}>4</span>
                <h3 className={styles.stepName}>Discriminación</h3>
                <p className={styles.stepDesc}>Comparar visualmente con rocas confundibles (look-alikes).</p>
              </div>
              <div className={styles.stepCard}>
                <span className={styles.stepNumber}>5</span>
                <h3 className={styles.stepName}>Descripción e Inferencia</h3>
                <p className={styles.stepDesc}>Marcar rasgos del testigo, responder el ejercicio y evaluar.</p>
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
            { num: 1, label: "Contexto Macro" },
            { num: 2, label: "Conceptualización" },
            { num: 3, label: "Observación Guiada" },
            { num: 4, label: "Discriminación" },
            { num: 5, label: "Descripción e Inferencia" },
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

      {/* PASO 1: CONTEXTO MACRO */}
      {currentStep === 1 && (
        <div className={studyStyles.workspace} style={{ gridTemplateColumns: "1fr" }}>
          <div className={studyStyles.viewerCard} style={{ padding: "3rem 2rem", gap: "2rem", maxWidth: "800px", margin: "2rem auto", width: "100%" }}>
            <div style={{ textAlign: "center", width: "100%" }}>
              <span className={studyStyles.placeholderBadge} style={{ marginBottom: "0.75rem" }}>Paso 1: Macro Contexto</span>
              <h2 style={{ fontSize: "1.8rem", fontWeight: "800", marginBottom: "0.5rem" }}>Ubicación Geológica Regional</h2>
              <p style={{ color: "var(--text-muted)", fontSize: "0.95rem" }}>
                Comenzamos el estudio localizando el yacimiento a nivel tectónico y de franja metalogénica.
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem", width: "100%", marginTop: "1rem" }}>
              <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid var(--border-color)", borderRadius: "12px", padding: "1.5rem" }}>
                <h3 style={{ color: "var(--accent-secondary)", fontSize: "1.1rem", marginBottom: "0.75rem" }}>Franja Metalogénica</h3>
                <p style={{ fontSize: "0.95rem", lineHeight: "1.6" }}>{yacimiento.franja_metalogenica}</p>
                <div style={{ marginTop: "1rem", display: "inline-flex", padding: "0.25rem 0.75rem", background: "rgba(6, 182, 212, 0.1)", border: "1px solid rgba(6, 182, 212, 0.2)", borderRadius: "4px", fontSize: "0.75rem", fontWeight: "600", color: "var(--accent-secondary)" }}>
                  📍 {yacimiento.region_mvp}
                </div>
              </div>

              <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid var(--border-color)", borderRadius: "12px", padding: "1.5rem" }}>
                <h3 style={{ color: "var(--accent-secondary)", fontSize: "1.1rem", marginBottom: "0.75rem" }}>Hospedamiento Regional</h3>
                <p style={{ fontSize: "0.95rem", lineHeight: "1.6", color: "var(--text-secondary)" }}>
                  Las rocas se hospedan en una secuencia volcánica-sedimentaria del Paleozoico superior–Triásico inferior con metamorfismo previo. Su estructura está controlada por fallas del sistema Domeyko.
                </p>
              </div>
            </div>

            <div className={studyStyles.actionRow} style={{ width: "100%", borderTop: "1px solid var(--border-color)", paddingTop: "1.5rem", marginTop: "1rem" }}>
              <button
                className={studyStyles.secondaryBtn}
                onClick={() => setIsInStudyMode(false)}
              >
                Volver al Home
              </button>
              <button
                className={studyStyles.primaryBtn}
                onClick={() => setCurrentStep(2)}
              >
                Continuar a Conceptualización →
              </button>
            </div>
          </div>
        </div>
      )}

      {/* PASO 2: CONCEPTUALIZACIÓN */}
      {currentStep === 2 && (
        <div className={studyStyles.workspace}>
          <div className={studyStyles.leftColumn}>
            <div className={studyStyles.viewerCard} style={{ padding: "2rem", alignItems: "flex-start", gap: "1.5rem" }}>
              <h2 style={{ fontSize: "1.4rem", fontWeight: "700" }}>Paso 2 — Conceptualización Abstracta</h2>
              <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)" }}>
                Revisemos la teoría metalogenética y el modelo químico de formación antes de analizar la roca.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", width: "100%" }}>
                <div>
                  <h3 style={{ fontSize: "1.1rem", color: "var(--accent-secondary)", marginBottom: "0.5rem" }}>Modelo Genético (Metalogénesis)</h3>
                  <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: "1.6" }}>{yacimiento.modelo_genetico}</p>
                </div>

                <div>
                  <h3 style={{ fontSize: "1.1rem", color: "var(--accent-secondary)", marginBottom: "0.5rem" }}>Zonación Mineral y Ensambles</h3>
                  <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", marginBottom: "0.75rem", lineHeight: "1.6" }}>
                    Los minerales hidrotermales se asocian en halos concéntricos alrededor del núcleo porfírico:
                  </p>
                  <ul style={{ paddingLeft: "1.25rem", fontSize: "0.9rem", color: "var(--text-secondary)", display: "flex", flexDirection: "column", gap: "0.4rem" }}>
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
              <h2 className={studyStyles.sidebarTitle}>Glosario de Alteraciones</h2>
            </div>
            
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", fontSize: "0.85rem" }}>
              {yacimiento.rasgos_diagnosticos.map((r, idx) => (
                <div key={idx} style={{ padding: "0.5rem 0", borderBottom: "1px solid var(--border-color)" }}>
                  <strong style={{ color: "var(--accent-warning)" }}>{r.nombre}:</strong>
                  <p style={{ color: "var(--text-muted)", marginTop: "0.15rem", lineHeight: "1.4" }}>{r.descripcion}</p>
                </div>
              ))}
            </div>

            <div className={studyStyles.actionRow} style={{ marginTop: "auto" }}>
              <button className={studyStyles.secondaryBtn} onClick={() => setCurrentStep(1)}>
                ← Atrás
              </button>
              <button className={studyStyles.primaryBtn} onClick={() => setCurrentStep(3)}>
                Continuar al Paso 3 →
              </button>
            </div>
          </div>
        </div>
      )}

      {/* PASO 3: OBSERVACIÓN GUIADA */}
      {currentStep === 3 && (
        <div className={studyStyles.workspace}>
          <div className={studyStyles.leftColumn}>
            {/* Viewer for Guided observation */}
            <div className={studyStyles.viewerCard}>
              <div className={studyStyles.viewerHeader}>
                <span className={studyStyles.viewerTitle}>
                  Muestra {activeImageIndexStep3 + 1}: {yacimiento.sets[activeImageIndexStep3].etiqueta_publica}
                </span>
                <span className={studyStyles.placeholderBadge}>
                  ⚠️ Imagen de Referencia (Placeholder)
                </span>
              </div>

              <div className={studyStyles.imageArea} style={{ cursor: "default" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={yacimiento.sets[activeImageIndexStep3].url}
                  alt={yacimiento.sets[activeImageIndexStep3].etiqueta_publica}
                  className={studyStyles.witnessImage}
                />
              </div>
            </div>

            {/* Thumbnail Strip */}
            <div className={studyStyles.thumbnailStrip}>
              {yacimiento.sets.map((item, idx) => (
                <div
                  key={item.id_imagen}
                  className={`${studyStyles.thumbnailCard} ${
                    activeImageIndexStep3 === idx ? studyStyles.thumbnailCardActive : ""
                  }`}
                  onClick={() => setActiveImageIndexStep3(idx)}
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
              <strong>Instrucciones del Paso 3:</strong> Revisa el set de testigos utilizando el panel lateral para leer la **descripción geológica oficial** de cada muestra. Esto te ayudará a familiarizarte con las texturas del stockwork, las alteraciones potásicas y la zonación antes de realizar tu propio marcado interactivo en el paso final.
            </div>
          </div>

          <div className={studyStyles.rightColumn}>
            <div className={studyStyles.sidebarHeader}>
              <h2 className={studyStyles.sidebarTitle}>Descripción Oficial</h2>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid var(--border-color)", padding: "1.25rem", borderRadius: "8px" }}>
                <span style={{ fontSize: "0.75rem", color: "var(--accent-secondary)", fontWeight: "700", textTransform: "uppercase" }}>
                  Muestra {activeImageIndexStep3 + 1}
                </span>
                <h3 style={{ fontSize: "1.1rem", fontWeight: "700", margin: "0.25rem 0 0.75rem 0" }}>
                  {yacimiento.sets[activeImageIndexStep3].etiqueta_publica}
                </h3>
                <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: "1.6" }}>
                  {yacimiento.sets[activeImageIndexStep3].descripcion}
                </p>
              </div>
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

      {/* PASO 4: DISCRIMINACIÓN (LOOK-ALIKES) */}
      {currentStep === 4 && (
        <div className={studyStyles.workspace} style={{ gridTemplateColumns: "1fr" }}>
          <div className={studyStyles.viewerCard} style={{ padding: "2rem", gap: "2rem" }}>
            <div style={{ textAlign: "center" }}>
              <span className={studyStyles.placeholderBadge} style={{ marginBottom: "0.5rem" }}>Paso 4: Discriminación</span>
              <h2 style={{ fontSize: "1.5rem", fontWeight: "700" }}>Entrenamiento de Discriminación</h2>
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

      {/* PASO 5: DESCRIPCIÓN E INFERENCIA (EJERCICIO INTERACTIVO FINAL) */}
      {currentStep === 5 && !showRubric && (
        <div className={studyStyles.workspace}>
          <div className={studyStyles.leftColumn}>
            {/* Interactive Image Viewer */}
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
                  {currentImageMarkers.map((marker) => {
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

            {/* Inference Question area below image */}
            <div className={studyStyles.viewerCard} style={{ padding: "1.5rem", alignItems: "flex-start", gap: "1rem", width: "100%" }}>
              <h3 style={{ fontSize: "1.1rem", fontWeight: "700", color: "var(--accent-secondary)" }}>
                Consigna del Ejercicio de Inferencia
              </h3>
              <div style={{ background: "rgba(99,102,241,0.03)", padding: "1rem", borderRadius: "8px", borderLeft: "4px solid var(--accent-primary)", width: "100%" }}>
                <p style={{ fontSize: "0.95rem", lineHeight: "1.6" }}>{yacimiento.consigna}</p>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", width: "100%" }}>
                <label style={{ fontSize: "0.9rem", fontWeight: "600", color: "var(--text-secondary)" }}>
                  Tu justificación y predicción geológica:
                </label>
                <textarea
                  className={studyStyles.markerInput}
                  style={{ minHeight: "150px", resize: "vertical" }}
                  placeholder="Redacta tu respuesta detallada integrando tus observaciones en los testigos..."
                  value={inferenceAnswer}
                  onChange={(e) => setInferenceAnswer(e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* Sidebar for Markers */}
          <div className={studyStyles.rightColumn}>
            <div className={studyStyles.sidebarHeader}>
              <h2 className={studyStyles.sidebarTitle}>Observación del Testigo</h2>
              <span className={studyStyles.markerCount}>{markers.length} marcas</span>
            </div>

            <div className={studyStyles.instructions} style={{ fontSize: "0.8rem", padding: "0.75rem" }}>
              <strong>Instrucciones:</strong> Haz clic sobre la roca (izquierda) para colocar pines e identificar rasgos clave (colores, vetillas, alteraciones). Describe cada pin.
            </div>

            <div className={studyStyles.markerList}>
              {markers.length === 0 ? (
                <div className={studyStyles.emptyState} style={{ padding: "1rem" }}>
                  <span>📍</span>
                  <p>Sin marcadores aún.</p>
                  <p style={{ color: "var(--text-muted)", fontSize: "0.75rem" }}>
                    Haz clic en el testigo de roca de la izquierda para agregar marcadores de texturas o minerales observados.
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
                        📍 Pin {idx + 1} (Muestra {marker.imageIndex + 1})
                      </span>
                      <button
                        className={studyStyles.deleteBtn}
                        onClick={(e) => deleteMarker(marker.id, e)}
                      >
                        ✕
                      </button>
                    </div>
                    <input
                      type="text"
                      className={studyStyles.markerInput}
                      placeholder="¿Qué ves en este punto?"
                      value={marker.description}
                      onChange={(e) => updateMarkerDescription(marker.id, e.target.value)}
                      autoFocus={activeMarkerId === marker.id && marker.description === ""}
                    />
                  </div>
                ))
              )}
            </div>

            <div className={studyStyles.actionRow} style={{ marginTop: "auto" }}>
              <button className={studyStyles.secondaryBtn} onClick={() => setCurrentStep(4)}>
                ← Atrás
              </button>
              <button
                className={studyStyles.primaryBtn}
                onClick={() => setShowRubric(true)}
                disabled={markers.length === 0 || inferenceAnswer.trim().length === 0}
                style={{
                  background: "var(--gradient-primary)",
                  opacity: markers.length === 0 || inferenceAnswer.trim().length === 0 ? 0.6 : 1
                }}
              >
                Finalizar y Autoevaluar ✔
              </button>
            </div>
          </div>
        </div>
      )}

      {/* PASO 5: CIERRE / RÚBRICA Y AUTOEVALUACIÓN (SUB-FASE DE PASO 5) */}
      {currentStep === 5 && showRubric && (
        <div className={studyStyles.workspace} style={{ gridTemplateColumns: "1fr 1fr" }}>
          {/* Left: Your Answer vs Model Answer */}
          <div className={studyStyles.leftColumn}>
            <div className={studyStyles.viewerCard} style={{ padding: "2rem", alignItems: "flex-start", gap: "1.5rem", height: "100%" }}>
              <h2 style={{ fontSize: "1.4rem", fontWeight: "700" }}>Tus Respuestas vs Clave de Referencia</h2>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", width: "100%" }}>
                <div>
                  <h3 style={{ fontSize: "1rem", color: "var(--accent-primary)", marginBottom: "0.35rem" }}>Tu Respuesta de Inferencia</h3>
                  <div style={{ background: "rgba(255, 255, 255, 0.03)", padding: "1rem", borderRadius: "8px", border: "1px solid var(--border-color)", maxHeight: "150px", overflowY: "auto" }}>
                    <p style={{ fontSize: "0.9rem", whiteSpace: "pre-line" }}>{inferenceAnswer}</p>
                  </div>
                </div>

                <div>
                  <h3 style={{ fontSize: "1rem", color: "var(--accent-primary)", marginBottom: "0.35rem" }}>Tus Marcadores de Testigo</h3>
                  <div style={{ background: "rgba(255, 255, 255, 0.03)", padding: "1rem", borderRadius: "8px", border: "1px solid var(--border-color)", maxHeight: "120px", overflowY: "auto" }}>
                    {markers.length === 0 ? (
                      <p style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>No colocaste marcadores.</p>
                    ) : (
                      markers.map((m, idx) => (
                        <div key={m.id} style={{ fontSize: "0.85rem", padding: "0.25rem 0", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                          <strong>📍 Muestra {m.imageIndex + 1}:</strong> {m.description || "(sin descripción)"}
                        </div>
                      ))
                    )}
                  </div>
                </div>

                <div>
                  <h3 style={{ fontSize: "1rem", color: "var(--accent-success)", marginBottom: "0.35rem" }}>Clave Geológica de Referencia</h3>
                  <div style={{ background: "rgba(16, 185, 129, 0.05)", padding: "1rem", borderRadius: "8px", border: "1px solid rgba(16, 185, 129, 0.2)", display: "flex", flexDirection: "column", gap: "0.65rem" }}>
                    <p style={{ fontSize: "0.85rem" }}>
                      <strong>Alteraciones diagnósticas:</strong> {yacimiento.clave_respuesta.alteracion_primaria} / {yacimiento.clave_respuesta.alteracion_sobreimpuesta}
                    </p>
                    <p style={{ fontSize: "0.85rem" }}>
                      <strong>Proceso hidrotermal:</strong> {yacimiento.clave_respuesta.proceso}
                    </p>
                    <p style={{ fontSize: "0.85rem" }}>
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
                  onClick={() => setShowRubric(false)}
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
                    setInferenceAnswer("");
                    setSelfScore({});
                    setShowRubric(false);
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
