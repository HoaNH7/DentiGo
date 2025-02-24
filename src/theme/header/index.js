import React from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../image/logo.png";
import "./style.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const location = useLocation();

  return (
    <div className="header">
      <div className="menu-nav-header">
        {/* <div className="header-logo">
        </div> */}
        <div className="header-title">
          <p>DentiGo</p>
        </div>

        <ul>
          <li className={location.pathname === "/DentiGo" ? "active" : ""}>
            <Link to="/DentiGo">Home</Link>
          </li>
          <li className={location.pathname === "/about" ? "active" : ""}>
            <Link to="/about">About</Link>
          </li>
          <li className={location.pathname === "/services" ? "active" : ""}>
            <Link to="/services">Services</Link>
          </li>
          <li className={location.pathname === "/team" ? "active" : ""}>
            <Link to="/team">Team</Link>
          </li>
          <li className={location.pathname === "/pricing" ? "active" : ""}>
            <Link to="/pricing">Pricing</Link>
          </li>
          <li className={location.pathname === "/blog" ? "active" : ""}>
            <Link to="/blog">Blog</Link>
          </li>
          <li className={location.pathname === "/contact" ? "active" : ""}>
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
      </div>
      <div className="header-right">
        <div className="header-contact">
          <FontAwesomeIcon icon={faPhone} size="2x" color="#5D4FFF" />
          <p>(+84)345-6789</p>
        </div>
        <div className="header-btn">
          <Link to="/pricing">Book Now</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
