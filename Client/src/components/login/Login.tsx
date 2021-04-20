import React from "react";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";

function LoginComponent() {
  return (
    <form style={{ border: "1px solid black", width: "30rem" }} action="">
      <h3>Log in</h3>
      <div>
        <TextField
          required
          id="username"
          label="Username"
          defaultValue="username"
          variant="outlined"
        />
        <TextField
          required
          id="password"
          label="Password"
          defaultValue="password"
          variant="outlined"
        />
      </div>
      <Button variant="outlined" color="primary">
        Log in
      </Button>
      <Button variant="outlined" color="secondary">
        Cancel
      </Button>
      <p>Dont't have an account yet?</p>
      <Button variant="outlined" color="primary" href="">
        Sign up
      </Button>
    </form>
  );
}

export default LoginComponent;
