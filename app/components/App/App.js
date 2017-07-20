import React, { Component } from 'react';
import { Route } from 'react-router';
import Header from '../Header/Header';
import LoginContainer from '../../containers/LoginContainer';

export default class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <h1>The Comic Connect</h1>
        <Header />
        <Route path='/login'
               component={LoginContainer} />
      </div>
    )
  }
}
