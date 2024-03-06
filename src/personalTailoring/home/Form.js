import React from 'react'

const Form = () => {
  return (
    <>
        <div className="form-con">
          <p className="form-pt">Book a Personal Tailoring <br /> visit</p>
          <p className="form-p">Experience our award winning service.</p>
            <form class="w-full max-w-lg form-f">
              <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <input
                    class="appearance-none block w-full bg-[#323e3f] text-gray-700 border border-[#323e3f] rounded py-3 px-4 mb-2 leading-tight focus:outline-none focus:bg-[#455557]"
                    id="grid-first-name"
                    type="text"
                    placeholder="Name..."
                  />
                </div>
                <div class="w-full md:w-1/2 px-3">
                  <input
                    class="appearance-none block w-full bg-[#323e3f] text-gray-700 border border-[#323e3f]  rounded py-3 px-4 mb-8 leading-tight focus:outline-none  focus:bg-[#455557]"
                    id="grid-last-name"
                    type="text"
                    placeholder="Email Address.."
                  />
                </div>
                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <input
                    class="appearance-none block w-full bg-[#323e3f] text-gray-700 border border-[#323e3f] rounded py-3 px-4 mb-2 leading-tight focus:outline-none  focus:bg-[#455557]"
                    id="grid-first-name"
                    type="text"
                    placeholder="Contact Number.."
                  />
                </div>
                <div class="w-full md:w-1/2 px-3">
                  <input
                    class="appearance-none block w-full bg-[#323e3f] text-gray-700 border border-[#323e3f]  rounded py-3 px-4 mb-8 leading-tight focus:outline-none  focus:bg-[#455557]"
                    id="grid-last-name"
                    type="text"
                    placeholder="Postcode.."
                  />
                </div>
                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <input
                    class="appearance-none block w-full bg-[#323e3f] text-gray-700 border border-[#323e3f]  rounded py-3 px-4 mb-2 leading-tight focus:outline-none  focus:bg-[#455557]"
                    id="grid-first-name"
                    type="text"
                    placeholder="Showroom.."
                  />
                </div>
                <div class="w-full md:w-1/2 px-3">
                  <input
                    class="appearance-none block w-full bg-[#323e3f] text-gray-700 border border-[#323e3f]  rounded py-3 px-4 mb-5 leading-tight focus:outline-none  focus:bg-[#455557]"
                    id="grid-last-name"
                    type="text"
                    placeholder="Function Date.."
                  />
                </div>
              </div>
              <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full px-3">
                   <textarea className="appearance-none block w-full bg-[#323e3f] text-gray-700 border border-[#323e3f]  rounded py-3 px-4 mb-3 leading-tight focus:outline-none  focus:bg-[#455557]"  rows="5px" cols="30px" placeholder="Message.."></textarea>
                
                </div>
              </div>
             
                <button className="contact-button btne3e">SUBMIT</button>
            </form>
          </div>
    </>
  )
}

export default Form