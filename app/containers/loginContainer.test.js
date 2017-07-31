import React from 'react';
import { mount  } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import LoginContainer from './LoginContainer';
import Login from '../components/Login/Login';

const mockStore = configureMockStore()({
  userCreds: {
    email: '',
    password: '',
  },
});

const setup = () => {
  const Container = mount(<Provider store={mockStore}><LoginContainer /></Provider>);
  const Component = Container.find(Login);

  return {
    Container,
    Component,
  };
};

describe('LoginContainer', () => {
  const { Container, Component } = setup();
  it('should pass the appropriate props from state', () => {
    expect(Object.keys(Component.props())).toContain('submitLogin');
  });

  it('should pass down the correct action creators', () => {
    expect(Object.keys(Container.props().store)).toContain('dispatch');
  });
});
