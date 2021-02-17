import React, { useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { NavHashLink as NavLink } from "react-router-hash-link";

function Header() {
  const [hideResume, setHideResume] = useState(true);

  const changeLink = () => {
    if (window.scrollY >= 500) {
      setHideResume(false);
    } else {
      setHideResume(true);
    }
  };

  window.addEventListener("scroll", changeLink);

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      variant="light"
      className="navbar p-4"
      fixed="top"
    >
      <Navbar.Brand className="ml-5" href="/">
        Terrapin Christensen
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto mr-auto" style={{ paddingRight: "6rem" }}>
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
        <a
          className={hideResume ? "hashlink pr-2 resume-hide" : "hashlink pr-2 resume-show" }
          href="https://drive.google.com/uc?id=1W3Be9OTF7-eNMKt1TvDaFjmPh-FFDP2j&export=download"
        >
          Download Resume
        </a>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
