import RevealSection from "./RevealSection";

const posts = [
  {
    category: "LLMs & Agents",
    title: "Building Production-Grade Agentic AI Systems with LangGraph",
    excerpt:
      "A deep dive into designing multi-agent workflows with state management, tool-calling, and observability for real-world deployments.",
  },
  {
    category: "Clinical AI",
    title: "Grad-CAM in Medical Imaging: Making AI Interpretable for Clinicians",
    excerpt:
      "How I engineered Grad-CAM heatmap visualization for cancer staging AI, making tumor localization transparent and clinically actionable.",
  },
  {
    category: "LLM Engineering",
    title: "LLM Cost Optimization: Routing Queries by Task Complexity",
    excerpt:
      "How I built a smart routing layer that switches between lightweight and heavyweight models based on task complexity — reducing token spend without sacrificing quality.",
  },
];

export default function Blog() {
  return (
    <section id="blog" className="section">
      <div className="container">
        <h2 className="section-title">Blog &amp; Articles</h2>
        <p className="section-subtitle">
          Thoughts on AI engineering, LLMs, and building intelligent systems
        </p>
        <RevealSection className="blog-grid">
          {posts.map((post) => (
            <div key={post.title} className="glass-card blog-card">
              <div className="blog-category">{post.category}</div>
              <div className="blog-title">{post.title}</div>
              <p className="blog-excerpt">{post.excerpt}</p>
              <div className="blog-meta">
                <span className="blog-date">Coming soon</span>
                <span className="blog-read">Read →</span>
              </div>
            </div>
          ))}
        </RevealSection>
      </div>
    </section>
  );
}
