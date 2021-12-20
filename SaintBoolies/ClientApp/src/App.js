

import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { SignUp } from './components/SignUp';
import { SignIn } from './components/SignIn';
import { NotesMainPage } from './components/NotesMainPage';
import './custom.css'
import Button from "@material-ui/core/Button";
import AlertDialog from './components/AlertDialog';
export default class App extends Component {
  static displayName = App.name;

  
  
  render () {

    return (
    <BrowserRouter>
      <Layout>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/SignUp' component={SignUp} />
            <Route exact path='/SignIn' component={SignIn} />
          </Switch>
      </Layout>
    </BrowserRouter>

    );
  }
}


