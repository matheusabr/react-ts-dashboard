import { ThunkAction } from "redux-thunk";

import { RootState } from "..";

import FirebaseApp from "../../services/firebase";

import AlertTypes, { AlertType } from "../types/alertTypes";
import PlayerTypes, { FirebasePlayer, Player } from "../types/playerTypes";

interface Action {
  type: string;
  payload?: any;
}

function getServerTimestamp() {
  return FirebaseApp.firestore.FieldValue.serverTimestamp();
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
        .orderBy("createdAt", "desc")
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            const docData = doc.data();
            payload.push({
              docId: docData.docId,
              name: docData.name,
              createdAt: docData.createdAt,
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
      const docRef = await FirebaseApp.firestore().collection("players").doc();
      // [FIREBASE] Add player data to 'players' collection
      await FirebaseApp.firestore()
        .collection("players")
        .doc(docRef.id)
        .set({
          ...data,
          docId: docRef.id,
          createdAt: getServerTimestamp(),
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
  deletePlayer: (data: {
    docId: string;
  }): ThunkAction<void, RootState, null, Action> => async (dispatch) => {
    try {
      // [FIREBASE] Remove player from 'players' collection by doc id
      await FirebaseApp.firestore()
        .collection("players")
        .doc(data.docId)
        .delete();
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
  updatePlayer: (
    data: FirebasePlayer
  ): ThunkAction<void, RootState, null, Action> => async (dispatch) => {
    try {
      // [FIREBASE] update player from 'players' collection by doc id
      await FirebaseApp.firestore()
        .collection("players")
        .doc(data.docId)
        .update(data);
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
