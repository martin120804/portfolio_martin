import React from 'react';

const Home = () => {
  return (
    <div className="intro" id="hero">
      <img className="pogi" src="/images/pogi.jpg" />
      <div className="block1"></div>
      <div className="block2"></div>
      <div className="block3"></div>
      <div className="block4"></div>
      <div className="block5"></div>
      <div className="content">
        <h1>Hello!</h1>
        <p className="italic">Where Vision Meets Design.</p>
        <p className="description">
          Hi, I'm Martin Garay, a visual designer <br />specializing in branding and visual storytelling.
        </p>
        <button className="hover-button">Learn More About Me</button>
      </div>
    </div>
  );
};

export default Home;
