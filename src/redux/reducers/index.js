import { combineReducers } from "redux";
import booksReducer from "./booksReducer";
import favBookReducer from "./favBookReducer"

export default combineReducers({
  booksReducer,
  favBookReducer
});
