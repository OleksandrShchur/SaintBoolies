import * as React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import api from '../services/apiService';
import { useHistory } from 'react-router-dom';

import '../../styles/ModalStyles.css'

export default function LogOutDialog() {
  const [open, setOpen] = React.useState(false);
  const history = useHistory();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleLogout = async () => {
    const responce = await api.get(`User/Logout`);

    if (responce.status === 200) {
      history.push("/");
      setOpen(false);
    }
    else {
      alert("An unhandled error appear. Please, try again or contact us");
      setOpen(false);
    }
  }

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
    <div className='ModalWindow'>
      <Button onClick={handleClickOpen}>Log Out</Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-description" style={Text}>Do you really want to exit?</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} style={ButtonNo}>No</Button>
          <Button onClick={handleLogout} style={ButtonYes} autoFocus>
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}