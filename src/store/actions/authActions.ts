import { ThunkAction } from "redux-thunk";

import { RootState } from "..";

import firebase from "../../services/firebase";

import { Signin } from "../types/authTypes";
import AlertTypes, { AlertType } from "../types/alertTypes";

interface AuthAction {
  type: string;
  payload?: any;
}

const AuthActions = {
  signIn: (
    data: Signin
  ): ThunkAction<void, RootState, null, AuthAction> => async (dispatch) => {
    try {
      await firebase
        .auth()
        .signInWithEmailAndPassword(data.email, data.password);
      // Show alert
      dispatch({
        type: AlertTypes.SET_ALERT,
        payload: {
          type: AlertType.SUCCESS,
          message: "Welcome!",
        },
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
  signOut: (): ThunkAction<void, RootState, null, AuthAction> => async (
    dispatch
  ) => {
    try {
      await firebase.auth().signOut();
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

export default AuthActions;
