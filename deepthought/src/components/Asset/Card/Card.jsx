import React from 'react'
import "./Card.css"
import Description from './Description'
import VideoBox from './VideoBox'
import {  IoIosInformationCircleOutline } from "react-icons/io"
function Card({props}) {
  console.log(props)
  return (
    <div className='card_main_box'>
        <div className='card_black_heading_box'>
            <h3>{props.asset_title}</h3>
            <IoIosInformationCircleOutline />
        </div>
        <Description  desc={props.asset_description}/>
    { props.asset_content_type==="video"?  <VideoBox  vdo={props.asset_content}/>:""}
    </div>
  )
}

export default Card