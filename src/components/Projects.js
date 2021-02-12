import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { Card } from "react-bootstrap";
import Image from "react-bootstrap/Image";

import HARMony from "../assets/harmonythegame.gif";
import StoreFront from "../assets/storefrontdemo.gif";

function Projects() {
  const styles = {
    div: {
      display: "flex",
      justifyContent: "center",
      lineHeight: "1",
    },
    h1: {
      borderBottom: "1.5px solid",
      display: "inline-block",
      lineHeight: "0.85",
    },
    image: {
      height: "300px",
      width: "14.921vw",
      minWidth: "248px",
    },
  };

  return (
    <div>
      <Container fluid style={{ maxWidth: "75vw" }}>
        <div style={styles.div}>
          <h1 style={styles.h1}>Projects</h1>
        </div>
        <Row className="justify-content-md-center">
          <Col>
            <Card style={{ width: "15vw", minWidth: "250px" }}>
              <Image variant="top" src={StoreFront} style={styles.image} />
              <Card.Body>
                <Card.Title style={{ textAlign: "center" }}>Store Front</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "15vw", minWidth: "250px" }}>
              <Image variant="top" src={StoreFront} style={styles.image} />
              <Card.Body>
                <Card.Title style={{ textAlign: "center" }}>Store Front</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "15vw", minWidth: "250px" }}>
              <Image variant="top" src={StoreFront} style={styles.image} />
              <Card.Body>
                <Card.Title style={{ textAlign: "center" }}>Store Front</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "15vw", minWidth: "250px" }}>
              <Image variant="top" src={StoreFront} style={styles.image} />
              <Card.Body>
                <Card.Title style={{ textAlign: "center" }}>Store Front</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Projects;
