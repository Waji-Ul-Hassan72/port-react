function About() {
  return (
    <section id="about" className="about">

      <div className="about-container">

        <div className="about-left">
          <h2>About Me</h2>

          <p>
            I'm <strong>Waji Ul Hassan</strong>, a Computer Science student
            passionate about React, JavaScript, and modern web development.
            I enjoy creating responsive websites with clean UI and continuously
            improving my programming skills.
          </p>

          <p>
            My goal is to become a Full Stack Developer and build innovative,
            user-friendly web applications that solve real-world problems.
          </p>
        </div>

        <div className="about-right">

          <div className="info">
            <h3>Education</h3>
            <p>BS Computer Science</p>
            <span>University of Lahore</span>
          </div>

          <div className="info">
            <h3>CGPA</h3>
            <p>3.87 / 4.00</p>
          </div>

          <div className="info">
            <h3>Interests</h3>
            <p>React • Web Development • UI Design</p>
          </div>

          <div className="info">
            <h3>Languages</h3>
            <p>English • Urdu</p>
          </div>

        </div>

      </div>

    </section>
  );
}

export default About;