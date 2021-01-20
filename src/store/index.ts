import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";

import LoadingReducer from "./reducers/loadingReducer";
import AlertReducer from "./reducers/alertReducer";
import AuthReducer from "./reducers/authReducer";
import SpaceNewsReducer from "./reducers/spaceNewsReducer";
import PlayerReducer from "./reducers/playerReducer";

const rootReducer = combineReducers({
  loading: LoadingReducer,
  alert: AlertReducer,
  auth: AuthReducer,
  spaceNews: SpaceNewsReducer,
  player: PlayerReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export type RootState = ReturnType<typeof rootReducer>;

export default store;
