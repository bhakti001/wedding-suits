import React from 'react'
import Textaccordian from './home/Textaccordian'
import Home from './home/Home'
import './faq.css'
import Collection from '../weddingfayres/home/Collection'
import Lookingfor from '../weddingfayres/home/Lookingfor'
const Faq = () => {
  return (
    <>
        <Home/>
        <div className=" bg-black pt-44 pb-44 text-white">
        <p className='text-4xl pb-20 font-[butler]'>You have questions, we have answers.</p>
        <Textaccordian/>
        </div>
        <Lookingfor/>
      <Collection onetext={"Our collections"} setext={"We started our business in 1990"}/>
    </>
  )
}

export default Faq