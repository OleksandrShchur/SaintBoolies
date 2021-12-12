import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

export class Home extends Component {
  static displayName = Home.name;

  render () {
    return (
      <div className='Container'>

        <div className='HeaderStartPage'>
          <p className='HeaderText'>Duly Noted</p>
        </div>

        <div className='ContentStartPage'>

          <div className='ImageStartPage'></div>  
          <h1>You've got things to save? Duly Noted!</h1>
          
          <div className='ButtonBlock'>
            <Button variant='contained' style={{
              borderRadius: 5,
              backgroundColor: '#128EE5',
              padding: '12px 40px',
              fontSize: "18px",
              color: '#fff'
            }}>Sign Up</Button>

            <Button variant='outlined' style={{
              borderRadius: 5,
              border: '1px solid #128EE5',
              padding: '12px 40px',
              fontSize: "18px",
              color: '#128EE5'
            }}>Sign In</Button>

          </div>

          <p>Let me guess, default text editor is far to basic and taking notes in Word or something like that seems a little bit far fetched? Well, have we got a solution for you! </p>

        </div>
        
        <div className='FooterStartPage'>
          <p>All rights reserved</p>
        </div>

      </div>
    );
  }
}
