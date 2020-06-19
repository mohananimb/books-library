import { put, call } from "redux-saga/effects";
import { registerUserService, loginUserService } from "../api";
import {
  registerSuccess,
  registerError,
  loginSuccess,
  loginError
} from "../actions/authAction";

export function* registerSaga(payload) {
  try {
    const response = yield call(registerUserService, payload);

    yield put(registerSuccess(response));
  } catch (error) {
    yield put(registerError(error.toString()));
  }
}

export function* loginSaga(payload) {
  console.log("Payload", payload);
  
  console.log("Try");
  
  try {
    const response = yield call(loginUserService, payload);

    console.log("Saga Log Response", response);

    yield put(loginSuccess(response));
  } catch (error) {
    console.log("Catch", error);
    
    yield put(loginError(error.toString()));
  }
}
