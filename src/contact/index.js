import react from "react";
import "./style.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocationDot,
  faMinus,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <div className="container">
      <div className="contact-content">
        <div className="contact-left col-lg-6">
          <div className="contact-title">
            <h1>Book your appointment</h1>
            <p>
              Easily schedule your dental appointment at your convenience.
              <br /> Get expert care and a healthy smile with just a few clicks!
            </p>
          </div>
          <div className="contact-info">
            <h4>More Information</h4>
            <ul>
              <li>
                <div className="contact-icon">
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    style={{ marginRight: 10 }}
                    color="#5D4FFF"
                  />
                </div>
                <div className="contact-text">
                  <h5>Address</h5>
                  <p>P. Tây Tựu - Q. Bắc Từ Liêm - TP. Hà Nội</p>
                </div>
              </li>
              <li>
                <div className="contact-icon">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    style={{ marginRight: 10 }}
                    color="#5D4FFF"
                  />
                </div>
                <div className="contact-text">
                  <h5>Email</h5>
                  <p>hoanh472001@gmail.com</p>
                </div>
              </li>
              <li>
                <div className="contact-icon">
                  <FontAwesomeIcon
                    icon={faPhone}
                    style={{ marginRight: 10 }}
                    color="#5D4FFF"
                  />
                </div>
                <div className="contact-text">
                  <h5>Phone</h5>
                  <p>(+84)345-6789</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="contact-right col-lg-6">
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
      <div className="contact-faq">
        <div className="faq-title">
          <h1>Frequently Asked Questions</h1>
          <p>
            Find answers to common questions about our dental services,
            appointment process, and pricing.
            <br /> Need more help? Contact us anytime!
          </p>
        </div>
        <div className="faq-content">
          <ul>
            <li>
              <div className="faq-nav-content">
                <div className="faq-icon">
                  <FontAwesomeIcon icon={faMinus} style={{ marginRight: 10 }} />
                </div>
                <div className="faq-text">What's your main dental service?</div>
              </div>
            </li>
            <li>
              <div className="faq-nav-content">
                <div className="faq-icon">
                  <FontAwesomeIcon icon={faMinus} style={{ marginRight: 10 }} />
                </div>
                <div className="faq-text">
                  Do you offer appointments on weekends?
                </div>
              </div>
            </li>
            <li>
              <div className="faq-nav-content">
                <div className="faq-icon">
                  <FontAwesomeIcon icon={faMinus} style={{ marginRight: 10 }} />
                </div>
                <div className="faq-text">
                  How many dentists do your clinic has?
                </div>
              </div>
            </li>
            <li>
              <div className="faq-nav-content">
                <div className="faq-icon">
                  <FontAwesomeIcon icon={faMinus} style={{ marginRight: 10 }} />
                </div>
                <div className="faq-text">
                  What is the cost for an appoitment?
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
