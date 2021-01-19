import React, { useState } from "react";
import { useDispatch } from "react-redux";

import AuthActions from "../store/actions/authActions";

import TextField from "../components/ui/TextField";
import Button from "../components/ui/Button";

const LoginPage: React.FC = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSignIn(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    // Prevent page refresh
    e.preventDefault();
    // Call auth action to sign in
    dispatch(AuthActions.signIn({ email, password }));
  }

  return (
    <div>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <TextField
          label="E-mail"
          type="text"
          handleChange={(event) => setEmail(event.target.value)}
        />
        <TextField
          label="Password"
          type="password"
          handleChange={(event) => setPassword(event.target.value)}
        />
        <Button label="Sign In" onClick={(event) => handleSignIn(event)} />
      </form>
    </div>
  );
};

export default LoginPage;
