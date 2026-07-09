function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Left */}
        <div className="footer-left">
          <h2>Waji Ul Hassan</h2>

          <div className="footer-badge">
            🚀 Available for Internships & Freelance
          </div>
        </div>

        {/* Center */}
        <div className="footer-center">
          <h3>Quick Links</h3>

          <a href="#">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        {/* Right */}
        <div className="footer-right">
          <h3>Connect</h3>

          <div className="social-links">
            <a href="#">💼 LinkedIn</a>
            <a href="#">💻 GitHub</a>
            <a href="#">📧 Email</a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 Waji Ul Hassan. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;