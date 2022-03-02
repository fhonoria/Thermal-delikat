import React from "react";
import sample from "../images/sample_product.png";

function Products() {
  return (
    <div className="Products">
      <h2>Termékek</h2>
      <div className="row">
        <div className="col-4">
          <img src={sample} alt="sample product" className="img-fluid"></img>
          <h4>Termék neve</h4>
        </div>
        <div className="col-4">
          <img src={sample} alt="sample product" className="img-fluid"></img>
          <h4>Termék neve</h4>
        </div>
        <div className="col-4">
          <img src={sample} alt="sample product" className="img-fluid"></img>
          <h4>Termék neve</h4>
        </div>
        <div className="col-4">
          <img src={sample} alt="sample product" className="img-fluid"></img>
          <h4>Termék neve</h4>
        </div>
        <div className="col-4">
          <img src={sample} alt="sample product" className="img-fluid"></img>
          <h4>Termék neve</h4>
        </div>
        <div className="col-4">
          <img src={sample} alt="sample product" className="img-fluid"></img>
          <h4>Termék neve</h4>
        </div>
      </div>
    </div>
  );
}

export default Products;
