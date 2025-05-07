import "./Navbar.scss";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

import { useEffect, useState } from "react";
import MobileMenu from "../MobileMenu/MobileMenu";
import {
  navPopularDestination,
  outstationServices,
  taxiServices,
} from "../../assets/data";

import { IoLogoWhatsapp } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
import { sameNavData } from "../../assets/sameNavData";
import { map } from "framer-motion/client";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const [scroll, setScroll] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [hideTop, setHideTop] = useState(false);
  const [showNavbarBottom, setShowNavbarBottom] = useState(false);

  const [navbarVisible, setNavbarVisible] = useState(true);

  useEffect(() => {
    const handleNavScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        setShowNavbarBottom(false);
      } else {
        setShowNavbarBottom(true);
      }

      setLastScrollY(currentScrollY);
      setScroll(currentScrollY > 70);
    };

    window.addEventListener("scroll", handleNavScroll);
    return () => {
      window.removeEventListener("scroll", handleNavScroll);
    };
  }, [lastScrollY]);

  const [navTopLastScrollY, setNavTopLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const midPoint = window.innerHeight / 1; // Mid-point of the viewport

      if (currentScrollY > midPoint) {
        // Scrolling down past mid-point
        if (currentScrollY > lastScrollY) {
          setNavbarVisible(false); // Hide navbar
        } else {
          setNavbarVisible(true); // Show navbar when scrolling up
        }
      } else {
        setNavbarVisible(true); // Always show navbar above mid-point
      }

      setNavTopLastScrollY(currentScrollY); // Update last scroll position
      setScroll(currentScrollY > 50); // For scrolled class (optional)
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navTopLastScrollY]);

  return (
    <div className={`navbar ${scroll ? "scrolled" : ""} `}>
      <div
        className={`navbar-top ${
          navbarVisible ? "navbar-visible" : "navbar-hidden"
        }`}
      >
        <div className="navbar-top-left">
          <Link to={"/"}>
            <img src={logo} alt={logo} loading="lazy" />
          </Link>
        </div>

        <div className={`navbar-top-right ${hideTop ? "hidden" : ""}`}>
          <a
            href="https://wa.me/+919718509639"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-btn"
            title="Chat on WhatsApp"
          >
            <div className="navbar-top-right-item">
              <IoLogoWhatsapp className="navbar-top-icon" />
              <div className="navbar-top-right-desc">
                <p>+91 7011890082</p>
                <p> Message Us</p>
              </div>
            </div>
          </a>
          <hr className="nav-hr" />

          <Link to={"/contact-us"}>
            <div className="navbar-top-right-item">
              <IoIosMail className="navbar-top-icon" />
              <div className="navbar-top-right-desc">
                <p>Indiaglobaltravels1@gmail.com</p>
                <p> Contact Us</p>
              </div>
            </div>
          </Link>
        </div>

        <div className="mobile-menu">
          <MobileMenu />
        </div>
      </div>

      <div className={`navbar-bottom ${showNavbarBottom ? "show" : ""}`}>
        <div className="navbar-center">
          <ul>
            <Link to={"/"}>
              <li>
                <span>Home</span>
              </li>
            </Link>
            <Link to={"/about-us"}>
              <li>
                <span>About Us</span>
              </li>
            </Link>

            <div className="services">
              <li
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <span>
                  India Taxi Service <IoIosArrowDown className="down-icon" />
                </span>

                {dropdownOpen && (
                  <div className="services-link">
                    {taxiServices.map((item, index) => (
                      <Link to={item.link} className="service-link" key={index}>
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
            </div>

            <div className="services">
              <li
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <span>
                  Taxi Outstation Services
                  <IoIosArrowDown className="down-icon" />
                </span>

                {dropdownOpen && (
                  <div className="services-link">
                    {outstationServices.map((item, index) => (
                      <Link to={item.link} className="service-link" key={index}>
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
            </div>

            <div className="services nav-popular">
              <li
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => {
                  setDropdownOpen(false);
                  setOpenIndex(null);
                }}
              >
                <span>
                  Popular Destination <IoIosArrowDown className="down-icon" />
                </span>

                {dropdownOpen && (
                  <div className="services-link">
                    {navPopularDestination.map((item, index) => (
                      <div key={index} className="service-item">
                        <Link to={`/${item.link}`} className="service-link">
                          {item.title}
                        </Link>
                        <MdOutlineKeyboardArrowRight
                          className="nav-right-icon"
                          onClick={() => handleToggle(index)}
                        />

                        {openIndex === index && ( // Show only for clicked item
                          <div className="smServiceLinks">
                            {item.smDestination.map((subItem, subIndex) => (
                              <Link
                                key={subIndex}
                                to={`/${subItem.link}`}
                                className="smServiceLink"
                              >
                                {subItem.title}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </li>
            </div>

            <div className="services">
              <li
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <span>
                  Our Services <IoIosArrowDown className="down-icon" />
                </span>

                {dropdownOpen && (
                  <div className="services-link last-service">
                    <Link to={"/india-taxi-service"} className="service-link">
                      India Taxi Service
                    </Link>
                    <Link to={"/tour-guide"} className="service-link">
                      Tour Guide
                    </Link>
                    <div className="same-day-nav service-link">
                      Same Day Services
                      <MdOutlineKeyboardArrowRight className="nav-right-icon" />
                      <div className="same-day-dropdown">
                        {sameNavData.map((item, index) => (
                          <Link
                            to={`/same-day-service/${item.link}`}
                            key={index}
                            className="same-day-link"
                          >
                            {item.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </li>
            </div>

            <Link to={"/our-gallery"}>
              <li>
                <span>Gallery</span>
              </li>
            </Link>

            <Link to={"/tempo-service"}>
              <li>
                <span>Tempo/Bus Service </span>
              </li>
            </Link>

            <Link to={"/blog"}>
              <li>
                <span>Blogs</span>
              </li>
            </Link>

            <Link to={"/contact-us"}>
              <li>
                <span>Contact Us</span>
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
