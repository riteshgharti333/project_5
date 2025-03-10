import "./Tempo.scss";

import ServiceBanner from "../../components/ServiceBanner/ServiceBanner";

import { upImgs } from "../../assets/ImgsData/mainDestinationImgs";
import ServiceSidebar from "../../components/ServiceSidebar/ServiceSidebar";
import { taxiFees } from "../../assets/serviceData";
import ServiceCard from "../../components/ServiceCard/ServiceCard";
import { tempo } from "../../assets/outstationData";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Tempo = () => {
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
                <h1>{tempo.contentItem1.title}</h1>
                {tempo.contentItem1.desc.map((item, index) => (
                  <p key={index}>{item}</p>
                ))}
              </div>

              <div className="outstationService-content-item">
                <h3>{tempo.contentItem2.title}</h3>
                {tempo.contentItem2.desc.map((item, index) => (
                  <p key={index}>{item}</p>
                ))}
              </div>

              <div className="outstationService-content-item">
                <h3>{tempo.contentItem3.title}</h3>

                {tempo.contentItem3.desc.map((item, index) => (
                  <p key={index}>{item}</p>
                ))}
              </div>

              <div className="outstationService-content-item">
                <h3>{tempo.contentItem4.title}</h3>

                {tempo.contentItem4.desc.map((item, index) => (
                  <p key={index}>{item}</p>
                ))}

                <ul>
                  {tempo.contentItem4.list.map((item, index) => (
                    <li key={index}>
                      <span>{item.title} : </span>
                      {item.desc}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="outstationService-content-item">
                <h3>{tempo.contentItem5.title}</h3>
                <p>{tempo.contentItem5.smdesc}</p>

                <ul>
                  {tempo.contentItem5.desc.map((item, index) => (
                    <li key={index}>
                      <span>{item.title} : </span>
                      {item.desc}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="outstationService-content-item">
                <h3>{tempo.contentItem6.title}</h3>

                {tempo.contentItem6.desc.map((item, index) => (
                  <p key={index}>{item}</p>
                ))}
              </div>

              <div className="outstationService-content-item">
                <h3>{tempo.contentItem7.title}</h3>

                {tempo.contentItem7.desc.map((item, index) => (
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
          <h1>{tempo.taxiFare}</h1>
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

export default Tempo;
