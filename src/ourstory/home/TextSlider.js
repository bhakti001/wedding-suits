        import React, { useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import Image from "../../components/home/Image";
import "./home.css"
import img1 from "../../assets/pra.jpg"
import img2 from "../../assets/pra2.jpg"
import img3 from "../../assets/pra3.jpg"
import img4 from "../../assets/pra4.jpg"
import img5 from "../../assets/pra5.jpg"
import img6 from "../../assets/pra6.jpg"
import img7 from "../../assets/pra7.jpg"
const TextSlider = () => {


  const [dotActive, setDocActive] = useState(0);
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
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
          dots: true,
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
    <div className="w-full  bg-black">
      <Slider {...settings}>
        <Link to="/ourstory">
          <div>
            <Image imgSrc={img1} className="s-oneour" />
          </div>
        </Link>
        <Link to="/ourstory">
          <div>
            <Image imgSrc={img2} className="s-oneour" />
          </div>
        </Link>
        <Link to="/ourstory">
          <div>
            <Image imgSrc={img3} className="s-oneour" />
          </div>
        </Link>
        <Link to="/ourstory">
          <div>
            <Image imgSrc={img4} className="s-oneour" />
          </div>
        </Link>
        <Link to="/ourstory">
          <div>
            <Image imgSrc={img5} className="s-oneour" />
          </div>
        </Link>
        <Link to="/ourstory">
          <div>
            <Image imgSrc={img6} className="s-oneour" />
          </div>
        </Link>
        <Link to="/ourstory">
          <div>
            <Image imgSrc={img7}  className="s-oneour"/>
          </div>
        </Link>
        
      </Slider>
    </div>
  )
}

export default TextSlider