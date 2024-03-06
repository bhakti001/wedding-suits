import React from 'react'

const ThreeImg = () => {
  return (
    <>
        <div className="main-timg">
            <div className=""><img src="https://www.peterposh.co.uk/wp-content/uploads/2024/01/contact-us-faqs.jpg" alt="" className='relative one-timg' />
            <p className='absolute text-white mt-[-240px] text-5xl i-tex1'>Collections</p>
            <button className='absolute text-white mt-[-170px] t-btn'>LERN MORE</button>
            </div>
          <div className="">  <img src="https://www.peterposh.co.uk/wp-content/uploads/2024/01/contact-us-collections.jpg" alt="" className='two-timg'/>
          <p className='absolute text-white mt-[-240px] text-4xl i-tex1'>Brochure Download</p>
            <button className='absolute text-white mt-[-170px] t-btn'>LERN MORE</button>
          </div>
          <div className="">  <img src="https://www.peterposh.co.uk/wp-content/uploads/2024/01/contact-us-brochure.jpg" alt="" className='three-timg'/>
          <p className='absolute text-white mt-[-240px] text-6xl  i-tex1'>FAQs</p>
            <button className='absolute text-white mt-[-170px] t-btn'>LERN MORE</button>
          </div>
        </div>
    </>
  )
}

export default ThreeImg;