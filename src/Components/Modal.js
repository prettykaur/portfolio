import React from "react";

function Modal({ project, closeModal }) {
  return (
    <div className="projectmodal-ctn">
      <div className="modal-ctn">
        <div className="close-btn">
          <button onClick={closeModal}>&times;</button>
        </div>
        <div className="modal-title">
          <h2>{project.title}</h2>
          <p>{project.description}</p>
        </div>

        <div className="modal-content">
          <div className="features-ctn">
            <p>Features:</p>
            {project.features.map((feature) => (
              <ul>
                <li key={feature}>{feature}</li>
              </ul>
            ))}
          </div>
          <div className="tech-ctn">
            <p>Tech Stack:</p>
            {project.tech_stack.map((tech) => (
              <ul>
                <li key={tech}>{tech}</li>
              </ul>
            ))}
          </div>
        </div>

        <div className="modal-body">
          <div className="modal-btns">
            <a
              className="nav-btns"
              href={project.link}
              target="_blank"
              rel="noreferrer"
            >
              View App
            </a>
            {project.repos.frontend && (
              <a
                href={project.repos.frontend}
                className="nav-btns"
                target="_blank"
                rel="noreferrer"
              >
                {project.repos.frontend && project.repos.backend
                  ? "Frontend Repo"
                  : "Repo"}
              </a>
            )}
            {project.repos.backend && (
              <a
                href={project.repos.backend}
                className="nav-btns"
                target="_blank"
                rel="noreferrer"
              >
                Backend Repo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
