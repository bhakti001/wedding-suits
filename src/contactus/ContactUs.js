import React from "react";
import Home from "./home/Home";
import ContactUsPage from "./home/ContactUsPage";
import Map from "../components/home/Map";
import ThreeImg from "./home/ThreeImg";
import "./contactus.css";
const ContactUs = () => {
  return (
    <>
      <Home />
      <ContactUsPage
        title={"Contact Us"}
        text1={"Our friendly showroom teams are ready to assist you."}
        text2={`Simply fill in your details here or if you prefer, give us a call 
              at our showrooms below.`}
      />
      <div className="mt-[-280px]  ">
        <Map />
      </div>
      <ThreeImg />
    </>
  );
};

export default ContactUs;
