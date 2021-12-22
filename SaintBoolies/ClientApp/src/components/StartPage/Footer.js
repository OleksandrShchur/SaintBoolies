import React from 'react';
import { Link } from 'react-router-dom';

import '../../styles/Footer.css'

const Footer = () => {
    return (
        <div className='FooterStartPage'>
            <div className='Description'>
                <div>All rights reserved</div>
                <div className='DescriptionSeparator'>|</div>
                <div>{(new Date().getFullYear())}</div>
            </div>
            <div class='Description DescriptionLinks'>
                <div><Link path to='/'>Home</Link></div>
                <div><Link path to='/AboutUs'>About Us</Link></div>
                <div><Link path to='/ContactUs'>Contact Us</Link></div>
            </div>
        </div>
    );
  };

export default Footer