import React from "react";
import "./style.scss";
import ImgSlider from "../image/img-slider.jpg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faEnvelope,
  faPhone,
  faTooth,
} from "@fortawesome/free-solid-svg-icons";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const Home = () => {
  const services = [
    {
      title: "Cosmetic Dentistry",
      description:
        "Lorem ipsum dolor sit amet, diument consectetur adipiscing elit.",
      img: ImgSlider,
      Learn: "Learn More",
    },
    {
      title: "Orthodontics",
      description:
        "Lorem ipsum dolor sit amet, diument consectetur adipiscing elit.",
      img: ImgSlider,
      Learn: "Learn More",
    },
    {
      title: "Oral Hygiene",
      description:
        "Lorem ipsum dolor sit amet, diument consectetur adipiscing elit.",
      img: ImgSlider,
      Learn: "Learn More",
    },
    {
      title: "Oral Hygiene",
      description:
        "Lorem ipsum dolor sit amet, diument consectetur adipiscing elit.",
      img: ImgSlider,
      Learn: "Learn More",
    },
  ];

  const preview = [
    {
      img: ImgSlider,
      title: "NH Hoa",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus massa felis in sedeol commodo. Augue morbi molestie",
    },
    {
      img: ImgSlider,
      title: "NH Hoa",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus massa felis in sedeol commodo. Augue morbi molestie",
    },
    {
      img: ImgSlider,
      title: "NH Hoa",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus massa felis in sedeol commodo. Augue morbi molestie",
    },
    {
      img: ImgSlider,
      title: "NH Hoa",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus massa felis in sedeol commodo. Augue morbi molestie",
    },
  ];

  return (
    <div className="container">
      <div className="home-slider">
        <div className=" home-slider-text" style={{ width: "50%" }}>
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
        <div className=" home-slider-img" style={{ width: "50%" }}>
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
      <div className="home-services">
        <div className="home-services-title">
          <p>
            Our team of dentists can help with <br /> a variety of dental
            services
          </p>
          <input
            className="btn-services"
            type="submit"
            value="Book an Appointment"
          />
        </div>
        <div className="home-swiper-slider">
          <Swiper
            modules={[Navigation]}
            // spaceBetween={30}
            slidesPerView={3}
            navigation
          >
            {services.map((service, index) => (
              <SwiperSlide key={index}>
                <div className="p-6 bg-white rounded-xl shadow-md text-center">
                  <div className="border-swiper">
                    <img className="text-4xl" src={service.img} />
                    <h3 className="font-bold mt-4">{service.title}</h3>
                    <p className="text-gray-500">{service.description}</p>
                    <h4>{service.Learn}</h4>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className="home-about">
        <div className="col-lg-6 home-about-img">
          <div className="about-img-big"></div>
          <div className="about-img-small"></div>
        </div>
        <div className="col-lg-6 home-about-text">
          <h1>
            Our team has only one <br /> mission: Make you smile
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            <br /> Ut maecenas viverra at quis nibh. Tortor, quis aenean vitae,
            <br />
            enim, magna tortor. Sed vivamus porttitor tempus
          </p>
          <div className="home-about-avatar">
            <img src={ImgSlider} width={50} height={50} />
            <div>
              <p>Dr. Huu Hoa</p>
              <h4>Dentist at Global Dentistry</h4>
            </div>
          </div>
          <input type="submit" className="btn-about" value="About our Clinic" />
        </div>
      </div>
      <div className="home-preview">
        <div className="home-preview-text">
          <h1>
            See what our over 1,000 happy
            <br /> customers have to say
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt
            integer elit
            <br /> cum sed etiam. Nisl arcu ipsum turpis quisque risus ultrices
            eget.
          </p>
        </div>
        <div className="home-preview-swiper">
          <Swiper
            modules={[Navigation]}
            // spaceBetween={30}
            slidesPerView={3}
            navigation
          >
            {preview.map((p, index) => (
              <SwiperSlide key={index}>
                <div className="p-6 bg-white rounded-xl shadow-md text-center">
                  <div className="preview-border">
                    <img className="text-4xl" src={p.img} />
                    <h3 className="font-bold mt-4">{p.title}</h3>
                    <p className="text-gray-500">{p.description}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <input
            type="submit"
            className="btn-preview"
            value="Book an Appointment"
          />
        </div>
      </div>
      <div className="home-schedule">
        <div className="col-lg-6">
          <div className="schedule-text">
            <h1>Schedule a virtual or presential Appointment today</h1>
            <input type="submit" value="Book an Appointment" />
          </div>
        </div>
        <div className="col-lg-6 img-schedule"></div>
      </div>
      <div className="home-resources">
        <div className="resources-text">
          <h1>Our articles on dental health</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt
            integer elit <br />
            cum sed etiam. Nisl arcu turpis quisque risus ultrices eget
          </p>
        </div>
        <div className="resources-img">
          <div className=" resources-list">
            <img src={ImgSlider} />
            <div className="resources-text">
              <h3>4 things to consider before getting teeth braces</h3>
              <p>
                Lorem ipsum dolor sit amet, lormol amenrtol consectetur
                adipiscing elit, sed do eiusmod tempor. Lorem ipsum dolor sit
                amet, lormol amenrtol consectetur adipiscing elit, sed do
                eiusmod tempor{" "}
              </p>
            </div>
            <div className="resources-date">
              <p>February 22, 2025</p>
              <span>Read More</span>
            </div>
          </div>
          <div className=" resources-list">
            <img src={ImgSlider} />
            <div className="resources-text">
              <h3>How often should I replace my toothbrush</h3>
              <p>
                Lorem ipsum dolor sit amet, lormol amenrtol consectetur
                adipiscing elit, sed do eiusmod tempor. Lorem ipsum dolor sit
                amet, lormol amenrtol consectetur adipiscing elit, sed do
                eiusmod tempor{" "}
              </p>
            </div>
            <div className="resources-date">
              <p>February 22, 2025</p>
              <span>Read More</span>
            </div>
          </div>
          <div className=" resources-list">
            <img src={ImgSlider} />
            <div className="resources-text">
              <h3>6 great tips to keep your teeth healthy and safe</h3>
              <p>
                Lorem ipsum dolor sit amet, lormol amenrtol consectetur
                adipiscing elit, sed do eiusmod tempor. Lorem ipsum dolor sit
                amet, lormol amenrtol consectetur adipiscing elit, sed do
                eiusmod tempor{" "}
              </p>
            </div>
            <div className="resources-date">
              <p>February 22, 2025</p>
              <span>Read More</span>
            </div>
          </div>
        </div>
      </div>
      <div className="home-contact">
        <div className="col-lg-6 contact-text">
          <div className="">
            <h1>Get in touch to book your first appointment</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              <br /> Tincidunt integer elit cum sed etiam nisl arcu
            </p>
            <div className="contact-icon">
              <span>
                <FontAwesomeIcon
                  className="contact-awesome"
                  icon={faPhone}
                  style={{ marginTop: 10 }}
                  color="white"
                  size="2x"
                />
              </span>
              <h4>(+84)345-6789</h4>
              <span>
                <FontAwesomeIcon
                  className="contact-awesome"
                  icon={faEnvelope}
                  style={{ marginTop: 10 }}
                  color="white"
                  size="2x"
                />
              </span>
              <h4>hoanh472001@gmail.com</h4>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="contact-form">
            <div className="contact-form1">
              <div className="col-lg-6">
                <label className="contact-label">Name</label>
                <input
                  className="contact-input"
                  type="text"
                  placeholder="Full Name"
                />
              </div>
              <div className="col-lg-6">
                <label className="contact-label">Email Address</label>
                <input
                  className="contact-input"
                  type="text"
                  placeholder="email@example.com"
                />
              </div>
            </div>
            <div className="contact-form1">
              <div className="col-lg-6">
                <label className="contact-label">Phone Number</label>
                <input
                  className="contact-input"
                  type="text"
                  placeholder="(+84) - 345 6789"
                />
              </div>
              <div className="col-lg-6">
                <label className="contact-label">Service</label>
                <input
                  className="contact-input"
                  type="text"
                  placeholder="Ex. Dental Implants"
                />
              </div>
            </div>
            <label className="contact-label">Message</label>
            <textarea
              rows={5}
              cols={71}
              className="contact-textarea"
              placeholder="Please describe what service you are interested in..."
            />
            <input className="btn-contact" type="submit" value="Submit" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
