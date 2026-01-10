

// src/App.js
import React, { Suspense, lazy } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Hero />
        <Suspense fallback={<div className="loading">Loading...</div>}>
          <About />
          <Projects />
          <Skills />
          <Resume />
          <Contact />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default App;
