// import booksSaga from "./booksSaga"
import { takeEvery, all, call, takeLatest } from "redux-saga/effects";
import { registerSaga, loginSaga } from "./auth";
import { handleBooksLoad, handleFavBooks } from "./booksSaga";
import * as types from "../constants";

export default function*() {

  yield takeEvery(types.REGISTER_USER, registerSaga);
  
  yield takeEvery(types.LOGIN_USER, loginSaga);

  yield takeEvery(types.DATA.LOAD, handleBooksLoad)

  yield takeLatest(types.FAV_BOOKS.LOAD_FAV_BOOKS, handleFavBooks)


}
