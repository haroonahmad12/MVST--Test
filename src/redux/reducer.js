import { combineReducers } from "redux";

import UserReducer from "./user-reducer/reducer";

const rootReducer = combineReducers({
  user: UserReducer,
});

export default rootReducer;
