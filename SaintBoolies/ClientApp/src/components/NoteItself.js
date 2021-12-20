import React from 'react'
import del from '../images/delete.png'
import edt from '../images/edit.png'

function NoteItself(props) {
    return (
        <div class='notes note'>
        {props.text}
        <a href='#' class='btnfloat'><img class='btn' fill="#128EE5" src={del}/></a>
        <a href='#' class='btnfloat'><img class='btn' fill="#128EE5" src={edt}/></a>
        </div>
    )
}

export default NoteItself
