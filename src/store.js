import { createStore, applyMiddleware, compose } from "redux";
import combinereducer from "./reducers/combinereducer";
import thunk from "redux-thunk";
const middleware = [thunk];
const initialState = {};

const store = createStore(
  combinereducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
export default store;
