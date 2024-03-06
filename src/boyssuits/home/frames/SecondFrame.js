import React from 'react'

const SecondFrame = (props) => {
  return (
    <>
        <div className="second-frame">
            <div className="img-onets">
                <img src={props.img1} alt="" />
            </div>
            <div className="img-twots">
                <img src={props.img2} alt="" />
            </div>
            <div className="img-threets">
                <img src={props.img3} alt="" />
            </div>
        </div>
    </>
  )
}

export default SecondFrame