import React, { Component } from 'react';
import { BrowseRouter, Route, Redirect, Switch, BrowserRouter } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import Sidebar from './components/Sidebar';
import Note from './components/Note';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';

import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <BrowserRouter>
        <Switch>
          <Route patn="/" Component = {SignIn} />
          <Route path="/SignUp" Component = {SignUp} />
        </Switch>
      </BrowserRouter>
    );
  }
}
