import React from 'react'
import ModalDeleteItem from '../Modals/ModalDeleteItem'
import ModalEditName from '../Modals/ModalEditName'
import Button from '@material-ui/core/Button';

function NoteItem(props) {
    return (
        <div class='NoteButton'>
            <Button>
                <div className='NoteName'>{props.text}</div>
            </Button>    
                <div className='NoteNameButton'><ModalDeleteItem /></div>
                <div className='NoteNameButton'><ModalEditName/></div>                
        </div>
    )
}

export default NoteItem
