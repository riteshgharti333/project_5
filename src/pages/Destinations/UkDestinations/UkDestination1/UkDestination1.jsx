import "./UkDestination1.scss";
import ServiceBanner from "../../../../components/ServiceBanner/ServiceBanner";
import ServiceSidebar from "../../../../components/ServiceSidebar/ServiceSidebar";
import ServiceCard from "../../../../components/ServiceCard/ServiceCard";
import { taxiFees } from "../../../../assets/serviceData";

import { nainitalContent } from "../../../../assets/destinationData5";
import { ukImgs } from "../../../../assets/ImgsData/mainDestinationImgs";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import SEO from "../../../../components/SEO";

const UkDestination1 = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <div className="destination">
      <SEO
        title="Explore Nainital – The City of Lakes | Best Places to Visit"
        description="Plan your trip to Nainital, the City of Lakes. Enjoy boating at Naini Lake, visit Snow View Point, and explore the beauty of this Himalayan hill station."
        url={window.location.href}
        keywords="Nainital tourism, best places in Nainital, Naini Lake boating, Snow View Point, Nainital hill station, Uttarakhand travel, Himalayan destinations, Mall Road shopping, Nainital trip guide"
      />

      <div className="destination-banner">
        <ServiceBanner destinationImg={ukImgs} />
      </div>

      <div className="destination-container">
        <div className="destination-container-top">
          <div className="destination-container-top-left">
            <div className="destination-content">
              <div className="destination-content-item" data-aos="fade-up">
                <h1>{nainitalContent.contentItem1.title}</h1>
                <p>{nainitalContent.contentItem1.desc}</p>
              </div>

              <div className="destination-content-item" data-aos="fade-up">
                <h3>{nainitalContent.contentItem2.title}</h3>
                <p>{nainitalContent.contentItem2.desc}</p>
              </div>

              <div className="destination-content-item" data-aos="fade-up">
                <h3>{nainitalContent.contentItem3.title}</h3>

                <div
                  className="destination-content-item-cards"
                  data-aos="fade-up"
                >
                  {nainitalContent.contentItem3.contentCards.map(
                    (item, index) => (
                      <div
                        className="destination-content-item-card"
                        key={index}
                      >
                        <img src={item.img} alt={item.title} />

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
                <h3>{nainitalContent.contentItem4.title}</h3>
                <ul>
                  {nainitalContent.contentItem4.contentLists.map(
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
                <h3>{nainitalContent.contentItem5.title}</h3>
                <ul>
                  {nainitalContent.contentItem5.contentLists.map(
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
                <h3>{nainitalContent.contentItem6.title}</h3>
                <ul>
                  {nainitalContent.contentItem6.contentLists.map(
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
                <h3>{nainitalContent.contentItem7.title}</h3>
                <ul>
                  {nainitalContent.contentItem7.contentLists.map(
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
                <h3>{nainitalContent.contentItem8.title}</h3>
                <ul>
                  {nainitalContent.contentItem8.contentLists.map(
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
                <h3>{nainitalContent.contentItem9.title}</h3>
                <ul>
                  {nainitalContent.contentItem9.contentLists.map(
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
          <h1>Our Taxi Services</h1>
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

export default UkDestination1;
