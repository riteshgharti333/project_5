import { Link } from "react-router-dom";
import "./Footer.scss";

import logo from "../../assets/images/logo.png";
import { BsArrowUpRight } from "react-icons/bs";

import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { IoCall } from "react-icons/io5";

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
        <img src={logo} alt="" />
        <div className="footer-top-items">
          <div className="footer-top-item">
            <IoCallSharp className="footer-top-icon" />
            <p> +91 70118 90082, +91 9718509639</p>
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
            Global India Travel all rights reserved Devloped and Design by&nbsp;
            <a
              href="https://www.Wingstarnarketing.com"
              target="_blank"
              rel="noopener noreferrer"
              className="star-link"
            >
              Star Marketing
            </a>
          </p>

          <div className="footer-icons">
            <a
              href="https://www.facebook.com/tkproductionfilm?mibextid=wwXIfr&rdid=shqDkdh9xtXyGSgN&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F163hvW8GX9%2F%3Fmibextid%3DwwXIfr#"
              target="_blank"
            >
              <FaFacebook className="footer-icon facebook" />
            </a>

            <a
              href="https://www.instagram.com/tk_production_film/?igsh=dmg3cm5tdXBxN3R1&utm_source=qr#"
              target="_blank"
            >
              <FaInstagram className="footer-icon insta" />
            </a>

            <a href="https://www.youtube.com/@tkproductionfilm" target="_blank">
              <FaYoutube className="footer-icon youtube" />
            </a>

            <a
              href="https://www.tiktok.com/@takproductionsltd?_t=ZN-8uBFBGxMNMc&_r=1"
              target="_blank"
            >
              <FaTiktok className="footer-icon tiktok" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
