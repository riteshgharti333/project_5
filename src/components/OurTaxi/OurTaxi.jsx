import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./OurTaxi.scss";

import { ourTaxies } from "../../assets/data";
import { Link } from "react-router-dom";

const OurTaxi = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <div className="ourTaxi">
      <div className="ourTaxi-top" data-aos="fade-up">
        <h1>Our Cab Service : Trust the Wheel, Enjoy the Ride</h1>
        <p>
          Traveling across North India is a dream for many, and having a
          reliable car rental service can make this dream a reality.{" "}
          <strong>Global India Tour</strong> is your go-to solution for all your
          travel needs, providing comfort, safety, and affordability. Let’s dive
          into why Global India Tour should be your top choice for exploring the
          rich cultural heritage and breathtaking landscapes of{" "}
          <strong>North India</strong>.
        </p>
      </div>

      <div className="ourTaxi-cards" data-aos="fade-up">
        {ourTaxies.map((item, index) => (
          <Link to={item.link} key={index}>
            <div className="ourTaxi-card">
              <img src={item.img} alt={item.name} loading="lazy" />
              <button>
                <div className="btn-wrap">
                  <span>{item.name}</span>
                  <span>View Detail</span>
                </div>
              </button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default OurTaxi;
