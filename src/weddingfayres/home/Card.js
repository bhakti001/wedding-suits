import React from "react";
import { Link } from "react-router-dom";
import { details } from "./data";

const Card = () => {
  return (
    <>
      <div className="card-mddd ">
        {details.map((details)=>
        <div class="relative flex main-c bg-clip-border   bg-[#323e3f] text-white shadow-md w-full max-w-[88rem] flex-row">
          <div class="relative w-1/5 m-0 overflow-hidden main-cdd text-white  rounded-r-none bg-clip-border rounded-xl shrink-0">
            <img
              src={details.img}
              alt="card"
              class="object-cover w-full h-full maini-cd"
            />
          </div>
          <div class="p-6 w-3/5 main-cddt">
            <h4 class="block mb-2 mt-10 font-[butler] text-3xl antialiased  leading-snug tracking-normal text-blue-gray-900">
            {details.text1}
            </h4>
            <p class="block mb-8 font-sans italic text-base antialiased font-normal leading-relaxed text-white">
            {details.text2}
            </p>
          </div>
            <Link to='/showroom' class="inline-block main-cddb">
              <button
                class="flex items-center border  font-thin   mt-20 gap-2 px-6 py-3 font-sans text-xs  text-center text-white uppercase align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-gray-900/10 active:bg-gray-900/20"
                type="button"
              >
                {details.button}
              </button>
            </Link>
        </div>

        )}
  

      </div>
    </>
  );
};

export default Card;
