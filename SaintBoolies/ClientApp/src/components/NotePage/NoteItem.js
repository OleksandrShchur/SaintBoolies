import React from 'react';
import ModalDeleteItem from '../Modals/ModalDeleteItem';
import ModalEditNote from '../Modals/ModalEditNote';
import Button from '@material-ui/core/Button';

function NoteItem(props) {
    const { noteId, handleNote, onSave, text, content, groupId, handleNoteModified } = props;

    const handleClick = () => {
        handleNote(noteId);
    };

    return (
        <div class='NoteButton'>
            <Button onClick={handleClick}>
                <div className='NoteName'>{props.text}</div>
            </Button>
            <div className='NoteNameButton'>
                <ModalDeleteItem id={noteId} title='Delete this note?' onSave={onSave} />
            </div>
            <div className='NoteNameButton'>
                <ModalEditNote noteId={noteId}
                    onSave={onSave}
                    title={text}
                    text={content}
                    groupId={groupId}
                    handleNoteModified={handleNoteModified}
                />
            </div>
        </div>
    )
}

export default NoteItem
