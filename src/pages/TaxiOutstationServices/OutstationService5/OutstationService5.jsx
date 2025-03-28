import "./OutstationService5.scss";

import ServiceBanner from "../../../components/ServiceBanner/ServiceBanner";

import { jkImgs } from "../../../assets/ImgsData/mainDestinationImgs";
import ServiceSidebar from "../../../components/ServiceSidebar/ServiceSidebar";
import { taxiFees } from "../../../assets/serviceData";
import ServiceCard from "../../../components/ServiceCard/ServiceCard";
import { delhitojk } from "../../../assets/outstationData";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import SEO from "../../../components/SEO";
import { useLocation } from "react-router-dom";

const OutstationService5 = () => {
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
        title="Delhi to Jammu & Kashmir Taxi Service | One-Way & Round Trip Cabs"
        description="Book a taxi from Delhi to Jammu & Kashmir for a smooth and comfortable ride. Affordable one-way & round-trip taxi services with professional drivers."
        url={fullUrl}
        keywords="Delhi to Jammu taxi, Delhi to Srinagar cab, one-way taxi Delhi to Kashmir, round-trip cab Delhi to Vaishno Devi, best taxi Delhi to Jammu & Kashmir"
      />

      <div className="outstationService-banner">
        <ServiceBanner destinationImg={jkImgs} />
      </div>
      <div className="outstationService-container">
        <div className="outstationService-container-top">
          <div className="outstationService-left" data-aos="fade-right">
            <div className="outstationService-content">
              <div className="outstationService-content-item">
                <h1>{delhitojk.contentItem1.title}</h1>
                {delhitojk.contentItem1.desc.map((item, index) => (
                  <p key={index}>{item}</p>
                ))}
              </div>

              <div className="outstationService-content-item">
                <h3>{delhitojk.contentItem2.title}</h3>
                {delhitojk.contentItem2.desc.map((item, index) => (
                  <p key={index}>{item}</p>
                ))}
              </div>

              <div className="outstationService-content-item">
                <h3>{delhitojk.contentItem3.title}</h3>
                <ul>
                  {delhitojk.contentItem3.desc.map((item, index) => (
                    <li key={index}>
                      {" "}
                      <span>{item.title} : </span> {item.desc}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="outstationService-content-item">
                <h3>{delhitojk.contentItem4.title}</h3>

                {delhitojk.contentItem4.desc.map((item, index) => (
                  <p key={index}>{item}</p>
                ))}
              </div>

              <div className="outstationService-content-item">
                <h3>{delhitojk.contentItem5.title}</h3>

                {delhitojk.contentItem5.desc.map((item, index) => (
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
          <h3>{delhitojk.taxiFare}</h3>
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

export default OutstationService5;
