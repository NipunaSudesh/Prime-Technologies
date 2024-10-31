import React from 'react'
import { FaRegCopyright } from "react-icons/fa";

export const Footer = () => {
  return (
    <div className='mt-4 w-full  bg-[#f1eee9] rounded-lg'>
        <div className='max-w-screen-xl w-full px-4 flex p-4 gap-4 text-center justify-center'>
            <FaRegCopyright  className='text-textColor mt-1 '/>
            <p className='text-textColor'>2024 <span className='text-textHover'>Prime Technologies</span>. All rights reserved.</p>
        </div>
    </div>
  )
}
