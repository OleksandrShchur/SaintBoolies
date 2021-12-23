import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import { Link } from 'react-router-dom';

import '../../styles/AboutContact.css'

export class ContactUs extends Component {

  render () {
    return (
      <div className='Container'>
        <Header />
            <div className='Content'> 
                <h1 className='Padding10'>Contact Us</h1>
                <h4>You can reach to us</h4>
                <div className='Padding10'>
                    <div><b>Oleksandr Shchur</b> | <Link>shchur.oleksandr@chnu.edu.ua</Link></div>
                    <div><b>Inna Shapovalova</b> | <Link>shapovalova.inna@chnu.edu.ua</Link></div>
                    <div><b>Den Burak</b> | <Link>burak.denys@chnu.edu.ua</Link></div>
                    <div><b>Andrii Madei</b> | <Link>madey.andriy@chnu.edu.ua</Link></div>
                </div>
            </div>
        <Footer />
      </div>
    );
  }
}