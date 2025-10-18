function Projects() {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-featured online shopping platform with cart management, payment integration, and user authentication.",
      technologies: ["React", "Node.js", "MongoDB"],
      link: "#"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Collaborative task management tool with real-time updates, team collaboration features, and progress tracking.",
      technologies: ["React", "Firebase", "Material-UI"],
      link: "#"
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "Real-time weather information app with beautiful visualizations and location-based forecasts.",
      technologies: ["React", "API Integration", "CSS3"],
      link: "#"
    },
    {
      id: 4,
      title: "Portfolio CMS",
      description: "Content management system for portfolio websites with drag-and-drop interface and customizable themes.",
      technologies: ["React", "Express", "PostgreSQL"],
      link: "#"
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <a href={project.link} className="project-link">View Project →</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
