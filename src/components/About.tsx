import RevealSection from "./RevealSection";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <RevealSection className="about-grid">
          <div className="about-avatar-wrap">
            <div style={{ position: "relative", display: "inline-block" }}>
              <div className="avatar-ring-2" />
              <div className="about-avatar">
                <div className="avatar-ring" />
                <img src="/taiba.jpeg" alt="Taiba Khan Faridi" className="avatar-photo" />
              </div>
            </div>
            <div className="about-badges" style={{ marginTop: 16 }}>
              <span className="tag">🇮🇳 Indore, India</span>
              <span className="tag purple">AI Engineer</span>
              <span className="tag">Open to Work</span>
            </div>
          </div>
          <div className="about-text">
            <h2>
              i build intelligent<br />
              <span className="neon-text">AI-powered things</span>
            </h2>
            <p>
              AI engineer who&apos;s been in the trenches — building production-grade 
              systems from multi-tenant ML platforms to clinical AI and LLM-powered 
              agentic workflows. not just prompting, actually engineering.
            </p>
            <p>
              my stack: FastAPI, Django, LangChain, LangGraph, PostgreSQL, Docker, 
              TensorFlow — basically the full AI engineering toolkit from data pipelines 
              to deployed models.
            </p>
            <p>
              i care about making AI that&apos;s reliable, interpretable, and actually 
              creates value — not just vibes.
            </p>
            <div className="about-links">
              <a href="https://linkedin.com/in/taiba-khan-faridi-576860172" target="_blank" rel="noopener noreferrer" className="social-btn">
                <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
                LinkedIn
              </a>
              <a href="https://github.com/TAIBA2405" target="_blank" rel="noopener noreferrer" className="social-btn">
                <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"/></svg>
                GitHub
              </a>
              <a href="mailto:taibakfaridi@gmail.com" className="social-btn">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,12 2,6"/></svg>
                Email
              </a>
            </div>
          </div>
        </RevealSection>
      </div>
    </section>
  );
}
