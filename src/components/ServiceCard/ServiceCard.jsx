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
      <img src={item.img} alt="" />
      <div className="service-card-items">
        <div className="service-card-item">
          <p>Vehicle</p>
          <p>{item.carType}</p>
        </div>
        <div className="service-card-item">
          <p>Local</p>
          <p>{item.local}</p>
        </div>{" "}
        <div className="service-card-item">
          <p>Outstation</p>
          <p>{item.Outstation}</p>
        </div>{" "}
        <div className="service-card-item">
          <p>Driver TA (Outstation)</p>
          <p>{item.DriverTA}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
