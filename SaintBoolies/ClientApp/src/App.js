import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { SignUp } from './components/SignUp';
import { SignIn } from './components/SignIn';
import { AboutUs } from './components/AboutUs';
import { ContactUs } from './components/ContactUs';

import './custom.css'

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
            <Route exact path='/AboutUs' component={AboutUs} />
            <Route exact path='/ContactUs' component={ContactUs} />
          </Switch>
      </Layout>
    </BrowserRouter>
    );
  }
}
