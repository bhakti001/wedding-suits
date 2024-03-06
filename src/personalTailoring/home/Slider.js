import React, { useState } from "react";
import Slider from "react-slick";
import Image from "../../components/home/Image"
const Texs = () => {
  const [dotActive, setDocActive] = useState(0);
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    speed: 300,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
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
          <div>
            <Image imgSrc={"https://www.peterposh.co.uk/wp-content/uploads/2023/12/consultation.jpeg"} className="s-one" />
          </div>
          <div>
            <Image imgSrc={"https://www.peterposh.co.uk/wp-content/uploads/2024/01/pt-stage-A.jpg"} className="s-two" />
          </div>
          <div>
            <Image imgSrc={"https://www.peterposh.co.uk/wp-content/uploads/2024/01/pt-stage-b2.jpg"} className="s-two" />
          </div>
          <div>
            <Image imgSrc={"https://www.peterposh.co.uk/wp-content/uploads/2024/01/pt-stage-c.jpg"} className="s-two" />
          </div>
          <div>
            <Image imgSrc={"https://www.peterposh.co.uk/wp-content/uploads/2024/01/pt-stage-F.jpg"} className="s-two" />
          </div>
        
      </Slider>
    </div>
  );
};

export default Texs;
