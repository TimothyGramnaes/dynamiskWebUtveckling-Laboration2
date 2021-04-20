import React from "react";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";

function LoginComponent() {
  return (
    <form style={{ border: "1px solid black", width: "30rem" }} action="">
      <h3 style={{ padding: "1rem" }}>LOGIN</h3>
      <div style={{ width: "100%", display: "flex", flexDirection: "column" }}>
        <TextField
          style={{ margin: "1rem" }}
          required
          id="username"
          label="Username"
          defaultValue="username"
          // variant="outlined"
        />
        <TextField
          style={{ margin: "1rem" }}
          required
          id="password"
          label="Password"
          defaultValue="password"
          // variant="outlined"
        />
      </div>
      <Button style={{ margin: "1rem" }} variant="outlined" color="primary">
        Log in
      </Button>
      <Button style={{ margin: "1rem" }} variant="outlined" color="secondary">
        Cancel
      </Button>
      <p style={{ padding: "1rem" }}>Dont't have an account yet?</p>
      <Button
        style={{ margin: "1rem" }}
        variant="outlined"
        color="primary"
        href=""
      >
        Sign up
      </Button>
    </form>
  );
}

export default LoginComponent;
