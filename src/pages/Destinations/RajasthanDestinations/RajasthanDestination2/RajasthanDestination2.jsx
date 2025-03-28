import "./RajasthanDestination2.scss";
import ServiceBanner from "../../../../components/ServiceBanner/ServiceBanner";
import ServiceSidebar from "../../../../components/ServiceSidebar/ServiceSidebar";
import ServiceCard from "../../../../components/ServiceCard/ServiceCard";
import { taxiFees } from "../../../../assets/serviceData";

import { ranthamboreContent } from "../../../../assets/destinationData";

import { rjImgs } from "../../../../assets/ImgsData/mainDestinationImgs";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import SEO from "../../../../components/SEO";
import { useLocation } from "react-router-dom";

const RajasthanDestination2 = () => {
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
        title="Ranthambore National Park Safari | Best Wildlife Experience"
        description="Explore Ranthambore National Park, home to Bengal tigers, leopards, and diverse wildlife. Book your jungle safari for an unforgettable adventure!"
        url={baseUrl}
        keywords="Ranthambore safari, Ranthambore National Park, tiger safari India, wildlife tour, best jungle safari, Ranthambore travel guide"
      />

      <div className="destination-banner">
        <ServiceBanner destinationImg={rjImgs} />
      </div>

      <div className="destination-container">
        <div className="destination-container-top">
          <div className="destination-container-top-left">
            <div className="destination-content">
              <div className="destination-content-item" data-aos="fade-up">
                <h1>{ranthamboreContent.contentItem1.title}</h1>
                <p>{ranthamboreContent.contentItem1.desc}</p>
              </div>

              <div className="destination-content-item" data-aos="fade-up">
                <h3>{ranthamboreContent.contentItem2.title}</h3>
                <p>{ranthamboreContent.contentItem2.desc}</p>
              </div>

              <div className="destination-content-item" data-aos="fade-up">
                <h3>{ranthamboreContent.contentItem3.title}</h3>

                <div
                  className="destination-content-item-cards"
                  data-aos="fade-up"
                >
                  {ranthamboreContent.contentItem3.contentCards.map(
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
                <h3>{ranthamboreContent.contentItem4.title}</h3>
                <ul>
                  {ranthamboreContent.contentItem4.contentLists.map(
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
                <h3>{ranthamboreContent.contentItem5.title}</h3>
                <ul>
                  {ranthamboreContent.contentItem5.contentLists.map(
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
                <h3>{ranthamboreContent.contentItem6.title}</h3>
                <ul>
                  {ranthamboreContent.contentItem6.contentLists.map(
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
                <h3>{ranthamboreContent.contentItem7.title}</h3>
                <ul>
                  {ranthamboreContent.contentItem7.contentLists.map(
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
                <h3>{ranthamboreContent.contentItem8.title}</h3>
                <ul>
                  {ranthamboreContent.contentItem8.contentLists.map(
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

export default RajasthanDestination2;
