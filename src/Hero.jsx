
function Hero() {
  return (
    <section className="hero">
      <div className="hero-text">
        <p>Hello! I'm</p>

        <h3>Waji Ul Hassan</h3>

        <h1>
          React Developer
          <br />
          & Web Designer
        </h1>

        <p>
          I am learning React and building amazing web
          applications.
        </p>

        <div className="hero-buttons">
       <button>Hire Me</button>

          <a
  href="/Waji-Ul-Hassan-CV.pdf.pdf"
  download
>
  <button className="cv-btn">
    Download CV
  </button>
</a>
        </div>
      </div>

      <div className="hero-image">
       <img src="/profile.jpg.jpg" alt="Profile" />
      </div>
    </section>
  );
}

export default Hero;