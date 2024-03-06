import React from "react";
import "./boyssuits.css";
import Home from "./home/Home";
import Textcon from "../personalTailoring/home/Textcon";
import Tailoring from "./home/Tailoring";
import Showroom from "./home/Showroom";
import OurCollection from "../ourstory/home/OurCollection";
import Aimage from "./home/Aimage";
const BoysSuits = () => {
  return (
    <>
      <Home />
      <Textcon
        text1={
          "We know how important it is to have suits for boys that match the adult offerings, that's why they are available on the majority of our hire range. This includes waistcoats, shirts, neckwear, top hats and much more, all available in a wide variety of colours and styles."
        }
        text2={""}
      />
      <Aimage/>
      <Showroom/>
      <Tailoring/>
      <OurCollection onetext={"Our collections"} setext={"We started our business in 1990"}/>
      
    </>
  );
};

export default BoysSuits;
