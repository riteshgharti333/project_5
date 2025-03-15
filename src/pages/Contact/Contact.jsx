import "./Contact.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import banner_img from "../../assets/images/banner_img.jpg";
import SEO from "../../components/SEO";

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
      <SEO
        title="Contact Us | Get in Touch for Taxi & Car Rental Services"
        description="Need a reliable taxi or car rental? Contact us today for 24/7 support, affordable fares, and professional service. Call, email, or visit us for quick assistance!"
        url={window.location.href}
        keywords="contact us, taxi service contact, car rental support, book a ride, 24/7 taxi help, customer support, taxi phone number, travel assistance"
      />

      <div className="contact-banner" data-aos="fade-up">
        <img src={banner_img} alt={banner_img} loading="lazy" />
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
          <h2>Contact Us</h2>
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
              <span>
                Need live support? :{" "}
                <a href="tel:+917011890082">+91 7011890082</a>,{" "}
                <a href="tel:+9718509639">+91 9718509639</a>
              </span>
              <span>Email : Indiaglobaltravels1@gmail.com</span>
            </div>
          </div>

          <div className="contact-map" data-aos="fade-up">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.0524128176435!2d77.1493764!3d28.628191199999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d038fe22cbe27%3A0x7b234cd402107ba4!2sGlobal%20India%20Travels!5e0!3m2!1sen!2sin!4v1741773204877!5m2!1sen!2sin"
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
