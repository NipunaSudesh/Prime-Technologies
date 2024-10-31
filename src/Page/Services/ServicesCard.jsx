import React from 'react'

export const ServicesCard = ({img,des,header}) => {
  return (
    <div className='w-[320px] h-[280px] m-2 rounded-xl  bg-red-100 flex flex-col border-b-[2px] shadow-lg bg-gradient-to-r from-[#f4f2f1] to-[#dcc7ab] group hover:bg-gradient-to-b
    hover:from-[#f1efec] hover:to-[#d8c7b0] duration-1000 hover:translate-y-1 transition-transform'>
        <div className='w-full items-cente h-[130px] mt-2 flex justify-center'>
            <img src={img} alt="images" className='w-[150px] h-[120px]'/>
        </div>
        <div className='flex flex-col gap-2 w-full justify-center px-4 '>
            <h1 className='text-black text-2xl font-bold'>{header}</h1>
            <p className='text-textColor mb-1'>{des}</p>
        </div>
    </div>
  )
}
