import React from "react";
import "./Menu.css";
import { Link } from "react-scroll";
import { Navbar, Container, Nav } from "react-bootstrap";

function Menu() {
  return (
    <div className="Menu">
      <Navbar bg="light" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link
              to="introduction"
              spy={true}
              smooth={true}
              duration={300}
              className="menu-link"
              activeClass="link-active"
            >
              <Nav.Link>Bemutatkozás</Nav.Link>
            </Link>
            <Link
              to="products"
              spy={true}
              smooth={true}
              duration={300}
              className="menu-link"
              activeClass="link-active"
            >
              <Nav.Link>Termékek</Nav.Link>
            </Link>
            <Link
              to="team"
              spy={true}
              smooth={true}
              duration={300}
              className="menu-link"
              activeClass="link-active"
            >
              <Nav.Link>Rólunk</Nav.Link>
            </Link>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              duration={300}
              className="menu-link"
              activeClass="link-active"
            >
              <Nav.Link>Elérhetőség</Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Menu;
