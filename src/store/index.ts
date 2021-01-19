import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";

import AlertReducer from "./reducers/alertReducer";
import AuthReducer from "./reducers/authReducer";
import SpaceNewsReducer from "./reducers/spaceNewsReducer";

const rootReducer = combineReducers({
  alert: AlertReducer,
  auth: AuthReducer,
  spaceNews: SpaceNewsReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export type RootState = ReturnType<typeof rootReducer>;

export default store;
