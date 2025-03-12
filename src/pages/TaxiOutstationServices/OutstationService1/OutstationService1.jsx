import "./OutstationService1.scss";

import ServiceBanner from "../../../components/ServiceBanner/ServiceBanner";

import { rjImgs } from "../../../assets/ImgsData/mainDestinationImgs";
import ServiceSidebar from "../../../components/ServiceSidebar/ServiceSidebar";
import { taxiFees } from "../../../assets/serviceData";
import ServiceCard from "../../../components/ServiceCard/ServiceCard";
import { delhitorj } from "../../../assets/outstationData";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

import SEO from "../../../components/SEO";

const OutstationService1 = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <div className="outstationService">
      <SEO
        title="Delhi to Rajasthan Taxi Service | One-Way & Round Trip Cabs"
        description="Book a reliable taxi service from Delhi to Rajasthan for a comfortable journey. Choose from one-way, round-trip, and luxury car rentals at affordable prices."
        url={window.location.href}
        keywords="Delhi to Rajasthan taxi, one-way cab to Rajasthan, round-trip taxi from Delhi, car rental Delhi Rajasthan, best taxi service, Delhi Jaipur cab, Rajasthan road trip"
      />

      <div className="outstationService-banner">
        <ServiceBanner destinationImg={rjImgs} />
      </div>
      <div className="outstationService-container">
        <div className="outstationService-container-top">
          <div className="outstationService-left" data-aos="fade-right">
            <div className="outstationService-content">
              <div className="outstationService-content-item">
                <h1>{delhitorj.contentItem1.title}</h1>
                {delhitorj.contentItem1.desc.map((item, index) => (
                  <p key={index}>{item}</p>
                ))}
              </div>

              <div className="outstationService-content-item">
                <h3>{delhitorj.contentItem2.title}</h3>
                <ul>
                  {delhitorj.contentItem2.desc.map((item, index) => (
                    <li key={index}>
                      {" "}
                      <span>{item.title} : </span> {item.desc}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="outstationService-content-item">
                <h3>{delhitorj.contentItem3.title}</h3>
                <ul>
                  {delhitorj.contentItem3.desc.map((item, index) => (
                    <li key={index}>
                      {" "}
                      <span>{item.title} : </span> {item.desc}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="outstationService-content-item">
                <h3>{delhitorj.contentItem4.title}</h3>

                {delhitorj.contentItem4.desc.map((item, index) => (
                  <p key={index}>{item}</p>
                ))}
              </div>

              <div className="outstationService-content-item">
                <h3>{delhitorj.contentItem5.title}</h3>

                {delhitorj.contentItem5.desc.map((item, index) => (
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
          <h1>{delhitorj.taxiFare}</h1>
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

export default OutstationService1;
