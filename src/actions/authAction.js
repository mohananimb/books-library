import * as types from "../constants";

export const registerUserAction = user => ({
  type: types.REGISTER_USER,
  user
});

export const registerSuccess = user => ({
  type: types.REGISTER_USER_SUCCESS,
  user
});

export const registerError = error => ({
  type: types.REGISTER_USER_ERROR,
  error
});

export const loginUserAction = user => {
  console.log("Login Action");

  return {
    type: types.LOGIN_USER,
    user
  };
};

export const loginSuccess = token => ({
  type: types.LOGIN_USER_SUCCESS,
  token
});

export const loginError = error => ({
  type: types.LOGIN_USER_ERROR,
  error
});
