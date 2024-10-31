import React from 'react'
import { NavBar } from '../Component/NavBar'
import { Services } from '../Component/Services/Services'

export const ServicePage = () => {
  return (
    <div className="flex flex-col gap-4">
    <NavBar />
    <Services />
    </div>
  )
}
