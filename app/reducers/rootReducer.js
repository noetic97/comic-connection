import { combineReducers } from 'redux';
import { loginCreds } from './login-reducer';
import { signupCreds } from './signup-reducer';

export default combineReducers({
  loginCreds,
  signupCreds
});
