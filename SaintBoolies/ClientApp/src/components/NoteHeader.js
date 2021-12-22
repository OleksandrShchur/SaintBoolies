import React from 'react'
import LogOutDialog from './LogOutDialog';

import '../styles/NoteHeader.css'

const NoteHeader = (props) => {
    return (
        <div className='NoteHeader'>
            <span className='NoteTitle'>
                {props.title}
            </span>
            <LogOutDialog/>
        </div>
    )
}

export default NoteHeader
