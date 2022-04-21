import React from "react";
import "./Introduction.css";
import logo from "../images/logo2.png";

function Introduction(props) {
  let content = {
    Magyar: {
      title: "Bemutatkozás",
      description:
        "A Thermál Delikát 2022 márciusában nyitotta meg kapuit a Bükfürdőre látogatók előtt. Üzletünkben minden jelentős magyar delikát termék megtalálható prémium minőségben. A jól ismert márkák mellett helyi termelők termékei is a polcra kerültek. Szeretettel várunk minden kedves vásárlót, akik magukkal vinnének egy kis darabot Bükfürdő és környéke ízeiből.",
    },
    Deutsch: {
      title: "Unser Laden",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    English: {
      title: "Introduction",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    Čeština: {
      title: "Introduction",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
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
    <div className="Introduction">
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h2 className="text-center">{content.title}</h2>
              <img
                src={logo}
                alt="logo"
                className="img-fluid w-75 d-lg-none d--block"
              ></img>
              <p className="text-center lh-lg">{content.description}</p>
            </div>
            <div className="col-6 align-self-center d-none d-lg-block">
              <img src={logo} alt="logo" className="img-fluid w-75 "></img>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Introduction;
