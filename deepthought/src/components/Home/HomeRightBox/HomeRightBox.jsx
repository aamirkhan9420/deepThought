import React, { useRef } from 'react'
import "./HomeRight.css"
import { RxCross2 } from 'react-icons/rx'
import { GoPlus } from 'react-icons/go'

function HomeRightBox() {
  let initialRef = useRef()
  let childeRef = useRef()
  let checkRef = useRef()


  let handleClose = () => {
    console.log(checkRef.current)
    initialRef.current.style.width = "3%"
    childeRef.current.style.width = "100%"
    childeRef.current.firstChild.style.display = "none"
    checkRef.current.style.display = "block"

  }
  let handleOpen = () => {
    console.log(initialRef.current.firstChild)
    initialRef.current.style.width = "5%"
    childeRef.current.style.width = "50%"
    childeRef.current.firstChild.style.display = "block"
    checkRef.current.style.display = "none"
  }
  return (
    <div className='right_container' ref={initialRef}>
      <div className='chiled_div' ref={childeRef}>
        <RxCross2 color='white' className='icon' onClick={handleClose} />
        <div ref={checkRef} style={{ display: "none" }} >
          <GoPlus color='white' onClick={handleOpen} fontSize={25} cursor={"pointer"}/>
        </div>

        <h3 className='vertical_text'>Notice Board</h3>
      </div>
    </div>
  )
}

export default HomeRightBox