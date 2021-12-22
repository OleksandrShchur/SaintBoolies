import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';

import '../styles/AboutContact.css'

export class AboutUs extends Component {
  static displayName = AboutUs.name;

  render () {
    return (
      <div className='Container'>
        <Header />
            <div className='Content'> 
                <h1 className='Padding10'>About Us</h1>
                <div className='AboutUsText'>This project is a simple e-notebook. Its functionality is relatively simple. First, you can create and edit notes via a floatable form. Secondly, you can group these notes for convenience sake. But in order to do all of that, you should create an account, which doesn't require neither much time nor information.</div>
                <div className='Padding10'>
                    <h2>Created by</h2>
                        <div>Oleksandr Shchur</div>
                        <div>Inna Shapovalova</div>
                        <div>Den Burak</div>
                        <div>Andrii Madei</div>
                </div>
                <div className='Padding10'>
                    <h4>Source:</h4>
                    <a href='https://github.com/OleksandrShchur/SaintBoolies.git'>GitHub</a>
                </div>
            </div>
        <Footer />
      </div>
    );
  }
}