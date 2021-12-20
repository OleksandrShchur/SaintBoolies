import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { SignUp } from './components/SignUp';
import { SignIn } from './components/SignIn';
import { NotesMainPage }from './components/NotesMainPage';
import { AboutUs } from './components/AboutUs';
import { ContactUs } from './components/ContactUs';
import './custom.css'
export default class App extends Component {

  render () {

    return (
    <BrowserRouter>
      <Layout>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/SignUp' component={SignUp} />
            <Route exact path='/SignIn' component={SignIn} />
            <Route exact path='/NotesMainPage' component={NotesMainPage} />
            <Route exact path='/AboutUs' component={AboutUs} />
            <Route exact path='/ContactUs' component={ContactUs} />
          </Switch>
      </Layout>
    </BrowserRouter>
    );
  }
}


