import React, { useRef } from 'react'
import "./SecondBox.css"
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'
function SecondBox() {
    let initialRef = useRef()
    let arrowUp = useRef()
    let arrowDown = useRef()

    let handleClick = () => {
    
        let content = initialRef.current.nextElementSibling
     
        if (content.style.maxHeight) {
            content.style.maxHeight = null
            arrowUp.current.style.display = "block"
            arrowDown.current.style.display = "none"
            // content.style.display="none"
        } else {
            content.style.maxHeight = "0px"
            arrowUp.current.style.display = "none"
            arrowDown.current.style.display = "block"
            // content.style.display="block"
            
            }

    }
    return (
        <div className='container' >
            <button className="collaps_box " onClick={handleClick} ref={initialRef} >
                <div style={{ display: "flex", alignItems: 'center' }}>

                    <span ref={arrowUp}><IoIosArrowDown fontWeight={700} fontSize={25} /></span>
                    <span ref={arrowDown} style={{ display: "none" }} ><IoIosArrowUp fontWeight={700} fontSize={25} /></span>
                    Thread A  </div>
            </button>
            <div className='content_box' >
            How are you going to develop your stratergy ? Which method are you going to use to develop a stratergy ? What if the project is lengthy?
               
            </div>
        </div>
    )
}

export default SecondBox