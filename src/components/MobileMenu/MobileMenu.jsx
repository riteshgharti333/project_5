import { useState } from "react";
import "./MobileMenu.scss";
import { Link } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleCloseMenu = () => {
    setIsOpen(false);
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
