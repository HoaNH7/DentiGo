import React from "react";
import "./style.scss";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { faCircleCheck, faTooth } from "@fortawesome/free-solid-svg-icons";
import Doctor1 from "../image/doctor1.jpg";
import Doctor2 from "../image/doctor2.jpg";
import Doctor3 from "../image/doctor3.jpg";
import Doctor4 from "../image/doctor4.jpg";

const Pricing = () => {
  const navigate = useNavigate();

  const preview = [
    {
      img: Doctor1,
      title: "William Saliba",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus massa felis in sedeol commodo. Augue morbi molestie",
    },
    {
      img: Doctor2,
      title: "Sergio Mestre",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus massa felis in sedeol commodo. Augue morbi molestie",
    },
    {
      img: Doctor3,
      title: "Lucas Papaw",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus massa felis in sedeol commodo. Augue morbi molestie",
    },
    {
      img: Doctor4,
      title: "James Gunn",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus massa felis in sedeol commodo. Augue morbi molestie",
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In arcu
            cras
            <br /> commodo necnunc, lacus suspendisse mi, imperdiet.
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
                Lorem ipsum dolor sit amet, proin eget consectetur adipiscing
                elit.
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
                Lorem ipsum dolor sit amet, proin eget consectetur adipiscing
                elit.
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
                Lorem ipsum dolor sit amet, proin eget consectetur adipiscing
                elit.
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt
              integer elit
              <br /> cum sed etiam. Nisl arcu ipsum turpis quisque risus
              ultrices eget.
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
      </div>
    </div>
  );
};

export default Pricing;
