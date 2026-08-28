"use client";

import { useState } from "react";
import RevealSection from "./RevealSection";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const subject = (form.elements.namedItem("subject") as HTMLInputElement).value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;

    setStatus("sending");
    const mailtoLink = `mailto:taibakfaridi@gmail.com?subject=${encodeURIComponent(
      subject || "Portfolio Inquiry"
    )}&body=${encodeURIComponent(`Hi Taiba,\n\nName: ${name}\nEmail: ${email}\n\n${message}`)}`;

    setTimeout(() => {
      window.location.href = mailtoLink;
      setStatus("sent");
      setTimeout(() => {
        setStatus("idle");
        form.reset();
      }, 3000);
    }, 1000);
  }

  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">
          got an AI project or role that&apos;s actually interesting? let&apos;s talk 💬
        </p>
        <RevealSection className="contact-grid">
          <div className="contact-info">
            <h3>
              let&apos;s build something<br />
              <span className="neon-text">stupidly smart together</span>
            </h3>
            <p>
              always down to chat about AI engineering, agentic systems, 
              or whatever cool thing you&apos;re building. slide in 👇
            </p>
            <div className="contact-links">
              <a href="mailto:taibakfaridi@gmail.com" className="contact-link">
                <div className="contact-link-icon">✉️</div>
                <div>
                  <div className="contact-link-label">Email</div>
                  <div className="contact-link-value">taibakfaridi@gmail.com</div>
                </div>
              </a>
              <a href="tel:+919752503309" className="contact-link">
                <div className="contact-link-icon">📞</div>
                <div>
                  <div className="contact-link-label">Phone</div>
                  <div className="contact-link-value">+91 97525 03309</div>
                </div>
              </a>
              <a href="https://linkedin.com/in/taiba-khan-faridi-576860172" target="_blank" rel="noopener noreferrer" className="contact-link">
                <div className="contact-link-icon">💼</div>
                <div>
                  <div className="contact-link-label">LinkedIn</div>
                  <div className="contact-link-value">taiba-khan-faridi-576860172</div>
                </div>
              </a>
              <a href="https://github.com/TAIBA2405" target="_blank" rel="noopener noreferrer" className="contact-link">
                <div className="contact-link-icon">🐙</div>
                <div>
                  <div className="contact-link-label">GitHub</div>
                  <div className="contact-link-value">github.com/TAIBA2405</div>
                </div>
              </a>
              <span className="contact-link">
                <div className="contact-link-icon">📍</div>
                <div>
                  <div className="contact-link-label">Location</div>
                  <div className="contact-link-value">Indore, India</div>
                </div>
              </span>
            </div>
          </div>
          <div className="glass-card contact-form">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label" htmlFor="name">Your Name</label>
                <input type="text" id="name" name="name" className="form-input" placeholder="Your name" required />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="email">Email Address</label>
                <input type="email" id="email" name="email" className="form-input" placeholder="Your email" required />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="subject">Subject</label>
                <input type="text" id="subject" name="subject" className="form-input" placeholder="AI Project Collaboration" />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="message">Message</label>
                <textarea id="message" name="message" className="form-input" placeholder="Tell me about your project or opportunity..." required />
              </div>
              <button
                type="submit"
                className="btn btn-primary"
                style={{ width: "100%", justifyContent: "center" }}
                disabled={status !== "idle"}
              >
                {status === "sending" && "⏳ Sending..."}
                {status === "sent" && "✅ Message Sent!"}
                {status === "idle" && (
                  <>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </RevealSection>
      </div>
    </section>
  );
}
