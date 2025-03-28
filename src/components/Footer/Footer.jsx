import { Link } from "react-router-dom";
import "./Footer.scss";

import logo from "../../assets/images/logo.png";

import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

import { IoCallSharp } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import {
  navPopularDestination,
  outstationServices,
  taxiServices,
} from "../../assets/data";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <img src={logo} alt={logo} loading="lazy" />
        <div className="footer-top-items">
          <div className="footer-top-item">
            <IoCallSharp className="footer-top-icon" />
            <p>
              <a href="tel:+917011890082">+91 7011890082</a>,{" "}
              <a href="tel:+9718509639">+91 9718509639</a>
            </p>
          </div>
          <div className="footer-top-item">
            <MdEmail className="footer-top-icon" />
            <p> Indiaglobaltravels1@gmail.com</p>
          </div>
          <div className="footer-top-item">
            <FaLocationDot className="footer-top-icon" />
            <p> wz95/ Dharmpal Niwas,Thodapur Indar Puri New Delhi - 110012</p>
          </div>
        </div>
      </div>

      <div className="footer-center">
        <div className="footer-center-items">
          <div className="footer-center-item">
            <h3>India Taxi Service</h3>
            <ul>
              {taxiServices.map((item, index) => (
                <Link to={item.link} key={index}>
                  <li>{item.name}</li>
                </Link>
              ))}
            </ul>
          </div>
          <div className="footer-center-item">
            <h3> Taxi Outstation Services</h3>
            <ul>
              {outstationServices.map((item, index) => (
                <Link to={item.link} key={index}>
                  <li>{item.name}</li>
                </Link>
              ))}
            </ul>
          </div>
          <div className="footer-center-item">
            <h3> Popular Destination </h3>
            <ul>
              {navPopularDestination.map((item, index) => (
                <Link to={item.link} key={index}>
                  <li>{item.title}</li>
                </Link>
              ))}
            </ul>
          </div>

          <div className="footer-center-item">
            <h3> Our Services </h3>
            <ul>
              <Link to={"/india-taxi-service"} className="service-link">
                <li>India Taxi Service</li>
              </Link>
              <Link to={"/tour-guide"} className="service-link">
                <li>Tour Guide</li>
              </Link>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>
          Copyright 2025 all rights reserved Global India Travel
          </p>

          <div className="footer-icons">
            <a
              href="https://www.facebook.com/share/p/1FSwuHsTm8/?mibextid=WC7FNe"
              target="_blank"
            >
              <FaFacebook className="footer-icon facebook" />
            </a>

            <a
              href="https://www.instagram.com/p/DGmowV8TTPv/?igsh=bzFnaW1xdG9zdW81"
              target="_blank"
            >
              <FaInstagram className="footer-icon insta" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
