import PlayerTypes, { FirebasePlayer } from "../types/playerTypes";

export interface PlayerState {
  players: Array<FirebasePlayer>;
}

interface ReducerAction {
  type: string;
  payload?: any;
}

const INITIAL_STATE: PlayerState = {
  players: [],
};

const PlayerReducer = (state = INITIAL_STATE, action: ReducerAction) => {
  switch (action.type) {
    case PlayerTypes.RESET_PLAYER:
      return INITIAL_STATE;
    case PlayerTypes.GET_PLAYERS:
      return {
        ...state,
        players: action.payload,
      };
    default:
      return state;
  }
};

export default PlayerReducer;
