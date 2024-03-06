import React from "react";
import { FaFacebook, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
import FooterListTitle from "./FooterListTitle";
import './footer.css'
const Footer = () => {
  return (
    <div className="w-full bg-[#000] text-white py-20  fott">
      <div className="max-w-container mx-auto grid grid-cols-1 md:grid-cols-2  xl:grid-cols-6 px-4 gap-10">
        <div className="col-span-2">
       <Link to='/'><p className="text-4xl">P E T E R <br /> P O S H</p> </Link> 
          
        </div>
        <div>
          <FooterListTitle title="SELECT YOUR SHOWROOM"  />
          <ul className="flex flex-col gap-2">
            <li className="font-titleFont text-base text-lightText hover:text-gray-300  hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
             <select name="city" id="city" className="bg-black outline-none border-b-2">
              <option value="hello" className="text-white">Telford</option>
              <option value="hello" className="text-white">Telford</option>
              <option value="hello" className="text-white">Shrewsbury</option>
              <option value="hello" className="text-white">Birmingham</option>
              <option value="hello" className="text-white">Tettenhall</option>
              </select>
            </li>
            <li className="font-titleFont text-base text-lightText hover:text-gray-300 hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
            01952 201 117
            </li>
            <li className="font-titleFont text-base text-lightText hover:text-gray-300 hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
            telford@peterposh.co.uk
            </li>
        
          </ul>
        </div>
        <div>
          <FooterListTitle title="USEFUL LINKS" />
          <ul className="flex flex-col gap-2">
           <Link to='/FAQs/'> <li className="font-titleFont text-base text-lightText hover:text-gray-300 hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
             FAQs
            </li></Link>
          <Link to='/TradeLogin/'>  <li className="font-titleFont text-base text-lightText hover:text-gray-300 hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
          Trade Login 
            </li></Link>
          <Link to='/contactus/'>  <li className="font-titleFont text-base text-lightText hover:text-gray-300 hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
            Contact Us 
            </li></Link>
          <Link to='/PrivacyPolicy/' >  <li className="font-titleFont text-base text-lightText hover:text-gray-300 hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
            Privacy Policy
            </li></Link>
          <Link to='/TermsCondition/'>  <li className="font-titleFont text-base text-lightText hover:text-gray-300 hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
            Terms & Conditions
            </li></Link>
          </ul>
        </div>
        <div className="col-span-2 flex flex-col items-center w-full px-4">
          <FooterListTitle title="JOIN OUR NEWSLETTER." />
          <div className="w-full">
            <p className="text-center mb-4">
              A at pellentesque et mattis porta enim elementum.
            </p>

              <div className="w-full flex-col xl:flex-row flex justify-between items-center gap-4">
                <div className="flex flex-col w-full">
                  <input
                    className="w-full h-12 border-b border-gray-400 bg-transparent px-4 text-primeColor text-lg placeholder:text-base outline-none"
                    type="text"
                    placeholder="Insert your email ...*"
                  />
                 
                </div>
                <button
                  className="bg-white text-lightText text-black rounded-xl  w-[30%] h-10 hover:bg-black hover:text-white duration-300 text-base tracking-wide"
                >
                  Subscribe
                </button>
              </div>
            <div className="flex flex-col mt-4 gap-6">
           
           <ul className="flex items-center gap-2">
            <Link to='/'>   <li className="w-7 h-7 bg-primeColor text-gray-100 hover:text-white cursor-pointer text-lg rounded-full flex justify-center items-center hover:bg-black duration-300">
                 <FaFacebook />
               </li></Link>
             <Link to="/"> <li className="w-7 h-7 bg-primeColor text-gray-100 hover:text-white cursor-pointer text-lg rounded-full flex justify-center items-center hover:bg-black duration-300">
                 <FaYoutube />
               </li> </Link>
           </ul>
         </div>
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
