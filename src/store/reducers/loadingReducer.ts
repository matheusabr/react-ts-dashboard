import LoadingTypes from "../types/loadingTypes";

export interface LoadingState {
  show: boolean;
}

interface ReducerAction {
  type: string;
}

const INITIAL_STATE: LoadingState = {
  show: true,
};

const LoadingReducer = (state = INITIAL_STATE, action: ReducerAction) => {
  switch (action.type) {
    case LoadingTypes.RESET_LOADING:
      return INITIAL_STATE;
    case LoadingTypes.SHOW_LOADING:
      return {
        show: true,
      };
    case LoadingTypes.HIDE_LOADING:
      return {
        show: false,
      };
    default:
      return state;
  }
};

export default LoadingReducer;
