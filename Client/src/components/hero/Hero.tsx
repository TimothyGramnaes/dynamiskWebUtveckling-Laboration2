import LandingPage from "../LandingPage/LandingPage";
import "./hero.css";

function Hero() {
  return (
    <div className="hero">
      <div className="text">
        <h1>Dont be salty, season with sugar</h1>
        <h3>But please post your salts</h3>
        <div className="posts">
          <LandingPage />
        </div>
      </div>
    </div>
  );
}

export default Hero;
