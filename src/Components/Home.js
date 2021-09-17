import React from "react";
import "../CSS/Home.css";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import Product from "./Product";

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
      <div className="home_container">
        <div className="container">
          <button onClick={backward}>
            <ArrowBackIosIcon />
          </button>
          <button onClick={forward}>
            <ArrowForwardIosIcon />
          </button>
        </div>

        <div className="home_row">
          <Product
            id="100"
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses"
            price={521}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400.jpg"
            rating={3}
          />
          <Product
            id="101"
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={44721}
            image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
            rating={4}
          />
        </div>
        <div className="home_row">
          <Product
            id="105"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128 GB)- Silver (4th Generation)"
            price={89900}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
            rating={4}
          />
          <Product
            id="103"
            title="Amazon Echo (3rd Gen) | Smart Speaker with Alexa, Charcoal Fabric"
            price={3499}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex25"
            rating={5}
          />
        </div>
        <div className="home_row">
          <Product
            id="104"
            title="Redgear Shadow Blade Mechanical Keyboard with Spectrum LED Lights, Media Control Knob and Wrist Support (Black), Full Size (MK853)"
            price={2499}
            image="https://images-na.ssl-images-amazon.com/images/I/61-4RGnmC1L._SL1500_.jpg"
            rating={4}
          />
          <Product
            id="102"
            title="Samsung 32 Inch UHD Sleek Curved Monitor with Three Side Bezel Less & 1 Billion Colors - LU32R590CWWXXL"
            price={32499}
            image="https://images-na.ssl-images-amazon.com/images/I/81udIAoR6tL._SL1500_.jpg"
            rating={3}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
