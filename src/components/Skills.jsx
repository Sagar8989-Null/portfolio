function Skills() {
  const skillCategories = [
    {
      category: "Frontend",
      skills: ["React", "JavaScript", "HTML5", "CSS3", "Responsive Design"]
    },
    {
      category: "Backend",
      skills: ["Node.js", "Express", "REST APIs", "Database Design"]
    },
    {
      category: "Tools & Others",
      skills: ["Git", "VS Code", "Figma", "Agile Methodologies"]
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3 className="category-title">{category.category}</h3>
              <ul className="skills-list">
                {category.skills.map((skill, idx) => (
                  <li key={idx} className="skill-item">{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
