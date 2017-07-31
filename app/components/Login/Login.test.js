import React from 'react';
import { shallow } from 'enzyme';
import Login from './Login';

describe('Login.js', () => {
  const mockFn = jest.fn();
  const wrapper = shallow(<Login submitLogin={mockFn}/>);
  const button = wrapper.find('form');
  const emailInput = wrapper.find('.login-email');
  const passwordInput = wrapper.find('.login-password');

  afterEach(() => {
    wrapper.setState({email: '', password: ''});
    mockFn.mockReset();
  });

  it('Should render the correct component when it mounts', () => {
    expect(wrapper.find('.login-component').length).toBe(1);
    expect(wrapper.find('h1').length).toBe(1);
    expect(wrapper.find('input').length).toBe(2);
    expect(wrapper.find('button').length).toBe(1);
  });

  it('Should run function when the submit button is clicked', () => {
    expect(mockFn).toHaveBeenCalledTimes(0);

    button.simulate('submit', {
      preventDefault: () =>{},
    });
    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  it('Should state with an initial state of empty strings', () => {
    expect(wrapper.state().email).toBe('');
    expect(wrapper.state().password).toBe('');
  });

  it('Should update state when a user inputs data', () => {
    expect(wrapper.state().email).toBe('');
    expect(wrapper.state().password).toBe('');

    emailInput.simulate('change', {
      target: {
        name: 'email',
        value: 'itslitfam@aol.com',
      },
    });

    passwordInput.simulate('change', {
      target: {
        name: 'password',
        value: 'whytho',
      },
    });

    expect(wrapper.state().email).toBe('itslitfam@aol.com');
    expect(wrapper.state().password).toBe('whytho');
  });

  it('Should return state to empty strings on user clicking submit button', () => {
    expect(wrapper.state().email).toBe('');
    expect(wrapper.state().password).toBe('');

    emailInput.simulate('change', {
      target: {
        name: 'email',
        value: 'itslitfam@aol.com',
      },
    });

    passwordInput.simulate('change', {
      target: {
        name: 'password',
        value: 'whytho',
      },
    });

    expect(mockFn).toHaveBeenCalledTimes(0);
    expect(wrapper.state().email).toBe('itslitfam@aol.com');
    expect(wrapper.state().password).toBe('whytho');

    button.simulate('submit', {
      preventDefault: () =>{},
    });

    expect(mockFn).toHaveBeenCalledTimes(1);
    expect(wrapper.state().email).toBe('');
    expect(wrapper.state().password).toBe('');
  });
});
