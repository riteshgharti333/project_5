import "./OutstationService3.scss";

import ServiceBanner from "../../../components/ServiceBanner/ServiceBanner";

import { ukImgs } from "../../../assets/ImgsData/mainDestinationImgs";
import ServiceSidebar from "../../../components/ServiceSidebar/ServiceSidebar";
import { taxiFees } from "../../../assets/serviceData";
import ServiceCard from "../../../components/ServiceCard/ServiceCard";
import { delhitouk } from "../../../assets/outstationData";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import SEO from "../../../components/SEO";
import { useLocation } from "react-router-dom";

const OutstationService3 = () => {
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
        title="Delhi to Uttarakhand Taxi Service | One-Way & Round Trip Cabs"
        description="Book a reliable taxi from Delhi to Uttarakhand for a hassle-free journey. Enjoy one-way, round-trip, and luxury car rentals at affordable prices with 24/7 service."
        url={fullUrl}
        keywords="Delhi to Uttarakhand taxi, one-way cab to Uttarakhand, round-trip taxi Delhi, car rental Delhi to Nainital, Delhi to Haridwar cab, best taxi service"
      />

      <div className="outstationService-banner">
        <ServiceBanner destinationImg={ukImgs} />
      </div>
      <div className="outstationService-container">
        <div className="outstationService-container-top">
          <div className="outstationService-left" data-aos="fade-right">
            <div className="outstationService-content">
              <div className="outstationService-content-item">
                <h1>{delhitouk.contentItem1.title}</h1>
                {delhitouk.contentItem1.desc.map((item, index) => (
                  <p key={index}>{item}</p>
                ))}
              </div>

              <div className="outstationService-content-item">
                <h3>{delhitouk.contentItem2.title}</h3>

                {delhitouk.contentItem2.desc.map((item, index) => (
                  <p key={index}>{item}</p>
                ))}

                <ul>
                  {delhitouk.contentItem2.list.map((item, index) => (
                    <li key={index}>
                      <span>{item.title} : </span> {item.desc}
                    </li>
                  ))}
                </ul>

                <p>{delhitouk.contentItem2.smdesc}</p>
              </div>

              <div className="outstationService-content-item">
                <h3>{delhitouk.contentItem3.title}</h3>
                <ul>
                  {delhitouk.contentItem3.desc.map((item, index) => (
                    <li key={index}>
                      <span>{item.title} : </span> {item.desc}
                    </li>
                  ))}
                </ul>
                <p>{delhitouk.contentItem3.lastdesc}</p>
              </div>

              <div className="outstationService-content-item">
                <h3>{delhitouk.contentItem4.title}</h3>

                {delhitouk.contentItem4.desc.map((item, index) => (
                  <p key={index}>{item}</p>
                ))}
              </div>

              <div className="outstationService-content-item">
                <h3>{delhitouk.contentItem5.title}</h3>

                {delhitouk.contentItem5.desc.map((item, index) => (
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
          <h3>{delhitouk.taxiFare}</h3>
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

export default OutstationService3;
