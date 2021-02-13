import React, { useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { NavHashLink as NavLink } from "react-router-hash-link";

function Header() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      variant="light"
      className= "navbar p-4"
      fixed="top"
    >
      <Navbar.Brand className="ml-5" href="/">
        Terrapin Christensen
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto mr-auto">
          <NavLink className="ml-4 mr-4 hashlink" smooth to="/#skills">
            Skills
          </NavLink>
          <NavLink className="ml-4 mr-4 hashlink" smooth to="/#projects">
            Projects
          </NavLink>
          <NavLink className="ml-4 mr-4 hashlink" smooth to="/#about">
            About
          </NavLink>
          <Nav.Link className="ml-4 mr-4" href="/contact">
            Contact
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
