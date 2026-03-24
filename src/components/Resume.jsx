/* src/components/Resume.js - Fully Working with CV Download */
import React from 'react';
import kapilResume from './kapil-jaitapkar-resume.pdf'; // ✅ Add your resume PDF here
import './Resume.css';

const Resume = () => {
  return (
    <section id="resume" className="resume">
      <div className="container">
        <h2 className="section-title">Resume</h2>
        <div className="resume-content">
          <div className="resume-download">
            <a 
              href={kapilResume} 
              download="Kapil-Jaitapkar-Resume.pdf"
              className="btn btn-primary"
            >
              📄 Download CV
            </a>
            <p style={{color: '#64748b', marginTop: '0.5rem', fontSize: '0.9rem'}}>
              Latest version - Updated 2026
            </p>
          </div>
          {/* <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-date">2025 - Present</div>
              <div className="timeline-content">
                <h3>Senior Full Stack Developer</h3>
                <p>TechCorp Inc.</p>
                <ul>
                  <li>Led development of 5+ enterprise applications</li>
                  <li>Improved application performance by 60%</li>
                  <li>Mentored junior developers</li>
                </ul>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-date">2023 - 2025</div>
              <div className="timeline-content">
                <h3>Full Stack Developer</h3>
                <p>WebSolutions Ltd.</p>
                <ul>
                  <li>Built 15+ client projects</li>
                  <li>Implemented CI/CD pipelines</li>
                  <li>Reduced deployment time by 75%</li>
                </ul>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Resume;
