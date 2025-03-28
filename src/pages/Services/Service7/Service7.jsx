import ServiceSidebar from "../../../components/ServiceSidebar/ServiceSidebar";
import "./Service7.scss";

import ServiceContent from "../../../components/ServiceContent/ServiceContent";
import banner_img from "../../../assets/images/banner_img.jpg";

import { gatewayServices, hrTaxi, taxiFees } from "../../../assets/serviceData";
import ServiceCard from "../../../components/ServiceCard/ServiceCard";
import SEO from "../../../components/SEO";
import { useLocation } from "react-router-dom";

const Service7 = () => {
  const location = useLocation();
  const baseUrl =
    import.meta.env.VITE_BASE_URL || "https://globalindiatravels.com";
  const fullUrl = `${baseUrl}${location.pathname}`;
  return (
    <div className="service7">
      <SEO
        title="Haryana Taxi Service | Best Cabs for Local & Outstation Travel"
        description="Book a taxi in Haryana for city rides, airport transfers, and outstation trips. Affordable fares, professional drivers, and 24/7 service across Haryana."
        url={fullUrl}
        keywords="Haryana taxi service, Gurgaon cabs, Faridabad taxi, Chandigarh to Delhi cab, outstation taxi Haryana, best taxi service in Haryana"
      />

      <div className="service-banner" data-aos="fade-up">
        <img src={banner_img} alt={banner_img} loading="lazy" />

        <div className="service-banner-desc">
          <h1>Haryana Taxi Service</h1>
        </div>
      </div>

      <div className="service-container">
        <div className="service-container-top">
          <div className="service-left">
            <ServiceContent
              taxicontent={hrTaxi}
              gatewayServices={gatewayServices}
            />
          </div>
          <div className="service-sidebar">
            <ServiceSidebar />
          </div>
        </div>
      </div>

      <div className="service-content-bottom">
        <h3>Haryana Local/Outstation Taxi Fare</h3>
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

export default Service7;
