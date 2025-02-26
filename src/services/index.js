import React from "react";
import "./style.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTooth } from "@fortawesome/free-solid-svg-icons";
import Comsmetic from "../image/cosmetic.jpg";
import Orthodontics from "../image/orthodontics.jpg";
import Hygiene from "../image/hygiene.jpg";
import Treatment from "../image/treatment.jpg";
import Surgery from "../image/surgery.jpg";
import Implants from "../image/implants.jpg";

const Services = () => {
  const Grid = [
    {
      img: Comsmetic,
      title: "Cosmetic Dentistry",
      description:
        "Enhance your smile with our advanced cosmetic dentistry services, including teeth whitening, veneers, and smile makeovers.",
      another: "Learn More",
    },
    {
      img: Orthodontics,
      title: "Orthodontics",
      description:
        "Achieve a perfectly aligned smile with our expert orthodontic treatments, including braces and clear aligners tailored to your needs.",
      another: "Learn More",
    },
    {
      img: Hygiene,
      title: "Oral Hygiene",
      description:
        "Maintain optimal oral health with professional cleanings, preventive care, and personalized hygiene plans from our experienced dental team.",
      another: "Learn More",
    },
    {
      img: Treatment,
      title: "Dental Treatment",
      description:
        "Comprehensive dental care for all ages, including fillings, extractions, and restorative treatments to keep your smile healthy and pain-free.",
      another: "Learn More",
    },
    {
      img: Surgery,
      title: "Dental Surgery",
      description:
        "Professional dental surgery care to ensure a healthy and confident smile.",
      another: "Learn More",
    },
    {
      img: Implants,
      title: "Dental Implants",
      description:
        "Modern implant solutions for strong and natural-looking teeth.",
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
              <img src={g.img} className="item-icon" />
              <div className="grid-text">
                <h3>{g.title}</h3>
                <p>{g.description}</p>
                <h4>{g.another}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="services-schedule">
        <div className="col-lg-6">
          <div className="schedule-text">
            <h1>Schedule a virtual or presential Appointment today</h1>
            <input type="submit" value="Book an Appointment" />
          </div>
        </div>
        <div className="col-lg-6 img-schedule"></div>
      </div>
    </div>
  );
};

export default Services;
