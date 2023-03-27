import React from 'react'
import Card from '../Card/Card'
import "./GridBox.css"
function GridBox({assets}) {
  return (
    <div className='grid_parent_container'>
        {assets.length>0&&assets.map((el,index)=>(
          <Card key={index} props={el} />
        ))
       
}
    </div>
  )
}

export default GridBox