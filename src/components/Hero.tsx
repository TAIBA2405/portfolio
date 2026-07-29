"use client";

import { useEffect, useRef } from "react";
import TypedText from "./TypedText";
import ParticlesCanvas from "./ParticlesCanvas";

export default function Hero() {
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!statsRef.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const numbers = entry.target.querySelectorAll(".stat-number");
            numbers.forEach((el) => {
              const raw = (el.textContent || "").replace(/[^0-9.]/g, "");
              const suffix = (el.textContent || "").replace(/[0-9.]/g, "");
              const target = parseFloat(raw);
              animateCounter(el as HTMLElement, target, suffix);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );
    observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="hero">
      <ParticlesCanvas />
      <div className="hero-grid-bg" />
      <div className="hero-glow-1" />
      <div className="hero-glow-2" />
      <div className="container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="dot" />
            open to collabs & opportunities ✨
          </div>
          <h1 className="hero-name">
            Taiba<br /><span>Khan Faridi</span>
          </h1>
          <p className="hero-title">
            <TypedText />
          </p>
          <p className="hero-desc">
            building AI systems that actually work in prod — multi-agent LLM workflows, clinical AI, ML pipelines & agentic backends. yes, i ship. 🚀
          </p>
          <div className="hero-buttons">
            <a href="#experience" className="btn btn-primary">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18"/></svg>
              View Experience
            </a>
            <a href="#contact" className="btn btn-outline">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,12 2,6"/></svg>
              Get in Touch
            </a>
            <a href="/CV_Taiba_Khan_Faridi.pdf" download className="btn btn-outline" style={{ borderColor: "rgba(240,171,252,0.4)", color: "var(--neon-pink)" }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
              Download CV
            </a>
          </div>
          <div className="hero-stats" ref={statsRef}>
            <div className="stat-item">
              <div className="stat-number">4+</div>
              <div className="stat-label">AI Systems Built</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">6+</div>
              <div className="stat-label">Months Experience</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">10+</div>
              <div className="stat-label">Technologies</div>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-scroll">
        <span>Scroll</span>
        <div className="scroll-line" />
      </div>
    </section>
  );
}

function animateCounter(el: HTMLElement, target: number, suffix: string) {
  const isDecimal = String(target).includes(".");
  const duration = 1500;
  let start: number | null = null;
  const step = (timestamp: number) => {
    if (!start) start = timestamp;
    const progress = Math.min((timestamp - start) / duration, 1);
    const value = progress * target;
    el.textContent = (isDecimal ? value.toFixed(2) : Math.floor(value).toString()) + suffix;
    if (progress < 1) requestAnimationFrame(step);
    else el.textContent = (isDecimal ? parseFloat(String(target)).toFixed(2) : String(target)) + suffix;
  };
  requestAnimationFrame(step);
}
