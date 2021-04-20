import './header.css'

function Header() {
  return (
    <header>
      <h2 className="logo">Salt<b>Factory</b></h2>
      <div className="buttons">
        <button className="log-in">Log In</button>
        <button className="sign-up border-btn">Sign Up</button>
      </div>
    </header>
  )
}

export default Header