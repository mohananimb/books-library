import {
    combineReducers
} from "redux";
import booksReducer from "./booksReducer";
//   import favBookReducer from "./favBookReducer"
import errorReducer from "./errorReducer"
import loadingReducer from "./loadingReducer"
import favBooksReducer from "./favBooksReducer";

const rootReducer = combineReducers({
    books: booksReducer,
    error: errorReducer,
    isLoading: loadingReducer,
    favBooks: favBooksReducer
});

export default rootReducer