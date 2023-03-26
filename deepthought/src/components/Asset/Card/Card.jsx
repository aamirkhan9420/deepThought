import React from 'react'
import "./Card.css"
import Description from './Description'
function Card() {
  return (
    <div>
        <div className='card_black_heading_box'>
            <h3>Technical Project Management</h3>
        </div>
        <Description />
    </div>
  )
}

export default Card