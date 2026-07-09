function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="skills-heading">
        <h2>Skills & Technologies</h2>
       <p>
  Technologies, tools, and frameworks I use to build modern, responsive,
  and user-friendly web applications.
</p>
      </div>

      <div className="skills-container">

        <div className="skill-category">
          <h3>Frontend</h3>

          <div className="skill-tags">
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>React</span>
          </div>
        </div>

        <div className="skill-category">
          <h3>Tools</h3>

          <div className="skill-tags">
            <span>Git</span>
            <span>GitHub</span>
            <span>VS Code</span>
            <span>Figma</span>
          </div>
        </div>

        <div className="skill-category">
          <h3>Learning</h3>

          <div className="skill-tags">
            <span>Node.js</span>
            <span>Express</span>
            <span>MongoDB</span>
            <span>REST API</span>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Skills;