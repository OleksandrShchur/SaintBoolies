import * as React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import EditIcon from '@material-ui/icons/Edit';

export default function ModalEditName() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const ButtonNo = {
    border: 'solid 1px',
    borderColor: '#128EE5', 
    color: '#128EE5',
    padding: '5px 40px'
  }

  const ButtonYes = {
    backgroundColor: '#128EE5', 
    color: '#fff',
    padding: '5px 40px'
  }

  const Text = {
    color: '#000'
  }

  return (
    <div>
      <div>
          <EditIcon onClick={handleClickOpen} />
      </div>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle style={Text}>Rename</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            style = {{width: 230}}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} style={ButtonNo}>Cancel</Button>
          <Button onClick={handleClose} style={ButtonYes}>Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}