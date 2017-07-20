export const loginUser = (loginCreds) => {
  return {
    type: 'LOGIN_USER',
    loginCreds
  };
};

export const logOutUser = () => {
  return {
    type: 'LOGOUT_USER',
  };
};
