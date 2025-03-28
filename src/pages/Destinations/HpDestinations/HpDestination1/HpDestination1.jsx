import "./HpDestination1.scss";
import ServiceBanner from "../../../../components/ServiceBanner/ServiceBanner";
import ServiceSidebar from "../../../../components/ServiceSidebar/ServiceSidebar";
import ServiceCard from "../../../../components/ServiceCard/ServiceCard";
import { taxiFees } from "../../../../assets/serviceData";

import { shimlaContent } from "../../../../assets/destinationData4";
import { hpImgs } from "../../../../assets/ImgsData/mainDestinationImgs";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import SEO from "../../../../components/SEO";
import { useLocation } from "react-router-dom";

const HpDestination1 = () => {
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
    <div className="destination">
      <SEO
        title="Discover Shimla – The Queen of Hills | Best Travel Guide"
        description="Explore Shimla, the Queen of Hills! Enjoy scenic landscapes, colonial charm, adventure activities, and the famous Mall Road. Plan your perfect Shimla trip today!"
        url={fullUrl}
        keywords="Shimla tourism, best places in Shimla, Shimla travel guide, things to do in Shimla, Shimla sightseeing, Mall Road Shimla, Kufri, Shimla adventure activities"
      />

      <div className="destination-banner">
        <ServiceBanner destinationImg={hpImgs} />
      </div>

      <div className="destination-container">
        <div className="destination-container-top">
          <div className="destination-container-top-left">
            <div className="destination-content">
              <div className="destination-content-item" data-aos="fade-up">
                <h1>{shimlaContent.contentItem1.title}</h1>
                <p>{shimlaContent.contentItem1.desc}</p>
              </div>

              <div className="destination-content-item" data-aos="fade-up">
                <h3>{shimlaContent.contentItem2.title}</h3>
                <p>{shimlaContent.contentItem2.desc}</p>
              </div>

              <div className="destination-content-item" data-aos="fade-up">
                <h3>{shimlaContent.contentItem3.title}</h3>

                <div
                  className="destination-content-item-cards"
                  data-aos="fade-up"
                >
                  {shimlaContent.contentItem3.contentCards.map(
                    (item, index) => (
                      <div
                        className="destination-content-item-card"
                        key={index}
                      >
                        <img src={item.img} alt={item.title} loading="lazy" />

                        <div className="destination-conten-desc">
                          <h3>{item.title}</h3>
                          {item.desc.map((desc, index) => (
                            <p key={index}>{desc}</p>
                          ))}
                        </div>
                      </div>
                    )
                  )}
                </div>
              </div>

              <div className="destination-content-item" data-aos="fade-up">
                <h3>{shimlaContent.contentItem4.title}</h3>
                <ul>
                  {shimlaContent.contentItem4.contentLists.map(
                    (item, index) => (
                      <li key={index}>
                        <span>{item.title} : </span>
                        {item.desc}
                      </li>
                    )
                  )}
                </ul>
              </div>
              <div className="destination-content-item" data-aos="fade-up">
                <h3>{shimlaContent.contentItem5.title}</h3>
                <ul>
                  {shimlaContent.contentItem5.contentLists.map(
                    (item, index) => (
                      <li key={index}>
                        <span>{item.title} : </span>
                        {item.desc}
                      </li>
                    )
                  )}
                </ul>
              </div>

              <div className="destination-content-item" data-aos="fade-up">
                <h3>{shimlaContent.contentItem6.title}</h3>
                <ul>
                  {shimlaContent.contentItem6.contentLists.map(
                    (item, index) => (
                      <li key={index}>
                        <span>{item.title} : </span>
                        {item.desc}
                      </li>
                    )
                  )}
                </ul>
              </div>

              <div className="destination-content-item" data-aos="fade-up">
                <h3>{shimlaContent.contentItem7.title}</h3>
                <ul>
                  {shimlaContent.contentItem7.contentLists.map(
                    (item, index) => (
                      <li key={index}>
                        <span>{item.title} : </span>
                        {item.desc}
                      </li>
                    )
                  )}
                </ul>
              </div>

              <div className="destination-content-item" data-aos="fade-up">
                <h3>{shimlaContent.contentItem8.title}</h3>
                <ul>
                  {shimlaContent.contentItem8.contentLists.map(
                    (item, index) => (
                      <li key={index}>
                        <span>{item.title} : </span>
                        {item.desc}
                      </li>
                    )
                  )}
                </ul>
              </div>

              <div className="destination-content-item" data-aos="fade-up">
                <h3>{shimlaContent.contentItem9.title}</h3>
                <ul>
                  {shimlaContent.contentItem9.contentLists.map(
                    (item, index) => (
                      <li key={index}>{item.title}</li>
                    )
                  )}
                </ul>
              </div>
            </div>
          </div>
          <div className="destination-container-top-right">
            <ServiceSidebar fade="fade-up" />
          </div>
        </div>
        <div className="destination-container-bottom">
          <h3>Our Taxi Services</h3>
          <div className="destination-cards">
            {taxiFees.map((item, index) => (
              <ServiceCard item={item} key={index} />
            ))}
          </div>
        </div>
      </div>
      <div className="destination-lg-sidebar">
        <ServiceSidebar fade="fade-up" />
      </div>
    </div>
  );
};

export default HpDestination1;
