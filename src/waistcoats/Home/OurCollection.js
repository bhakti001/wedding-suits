import React from "react";
import "../../ourstory/home/ourcollection.css";
import Slidersh from "./Slider";
const OurCollection = (props) => {
  return (
    <>
      <div className="main-wcol ">
        <div className="ma-ourco">
          <div className="our-collection">
            <p className="our-otcol">{props.onetext}</p>
            <p className="our-oscol">{props.setext}</p>
            <button className="our-btncol">VIEW ALL</button>
          </div>
        <Slidersh />
        </div>
      </div>
    </>
  );
};

export default OurCollection;
