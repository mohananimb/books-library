import { DATA } from "../constants";

const initialState = {
  loading: false,
  books: [],
  favBooks: [],
  error: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case DATA.LOAD:
      return {
        ...state,
        loading: true
      };
    case DATA.LOAD_SUCCESS:
      return {
        ...state,
        books: state.books.concat(action.data),
        loading: false
      };
    case DATA.FAVORITE:
      return {
        ...state,
        favBooks: state.favBooks.concat(action.data)
      };
    case DATA.LOAD_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    default:
      return state;
  }
}
