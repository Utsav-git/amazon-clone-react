import React from "react";
import "../CSS/Home.css";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const Home = () => {
  var image = [
    "https://m.media-amazon.com/images/I/51jKifqW4XL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/61FuWeCuGCL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/71bErcVZodL._SX3000_.jpg",
  ];
  var index = 0;

  const forward = () => {
    index++;
    if (index > image.length - 1) {
      index = 0;
    }
    document.querySelector(
      ".container"
    ).style.backgroundImage = `url(${image[index]})`;
  };
  const backward = () => {
    index--;
    if (index < 0) {
      index = image.length - 1;
    }
    document.querySelector(
      ".container"
    ).style.backgroundImage = `url(${image[index]})`;
  };

  return (
    <div className="home">
      {/* <div className="slider_container"> */}
      <div className="container">
        <button onClick={backward}>
          <ArrowBackIosIcon />
        </button>
        <button onClick={forward}>
          <ArrowForwardIosIcon />
        </button>
      </div>
      {/* </div> */}
    </div>
  );
};

export default Home;
