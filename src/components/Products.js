import React from "react";
import { Text } from "../containers/LanguageProvider";
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

function Products() {
  return (
    <div className="Products">
      <section>
        <div className="container">
          <h2>
            <Text tid="product-titel" />
          </h2>
          <div className="row">
            <div className="col-6">
              <img
                src={paprika4}
                alt="sample product"
                className="img-fluid"
              ></img>
              <h4>
                <Text tid="paprika" />
              </h4>
            </div>
            <div className="col-6">
              <img
                src={paprikakrem2}
                alt="sample product"
                className="img-fluid"
              ></img>
              <h4>
                <Text tid="paprika-cream" />
              </h4>
            </div>
            <div className="col-6">
              <img src={pick4} alt="sample product" className="img-fluid"></img>
              <h4>
                <Text tid="salami" />
              </h4>
            </div>
            <div className="col-6">
              <img
                src={kolbasz}
                alt="sample product"
                className="img-fluid"
              ></img>
              <h4>
                <Text tid="sausage" />
              </h4>
            </div>
            <div className="col-6">
              <img src={bor2} alt="sample product" className="img-fluid"></img>
              <h4>
                <Text tid="wine" />
              </h4>
            </div>
            <div className="col-6">
              <img
                src={palinka5}
                alt="sample product"
                className="img-fluid"
              ></img>
              <h4>
                <Text tid="palinka" />
              </h4>
            </div>
            <div className="col-6">
              <img
                src={savanyusag2}
                alt="sample product"
                className="img-fluid"
              ></img>
              <h4>
                <Text tid="pickles" />
              </h4>
            </div>
            <div className="col-6">
              <img
                src={teszta3}
                alt="sample product"
                className="img-fluid"
              ></img>
              <h4>
                <Text tid="pasta" />
              </h4>
            </div>
            <div className="col-6">
              <img
                src={lekvar2}
                alt="sample product"
                className="img-fluid"
              ></img>
              <h4>
                {" "}
                <Text tid="jam" />
              </h4>
            </div>
            <div className="col-6">
              <img src={mez3} alt="sample product" className="img-fluid"></img>
              <h4>
                <Text tid="honey" />
              </h4>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Products;
