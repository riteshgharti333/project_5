import "./ServiceContent.scss";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const ServiceContent = ({ taxicontent, gatewayServices }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <div className="service-content" data-aos="fade-right">
      {taxicontent.map((item, index) => (
        <div className="service-comp-content" key={index}>
          {/* Title & Description */}
          <h1>{item.taxiContent1.title}</h1>
          <p>{item.taxiContent1.desc}</p>

          {/* Sightseeing Places */}
          <div className="service-content-list">
            <h3>{item.taxiContent2.place}</h3>
            <ul>
              {item.taxiContent2.places.map((place, idx) => (
                <li key={idx}>
                  <span>{place.placeTitle}:</span> {place.placeDesc}
                </li>
              ))}
            </ul>
          </div>

          {/* Getway Services */}
          <div className="service-content2-list">
            <h3>{item.getway}</h3>
            <ul>
              {gatewayServices.map((service, index) => (
                <li key={index}>{service}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServiceContent;
