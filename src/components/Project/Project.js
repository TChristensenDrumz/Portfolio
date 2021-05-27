import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import './Project.css'

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
          <div className="pb-3">{body}</div>
          <div className="text-right">
            <Button variant="primary" href={site} target="_blank">
              Go to {title}
            </Button>
            &nbsp;
            <Button variant="dark" href={github} target="_blank">
              GitHub
            </Button>
            &nbsp;
            <Button variant="danger" onClick={handleClose}>
              Close
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Project;
