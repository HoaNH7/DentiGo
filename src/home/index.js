import React from "react";
import "./style.scss";
import { Link, useNavigate } from "react-router-dom";
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
import ImgSlider from "../image/img-slider.jpg";
import Cosmetic from "../image/cosmetic.jpg";
import Orthodontics from "../image/orthodontics.jpg";
import Hygiene from "../image/hygiene.jpg";
import Treatment from "../image/treatment.jpg";
import Surgery from "../image/surgery.jpg";
import Implants from "../image/implants.jpg";
import Avatar from "../image/avatar.jpg";
import Customer1 from "../image/customer1.jpg";
import Customer2 from "../image/customer2.jpg";
import Customer3 from "../image/customer3.jpg";
import Customer4 from "../image/customer4.jpg";
import Artical1 from "../image/artical1.jpg";
import Artical2 from "../image/artical2.jpg";
import Artical3 from "../image/artical3.jpg";

const Home = () => {
  const navigate = useNavigate();

  const services = [
    {
      title: "Cosmetic Dentistry",
      description:
        "Enhance your smile with our advanced cosmetic dentistry services, including teeth whitening, veneers, and smile makeovers.",
      img: Cosmetic,
      Learn: "Learn More",
    },
    {
      title: "Orthodontics",
      description:
        "Achieve a perfectly aligned smile with our expert orthodontic treatments, including braces and clear aligners tailored to your needs.",
      img: Orthodontics,
      Learn: "Learn More",
    },
    {
      title: "Oral Hygiene",
      description:
        "Maintain optimal oral health with professional cleanings, preventive care, and personalized hygiene plans from our experienced dental team.",
      img: Hygiene,
      Learn: "Learn More",
    },
    {
      title: "Dental Treatment",
      description:
        "Comprehensive dental care for all ages, including fillings, extractions, and restorative treatments to keep your smile healthy and pain-free.",
      img: Treatment,
      Learn: "Learn More",
    },
    {
      title: "Dental Surgery",
      description:
        "Professional dental surgery care to ensure a healthy and confident smile.",
      img: Surgery,
      Learn: "Learn More",
    },
    {
      title: "Dental Implants",
      description:
        "Modern implant solutions for strong and natural-looking teeth.",
      img: Implants,
      Learn: "Learn More",
    },
  ];

  const preview = [
    {
      img: Customer1,
      title: "William Saliba",
      description:
        "I had an amazing experience at DentiGo! The staff was friendly, and my treatment was painless. Highly recommended!",
    },
    {
      img: Customer2,
      title: "Sergio Mestre",
      description:
        "The best dental care I’ve ever received. The team made me feel comfortable, and the results exceeded my expectations!",
    },
    {
      img: Customer3,
      title: "Lucas Papaw",
      description:
        "Professional, caring, and efficient. I finally found a dentist I can trust. Thank you, DentiGo!",
    },
    {
      img: Customer4,
      title: "James Gunn",
      description:
        "The best dental care I've ever received! My teeth feel amazing, and the team was super friendly.",
    },
  ];

  return (
    <div className="container">
      <div className="home-slider">
        <div className="pricing-circle-home-slider">
          <div className="big-circle">
            <div className="small-circle"></div>
          </div>
        </div>
        <div className=" home-slider-text" style={{ width: "50%" }}>
          <h1>Transforming Smiles with Expert Dental Care</h1>
          <p>
            Our expert dental team is committed to providing you with the best
            care for a brighter, healthier smile. Discover our services and
            schedule your visit today!
          </p>
          <input
            type="submit"
            className="home-btn-book"
            value="Book an Appointment"
            onClick={() => navigate("/pricing")}
          />
          <input
            type="submit"
            className="home-btn-browse"
            value="Browse Services"
            onClick={() => navigate("/services")}
          />
        </div>
        <div className=" home-slider-img" style={{ width: "65%" }}>
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
              <div className="slider-booking-link">
                <Link to="/pricing">Book an Appointment</Link>
              </div>
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
            <div className="col-lg-9 services-text">
              <h4>Services</h4>
              <p>Cosmetic Dentist</p>
              <p>Dental Implants</p>
              <p>Teeth Whitening</p>
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
            onClick={() => navigate("/pricing")}
          />
        </div>
        <div className="home-swiper-slider">
          <Swiper
            modules={[Navigation]}
            spaceBetween={30}
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
        <div className="pricing-circle-home-about1">
          <div className="big-circle">
            <div className="small-circle"></div>
          </div>
        </div>
        <div className="pricing-circle-home-about2">
          <div className="big-circle">
            <div className="small-circle"></div>
          </div>
        </div>
        <div className="col-lg-6 home-about-img">
          <div className="about-img-big"></div>
          <div className="about-img-small"></div>
        </div>
        <div className="col-lg-6 home-about-text">
          <h1>
            Our team has only one <br /> mission: Make you smile
          </h1>
          <p>
            At DentiGo, our mission is simple: to give you a healthy and
            confident smile.
            <br /> With advanced technology and a dedicated team, we provide
            top-quality dental
            <br /> care tailored to your needs. Trust us to take care of your
            smile, because your
            <br /> happiness starts with healthy teeth.
          </p>
          <div className="home-about-avatar">
            <img src={Avatar} width={70} height={60} />
            <div className="avatar-text">
              <p>Dr. Andrew Moore</p>
              <h4>Dentist at Global Dentistry</h4>
            </div>
          </div>
          <input
            type="submit"
            className="btn-about"
            value="About our Clinic"
            onClick={() => navigate("/about")}
          />
        </div>
      </div>
      <div className="home-preview">
        <div className="pricing-circle-home-preview1">
          <div className="big-circle">
            <div className="small-circle"></div>
          </div>
        </div>
        <div className="pricing-circle-home-preview2">
          <div className="big-circle">
            <div className="small-circle"></div>
          </div>
        </div>
        <div className="home-preview-text">
          <h1>
            See what our over 1,000 happy
            <br /> customers have to say
          </h1>
          <p>
            At DentiGo, we take pride in delivering top-notch dental care. Here
            is what some of
            <br /> our happy patients have to say about their experience with
            us.
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
            onClick={() => navigate("/pricing")}
          />
        </div>
      </div>
      <div className="home-schedule">
        <div className="col-lg-6 home-schedule-title">
          <div className="pricing-circle-home-schedule1">
            <div className="big-circle">
              <div className="small-circle"></div>
            </div>
          </div>
          <div className="pricing-circle-home-schedule2">
            <div className="big-circle">
              <div className="small-circle"></div>
            </div>
          </div>
          <div className="schedule-text">
            <h1>Schedule a virtual or presential Appointment today</h1>
            <input
              type="submit"
              value="Book an Appointment"
              onClick={() => navigate("/pricing")}
            />
          </div>
        </div>
        <div className="col-lg-6 img-schedule"></div>
      </div>
      <div className="home-resources">
        <div className="pricing-circle-resource1">
          <div className="big-circle">
            <div className="small-circle"></div>
          </div>
        </div>
        <div className="pricing-circle-resource2">
          <div className="big-circle">
            <div className="small-circle"></div>
          </div>
        </div>
        <div className="resources-title">
          <h1>Our articles on dental health</h1>
          <p>
            Stay informed with expert tips and insights on dental care. Explore
            our
            <br /> latest articles to maintain a healthy, beautiful smile.
          </p>
        </div>
        <div className="resources-img">
          <div className=" resources-list">
            <img src={Artical1} />
            <div className="resources-text">
              <h3>4 things to consider before getting teeth braces</h3>
              <p>
                Before deciding on braces, you should learn about different
                types of brackets, the treatment process, the expected duration,
                and the estimated cost. Consulting with a dentist will help you
                make the best choice.{" "}
              </p>
            </div>
            <div className="resources-date">
              <p>February 22, 2025</p>
              <span>Read More</span>
            </div>
          </div>
          <div className=" resources-list">
            <img src={Artical2} />
            <div className="resources-text">
              <h3>How often should I replace my toothbrush</h3>
              <p>
                You should replace your toothbrush every 3-4 months or sooner if
                the bristles become frayed and worn out. A new toothbrush helps
                remove plaque more effectively and protects your gums and teeth
                from bacteria.{" "}
              </p>
            </div>
            <div className="resources-date">
              <p>February 22, 2025</p>
              <span>Read More</span>
            </div>
          </div>
          <div className=" resources-list">
            <img src={Artical3} />
            <div className="resources-text">
              <h3>6 great tips to keep your teeth healthy and safe</h3>
              <p>
                Brushing properly, using dental floss, limiting sugary foods,
                having regular dental check-ups, drinking plenty of water, and
                maintaining a healthy diet will keep your teeth strong and
                healthy.{" "}
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
              Schedule your visit today and take the first step toward a
              healthier,
              <br /> brighter smile. Our team is here to help!
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
