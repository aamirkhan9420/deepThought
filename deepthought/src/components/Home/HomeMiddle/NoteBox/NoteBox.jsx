import React from 'react'
import "./NoteBox.css"
function NoteBox({task_description, task_title}) {
    return (
        <div className='note_box_container'>
            <h2>{task_title}</h2>
            <h3>{task_description}</h3>
        </div>
    )
}

export default NoteBox