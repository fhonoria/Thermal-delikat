import React from "react";
import sample from "../images/sample_product.png";
import { Text } from "../containers/LanguageProvider";

function Products() {
  return (
    <div className="Products">
      <section>
        <div className="container">
          <h2>
            <Text tid="product-titel" />
          </h2>
          <div className="row">
            <div className="col-4">
              <img
                src={sample}
                alt="sample product"
                className="img-fluid"
              ></img>
              <h4>Termék neve</h4>
            </div>
            <div className="col-4">
              <img
                src={sample}
                alt="sample product"
                className="img-fluid"
              ></img>
              <h4>Termék neve</h4>
            </div>
            <div className="col-4">
              <img
                src={sample}
                alt="sample product"
                className="img-fluid"
              ></img>
              <h4>Termék neve</h4>
            </div>
            <div className="col-4">
              <img
                src={sample}
                alt="sample product"
                className="img-fluid"
              ></img>
              <h4>Termék neve</h4>
            </div>
            <div className="col-4">
              <img
                src={sample}
                alt="sample product"
                className="img-fluid"
              ></img>
              <h4>Termék neve</h4>
            </div>
            <div className="col-4">
              <img
                src={sample}
                alt="sample product"
                className="img-fluid"
              ></img>
              <h4>Termék neve</h4>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Products;
