import RevealSection from "./RevealSection";

const experiences = [
  {
    role: "AI Engineer",
    company: "Tecpinion · Indore, India (On-site)",
    period: "Jul 2025 – Present",
    dotClass: "",
    projects: [
      {
        name: "🏥 MedScan Global — AI Healthcare Search Platform",
        badge: "🟢 Live in Production",
        bullets: [
          "Building an AI-powered healthcare search platform using FastAPI & Groq LLM for natural language discovery of hospitals, doctors & treatments.",
          "Developing scalable ETL and web scraping pipelines processing healthcare data into PostgreSQL.",
          "Implementing semantic search, intelligent comparison & recommendation features with Redis caching.",
          "Designing relational healthcare databases linking hospitals, doctors, specialties & treatments.",
        ],
      },
      {
        name: "🧬 Oncology Precision Platform — AI Clinical Decision Support",
        badge: "🟢 Live in Production",
        bullets: [
          "Architected a multi-model AI system for AJCC 8th Edition cancer staging across 4 cancer types using deterministic and LLM-based fallback layers.",
          "Engineered Grad-CAM heatmap visualization on medical imaging outputs enabling interpretable tumor localization with confidence scoring.",
          "Designed an LLM cost optimization model routing queries between lightweight and heavyweight models by task complexity.",
          "Launched a 5-stage compliant EHR document workflow with audit-ready status tracking, OCR extraction, and LLM analysis.",
          "Deployed an LLM-based clinical extraction service parsing 6 structured data types: vitals, diagnoses, lab results, allergies, medications & notes.",
        ],
      },
      {
        name: "📊 AI Business Intelligence Agent (MCP) — iGaming PoC",
        badge: "🟡 Delivered PoC",
        bullets: [
          "Created an MCP-based AI BI agent enabling natural language database querying for an iGaming admin platform.",
          "Implemented secure LLM-powered SQL generation with schema-aware prompting and built-in SQL validation.",
          "Integrated Groq & Gemini LLM providers with automatic failover and unified tool-calling workflows.",
          "Built feedback-enhanced RAG and a reusable React chatbot SDK for natural-language reporting in admin dashboards.",
        ],
      },
      {
        name: "⚙️ ML Training Admin Platform — Governance & Access Control",
        badge: "🟢 Live in Production",
        bullets: [
          "Launched a role-based Django admin platform enabling secure client onboarding with auto-generated API keys and configurable ML feature permissions.",
          "Automated model training pipelines triggered by permission assignment with results stored per client ID.",
          "Integrated callback management for real-time event notifications: orders, revenue alerts & fraud flags.",
        ],
      },
    ],
  },
  {
    role: "AI Engineer Intern",
    company: "Tecpinion · Indore, India (On-site)",
    period: "Apr 2025 – Jul 2025",
    dotClass: "purple",
    bullets: [
      "Built and validated 3 ML models — LTV prediction, fraud detection, and deposit forecasting — analyzing operational data patterns for risk-based decision-making.",
      "Constructed and maintained feature engineering pipelines ensuring data quality and consistency across model training and evaluation workflows.",
      "Deployed model outputs into client-facing analytics dashboards, improving reporting accuracy across 2+ enterprise accounts.",
    ],
  },
  {
    role: "Data Analytics Intern",
    company: "IBM CSRBox · Remote",
    period: "Dec 2024 – Jan 2025",
    dotClass: "purple",
    bullets: [
      "Extracted and transformed 5+ datasets using Python and SQL, delivering structured business insight reports with actionable findings.",
      "Delivered 3 interactive Power BI dashboards consolidating operational metrics, reducing manual reporting effort for the analytics team.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <h2 className="section-title">where i&apos;ve shipped 🚢</h2>
        <p className="section-subtitle">real systems, real users, real impact</p>
        <RevealSection className="timeline">
          {experiences.map((exp) => (
            <div key={exp.role + exp.period} className="timeline-item">
              <div className={`timeline-dot ${exp.dotClass}`} />
              <div className="glass-card exp-card">
                <div className="exp-header">
                  <div>
                    <div className="exp-role">{exp.role}</div>
                    <div className="exp-company">{exp.company}</div>
                  </div>
                  <span className="exp-period">{exp.period}</span>
                </div>
                {exp.projects && (
                  <div className="exp-projects">
                    {exp.projects.map((proj) => (
                      <div key={proj.name} className="exp-project">
                        <div className="exp-project-name">
                          {proj.name}
                          {proj.badge && <span className="exp-badge">{proj.badge}</span>}
                        </div>
                        <ul className="exp-bullets">
                          {proj.bullets.map((b, i) => (
                            <li key={i}>{b}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
                {exp.bullets && (
                  <ul className="exp-bullets" style={{ marginTop: 12 }}>
                    {exp.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </RevealSection>
      </div>
    </section>
  );
}
