import * as React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import AddIcon from '@material-ui/icons/Add';
import api from '../../services/apiService';

export default function ModalAddNote(props) {
    const { groupId, onSave } = props;
    const [open, setOpen] = React.useState(false);
    const [title, setTitle] = React.useState('');
    const [text, setText] = React.useState('');

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleAdd = async () => {
        const data = {
            'groupId': groupId,
            'title': title,
            'text': text,
            'dateCreated': new Date()
        };

        const responce = await api.post(`Note`, data);

        if (responce.status >= 400) {
            alert("Failed to add new note");
        }
        else {
            onSave();
        }

        setOpen(false);
    };

    const handleChangeTitle = (event) => {
        setTitle(event.target.value);
    };

    const handleChangeText = (event) => {
        setText(event.target.value);
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
                <Button style={{ width: '247px' }}>
                    <div><AddIcon onClick={handleClickOpen} /></div>
                </Button>
            </div>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle style={Text}>Enter title and content of your note:</DialogTitle>
                <DialogContent>
                    <TextField
                        label='Title'
                        value={title}
                        autoFocus
                        onChange={handleChangeTitle}
                        style={{ width: 250 }}
                    />
                    <TextField
                        multiline
                        rows={2}
                        label='Content'
                        value={text}
                        onChange={handleChangeText}
                        style={{ width: 500 }}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} style={ButtonNo}>Cancel</Button>
                    <Button onClick={handleAdd} style={ButtonYes}>Save</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}