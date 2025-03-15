import ServiceSidebar from "../../../components/ServiceSidebar/ServiceSidebar";
import "./Service8.scss";

import ServiceContent from "../../../components/ServiceContent/ServiceContent";

import banner_img from "../../../assets/images/banner_img.jpg";
import { gatewayServices, jkTaxi, taxiFees } from "../../../assets/serviceData";
import ServiceCard from "../../../components/ServiceCard/ServiceCard";
import SEO from "../../../components/SEO";

const Service8 = () => {
  return (
    <div className="service8">
      <SEO
        title="Jammu & Kashmir Taxi Service | Book Reliable Cabs for Travel"
        description="Book a taxi in Jammu & Kashmir for local sightseeing, airport transfers, and outstation trips. Affordable fares, experienced drivers, and 24/7 service."
        url={window.location.href}
        keywords="Jammu taxi service, Kashmir cabs, Srinagar taxi, Jammu to Vaishno Devi cab, Gulmarg car rental, best taxi in Jammu & Kashmir, outstation cabs Jammu"
      />

      <div className="service-banner" data-aos="fade-up">
        <img src={banner_img} alt={banner_img} loading="lazy" />

        <div className="service-banner-desc">
          <h1>Jammu & Kashmir Taxi Service</h1>
        </div>
      </div>

      <div className="service-container">
        <div className="service-container-top">
          <div className="service-left">
            <ServiceContent
              taxicontent={jkTaxi}
              gatewayServices={gatewayServices}
            />
          </div>
          <div className="service-sidebar">
            <ServiceSidebar />
          </div>
        </div>
      </div>

      <div className="service-content-bottom">
        <h3>Jammu Kashmir Local/Outstation Taxi Fare</h3>
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

export default Service8;
