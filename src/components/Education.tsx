import RevealSection from "./RevealSection";

export default function Education() {
  return (
    <section id="education" className="section">
      <div className="container">
        <h2 className="section-title">Education</h2>
        <p className="section-subtitle">
          Academic foundation powering my AI engineering journey
        </p>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
        <RevealSection>
          <div className="glass-card edu-card">
            <div className="edu-icon">🎓</div>
            <div>
              <div className="edu-degree">Bachelor of Technology (B.Tech)</div>
              <div style={{ fontSize: "1.05rem", color: "var(--text-secondary)", marginBottom: 8 }}>
                Computer Science &amp; Information Technology
              </div>
              <div className="edu-school">Chameli Devi Group of Institutions, Indore</div>
              <div className="edu-details">
                <span className="edu-detail">📅 Graduated 2025</span>
                <span className="edu-detail">⭐ CGPA: 8.13 / 10</span>
                <span className="edu-detail">📍 Indore, India</span>
              </div>
            </div>
          </div>
        </RevealSection>
        </div>
      </div>
    </section>
  );
}
