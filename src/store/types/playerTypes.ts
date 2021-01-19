const PlayerTypes = {
  RESET_PLAYER: "RESET_PLAYER",
  GET_PLAYERS: "GET_PLAYERS",
};

export interface Player {
  id: number;
  name: string;
}

export interface FirebasePlayer extends Player {
  docId: string;
}

export default PlayerTypes;
