import React from "react";
import '../personaltailoring.css'
const Textcon = (props) => {
  return (
    <>
      <div className="text-top text-boys">
        <p className="text-pew">
    {props.text1}
        </p>
    <br/>
        <p className="text-pew">
    {props.text2}
        </p>
      </div>
    </>
  );
};

export default Textcon;