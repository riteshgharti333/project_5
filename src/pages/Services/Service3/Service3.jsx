import ServiceSidebar from "../../../components/ServiceSidebar/ServiceSidebar";
import "./Service3.scss";

import ServiceContent from "../../../components/ServiceContent/ServiceContent";

import { gatewayServices, hpTaxi, taxiFees } from "../../../assets/serviceData";
import ServiceCard from "../../../components/ServiceCard/ServiceCard";
import SEO from "../../../components/SEO";

import banner_img from "../../../assets/images/banner_img.jpg";
import { useLocation } from "react-router-dom";

const Service3 = () => {
  const location = useLocation();
  const baseUrl =
    import.meta.env.VITE_BASE_URL || "https://globalindiatravels.com";
  const fullUrl = `${baseUrl}${location.pathname}`;
  return (
    <div className="service3">
      <SEO
        title="Himachal Taxi Service | Reliable Cabs for Local & Outstation Travel"
        description="Book a taxi in Himachal Pradesh for local sightseeing, adventure trips, and outstation travel. Affordable fares, expert drivers, and 24/7 service."
        url={fullUrl}
        keywords="Himachal taxi service, Shimla taxi, Manali cab, Dharamshala taxi, outstation cabs Himachal, best taxi service in Himachal"
      />

      <div className="service-banner" data-aos="fade-up">
        <img src={banner_img} alt={banner_img} loading="lazy" />

        <div className="service-banner-desc">
          <h1>Himachal Taxi Service</h1>
        </div>
      </div>

      <div className="service-container">
        <div className="service-container-top">
          <div className="service-left">
            <ServiceContent
              taxicontent={hpTaxi}
              gatewayServices={gatewayServices}
            />
          </div>
          <div className="service-sidebar">
            <ServiceSidebar />
          </div>
        </div>
      </div>

      <div className="service-content-bottom">
        <h3>Himachal Local/Outstation Taxi Fare</h3>
        <div className="service-cards">
          {taxiFees.map((item, index) => (
            <ServiceCard item={item} key={index} />
          ))}
        </div>
      </div>
      <div className="service-lg-sidebar">
        <ServiceSidebar />
      </div>
    </div>
  );
};

export default Service3;
