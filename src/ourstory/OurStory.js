import React from 'react'
import Home from './home/Home'
import Textcon from './home/Textcon'
import OurHistory from './home/OurHistory'
import OurShowrooms from './home/OurShowrooms'
import './ourstory.css'
import Map from '../components/home/Map'
import OurPeople from './home/OurPeople'
import MainSlider from './home/MainSlider'
import OurCollection from './home/OurCollection'
const OurStory = () => {
  return (
    <>
        <Home/>
        <Textcon/>
        <OurHistory/>
        <OurShowrooms/>
        <OurPeople/>
        <MainSlider/>
        <div className="mt-[-280px] relative showroom-map">
        <Map />
      </div>
      <OurCollection onetext={"Our collections"} setext={"We started our business in 1990"}/>
    </>
  )
}

export default OurStory;