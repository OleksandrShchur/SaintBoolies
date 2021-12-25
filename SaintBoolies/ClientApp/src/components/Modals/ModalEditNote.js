import * as React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import EditIcon from '@material-ui/icons/Edit';
import api from '../../services/apiService';

export default function ModalEditNote(props) {
    const { noteId, onSave, title, text, groupId, handleNoteModified } = props;
    const [open, setOpen] = React.useState(false);
    const [newTitle, setNewTitle] = React.useState(title);
    const [newText, setNewText] = React.useState(text);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setNewText('');
        setNewTitle('');
    };

    const handleEdit = async () => {
        const data = {
            'id': noteId,
            'title': newTitle,
            'text': newText,
            'groupId': groupId
        };

        const responce = await api.put(`Note/${noteId}`, data);

        if (responce.status >= 400) {
            alert("Failed to update note");
        }
        else {
            onSave();
        }

        setOpen(false);
        handleNoteModified(true);
    };

    const handleChangeTitle = (event) => {
        setNewTitle(event.target.value);
    };

    const handleChangeText = (event) => {
        setNewText(event.target.value);
    };

    const ButtonNo = {
        border: 'solid 1px',
        borderColor: '#128EE5',
        color: '#128EE5',
        padding: '5px 40px'
    };

    const ButtonYes = {
        backgroundColor: '#128EE5',
        color: '#fff',
        padding: '5px 40px'
    };

    const Text = {
        color: '#000'
    };

    return (
        <div>
            <div>
                <EditIcon onClick={handleClickOpen} />
            </div>

            <Dialog open={open} onClose={handleClose}>
                <DialogTitle style={Text}>Update title and content of your note:</DialogTitle>
                <DialogContent>
                    <TextField
                        label='Title'
                        value={newTitle}
                        autoFocus
                        onChange={handleChangeTitle}
                        style={{ width: 250 }}
                    />
                    <TextField
                        multiline
                        rows={10}
                        label='Content'
                        value={newText}
                        onChange={handleChangeText}
                        style={{ width: 550 }}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} style={ButtonNo}>Cancel</Button>
                    <Button onClick={handleEdit} style={ButtonYes}>Save</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}