import { fetchSelectedGenre } from '../helpers/fetch-calls';

export const fetchComics = (obj) => {
  return (dispatch) => {
    fetchSelectedGenre(obj)
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

export const signupUser = (signupCreds) => {
  return {
    type: 'SIGNUP_USER',
    signupCreds,
  };
};
