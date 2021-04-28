import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import {Link, useHistory} from 'react-router-dom'


function SignUpComponent() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const history = useHistory()
  

  const handleUserChange = (e:any) => {
    setEmail(e.target.value)
  }

  const handlePasswordChange = (e:any) => {
    setPassword(e.target.value)
  }

  const handleClick = (e:any) => {
      e.preventDefault();

      const formData = {email, password}

      const options = {
          method: 'post',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
      }
      
      fetch('/api/user/register', options
      ).then((response)=>{
        if (response.ok) {
          history.push('/')
        }
        return response.text();
      }).then((text) => {
          console.log(text)
      }).catch((error) => {
          console.log(error)
      })
          console.log(e)
  }
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
          id="email"
          label="Username"
          defaultValue="username"
          value={email}
          onChange={handleUserChange}
          // variant="outlined"
        />
        <TextField
          style={{ margin: "1rem" }}
          required
          id="password"
          label="Password"
          defaultValue="password"
          value={password}
          onChange={handlePasswordChange}
          // variant="outlined"
        />
      </div>
      <Button style={{ margin: "1rem" }} variant="outlined" color="primary"
      type="submit"
      onClick={handleClick}
      >
        SIGN UP
      </Button>
      <Button style={{ margin: "1rem" }} variant="outlined" color="secondary" href="/">
        CANCEL
      </Button>
      <p style={{ padding: "1rem" }}>Already have an account?</p>
      <Button
        style={{ margin: "1rem" }}
        variant="outlined"
        color="primary"
        href="/login"
      >
        LOG IN
      </Button>
    </form>
  );
}

export default SignUpComponent;
