import React from "react";
import "./collection.css";
const Collection = () => {
  return (
    <>
      <div className="main-tab">
        <div className="main-t">
          <div className="main-tex">
            <p className="p-one">Collections</p>
            <p className="p-two">Men’s formal wear for every celebration.</p>
            <p className="p-three">
              From modern tweed and slim fit tailcoats, to classic tuxedos and
              stylish lounge suits, <br></br> browse our wedding suit hire collections
              here
            </p>
            <button className="p-btn">VIEW OUR COLLECTIONS</button>
          </div>
          <div className="main-img">
            <img src="https://www.peterposh.co.uk/wp-content/uploads/2023/09/shot-14-0301-FLORENCE-DESKTOP-LIGHT-BOX-.jpg" alt="ima"/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Collection;
