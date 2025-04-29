import React from 'react';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import './index.css';

function App() {
  return (
    <div>
      <div className="navbar">
        <h2 className="logo">MARTIN GARAY</h2>
        <div className="menu">
          <ul>
            <li><a href="#hero">Home</a></li>
            <li><a href="#about">About Me</a></li>
            <li><a href="#skills-work-experience">Skills</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </div>

      <Home />
      <About />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
