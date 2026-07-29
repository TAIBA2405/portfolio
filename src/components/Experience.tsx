import RevealSection from "./RevealSection";

const projects = [
  {
    icon: "🏥",
    name: "AI Healthcare Search Platform",
    badge: "🟢 Live",
    company: "Tecpinion",
    desc: "Natural language hospital & doctor discovery powered by FastAPI, Groq LLM, semantic search, and Redis caching. Full ETL pipeline into PostgreSQL.",
    tech: ["FastAPI", "Groq", "PostgreSQL", "Redis", "Semantic Search"],
  },
  {
    icon: "🧬",
    name: "Clinical AI Decision Support",
    badge: "🟢 Live",
    company: "Tecpinion",
    desc: "Multi-model cancer staging system (AJCC 8th Ed) with Grad-CAM heatmap visualization, LLM-powered medical record extraction, and EHR document workflows.",
    tech: ["LangChain", "TensorFlow", "FastAPI", "OCR", "Grad-CAM"],
  },
  {
    icon: "📊",
    name: "AI Business Intelligence Agent",
    badge: "🟡 PoC",
    company: "Tecpinion",
    desc: "MCP-based natural language → SQL agent for iGaming analytics. Groq/Gemini failover, schema-aware prompting, RAG, and a reusable React chatbot SDK.",
    tech: ["MCP", "LangChain", "Groq", "Gemini", "React", "RAG"],
  },
  {
    icon: "⚙️",
    name: "ML Training Admin Platform",
    badge: "🟢 Live",
    company: "Tecpinion",
    desc: "Role-based Django platform for client onboarding, auto-generated API keys, ML feature permissions, and automated model training pipelines.",
    tech: ["Django", "PostgreSQL", "ML Pipelines", "REST APIs"],
  },
  {
    icon: "🤖",
    name: "ML Models — LTV, Fraud & Forecasting",
    badge: "✅ Shipped",
    company: "Tecpinion",
    desc: "Built and validated 3 production ML models for lifetime value prediction, fraud detection, and deposit forecasting with feature engineering pipelines.",
    tech: ["Python", "Scikit-learn", "Feature Engineering", "Analytics"],
  },
  {
    icon: "📈",
    name: "Business Intelligence Dashboards",
    badge: "✅ Shipped",
    company: "IBM CSRBox",
    desc: "Delivered 3 interactive Power BI dashboards from 5+ datasets using Python & SQL, reducing manual reporting effort for the analytics team.",
    tech: ["Power BI", "Python", "SQL", "Data Analysis"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <h2 className="section-title">what i&apos;ve built 🚀</h2>
        <p className="section-subtitle">
          real systems, real users, real impact
        </p>
        <RevealSection className="projects-grid">
          {projects.map((p) => (
            <div key={p.name} className="glass-card project-card">
              <div className="project-header">
                <div className="project-icon">{p.icon}</div>
                <span className="exp-badge">{p.badge}</span>
              </div>
              <div className="project-title">{p.name}</div>
              <div className="project-company">@ {p.company}</div>
              <p className="project-desc">{p.desc}</p>
              <div className="project-tags">
                {p.tech.map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </RevealSection>
      </div>
    </section>
  );
}
