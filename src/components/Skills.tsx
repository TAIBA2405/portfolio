"use client";

import { useEffect, useRef } from "react";
import RevealSection from "./RevealSection";

const skillCategories = [
  {
    icon: "🤖",
    title: "Agentic AI & LLMs",
    skills: [
      { name: "LangChain / LangGraph", pct: 90 },
      { name: "Multi-Agent Systems", pct: 85 },
      { name: "Prompt Engineering", pct: 92 },
      { name: "MCP / Tool-Calling", pct: 80 },
    ],
  },
  {
    icon: "🧠",
    title: "ML & Deep Learning",
    skills: [
      { name: "TensorFlow / Keras", pct: 82 },
      { name: "CNN & Computer Vision", pct: 78 },
      { name: "Feature Engineering", pct: 85 },
      { name: "LTV / Fraud Modeling", pct: 80 },
    ],
  },
  {
    icon: "⚙️",
    title: "Backend & APIs",
    skills: [
      { name: "Python", pct: 95 },
      { name: "FastAPI / Django", pct: 88 },
      { name: "PostgreSQL / ChromaDB", pct: 82 },
      { name: "Docker / Azure AI", pct: 72 },
    ],
  },
  {
    icon: "📊",
    title: "Data & Analytics",
    skills: [
      { name: "React / JavaScript", pct: 70 },
      { name: "SQL", pct: 85 },
      { name: "Power BI", pct: 78 },
      { name: "Data Analysis & BI", pct: 80 },
    ],
  },
];

export default function Skills() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".skill-fill").forEach((fill) => {
              (fill as HTMLElement).classList.add("animated");
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );
    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="section-title">my toolkit 🛠️</h2>
        <p className="section-subtitle">
          the tech i use to build intelligent, scalable AI systems
        </p>
        <RevealSection className="skills-categories" >
          <div ref={sectionRef} style={{ display: "contents" }}>
            {skillCategories.map((cat) => (
              <div key={cat.title} className="glass-card skill-category">
                <h3>
                  <span className="cat-icon">{cat.icon}</span> {cat.title}
                </h3>
                {cat.skills.map((skill) => (
                  <div key={skill.name} className="skill-item">
                    <div className="skill-header">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-pct">{skill.pct}%</span>
                    </div>
                    <div className="skill-bar">
                      <div
                        className="skill-fill"
                        style={{ "--target-width": `${skill.pct}%` } as React.CSSProperties}
                      />
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </RevealSection>
      </div>
    </section>
  );
}
