import React from "react";

function Navbar() {
  return (
    <nav className="navbar-ctn">
      {/* LEFT CONTAINER */}
      <a className="nav-link nav-left" href="#about">
        ABOUT
      </a>

      {/* RIGHT CONTAINER */}
      <div className="nav-right">
        <a className="nav-link" href="#projects">
          PROJECTS
        </a>
        <a className="nav-link" href="#skills">
          SKILLS
        </a>
        <a
          className="nav-link"
          href="https://github.com/prettykaur"
          target="_blank"
          rel="noreferrer"
        >
          GITHUB
        </a>
        <a
          className="nav-link"
          href="https://www.linkedin.com/in/gurpreet-kaur-7076a112a/"
          target="_blank"
          rel="noreferrer"
        >
          LINKEDIN
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
