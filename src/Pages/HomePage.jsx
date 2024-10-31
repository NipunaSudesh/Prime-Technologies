import React from 'react'
import { NavBar } from '../Component/NavBar'
import { Home } from '../Component/Home'

export const HomePage = () => {
  return (
    <div className="flex flex-col gap-4">
    <NavBar />
    <Home />
  </div>
  )
}
