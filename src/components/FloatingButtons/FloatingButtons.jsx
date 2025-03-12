import "./FloatingButtons.scss";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa"; 

const FloatingButtons = () => {
  return (
    <div className="floating-buttons">
      <a href="tel:+9170118 90082" className="call-btn" title="Call Now">
        <FaPhoneAlt />
      </a>
      <a
        href="https://wa.me/+919718509639"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-btn"
        title="Chat on WhatsApp"
      >
        <FaWhatsapp />
      </a>
    </div>
  );
};

export default FloatingButtons;
