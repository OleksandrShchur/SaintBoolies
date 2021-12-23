import React, { Component } from 'react';
import Sidebar from './NotePage/Sidebar';
import Note from './NotePage/Note';


export class NotesPage extends Component {

    render() {
        return (
            <div>
                <Sidebar />
                <Note />
            </div>
        );
    }
}