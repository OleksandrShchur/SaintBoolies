import React from 'react'
import del from '../images/delete.png'
import edt from '../images/edit.png'
import nev from '../images/new.png'
import AlertEditName from './AlertEditName'

function NoteGroup(props) {
    return (
        <div class='notes group'>
            {props.text}
            <a class='btnfloat'><img class='btn' fill="#128EE5" src={del} /></a>
            <a class='btnfloat'><AlertEditName /></a>
            <a class='btnfloat'><img class='btn' fill="#128EE5" src={nev} /></a>
            <svg height="25" width="25" class="trngl">
                <polygon points="12,7 5,20 20,20" class="triangle" fill="#128EE5" />
            </svg>
        </div>
    )
}

export default NoteGroup
