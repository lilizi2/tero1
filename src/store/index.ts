import { applyMiddleware, compose, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import { rootReducer } from "../reducers";

const composeEnhancers =
  (window["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"] as typeof compose) || compose;

const middlewares = [thunkMiddleware];

if (
  process.env.NODE_ENV === "development" &&
  process.env.TARO_ENV !== "quickapp"
) {
  middlewares.push(require("redux-logger").createLogger());
}

const enhancer = composeEnhancers(
  applyMiddleware(...middlewares)
  // other store enhancers if any
);

export default () => {
  const store = createStore(rootReducer, enhancer);
  return store;
};
