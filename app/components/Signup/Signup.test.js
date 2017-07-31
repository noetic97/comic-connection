import React from 'react';
import { shallow } from 'enzyme';
import Signup from './Signup';

describe('Signup.js', () => {
  const mockFn = jest.fn();
  const wrapper = shallow(<Signup submitSignup={mockFn}/>);
  const button = wrapper.find('form');
  const nameInput = wrapper.find('.signup-name');
  const usernameInput = wrapper.find('.signup-username');
  const emailInput = wrapper.find('.signup-email');
  const passwordInput = wrapper.find('.signup-password');
  const passwordVerifyInput = wrapper.find('.signup-password-verify');

  afterEach(() => {
    wrapper.setState({
      name: '',
      username: '',
      email: '',
      password: '',
      passwordVerify: ''});
    mockFn.mockReset();
  });

  it('Should render the correct component when it mounts', () => {
    expect(wrapper.find('.signup-component').length).toBe(1);
    expect(wrapper.find('h1').length).toBe(1);
    expect(wrapper.find('input').length).toBe(5);
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
    expect(wrapper.state().name).toBe('');
    expect(wrapper.state().username).toBe('');
    expect(wrapper.state().email).toBe('');
    expect(wrapper.state().password).toBe('');
    expect(wrapper.state().passwordVerify).toBe('');
  });

  it('Should update state when a user inputs data', () => {
    expect(wrapper.state().name).toBe('');
    expect(wrapper.state().username).toBe('');
    expect(wrapper.state().email).toBe('');
    expect(wrapper.state().password).toBe('');
    expect(wrapper.state().passwordVerify).toBe('');

    nameInput.simulate('change', {
      target: {
        name: 'name',
        value: 'Jesus',
      },
    });

    usernameInput.simulate('change', {
      target: {
        name: 'username',
        value: 'waterwalker69',
      },
    });

    emailInput.simulate('change', {
      target: {
        name: 'email',
        value: 'therealjesus79@aol.com',
      },
    });

    passwordInput.simulate('change', {
      target: {
        name: 'password',
        value: 'notcomingback',
      },
    });

    passwordVerifyInput.simulate('change', {
      target: {
        name: 'passwordVerify',
        value: 'notcomingback',
      },
    });

    expect(wrapper.state().name).toBe('Jesus');
    expect(wrapper.state().username).toBe('waterwalker69');
    expect(wrapper.state().email).toBe('therealjesus79@aol.com');
    expect(wrapper.state().password).toBe('notcomingback');
    expect(wrapper.state().passwordVerify).toBe('notcomingback');
  });

  it('Should return state to empty strings on user clicking submit button', () => {
    expect(wrapper.state().name).toBe('');
    expect(wrapper.state().username).toBe('');
    expect(wrapper.state().email).toBe('');
    expect(wrapper.state().password).toBe('');
    expect(wrapper.state().passwordVerify).toBe('');

    nameInput.simulate('change', {
      target: {
        name: 'name',
        value: 'Bob Boberson',
      },
    });

    usernameInput.simulate('change', {
      target: {
        name: 'username',
        value: 'bobber',
      },
    });

    emailInput.simulate('change', {
      target: {
        name: 'email',
        value: 'bobob@aol.com',
      },
    });

    passwordInput.simulate('change', {
      target: {
        name: 'password',
        value: 'notrobert',
      },
    });

    passwordVerifyInput.simulate('change', {
      target: {
        name: 'passwordVerify',
        value: 'notrobert',
      },
    });

    expect(mockFn).toHaveBeenCalledTimes(0);
    expect(wrapper.state().name).toBe('Bob Boberson');
    expect(wrapper.state().username).toBe('bobber');
    expect(wrapper.state().email).toBe('bobob@aol.com');
    expect(wrapper.state().password).toBe('notrobert');
    expect(wrapper.state().passwordVerify).toBe('notrobert');

    button.simulate('submit', {
      preventDefault: () =>{},
    });

    expect(mockFn).toHaveBeenCalledTimes(1);
    expect(wrapper.state().name).toBe('');
    expect(wrapper.state().username).toBe('');
    expect(wrapper.state().email).toBe('');
    expect(wrapper.state().password).toBe('');
    expect(wrapper.state().passwordVerify).toBe('');
  });
});
