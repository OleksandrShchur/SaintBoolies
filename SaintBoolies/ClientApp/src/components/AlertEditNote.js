import * as React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import edt from '../images/edit.png';

export default function AlertEditNote() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
    <img class='btn' fill="#128EE5" src={edt} onClick={handleClickOpen} alt='Edit'/>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Edit note</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            multiline
            style = {{width: 500}}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}