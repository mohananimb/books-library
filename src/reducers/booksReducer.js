import { DATA, FAV_BOOKS } from "../constants";

const booksState = {
  loading: false,
  books: [],
  error: null
};

const favBooksState = {
  loading: false,
  favBooks: [],
  error: null
};

export const favBooks = (state = favBooksState, action) => {
  
  switch (action.type) {
    case FAV_BOOKS.LOAD_FAV_BOOKS:
      return {
        ...state,
        loading: true
      };
    case FAV_BOOKS.FAV_BOOKS_SUCCESS:
      return {
        ...state,
        loading: false,
        favBooks: state.favBooks.concat(action.data)
      };
    case FAV_BOOKS.FAV_BOOKS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };

    default:
      return state;
  }
};

export const books = (state = booksState, action) => {
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
    case DATA.LOAD_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    default:
      return state;
  }
};
