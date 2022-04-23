import React from "react";
import photo_FCS from "../images/FCS.jpg";
import photo_FKT from "../images/FKT.jpg";
import "./Team.css";

function Team(props) {
  let content = {
    Magyar: {
      teamtitel: "Rólunk",
      tunditext:
        "A delikát társalapítója. Minden nap egy mosollyal és határtalan kedvességgel várja a vásárlókat.",
      csabitext:
        "A bolt megálmodója és kivitelezője, a szalámik és kolbászok beszállítója. A hét vége felé találkozhatsz vele a boltban.",
    },
    Deutsch: {
      teamtitel: "Über uns",
      tunditext:
        "Sie empfängt jeden mit einem herzlichen Lächeln und berät Sie gerne.",
      csabitext:
        "Er hat seine Leidenschaft beruflich verwirklicht und seinen eigenen Delikatessen Laden eröffnet.",
    },
    English: {
      teamtitel: "About us",
      tunditext:
        "She welcomes all customers with a warm smile and is happy to advise you.",
      csabitext:
        "He turned his passion into a career and opened his own delicatessen store.",
    },
    Čeština: {
      teamtitel: "O nás",
      tunditext:
        "Spoluzakladatelka vždy Vás čeká s bezmeznou ochotou a úsměvem.",
      csabitext:
        "Zakladatele obchodu a dodavatele poctivých uzeniny můžete potkat v prodejně ke konci týdne.",
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
    <div className="Team">
      <section>
        <div className="container">
          <h2>{content.teamtitel}</h2>
          <div className="row">
            <div className="col-sm-6">
              <img
                src={photo_FCS}
                alt="Fraszt Csaba"
                className="img-fluid w-sm-50"
              ></img>
              <h4>Csabi</h4>
              <p>{content.csabitext}</p>
            </div>
            <div className="col-sm-6">
              <img
                src={photo_FKT}
                alt="Frasztné Kovács Tünde"
                className="img-fluid w-sm-50"
              ></img>
              <h4>Tündi</h4>
              <p>{content.tunditext}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Team;
