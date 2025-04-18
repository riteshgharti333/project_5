import "./HpDestination3.scss";
import ServiceBanner from "../../../../components/ServiceBanner/ServiceBanner";
import ServiceSidebar from "../../../../components/ServiceSidebar/ServiceSidebar";
import ServiceCard from "../../../../components/ServiceCard/ServiceCard";
import { taxiFees } from "../../../../assets/serviceData";
import { dharamshalaContent } from "../../../../assets/destinationData4";
import { hpImgs } from "../../../../assets/ImgsData/mainDestinationImgs";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import SEO from "../../../../components/SEO";
import { useLocation } from "react-router-dom";

const HpDestination3 = () => {
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
        title="Visit Dharamshala – The Land of Dalai Lama & Scenic Mountains"
        description="Explore Dharamshala – A serene hill station with Tibetan culture, monasteries, McLeod Ganj, and breathtaking mountain views. Plan your Dharamshala trip today!"
        url={fullUrl}
        keywords="Dharamshala tourism, things to do in Dharamshala, Dharamshala travel guide, McLeod Ganj, Tibetan culture, monasteries in Dharamshala, Himachal Pradesh tourism"
      />

      <div className="destination-banner">
        <ServiceBanner destinationImg={hpImgs} />
      </div>

      <div className="destination-container">
        <div className="destination-container-top">
          <div className="destination-container-top-left">
            <div className="destination-content">
              <div className="destination-content-item" data-aos="fade-up">
                <h1>{dharamshalaContent.contentItem1.title}</h1>
                <p>{dharamshalaContent.contentItem1.desc}</p>
              </div>

              <div className="destination-content-item" data-aos="fade-up">
                <h3>{dharamshalaContent.contentItem2.title}</h3>
                <p>{dharamshalaContent.contentItem2.desc}</p>
              </div>

              <div className="destination-content-item" data-aos="fade-up">
                <h3>{dharamshalaContent.contentItem3.title}</h3>

                <div
                  className="destination-content-item-cards"
                  data-aos="fade-up"
                >
                  {dharamshalaContent.contentItem3.contentCards.map(
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
                <h3>{dharamshalaContent.contentItem4.title}</h3>
                <ul>
                  {dharamshalaContent.contentItem4.contentLists.map(
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
                <h3>{dharamshalaContent.contentItem5.title}</h3>
                <ul>
                  {dharamshalaContent.contentItem5.contentLists.map(
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
                <h3>{dharamshalaContent.contentItem6.title}</h3>
                <ul>
                  {dharamshalaContent.contentItem6.contentLists.map(
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
                <h3>{dharamshalaContent.contentItem7.title}</h3>
                <ul>
                  {dharamshalaContent.contentItem7.contentLists.map(
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
                <h3>{dharamshalaContent.contentItem8.title}</h3>
                <ul>
                  {dharamshalaContent.contentItem8.contentLists.map(
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
                <h3>{dharamshalaContent.contentItem9.title}</h3>
                <ul>
                  {dharamshalaContent.contentItem9.contentLists.map(
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

export default HpDestination3;
