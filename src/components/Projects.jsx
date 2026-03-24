/* src/components/Projects.js */
import React from 'react';
import './Projects.css';

// import local images (same folder or ./images folder)
import petImg from './pet.jpeg';      // or './images/project1.jpg'
import gymImg from './gym.jpeg';        // or './images/project2.jpg'
import fyppImg from './fypp.jpg';        // or './images/project3.jpg'

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "MyPet - Full Stack Web Application",
      description: " A full stack web application designed to help pet owners manage and tracks their pet information.",
      tech: ["HTML", "CSS", "JavaScript", "Bootstrap","PHP"],
      image: petImg,
      link: "#",
      github: "#"
    },
    {
      id: 2,
      title: "Fitness Heaven - GYM Website",
      description: " A clean, responsive fitness-themed website.(Frontend)",
      tech: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      image: gymImg,
      link: "#",
      github: "#"
    },
    {
      id: 3,
      title: "FYPP - Mern Full Stack WebApplication",
      description: "FYPP features best photographers for ur functions or events",
      tech: ["React js", "Node js", "Express js", "MongoDB"],
      image: fyppImg,
      link: "#",
      github: "#"
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img 
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                />
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech, idx) => (
                    <span key={idx} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.link} className="btn btn-primary" target="_self" rel="noopener noreferrer">
                    Live Demo
                  </a>
                  <a href={project.github} className="btn btn-secondary">GitHub</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
