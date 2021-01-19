import { ThunkAction } from "redux-thunk";

import { RootState } from "..";

import FirebaseApp from "../../services/firebase";

import AlertTypes, { AlertType } from "../types/alertTypes";
import PlayerTypes, { FirebasePlayer, Player } from "../types/playerTypes";

interface Action {
  type: string;
  payload?: any;
}

const PlayerActions = {
  getPlayers: (): ThunkAction<void, RootState, null, Action> => async (
    dispatch
  ) => {
    try {
      let payload: Array<FirebasePlayer> = [];
      // [FIREBASE] Get 'players' collection
      await FirebaseApp.firestore()
        .collection("players")
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            const docData = doc.data();
            payload.push({
              docId: doc.id,
              id: docData.id,
              name: docData.name,
            });
          });
        });
      // Update user data inside auth store
      dispatch({
        type: PlayerTypes.GET_PLAYERS,
        payload,
      });
    } catch (error) {
      console.error(error);
      // Show alert
      dispatch({
        type: AlertTypes.SET_ALERT,
        payload: {
          type: AlertType.SUCCESS,
          message: error,
        },
      });
    }
  },
  addPlayer: (
    data: Player
  ): ThunkAction<void, RootState, null, Action> => async (dispatch) => {
    try {
      // [FIREBASE] Add player data to 'players' collection
      await FirebaseApp.firestore().collection("players").add(data);
      // Show alert
      dispatch({
        type: AlertTypes.SET_ALERT,
        payload: {
          type: AlertType.SUCCESS,
          message: "Player has been added to db!",
        },
      });
    } catch (error) {
      console.error(error);
      // Show alert
      dispatch({
        type: AlertTypes.SET_ALERT,
        payload: {
          type: AlertType.SUCCESS,
          message: error,
        },
      });
    }
  },
};

export default PlayerActions;
