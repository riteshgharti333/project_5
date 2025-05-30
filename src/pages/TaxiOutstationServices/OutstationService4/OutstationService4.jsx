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
import SEO from "../../../components/SEO";
import { useLocation } from "react-router-dom";

const OutstationService4 = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const location = useLocation();
  const baseUrl =
    import.meta.env.VITE_BASE_URL || "https://globalindiatravels.com";
  const fullUrl = `${baseUrl}${location.pathname}`;

  return (
    <div className="outstationService">
      <SEO
        title="Delhi to Punjab Taxi Service | One-Way & Round Trip Cabs"
        description="Book a taxi from Delhi to Punjab for a comfortable journey. Enjoy one-way, round-trip, and luxury car rentals at the best prices with 24/7 service."
        url={baseUrl}
        keywords="Delhi to Punjab taxi, one-way cab Delhi to Amritsar, round-trip taxi Delhi to Chandigarh, best taxi Delhi to Ludhiana, Delhi to Punjab car rental"
      />

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
          <h3>{delhitopb.taxiFare}</h3>
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
