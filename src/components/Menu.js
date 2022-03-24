import React from "react";
import "./Menu.css";
import { Link } from "react-scroll";
import { Navbar, Nav } from "react-bootstrap";
import logo from "../images/logo.png";
import { Text } from "../containers/LanguageProvider";
import LanguageSelector from "./LanguageSelector";

function Menu() {
  return (
    <div className="Menu">
      <Navbar bg="light" expand="lg">
        <img src={logo} alt="logo" className="img-fluid logo"></img>
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
              <Nav.Link>
                <Text tid="menu-intro" />
              </Nav.Link>
            </Link>
            <Link
              to="products"
              spy={true}
              smooth={true}
              duration={300}
              className="menu-link"
              activeClass="link-active"
            >
              <Nav.Link>
                <Text tid="menu-product" />
              </Nav.Link>
            </Link>
            <Link
              to="team"
              spy={true}
              smooth={true}
              duration={300}
              className="menu-link"
              activeClass="link-active"
            >
              <Nav.Link>
                <Text tid="menu-team" />
              </Nav.Link>
            </Link>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              duration={300}
              className="menu-link"
              activeClass="link-active"
            >
              <Nav.Link>
                <Text tid="menu-contact" />
              </Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
        <LanguageSelector />
      </Navbar>
    </div>
  );
}

export default Menu;
