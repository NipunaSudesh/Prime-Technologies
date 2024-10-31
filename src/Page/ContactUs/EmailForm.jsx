import React, { useState } from 'react'

export const EmailForm = () => {
const [name,setName] =useState('');
const [number,setNumber] =useState('');
const [email,setEmail] =useState('');
const [message,setMessage] =useState('');

  return (
    <div className='w-full   p-4 lgl:p-8 bg-dark h-full flex flex-col gap-5 justify-betweeen rounded-xl shadow-xl bg-[#edeadb]'>
        <form className='w-[95%] mx-2 flex flex-col gap-2 py-2'>
        <div className='w-full mt-5 gap-10'>
            <div className='w-full flex flex-col'>
            <label className='text-sm text-gray-600 uppercase tracking-wide'>Name</label>
              <input
                type='text'
                name="from_name"
                onChange={(e) => setName(e.target.value)}
                value={name}
                className='p-1 rounded-sm active:outline-none hover:outline-[#7d7472] focus-visible:outline-[#7d7472] outline-none focus-visible:border-b-transparent duration-300'
                
              />
            </div>
            <div className='w-full flex flex-col mt-3'>
            <label className='text-sm text-gray-600 uppercase tracking-wide'>Email</label>
              <input
                type='email'
                name="from_email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className='p-1 rounded-sm active:outline-none hover:outline-[#7d7472] focus-visible:outline-[#7d7472] outline-none focus-visible:border-b-transparent duration-300'
                
              />
            </div>
            <div className='w-full flex flex-col mt-3'>
            <label className='text-sm text-gray-600 uppercase tracking-wide'>Phone Number</label>
              <input
                type='text'
                name="Number"
                onChange={(e) => setNumber(e.target.value)}
                value={number}
                className='p-1 rounded-sm active:outline-none hover:outline-[#7d7472] focus-visible:outline-[#7d7472] outline-none focus-visible:border-b-transparent duration-300'
                
              />
            </div>
            <div className='w-full flex flex-col mt-3'>
            <label className='text-sm text-gray-600 uppercase tracking-wide'>Message</label>
            <textarea
              rows="3"
                name="message"
                onChange={(e) => setMessage(e.target.value)}
              value={message}
            ></textarea>
            </div>
            <div className='w-full justify-center mt-4 text-center'>
            <button className="bg-textColor w-[200px] py-3 text-lg text-white px-4 rounded hover:bg-textHover transition-transform hover:-translate-y-1 duration-500 mx-auto">
            Submit
          </button>
            </div>
        </div>
        </form>
    </div>
  )
}
