import React, { useState } from "react";
import Slider from "react-slick";
const Tests = () => {
  const [dotActive, setDocActive] = useState(0);
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    speed: 250,
    autoplaySpeed: 2000,
    slidesToScroll: 1,
    arrows: false,
    beforeChange: (prev, next) => {
      setDocActive(next);
    },
    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "7%",
          transform: "translateY(-50%)",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={
          i === dotActive
            ? {
                width: "30px",
                color: "#262626",
                borderRight: "3px #262626 solid",
                padding: "8px 0",
                cursor: "pointer",
              }
            : {
                width: "30px",
                color: "transparent",
                borderRight: "3px white solid",
                padding: "8px 0",
                cursor: "pointer",
              }
        }
      >
        0{i + 1}
      </div>
    ),
    responsive: [
      {
        breakpoint: 576,
        settings: {
          dots: false,
          appendDots: (dots) => (
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "2%",
                transform: "translateY(-50%)",
              }}
            >
              <ul style={{ margin: "0px" }}> {dots} </ul>
            </div>
          ),
          customPaging: (i) => (
            <div
              style={
                i === dotActive
                  ? {
                      width: "25px",
                      color: "#262626",
                      borderRight: "3px #262626 solid",
                      cursor: "pointer",
                      fontSize: "12px",
                    }
                  : {
                      width: "25px",
                      color: "transparent",
                      borderRight: "3px white solid",
                      cursor: "pointer",
                      fontSize: "12px",
                    }
              }
            >
              0{i + 1}
            </div>
          ),
        },
      },
    ],
  };
  return (
    <div className="w-full  slider-im bg-white">
      <Slider {...settings}>
        <div className="img1-bg">
          <p className="img1-text1">  1. Book Your <br /> Consultation  </p>
          <p className="img1-text2">3 piece suits start from £250.</p>
          <p className="img1-text3">Book your consultation to view the range.</p>
          <button className="img1-btn">Book A VISIT</button>
        </div>
        <div className="img2-bg">
        <p className="img1-text1">   2. Make Your <br /> Selections  </p>
          <p className="img1-text2">
              Visit one of our showrooms to choose the style and fit of your suit. You can also select your cloth, <br /> lining, buttons, embroidery and more.            </p>
          <p className="img1-text3">Book your consultation to view the range.</p>
          <button className="img1-btn">Book A VISIT</button>
        </div>
        <div className="img3-bg">
        <p className="img1-text1">  3. Final Fitting   </p>
          <p className="img1-text2">
              Your second consultation will focus on getting your final fitting just right.            </p>
          <p className="img1-text3">Book your consultation to view the range.</p>
          <button className="img1-btn">Book A VISIT</button>
        </div>
        <div className="img4-bg">
        <p className="img1-text1">   4. To The Sewing <br /> Machine    </p>
          <p className="img1-text2">
              Once everything is fitting just right, we send all your measurements to our expert tailors to be <br /> made to your specifications.             </p>
          <p className="img1-text3">Book your consultation to view the range.</p>
          <button className="img1-btn">Book A VISIT</button>
        </div>
        <div className="img5-bg">
        <p className="img1-text1">   5. Pick Up Your Suit  </p>
          <p className="img1-text2">It's time to collect your suit!</p>
          <p className="img1-text3">Book your consultation to view the range.</p>
          <button className="img1-btn">Book A VISIT</button>
        </div>
      </Slider>
    </div>
  );
};

export default Tests;
