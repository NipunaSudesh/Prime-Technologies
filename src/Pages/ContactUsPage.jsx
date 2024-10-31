import React from 'react'
import { NavBar } from '../Component/NavBar'
import { ContactUs } from '../Component/ContactUs/ContactUs'

export const ContactUsPage = () => {
  return (
    <div className="flex flex-col gap-4">
    <NavBar />
    <ContactUs />
    
  </div>
  )
}
