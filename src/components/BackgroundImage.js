import React from "react";
import "./BackgroundImage.css";
import salamiWine from "../images/salami_with_wine.jpg";

function BackgroundImage() {
  return (
    <div>
      <div className="background-image">
        <div
          className="salami"
          style={{ backgroundImage: `url(${salamiWine})` }}
        ></div>
      </div>
    </div>
  );
}

export default BackgroundImage;
