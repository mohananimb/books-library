import { combineReducers } from "redux";
import booksReducer from "./booksReducer";
//   import favBookReducer from "./favBookReducer"
import errorReducer from "./errorReducer";
import loadingReducer from "./loadingReducer";
import favBooksReducer from "./favBooksReducer";
import register from "./registerReducer";
import login from "./loginReducer";

const rootReducer = combineReducers({
  books: booksReducer,
  error: errorReducer,
  isLoading: loadingReducer,
  favBooks: favBooksReducer,
  register,
  login
});

export default rootReducer;
