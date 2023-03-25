import React from 'react'
import Logo from '../Logo/Logo'
import "./Navbar.css"
import NavbarRightBox from './NavbarRight/NavbarRightBox'
function Navbar() {
  return (
    <div className='parent_nav_container'>
   
        <Logo />
        <NavbarRightBox />
    </div>
  )
}

export default Navbar