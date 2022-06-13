import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import "./navbar.css";
import Image from "../img/logo_small.svg";
import {
  FiInstagram,
  FiMenu,
  FiShoppingCart,
  FiTwitter,
  FiUser,
  FiXCircle,
} from "react-icons/fi";
import { useSelector } from "react-redux";

const Navbar = () => {
  const loc = useLocation().pathname;
  const [sidebar, setSidebar] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const quantity = useSelector((state) => state.cart.quantity);
  let oldScrollY = 0;

  const showSidebar = () => {
    setSidebar(!sidebar);
  };

  const controlDirection = () => {
    if (window.scrollY > oldScrollY || window.scrollY === 0) {
      setNavbar(false);
    } else {
      setNavbar(true);
    }
    oldScrollY = window.scrollY;
  };

  useEffect(() => {
    window.addEventListener("scroll", controlDirection);
    return () => {
      window.removeEventListener("scroll", controlDirection);
    };
  }, []);

  useEffect(() => {
    if (sidebar) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [sidebar]);

  return (
    <>
      <div className={navbar ? "navbar active" : "navbar"}>
        <ul className="navbar-left">
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          <li>
            <Link to="/order">Order</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
        <span className="navbar-logo">
          <Link to="/">
            <img
              src={Image}
              alt=""
              className={
                loc === "/" && !navbar ? "center-logo" : "center-logo active"
              }
            />
          </Link>
        </span>
        <ul className="navbar-right">
          <li className="nav-link">
            <Link to="/login">
              <FiUser size="35" />
            </Link>
          </li>
          <li className="nav-link">
            <Link to="/cart">
              <FiShoppingCart size="35" />
              <span className="quant">{quantity}</span>
            </Link>
          </li>
          <li className="nav-link">
            <Link to="#">
              <FiMenu size="25" onClick={showSidebar} />
            </Link>
          </li>
        </ul>
      </div>

      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <div className="nav-menu__toggle">
          <span>
            <Link to="#" className="nav-close" onClick={showSidebar}>
              <FiXCircle size="35" />
            </Link>
          </span>
        </div>
        <div className="nav-menu__body">
          <div className="nav-menu__left">
            <div className="nav-menu__desc">
              Sweetist products are handmade with love.
            </div>
            <div className="nav-menu__socials">
              <b>Contact</b>
              <p />
              +1 (123) 4567
              <br />
              info@sweetist.ca
              <br />
              <div className="menu-socialicons">
                <Link to="">
                  <FiInstagram />
                </Link>{" "}
                <Link to="">
                  <FiTwitter />
                </Link>
              </div>
            </div>
          </div>
          <div className="nav-menu__right">
            <ul className="nav-menu__items">
              {SidebarData.map((item, index) => {
                return (
                  <li key={index} className={item.cName}>
                    <Link to={item.path} onClick={showSidebar}>
                      {item.icon} <span> {item.title} </span>{" "}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
