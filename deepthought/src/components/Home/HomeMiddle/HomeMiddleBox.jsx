import React from 'react'
import GridBox from '../../Asset/GridBox/GridBox'
import  "./HomeMiddle.css"
import NoteBox from './NoteBox/NoteBox'
import TechnicalPMHeading from './TechnicalPMHeading/TechnicalPMHeading'

function HomeMiddleBox() {
  return (
    <div className='middle_container'>
        <TechnicalPMHeading />
        <NoteBox />
        <GridBox />
    </div>
  )
}

export default HomeMiddleBox