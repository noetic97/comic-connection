export const loginCreds = (state = {}, action) => {
  switch (action.type) {
  case 'LOGIN_USER':
    return action.loginCreds;
  case 'LOGOUT_USER':
    return {};
  default:
    return state;
  }
};
