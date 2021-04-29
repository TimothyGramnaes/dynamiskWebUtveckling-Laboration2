import { useState } from "react";
import { useHistory } from 'react-router-dom'
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import './login.css'
import { useAuthContext } from "../context/authContext"

function LoginComponent() {
  
  const getAuthContext = useAuthContext();
  const history = useHistory()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [emailError, setEmailError] = useState("");

  const handleUserChange = (e:any) => {
    setEmail(e.target.value)
  }

  const handlePasswordChange = (e:any) => {
    setPassword(e.target.value)
  }

  const handleClick = (e:any) => {
      e.preventDefault();

      setEmailError('')

      const formData = {email, password}
      if (email.length < 5) {
        setEmailError('Email is too short')
        return
      }

      const options = {
          method: 'post',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
      }
      
      fetch('/api/user/login', options)
        .then((response)=>{
          console.log(response)
          if (response.ok) {
            getAuthContext.getAuth(response.ok)  
            alert('You are now logged in')
            history.push('/admin')
          }
          return response.text();
        })
        .catch((error) => {
          console.log(error)
      })
  }

  return (
    <>
      <div className="login-container">
        <div className="form-container">
          <form>
            <h3 className="login-title">LOGIN</h3>
            <div style={{ width: "100%", display: "flex", flexDirection: "column" }}>
              <TextField
                style={{ margin: "1rem 0" }}
                required
                id="email"
                label="Username"
                defaultValue="username"
                value={email}
                onChange={handleUserChange}
              />
              <p className="error-text">{emailError}</p>
              <TextField
                style={{ margin: "1rem 0" }}
                required
                id="password"
                label="Password"
                type="password"
                defaultValue="password"
                value={password}
                onChange={handlePasswordChange}
              />
            </div>

            <div className="login-cancel-container">
              <Button 
                style={{ margin: "1rem" }}
                variant="outlined"
                color="primary"
                type="submit"
                onClick={handleClick}
              >
                Log in
              </Button>
              <Button 
                style={{ margin: "1rem" }} 
                variant="outlined" 
                color="secondary" 
                href="/"
              >
                Cancel
              </Button>
            </div>
            <div className="sign-up-container">
              <p style={{ padding: "1rem" }}>Dont't have an account yet?</p>
              <Button
                style={{ margin: "1rem" }}
                variant="outlined"
                color="primary"
                href="/signup"
              >
                Sign up
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default LoginComponent;
