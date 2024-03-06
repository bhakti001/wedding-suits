import React from 'react'
import Navbar from './navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './footer/Footer'

const MainComponent = () => {
  return (
    <>
<Navbar></Navbar>
<Outlet/>
<Footer/>
    </>
  )
}

export default MainComponent