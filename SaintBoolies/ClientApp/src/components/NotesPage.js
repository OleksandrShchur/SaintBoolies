import React from 'react';
import Sidebar from './NotePage/Sidebar';
import Note from './NotePage/Note';


export const NotesPage = () => {
    const [noteId, setNoteId] = React.useState();
    const [modified, setModified] = React.useState(false);

    const handleNote = (noteId) => {
        setNoteId(noteId);
        console.log(noteId);
    };
    
    const handleNoteModified = (isModified) => {
        setModified(isModified);
    };

    return (
        <div>
            <Sidebar handleNote={handleNote} handleNoteModified={handleNoteModified} />
            <Note noteId={noteId} isModified={modified} handleNoteModified={handleNoteModified} />
        </div>
    );
}