import { useEffect, useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import './header.css'

function Header() {
  const [auth, setAuth] = useState<boolean>()

  useEffect(() => {
    fetch('api/user/auth', { method: 'GET' })
    .then(function (res) {
      if (res.status === 200) {
        setAuth(true)
      } else {
        setAuth(false)
      }
    })
    .catch(function (err) {
      console.log(err)
    })
  }, [setAuth])

  // if (auth === undefined) {
  //   return null
  // }
  
  const handleClick = (e:any) => {
    e.preventDefault()
    
    fetch('/api/user/logout', { method: 'GET' })
      .then((response) => {
        console.log(response)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  function LogOutButton() {
    return (
      <button onClick={handleClick} className="border-btn">Log Out</button>
    )
  }

  function LogInAndSignUpButtons() {
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
      <h2 className="logo">Salt<b>Factory</b></h2>
      <div className="buttons">

        {auth === true ? (
          <LogOutButton />
        ) : (
          <LogInAndSignUpButtons />
        )}
        
      </div>
    </header>
  )
}

export default Header