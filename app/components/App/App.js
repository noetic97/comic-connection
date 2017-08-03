import React, { Component } from 'react';
import { Route } from 'react-router';
import Header from '../Header/Header';
import LoginContainer from '../../containers/LoginContainer';
import SignupContainer from '../../containers/SignupContainer';
import ComicBookListContainer from '../../containers/ComicBookListContainer';
import SavedComicsContainer from '../../containers/SavedComicsContainer';

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
               exact
               component={ComicBookListContainer} />
        <Route path="/saved-comics"
               exact
               component={SavedComicsContainer} />
      </div>
    );
  }
}
