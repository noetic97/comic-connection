import { combineReducers } from 'redux';
import { loginCreds } from './login-reducer';
import { signupCreds } from './signup-reducer';
import { comics, isLoading, imagesLoading, savedComics, isSaved } from './comicBookList-reducer';

export default combineReducers({
  loginCreds,
  signupCreds,
  comics,
  isLoading,
  imagesLoading,
  savedComics,
  isSaved,
});
