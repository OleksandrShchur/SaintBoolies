import React from 'react'
import del from '../images/delete.png'
import edt from '../images/edit.png'
import AlertEditNote from './AlertEditNote'

function NoteItself(props) {
    return (
        <div class='notes note'>
            {props.text}
            <a class='btnfloat'><img class='btn' fill="#128EE5" src={del} /></a>
            <a class='btnfloat'><AlertEditNote /></a>
        </div>
    )
}

export default NoteItself
