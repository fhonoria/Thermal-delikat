import React from "react";
import "./Slideshow.css";

const images = [
  `https://images.pexels.com/photos/5975510/pexels-photo-5975510.jpeg?auto=compress&cs=tinysrgb&dpr=2`,
  `https://images.pexels.com/photos/107556/pexels-photo-107556.jpeg?auto=compress&cs=tinysrgb&dpr=2`,
  `https://images.pexels.com/photos/4639328/pexels-photo-4639328.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`,
  `https://agraragazat.hu/wp-content/uploads/2021/03/palinka_nyito_20210326.jpg`,
];
const delay = 4000;

function Slideshow() {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {};
  }, [index]);

  return (
    <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {images.map((shownImage, index) => (
          <div className="slide" key={index}>
            <img
              src={shownImage}
              alt="slider"
              style={{ height: 650, width: 940 }}
            ></img>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Slideshow;
