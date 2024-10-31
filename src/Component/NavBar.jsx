import React,{useState} from 'react';
import logo from '../Assets/images/logo.png';
import { IoMenu } from "react-icons/io5";

export const NavBar = () => {
 const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  };
  return (
<div className='w-full h-[90px] fixed bg-[#f1eee9] shadow-xl z-10'>
<div className='justify-between gap-10 flex p-2 mx-[100px]'>
    <div className='p-2 flex items-center justify-center'>
        <img src={logo} alt='logo' className='w-[250px] h-full' />
    </div>
    <div className=' w-full justify-end flex gap-10 text-center my-auto '>
      <div className='flex md:hidden ' onClick={toggleMenu}>
        <IoMenu  className='w-[60px] h-[50px] text-textColor cursor-pointer'/>
      </div>
      <ul className={`flex-col items-center gap-20 md:flex md:flex-row md:items-center ${isMenuOpen ? 'flex' : 'hidden'} md:inline-flex`}>
            <li>
              <a
                className='text-2xl tracking-wide cursor-pointer duration-500 text-textColor hover:text-textHover transform hover:scale-105 border-b-2 border-transparent hover:border-textHover'
                href="#Services"
              >
                Services
              </a>
            </li>
            <li>
              <a
                className='text-2xl tracking-wide cursor-pointer duration-500 text-textColor hover:text-textHover transform hover:scale-105 border-b-2 border-transparent hover:border-textHover'
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
