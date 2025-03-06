import "./Navbar.scss";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import { IoCall } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";
import MobileMenu from "../MobileMenu/MobileMenu";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="navbar">
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
                  <Link to={"/delhi-taxi-service"} className="service-link">
                    Delhi Taxi
                  </Link>
                  <Link className="service-link">Hotels Rooms</Link>
                  <Link className="service-link">Tour Guide</Link>
                  <Link className="service-link">Bike Rent</Link>
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
          <button>
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
