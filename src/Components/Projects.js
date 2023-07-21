import React, { useState } from "react";
import { projects } from "../Utils/data";
import Modal from "./Modal";

function Projects() {
  const [showModal, setShowModal] = useState(false);
  const [currentProject, setCurrentProject] = useState(null);

  const handleProjectClick = (project) => {
    setCurrentProject(project);
    setShowModal(true);
  };

  return (
    <section id="projects">
      {/* PROJECTS HEADER */}
      <header className="header projects-header">
        <div>Apps I've Built</div>
      </header>

      {/* PROJECTS TEXT */}
      <div className="projects-text">
        <p>
          Check out some of my recent work. View more on{" "}
          <a
            href="https://github.com/prettykaur"
            target="_blank"
            rel="noreferrer"
            className="external-link"
          >
            GitHub
          </a>
          .
        </p>
      </div>

      {/* PROJECTS CONTAINER */}
      <div className="projects-ctn">
        {projects.map((project) => (
          <div
            className="project"
            key={project.title}
            onClick={() => handleProjectClick(project)}
          >
            <div className="project-contents">
              <img
                alt={project.title}
                className="project-img"
                src={project.image}
              />
              <h1>{project.title}</h1>
              <h2>{project.subtitle}</h2>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
      {showModal && currentProject && (
        <Modal
          project={currentProject}
          closeModal={() => {
            setShowModal(false);
            setCurrentProject(null);
          }}
        />
      )}
    </section>
  );
}

export default Projects;
