import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import RedirectBackToHome from './RedirectBackToHome';
import api from '../services/apiService';

export default function SignUp() {
  const [login, setLogin] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLogin(event.target.login.value);
    setEmail(event.target.email.value);
    setPassword(event.target.password.value);
    console.log(event.target);

    if (password === event.target.repeatPassword) {
      alert("Password does not match!");
    }
    else {
      const data = {
        'login': login,
        'email': email,
        'password': password
      };

      const responce = await api.post(`User/AddUser`, data);
      console.log(responce.data);
    }
  }

  return (
    <div>
      <RedirectBackToHome />
      <div className='LoginBox'>
        <Card variant='outlined'>
          <form className='LoginCard' onSubmit={handleSubmit}>
            <div className='LoginHeaderText LoginText'>
              <p>Sign Up</p>
            </div>
            <TextField
              label='Nickname'
              variant='filled'
              required
              style={{ margin: '8px' }}
              name='login'
            />
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
            <TextField
              label='Repeat password'
              variant='filled'
              type='password'
              required
              style={{ margin: '8px' }}
              name='repeatPassword'
            />
            <div className='LoginButton'>
              <Button type='submit' variant='contained' color='primary'>
                Sign Up
              </Button>
            </div>
            <div className='LoginText'>
              <p>Are you registered? <Link path to="/SignIn">Sign In</Link></p>
            </div>
          </form>
        </Card>
      </div>
    </div>
  );
}

