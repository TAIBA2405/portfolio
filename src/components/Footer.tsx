export default function Footer() {
  return (
    <footer>
      <div className="container footer-inner">
        <div className="footer-copy">
          built with 💜 by taiba © {new Date().getFullYear()}
        </div>
        <div className="footer-links">
          <a href="https://linkedin.com/in/taiba-khan-faridi-576860172" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="https://github.com/TAIBA2405" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="mailto:taibakfaridi@gmail.com">Email</a>
        </div>
      </div>
    </footer>
  );
}
