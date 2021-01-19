import { ThunkAction } from "redux-thunk";
import axios from "axios";

import { RootState } from "..";

import AlertTypes, { AlertType } from "../types/alertTypes";
import SpaceNewsTypes from "../types/spaceNewsTypes";

interface Action {
  type: string;
  payload?: any;
}

const SpaceNewsActions = {
  getUserProfile: (data: {
    limit: number;
  }): ThunkAction<void, RootState, null, Action> => async (dispatch) => {
    try {
      // [AXIOS] Get space news
      axios
        .get(
          `https://test.spaceflightnewsapi.net/api/v2/articles?_limit=${data.limit}`
        )
        .then((res) => {
          // Update news array inside space news store
          dispatch({
            type: SpaceNewsTypes.GET_SPACE_NEWS,
            payload: res.data,
          });
        });
    } catch (error) {
      console.error(error);
      // Show alert
      dispatch({
        type: AlertTypes.SET_ALERT,
        payload: {
          type: AlertType.WARNING,
          message: error.message,
        },
      });
    }
  },
};

export default SpaceNewsActions;
