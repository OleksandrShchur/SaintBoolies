import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { StartPage } from './components/StartPage';
import { SignUp } from './components/StartPage/SignUp';
import { SignIn } from './components/StartPage/SignIn';
import { AboutUs } from './components/StartPage/AboutUs';
import { ContactUs } from './components/StartPage/ContactUs';
import { NotesPage }from './components/NotesPage';

import './styles/custom.css'

export default class App extends Component {

  render () {

    return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={StartPage} />
        <Route exact path='/SignUp' component={SignUp} />
        <Route exact path='/SignIn' component={SignIn} />
        <Route exact path='/AboutUs' component={AboutUs} />
        <Route exact path='/ContactUs' component={ContactUs} />
        <Route exact path='/NotesPage/:userId' component={NotesPage} />
      </Switch>
    </BrowserRouter>
    );
  }
}


