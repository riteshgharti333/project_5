import "./UkDestination2.scss";
import ServiceBanner from "../../../../components/ServiceBanner/ServiceBanner";
import ServiceSidebar from "../../../../components/ServiceSidebar/ServiceSidebar";
import ServiceCard from "../../../../components/ServiceCard/ServiceCard";
import { taxiFees } from "../../../../assets/serviceData";

import { rishikeshHaridwarContent } from "../../../../assets/destinationData5";
import { ukImgs } from "../../../../assets/ImgsData/mainDestinationImgs";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import SEO from "../../../../components/SEO";
import { useLocation } from "react-router-dom";

const UkDestination2 = () => {
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
        title="Rishikesh & Haridwar Tourism – Yoga, Ganga Aarti & Adventure"
        description="Visit Rishikesh and Haridwar for spiritual peace, yoga retreats, and the famous Ganga Aarti. Explore adventure sports in Rishikesh like river rafting and bungee jumping."
        url={fullUrl}
        keywords="Rishikesh tourism, Haridwar travel, Ganga Aarti Haridwar, yoga in Rishikesh, river rafting Rishikesh, adventure sports in Uttarakhand, spiritual places in India, best ashrams in Rishikesh"
      />

      <div className="destination-banner">
        <ServiceBanner destinationImg={ukImgs} />
      </div>

      <div className="destination-container">
        <div className="destination-container-top">
          <div className="destination-container-top-left">
            <div className="destination-content">
              <div className="destination-content-item" data-aos="fade-up">
                <h1>{rishikeshHaridwarContent.contentItem1.title}</h1>
                <p>{rishikeshHaridwarContent.contentItem1.desc}</p>
              </div>

              <div className="destination-content-item" data-aos="fade-up">
                <h3>{rishikeshHaridwarContent.contentItem2.title}</h3>
                <p>{rishikeshHaridwarContent.contentItem2.desc}</p>
              </div>

              <div className="destination-content-item" data-aos="fade-up">
                <h3>{rishikeshHaridwarContent.contentItem3.title}</h3>

                <div
                  className="destination-content-item-cards"
                  data-aos="fade-up"
                >
                  {rishikeshHaridwarContent.contentItem3.contentCards.map(
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
                    ),
                  )}
                </div>
              </div>

              <div className="destination-content-item" data-aos="fade-up">
                <h3>{rishikeshHaridwarContent.contentItem4.title}</h3>
                <ul>
                  {rishikeshHaridwarContent.contentItem4.contentLists.map(
                    (item, index) => (
                      <li key={index}>
                        <span>{item.title} : </span>
                        {item.desc}
                      </li>
                    ),
                  )}
                </ul>
              </div>
              <div className="destination-content-item" data-aos="fade-up">
                <h3>{rishikeshHaridwarContent.contentItem5.title}</h3>
                <ul>
                  {rishikeshHaridwarContent.contentItem5.contentLists.map(
                    (item, index) => (
                      <li key={index}>
                        <span>{item.title} : </span>
                        {item.desc}
                      </li>
                    ),
                  )}
                </ul>
              </div>

              <div className="destination-content-item" data-aos="fade-up">
                <h3>{rishikeshHaridwarContent.contentItem6.title}</h3>
                <ul>
                  {rishikeshHaridwarContent.contentItem6.contentLists.map(
                    (item, index) => (
                      <li key={index}>
                        <span>{item.title} : </span>
                        {item.desc}
                      </li>
                    ),
                  )}
                </ul>
              </div>

              <div className="destination-content-item" data-aos="fade-up">
                <h3>{rishikeshHaridwarContent.contentItem7.title}</h3>
                <ul>
                  {rishikeshHaridwarContent.contentItem7.contentLists.map(
                    (item, index) => (
                      <li key={index}>
                        <span>{item.title} : </span>
                        {item.desc}
                      </li>
                    ),
                  )}
                </ul>
              </div>

              <div className="destination-content-item" data-aos="fade-up">
                <h3>{rishikeshHaridwarContent.contentItem8.title}</h3>
                <ul>
                  {rishikeshHaridwarContent.contentItem8.contentLists.map(
                    (item, index) => (
                      <li key={index}>
                        <span>{item.title} : </span>
                        {item.desc}
                      </li>
                    ),
                  )}
                </ul>
              </div>

              <div className="destination-content-item" data-aos="fade-up">
                <h3>{rishikeshHaridwarContent.contentItem9.title}</h3>
                <ul>
                  {rishikeshHaridwarContent.contentItem9.contentLists.map(
                    (item, index) => (
                      <li key={index}>{item.title}</li>
                    ),
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

export default UkDestination2;
