import React from "react";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <header className={styles.header}>
          <span className={styles.badge}>Graiph Metalogénesis</span>
          <h1 className={`${styles.title} gradient-text`}>EduTagger</h1>
          <p className={styles.description}>
            Biblioteca curada de testigos de sondaje reales para enseñar y aprender metalogénesis a través de la observación y el método inductivo.
          </p>
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
