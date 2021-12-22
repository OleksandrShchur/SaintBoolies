import React from 'react'
import AlertDialog from './AlertDialog';

import '../styles/NoteHeader.css'

const NoteHeader = (props) => {
    return (
        <div class='header'>
            
            <span class='title'>
                {props.title}
            </span>
                <AlertDialog/>
        </div>
    )
}

export default NoteHeader
