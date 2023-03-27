import React, { useEffect, useState } from 'react'
import Apicall from '../Asset/Apicall'
import Navbar from '../Navbar/Navbar'
import "./Home.css"
import HomeLeftBox from './HomeLeft/HomeLeftBox'
import HomeMiddleBox from './HomeMiddle/HomeMiddleBox'
import HomeRightBox from './HomeRightBox/HomeRightBox'
function Home() {
  let [task_title,setTask_title]=useState("")
  let [title,setTitle]=useState("")

  let [task_description,setTask_description]=useState("")
  let [assets,setAssets]=useState([])

  useEffect(()=>{
    let x= Apicall()
  
    let{tasks,title}  =x
      // tasks is an array
    let {assets,task_description,task_title}=tasks[0]
   
    setAssets(assets)
    setTask_title(task_title)
    setTask_description(task_description)
    setTitle(title)
 
   },[])
  return (
    <div className='home_parent_container'>
        <Navbar />
        <div className='home_main_container'>
           <HomeLeftBox />
           <HomeMiddleBox assets={assets} task_description={task_description} task_title={task_title} title={title}/>
           <HomeRightBox />
        </div>
    </div>
  )
}

export default Home