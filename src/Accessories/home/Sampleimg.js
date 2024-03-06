import React from 'react'
import {  sample1, sample2, sample3, sample4, sample5, sample6, sample7, sample8, sample9 } from './data'

const Sampleimg = () => {
  return (
    <>
        <div className="main-box">
            <div className="main-boxes">
               {sample1.map((data) =>
              <div className="">
               <img src={data.img} alt=''/>
               </div> 
               )}
            </div>
            <div className="main-boxes">
               {sample2.map((data) =>
              <div className="">
               <img src={data.img} alt=''/>
               </div> 
               )}
            </div>
            <div className="main-boxes">
               {sample3.map((data) =>
              <div className="">
               <img src={data.img} alt=''/>
               </div> 
               )}
            </div>
            <div className="main-boxes">
               {sample4.map((data) =>
              <div className="">
               <img src={data.img} alt=''/>
               </div> 
               )}
            </div>
            <div className="main-boxes">
               {sample5.map((data) =>
              <div className="">
               <img src={data.img} alt=''/>
               </div> 
               )}
            </div>
            <div className="main-boxes">
               {sample6.map((data) =>
              <div className="">
               <img src={data.img} alt=''/>
               </div> 
               )}
            </div>
            <div className="main-boxes">
               {sample7.map((data) =>
              <div className="">
               <img src={data.img} alt=''/>
               </div> 
               )}
            </div>
            <div className="main-boxes">
               {sample8.map((data) =>
              <div className="">
               <img src={data.img} alt=''/>
               </div> 
               )}
            </div>
            <div className="main-boxes">
               {sample9.map((data) =>
              <div className="">
               <img src={data.img} alt=''/>
               </div> 
               )}
            </div>
            <div className="main-boxes">
           <img src="https://www.peterposh.co.uk/wp-content/uploads/2023/12/523-air-force.jpg" alt="" />
           <img src="" alt=""  className='hide-i'/>
           <img src="" alt="" className='hide-i'/>
           <img src="" alt="" className='hide-i' />
           <img src="https://www.peterposh.co.uk/wp-content/uploads/2023/12/524-pumpkin.jpg" alt="" />
           <img src="" alt="" className='hide-i'/>
           <img src="" alt="" className='hide-i'/>
           <img src="" alt="" className='hide-i'/>
           <img className='hide-i' src="https://www.peterposh.co.uk/wp-content/uploads/2023/12/525-dark-wine.jpg" alt="" />
            </div>
        </div>
    </>
  )
}

export default Sampleimg