import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ScrollToTop from "react-scroll-to-top";
import { Element } from "react-scroll";
import { BrowserRouter as Router } from "react-router-dom";
import Menu from "./components/Menu";
import BackgroundImage from "./components/BackgroundImage";
import Introduction from "./components/Introduction";
import Team from "./components/Team";
import Products from "./components/Products";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App(props) {
  let languageStoredInLocalStorage = localStorage.getItem("language");
  let [language, setLanguage] = useState(
    languageStoredInLocalStorage ? languageStoredInLocalStorage : "Magyar"
  );

  let content = {
    Magyar: {
      open: "Megnyitottunk",
    },
    Deutsch: {
      open: "Neueröffnung",
    },
    English: {
      open: "We are open",
    },
    Čeština: {
      open: "Otevřeli jsme prodejnu",
    },
  };

  language === "Deutsch"
    ? (content = content.Deutsch)
    : language === "English"
    ? (content = content.English)
    : language === "Čeština"
    ? (content = content.Čeština)
    : (content = content.Magyar);

  return (
    <div className="App">
      <Router>
        <ScrollToTop smooth color="#000000" />
        <Menu
          language={language}
          handleSetLanguage={(language) => {
            setLanguage(language);
            storeLanguageInLocalStorage(language);
          }}
        />
        <BackgroundImage />
        <div className="container titel text-center">
          <h1>THERMÁL DELIKÁT</h1>
        </div>

        <React.Fragment>
          <Element id="introduction" name="introduction-destination">
            <Introduction language={language} />
          </Element>
          <Element id="products" name="products-destination">
            <Products language={language} />
          </Element>
          <Element id="team" name="team-destination">
            <Team language={language} />
          </Element>
          <Element id="contact" name="contact-destination">
            <Contact language={language} />
          </Element>
        </React.Fragment>
        <Footer language={language} />
      </Router>
    </div>
  );
}

function storeLanguageInLocalStorage(language) {
  localStorage.setItem("language", language);
}

export default App;
