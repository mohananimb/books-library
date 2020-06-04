// import {
//   createStore,
//   applyMiddleware,
//   compose
// } from "redux";
// import thunk from "redux-thunk";
// import rootReducer from "./redux/reducers/index";

// const initialState = {};

// const middleware = [thunk];

// const store = createStore(
//   rootReducer,
//   initialState,
//   compose(
//     applyMiddleware(...middleware),
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//   )
// )


// export default store;

import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers"
import createSagaMiddleware from "redux-saga"
import rootSaga from "./sagas"

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware()
  const store = createStore(rootReducer,
    compose(
      applyMiddleware(sagaMiddleware),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  )

  sagaMiddleware.run(rootSaga)

  return store
}

export default configureStore 