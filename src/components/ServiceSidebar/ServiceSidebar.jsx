import "./ServiceSidebar.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import toast from "react-hot-toast"; // Assuming you use Toast for notifications

const ServiceSidebar = ({ fade }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    const formAction = "https://formsubmit.co/Indiaglobaltravels1@gmail.com";

    const formDataToSend = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      formDataToSend.append(key, value);
    });

    formDataToSend.append("_subject", "New Inquiry Received");
    formDataToSend.append("_captcha", "false");
    formDataToSend.append("_template", "table");

    try {
      const response = await fetch(formAction, {
        method: "POST",
        body: formDataToSend,
      });

      if (response.ok) {
        toast.success("Inquiry sent successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        const errorMessage = await response.text();
        toast.error(`Failed to send inquiry: ${errorMessage}`);
        console.error("Form Submission Error:", errorMessage);
      }
    } catch (error) {
      toast.error("Something went wrong! Check console for details.");
      console.error("Network or Server Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="ServiceSidebar"
      data-aos={fade === "fade-up" ? "fade-up" : "fade-left"}
    >
      <form onSubmit={handleSubmit}>
        <h1>Enquiry Now</h1>

        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Enter your phone number"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Enter your message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <button type="submit" disabled={loading} className="submit-button">
          {loading ? "Submiting... Inquiry" : "Submit Inquiry"}
        </button>
      </form>
    </div>
  );
};

export default ServiceSidebar;
