import React from 'react'
import "./TechnicalPMHeading.css"

function TechnicalPMHeading({title}) {

  return (
    <div className='main_container_heading'>
      <h3>{title}</h3>
      <button>Submit task</button>
    </div>
  )
}

export default TechnicalPMHeading