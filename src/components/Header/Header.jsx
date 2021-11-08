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
        return;
    }
  }, []);

  return (
    <div className="header">
      <Navbar bg="dark" expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="layout-navbar" />
          <Navbar.Collapse id="layout-navbar">
            <Navbar.Brand>TC</Navbar.Brand>
            <Navbar.Text>
              Current Page:{" "}
              <NavDropdown title={title}>
                <NavDropdown.Item href="/web">Web Developer</NavDropdown.Item>
                <NavDropdown.Item href="/game">Game Developer</NavDropdown.Item>
                <NavDropdown.Item href="product">
                  Product Manager
                </NavDropdown.Item>
                <NavDropdown.Item href="/music">Musician</NavDropdown.Item>
              </NavDropdown>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
