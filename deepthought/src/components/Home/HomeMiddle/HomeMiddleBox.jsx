import React from 'react'
import GridBox from '../../Asset/GridBox/GridBox'
import  "./HomeMiddle.css"
import NoteBox from './NoteBox/NoteBox'
import TechnicalPMHeading from './TechnicalPMHeading/TechnicalPMHeading'

function HomeMiddleBox({assets ,task_description, task_title,title}) {
      
  return (
    <div className='middle_container'>
        <TechnicalPMHeading title={title}/>
        <NoteBox task_description={task_description} task_title={task_title} />
        <GridBox assets={assets}/>
    </div>
  )
}

export default HomeMiddleBox