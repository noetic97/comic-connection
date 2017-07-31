import React, { Component } from 'react';
import { Route } from 'react-router';
import Header from '../Header/Header';
import Loader from '../Loader/Loader';
import LoginContainer from '../../containers/LoginContainer';
import SignupContainer from '../../containers/SignupContainer';
import ComicBookListContainer from '../../containers/ComicBookListContainer';

export default class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Route path="/"
               component={Header} />
        <Route path="/login"
               exact
               component={LoginContainer} />
        <Route path="/signup"
               exact
               component={SignupContainer} />
        <Route path="/"
               component={ComicBookListContainer} />
      </div>
    );
  }
}
