import { taxiFees } from "../../../assets/serviceData";
import ServiceCard from "../../../components/ServiceCard/ServiceCard";
import "./TaxiService.scss";

import ServiceSidebar from "../../../components/ServiceSidebar/ServiceSidebar";

import banner_img from "../../../assets/images/banner_img.jpg";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

import SEO from "../../../components/SEO";

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
      <SEO
        title="Best Taxi Service in India | Affordable & Reliable Cabs"
        description="Book a taxi anywhere in India with our affordable and reliable taxi service. 24/7 availability, professional drivers, and comfortable rides. Travel hassle-free today!"
        url={window.location.href}
        keywords="India taxi service, book a taxi, best cabs in India, reliable taxi, affordable taxi in India, airport taxi, city taxi service, outstation taxi"
      />

      <div className="taxiService-banner" data-aos="fade-up">
        <img src={banner_img} alt={banner_img}  loading="lazy"/>

        <div className="taxiService-banner-desc">
          <h1>India Taxi Service</h1>
        </div>
      </div>

      <div className="taxiService-content">
        <div className="taxiService-content-left" data-aos="fade-right">
          <h2>India Taxi Service</h2>
          <p>
            Exploring the vast and varied landscapes of North India is best done
            at your own pace, and Global India Travel Service provides a
            convenient car rental service to help you do just that. Whether you
            need a vehicle for a short city tour or a longer journey across the
            region, we have a wide range of cars to suit your needs.
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
        <h2>Our Taxi Services</h2>
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
