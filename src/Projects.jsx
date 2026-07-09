function Projects() {
  return (
    <section id="projects" className="projects">

      <div className="projects-heading">
        <h2>Featured Projects</h2>
      </div>

      {/* ================= PlantCare Pro ================= */}

      <div className="project">

        <div className="project-image">
         <img src="/project2.jpg" alt="PlantCare Pro" />
        </div>

        <div className="project-info">

          <h3>PlantCare Pro</h3>

          <div className="tech">
            <span>React</span>
            <span>JavaScript</span>
            <span>CSS</span>
            <span>Responsive</span>
          </div>

          <p>
            PlantCare Pro is a responsive web application that helps users
            discover, explore, and learn about different plants. The platform
            provides a clean interface, plant categories, detailed information,
            and a modern user experience.
          </p>

          <div className="project-buttons">
            <button>Live Demo</button>
            <button className="github-btn">GitHub</button>
          </div>

        </div>

      </div>

     

      <div className="project">

        <div className="project-image">
          <img src="/project.jpg.jpg" alt="Portfolio Website" />
        </div>

        <div className="project-info">

          <h3>Portfolio Website</h3>

          <div className="tech">
            <span>React</span>
            <span>CSS</span>
            <span>JavaScript</span>
          </div>

          <p>
            A modern and responsive portfolio website built using React. It
            showcases my skills, projects, experience, and contact information
            with a clean and attractive user interface.
          </p>

          <div className="project-buttons">
            <button>Live Demo</button>
            <button className="github-btn">GitHub</button>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Projects;