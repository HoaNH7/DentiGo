import React from "react";
import "./style.scss";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { faCircleCheck, faTooth } from "@fortawesome/free-solid-svg-icons";
import Customer1 from "../image/customer1.jpg";
import Customer2 from "../image/customer2.jpg";
import Customer3 from "../image/customer3.jpg";
import Customer4 from "../image/customer4.jpg";

const Pricing = () => {
  const navigate = useNavigate();

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
      <div className="pricing-all">
        <div className="pricing-text">
          <p>
            Affordable appointment <br />
            plans <span>for everyone</span>
          </p>
          <h5>
            We believe that quality dental care should be accessible to all. Our
            flexible and budget-friendly appointment
            <br /> plans ensure that you receive top-notch dental services
            without financial stress.
          </h5>
        </div>
        <div className="pricing-grid">
          <div className="grid-standard col-lg-3">
            <div className="standard-title">
              <FontAwesomeIcon className="standard-icon" icon={faTooth} />
              <div className="standard-text">
                <h5>Standard</h5>
                <p>1 appointment</p>
              </div>
            </div>
            <div className="standard-price">
              <p>
                $99.00 <span>USD</span>
              </p>
              <h5>
                Perfect for a single visit, ideal for routine check-ups and
                cleanings.
              </h5>
            </div>
            <ul>
              <li>
                <FontAwesomeIcon icon={faCircleCheck} />1 appointment
              </li>
              <li>
                <FontAwesomeIcon icon={faCircleCheck} />
                Follow-up calls & assistance
              </li>
              <li>
                <FontAwesomeIcon icon={faCircleCheck} />
                Service from expert dentists
              </li>
              <li>
                <FontAwesomeIcon icon={faCircleCheck} />4 clinics available
              </li>
            </ul>
            <input type="submit" value="Book Now" />
            {/* </div> */}
          </div>
          <div className="grid-standard col-lg-3">
            <div className="standard-title">
              <FontAwesomeIcon className="standard-icon" icon={faTooth} />
              <div className="standard-text">
                <h5>Premium</h5>
                <p>2 appointment</p>
              </div>
            </div>
            <div className="standard-price">
              <p>
                $199.00 <span>USD</span>
              </p>
              <h5>
                Enjoy two appointments for thorough dental care and personalized
                treatment.
              </h5>
            </div>
            <ul>
              <li>
                <FontAwesomeIcon icon={faCircleCheck} />2 appointment
              </li>
              <li>
                <FontAwesomeIcon icon={faCircleCheck} />
                Follow-up calls & assistance
              </li>
              <li>
                <FontAwesomeIcon icon={faCircleCheck} />
                Service from expert dentists
              </li>
              <li>
                <FontAwesomeIcon icon={faCircleCheck} />4 clinics available
              </li>
            </ul>
            <input type="submit" value="Book Now" />
          </div>
          <div className="grid-standard col-lg-3">
            <div className="standard-title">
              <FontAwesomeIcon className="standard-icon" icon={faTooth} />
              <div className="standard-text">
                <h5>Family</h5>
                <p>4 appointment</p>
              </div>
            </div>
            <div className="standard-price">
              <p>
                $399.00 <span>USD</span>
              </p>
              <h5>
                A cost-effective plan covering four appointments for you and
                your loved ones.
              </h5>
            </div>
            <ul>
              <li>
                <FontAwesomeIcon icon={faCircleCheck} />4 appointment
              </li>
              <li>
                <FontAwesomeIcon icon={faCircleCheck} />
                Follow-up calls & assistance
              </li>
              <li>
                <FontAwesomeIcon icon={faCircleCheck} />
                Service from expert dentists
              </li>
              <li>
                <FontAwesomeIcon icon={faCircleCheck} />4 clinics available
              </li>
            </ul>
            <input type="submit" value="Book Now" />
          </div>
        </div>
        <div className="pricing-customer">
          <div className="pricing-customer-text">
            <h1>
              See what our over 1,000 happy
              <br /> customers have to say
            </h1>
            <p>
              At DentiGo, we take pride in delivering top-notch dental care.
              Here is what some of
              <br /> our happy patients have to say about their experience with
              us.
            </p>
          </div>
          <div className="pricing-customer-swiper">
            <Swiper
              modules={[Navigation]}
              // spaceBetween={30}
              slidesPerView={3}
              navigation
            >
              {preview.map((p, index) => (
                <SwiperSlide key={index}>
                  <div className="p-6 bg-white rounded-xl shadow-md text-center">
                    <div className="pricing-border">
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
              className="btn-pricing"
              value="Book an Appointment"
              onClick={() => navigate("/pricing")}
            />
          </div>
        </div>
        <div className="pricing-circle">
          <div className="big-circle">
            <div className="small-circle"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
