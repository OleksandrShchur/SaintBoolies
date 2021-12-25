import * as React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import EditIcon from '@material-ui/icons/Edit';
import api from '../../services/apiService';
import { useParams } from 'react-router-dom';

export default function ModalEditName(props) {
  const { groupId, onSave, title } = props;
  const [open, setOpen] = React.useState(false);
  const { userId } = useParams();
  const [newTitle, setNewTitle] = React.useState(title);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setNewTitle('');
  };

  const handleEdit = async () => {
    const data = {
      'id': groupId,
      'userId': userId,
      'name': newTitle
    };

    const responce = await api.put(`Group/${groupId}`, data);

    if (responce.status >= 400) {
      alert('Failed to update group title');
    }
    else {
      onSave();
    }

    setOpen(false);
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

  const handleChangeTitle = (event) => {
    setNewTitle(event.target.value);
  };

  return (
    <div>
      <div>
        <EditIcon onClick={handleClickOpen} />
      </div>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle style={Text}>Rename group</DialogTitle>
        <DialogContent>
          <TextField
          value={newTitle}
          onChange={handleChangeTitle}
            autoFocus
            style={{ width: 250 }}
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