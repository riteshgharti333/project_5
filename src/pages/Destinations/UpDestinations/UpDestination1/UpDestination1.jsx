import "./UpDestination1.scss";
import ServiceBanner from "../../../../components/ServiceBanner/ServiceBanner";
import ServiceSidebar from "../../../../components/ServiceSidebar/ServiceSidebar";
import ServiceCard from "../../../../components/ServiceCard/ServiceCard";
import { taxiFees } from "../../../../assets/serviceData";

import { agraContent } from "../../../../assets/destinationData2";

import { upImgs } from "../../../../assets/ImgsData/mainDestinationImgs";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import SEO from "../../../../components/SEO";
import { useLocation } from "react-router-dom";

const UpDestination1 = () => {
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
    <div className="destination1">
      <SEO
        title="Agra Tourism – Explore the Iconic Taj Mahal & Mughal Heritage"
        description="Visit Agra, home to the world-famous Taj Mahal, Agra Fort, and Fatehpur Sikri. Experience the rich Mughal history and stunning architecture of this iconic city."
        url={fullUrl}
        keywords="Agra tourism, Taj Mahal, Agra Fort, Fatehpur Sikri, Mughal architecture, historical places in India"
      />

      <div className="destination-banner">
        <ServiceBanner destinationImg={upImgs} />
      </div>

      <div className="destination-container">
        <div className="destination-container-top">
          <div className="destination-container-top-left">
            <div className="destination-content">
              <div className="destination-content-item" data-aos="fade-up">
                <h1>{agraContent.contentItem1.title}</h1>
                <p>{agraContent.contentItem1.desc}</p>
              </div>

              <div className="destination-content-item" data-aos="fade-up">
                <h3>{agraContent.contentItem2.title}</h3>
                <p>{agraContent.contentItem2.desc}</p>
              </div>

              <div className="destination-content-item" data-aos="fade-up">
                <h3>{agraContent.contentItem3.title}</h3>

                <div
                  className="destination-content-item-cards"
                  data-aos="fade-up"
                >
                  {agraContent.contentItem3.contentCards.map((item, index) => (
                    <div className="destination-content-item-card" key={index}>
                      <img src={item.img} alt={item.title} loading="lazy" />

                      <div className="destination-conten-desc">
                        <h3>{item.title}</h3>
                        {item.desc.map((desc, index) => (
                          <p key={index}>{desc}</p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="destination-content-item" data-aos="fade-up">
                <h3>{agraContent.contentItem4.title}</h3>
                <ul>
                  {agraContent.contentItem4.contentLists.map((item, index) => (
                    <li key={index}>
                      <span>{item.title} : </span>
                      {item.desc}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="destination-content-item" data-aos="fade-up">
                <h3>{agraContent.contentItem5.title}</h3>
                <ul>
                  {agraContent.contentItem5.contentLists.map((item, index) => (
                    <li key={index}>
                      <span>{item.title} : </span>
                      {item.desc}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="destination-content-item" data-aos="fade-up">
                <h3>{agraContent.contentItem6.title}</h3>
                <ul>
                  {agraContent.contentItem6.contentLists.map((item, index) => (
                    <li key={index}>{item.title}</li>
                  ))}
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

export default UpDestination1;
