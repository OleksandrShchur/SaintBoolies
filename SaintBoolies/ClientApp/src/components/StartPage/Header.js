import React from 'react';
import { Link } from 'react-router-dom';

import '../../styles/Header.css'

const Header = () => {
  return (
    <div className='HeaderStartPage'>
      <Link path to='/' style={{ textDecoration: 'none' }}>
        <p className='HeaderText'>Duly Noted</p>
      </Link>
    </div>
  );
};

export default Header;

  export default Header