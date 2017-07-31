import React from 'react';
import { mount  } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import SignupContainer from './SignupContainer';
import Signup from '../components/Signup/Signup';

const mockStore = configureMockStore()({
  userCreds: {
    email: '',
    password: '',
  },
});

const setup = () => {
  const Container = mount(<Provider store={mockStore}><SignupContainer /></Provider>);
  const Component = Container.find(Signup);

  return {
    Container,
    Component,
  };
};

describe('SignupContainer', () => {
  const { Container, Component } = setup();
  it('should pass the appropriate props from state', () => {
    expect(Object.keys(Component.props())).toContain('submitSignup');
  });

  it('should pass down the correct action creators', () => {
    expect(Object.keys(Container.props().store)).toContain('dispatch');
  });
});
