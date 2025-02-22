import React from "react";
import "./style.scss";
import ImgSlider from "../image/img-slider.jpg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faEnvelope,
  faTooth,
} from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  return (
    <div className="container">
      <div className="home-slider">
        <div className="col-6 home-slider-text">
          <h1>Transforming Smiles with Expert Dental Care</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit velit,
            sapien habitant integer senectus malesuada ac.
          </p>
          <input
            type="submit"
            className="home-btn-book"
            value="Book an Appointment"
          />
          <input
            type="submit"
            className="home-btn-browse"
            value="Browse Services"
          />
        </div>
        <div className="col-6 home-slider-img">
          <img src={ImgSlider} />
        </div>
        <div className="home-slider-booking">
          <div className="col-lg-4 home-booking-contact">
            <div className="col-lg-3 font-awesome">
              <FontAwesomeIcon
                icon={faEnvelope}
                style={{ marginRight: 10 }}
                size="2x"
              />
            </div>
            <div className="col-lg-9">
              <h4>Contact Us</h4>
              <p>(+84)345-6789</p>
              <p>hoanh472001@gmail.com</p>
              <Link to="#">Book an Appointment</Link>
            </div>
          </div>
          <div className="col-lg-4 home-booking-open">
            <div className="col-lg-3 font-awesome">
              <FontAwesomeIcon
                icon={faClock}
                style={{ marginRight: 10 }}
                size="2x"
              />
            </div>
            <div className="col-lg-9">
              <h4>Open Hours</h4>
              <p>
                Mon - Fri: <span>8:00 AM to 5:00 PM</span>
              </p>
              <p>
                Saturday: <span>9:00 AM to 3:30 PM</span>
              </p>
              <p>
                Sunday: <span>9:00 AM to 3:30 PM</span>
              </p>
            </div>
          </div>
          <div className="col-lg-4 home-booking-services">
            <div className="col-lg-3 font-awesome">
              <FontAwesomeIcon
                icon={faTooth}
                style={{ marginRight: 10 }}
                size="2x"
              />
            </div>
            <div className="col-lg-9">
              <h4>Services</h4>
              <p>Cosmetic Dentist</p>
              <p>Dental Implants</p>
              <p>Teeth Whitening</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
