import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../image/logo.png";
import "./style.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div className="header">
      <div className="header-logo">
        <img src={Logo} width="100%" height="100%" />
      </div>
      <div className="header-title">
        <h1 style={{ margin: 0 }}>DentiGo</h1>
      </div>
      <div className="menu-nav-header">
        <ul>
          <li>
            <Link to="/DentiGo">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="">Services</Link>
          </li>
          <li>
            <Link to="">Team</Link>
          </li>
          <li>
            <Link to="">Pricing</Link>
          </li>
          <li>
            <Link to="">Blog</Link>
          </li>
          <li>
            <Link to="">Contact Us</Link>
          </li>
        </ul>
      </div>
      <div className="header-contact">
        <FontAwesomeIcon icon={faPhone} size="2x" color="#0067FF" />
        <p>(+84)345-6789</p>
      </div>
      <div className="header-btn">
        <Link to="">Book Now</Link>
      </div>
    </div>
  );
};

export default Header;
