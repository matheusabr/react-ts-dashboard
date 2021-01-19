import AuthTypes, { User } from "../types/authTypes";

export interface AuthState {
  user: User | null;
  authenticated: boolean;
}

interface ReducerAction {
  type: string;
  payload?: any;
}

const INITIAL_STATE: AuthState = {
  user: null,
  authenticated: false,
};

const AuthReducer = (state = INITIAL_STATE, action: ReducerAction) => {
  switch (action.type) {
    case AuthTypes.RESET_AUTH:
      return INITIAL_STATE;
    default:
      return INITIAL_STATE;
  }
};

export default AuthReducer;
