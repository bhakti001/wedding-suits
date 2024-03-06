import React from "react";
import "./showroom.css";
import Home from "./home/Home";
import Map from "../components/home/Map";
import Telford from "./home/Telford";
import Shrewsbury from "./home/Shrewsbury";
import Tettenhall from "./home/Tettenhall";
import Knutsford from "./home/Knutsford";
import Birmingham from "./home/Birmingham";
import Warwick from "./home/Warwick";
import Cheltenham from "./home/Cheltenham";
const Showroom = () => {
  return (
    <>
      <Home />
      <div className="mt-[-280px] showroom-map">
        <Map />
      </div>
      <Telford/>
      <Shrewsbury/>
      <Tettenhall/>
      <Knutsford/>
      <Birmingham/>
      <Warwick/>
      <Cheltenham/>
    </>
  );
};

export default Showroom;
