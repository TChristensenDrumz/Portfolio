import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

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
          <img
            src={image}
            className="img-fluid float-left pl-5"
            alt="Project GIF"
          />
          {body}
          <div className="text-right">
            <Button variant="primary" href={site}>
              Go to {title}
            </Button>
          </div>
          <div className="text-right">
            <Button variant="dark" href={github}>
              GitHub
            </Button>
          </div>
          <div className="text-right">
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
