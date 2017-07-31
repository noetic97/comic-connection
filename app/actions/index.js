import { fetchSelectedGenre } from '../helpers/fetch-calls';

export const fetchComics = (genre) => {
  return (dispatch) => {
    dispatch(isLoading(true))
    dispatch(handleImages());
    fetchSelectedGenre(genre)
    .then(res => {
      dispatch(comicBookArray(res));
      dispatch(isLoading(false));
    })
    .catch(err => console.log(err));
  };
};

export const comicBookArray = (comics) => {
  return {
    type: 'ADD_COMICS_TO_STORE',
    comics,
  };
};

export const isLoading = (bool) => {
  return {
    type: 'COMICS_LOADING',
    bool,
  };
};

export const handleImages = () => {
  return {
    type: 'IMAGES_LOADED',
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
    return response.json();
  })
  // .then(response => response.json())
  .then(userData => console.log(userData));
  };
};

export const signupUser = (signupCreds) => {
  return {
    type: 'SIGNUP_USER',
    signupCreds,
  };
};
