import { Link } from "react-router-dom";
import "./footer.css";

import { FiInstagram, FiTwitter } from "react-icons/fi";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer">
        <div className="footer-desc">
          <div className="footer-subtitle">Sweetist</div>

          <br />
          <div className="footer-desc__desc">
            Sweetist is an online shop that aims to fill you soul and sweeten
            your life in two ways: through taste and sight. We have mastered our
            craft to handmake these creations specifically for you.
            <br />
            <br />© www.sweetist.ca 2022
          </div>
        </div>
        <div className="footer-contact">
          <div className="footer-subtitle">Contact</div>
          <ul>
            <li>+1 (123) 4567</li>
            <li> info@sweetist.ca</li>
            <li>123 Sweet Street, Sweetopia</li>
            <li className="footer-icons">
              <Link to="">
                <FiInstagram />
              </Link>{" "}
              <Link to="">
                <FiTwitter />
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer-links">
          <div className="footer-subtitle">Browse</div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/shop">Shop</Link>
            </li>
            <li>
              <Link to="/order">Order</Link>
            </li>
            <li>
              <Link to="/cart">Checkout</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
