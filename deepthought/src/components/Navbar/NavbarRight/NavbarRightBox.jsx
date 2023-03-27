import React from 'react'
import "./NavbarRightBox.css"
import { FiMoreVertical } from "react-icons/fi";
function NavbarRightBox() {
    return (
        <div className='nav_right_container'>
            <div className='icon_box'>
                <img src="./homepng.png" alt="" />
            </div>
            <div className='icon_box'>
                <img src="./tools.png" alt="" />
            </div>
            <div className='bellicon_box'>
                <img src="./bell.png" alt="" />
            </div>
            <div className='icon_box'>
                <img src="./profile.png" alt="" />

            </div>
            <div >
<FiMoreVertical color='#3683f0' fontSize={25}/>
                {/* <i className="fa-regular fa-ellipsis-vertical" style={{ color: "#3683f0" }} ></i> */}
            </div>
        </div>
    )
}

export default NavbarRightBox