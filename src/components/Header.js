import React from "react";
import { Navbar, Nav } from "react-bootstrap";

function Header() {
    return (
        <Navbar
        collapseOnSelect
        expand="lg"
        bg="none"
        variant="light"
        className="p-5"
      >
        <Navbar.Brand className="ml-5" href="/">
          Terrapin Christensen
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto mr-auto">
            <Nav.Link
              className="ml-4 mr-4"
              href="/#skills"
            >
              Skills
            </Nav.Link>
            <Nav.Link
              className="ml-4 mr-4"
              href="/#projects"
            >
              Projects
            </Nav.Link>
            <Nav.Link
              className="ml-4 mr-4"
              href="/#about"
            >
              About
            </Nav.Link>
            <Nav.Link
              className="ml-4 mr-4"
              href="/contact"
            >
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
}

export default Header;