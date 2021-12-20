import React from 'react'
import FormExit from './FormExit'
import {useState} from 'react'
import AlertDialog from './AlertDialog';
var showform = false;

function shw() {
    return(
        <FormExit/>
    )
    }

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
