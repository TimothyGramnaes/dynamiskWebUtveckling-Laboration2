import { Switch, Route, BrowserRouter } from 'react-router-dom';
import "../main.css";
import Footer from "./footer/Footer";
import Header from "./header/header";
import Hero from "./hero/Hero";
import Login from './login/Login'
import SignUp from './signUp/SignUp'
import AuthUser from './auth/AuthUser'

function Layout() { 

  return (
    <BrowserRouter>      
      <Header />
      
      <Switch>
        <AuthUser path="/admin" />
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={Login} />
        <Route path="/" component={Hero} />
      </Switch>
      
      <Footer />
    </BrowserRouter>
  );
}

export default Layout;
