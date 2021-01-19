const AuthTypes = {
  RESET_AUTH: "RESET_AUTH",
  SIGN_IN: "SIGN_IN",
  SIGN_OUT: "SIGN_OUT",
};

export interface User {
  id: string;
  firstName: string;
  email: string;
  createdAt: any;
}

export interface Signin {
  email: string;
  password: string;
}

export default AuthTypes;
