import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "../store";
import AuthActions from "../store/actions/authActions";

import TextField from "../components/ui/TextField";
import Button from "../components/ui/Button";

import { COLORS } from "../styles/colors";

enum AuthForm {
  SIGNIN,
  SIGNUP,
}

const LoginPage: React.FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { authenticated } = useSelector((state: RootState) => state.auth);

  const [form, setForm] = useState(AuthForm.SIGNIN);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (authenticated) {
      // [ROUTE] Go to dashboard page
      history.push("/dashboard");
    }
  }, [authenticated, history]);

  function handleAuth(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    // Prevent page refresh
    e.preventDefault();
    if (form === AuthForm.SIGNUP) {
      // Call auth action to sign up
      dispatch(AuthActions.signUp({ name, email, password }));
    } else if (form === AuthForm.SIGNIN) {
      // Call auth action to sign in
      dispatch(AuthActions.signIn({ email, password }));
    }
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
          backgroundColor:
            form === AuthForm.SIGNUP ? COLORS.grey.dark : COLORS.secondary,
          borderRadius: 20,
          padding: 60,
        }}
      >
        <form>
          <div
            style={{
              display: "flex",
              flex: 1,
              flexDirection: "column",
            }}
          >
            {form === AuthForm.SIGNUP && (
              <TextField
                label="Name"
                type="text"
                labelColor={COLORS.secondary}
                handleChange={(event) => setName(event.target.value)}
              />
            )}
            <TextField
              label="E-mail"
              type="text"
              labelColor={
                form === AuthForm.SIGNIN ? COLORS.grey.darker : COLORS.secondary
              }
              handleChange={(event) => setEmail(event.target.value)}
            />
            <TextField
              label="Password"
              type="password"
              labelColor={
                form === AuthForm.SIGNIN ? COLORS.grey.darker : COLORS.secondary
              }
              handleChange={(event) => setPassword(event.target.value)}
            />
            <Button
              label={form === AuthForm.SIGNIN ? "Sign In" : "Create Account"}
              margin={"10px 0 0 0"}
              backgroundColor={COLORS.primary}
              onClick={(event) => handleAuth(event)}
            />
          </div>
        </form>
        <div style={{ paddingTop: 10, textAlign: "center" }}>
          <span
            style={{
              fontSize: 14,
              color:
                form === AuthForm.SIGNIN
                  ? COLORS.grey.darker
                  : COLORS.secondary,
              fontWeight: "lighter",
              cursor: "pointer",
            }}
            onClick={
              form === AuthForm.SIGNIN
                ? () => setForm(AuthForm.SIGNUP)
                : () => setForm(AuthForm.SIGNIN)
            }
          >
            {form === AuthForm.SIGNUP ? "Sign In" : "Create Account"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
