import React, { useState } from 'react';
import logo from '../Assets/images/logo.png';
import { IoMenu } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { IoMdClose } from "react-icons/io";

export const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className='w-full h-[90px] fixed bg-[#f1eee9] shadow-xl z-10'>
      <div className='justify-between gap-10 flex p-2 mx-[100px]'>
        <div className='flex items-center justify-center'>
          <img src={logo} alt='logo' className='w-[250px] mb-[40px] h-[70px]' />
        </div>
        
     
        <div className='w-full justify-end flex gap-10 text-center my-auto'>
        
        {!showMenu && (
  <div className='flex md:hidden' onClick={() => setShowMenu(true)}>
    <IoMenu className='w-[60px] h-[50px] text-textColor cursor-pointer mb-[40px]' />
  </div>
)}

         
          <ul className={`mb-[40px] hidden md:inline-block items-center  gap-4  ${showMenu ? 'flex' : 'hidden'} md:inline-flex`}>
            <li>
              <Link to='/' className='text-2xl tracking-wide cursor-pointer duration-500 text-textColor hover:text-textHover transform hover:scale-105 border-b-2 border-transparent hover:border-textHover'>
                Home
              </Link>
            </li>
            <li>
              <Link to='/services' className='text-2xl tracking-wide cursor-pointer duration-500 text-textColor hover:text-textHover transform hover:scale-105 border-b-2 border-transparent hover:border-textHover'>
                Services
              </Link>
            </li>
            <li>
              <Link to='/contact' className='text-2xl tracking-wide cursor-pointer duration-500 text-textColor hover:text-textHover transform hover:scale-105 border-b-2 border-transparent hover:border-textHover'>
                Contact Us
              </Link>
            </li>
          </ul>

          
          {showMenu && (
            <div className="w-[35%] h-[160px] absolute top-0 right-10 bg-[#f1eee9] p-4 shadow-lg ">
              <ul className="flex flex-col gap-2 ">
                <li>
                  <Link to='/' className='text-2xl tracking-wide cursor-pointer duration-500 text-textColor hover:text-textHover transform hover:scale-105 border-b-2 border-transparent hover:border-textHover'>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to='/services' className='text-2xl tracking-wide cursor-pointer duration-500 text-textColor hover:text-textHover transform hover:scale-105 border-b-2 border-transparent hover:border-textHover'>
                    Services
                  </Link>
                </li>
                <li>
                  <Link to='/contact' className='text-2xl tracking-wide cursor-pointer duration-500 text-textColor hover:text-textHover transform hover:scale-105 border-b-2 border-transparent hover:border-textHover'>
                    Contact Us
                  </Link>
                </li>
                <span
                onClick={() => setShowMenu(false)}
                className="absolute top-5 right-1 text-textColor hover:text-textHover duration-300 text-2xl cursor-pointer "
              >
                <IoMdClose />
              </span>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
