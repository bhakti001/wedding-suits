import React, {  } from 'react'
import Slider from 'react-slick';
import './ourcollection.css'
import img3 from '../../assets/slimg.png'
import img1 from '../../assets/slimg1.png'
import img2 from '../../assets/slimg2.png'
import img4 from '../../assets/slimg3.png'
import Image from '../../components/home/Image'
const Slidersh = () => {
var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    arrows: false,
    autoplay: true,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="slider-container bg-[#cc5028] ">
      <Slider {...settings}>
        <div>
         <Image imgSrc={img1} className="slide-oneour" />
        </div>
        <div>
        <Image imgSrc={img2} className="slide-oneour" />

        </div>
        <div>
        <Image imgSrc={img3} className="slide-oneour " />

        </div>
        <div>
        <Image imgSrc={img4} className="slide-oneour" />

        </div>
       
 
      </Slider>
    </div>
  )
}

export default Slidersh