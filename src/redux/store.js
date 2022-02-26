import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import thunk from "redux-thunk";

import rootReducer from "./reducer";

const middleware = [thunk];

// Using logger to track actions in a dev environment, can be removed in production.
// The Version deployed WILL have this activated for whoever wants to check the working of the app

middleware.push(logger);

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
