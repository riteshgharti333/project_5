import ServiceBanner from "../../../components/ServiceBanner/ServiceBanner";
import ServiceSidebar from "../../../components/ServiceSidebar/ServiceSidebar";
import "./Service6.scss";

import ServiceContent from "../../../components/ServiceContent/ServiceContent";
import { ourTaxies } from "../../../assets/data";

import {
  gatewayServices,
  taxiFees,
  pbTaxi,
} from "../../../assets/serviceData";
import ServiceCard from "../../../components/ServiceCard/ServiceCard";

const Service6 = () => {
  return (
    <div className="service6">
      <div className="service-banner">
      <ServiceBanner destinationImg={ourTaxies}/>
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
        <h1>Punjab Local/Outstation Taxi Fare</h1>
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
