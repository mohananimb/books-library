import { combineReducers } from "redux";
import {books, favBooks} from "./booksReducer";
import { register } from "./authReducer";
import { login } from "./authReducer";

const rootReducer = combineReducers({
  books,
  favBooks,
  register,
  login
});

export default rootReducer;
