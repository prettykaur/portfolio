import React from "react";

function About() {
  return (
    <section id="about">
      {/* ABOUT HEADER */}
      <header className="header about-header">
        <span>Hello, I'm</span>
        <br />
        <span className="accent">Gurpreet Kaur</span>
        <span>.</span>
      </header>

      {/* ABOUT TEXT */}
      <div className="section-text about-text">
        <p>I'm a full-stack software engineer based in Singapore.</p>
        <p>
          I'm committed to leveraging my problem-solving skills and passion for
          tech to provide high-quality solutions.
        </p>
      </div>

      {/* BUTTONS */}
      <div className="btn-ctn">
        {/* PROJECTS */}
        <a className="nav-btn" href="#projects">
          Recent Work
        </a>
        {/* GITHUB */}
        <a
          className="nav-btn"
          href="https://github.com/prettykaur"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
        {/* LINKEDIN */}
        <a
          className="nav-btn"
          href="https://www.linkedin.com/in/gurpreet-kaur-7076a112a/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
        {/* CONTACT */}
        <a className="nav-btn" href="mailto:pkaur.dev@gmail.com">
          Get In Touch
        </a>
      </div>
    </section>
  );
}

export default About;
