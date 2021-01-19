const AuthTypes = {
  RESET_AUTH: "RESET_AUTH",
  SIGN_IN: "SIGN_IN",
  SIGN_OUT: "SIGN_OUT",
  SET_USER: "SET_USER",
  GET_USER_PROFILE: "GET_USER_PROFILE",
};

export interface User {
  id: string;
  name: string;
  email: string;
  createdAt: any;
}

export interface SignUp {
  name: string;
  email: string;
  password: string;
}

export interface SignIn {
  email: string;
  password: string;
}

export interface GetUser {
  id: string;
}

export default AuthTypes;
