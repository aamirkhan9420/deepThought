import React from 'react'
import "./NavbarRightBox.css"
import { FiMoreVertical } from "react-icons/fi";
import { IoHome } from "react-icons/io5";
import { FaTools, FaBell } from "react-icons/fa";



function NavbarRightBox() {
    return (
        <div className='nav_right_container'>
            <div className='icon_box'>
                <IoHome color='white' fontSize={20}/>
            </div>
            <div className='icon_box'>
                <FaTools color='white'fontSize={20}/>
            </div>
            <div className='icon_box'>
                <FaBell color='white'fontSize={20} />
            </div>
            <div className='icon_box'>
                <img src="./profile.png" alt="" />
            </div>
            <div >
                <FiMoreVertical color='#3683f0' fontSize={25} />

            </div>
        </div>
    )
}

export default NavbarRightBox