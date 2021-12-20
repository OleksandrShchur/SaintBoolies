import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='FooterStartPage'>
            <div class='Description'>
                <div>All rights reserved</div>
                <div class='DescriptionSeparator'>|</div>
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