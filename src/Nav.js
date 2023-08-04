import React from 'react'

//import Nav from './Nav'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar/Navbar'
const Nav = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  )
}

export default Nav