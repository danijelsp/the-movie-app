// import dependencies
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
// import { persistStore, autoRehydrate } from 'redux-persist';

// import reducers
import reducers from "./reducers";

const middleWares = [thunk];

if (process.env.NODE_ENV) {
  middleWares.push(logger);
}

// createStore(reducers, initialState, middleWares);
const store = createStore(reducers, {}, applyMiddleware(...middleWares));

export default store;
