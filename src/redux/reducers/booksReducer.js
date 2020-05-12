import { FETCH_DATA } from "../actions/types";

const initialState = {
  books: []
};

export default function(state = initialState, actions) {
  switch (actions.type) {
    case FETCH_DATA:
      return {
        ...state,
        books: actions.payload
      };
    default:
      return state;
  }
}
