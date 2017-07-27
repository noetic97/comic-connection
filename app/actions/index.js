import { fetchSelectedGenre } from '../helpers/fetch-calls';
import { PROXY_URL } from '../helpers/constants';

export const fetchComics = (genre) => {
  return (dispatch) => {
    fetchSelectedGenre(genre)
    .then(res => Promise.all(res))
    .then(items => dispatch(comicBookArray(items)))
    .catch(err => console.log(err));
  };
};

export const comicBookArray = (comics) => {
  return {
    type: 'ADD_COMICS_TO_STORE',
    comics,
  };
};

export const postLoginUser = (userCreds) => {
  return (dispatch) => {
    fetch('/api/v1/users')
  .then(res => console.log(res))
  // .then(data => console.log(data))
  };
};

export const loginUser = (loginCreds) => {
  return {
    type: 'LOGIN_USER',
    loginCreds,
  };
};

export const logOutUser = () => {
  return {
    type: 'LOGOUT_USER',
  };
};

export const postSignupUser = (signupCreds) => {
  return (dispatch) => {
    fetch('/api/v1/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: signupCreds.name,
        username: signupCreds.username,
        email: signupCreds.email,
        password: signupCreds.password,
      }),
    })
  .then(response => {
    console.log(response)
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
  })
  .then(response => response.json())
  .then(userData => console.log(userData));
  };
};

export const signupUser = (signupCreds) => {
  return {
    type: 'SIGNUP_USER',
    signupCreds,
  };
};
