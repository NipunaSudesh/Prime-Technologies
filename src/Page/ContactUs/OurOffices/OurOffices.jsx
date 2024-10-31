import React from 'react'
import { OfficeCard } from './OfficeCard'
import sl from '../../../Assets/images/sl.png'
import aus from '../../../Assets/images/aus.png'

export const OurOffices = () => {
  return (
    <div className='w-full mt-4 flex flex-col'>
        <div className='w-full mt-4'>
          <h1 className='text-textColor font-semibold text-2xl justify-center text-center'>Our Offices</h1>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 items-center mx-auto mt-4'>
          <OfficeCard flag={aus} country='Australia' address='28 108 Stapleton Street, Pendle Hill, NSW 2145' number='+61 481 785 550' email='
info@primetechnologies.io'/>
          <OfficeCard flag={sl} country='Sri Lanka' address='14 Sir Baron Jayathilake Mawatha, Colombo 00100, Sri Lanka' number='+94 76 011 6565' email='
info@primetechnologies.io'/>
          <OfficeCard flag={sl} country='Sri Lanka' address='No 48, VM road, Point Pedro, Jaffna' number='+94 76 011 6577' email='
info@primetechnologies.io'/>

        </div>
    </div>
  )
}
