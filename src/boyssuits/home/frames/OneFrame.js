import React from 'react'

const OneFrame = (props) => {
  return (
    <>
    <div className="one-frame">
            
         <div className="img-onefr">
              <img
                src={props.img1}
                alt=""
              />
            </div>
            <div className="img-twofr">
              <img
                src={props.img2}
                alt=""
              />
            </div>
            </div>
    </>
  )
}

export default OneFrame