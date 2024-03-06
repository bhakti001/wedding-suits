import React from 'react'
import Texs from './Slider'
import Tests from './Tests';

const Slidercombine = () => {
  return (
    <>
    <div className="slider-op">
        <div className="slider-onep">
        <Tests/>
        </div>
        <div className="slider-twop">
<Texs/>
</div>
        </div>

    </>
  )
}

export default Slidercombine;