import React from "react";
import "./Introduction.css";
import logo from "../images/thermaldelikat.png";

function Introduction(props) {
  let content = {
    Magyar: {
      title: "Bemutatkozás",
      description:
        "A Thermál Delikát 2022 márciusában nyitotta meg kapuit a Bükfürdőre látogatók előtt. Delikáteszünkben minden jelentős magyar delikát termék megtalálható prémium minőségben. A jól ismert márkák mellett helyi termelők termékei is a polcra kerültek. Szeretettel várunk minden kedves vásárlót, akik magukkal vinnének egy kis darabot Bükfürdő és környéke ízeiből.",
    },
    Deutsch: {
      title: "Unser Laden",
      description:
        "Im März 2022 öffnete Thermál Delikàt seine Türen neben der Therme Bükfürdő. In unserem Laden finden Sie neben den bekannten Marken der ungarischen Küche, exklusive Produkte von lokal ansässigen Herstellern, die wir für unseren Markt gewinnen konnten. Unser Ziel ist es, jedem Besucher den Geschmack von Bükfürdö näherzubringen und dieses Erlebnis mit nach Hause zu nehmen.",
    },
    English: {
      title: "Introduction",
      description:
        "Thermál Delikát opened its doors  in March 2022 within striking distance to the Bükfürdő Thermal & Spa. In our store you will find not only the well-known brands of Hungarian delicatessen but also the products of the local producers in premium quality. We welcome all our dear customers, who would like to take a small piece of Bükfürdő´s flavors with them.",
    },
    Čeština: {
      title: "Představení",
      description:
        "Thermal Delikát otevřelo návěstníkům své brány v březnu 2022. V našem obchodě najdete širokou nabídkou delikátních produktů v prémiové kvalitě. Kromě známých značek na našich pultech najdete také produkty od místních výrobců. Srdečné vítáme všechny zákazníky, kteří by vzali s sebou malou ochutnávku z Bükfürdő a z jeho okolí.",
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
          <h2 className="text-center">{content.title}</h2>
          <img
            src={logo}
            alt="Thermál delikát logo"
            className="img-fluid"
          ></img>
          <p className="text-center lh-lg">{content.description}</p>
        </div>
      </section>
    </div>
  );
}

export default Introduction;
