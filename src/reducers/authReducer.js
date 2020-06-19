import * as types from "../constants";

const loginState = {
  loading: false,
  token: [],
  error: null
};

const registerState = {
  loading: false,
  error: null
};

export const login = (state = loginState, action) => {
  switch (action.type) {
    case types.LOGIN_USER:
      return {
        ...state,
        loading: true
      };
    case types.LOGIN_USER_SUCCESS:
      return { ...state, loading: false, token: action.token };
    case types.LOGIN_USER_ERROR:
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
};

export const register = (state = registerState, action) => {
  let user = action.user;

  switch (action.type) {
    case types.REGISTER_USER:
      return {
        ...state,
        loading: true
      };
    case types.REGISTER_USER_SUCCESS:
      return { ...state, loading: false, user };
    case types.REGISTER_USER_ERROR:
      return { ...state, error: action.error };
    default:
      return state;
  }
};
