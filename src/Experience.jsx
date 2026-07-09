function Experience() {
  return (
    <section id="experience" className="experience">
      <div className="experience-heading">
        <h2>Experience</h2>
        <p>
          My internships and professional learning journey in web development.
        </p>
      </div>

      <div className="timeline">

        <div className="timeline-item">
          <div className="timeline-dot"></div>

          <div className="timeline-content">
            <span className="date">2026 - Present</span>

            <h3>Frontend Developer Intern</h3>

            <h4>Dev Entities</h4>

            <p>
              Working on React applications, building responsive user
              interfaces, fixing UI bugs, and collaborating with the development
              team using Git and GitHub.
            </p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-dot"></div>

          <div className="timeline-content">
            <span className="date">Remote Internship</span>

            <h3>Web Development Intern</h3>

            <h4>Systems Limited</h4>

            <p>
              Assisted in frontend development, improved website responsiveness,
              learned industry best practices, and gained experience working in
              a professional remote environment.
            </p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-dot"></div>

          <div className="timeline-content">
            <span className="date">Current</span>

            <h3>BS Computer Science</h3>

            <h4>University of Lahore</h4>

            <p>
              Building projects using HTML, CSS, JavaScript, React, Git, and
              GitHub while strengthening problem-solving and programming skills.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Experience;