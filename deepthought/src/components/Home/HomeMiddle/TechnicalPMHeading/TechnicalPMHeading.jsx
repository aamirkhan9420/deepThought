import React from 'react'
import "./TechnicalPMHeading.css"

function TechnicalPMHeading({title}) {

  return (
    <div className='main_container_heading'>
      <div>
          {title}
      </div>
    
      <button>Submit task</button>
    </div>
  )
}

export default TechnicalPMHeading