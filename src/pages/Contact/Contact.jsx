import "./Contact.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

const Contact = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    subject: "",
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

    formDataToSend.append("_subject", "New Contact Form Submission");
    formDataToSend.append("_captcha", "false");
    formDataToSend.append("_template", "table");

    try {
      const response = await fetch(formAction, {
        method: "POST",
        body: formDataToSend,
      });

      if (response.ok) {
        toast.success("Message sent successfully!");
        setFormData({
          fullName: "",
          email: "",
          mobile: "",
          subject: "",
          message: "",
        });
      } else {
        toast.error("Failed to send message. Try again.");
      }
    } catch (error) {
      toast.error("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact">
      <div className="contact-banner" data-aos="fade-up">
        <img
          src="https://images.unsplash.com/photo-1612438214708-f428a707dd4e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8MHx8fA%3D%3D"
          alt=""
        />
        <div className="contact-banner-desc">
          <h1>Contact Us</h1>
        </div>
      </div>

      <div className="contact-form" data-aos="fade-up">
        <form onSubmit={handleSubmit} className="form-container">
          <h2>Send a Message</h2>
          <div className="form-group">
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
            <label htmlFor="fullName">Full Name</label>
          </div>
          <div className="form-group">
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <label htmlFor="email">Email</label>
          </div>
          <div className="form-group">
            <input
              type="tel"
              id="mobile"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              required
            />
            <label htmlFor="mobile">Mobile No</label>
          </div>
          <div className="form-group">
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
            <label htmlFor="subject">Subject</label>
          </div>
          <div className="form-group">
            <textarea
              id="message"
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <label htmlFor="message">Your Message</label>
          </div>
          <button type="submit" disabled={loading} className="submit-btn">
            {loading ? "Sending... Message" : "Send Message"}
          </button>
        </form>
      </div>

      <div className="contact-address">
        <div className="contact-address-container">
          <h1>Contact Us</h1>
          <p>
            We’d love to hear from you! Whether it’s inquiries, feedback, or
            support, our team is ready to help. Get in touch through our contact
            form or call us directly.
          </p>

          <div className="address" data-aos="fade-up">
            <div className="address-item">
              <h3>Head Office - New Delhi</h3>
              <span>wz95/ Dharmpal Niwas,Thodapur Indar Puri</span>
              <span>New Delhi - 110012</span>
              <span>Need live support? : +91 70118 90082, +91 9718509639</span>
              <span>Email : Indiaglobaltravels1@gmail.com</span>
            </div>
          </div>

          <div className="contact-map" data-aos="fade-up">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3731.805801551631!2d70.98298267524812!3d20.71810908085459!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjDCsDQzJzA1LjIiTiA3MMKwNTknMDguMCJF!5e0!3m2!1sen!2sin!4v1740658269472!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
