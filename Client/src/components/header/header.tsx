import { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import './header.css'
import { useAuthContext } from "../context/authContext"

function Header() {
  const getAuthContext = useAuthContext();
  const [auth, setAuth] = useState<boolean>(false)
  const history = useHistory()
  console.log(auth)

  useEffect(() => {
    setAuth(getAuthContext.auth)
  },[getAuthContext.auth, setAuth])

  useEffect(() => {
   

    fetch('api/user/auth', { method: 'GET' })
    .then(function (res) {
      if (res.status === 200) {
        setAuth(true)
        // getAuthContext.getAuth(res.ok)
      } else {
        setAuth(false)
      }
    })
    .catch(function (err) {
      console.log(err)
    })
  }, [getAuthContext, getAuthContext.auth, setAuth])

  // if (auth === undefined) {
  //   return null
  // }
  
  const handleClick = (e:any) => {
    e.preventDefault()
    setAuth(false)
    
    fetch('/api/user/logout', { method: 'GET' })
      .then((response) => {
        console.log(response)
        if (response.ok) {
          history.push('/')
                   
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }

  function LoggedInButtons() {
    return (
      <>
        <Link to='/admin'>
          <button className="admin-btn">Your Salt Feed</button>
        </Link>
        <button onClick={handleClick} className="border-btn">Log Out</button>
      </>
    )
  }

  function NotLoggedInButtons() {
    return (
      <>
        <Link to="/login">
          <button className="log-in">Log In</button>
        </Link>
        <Link to="/signup">
          <button className="sign-up border-btn">Sign Up</button>
        </Link>
      </>
    )
  }
    
  return (
    <header>
        <Link to="/">
          <h2 className="logo">Salt<b>Factory</b></h2>
        </Link>
      <div className="buttons">

        {auth === true ? (
          <LoggedInButtons />
        ) : (
          <NotLoggedInButtons />
        )}
        
      </div>
    </header>
  )
}

export default Header