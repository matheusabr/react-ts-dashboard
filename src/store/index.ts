import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";

import AlertReducer from "./reducers/alertReducer";

const rootReducer = combineReducers({
  alert: AlertReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export type RootState = ReturnType<typeof rootReducer>;

export default store;
