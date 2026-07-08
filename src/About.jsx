function About() {
  return (
    <section id="about" className="about">
      <div className="about-heading">
        <h2>About Me</h2>
      </div>

      <div className="about-grid">
        <div className="about-card">
          <h3>👨‍💻 Who I Am</h3>
          <p>
            Hello! I'm <strong>Waji Ul Hassan</strong>, a Computer Science
            student with a passion for React and Web Development. I enjoy
            creating modern, responsive, and user-friendly websites while
            continuously improving my programming skills.
          </p>
        </div>

        <div className="about-card">
          <h3>🎯 My Goal</h3>
          <p>
            My goal is to become a skilled Full Stack Developer and build
            innovative web applications that solve real-world problems and
            deliver great user experiences.
          </p>
        </div>

        <div className="about-card">
          <h3>🎓 Education</h3>
          <p>
            <strong>BS Computer Science</strong>
            <br />
            University of Lahore
            <br />
            Currently learning React, JavaScript, and modern web technologies.
          </p>
        </div>

        <div className="about-card">
          <h3>💡 Skills & Interests</h3>
          <p>
            HTML, CSS, JavaScript, React, Git & GitHub, Responsive Web Design,
            UI Development, and continuously learning new technologies.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;