import { Link } from "react-router-dom";
import "./Footer.scss";

import logo from "../../assets/images/logo.png";
import { BsArrowUpRight } from "react-icons/bs";

import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { IoCall } from "react-icons/io5";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="footer-inner">
            <div className="row">
              <div className="row1">
                <div className="footer-widget">
                  <ul>
                    <li>
                      <Link>About Us</Link>
                    </li>
                    <li>
                      <Link>Contact Us</Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="row2">
                <div className="row2-widget">
                  <div className="footer-logo">
                    <img src={logo} alt="" />
                  </div>
                  <h6 className="row2-title">
                    Contact Us for Explore incredible <br /> destinations and
                    create unforgettable travel memories!
                  </h6>
                  <div className="row2-input">
                    <Link to={"/contact-us"}>
                      <button>
                        <IoCall className="call-icon" />
                        +91 123456789
                      </button>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="row3">
                <div className="footer-widget">
                  <ul>
                    <li>
                      <Link>Service 1</Link>
                    </li>
                    <li>
                      <Link>Service 1</Link>
                    </li>{" "}
                    <li>
                      <Link>Service 1</Link>
                    </li>{" "}
                    <li>
                      <Link>Service 1</Link>
                    </li>{" "}
                    <li>
                      <Link>Service 1</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
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
