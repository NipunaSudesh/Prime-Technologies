import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

export const OfficeCard = ({flag,country,address,number,email}) => {
  return (
    <div className='w-[320px] h-[280px] m-2 rounded-xl  bg-red-100 flex flex-col border-b-[2px] shadow-lg bg-gradient-to-r from-[#f4f2f1] to-[#dcc7ab] group hover:bg-gradient-to-b
    hover:from-[#f1efec] hover:to-[#d8c7b0] duration-1000 hover:translate-y-1 transition-transform'>
        <div className='flex flex-col p-4'>
            <div className='flex items-center border-b-[1px] rounded-lg'>
                <img src={flag} alt='country' className='w-[70px] h-[70px]'/>
                <h1 className='text-center  ml-4 text-xl font-semibold w-full justify-center '>{country}</h1>
            </div>
            <div className='flex gap-4 w-full mt-4 text-start '>
                <FaLocationDot className='w-[14px] h-[14px] mt-1'/>
                <p className='text-textColor hover:text-textHover duration-200'>{address}</p>
            </div>
            <div className='flex gap-4 w-full mt-4 text-start '>
                <FaPhoneAlt className='w-[14px] h-[14px] mt-1'/>
                <p className='text-textColor hover:text-textHover duration-200'>{number}</p>
            </div>
            <div className='flex gap-4 w-full mt-4 text-start '>
                <MdEmail className='w-[14px] h-[14px] mt-1'/>
                <p className='text-textColor hover:text-textHover duration-200'>{email}</p>
            </div>
        </div>
    </div>
  )
}
