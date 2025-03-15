import "./ServiceCard.scss";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const ServiceCard = ({ item }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <div className="service-card" data-aos="fade-up">
      <img src={item.img} alt={item.img} loading="lazy" />
      <div className="service-card-items">
        <div className="service-card-item">
          <p>Vehicle</p>
          <p>{item.vehicle}</p>
        </div>
        <div className="service-card-item">
          <p>Rate Per KM</p>
          <p>Rs. {item.rate} Per KM</p>
        </div>
        <div className="service-card-item">
          <p>Driver Charges</p>
          <p>Rs. {item.charges} per Day</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
