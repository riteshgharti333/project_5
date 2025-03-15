import "./FloatingButtons.scss";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { trackFloatingButtonClick } from "../../utils/googleAnalytics";

const FloatingButtons = () => {
  return (
    <div className="floating-buttons">
      {/* ✅ Track Call Button Clicks */}
      <a
        href="tel:+917011890082"
        className="call-btn"
        title="Call Now"
        onClick={() => trackFloatingButtonClick("Call Button")}
      >
        <FaPhoneAlt />
      </a>

      {/* ✅ Track WhatsApp Button Clicks */}
      <a
        href="https://wa.me/+919718509639"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-btn"
        title="Chat on WhatsApp"
        onClick={() => trackFloatingButtonClick("WhatsApp Button")}
      >
        <FaWhatsapp />
      </a>
    </div>
  );
};

export default FloatingButtons;
