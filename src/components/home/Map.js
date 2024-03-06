import React from 'react'
import "./home.css"
import img1 from "../../assets/Screenshot (90).png"
const Map = () => {
  return (
    <div className='map'>
      <div className='map-main'>
        <div className='map-part' >
            <div className='map-text'>
                <p className='mut-one' >
                Visit one of our  showrooms
                </p>
                <p className='m-two' >Experience our award winning service.</p>
                <p className='m-three' >Click a showroom location to view details and <br/> book an appointment.</p>
                <button className='m-btn' >NOT LOCAL ? MESSAGE US HERE FOR STOCKISTS</button>
            </div>
        </div>
            <div className='imf'>
            <div className="img-mai">
                <img src={img1} alt='ima'/> 
                </div>
            </div>
      </div>
    </div>
  )
}

export default Map
