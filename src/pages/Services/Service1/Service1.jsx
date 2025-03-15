import ServiceSidebar from "../../../components/ServiceSidebar/ServiceSidebar";
import "./Service1.scss";

import ServiceContent from "../../../components/ServiceContent/ServiceContent";

import banner_img from "../../../assets/images/banner_img.jpg";

import {
  gatewayServices,
  delhiTaxi,
  taxiFees,
} from "../../../assets/serviceData";
import ServiceCard from "../../../components/ServiceCard/ServiceCard";

import SEO from "../../../components/SEO";

const Service1 = () => {
  return (
    <div className="service1">
      <SEO
        title="Driver"
        description="Book a taxi in Delhi for local and outstation travel. Affordable rates, professional drivers, and 24/7 service. Choose from sedans, SUVs, and tempo travelers."
        url={window.location.href}
        keywords="Delhi taxi service, local cabs in Delhi, outstation taxi from Delhi, best taxi service in Delhi, airport taxi Delhi"
      />

      <div className="service-banner" data-aos="fade-up">
        <img src={banner_img} alt={banner_img} loading="lazy" />

        <div className="service-banner-desc">
          <h1>Delhi Taxi Service</h1>
        </div>
      </div>

      <div className="service-container">
        <div className="service-container-top">
          <div className="service-left">
            <ServiceContent
              taxicontent={delhiTaxi}
              gatewayServices={gatewayServices}
            />
          </div>
          <div className="service-sidebar">
            <ServiceSidebar />
          </div>
        </div>
      </div>

      <div className="service-content-bottom">
        <h3>Delhi Local/Outstation Taxi Fare</h3>
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

export default Service1;
