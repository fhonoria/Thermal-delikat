import React from "react";
import photo_FCS from "../images/FCS.jpg";
import photo_FKT from "../images/FKT.jpg";
import { Text } from "../containers/LanguageProvider";
import "./Team.css";

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
                src={photo_FKT}
                alt="Frasztné Kovács Tünde"
                className="img-fluid w-50"
              ></img>
              <h4>Tündi</h4>
              <p>
                <Text tid="team1-text" />
              </p>
            </div>
            <div className="col-6">
              <img
                src={photo_FCS}
                alt="Fraszt Csaba"
                className="img-fluid w-50"
              ></img>
              <h4>Csabi</h4>
              <p>
                <Text tid="team2-text" />
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Team;
