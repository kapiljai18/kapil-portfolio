/* src/components/About.js */
import './About.css';
import React from 'react';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              Passionate Full Stack Developer creating 
              beautiful, responsive web applications. I specialize in modern 
              JavaScript frameworks and love turning complex problems into simple, 
              elegant solutions.
            </p>
            <p>
              When I'm not coding, you'll find me exploring new technologies, 
              contributing to open source projects, or enjoying a good cup of coffee 
              while planning my next big project.
            </p>
            <div className="about-stats">
              <div className="stat">
                <h3>5+</h3>
                <span>Projects</span>
              </div>
              {/* <div className="stat">
                <h3>1</h3>
                <span>Years Exp</span>
              </div> */}
              <div className="stat">
                <h3>100%</h3>
                <span>Satisfaction</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
