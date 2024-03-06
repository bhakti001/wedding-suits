import React from "react";
import "./home.css";
import Collection from "./Collection";
import Ownsuit from "./Ownsuit";
import Map from "./Map";
import Banner from "./Slider";
import Instagram from "./Instagram";
import Navback from "../navbar/Navback";
import Welcome from "./Welcome";
const Home = () => {
  return (
   <> <Navback/>
    <Welcome/>
     <Collection/>
     <Ownsuit/>
     <Map/>
<Banner/>
<Instagram/>
    </>
  );
};

export default Home;
