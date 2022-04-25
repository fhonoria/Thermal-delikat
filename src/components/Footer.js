import React from "react";

function Footer(props) {
  let content = {
    Magyar: {
      coded1: "A weboldalt készítette",
    },
    Deutsch: {
      coded1: "Die Webseite wurde von",
      coded2: "entwickelt",
    },
    English: {
      coded1: "This website was coded by",
    },
    Čeština: {
      coded1: "Webovú stránku programovala",
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
    <div className="Footer">
      <footer className="footer  py-3 bg-light">
        <div className="container">
          <div className="text-muted text-center">
            {content.coded1} {}
            <a href="https://www.vhis-web.de/" target="_blank" rel="noreferrer">
              vHiS-web
            </a>
            {} {content.coded2}
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
