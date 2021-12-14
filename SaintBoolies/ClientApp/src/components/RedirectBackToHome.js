import React from 'react';
import { Link } from 'react-router-dom';


const RedirectBackToHome = () => {
    return (
        <Link path to='/' style={{ textDecoration: 'none', color: '#000' }}>
            <div className='BackButton'>
                <p style={{ margin: '0' }}>◄ Back</p>       
            </div>
        </Link> 
    );
  };

export default RedirectBackToHome