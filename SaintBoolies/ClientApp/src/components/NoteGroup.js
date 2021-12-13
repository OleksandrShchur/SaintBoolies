import React from 'react'
import logo from '../images/delete.png'

function NoteGroup(props) {
    return (
        <div class='notes group'>
        {props.text}
        <a href='#' class='btnfloat'><img class='btn' fill="#128EE5" src={logo}/></a>
        <svg height="25" width="25" class="trngl">
            <polygon points="12,7 5,20 20,20" class="triangle" fill="#128EE5"/>
        </svg>
        </div>
    )
}

export default NoteGroup
