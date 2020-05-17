import {
  FETCH_DATA,
  FAVORITE,
  USERDATA
} from "./types";


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
        payload: data.filter(item => item.user_id === localStorage.token)
      });
    });
};

export const user = () => dispatch => {
  fetch("https://reqres.in/api/users").then(res => res.json())
  .then(data => {
    // console.log(data.data);
    dispatch ({
      type: USERDATA,
      payload: data.data.filter(item => item.email === localStorage.email)
    })
  })
}










// export const login = logData => dispatch => {
//   fetch("https://reqres.in/api/login", {
//     method: "POST",
//     headers: {
//       "content-type": "application/json"
//     },
//     body: JSON.stringify(logData)
//   }).then(res => {
//     if (res.status === 400) {
//       swal("Sorry!", "You're not authorised user, you can't register!", "error");
//     } else if (res.status === 200) {
//       res.json().then(data => dispatch({
//         type: LOGDATA,
//         payload: data
//       }))
//     }
//   })
// }

// export const register = regData => dispatch => {
//   fetch("https://reqres.in/api/register", {
//       method: "POST",
//       headers: {
//         "content-type": "application/json"
//       },
//       body: JSON.stringify(regData)
//     })
//     .then(res => {
//       if (res.status === 400) {
//         swal("Sorry!", "You're not authorised user, you can't register!", "error");
//       } else if (res.status === 200) {
//         res.json().then(user => dispatch({
//           type: REGDATA,
//           payload: user
//         }))
//       }
//     })

// }