import RevealSection from "./RevealSection";

const services = [
  {
    icon: "🧪",
    title: "UX & User Testing",
    desc: "Structured usability testing with actionable written reports. Catch friction points, accessibility issues, and confusing flows before your users do.",
    bullets: [
      "5-user test sessions with written summary",
      "Friction & accessibility audit",
      "Actionable fix recommendations",
      "Delivered in 3 business days",
    ],
    cta: "Book a Test",
    highlight: true,
  },
  {
    icon: "🌐",
    title: "Website Development",
    desc: "Clean, fast, production-ready websites. I design and build — from landing pages to full multi-page sites — and handle deployment end to end.",
    bullets: [
      "Responsive design, mobile-first",
      "Next.js / React or plain HTML",
      "SEO basics included",
      "Live deployment included",
    ],
    cta: "Get a Quote",
    highlight: false,
  },
  {
    icon: "🤖",
    title: "AI Integration",
    desc: "Add LLM-powered features to your product — chatbots, search, document Q&A, or custom AI workflows. I've shipped these in production at Tecpinion.",
    bullets: [
      "LangChain / LangGraph agents",
      "OpenAI, Groq, Gemini APIs",
      "FastAPI backend included",
      "Full handoff with docs",
    ],
    cta: "Let's Talk",
    highlight: false,
  },
];

export default function FreelanceServices() {
  return (
    <section id="freelance" className="section">
      <div className="container">
        <RevealSection>
          <div className="freelance-badge">💼 Available for Freelance</div>
          <h2 className="section-title">hire me for your project</h2>
          <p className="section-subtitle">
            fast turnaround · honest feedback · real deliverables
          </p>
        </RevealSection>
        <RevealSection className="freelance-grid">
          {services.map((s) => (
            <div
              key={s.title}
              className={`glass-card freelance-card${s.highlight ? " freelance-card--highlight" : ""}`}
            >
              {s.highlight && (
                <div className="freelance-popular">⭐ Most Popular</div>
              )}
              <div className="freelance-icon">{s.icon}</div>
              <div className="freelance-title">{s.title}</div>
              <p className="freelance-desc">{s.desc}</p>
              <ul className="freelance-bullets">
                {s.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`btn${s.highlight ? " btn-primary" : " btn-outline"} freelance-cta`}
              >
                {s.cta} →
              </a>
            </div>
          ))}
        </RevealSection>
        <RevealSection>
          <div className="freelance-note">
            🚀 Past clients include <strong>Memberstack</strong> and <strong>dermedge.in</strong> — references available on request.
          </div>
        </RevealSection>
      </div>
    </section>
  );
}
