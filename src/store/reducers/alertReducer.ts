import AlertTypes, { Alert, AlertType } from "../types/alertTypes";

export interface AlertState {
  show: boolean;
  type: AlertType | null;
  message: string;
}

interface ReducerAction {
  type: string;
  payload: Alert;
}

const INITIAL_STATE: AlertState = {
  show: false,
  type: null,
  message: "",
};

const AlertReducer = (state = INITIAL_STATE, action: ReducerAction) => {
  switch (action.type) {
    case AlertTypes.RESET_ALERT:
      return INITIAL_STATE;

    case AlertTypes.SET_ALERT:
      return {
        ...state,
        ...action.payload,
        show: true,
      };

    default:
      return state;
  }
};

export default AlertReducer;
