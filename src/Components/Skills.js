import React from "react";
import { skills } from "../Utils/data";

function Skills() {
  return (
    <section id="skills">
      {/* SKILLS HEADER */}
      <header className="header skills-header">
        <div>Skills & Tech</div>
      </header>

      {/* SKILLS CONTAINER */}
      <div className="skills-ctn">
        {skills.map((skill) => (
          <div key={skill} className="skill">
            <span className="skill-text">{skill}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
