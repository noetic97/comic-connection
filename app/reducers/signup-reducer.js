export const signupCreds = (state = {}, action) => {
  switch (action.type) {
  case 'SIGNUP_USER':
    return action.signupCreds;
  case 'LOGOUT_USER':
    return {};
  default:
    return state;
  }
};
