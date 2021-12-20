import React, { Component } from 'react';
import Sidebar from './Sidebar';
import Note from './Note';


export class NotesMainPage extends Component {

    render() {
        return (
            <div>
                <Sidebar />
                <Note />
            </div>
        );
    }
}