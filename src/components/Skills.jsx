/* src/components/Skills.js */
import React from 'react';
import './Skills.css';

const Skills = () => {
  const skills = {
    frontend: ["React js", "Next.js", "JavaScript", "HTML5", "CSS3"],
    backend: ["Node.js","Express js", "Python", "Django", "MongoDB", "MYSQL","C","c++","PHP"],
    tools: ["Github", "Jupyter Notebook", "AWS", "Vercel","Google Colab"],
  };

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <div className="skills-grid">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="skills-category">
              <h3>{category.charAt(0).toUpperCase() + category.slice(1)}</h3>
              <div className="skills-list">
                {items.map((skill, idx) => (
                  <span key={idx} className="skill-item">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
