import React from 'react'
 import "./StructurePointerBox.css"
 import {BiUndo}from "react-icons/bi"
 import {GrRedo}from "react-icons/gr"
 import {BsArrowsFullscreen}from "react-icons/bs"
 import {GrGallery}from "react-icons/gr"
 import {FiMoreHorizontal}from "react-icons/fi"

 
function StructurePointerBox() {
  return (
    <div className='main_container'>
     <div className='first_container'>
        <h2>Title</h2>
        <input type="text" />
     </div>
     <div className='second_container'>
      <h2>content</h2>
      <div>
        <div className='tools_div'>
          <div>
            <h3>File </h3>
            <h3>Edit </h3>
            <h3>View </h3>
            <h3>Insert </h3>
            <h3>Formate </h3>
            <h3>Tools </h3>
            <h3>Table </h3>
            <h3>Help </h3>
          </div>
          <div><BiUndo /><GrRedo /><BsArrowsFullscreen /><GrGallery /><select name="" id=""><option value="">Paragraph</option></select><FiMoreHorizontal /></div>
        </div>
         <textarea></textarea>
      </div>
       
     </div>
    </div>
  )
}

export default StructurePointerBox