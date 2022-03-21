import React from "react";
import logo from "../images/logo.png";

function Introduction() {
  return (
    <div className="Introduction">
      <section>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <h2 className="text-center">Bemutatkozás</h2>

              <p className="text-center">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum."
              </p>
            </div>
            <div className="col-6">
              <img src={logo} alt="logo" className="img-fluid w-75"></img>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Introduction;
