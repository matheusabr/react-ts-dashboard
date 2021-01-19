const PlayerTypes = {
  RESET_PLAYER: "RESET_PLAYER",
  GET_PLAYERS: "GET_PLAYERS",
};

export interface Player {
  name: string;
}

export interface FirebasePlayer extends Player {
  docId: string;
  createdAt: any;
}

export default PlayerTypes;
