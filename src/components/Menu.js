import React from "react";
import "./Menu.css";
import { Link } from "react-scroll";
import { Navbar, Nav } from "react-bootstrap";
import logo from "../images/logo.png";

function Menu(props) {
  let content = {
    Magyar: {
      intro: "Bemutatkozás",
      product: "Termékek",
      team: "Rólunk",
      contact: "Elérhetőség",
    },
    Deutsch: {
      intro: "Unser Laden",
      product: "Produkte",
      team: "Über uns",
      contact: "Kontakt",
    },
    English: {
      intro: "Introduction",
      product: "Products",
      team: "About",
      contact: "Contact",
    },
    Čeština: {
      intro: "Introduction",
      product: "Products",
      team: "About",
      contact: "Contact",
    },
  };

  props.language === "Deutsch"
    ? (content = content.Deutsch)
    : props.language === "English"
    ? (content = content.English)
    : props.language === "Čeština"
    ? (content = content.Čeština)
    : (content = content.Magyar);

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
              <Nav.Link>{content.intro}</Nav.Link>
            </Link>
            <Link
              to="products"
              spy={true}
              smooth={true}
              duration={300}
              className="menu-link"
              activeClass="link-active"
            >
              <Nav.Link>{content.product}</Nav.Link>
            </Link>
            <Link
              to="team"
              spy={true}
              smooth={true}
              duration={300}
              className="menu-link"
              activeClass="link-active"
            >
              <Nav.Link>{content.team}</Nav.Link>
            </Link>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              duration={300}
              className="menu-link"
              activeClass="link-active"
            >
              <Nav.Link>{content.contact}</Nav.Link>
            </Link>
          </Nav>
          <div className="language-select">
            <select
              className="customer-select"
              value={props.language}
              onChange={(e) => props.handleSetLanguage(e.target.value)}
            >
              <option>Magyar</option>
              <option>Deutsch</option>
              <option>English</option>
              <option>Čeština</option>
            </select>
          </div>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Menu;
