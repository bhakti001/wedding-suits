import React from 'react'
import Slidersh from './Slider'
import './collection.css'
const Collection = (props) => {
  return (
    <>
        <div className="crous ">
        <div className="ma-ourco">
          <div className="our-collection">
            <p className="our-otcol">{props.onetext}</p>
            <p className="our-oscol">{props.setext}</p>
            <button className="our-btncol">VIEW ALL</button>
          </div>
        <Slidersh />
        </div>
      </div>
    </>
  )
}

export default Collection