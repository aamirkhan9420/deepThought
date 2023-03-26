import React from 'react'
import Navbar from '../Navbar/Navbar'
import "./Home.css"
import HomeLeftBox from './HomeLeft/HomeLeftBox'
import HomeMiddleBox from './HomeMiddle/HomeMiddleBox'
import HomeRightBox from './HomeRightBox/HomeRightBox'
function Home() {
  return (
    <div className='home_parent_container'>
        <Navbar />
        <div className='home_main_container'>
           <HomeLeftBox />
           <HomeMiddleBox />
           <HomeRightBox />
        </div>
    </div>
  )
}

export default Home