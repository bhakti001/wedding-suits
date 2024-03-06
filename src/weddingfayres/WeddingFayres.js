import React from 'react'
import Home from './home/Home'
import Upcoming from './home/Upcoming'
import Lookingfor from './home/Lookingfor'
import Collection from './home/Collection'

const WeddingFayres = () => {
  return (
    <>
        <Home/>
        <Upcoming/>
        <Lookingfor/>
      <Collection onetext={"Our collections"} setext={"We started our business in 1990"}/>

    </>
  )
}

export default WeddingFayres