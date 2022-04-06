import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ScrollToTop from "react-scroll-to-top";
import { Element } from "react-scroll";
import Menu from "./components/Menu";
import BackgroundImage from "./components/BackgroundImage";
import Introduction from "./components/Introduction";
import Team from "./components/Team";
import Products from "./components/Products";
import Contact from "./components/Contact";
import { LanguageProvider } from "./containers/LanguageProvider";

function App() {
  return (
    <LanguageProvider>
      <div className="App">
        <ScrollToTop smooth color="#000000" />
        <Menu />
        <BackgroundImage />
        <div className="container titel text-center">
          <h1>THERMÁL DELIKÁT</h1>
          <h2>
            <em>Megnyitottunk!</em>
          </h2>
        </div>

        <React.Fragment>
          <Element id="introduction" name="introduction-destination">
            <Introduction />
          </Element>
          <Element id="products" name="products-destination">
            <Products />
          </Element>
          <Element id="team" name="team-destination">
            <Team />
          </Element>
          <Element id="contact" name="contact-destination">
            <Contact />
          </Element>
        </React.Fragment>
      </div>
      <footer className="footer  py-3 bg-light">
        <div className="container">
          <div className="text-muted text-center">
            Weboldalt programozta {}
            <a href="https://www.vhis-web.de/" target="_blank">
              vHiS-web
            </a>
          </div>
        </div>
      </footer>
    </LanguageProvider>
  );
}

export default App;
