import ServiceSidebar from "../../../components/ServiceSidebar/ServiceSidebar";
import "./Service4.scss";

import ServiceContent from "../../../components/ServiceContent/ServiceContent";

import { gatewayServices, rjTaxi, taxiFees } from "../../../assets/serviceData";
import ServiceCard from "../../../components/ServiceCard/ServiceCard";
import SEO from "../../../components/SEO";

import banner_img from "../../../assets/images/banner_img.jpg";
import { useLocation } from "react-router-dom";

const Service4 = () => {
  const location = useLocation();
  const baseUrl =
    import.meta.env.VITE_BASE_URL || "https://globalindiatravels.com";
  const fullUrl = `${baseUrl}${location.pathname}`;
  return (
    <div className="service4">
      <SEO
        title="Rajasthan Taxi Service | Best Cabs for Local & Outstation Travel"
        description="Book a taxi in Rajasthan for local sightseeing, desert tours, and outstation travel. Affordable fares, professional drivers, and 24/7 service."
        url={fullUrl}
        keywords="Rajasthan taxi service, Jaipur taxi, Udaipur cab, Jaisalmer taxi, outstation cabs Rajasthan, best taxi service in Rajasthan"
      />
      <div className="service-banner" data-aos="fade-up">
        <img src={banner_img} alt={banner_img} loading="lazy" />

        <div className="service-banner-desc">
          <h1>Rajasthan Taxi Service</h1>
        </div>
      </div>

      <div className="service-container">
        <div className="service-container-top">
          <div className="service-left">
            <ServiceContent
              taxicontent={rjTaxi}
              gatewayServices={gatewayServices}
            />
          </div>
          <div className="service-sidebar">
            <ServiceSidebar />
          </div>
        </div>
      </div>

      <div className="service-content-bottom">
        <h3>Rajasthan Local/Outstation Taxi Fare</h3>
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

export default Service4;
