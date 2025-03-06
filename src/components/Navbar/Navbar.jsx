import "./Navbar.scss";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import { IoCall } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { useEffect, useState } from "react";
import MobileMenu from "../MobileMenu/MobileMenu";
import { taxiServices } from "../../assets/data";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

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
        <img src={logo} alt="" />
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
