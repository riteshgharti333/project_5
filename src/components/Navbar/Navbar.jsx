import "./Navbar.scss";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import { IoCall } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

import { useEffect, useState } from "react";
import MobileMenu from "../MobileMenu/MobileMenu";
import { navPopularDestination, taxiServices } from "../../assets/data";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index)); // Toggle submenu
  };

  const [lastScrollY, setLastScrollY] = useState(0);
  const [navbarVisible, setNavbarVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const midPoint = window.innerHeight / 1;

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

      setLastScrollY(currentScrollY); // Update last scroll position
      setScroll(currentScrollY > 50); // For scrolled class (optional)
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div
      className={`navbar ${navbarVisible ? "navbar-visible" : "navbar-hidden"}`}
    >
      <div className="navbar-left">
        <Link to={"/"}>
          <img src={logo} alt="" />
        </Link>
      </div>

      <div className="navbar-center">
        <ul>
          <Link to={"/"}>
            <li>
              <span>Home</span>
            </li>
          </Link>
          <Link className="services">
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
          </Link>

          <Link className="services nav-popular">
            <li
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
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
          </Link>

          <Link to={"/blogs"}>
            <li>
              <span>Blogs</span>
            </li>
          </Link>
          <Link to={"/about-us"}>
            <li>
              <span>About Us</span>
            </li>
          </Link>
          <Link>
            <li>
              <span>Contact Us</span>
            </li>
          </Link>
        </ul>
      </div>
      <div className="navbar-right">
        <div className="navbar-right-button">
          <button className="call-btn">
            <IoCall className="call-icon" />
            +91 123456789
          </button>
        </div>

        <div className="mobile-menu">
          <MobileMenu />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
