import React from 'react'
import TermsText from './TermsText'

const TermsCondition = () => {
    const items = [
        {
          _id: 990,
          title: "TERMS & CONDITIONS",
    
        },
      ];
  return (
    <>
     <div className="flex privacy-main bg-black ">
      <div className="mt-60 flex telx mb-14">
      <div className="w-full side-tex">
      <div>
        <ul className="flex flex-col  gap-4 text-sm lg:text-base text-[#8d9494] hover:text-white">
          {items.map(({ _id, title}) => (
           <li
              key={_id}
              className="ml-16  pb-2 flex items-center text-lg  justify-between"
            >
              {title}
            </li> 
          ))}
        </ul>
      </div>
    </div>
        <TermsText/>
        </div>
        </div>
    </>
  )
}

export default TermsCondition;