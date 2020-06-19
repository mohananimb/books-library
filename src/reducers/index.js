import { combineReducers } from "redux";
import booksReducer from "./booksReducer";
import { register } from "./authReducer";
import { login } from "./authReducer";

const rootReducer = combineReducers({
  books: booksReducer,
  register,
  login
});

export default rootReducer;
