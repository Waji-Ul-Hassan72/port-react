function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="projects-heading">
        <h2>Projects</h2>
      </div>

      <div className="project">

        <div className="project-image">
          <img src="/project.jpg.jpg" alt="Project" />
        </div>

        <div className="project-info">
          <h3>Portfolio Website</h3>

          <div className="tech">
            <span>React</span>
            <span>CSS</span>
            <span>JavaScript</span>
          </div>

          <p>
            A modern responsive portfolio website built with React.
            It showcases my skills, projects, and contact information
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