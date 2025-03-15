import "./UkDestination3.scss";
import ServiceBanner from "../../../../components/ServiceBanner/ServiceBanner";
import ServiceSidebar from "../../../../components/ServiceSidebar/ServiceSidebar";
import ServiceCard from "../../../../components/ServiceCard/ServiceCard";
import { taxiFees } from "../../../../assets/serviceData";

import { kedarnathBadrinathContent } from "../../../../assets/destinationData5";
import { ukImgs } from "../../../../assets/ImgsData/mainDestinationImgs";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import SEO from "../../../../components/SEO";

const UkDestination3 = () => {
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
        title="Kedarnath & Badrinath Tourism – Sacred Pilgrimage in Uttarakhand"
        description="Plan your pilgrimage to Kedarnath & Badrinath, two of the most sacred Char Dham sites in Uttarakhand. Experience divine blessings, breathtaking Himalayan views, and spiritual peace."
        url={window.location.href}
        keywords="Kedarnath temple, Badrinath yatra, Char Dham pilgrimage, Uttarakhand spiritual tourism, best time to visit Kedarnath, how to reach Badrinath, trekking to Kedarnath, Hindu pilgrimage sites"
      />

      <div className="destination-banner">
        <ServiceBanner destinationImg={ukImgs} />
      </div>

      <div className="destination-container">
        <div className="destination-container-top">
          <div className="destination-container-top-left">
            <div className="destination-content">
              <div className="destination-content-item" data-aos="fade-up">
                <h1>{kedarnathBadrinathContent.contentItem1.title}</h1>
                <p>{kedarnathBadrinathContent.contentItem1.desc}</p>
              </div>

              <div className="destination-content-item" data-aos="fade-up">
                <h3>{kedarnathBadrinathContent.contentItem2.title}</h3>
                <p>{kedarnathBadrinathContent.contentItem2.desc}</p>
              </div>

              <div className="destination-content-item" data-aos="fade-up">
                <h3>{kedarnathBadrinathContent.contentItem3.title}</h3>

                <div
                  className="destination-content-item-cards"
                  data-aos="fade-up"
                >
                  {kedarnathBadrinathContent.contentItem3.contentCards.map(
                    (item, index) => (
                      <div
                        className="destination-content-item-card"
                        key={index}
                      >
                        <img src={item.img} alt={item.title}  loading="lazy"/>

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
                <h3>{kedarnathBadrinathContent.contentItem4.title}</h3>
                <ul>
                  {kedarnathBadrinathContent.contentItem4.contentLists.map(
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
                <h3>{kedarnathBadrinathContent.contentItem5.title}</h3>
                <ul>
                  {kedarnathBadrinathContent.contentItem5.contentLists.map(
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
                <h3>{kedarnathBadrinathContent.contentItem6.title}</h3>
                <ul>
                  {kedarnathBadrinathContent.contentItem6.contentLists.map(
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
                <h3>{kedarnathBadrinathContent.contentItem7.title}</h3>
                <ul>
                  {kedarnathBadrinathContent.contentItem7.contentLists.map(
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
                <h3>{kedarnathBadrinathContent.contentItem8.title}</h3>
                <ul>
                  {kedarnathBadrinathContent.contentItem8.contentLists.map(
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
                <h3>{kedarnathBadrinathContent.contentItem9.title}</h3>
                <ul>
                  {kedarnathBadrinathContent.contentItem9.contentLists.map(
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

export default UkDestination3;
