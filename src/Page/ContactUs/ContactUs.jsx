import React from 'react';
import { EmailForm } from './EmailForm';
import { Ouroffices } from './Ouroffices';
import { About } from './About';

export const ContactUs = () => {
  return (
    <div id='ContactUs' className='w-full mt-2 flex flex-col h-auto gap-4 items-center'>
      <div className='max-w-screen-xl w-full px-4 sm:px-10 bg-[#fdf0df] h-full'>
        <div className='w-full mt-3 text-center'>
          <h1 className='text-4xl font-bold mb-4 mt-4'>Contact Us</h1>
        </div>
        <div className='flex flex-col md:flex-row gap-4'>
          <About />
          <div className='w-full md:w-1/2 flex flex-col'>
            <EmailForm />
          </div>
        </div>
        <Ouroffices />
      </div>
    </div>
  );
};
