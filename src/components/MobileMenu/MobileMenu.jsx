import { useState } from "react";
import "./MobileMenu.scss";
import { Link } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";
import { FaChevronRight } from "react-icons/fa";
import { navPopularDestination, taxiServices } from "../../assets/data";
import { motion, AnimatePresence } from "framer-motion";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openTaxiServices, setOpenTaxiServices] = useState(false);
  const [openPopularDestination, setOpenPopularDestination] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null); // Track active submenu

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
                    <div
                      className="service-title"
                
                    >
                      <Link to={`/${item.link}`} onClick={handleCloseMenu}>
                        {item.title}
                      </Link>
                      {item.smDestination.length > 0 && (
                        <FaChevronRight    onClick={() => toggleSubmenu(index)}
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

        <Link className="menu-item" to="/blogs" onClick={handleCloseMenu}>
          Blogs
        </Link>
        <Link className="menu-item" to="/about-us" onClick={handleCloseMenu}>
          About Us
        </Link>
        <Link className="menu-item" to="/contact-us" onClick={handleCloseMenu}>
          Contact Us
        </Link>
      </Menu>
    </div>
  );
};

export default MobileMenu;
