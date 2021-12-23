import React from 'react';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import RedirectBackToHome from './RedirectBackToHome';
import { useHistory } from "react-router-dom";
import SignInEnum from '../enums/SignInEnum';
import api from '../services/apiService';

export default function SignIn() {
  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      'email': event.target[SignInEnum.Email].value,
      'password': event.target[SignInEnum.Password].value
    };
    const responce = await api.post(`User/Login`, data);

    if (responce.status === 200) {
      history.push("/NotesMainPage");
    }
    else {
      alert("Sign in failed!");
    }
  };

  return (
    <div>
      <RedirectBackToHome />
      <div className='LoginBox'>
        <Card variant='outlined'>
          <form className='LoginCard' onSubmit={handleSubmit}>
            <div className='LoginHeaderText LoginText'>
              <p>Sign In</p>
            </div>
            <TextField
              label='Email'
              variant='filled'
              type='email'
              required
              style={{ margin: '8px' }}
              name='email'
            />
            <TextField
              label='Password'
              variant='filled'
              type='password'
              required
              style={{ margin: '8px' }}
              name='password'
            />
            <div className='LoginButton'>
              <Button type='submit' variant='contained' color='primary'>
                Sign In
              </Button>
            </div>
            <div className='LoginText'>
              <p>Are you not registered? <Link path to="/SignUp">Sign Up</Link></p>
            </div>
          </form>
        </Card>
      </div>
    </div>
  )
}
