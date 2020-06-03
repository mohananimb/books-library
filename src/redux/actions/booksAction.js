import {
  FETCH_DATA,
  FAVORITE,
  USERDATA
} from "./types";


export const fetchBooks = () => dispatch => {
  fetch("http://localhost:5000/books")
    .then(res => res.json())
    .then(data => {
      dispatch({
        type: FETCH_DATA,
        payload: data
      });
    });
};


export const fetchFav = () => dispatch => {
  fetch("http://localhost:5000/favorite-books", {
    method: "GET",
    headers: {
      "Authorization": JSON.parse(localStorage.token)
    }
  })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      
      dispatch({
        type: FAVORITE,
        payload: data
      });
    });
};

export const user = () => dispatch => {
  fetch("https://reqres.in/api/users").then(res => res.json())
    .then(data => {
      // console.log(data.data);
      dispatch({
        type: USERDATA,
        payload: data.data.filter(item => item.email === localStorage.email)
      })
    })
}
