import React from 'react';
import logo from '../Assets/images/logo.png';

export const NavBar = () => {
  return (
<div className='w-full h-[100px] bg-slate-200 shadow-xl'>
<div className='justify-between flex p-2'>
    <div className='p-2 flex items-center justify-center'>
        <img src={logo} alt='logo' className='w-[250px] h-full' />
    </div>
    <div className=' w-full justify-end flex gap-10 text-center my-auto '>
        <ul className='items-center flex gap-20'>
        <li>
            <a
              className='text-2xl tracking-wide cursor-pointer duration-500 text-textColor hover:text-[#5e1b1b] transform hover:scale-105 border-b-2 border-transparent hover:border-[#5e1b1b]'

              href="#Services"          
            >
              Services
            </a>
          </li>
        <li>
            <a
             className='text-2xl tracking-wide cursor-pointer duration-500 text-textColor hover:text-[#5e1b1b] transform hover:scale-105 border-b-2 border-transparent hover:border-[#5e1b1b]'
              href="#ContactUs"          
            >
              Contact Us
            </a>
          </li>
        </ul>

    </div>
</div>
</div>
  )
}
