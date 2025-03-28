import ServiceSidebar from "../../../components/ServiceSidebar/ServiceSidebar";
import "./Service6.scss";

import ServiceContent from "../../../components/ServiceContent/ServiceContent";

import { gatewayServices, taxiFees, pbTaxi } from "../../../assets/serviceData";
import ServiceCard from "../../../components/ServiceCard/ServiceCard";
import SEO from "../../../components/SEO";

import banner_img from "../../../assets/images/banner_img.jpg";
import { useLocation } from "react-router-dom";

const Service6 = () => {
  const location = useLocation();
  const baseUrl =
    import.meta.env.VITE_BASE_URL || "https://globalindiatravels.com";
  const fullUrl = `${baseUrl}${location.pathname}`;
  return (
    <div className="service6">
      <SEO
        title="Punjab Taxi Service | Affordable & Reliable Cabs in Punjab"
        description="Book a taxi in Punjab for local travel, airport transfers, and outstation trips. Safe rides, professional drivers, and best fares for Amritsar, Chandigarh, Ludhiana, and more."
        url={fullUrl}
        keywords="Punjab taxi service, Chandigarh cabs, Amritsar car rental, Ludhiana taxi, Jalandhar cab booking, outstation taxi Punjab, best cab service Punjab"
      />

      <div className="service-banner" data-aos="fade-up">
        <img src={banner_img} alt={banner_img} loading="lazy" />

        <div className="service-banner-desc">
          <h1>Punjab Taxi Service</h1>
        </div>
      </div>

      <div className="service-container">
        <div className="service-container-top">
          <div className="service-left">
            <ServiceContent
              taxicontent={pbTaxi}
              gatewayServices={gatewayServices}
            />
          </div>
          <div className="service-sidebar">
            <ServiceSidebar />
          </div>
        </div>
      </div>

      <div className="service-content-bottom">
        <h3>Punjab Local/Outstation Taxi Fare</h3>
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

export default Service6;
