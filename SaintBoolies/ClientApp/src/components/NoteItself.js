import React from 'react'
import del from '../images/delete.png'
import AlertEditNote from './AlertEditNote'

function NoteItself(props) {
    return (
        <div class='notes note'>
            {props.text}
            <div class='btnfloat'><img class='btn' fill="#128EE5" src={del} alt='Delet'/></div>
            <div class='btnfloat'><AlertEditNote /></div>
        </div>
    )
}

export default NoteItself
