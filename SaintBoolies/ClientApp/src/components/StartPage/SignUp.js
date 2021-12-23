import React from 'react';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import RedirectBackToHome from './RedirectBackToHome';
import api from '../../services/apiService';
import SignUpEnum from '../../enums/SignUpEnum';
import { useHistory } from 'react-router-dom';
import '../../styles/LoginRegistrationForm.css'

export function SignUp() {
  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (event.target[SignUpEnum.Password].value !== event.target[SignUpEnum.RepeatPassword].value) {
      alert("Password does not match!");
    }
    else {
      const data = {
        'login': event.target[SignUpEnum.Login].value,
        'email': event.target[SignUpEnum.Email].value,
        'password': event.target[SignUpEnum.Password].value
      };

      const responce = await api.post(`User/AddUser`, data);

      if (responce.status === 200) {
        history.push("/NotesPage");
      }
      else {
        alert("Sign up failed!");
      }
    }
  };

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

