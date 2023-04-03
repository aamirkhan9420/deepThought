import React from 'react'
import "./Card.css"
import Description from './Description'
import VideoBox from './VideoBox'
import { IoInformationCircleSharp } from "react-icons/io5"
import Collapsible from './Collapsible'
import StructurePointerBox from './StructurePointerBox'
import Collaps4SA from './Collaps4SA/Collaps4SA'
function Card({ props }) {

  return (
    <div className='card_main_box'>
      <div className='card_black_heading_box'>
        <h3>{props.asset_title}</h3>
        <IoInformationCircleSharp color="white" fontSize={30} />
      </div>
      <Description desc={props.asset_description} />
      {props.asset_content_type === "video" ? <VideoBox vdo={props.asset_content} /> : ""}
      {props.asset_title === "Threadbuild" && <Collapsible />}
      {props.asset_title.includes("Structure you pointers") &&<StructurePointerBox />}
     {props.asset_title==="4SA Method" &&<Collaps4SA />}
    </div>
  )
}

export default Card