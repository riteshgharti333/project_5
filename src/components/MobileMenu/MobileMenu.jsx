import { useState } from "react";
import "./MobileMenu.scss";
import { Link } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";
import { FaChevronRight } from "react-icons/fa";
import { taxiServices } from "../../assets/data";
import { motion, AnimatePresence } from "framer-motion";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openServices, setOpenServices] = useState(false);

  const handleCloseMenu = () => {
    setIsOpen(false);
  };

  const linkVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: (index) => ({
      x: 0,
      opacity: 1,
      transition: { delay: index * 0.1, duration: 0.3, ease: "easeOut" },
    }),
    exit: (index) => ({
      x: -50,
      opacity: 0,
      transition: {
        delay: (taxiServices.length - index - 1) * 0.1,
        duration: 0.3,
        ease: "easeIn",
      },
    }),
  };

  return (
    <div>
      <Menu
        right
        isOpen={isOpen}
        onStateChange={({ isOpen }) => setIsOpen(isOpen)}
      >
        <Link className="menu-item" to="/" onClick={handleCloseMenu}>
          Home
        </Link>
        <Link className="menu-item" to="/blogs" onClick={handleCloseMenu}>
          Blogs
        </Link>
        <Link className="menu-item" to="/about-us" onClick={handleCloseMenu}>
          About Us
        </Link>

        <Link className="menu-item" to="/contact-us" onClick={handleCloseMenu}>
          Contact Us
        </Link>

        <div className="services-dropdown">
          <div
            className="services-dropdown-item"
            onClick={() => setOpenServices(!openServices)}
          >
            <span>India Taxi Service</span>
            <FaChevronRight className="menu-icon" />
          </div>

          <div className="service-links">
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={openServices ? { height: "auto", opacity: 1 } : {}}
              exit={{
                height: 0,
                opacity: 0,
                transition: { delay: 0.3, duration: 0.4 },
              }} // Delay to allow links to exit first
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="service-links"
            >
              {openServices && (
                <div className="service-link">
                  <AnimatePresence>
                    {openServices &&
                      taxiServices.map((item, index) => (
                        <motion.div
                          key={item.link}
                          custom={index}
                          initial="hidden"
                          animate="visible"
                          exit="exit"
                          variants={linkVariants}
                        >
                          <Link to={`/${item.link}`} onClick={handleCloseMenu}>
                            {item.name}
                          </Link>
                        </motion.div>
                      ))}
                  </AnimatePresence>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </Menu>
    </div>
  );
};
export default MobileMenu;
