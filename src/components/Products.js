import React from "react";

import "./Products.css";
import paprika4 from "../images/paprika-4.jpeg";
import paprikakrem2 from "../images/paprikakrem.jpeg";
import pick4 from "../images/pick-4.jpeg";
import savanyusag2 from "../images/savanyusag-2.jpeg";
import teszta3 from "../images/teszta-3.jpeg";
import lekvar2 from "../images/lekvar-2.jpeg";
import bor2 from "../images/bor-2.jpg";
import palinka5 from "../images/palinka-5.jpeg";
import mez3 from "../images/mez-3.jpeg";
import kolbasz from "../images/kolbasz-2.jpeg";
import csoki2 from "../images/csoki2.jpeg";

function Products(props) {
  let content = {
    Magyar: {
      producttitel: "Termékek",
      paprika: "Fűszerpaprikák",
      paprikacream: "Paprika krémek",
      salami: "Pick szalámi",
      pickles: "Savanyúságok",
      pasta: "Tészták",
      jam: "Házi lekvárok",
      wine: "Borok",
      palinka: "Pálinkák",
      honey: "Mézek",
      sausage: "Kolbászok",
      chocolate: "Bükfürdő csoki és borok",
      exlusive: "Kizárólag nálunk kapható",
    },
    Deutsch: {
      producttitel: "Produkte",
      paprika: "Gewürzpaprika",
      paprikacream: "Paprikacreme",
      salami: "Pick Salami",
      pickles: "Sauergemüse",
      pasta: "Teigwaren",
      jam: "hausgemachte Marmelade",
      wine: "Wein",
      palinka: "Palinka",
      honey: "Honig",
      sausage: "Wurst",
      chocolate: "Bükfürdő Schokolade und Wein",
      exlusive: "Nur bei uns erhältlich",
    },
    English: {
      producttitel: "Products",
      paprika: "paprika powder",
      paprikacream: "paprika cream",
      salami: "Pick salami",
      pickles: "pickles",
      pasta: "pasta",
      jam: "home-made jam",
      wine: "wine",
      palinka: "palinka",
      honey: "honey",
      sausage: "sausage",
      chocolate: "Bükfürdő chocolate and wine",
      exlusive: "Only available in our store",
    },
    Čeština: {
      producttitel: "Produkty",
      paprika: "Mletá paprika",
      paprikacream: "Paprikové pasty a krémy",
      salami: "Pick Uherský salám",
      pickles: "Nakládané zeleniny",
      pasta: "Těstoviny",
      jam: "Domácí marmelády",
      wine: "Vína",
      palinka: "Destiláty",
      honey: "Medy",
      sausage: "Klobásy",
      chocolate: "Čokolády a vína Bükfürdő",
      exlusive: "Only available in our store",
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
    <div className="Products">
      <section>
        <div className="container">
          <h2>{content.producttitel}</h2>
          <div className="row">
            <div className="col-sm-6">
              <img
                src={paprika4}
                alt="sample product"
                className="img-fluid"
              ></img>
              <h4>{content.paprika}</h4>
            </div>
            <div className="col-sm-6">
              <img
                src={paprikakrem2}
                alt="sample product"
                className="img-fluid"
              ></img>
              <h4>{content.paprikacream}</h4>
            </div>
            <div className="col-sm-6">
              <img src={pick4} alt="sample product" className="img-fluid"></img>
              <h4>{content.salami}</h4>
            </div>
            <div className="col-sm-6">
              <img
                src={kolbasz}
                alt="sample product"
                className="img-fluid"
              ></img>
              <h4>{content.sausage}</h4>
            </div>
            <div className="col-sm-6">
              <img src={bor2} alt="sample product" className="img-fluid"></img>
              <h4>{content.wine}</h4>
            </div>
            <div className="col-sm-6">
              <img
                src={palinka5}
                alt="sample product"
                className="img-fluid"
              ></img>
              <h4>{content.palinka}</h4>
            </div>
            <div className="col-sm-6">
              <img
                src={savanyusag2}
                alt="sample product"
                className="img-fluid"
              ></img>
              <h4>{content.pickles}</h4>
            </div>
            <div className="col-sm-6">
              <img
                src={teszta3}
                alt="sample product"
                className="img-fluid"
              ></img>
              <h4>{content.pasta}</h4>
            </div>
            <div className="col-sm-6">
              <img
                src={lekvar2}
                alt="sample product"
                className="img-fluid"
              ></img>
              <h4> {content.jam}</h4>
            </div>
            <div className="col-sm-6">
              <img src={mez3} alt="sample product" className="img-fluid"></img>
              <h4>{content.honey}</h4>
            </div>
            <div className="col-12">
              <img
                src={csoki2}
                alt="sample product"
                className="img-fluid"
              ></img>
              <h4>{content.chocolate}</h4>
              <p>{content.exlusive}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Products;
