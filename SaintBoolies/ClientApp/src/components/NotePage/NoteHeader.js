import React from 'react'
import ModalLogOut from '../Modals/ModalLogOut';

import '../../styles/NoteHeader.css'

const NoteHeader = (props) => {
    return (
        <div className='NoteHeader'>
            <span className='NoteTitle'>
                {props.title}
            </span>
            <ModalLogOut/>
        </div>
    )
}

export default NoteHeader
