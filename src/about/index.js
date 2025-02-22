import React from "react";
import "./style.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faHandshake,
  faHeartPulse,
  faMedal,
  faPhone,
  faShield,
} from "@fortawesome/free-solid-svg-icons";

const About = () => {
  return (
    <div className="container">
      <div className="about-slider">
        <h1>
          We are Dentalic, a dental <br /> clinic you can trust
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit velit, sapien{" "}
          <br /> habitant integer senectus malesuada ac.
        </p>
        <div className="about-slider-img"></div>
      </div>
      <div className="about-story">
        <div className="about-story-title">
          <h1>
            We started with only one goal: <br /> Make our clients smile
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Conequat
            nunc parturient <br />
            massa arcu, blandit. Morbi vulputate nulla in in. Viverra vel
            bibendum felis ed eu. <br />
            Gravida felis scelerisque massa vestibulum tellus ac justo.
            Sollicitudin amet
            <br /> suscipit elit viverra lectus.
          </p>
        </div>
        <div className="about-story-img">
          <div className="about-story-img1 left"></div>
          <div className="about-story-img2 right"></div>
        </div>
      </div>
      <div className="about-values">
        <h1>
          The core values that drive <br />
          everything what we do
        </h1>
        <div className="about-features">
          <div className="about-feature-card">
            <div className="icon">
              <FontAwesomeIcon icon={faShield} size="2x" />
            </div>
            <div className="content">
              <h3>Trust</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit velit,
                sapien habitant integer sen.
              </p>
            </div>
          </div>

          <div className="about-feature-card">
            <div className="icon">
              <FontAwesomeIcon icon={faMedal} size="2x" />
            </div>
            <div className="content">
              <h3>Responsability</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit velit,
                sapien habitant integer sen.
              </p>
            </div>
          </div>

          <div className="about-feature-card">
            <div className="icon">
              <FontAwesomeIcon icon={faHeartPulse} size="2x" />
            </div>
            <div className="content">
              <h3>Care & Service</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit velit,
                sapien habitant integer sen.
              </p>
            </div>
          </div>

          <div className="about-feature-card">
            <div className="icon">
              <FontAwesomeIcon icon={faHandshake} size="2x" />
            </div>
            <div className="content">
              <h3>Commitment</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit velit,
                sapien habitant integer sen.
              </p>
            </div>
          </div>
        </div>
        <div className="about-values-btn">
          <input
            className="values-btn-book"
            type="submit"
            value="Book an Appointment"
          />
          <input
            type="submit"
            className="values-btn-browse"
            value="Browse Services"
          />
        </div>
      </div>
      <div className="about-team">
        <h1>
          Our amazing team of dentists <br />
          ready to serve you
        </h1>
        <div className="about-team-grid">
          <div className="grid-image">
            <div className="team-grid-image1"></div>
            <h4>Andrew Moore</h4>
            <p>Dentist at Global Dentistry</p>
            <FontAwesomeIcon
              className="about-team-iconen"
              icon={faEnvelope}
              size="1x"
            />
            <FontAwesomeIcon
              className="about-team-iconph"
              icon={faPhone}
              size="1x"
            />
          </div>
          <div className="grid-image">
            <div className="team-grid-image1"></div>
            <h4>Clark Howell</h4>
            <p>Dentist at Global Dentistry</p>
            <FontAwesomeIcon
              className="about-team-iconen"
              icon={faEnvelope}
              size="1x"
            />
            <FontAwesomeIcon
              className="about-team-iconph"
              icon={faPhone}
              size="1x"
            />
          </div>
          <div className="grid-image">
            <div className="team-grid-image1"></div>
            <h4>Kate Fuller</h4>
            <p>Dentist at Global Dentistry</p>
            <FontAwesomeIcon
              className="about-team-iconen"
              icon={faEnvelope}
              size="1x"
            />
            <FontAwesomeIcon
              className="about-team-iconph"
              icon={faPhone}
              size="1x"
            />
          </div>
          <div className="grid-image">
            <div className="team-grid-image1"></div>
            <h4>Arthur Wade</h4>
            <p>Dentist at Global Dentistry</p>
            <FontAwesomeIcon
              className="about-team-iconen"
              icon={faEnvelope}
              size="1x"
            />
            <FontAwesomeIcon
              className="about-team-iconph"
              icon={faPhone}
              size="1x"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
