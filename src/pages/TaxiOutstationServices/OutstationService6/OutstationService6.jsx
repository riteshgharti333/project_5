import "./OutstationService6.scss";

import ServiceBanner from "../../../components/ServiceBanner/ServiceBanner";

import { upImgs } from "../../../assets/ImgsData/mainDestinationImgs";
import ServiceSidebar from "../../../components/ServiceSidebar/ServiceSidebar";
import { taxiFees } from "../../../assets/serviceData";
import ServiceCard from "../../../components/ServiceCard/ServiceCard";
import { delhitoup } from "../../../assets/outstationData";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const OutstationService6 = () => {
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
        <ServiceBanner destinationImg={upImgs} />
      </div>
      <div className="outstationService-container">
        <div className="outstationService-container-top">
          <div className="outstationService-left" data-aos="fade-right">
            <div className="outstationService-content">
              <div className="outstationService-content-item">
                <h1>{delhitoup.contentItem1.title}</h1>
                {delhitoup.contentItem1.desc.map((item, index) => (
                  <p key={index}>{item}</p>
                ))}
              </div>

              <div className="outstationService-content-item">
                <h3>{delhitoup.contentItem2.title}</h3>
                {delhitoup.contentItem2.desc.map((item, index) => (
                  <p key={index}>{item}</p>
                ))}
              </div>

              <div className="outstationService-content-item">
                <h3>{delhitoup.contentItem3.title}</h3>
                <p>{delhitoup.contentItem3.smdesc}</p>
                <ul>
                  {delhitoup.contentItem3.desc.map((item, index) => (
                    <li key={index}>
                      {" "}
                      <span>{item.title} : </span> {item.desc}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="outstationService-content-item">
                <h3>{delhitoup.contentItem4.title}</h3>

                {delhitoup.contentItem4.desc.map((item, index) => (
                  <p key={index}>{item}</p>
                ))}
              </div>

              <div className="outstationService-content-item">
                <h3>{delhitoup.contentItem5.title}</h3>

                {delhitoup.contentItem5.desc.map((item, index) => (
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
          <h1>{delhitoup.taxiFare}</h1>
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

export default OutstationService6;
