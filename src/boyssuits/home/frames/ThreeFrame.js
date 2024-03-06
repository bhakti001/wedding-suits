import React from 'react'

const ThreeFrame = (props) => {
  return (
    <>
        <div className="three-frame">
            
            <div className="img-onefr onef">
                 <img
                   src={props.img1}
                   alt=""
                 />
               </div>
               <div className="img-twof">
                 <img
                   src={props.img2}
                   alt=""
                 />
               </div>
               </div>
    </>
  )
}

export default ThreeFrame