import React from "react";
import './contactuspage.css'
import { FaFacebookF } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
const ContactUsPage = (props) => {
  return (
    <>
      <div className="main-page">
        <div className="main-contact">
          <div className="text-contact">
            <h3 className="contact-h3">{props.title} 
            <br />
            {props.title2}
            </h3>
            <p className="contact-p1">{props.text1}</p>
            <p className="contact-p2">
              Simply fill in your details here or if you prefer, give us a call <br />
              at our showrooms below.
            </p>
            <button className="contact-btn">IN THE TRADE?</button>
            <div className="social-mia">
              <FaFacebookF />
              <IoLogoInstagram />
            </div>
          </div>
          <div className="form-contact">
          <p className="form-p">WE’D LOVE TO HEAR FROM YOU, PLEASE INCLUDE ALL DETAILS</p>
            <form class="w-full max-w-lg form-t">
              <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <input
                    class="appearance-none block w-full bg-[#323e3f] text-gray-700 border border-[#323e3f] rounded py-3 px-4 mb-2 leading-tight focus:outline-none focus:bg-[#455557]"
                    id="grid-first-name"
                    type="text"
                    placeholder="Name..."
                  />
                </div>
                <div class="w-full md:w-1/2 px-3">
                  <input
                    class="appearance-none block w-full bg-[#323e3f] text-gray-700 border border-[#323e3f]  rounded py-3 px-4 mb-8 leading-tight focus:outline-none  focus:bg-[#455557]"
                    id="grid-last-name"
                    type="text"
                    placeholder="Email Address.."
                  />
                </div>
                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <input
                    class="appearance-none block w-full bg-[#323e3f] text-gray-700 border border-[#323e3f] rounded py-3 px-4 mb-2 leading-tight focus:outline-none  focus:bg-[#455557]"
                    id="grid-first-name"
                    type="text"
                    placeholder="Contact Number.."
                  />
                </div>
                <div class="w-full md:w-1/2 px-3">
                  <input
                    class="appearance-none block w-full bg-[#323e3f] text-gray-700 border border-[#323e3f]  rounded py-3 px-4 mb-8 leading-tight focus:outline-none  focus:bg-[#455557]"
                    id="grid-last-name"
                    type="text"
                    placeholder="Postcode.."
                  />
                </div>
                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <input
                    class="appearance-none block w-full bg-[#323e3f] text-gray-700 border border-[#323e3f]  rounded py-3 px-4 mb-2 leading-tight focus:outline-none  focus:bg-[#455557]"
                    id="grid-first-name"
                    type="text"
                    placeholder="Showroom.."
                  />
                </div>
                <div class="w-full md:w-1/2 px-3">
                  <input
                    class="appearance-none block w-full bg-[#323e3f] text-gray-700 border border-[#323e3f]  rounded py-3 px-4 mb-5 leading-tight focus:outline-none  focus:bg-[#455557]"
                    id="grid-last-name"
                    type="text"
                    placeholder="Function Date.."
                  />
                </div>
              </div>
              <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full px-3">
                   <textarea className="appearance-none block w-full bg-[#323e3f] text-gray-700 border border-[#323e3f]  rounded py-3 px-4 mb-3 leading-tight focus:outline-none  focus:bg-[#455557]"  rows="5px" cols="30px" placeholder="Message.."></textarea>
                
                </div>
              </div>
             
                <button className="contact-button">SUBMIT</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUsPage;
