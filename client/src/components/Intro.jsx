import "./intro.css";
import Logo from "../img/logo_main.svg";
import { Link } from "react-router-dom";

const Intro = () => {
  return (
    <div className="intro-wrapper">
      <div className="intro intro-logo">
        <img src={Logo} alt="" className="logo" />
      </div>
      <div className="intro cta">
        Spread joy around you with unique sweets and art handmade with love and
        care
        <Link to="/products" className="cta-link">
          LET'S SWEETEN IT UP
        </Link>
      </div>
    </div>
  );
};

export default Intro;
