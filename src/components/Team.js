import React from "react";
import photo_FCS from "../images/FCS.jpg";
import photo_FKT from "../images/FKT.jpg";
import { Text } from "../containers/LanguageProvider";

function Team() {
  return (
    <div className="Team">
      <section>
        <div className="container">
          <h2>
            <Text tid="team-titel" />
          </h2>
          <div className="row">
            <div className="col-6">
              <img
                src={photo_FCS}
                alt="Fraszt Csaba"
                className="img-fluid w-50"
              ></img>
              <p>
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
              <img
                src={photo_FKT}
                alt="Frasztné Kovács Tünde"
                className="img-fluid w-50"
              ></img>
              <p>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum."
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Team;
