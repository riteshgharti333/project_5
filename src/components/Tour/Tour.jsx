import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { services } from "../../assets/data";
import "./Tour.scss";

const Tour = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
  }, []);

  return (
    <div className="tour">
      <div className="tour-top" data-aos="fade-up">
        <h1>
          Explore India with Global India Tour – Your Gateway to Unforgettable
          Journeys
        </h1>
        <p>
          Embark on an extraordinary adventure across India with{" "}
          <strong>Global India Tour</strong>, your trusted travel partner for
          unforgettable experiences. Discover the iconic{" "}
          <strong>Taj Mahal</strong> in Agra, the royal{" "}
          <strong>palaces of Rajasthan</strong>, and the breathtaking{" "}
          <strong>Himalayan landscapes</strong>.
        </p>

        <p>
          Whether you're seeking a cultural escape, a spiritual retreat in{" "}
          <strong>Varanasi</strong>, or a beachside paradise in Goa, we offer
          customized tour packages that cater to every traveler. Enjoy seamless
          itineraries, expert guides, and top-notch accommodations, ensuring a
          hassle-free and enriching journey.
        </p>

        <p>
          Let Global India Tour take you on an extraordinary exploration of
          India’s most iconic and hidden gems.{" "}
          <strong>Book your dream vacation today </strong>
          and immerse yourself in the magic, history, and beauty of India like
          never before!
        </p>
      </div>

      <div className="tour-cards">
        {services.map((item, index) => (
          <div className="tour-card" key={index} data-aos="fade-right">
            <div className="tour-card-top">
              {item.icon && <item.icon className="tour-card-icon" />}
            </div>

            <div className="tour-card-bottom">
              <h2>{item.title}</h2>
              <div className="tour-card-bottom-desc">
                <h3>{item.smTitle}</h3>
                <p>{item.desc}</p>
              </div>

              <div className="tour-card-bottom-option">
                {item.servicesOption.map((option, index) => (
                  <span key={index} data-aos="zoom-in">
                    {option}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tour;
