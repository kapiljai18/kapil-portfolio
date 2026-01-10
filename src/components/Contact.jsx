/* src/components/Contact.js - Updated with Clickable Links */
import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Contact Me</h2>
        <div className="contact-content">
          <div className="contact-info">
            
            <div className="contact-item">
              <h3>LinkedIn</h3>
              <a 
                href="https://www.linkedin.com/in/kapil-jaitapkar/"
                target="_blank" 
                rel="noopener noreferrer"
                className="contact-link"
              >
                linkedin.com/in/kapil-jaitapkar
              </a>
            </div>
            <div className="contact-item">
              <h3>GitHub</h3>
              <a 
                href="https://github.com/kapiljai18"
                target="_blank" 
                rel="noopener noreferrer"
                className="contact-link"
              >
                github.com/kapil18
              </a>
            </div>
            <div className="contact-item">
              <h3>Email</h3>
              <a 
                href="mailto:kapiljaitapkar2004@gmail.com"
                className="contact-link"
              >
                kapiljaitapkar2004@gmail.com
              </a>
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
