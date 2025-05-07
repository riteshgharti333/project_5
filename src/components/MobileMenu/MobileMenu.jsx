import { useState } from "react";
import "./MobileMenu.scss";
import { Link } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";
import { FaChevronRight } from "react-icons/fa";
import {
  navPopularDestination,
  outstationServices,
  taxiServices,
} from "../../assets/data";
import { motion, AnimatePresence } from "framer-motion";
import { sameNavData } from "../../assets/sameNavData";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openTaxiServices, setOpenTaxiServices] = useState(false);
  const [openPopularDestination, setOpenPopularDestination] = useState(false);
  const [openServices, setOpenServices] = useState(false);

  const [openOutStation, setOpenOutStation] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [openSame, setOpenSame] = useState(false);

  const handleCloseMenu = () => {
    setIsOpen(false);
  };

  const toggleSubmenu = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  return (
    <div className="mb-menu">
      <Menu
        right
        isOpen={isOpen}
        onStateChange={({ isOpen }) => setIsOpen(isOpen)}
      >
        <Link className="menu-item" to="/" onClick={handleCloseMenu}>
          Home
        </Link>

        <Link className="menu-item" to="/about-us" onClick={handleCloseMenu}>
          About Us
        </Link>

        {/* India Taxi Service Dropdown */}
        <div className="services-dropdown">
          <div
            className="services-dropdown-item"
            onClick={() => setOpenTaxiServices(!openTaxiServices)}
          >
            <span>India Taxi Service</span>
            <FaChevronRight
              className={`menu-icon ${openTaxiServices ? "open" : ""}`}
            />
          </div>

          <AnimatePresence>
            {openTaxiServices && (
              <motion.div
                className="service-links"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0, transition: { duration: 0.4 } }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                {taxiServices.map((item) => (
                  <Link
                    key={item.link}
                    to={`/${item.link}`}
                    onClick={handleCloseMenu}
                  >
                    {item.name}
                  </Link>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* OutStation */}
        <div className="services-dropdown">
          <div
            className="services-dropdown-item"
            onClick={() => setOpenOutStation(!openOutStation)}
          >
            <span> Taxi Outstation Services</span>
            <FaChevronRight
              className={`menu-icon ${openTaxiServices ? "open" : ""}`}
            />
          </div>

          <AnimatePresence>
            {openOutStation && (
              <motion.div
                className="service-links"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0, transition: { duration: 0.4 } }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                {outstationServices.map((item) => (
                  <Link
                    key={item.link}
                    to={`/${item.link}`}
                    onClick={handleCloseMenu}
                  >
                    {item.name}
                  </Link>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Popular Destination Dropdown */}
        <div className="services-dropdown">
          <div
            className="services-dropdown-item"
            onClick={() => setOpenPopularDestination(!openPopularDestination)}
          >
            <span>Popular Destination</span>
            <FaChevronRight
              className={`menu-icon ${openPopularDestination ? "open" : ""}`}
            />
          </div>

          <AnimatePresence>
            {openPopularDestination && (
              <motion.div
                className="service-links"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0, transition: { duration: 0.4 } }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                {navPopularDestination.map((item, index) => (
                  <div key={index} className="service-item">
                    <div className="service-title">
                      <Link to={`/${item.link}`} onClick={handleCloseMenu}>
                        {item.title}
                      </Link>
                      {item.smDestination.length > 0 && (
                        <FaChevronRight
                          onClick={() => toggleSubmenu(index)}
                          className={`submenu-icon ${
                            activeDropdown === index ? "active" : ""
                          }`}
                        />
                      )}
                    </div>

                    <AnimatePresence>
                      {activeDropdown === index && (
                        <motion.div
                          className="smServiceLinks"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          {item.smDestination.map((subItem, subIndex) => (
                            <Link
                              key={subIndex}
                              to={`/${subItem.link}`}
                              className="smServiceLink"
                              onClick={handleCloseMenu}
                            >
                              {subItem.title}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Same day services */}

        <div className="services-dropdown">
          <div
            className="services-dropdown-item"
            onClick={() => setOpenSame(!openSame)}
          >
            <span>Same Day Services</span>
            <FaChevronRight className={`menu-icon ${openSame ? "open" : ""}`} />
          </div>

          <AnimatePresence>
            {openSame && (
              <motion.div
                className="service-links"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0, transition: { duration: 0.4 } }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                {sameNavData.map((item, index) => (
                  <Link
                    to={`/same-day-service/${item.link}`}
                    key={index}
                    className="same-day-link"
                    onClick={handleCloseMenu}
                  >
                    {item.title}
                  </Link>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Services */}
        <div className="services-dropdown">
          <div
            className="services-dropdown-item"
            onClick={() => setOpenServices(!openServices)}
          >
            <span>Our Services</span>
            <FaChevronRight
              className={`menu-icon ${openTaxiServices ? "open" : ""}`}
            />
          </div>

          <AnimatePresence>
            {openServices && (
              <motion.div
                className="service-links"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0, transition: { duration: 0.4 } }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                <Link to={`/india-taxi-service`} onClick={handleCloseMenu}>
                  India Taxi Service
                </Link>
                <Link to={`/tour-guide`} onClick={handleCloseMenu}>
                  Tour Guide
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <Link
          className="menu-item"
          to={"/tempo-service"}
          onClick={handleCloseMenu}
        >
          Tempo/Bus Service
        </Link>

        <Link className="menu-item" to="/our-gallery" onClick={handleCloseMenu}>
          Gallery
        </Link>

        <Link className="menu-item" to="/blog" onClick={handleCloseMenu}>
          Blogs
        </Link>

        <Link className="menu-item" to="/contact-us" onClick={handleCloseMenu}>
          Contact Us
        </Link>
      </Menu>
    </div>
  );
};

export default MobileMenu;
