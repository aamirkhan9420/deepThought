import React from 'react'
import "./NoteBox.css"
function NoteBox({task_description, task_title}) {
    return (
        <div className='note_box_container'>
          <div>{task_title}</div>
          <div>
            {task_description}
          </div>
         
        </div>
    )
}

export default NoteBox