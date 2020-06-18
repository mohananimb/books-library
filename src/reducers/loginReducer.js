import * as types from "../constants";

export default function(state = [], action) {
  
  let token = action.token;
  let error = action.error;

  switch (action.type) {
    case types.LOGIN_USER_SUCCESS:
      return { ...state, token };
    case types.LOGIN_USER_ERROR:
      return { ...state, error };
    default:
      return state;
  }
}
