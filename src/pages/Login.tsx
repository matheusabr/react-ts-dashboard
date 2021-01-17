import React from "react";

import TextField from "../components/ui/TextField";
import Button from "../components/ui/Button";

function LoginPage() {
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
          handleChange={(event) => console.log(event.target.value)}
        />
        <TextField
          label="Password"
          type="password"
          handleChange={(event) => console.log(event.target.value)}
        />
        <Button label="Sign In" onClick={(event) => console.log(event)} />
      </form>
    </div>
  );
}

export default LoginPage;
