import React, { useEffect } from 'react';
import NoteHeader from './NoteHeader';
import NoteText from './NoteText';
import api from '../../services/apiService';
import '../../styles/Note.css';

const Note = (props) => {
    const { noteId, isModified, handleNoteModified } = props;
    const [note, setNote] = React.useState({});

    const fetchNotes = async () => {
        if (noteId !== undefined || noteId !== null) {
            const responce = await api.get(`Note/${noteId}`);

            if (responce.status >= 399) {
                alert('Something went wrong. Please, try again or contact us');
            }
            else {
                setNote(responce.data);
            }
        }
    };

    useEffect(() => {
        fetchNotes();
    }, [noteId]);

    useEffect(() => {
        if (isModified === true) {
            fetchNotes();
            handleNoteModified(false);
        }
    });

    return (
        <div class='noteClass'>
            <NoteHeader title={note.title} />
            <NoteText notetxt={note.text} />
        </div>
    )
}

export default Note
