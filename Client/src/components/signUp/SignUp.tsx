import React from "react";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";

function SignUpComponent() {
  return (
    <form
      style={{
        border: "1px solid black",
        width: "30rem",
      }}
      action=""
    >
      <h3 style={{ padding: "1rem" }}>CREATE ACCOUNT</h3>
      <div style={{ width: "100%", display: "flex", flexDirection: "column" }}>
        <TextField
          style={{ margin: "1rem" }}
          required
          id="create-username"
          label="Username"
          defaultValue="username"
          //variant="outlined"
        />
        <TextField
          style={{ margin: "1rem" }}
          required
          id="create-e-mail"
          label="e-mail"
          defaultValue="e-mail"
          //variant="outlined"
        />
        <TextField
          style={{ margin: "1rem" }}
          required
          id="create-password"
          label="Password"
          defaultValue="password"
          //variant="outlined"
        />
      </div>
      <Button style={{ margin: "1rem" }} variant="outlined" color="primary">
        SIGN UP
      </Button>
      <Button style={{ margin: "1rem" }} variant="outlined" color="secondary">
        CANCEL
      </Button>
      <p style={{ padding: "1rem" }}>Already have an account?</p>
      <Button
        style={{ margin: "1rem" }}
        variant="outlined"
        color="primary"
        href=""
      >
        LOG IN
      </Button>
    </form>
  );
}

export default SignUpComponent;
