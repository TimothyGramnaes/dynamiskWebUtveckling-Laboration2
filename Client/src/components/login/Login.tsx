import React, { useState } from "react";
import {useHistory} from 'react-router-dom'
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import { useAuthContext } from "../context/authContext"

function LoginComponent() {
  const getAuthContext = useAuthContext();
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
      
      fetch('/api/user/login', options
      ).then((response)=>{
        console.log(response)
        if (response.ok) {
          getAuthContext.getAuth(response.ok)  
          history.push('/admin')
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
    <form style={{ border: "1px solid black", width: "30rem" }} action="">
      <h3 style={{ padding: "1rem" }}>LOGIN</h3>
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
        Log in
      </Button>
      <Button style={{ margin: "1rem" }} variant="outlined" color="secondary" href="/">
        Cancel
      </Button>
      <p style={{ padding: "1rem" }}>Dont't have an account yet?</p>
      <Button
        style={{ margin: "1rem" }}
        variant="outlined"
        color="primary"
        href="/signup"
        
      >
        Sign up
      </Button>
    </form>
  );
}

export default LoginComponent;
