import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="Navbar">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-item nav-link active" href="/">
              Kezdölap
            </a>
            <a class="nav-item nav-link" href="/">
              Bemutatkozás
            </a>
            <a class="nav-item nav-link" href="/">
              Rólunk
            </a>
            <a class="nav-item nav-link " href="/">
              Termékek
            </a>
            <a class="nav-item nav-link " href="/">
              Elérhetöség
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
