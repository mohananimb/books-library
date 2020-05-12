import { FAVORITE } from "../actions/types";

const initialState = {
  main: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FAVORITE:
      return {
        ...state,
        main: action.payload
      };
    default:
      return state;
  }
}
