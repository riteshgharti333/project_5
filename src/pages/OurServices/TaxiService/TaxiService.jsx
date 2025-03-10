import { taxiFees } from "../../../assets/serviceData";
import ServiceCard from "../../../components/ServiceCard/ServiceCard";
import "./TaxiService.scss";

import ServiceSidebar from "../../../components/ServiceSidebar/ServiceSidebar";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const TaxiService = () => {

    useEffect(() => {
      AOS.init({
        duration: 1000,
        easing: "ease-in-out",
        once: true,
      });
    }, []);

  return (
    <div className="taxiService">
      <div className="taxiService-banner" data-aos="fade-up">
        <img
          src="https://images.unsplash.com/photo-1612438214708-f428a707dd4e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />

        <div className="taxiService-banner-desc">
          <h1>India Taxi Service</h1>
        </div>
      </div>

      <div className="taxiService-content">
        <div className="taxiService-content-left" data-aos="fade-right">
          <h1>India Taxi Service</h1>
          <p>
            Exploring the vast and varied landscapes of North India is best done
            at your own pace, and Getway Cab Service provides a convenient car
            rental service to help you do just that. Whether you need a vehicle
            for a short city tour or a longer journey across the region, we have
            a wide range of cars to suit your needs.
          </p>
          <p>
            Our fleet includes everything from compact cars for solo travelers
            and couples to spacious SUVs for families and groups. Each vehicle
            is well-maintained and equipped with modern amenities to ensure a
            comfortable and safe journey. We also offer luxury cars for those
            looking to travel in style and comfort.
          </p>
          <p>
            Booking a car with us is easy and convenient. You can make a
            reservation online, over the phone, or in person at our Karol Bagh
            office. We offer competitive rates and transparent pricing, with no
            hidden charges. Additionally, our customer support team is available
            24/7 to assist with any questions or concerns you may have during
            your rental period.
          </p>
        </div>
        <div className="taxiService-content-right">
          <ServiceSidebar />
        </div>
      </div>

      <div className="taxiService-bottom">
        <h1>Our Taxi Services</h1>
        <div className="taxiService-cards">
          {taxiFees.map((item, index) => (
            <ServiceCard item={item} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TaxiService;
