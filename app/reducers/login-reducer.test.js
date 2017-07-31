import { loginCreds } from './login-reducer';

describe('login reducer', () => {
  it('loginCreds should return an initial state of an empty object', () => {
    expect(loginCreds(undefined, {})).toEqual({});
  });

  it('loginCreds should return the loginCreds to state when a user logs in', () => {
    expect(loginCreds(loginCreds, {
      type: 'LOGIN_USER',
      loginCreds,
    })).toEqual(loginCreds);
  });

  it('loginCreds should return an empty object when a user logs out', () => {
    expect(loginCreds(undefined, {
      type: 'LOGOUT_USER',
    })).toEqual({});
  });
});
