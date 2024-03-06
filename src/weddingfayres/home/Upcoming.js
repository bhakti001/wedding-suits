import React from "react";
import "./upcoming.css";
import Card from "./Card";
const Upcoming = () => {
  return (
    <>
      <div className="main-textw">
        <div className="upcoming-main">
          <div className="upcoming-part">
            <div className="upcoming-text">
              <p className="ut-one">Upcoming Wedding Fayres</p>
              <p className="ut-two">
                Wedding Fayres are a great opportunity to meet us when trying to
                gather ideas for the <br /> big day. Visit one of our stands to
                collect a free brochure, view some of our collection, <br/> ask any
                questions and chat with a member of our friendly Peter Posh
                team.
              </p>
            </div>
            <Card/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Upcoming;
