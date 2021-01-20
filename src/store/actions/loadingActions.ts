import { ThunkAction } from "redux-thunk";

import { RootState } from "..";

import LoadingTypes from "../types/loadingTypes";

interface Action {
  type: string;
}

const LoadingActions = {
  showLoading: (): ThunkAction<void, RootState, null, Action> => async (
    dispatch
  ) => {
    // Show loading
    dispatch({
      type: LoadingTypes.SHOW_LOADING,
    });
  },
  hideLoading: (): ThunkAction<void, RootState, null, Action> => async (
    dispatch
  ) => {
    // Show loading
    dispatch({
      type: LoadingTypes.HIDE_LOADING,
    });
  },
};

export default LoadingActions;
