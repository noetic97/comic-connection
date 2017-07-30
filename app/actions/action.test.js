import * as actions from '../actions';

describe('actions', () => {
  it('comicBookArray should return an array', () => {
    const comics = [{
      title: 'Saga',
      id: '1345',
      description: 'blah, blah blah',
    }];
    const expectedState =  {
      type: 'ADD_COMICS_TO_STORE',
      comics,
    };

    expect(actions.comicBookArray(comics)).toEqual(expectedState);
  });

  it('isLoading should return a boolean', () => {
    const expectedState =  {
      type: 'COMICS_LOADING',
      bool: false,
    };

    expect(actions.isLoading(false)).toEqual(expectedState);
    expect(actions.isLoading(true)).not.toEqual(expectedState);
  });

  it('loginUser should return an object', () => {
    const userCreds = {
      email: 'joe@joe.joe',
      pasword: 'supersneaky',
    };
    const expectedState =  {
      type: 'LOGIN_USER',
      loginCreds: userCreds,
    };

    expect(actions.loginUser(userCreds)).toEqual(expectedState);
  });

  it('logOutUser should return nothing', () => {
    const expectedState =  {
      type: 'LOGOUT_USER',
    };

    expect(actions.logOutUser()).toEqual(expectedState);
  });

  it('signupUser should return an object', () => {
    const signupMock = {
      name: 'ME',
      username: 'NOTYOU',
      email: 'we@us.com',
      password: 'NeverGuessMe',
    };
    const expectedState =  {
      type: 'SIGNUP_USER',
      signupCreds: signupMock,
    };

    expect(actions.signupUser(signupMock)).toEqual(expectedState);
  });
});
