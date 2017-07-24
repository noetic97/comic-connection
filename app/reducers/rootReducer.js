import { combineReducers } from 'redux';
import { loginCreds } from './login-reducer';
import { signupCreds } from './signup-reducer';
import { comicBookArray } from './comicBookList-reducer';

export default combineReducers({
  loginCreds,
  signupCreds,
  comicBookArray,
});
