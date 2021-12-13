import React from 'react'

function NoteItself(props) {
    return (
        <div class='notes note'>
        {props.text}
            <a href='#' class='btnfloat'>Delete</a>
        </div>
    )
}

export default NoteItself
