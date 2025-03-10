import ServiceBanner from "../../../components/ServiceBanner/ServiceBanner";
import ServiceSidebar from "../../../components/ServiceSidebar/ServiceSidebar";
import "./Service3.scss";

import ServiceContent from "../../../components/ServiceContent/ServiceContent";

import { gatewayServices, hpTaxi, taxiFees } from "../../../assets/serviceData";
import ServiceCard from "../../../components/ServiceCard/ServiceCard";
import { ourTaxies } from "../../../assets/data";

const Service3 = () => {
  return (
    <div className="service3">
      <div className="service-banner">
      <ServiceBanner destinationImg={ourTaxies}/>
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
        <h1>Himachal Local/Outstation Taxi Fare</h1>
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
