import ServiceSidebar from "../../../components/ServiceSidebar/ServiceSidebar";
import "./Service2.scss";

import ServiceContent from "../../../components/ServiceContent/ServiceContent";

import banner_img from "../../../assets/images/banner_img.jpg";

import { gatewayServices, ukTaxi, taxiFees } from "../../../assets/serviceData";
import ServiceCard from "../../../components/ServiceCard/ServiceCard";
import SEO from "../../../components/SEO";
import { useLocation } from "react-router-dom";

const Service2 = () => {
  const location = useLocation();
  const baseUrl =
    import.meta.env.VITE_BASE_URL || "https://globalindiatravels.com";
  const fullUrl = `${baseUrl}${location.pathname}`;
  return (
    <div className="service2">
      <SEO
        title="Uttarakhand Taxi Service | Best Cabs for Local & Outstation Travel"
        description="Book a taxi in Uttarakhand for local sightseeing, Char Dham Yatra, and outstation trips. Affordable fares, reliable service, and expert drivers. 24/7 availability."
        url={fullUrl}
        keywords="Uttarakhand taxi service, Char Dham Yatra taxi, Haridwar taxi, Rishikesh cab, Kedarnath Badrinath taxi, local cabs in Uttarakhand"
      />

      <div className="service-banner" data-aos="fade-up">
        <img src={banner_img} alt={banner_img} loading="lazy" />

        <div className="service-banner-desc">
          <h1>Uttarakhand Taxi Service</h1>
        </div>
      </div>

      <div className="service-container">
        <div className="service-container-top">
          <div className="service-left">
            <ServiceContent
              taxicontent={ukTaxi}
              gatewayServices={gatewayServices}
            />
          </div>
          <div className="service-sidebar">
            <ServiceSidebar />
          </div>
        </div>
      </div>

      <div className="service-content-bottom">
        <h3>Uttarakhand Local/Outstation Taxi Fare</h3>
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

export default Service2;
