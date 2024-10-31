import React from 'react'
import {FaInstagram,FaLinkedin, FaFacebook} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export const About = () => {
  return (
    <div className='flex flex-col w-full '>
    <h1 className='text-2xl w-full font-semibold text-textColor mb-2'>Prime Technologies</h1>
    <p className='text-textColor w-full mb-2'>Est. 2018, we're a leading software development firm in Sri Lanka, elevating businesses through cutting-edge tech and dedicated teams.</p>
    <div className='flex flex-col'>
        <h2 className='text-xl text-textColor mt-4'>Follow us on</h2>
        <div className='flex gap-6 w-full'>
        <div className='w-[40px] h-[40px] bg-slate-200 text-center flex justify-center items-center rounded-lg shadow-lg hover:translate-y-1 hover:bg-slate-300 duration-300 mt-2'>
    <a href='https://www.facebook.com/PrimeTechnologies/'>
    <FaFacebook className='text w-[30px] h-[30px] text-blue-500'/></a>
    </div>
        <div className='w-[40px] h-[40px] bg-slate-200 text-center flex justify-center items-center rounded-lg shadow-lg hover:translate-y-1 hover:bg-slate-300 duration-300 mt-2'>
    <a href='https://www.linkedin.com/company/primetechnologieslk/posts/?feedView=all'>
    <FaLinkedin className=' w-[30px] h-[30px] text-blue-500'/></a>
    </div>
        <div className='w-[40px] h-[40px] bg-slate-200 text-center flex justify-center items-center rounded-lg shadow-lg hover:translate-y-1 hover:bg-slate-300 duration-300 mt-2'>
    <a href='#'>
    <FaInstagram className=' w-[30px] h-[30px] text-red-500'/></a>
    </div>
        <div className='w-[40px] h-[40px] bg-slate-200 text-center flex justify-center items-center rounded-lg shadow-lg hover:translate-y-1 hover:bg-slate-300 duration-300 mt-2'>
    <a href='#'>
    <FaXTwitter className=' w-[30px] h-[30px] text-black'/></a>
    </div>
        </div>
    </div>
</div>
  )
}
