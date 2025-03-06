import ServiceBanner from "../../../components/ServiceBanner/ServiceBanner";
import ServiceSidebar from "../../../components/ServiceSidebar/ServiceSidebar";
import "./Service1.scss";

import ServiceCard from "../../../components/ServiceCard/ServiceCard";
import ServiceContent from "../../../components/ServiceContent/ServiceContent";

import { delhiTaxi, delhiTaxiFare } from "../../../assets/serviceData";

const Service1 = () => {
  return (
    <div className="service">
      <div className="service-banner">
        <ServiceBanner />
      </div>

      <div className="service-container">
        <div className="service-container-top">
          <div className="service-content">
            <ServiceContent delhiTaxi={delhiTaxi} />
          </div>
          <div className="service-sidebar">
            <ServiceSidebar />
          </div>
        </div>
      </div>

      <div className="service-content-bottom">
        {delhiTaxiFare.map((item, index) => (
          <k>
            <h1>{item.taxiFare}</h1>

            <div className="service-cards">
              {item.taxiFees.map((item, index) => (
                <ServiceCard item={item} key={index} />
              ))}
            </div>
          </k>
        ))}
      </div>
    </div>
  );
};

export default Service1;
