import { ThunkAction } from "redux-thunk";

import { RootState } from "..";

import FirebaseApp from "../../services/firebase";

import AuthTypes, { GetUser, SignIn, SignUp } from "../types/authTypes";
import AlertTypes, { AlertType } from "../types/alertTypes";
import LoadingTypes from "../types/loadingTypes";

interface Action {
  type: string;
  payload?: any;
}

function getServerTimestamp() {
  return FirebaseApp.firestore.FieldValue.serverTimestamp();
}

const AuthActions = {
  signUp: (data: SignUp): ThunkAction<void, RootState, null, Action> => async (
    dispatch
  ) => {
    try {
      // [FIREBASE] Create a new user account
      const { user } = await FirebaseApp.auth().createUserWithEmailAndPassword(
        data.email,
        data.password
      );
      if (user) {
        const payload = {
          id: user.uid,
          name: data.name,
          email: data.email,
          createdAt: getServerTimestamp(),
        };
        // [FIREBASE] Add user data to 'users' collection
        await FirebaseApp.firestore()
          .collection("users")
          .doc(user.uid)
          .set(payload);
        // Update user data inside auth store
        dispatch({
          type: AuthTypes.SET_USER,
          payload,
        });
      }
      // Show alert
      dispatch({
        type: AlertTypes.SET_ALERT,
        payload: {
          type: AlertType.SUCCESS,
          message: "User has been created!",
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
  signIn: (data: SignIn): ThunkAction<void, RootState, null, Action> => async (
    dispatch
  ) => {
    try {
      // [FIREBASE] Sign in to user account
      await FirebaseApp.auth().signInWithEmailAndPassword(
        data.email,
        data.password
      );
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
  signOut: (): ThunkAction<void, RootState, null, Action> => async (
    dispatch
  ) => {
    try {
      // [FIREBASE] Sign out
      await FirebaseApp.auth().signOut();
      // Reset auth store
      dispatch({
        type: AuthTypes.RESET_AUTH,
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
  getUserProfile: (
    data: GetUser
  ): ThunkAction<void, RootState, null, Action> => async (dispatch) => {
    // Show loading
    dispatch({
      type: LoadingTypes.SHOW_LOADING,
    });
    try {
      let payload = null;
      // [FIREBASE] Get user profile from firestore
      await FirebaseApp.firestore()
        .collection("users")
        .doc(data.id)
        .get()
        .then((doc) => (payload = doc.data()));
      // Update user data inside auth store
      dispatch({
        type: AuthTypes.SET_USER,
        payload,
      });
      // Hide loading
      dispatch({
        type: LoadingTypes.HIDE_LOADING,
      });
    } catch (error) {
      // Hide loading
      dispatch({
        type: LoadingTypes.HIDE_LOADING,
      });
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
