import React from 'react'
import './Welcome.css'
const Welcome = () => {
  return (
    <>
          <div className="main-text">
        <p className="text-wel mt-7">Welcome to Peter Posh</p>
        <span>Est. 1990</span>
        <p className="text-oth">
          For over 30 years, we have been delivering premium wedding suit hire
          with a focus on quality and service. Our family-owned brand has a
          first-class reputation, grounded in customer recommendations.
        </p>
      </div>
      <div className="text-last">What’s HOT right now for 2024</div>
      <div className="img-section mt-24">
        <div className="img-one">
          <img
            src="https://www.peterposh.co.uk/wp-content/uploads/2024/01/GREEN-TWEED-HOT-FOR-DESKTOP.jpg"
            alt="image1"
            className="img1"
          />
        </div>
        <div className="img-two">
          <img
            src="https://www.peterposh.co.uk/wp-content/uploads/2023/09/shot-12-0251-pk-lapel-mobile-and-desktop-main-rectangle-portrait.jpg"
            alt="image1"
            className="img1"
          />
        </div>
        <div className="img-three">
          <img
            src="https://www.peterposh.co.uk/wp-content/uploads/2024/02/oakmereHOT-mobil-portrait-main.jpg"
            alt="image1"
            className="img1"
          />
        </div>
      </div>
    </>
  )
}

export default Welcome