import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import { useHistory } from 'react-router-dom'
import './signup.css'

function SignUpComponent() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const history = useHistory()

  const handleUserChange = (e:any) => {
    setEmail(e.target.value)
  }

  const handlePasswordChange = (e:any) => {
    setPassword(e.target.value)
  }

  const handleClick = (e:any) => {
      e.preventDefault();

      setEmailError('')
      setPasswordError('')

      const formData = {email, password}
      if (email.length < 5) {
        setEmailError('Email is too short')
        return
      }
      if (!email.includes('@')) {
        setEmailError('That is not a correct email address, try again')
        return
      }
      if (password.length < 6) {
        setPasswordError('Your password must contain at least 6 characters')
        return
      }

      const options = {
          method: 'post',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
      }
      
      fetch('/api/user/register', options)
        .then((response)=>{
          if (response.ok) {
            alert('User created')
            history.push('/')
          }
          return response.text();
        })
        .catch((error) => {
          console.log(error)
        })
  }

  return (
    <>
      <div className="signup-container">
        <div className="form-container">
          <form>
            <h3 className="create-account-title">CREATE ACCOUNT</h3>
            <div style={{ width: "100%", display: "flex", flexDirection: "column" }}>
              <TextField
                style={{ margin: "1rem" }}
                required
                id="email"
                label="Email"
                defaultValue="username"
                value={email}
                onChange={handleUserChange}
              />
              <p className="error-text">{emailError}</p>
              <TextField
                style={{ margin: "1rem" }}
                required
                id="password"
                type="password"
                label="Password"
                defaultValue="password"
                value={password}
                onChange={handlePasswordChange}
              />
              <p className="error-text">{passwordError}</p>
            </div>
            <div className="signup-cancel-container">
              <Button 
                style={{ margin: "1rem" }} 
                variant="outlined" 
                color="primary"
                type="submit"
                onClick={handleClick}
              >
                SIGN UP
              </Button>
              <Button 
                style={{ margin: "1rem" }} 
                variant="outlined" 
                color="secondary" 
                href="/"
              >
                CANCEL
              </Button>
            </div>
            <div className="smart-container">
              <p style={{ padding: "1rem" }}>Already have an account?</p>
              <Button
                style={{ margin: "1rem" }}
                variant="outlined"
                color="primary"
                href="/login"
              >
                LOG IN
              </Button>
            </div>
          </form>
        </div>
      </div>

    </>
  );
}

export default SignUpComponent;
