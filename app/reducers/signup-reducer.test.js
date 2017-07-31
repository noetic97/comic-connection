import { signupCreds } from './signup-reducer';

describe('login reducer', () => {
  it('signupCreds should return an initial state of an empty object', () => {
    expect(signupCreds(undefined, {})).toEqual({});
  });

  it('signupCreds should return the signupCreds to state when a user logs in', () => {
    expect(signupCreds(signupCreds, {
      type: 'SIGNUP_USER',
      signupCreds,
    })).toEqual(signupCreds);
  });

  it('signupCreds should return an empty object when a user logs out', () => {
    expect(signupCreds(undefined, {
      type: 'LOGOUT_USER',
    })).toEqual({});
  });
});
