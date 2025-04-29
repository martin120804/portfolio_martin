import React from 'react';

const Skills = () => {
  return (
    <section id="skills-work-experience">
      <h1>Skills & Work Experience</h1>
      <div className="skills">
        <h2>My Skills</h2>
        <p style={{ color: 'white' }}>Here are my skills to represent my expertise</p>
        <div className="skills-container">
          {[
            { name: 'HTML', icon: 'pic2.png', level: '50%' },
            { name: 'CSS', icon: 'css-3.png', level: '50%' },
            { name: 'JavaScript', icon: 'js.png', level: '20%' },
            { name: 'Python', icon: 'python.png', level: '80%' },
          ].map((skill) => (
            <div className="skill" key={skill.name}>
              <h3>
                <img src={`/images/${skill.icon}`} alt={skill.name} className="skill-icon" />{skill.name}
              </h3>
              <div className="progress-bar">
                <div className="progress" style={{ width: skill.level }}></div>
                <span>{skill.level}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="work-experience">
        <h2>My Future Job</h2>
        <p>Here are the roles I aspire to take on in the future:</p>
        <div className="experience-container">
          {[
            { title: 'Web Developer', desc: 'I want to build websites that look great, work well, and are easy to use.' },
            { title: 'Software Engineer', desc: 'I want to create apps that solve problems and bring new ideas to life.' },
            { title: 'Data Analyst', desc: 'I want to help organizations make data-driven decisions and improve their performance.' },
            { title: 'Freelance Designer', desc: 'I want to help small businesses grow online with creative designs.' },
          ].map((job) => (
            <div className="job" key={job.title}>
              <h3>{job.title}</h3>
              <p>{job.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
