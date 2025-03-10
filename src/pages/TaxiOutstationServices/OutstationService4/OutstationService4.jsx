import "./OutstationService4.scss";

import ServiceBanner from "../../../components/ServiceBanner/ServiceBanner";

import { pbImgs } from "../../../assets/ImgsData/mainDestinationImgs";
import ServiceSidebar from "../../../components/ServiceSidebar/ServiceSidebar";
import { taxiFees } from "../../../assets/serviceData";
import ServiceCard from "../../../components/ServiceCard/ServiceCard";
import { delhitopb } from "../../../assets/outstationData";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const OutstationService4 = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <div className="outstationService">
      <div className="outstationService-banner">
        <ServiceBanner destinationImg={pbImgs} />
      </div>
      <div className="outstationService-container">
        <div className="outstationService-container-top">
          <div className="outstationService-left" data-aos="fade-right">
            <div className="outstationService-content">
              <div className="outstationService-content-item">
                <h1>{delhitopb.contentItem1.title}</h1>
                {delhitopb.contentItem1.desc.map((item, index) => (
                  <p key={index}>{item}</p>
                ))}
              </div>

              <div className="outstationService-content-item">
                <h3>{delhitopb.contentItem2.title}</h3>
                {delhitopb.contentItem2.desc.map((item, index) => (
                  <p key={index}>{item}</p>
                ))}
              </div>

              <div className="outstationService-content-item">
                <h3>{delhitopb.contentItem3.title}</h3>
                <p>{delhitopb.contentItem3.smdesc}</p>
                <ul>
                  {delhitopb.contentItem3.desc.map((item, index) => (
                    <li key={index}>
                      {" "}
                      <span>{item.title} : </span> {item.desc}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="outstationService-content-item">
                <h3>{delhitopb.contentItem4.title}</h3>

                {delhitopb.contentItem4.desc.map((item, index) => (
                  <p key={index}>{item}</p>
                ))}
              </div>

              <div className="outstationService-content-item">
                <h3>{delhitopb.contentItem5.title}</h3>

                {delhitopb.contentItem5.desc.map((item, index) => (
                  <p key={index}>{item}</p>
                ))}
              </div>
            </div>
          </div>
          <div className="outstationService-right">
            <ServiceSidebar />
          </div>
        </div>
        <div className="outstationService-container-bottom">
          <h1>{delhitopb.taxiFare}</h1>
          <div className="outstationService-cards">
            {taxiFees.map((item, index) => (
              <ServiceCard item={item} key={index} />
            ))}
          </div>
        </div>
      </div>
      <div className="outstationService-lg-sidebar">
        <ServiceSidebar fade="fade-up" />
      </div>
    </div>
  );
};

export default OutstationService4;
