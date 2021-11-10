import React, { useState, useEffect } from "react";

// Bootstrap
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Container } from "react-bootstrap";

// Styling
import "./Header.css";

function Header({ type }) {
  const [title, setTitle] = useState("");

  useEffect(() => {
    switch (type) {
      case "Web":
        setTitle("Web Developer");
        break;
      case "Game":
        setTitle("Game Developer");
        break;
      case "Product":
        setTitle("Product Manager");
        break;
      case "Music":
        setTitle("Musician");
        break;
      default:
        setTitle("Select Page");
        return;
    }
  }, []);

  return (
    <div className="header">
      <Navbar bg="dark" expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="layout-navbar" />
          <Navbar.Collapse id="layout-navbar">
            <Nav>
              <div className="header-logo">
                <Navbar.Brand>TC</Navbar.Brand>
              </div>
              <div className="header-select">
                <div className="current">Current Page:</div>
                <NavDropdown title={title}>
                  <NavDropdown.Item href="/web">Web Developer</NavDropdown.Item>
                  <NavDropdown.Item href="/game">
                    Game Developer
                  </NavDropdown.Item>
                  <NavDropdown.Item href="product">
                    Product Manager
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/music">Musician</NavDropdown.Item>
                </NavDropdown>
              </div>
              <div className="header-projects">
                <Nav.Item>Projects</Nav.Item>
              </div>
              <div className="header-contact">
                <Nav.Item>Contact</Nav.Item>
              </div>
              <div className="header-download">
                <Nav.Item>
                  <a>Download Resume</a>
                </Nav.Item>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
