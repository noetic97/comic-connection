import { combineReducers } from 'redux';
import { loginCreds } from './login-reducer';
import { signupCreds } from './signup-reducer';
import { selectedGenre, comics } from './comicBookList-reducer';

export default combineReducers({
  loginCreds,
  signupCreds,
  selectedGenre,
  comics,
});
