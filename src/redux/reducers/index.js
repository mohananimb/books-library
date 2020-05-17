import {
  combineReducers
} from "redux";
import booksReducer from "./booksReducer";
import favBookReducer from "./favBookReducer"
import UserReducer from "./UserReducer"
// import LogReducer from "./LogReducer"

export default combineReducers({
  booksReducer,
  favBookReducer,
  UserReducer
  // LogReducer
});