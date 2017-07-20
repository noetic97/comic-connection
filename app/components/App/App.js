import React, { Component } from 'react';
import { Route } from 'react-router';
import Header from '../Header/Header';
import ComicBookList from '../ComicBookList/ComicBookList';
import LoginContainer from '../../containers/LoginContainer';
import SignupContainer from '../../containers/SignupContainer';

export default class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Header />
        <Route path="/login"
               exact
               component={LoginContainer} />
        <Route path="/signup"
               exact
               component={SignupContainer} />
        <ComicBookList />
      </div>
    );
  }
}
