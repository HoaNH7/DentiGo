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
        <div className="about-slider-content">
          <h1>
            We are Dentalic, a dental <br /> clinic you can trust
          </h1>
          <p>
            Providing expert dental care with a commitment to your comfort and
            health.
            <br /> Visit us for a brighter, healthier smile!
          </p>
          <div className="about-slider-img">
            <div className="pricing-circle-slider">
              <div className="big-circle">
                <div className="small-circle"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="about-story">
        <div className="pricing-circle-story1">
          <div className="big-circle">
            <div className="small-circle"></div>
          </div>
        </div>
        <div className="pricing-circle-story2">
          <div className="big-circle">
            <div className="small-circle"></div>
          </div>
        </div>
        <div className="about-story-title">
          <h1>
            We started with only one goal: <br /> Make our clients smile
          </h1>
          <p>
            Our mission is to provide top-quality dental care in a comfortable
            and friendly environment.
            <br /> Your smile is our priority, and we are dedicated to keeping
            it healthy and bright.
          </p>
        </div>
        <div className="about-story-img">
          <div className="about-story-img1 left"></div>
          <div className="about-story-img2 right"></div>
        </div>
      </div>
      <div className="about-values">
        <div className="pricing-circle-values1">
          <div className="big-circle">
            <div className="small-circle"></div>
          </div>
        </div>
        <div className="pricing-circle-values2">
          <div className="big-circle">
            <div className="small-circle"></div>
          </div>
        </div>
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
                We build strong relationships with our patients through honesty
                and transparency.
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
                We are committed to providing the best dental care with
                professionalism and care.
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
                Your oral health is our priority, and we strive to offer
                top-quality services.
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
                LWe dedicate ourselves to ensuring every patient receives the
                best possible treatment.
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
        <div className="pricing-circle-team1">
          <div className="big-circle">
            <div className="small-circle"></div>
          </div>
        </div>
        <div className="pricing-circle-team2">
          <div className="big-circle">
            <div className="small-circle"></div>
          </div>
        </div>
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
            <div className="team-grid-image2"></div>
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
            <div className="team-grid-image3"></div>
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
            <div className="team-grid-image4"></div>
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
