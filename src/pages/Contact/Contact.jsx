import "./Contact.scss";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <div className="contact">
      <div className="contact-banner" data-aos="fade-up">
        <img
          src="https://images.unsplash.com/photo-1612438214708-f428a707dd4e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />

        <div className="contact-banner-desc">
          <h1>Contact Us</h1>
        </div>
      </div>

      <div className="contact-form"   data-aos="fade-up">
        <form action="#" method="POST" className="form-container">
          <h2>Send a Message</h2>
          <div className="form-group">
            <input type="text" id="fullName" name="fullName" required />
            <label for="fullName">Full Name</label>
          </div>
          <div className="form-group">
            <input type="email" id="email" name="email" required />
            <label for="email">Email</label>
          </div>
          <div className="form-group">
            <input type="tel" id="mobile" name="mobile" required />
            <label for="mobile">Mobile No</label>
          </div>
          <div className="form-group">
            <input type="text" id="subject" name="subject" required />
            <label for="subject">Subject</label>
          </div>
          <div className="form-group">
            <textarea id="message" name="message" rows="4" required></textarea>
            <label for="message">Your Message</label>
          </div>
          <button type="submit" className="submit-btn">
            Send Message
          </button>
        </form>
      </div>

      <div className="contact-address">
        <div className="contact-address-container">
          <h1>Contact Us</h1>
          <p>
            We're very approachable and would love to speak to you. Feel free to
            call, send us an email, Tweet us or simply complete the enquiry
            form.
          </p>

          <div className="address"  data-aos="fade-up">
            <div className="address-item">
              <h3>Head Office - New Delhi</h3>
              <span>609, 6th Floor, Sethi Bhawan, Rajender Place,</span>
              <span>New Delhi- 110008</span>
              <span>Need live support? : +918860139194, 011-45637975</span>
              <span>
                Email : info@ghumindiaghum.com, ghumindiaghum@gmail.com
              </span>
            </div>

            <div className="address-item">
              <h3>Head Office - New Delhi</h3>
              <span>609, 6th Floor, Sethi Bhawan, Rajender Place,</span>
              <span>New Delhi- 110008</span>
              <span>Need live support? : +918860139194, 011-45637975</span>
              <span>
                Email : info@ghumindiaghum.com, ghumindiaghum@gmail.com
              </span>
            </div>
          </div>

          <div className="contact-map"  data-aos="fade-up">
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
