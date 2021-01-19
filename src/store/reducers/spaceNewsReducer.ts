import SpaceNewsTypes from "../types/spaceNewsTypes";

export interface SpaceNewsState {
  news: Array<Object>;
}

interface ReducerAction {
  type: string;
  payload?: any;
}

const INITIAL_STATE: SpaceNewsState = {
  news: [],
};

const SpaceNewsReducer = (state = INITIAL_STATE, action: ReducerAction) => {
  switch (action.type) {
    case SpaceNewsTypes.RESET_SPACE_NEWS:
      return INITIAL_STATE;
    case SpaceNewsTypes.GET_SPACE_NEWS:
      return {
        ...state,
        news: action.payload,
      };
    default:
      return state;
  }
};

export default SpaceNewsReducer;
