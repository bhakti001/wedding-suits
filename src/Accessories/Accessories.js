import React from 'react'
import Home from './home/Home'
import Textcons from './home/Textcon'
import './accessories.css'
import Sampleimg from './home/Sampleimg'
import Showroom from '../boyssuits/home/Showroom'
import Tailoring from '../boyssuits/home/Tailoring'
import OurCollection from '../waistcoats/Home/OurCollection'
const Accessories = () => {
  return (
    <>
        <Home/>
      <Textcons/>
      <Sampleimg/>
      <Showroom/>
      <Tailoring/>
      <OurCollection
        onetext={"Our collections"}
        setext={"We started our business in 1990"}
      />
    </>
  )
}
// 4:30 =474 
export default Accessories