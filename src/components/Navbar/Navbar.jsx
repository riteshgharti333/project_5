import "./Navbar.scss";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import { IoCall } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="" />
      </div>

      <div className="navbar-center">
        <ul>
          <Link className="services">
            <li
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <span>
                Services <IoIosArrowDown className="down-icon" />
              </span>

              {dropdownOpen && (
                <div className="services-link">
                  <Link className="service-link">Car Rental</Link>
                  <Link className="service-link">Hotels Rooms</Link>
                  <Link className="service-link">Tour Guide</Link>
                  <Link className="service-link">Bike Rent</Link>
                </div>
              )}
            </li>
          </Link>
          <Link>
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
        <button>
          <IoCall className="call-icon" />
          +91 123456789
        </button>
      </div>
    </div>
  );
};

export default Navbar;
