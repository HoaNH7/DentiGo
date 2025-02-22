import React from "react";
import "./style.scss";
import Logo from "../../image/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <img src={Logo} width="100%" height="100%" />
        <p>DentiGo</p>
      </div>
      <div className="footer-container">
        <div className="col-lg-4">
          <div className="footer-subscribe">
            <p>Subscribe to our Newsletter</p>
          </div>
          <div className="footer-btn-sub">
            <input
              type="text"
              className="footer-input"
              placeholder="Enter your email"
            />
            <input type="submit" className="footer-btn" value="Subscribe" />
          </div>
          <div className="footer-copyright">
            <p>Present By Nguyen Huu Hoa</p>
            <p>© 2025 DentiGo</p>
          </div>
        </div>
        <div className="col-lg-4 footer-content">
          <div className="col-lg-4 footer-menu">
            <p>Menu</p>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>Services Single</li>
              <li>Blog</li>
              <li>Blog Post</li>
            </ul>
          </div>
          <div className="col-lg-4 footer-plans">
            <ul>
              <li>Contact</li>
              <li>Plans</li>
              <li>Plans Single</li>
              <li>Team</li>
              <li>Team Single</li>
            </ul>
          </div>
          <div className="col-lg-4 footer-utility">
            <p>Utility Pages</p>
            <ul>
              <li>Our Products</li>
              <li>Quick Response</li>
              <li>Testimonials</li>
              <li>Projects</li>
              <li>Technology</li>
              <li>Experts</li>
            </ul>
          </div>
        </div>
        <div className="col-lg-4 footer-contact">
          <p>Contact</p>
          <ul>
            <li>
              <FontAwesomeIcon
                icon={faEnvelope}
                style={{ marginRight: 10 }}
                color="#0067FF"
              />
              hoanh472001@gmail.com
            </li>
            <li>
              <FontAwesomeIcon
                icon={faPhone}
                style={{ marginRight: 10 }}
                color="#0067FF"
              />
              (+84)345-6789
            </li>
            <li>
              <FontAwesomeIcon
                icon={faLocationDot}
                style={{ marginRight: 10 }}
                color="#0067FF"
              />
              P. Tay Tuu, Q. Bac Tu Liem, Ha Noi
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
