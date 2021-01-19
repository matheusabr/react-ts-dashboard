import React, { useState } from "react";
import { useDispatch } from "react-redux";

import AuthActions from "../store/actions/authActions";

import TextField from "../components/ui/TextField";
import Button from "../components/ui/Button";
import { COLORS } from "../styles/colors";

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
    <div
      style={{
        display: "flex",
        flex: 1,
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: COLORS.grey.light,
      }}
    >
      <div
        style={{
          backgroundColor: COLORS.secondary,
          borderRadius: 20,
        }}
      >
        <form>
          <div
            style={{
              display: "flex",
              flex: 1,
              flexDirection: "column",
              padding: 60,
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
            <Button
              label="Sign In"
              margin={"10px 0 0 0"}
              backgroundColor={COLORS.primary}
              onClick={(event) => handleSignIn(event)}
            />
          </div>
        </form>
      </div>
    </div>
    // </div>
  );
};

export default LoginPage;
