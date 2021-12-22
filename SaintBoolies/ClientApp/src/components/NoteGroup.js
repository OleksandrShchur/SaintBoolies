import React from 'react'
import del from '../images/delete.png'
import nev from '../images/new.png'
import AlertEditName from './AlertEditName'

import '../styles/NoteGroup.css'

function NoteGroup(props) {
    return (
        <div class='notes group'>
            {props.text}
            <div class='btnfloat'><img class='btn' fill="#128EE5" src={del} alt='Delet'/></div>
            <div class='btnfloat'><AlertEditName /></div>
            <div class='btnfloat'><img class='btn' fill="#128EE5" src={nev} alt='Edit'/></div>
            <svg height="25" width="25" class="trngl">
                <polygon points="12,7 5,20 20,20" class="triangle" fill="#128EE5" />
            </svg>
        </div>
    )
}

export default NoteGroup
