import React from "react";
import logo from "../images/logo.png";
import { Text } from "../containers/LanguageProvider";

function Introduction() {
  return (
    <div className="Introduction">
      <section>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <h2 className="text-center">
                <Text tid="introduction-titel" />
              </h2>

              <p className="text-center lh-lg">
                <Text tid="intro-text" />
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
