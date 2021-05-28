import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "./Project.css";

function Project({ title, body, image, github, site, show, handleClose }) {
  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            {title}
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <img src={image} className="img-fluid pl-2 pb-3" alt="Project GIF" />
          <div className="pb-3 roboto">{body}</div>
          <div className="text-right">
            <a
              className="website-button"
              href={site}
              target="_blank"
              rel="norefferer"
            >
              Go to {title}
            </a>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <a
              className="github-button"
              href={github}
              target="_blank"
              rel="norefferer"
            >
              GitHub
            </a>
            &nbsp;&nbsp;&nbsp;
            <button className="close-button" onClick={handleClose}>
              Close
            </button>
            <div className="pt-3"></div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Project;
