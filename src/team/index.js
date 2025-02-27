import React from "react";
import "./style.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

const Team = () => {
  return (
    <div className="container">
      <div className="our-team">
        <h1>Meet our team</h1>
        <p>
          We are a team of dedicated dental professionals committed to providing
          <br /> exceptional care and ensuring healthy smiles.
        </p>
        <div className="our-team-grid">
          <div className="grid-image">
            <div className="team-grid-image1"></div>
            <h4>Andrew Moore</h4>
            <p>Dentist at Global Dentistry</p>
            <FontAwesomeIcon
              className="our-team-iconen"
              icon={faEnvelope}
              size="1x"
            />
            <FontAwesomeIcon
              className="our-team-iconph"
              icon={faPhone}
              size="1x"
            />
          </div>
          <div className="grid-image">
            <div className="team-grid-image2"></div>
            <h4>Clark Howell</h4>
            <p>Dentist at Global Dentistry</p>
            <FontAwesomeIcon
              className="our-team-iconen"
              icon={faEnvelope}
              size="1x"
            />
            <FontAwesomeIcon
              className="our-team-iconph"
              icon={faPhone}
              size="1x"
            />
          </div>
          <div className="grid-image">
            <div className="team-grid-image3"></div>
            <h4>Kate Fuller</h4>
            <p>Dentist at Global Dentistry</p>
            <FontAwesomeIcon
              className="our-team-iconen"
              icon={faEnvelope}
              size="1x"
            />
            <FontAwesomeIcon
              className="our-team-iconph"
              icon={faPhone}
              size="1x"
            />
          </div>
          <div className="grid-image">
            <div className="team-grid-image4"></div>
            <h4>Arthur Wade</h4>
            <p>Dentist at Global Dentistry</p>
            <FontAwesomeIcon
              className="our-team-iconen"
              icon={faEnvelope}
              size="1x"
            />
            <FontAwesomeIcon
              className="our-team-iconph"
              icon={faPhone}
              size="1x"
            />
          </div>
          <div className="team-circle">
            <div className="big-circle">
              <div className="small-circle"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
