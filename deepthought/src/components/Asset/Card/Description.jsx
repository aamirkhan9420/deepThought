import React from 'react'
import "./Description.css"
function Description({desc}) {
  return (
    <div className='description_box'><h3><span>Description: </span>{desc}</h3></div>
  )
}

export default Description