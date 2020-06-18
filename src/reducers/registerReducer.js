import * as types from "../constants";

export default function(state = [], action) {
 
  let user = action.user;
  let error = action.error

  switch (action.type) {
    case types.REGISTER_USER_SUCCESS:
      return { ...state, user };
    case types.REGISTER_USER_ERROR:
      return { ...state, error };
    default:
      return state;
  }
}
