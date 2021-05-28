import React, { useState } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { Card } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import { Nav } from "react-bootstrap";
import Project from "../Project/Project";
import "./Projects.css";

import HARMony from "../../assets/harmonythegame.gif";
import StoreFront from "../../assets/storefrontdemo.gif";

function Projects() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [image, setImage] = useState("");
  const [github, setGithub] = useState("");
  const [site, setSite] = useState("");
  const [show, setShow] = useState(false);
  const [hideReact, setHideReact] = useState(false);
  const [hideJS, setHideJS] = useState(false);
  const [filter, setFilter] = useState("All");

  const handleHarmony = () => {
    setTitle("HARMony");
    setBody(
      "A combat-based music-themed video game where you begin by selecting your warrior/genre and you fight to conquer the other genres."
    );
    setImage(
      "https://github.com/TChristensenDrumz/Image-Links/raw/main/Portfolio/harmonythegame.gif"
    );
    setGithub("https://github.com/TChristensenDrumz/HARMony");
    setSite("https://harmonythegame.herokuapp.com/");
    handleShow();
  };

  const handleStoreFront = () => {
    setTitle("Store Front");
    setBody(
      "This is a CMS to allow store owners to create and customize their own online store. Customers can then come and shop at these stores, all under one roof."
    );
    setImage(
      "https://github.com/TChristensenDrumz/Image-Links/raw/main/Portfolio/storefrontdemo.gif"
    );
    setGithub("https://github.com/TChristensenDrumz/Store-Front");
    setSite("https://storefrontreact.herokuapp.com/");
    handleShow();
  };

  const handleConnex = () => {
    setTitle("Connex");
    setBody(
      "This project is a simple chat app that allows users to create and join chat rooms with other users. Users can create or join rooms using user generated Room IDs, and then enter once they have created a username and title. Male and female avatars are both available."
    );
    setImage(
      "https://github.com/TChristensenDrumz/Image-Links/raw/main/Portfolio/connexdemo.gif"
    );
    setGithub("https://github.com/TChristensenDrumz/Connex");
    setSite("https://connexchatapp.herokuapp.com/");
    handleShow();
  };

  const handleNoGym = () => {
    setTitle("NoGym");
    setBody(
      "A web application that provides a personalized virtual gym based on the user's current workout environment."
    );
    setImage(
      "https://github.com/TChristensenDrumz/NoGym/raw/main/public/assets/images/gif/nogymtest.gif"
    );
    setGithub("https://github.com/TChristensenDrumz/NoGym");
    setSite("https://nogym.herokuapp.com");
    handleShow();
  };

  const handleHomeCookedComfort = () => {
    setTitle("Home Cooked Comfort");
    setBody(
      "A simple recipe search to help add some variety to your quarantine meals."
    );
    setImage(
      "https://github.com/tchristensendrumz/Home-Cooked-Comfort/raw/main/assets/screencap.gif?raw=true"
    );
    setGithub("https://github.com/TChristensenDrumz/Home-Cooked-Comfort");
    setSite("https://tchristensendrumz.github.io/Home-Cooked-Comfort/");
    handleShow();
  };

  const handleAll = () => {
    setHideReact(false);
    setHideJS(false);
    setFilter("All");
  };

  const handleReact = () => {
    setHideReact(false);
    setHideJS(true);
    setFilter("React");
  };

  const handleJS = () => {
    setHideReact(true);
    setHideJS(false);
    setFilter("JavaScript");
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
    <div id="projects" style={{ paddingTop: "9rem" }}>
      <Project
        title={title}
        body={body}
        image={image}
        github={github}
        site={site}
        show={show}
        handleClose={handleClose}
      />
      <Container fluid style={{ maxWidth: "75vw" }}>
        <div style={styles.div}>
          <h1 className="projects-label" style={styles.h1}>
            {filter} Projects
          </h1>
        </div>
        <Nav className="ml-auto mr-auto justify-content-md-center">
          <Nav.Link className="ml-4 mr-4" onClick={handleAll}>
            All
          </Nav.Link>
          <Nav.Link className="ml-4 mr-4" onClick={handleReact}>
            React
          </Nav.Link>
          <Nav.Link className="ml-4 mr-4" onClick={handleJS}>
            JavaScript
          </Nav.Link>
        </Nav>
        <Row className="justify-content-md-center">
          <Col
            className="pb-5"
            style={hideReact ? { display: "none" } : { visibility: "visible" }}
          >
            <Card
              style={{ width: "15vw", minWidth: "250px" }}
              onClick={handleHarmony}
            >
              <Image
                variant="top"
                src="https://github.com/TChristensenDrumz/Image-Links/raw/main/Portfolio/harmonythegame.gif"
                style={styles.image}
              />
              <Card.Body>
                <Card.Title style={{ textAlign: "center" }}>HARMony</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col
            className="pb-5"
            style={hideReact ? { display: "none" } : { visibility: "visible" }}
          >
            <Card
              style={{ width: "15vw", minWidth: "250px" }}
              onClick={handleStoreFront}
            >
              <Image
                variant="top"
                src="https://github.com/TChristensenDrumz/Image-Links/raw/main/Portfolio/storefrontdemo.gif"
                style={styles.image}
              />
              <Card.Body>
                <Card.Title style={{ textAlign: "center" }}>
                  Store Front
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col
            className="pb-5"
            style={hideReact ? { display: "none" } : { visibility: "visible" }}
          >
            <Card
              style={{ width: "15vw", minWidth: "250px" }}
              onClick={handleConnex}
            >
              <Image
                variant="top"
                src="https://github.com/TChristensenDrumz/Image-Links/raw/main/Portfolio/connexdemo.gif"
                style={styles.image}
              />
              <Card.Body>
                <Card.Title style={{ textAlign: "center" }}>Connex</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col
            className="pb-5"
            style={hideJS ? { display: "none" } : { visibility: "visible" }}
          >
            <Card
              style={{ width: "15vw", minWidth: "250px" }}
              onClick={handleNoGym}
            >
              <Image
                variant="top"
                src="https://github.com/TChristensenDrumz/Image-Links/raw/main/Portfolio/nogymdemo.gif"
                style={styles.image}
              />
              <Card.Body>
                <Card.Title style={{ textAlign: "center" }}>NoGym</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col
            className="pb-5"
            style={hideJS ? { display: "none" } : { visibility: "visible" }}
          >
            <Card
              style={{ width: "15vw", minWidth: "250px" }}
              onClick={handleHomeCookedComfort}
            >
              <Image
                variant="top"
                src="https://github.com/TChristensenDrumz/Image-Links/raw/main/Portfolio/homecookedcomfortdemo.gif"
                style={styles.image}
              />
              <Card.Body>
                <Card.Title style={{ textAlign: "center" }}>
                  Home Cooked Comfort
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Projects;
