import * as React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DeleteIcon from '@material-ui/icons/Delete';

import '../../styles/ModalStyles.css'

export default function ModalDeleteItem() {
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
    border: 'solid 1px',
    backgroundColor: '#128EE5', 
    color: '#fff',
    padding: '5px 40px'
  }

  const Text = {
    color: '#000'
  }

  return (
    <div className='ModalWindow'>
      <DeleteIcon onClick={handleClickOpen} />
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-description" style={Text}>Delete this item?</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} style={ButtonNo}>No</Button>
          <Button onClick={handleClose} style={ButtonYes}>Yes</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}