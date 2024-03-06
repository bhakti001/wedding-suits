import React from "react";
import "./personaltailoring.css";
import Home from "./home/Home";
import Map from "../components/home/Map";
import Textcon from "./home/Textcon";
import './personaltailoring.css'
import Slidercombine from "./home/Slidercombine";
import Form from "./home/Form";
const PersonalTailoring = () => {
  return (
    <>
      <Home />
      <Textcon
        text1={
          "Creating you perfect suit couldn’t be easier. Simply choose a cloth from our extensive collection and personalise it with different options. We have everything to make your wedding suit personal to you."
        }
        text2={"Simple. Stylish. Unique."}
      />
      <Slidercombine/>
      <Form/>
        <div className="mt-[-280px] relative showroom-map">
        <Map />
      </div>
    </>
  );
};
export default PersonalTailoring;
