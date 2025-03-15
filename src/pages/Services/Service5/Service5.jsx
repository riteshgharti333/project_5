import ServiceSidebar from "../../../components/ServiceSidebar/ServiceSidebar";
import "./Service5.scss";

import ServiceContent from "../../../components/ServiceContent/ServiceContent";

import banner_img from "../../../assets/images/banner_img.jpg";

import { gatewayServices, upTaxi, taxiFees } from "../../../assets/serviceData";
import ServiceCard from "../../../components/ServiceCard/ServiceCard";
import SEO from "../../../components/SEO";

const Service5 = () => {
  return (
    <div className="service5">
      <SEO
        title="Uttar Pradesh Taxi Service | Best Cabs for Local & Outstation Rides"
        description="Book a taxi in Uttar Pradesh for local sightseeing, religious tours, and outstation travel. Affordable fares, professional drivers, and 24/7 service."
        url={window.location.href}
        keywords="Uttar Pradesh taxi service, Agra cab, Varanasi taxi, Ayodhya cabs, outstation taxi UP, best taxi service in Uttar Pradesh"
      />

      <div className="service-banner" data-aos="fade-up">
        <img src={banner_img} alt={banner_img} loading="lazy" />

        <div className="service-banner-desc">
          <h1>Uttar Pradesh Taxi Service</h1>
        </div>
      </div>

      <div className="service-container">
        <div className="service-container-top">
          <div className="service-left">
            <ServiceContent
              taxicontent={upTaxi}
              gatewayServices={gatewayServices}
            />
          </div>
          <div className="service-sidebar">
            <ServiceSidebar />
          </div>
        </div>
      </div>

      <div className="service-content-bottom">
        <h3>Uttar Pradesh Local/Outstation Taxi Fare</h3>
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

export default Service5;
