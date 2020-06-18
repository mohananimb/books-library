// import booksSaga from "./booksSaga"
import watchUserAuthentication from "./watchers";
import { fork } from "redux-saga/effects";

export default function* startForman() {
  yield fork(watchUserAuthentication);
}
