import { DATA, FAV_BOOKS } from "../constants";

export const loadData = () => ({
  type: DATA.LOAD
});

export const setData = data => ({
  type: DATA.LOAD_SUCCESS,
  data
});

export const setError = error => ({
  type: DATA.LOAD_FAILURE,
  error
});

export const favData = () => ({
  type: FAV_BOOKS.LOAD_FAV_BOOKS,
});

export const setFavBooks = data => {
  
  return {
    type: FAV_BOOKS.FAV_BOOKS_SUCCESS,
    data
  }
};

export const setFavBooksError = error => ({
  type: FAV_BOOKS.FAV_BOOKS_FAILURE,
  error
});
