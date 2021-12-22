import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import RedirectBackToHome from './RedirectBackToHome';

import '../styles/LoginRegistrationForm.css'

export class SignUp extends Component {
  
  render () {
    return (
    <div>
      <RedirectBackToHome />
      <div className='LoginBox'>      
        <Card variant='outlined'>
          <form className='LoginCard'>
            <div className='LoginHeaderText LoginText'>
              <p>Sign Up</p>
            </div>
            <TextField
              label='Nickname'
              variant='filled'
              required
              style={{margin: '8px'}}
            />
            <TextField
              label='Email'
              variant='filled'
              type='email'
              required
              style={{margin: '8px'}}
            />
            <TextField
              label='Password'
              variant='filled'
              type='password'
              required
              style={{margin: '8px'}}
            />
            <TextField
              label='Repeat password'
              variant='filled'
              type='password'
              required
              style={{margin: '8px'}}
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
}

