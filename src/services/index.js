import React from "react";
import "./style.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTooth } from "@fortawesome/free-solid-svg-icons";

const Services = () => {
  const Grid = [
    {
      icon: faTooth,
      title: "Cosmetic Dentistry",
      description:
        "Lorem ipsum dolor sit amet, diument consectetur adipiscing elit",
      another: "Learn More",
    },
    {
      icon: faTooth,
      title: "Orthodontics",
      description:
        "Lorem ipsum dolor sit amet, diument consectetur adipiscing elit",
      another: "Learn More",
    },
    {
      icon: faTooth,
      title: "Oral Hygiene",
      description:
        "Lorem ipsum dolor sit amet, diument consectetur adipiscing elit",
      another: "Learn More",
    },
    {
      icon: faTooth,
      title: "Dental Treatment",
      description:
        "Lorem ipsum dolor sit amet, diument consectetur adipiscing elit",
      another: "Learn More",
    },
    {
      icon: faTooth,
      title: "Dental Surgery",
      description:
        "Lorem ipsum dolor sit amet, diument consectetur adipiscing elit",
      another: "Learn More",
    },
    {
      icon: faTooth,
      title: "Dental Implants",
      description:
        "Lorem ipsum dolor sit amet, diument consectetur adipiscing elit",
      another: "Learn More",
    },
  ];
  return (
    <div className="container">
      <div className="services-content">
        <div className="services-content-title">
          <h1>Our Services</h1>
          <div className="services-content-btn">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit velit,{" "}
              <br />
              sapien habitant integer senectus malesuada ac.
            </p>
            <input type="submit" value="Book an Appointment" />
          </div>
        </div>
        <div className="services-content-grid">
          {Grid.map((g, key) => (
            <div className="grid-item" key={key}>
              <span className="item-icon">
                <FontAwesomeIcon icon={g.icon} />
              </span>
              <div className="grid-text">
                <h3>{g.title}</h3>
                <p>{g.description}</p>
                <h4>{g.another}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
