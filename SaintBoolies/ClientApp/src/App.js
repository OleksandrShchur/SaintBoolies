import React, { Component,useState } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import Sidebar from './components/Sidebar';
import Note from './components/Note';
import './custom.css'
import Button from "@material-ui/core/Button";
import AlertDialog from './components/AlertDialog';
export default class App extends Component {
  static displayName = App.name;

  
  
  render () {

    return (
      <div className="App">
      <Sidebar /> 
      <Note />
      </div>
    );
  }
}


