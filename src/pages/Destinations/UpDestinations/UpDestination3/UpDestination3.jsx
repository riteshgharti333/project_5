import "./UpDestination3.scss";
import ServiceBanner from "../../../../components/ServiceBanner/ServiceBanner";
import ServiceSidebar from "../../../../components/ServiceSidebar/ServiceSidebar";
import ServiceCard from "../../../../components/ServiceCard/ServiceCard";
import { taxiFees } from "../../../../assets/serviceData";

import { ayodhyaContent } from "../../../../assets/destinationData2";

import { upImgs } from "../../../../assets/ImgsData/mainDestinationImgs";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import SEO from "../../../../components/SEO";

const UpDestination3 = () => {
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
        title="Ayodhya Tourism – Explore the Birthplace of Lord Rama"
        description="Visit Ayodhya, the sacred birthplace of Lord Rama. Explore Ram Janmabhoomi, Hanuman Garhi, Kanak Bhawan, and other historical temples in this holy city."
        url={window.location.href}
        keywords="Ayodhya tourism, Ram Janmabhoomi, Lord Rama birthplace, Ayodhya temples, Hanuman Garhi, religious places in India"
      />

      <div className="destination-banner">
        <ServiceBanner destinationImg={upImgs} />
      </div>

      <div className="destination-container">
        <div className="destination-container-top">
          <div className="destination-container-top-left">
            <div className="destination-content">
              <div className="destination-content-item" data-aos="fade-up">
                <h1>{ayodhyaContent.contentItem1.title}</h1>
                <p>{ayodhyaContent.contentItem1.desc}</p>
              </div>

              <div className="destination-content-item" data-aos="fade-up">
                <h3>{ayodhyaContent.contentItem2.title}</h3>
                <p>{ayodhyaContent.contentItem2.desc}</p>
              </div>

              <div className="destination-content-item" data-aos="fade-up">
                <h3>{ayodhyaContent.contentItem3.title}</h3>

                <div
                  className="destination-content-item-cards"
                  data-aos="fade-up"
                >
                  {ayodhyaContent.contentItem3.contentCards.map(
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
                <h3>{ayodhyaContent.contentItem4.title}</h3>
                <ul>
                  {ayodhyaContent.contentItem4.contentLists.map(
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
                <h3>{ayodhyaContent.contentItem5.title}</h3>
                <ul>
                  {ayodhyaContent.contentItem5.contentLists.map(
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
                <h3>{ayodhyaContent.contentItem6.title}</h3>
                <ul>
                  {ayodhyaContent.contentItem6.contentLists.map(
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

export default UpDestination3;
