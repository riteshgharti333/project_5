import "./OutstationService2.scss";

import ServiceBanner from "../../../components/ServiceBanner/ServiceBanner";

import { hpImgs } from "../../../assets/ImgsData/mainDestinationImgs";
import ServiceSidebar from "../../../components/ServiceSidebar/ServiceSidebar";
import { taxiFees } from "../../../assets/serviceData";
import ServiceCard from "../../../components/ServiceCard/ServiceCard";
import { delhitohp } from "../../../assets/outstationData";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import SEO from "../../../components/SEO";
import { useLocation } from "react-router-dom";

const OutstationService2 = () => {
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
        title="Delhi to Himachal Pradesh Taxi Service | One-Way & Round Trip Cabs"
        description="Book a hassle-free taxi from Delhi to Himachal Pradesh for a comfortable and safe journey. Enjoy one-way, round-trip, and luxury car rentals at the best prices."
        url={baseUrl}
        keywords="Delhi to Himachal taxi, one-way cab to Himachal, round-trip taxi Delhi, car rental Delhi to Shimla, best taxi service, Delhi Manali cab, Himachal road trip"
      />

      <div className="outstationService-banner">
        <ServiceBanner destinationImg={hpImgs} />
      </div>
      <div className="outstationService-container">
        <div className="outstationService-container-top">
          <div className="outstationService-left" data-aos="fade-right">
            <div className="outstationService-content">
              <div className="outstationService-content-item">
                <h1>{delhitohp.contentItem1.title}</h1>
                {delhitohp.contentItem1.desc.map((item, index) => (
                  <p key={index}>{item}</p>
                ))}
              </div>

              <div className="outstationService-content-item">
                <h3>{delhitohp.contentItem2.title}</h3>

                {delhitohp.contentItem2.desc.map((item, index) => (
                  <p key={index}>{item}</p>
                ))}
              </div>

              <div className="outstationService-content-item">
                <h3>{delhitohp.contentItem3.title}</h3>
                <p>{delhitohp.contentItem3.smdesc}</p>
                <ul>
                  {delhitohp.contentItem3.desc.map((item, index) => (
                    <li key={index}>
                      {" "}
                      <span>{item.title} : </span> {item.desc}
                    </li>
                  ))}
                </ul>

                <p>{delhitohp.contentItem3.lastdesc}</p>
              </div>

              <div className="outstationService-content-item">
                <h3>{delhitohp.contentItem4.title}</h3>

                {delhitohp.contentItem4.desc.map((item, index) => (
                  <p key={index}>{item}</p>
                ))}
              </div>

              <div className="outstationService-content-item">
                <h3>{delhitohp.contentItem5.title}</h3>

                {delhitohp.contentItem5.desc.map((item, index) => (
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
          <h3>{delhitohp.taxiFare}</h3>
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

export default OutstationService2;
