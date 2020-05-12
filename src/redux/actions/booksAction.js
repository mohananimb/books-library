import { FETCH_DATA } from "./types";
import { FAVORITE } from "./types";

export const fetchBooks = () => dispatch => {
  fetch("https://5eb82be6bb17460016b326b8.mockapi.io/books")
    .then(res => res.json())
    .then(data => {
      dispatch({
        type: FETCH_DATA,
        payload: data
      });
    });
};

export const fetchFav = () => dispatch => {
  fetch("https://5eb82be6bb17460016b326b8.mockapi.io/favorite-books")
    .then(res => res.json())
    .then(data => {
      dispatch({
        type: FAVORITE,
        payload: data
      });
    });
};
