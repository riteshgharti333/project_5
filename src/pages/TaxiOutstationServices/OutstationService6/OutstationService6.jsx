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
import SEO from "../../../components/SEO";

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
      <SEO
        title="Delhi to Uttar Pradesh Taxi Service | One-Way & Round Trip Cabs"
        description="Book a taxi from Delhi to Uttar Pradesh for a hassle-free and affordable journey. Reliable one-way & round-trip cab services with professional drivers."
        url={window.location.href}
        keywords="Delhi to UP taxi, Delhi to Agra cab, one-way taxi Delhi to Varanasi, round-trip cab Delhi to Ayodhya, best taxi Delhi to Uttar Pradesh"
      />

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
          <h3>{delhitoup.taxiFare}</h3>
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
