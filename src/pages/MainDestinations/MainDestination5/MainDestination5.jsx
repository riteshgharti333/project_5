import "./MainDestination5.scss";
import ServiceBanner from "../../../components/ServiceBanner/ServiceBanner";
import ServiceSidebar from "../../../components/ServiceSidebar/ServiceSidebar";
import { MdArrowRightAlt } from "react-icons/md";
import ServiceCard from "../../../components/ServiceCard/ServiceCard";
import { taxiFees } from "../../../assets/serviceData";
import { Link } from "react-router-dom";
import { ukDestinations } from "../../../assets/mainDestination";
import { ukImgs } from "../../../assets/ImgsData/mainDestinationImgs";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import SEO from "../../../components/SEO";

const MainDestination5 = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <div className="mainDestination">
      <SEO
        title="Explore Uttarakhand – Nainital, Rishikesh, Haridwar, Kedarnath & Badrinath"
        description="Discover the beauty of Uttarakhand! Visit Nainital's lakes, experience yoga in Rishikesh, explore spirituality in Haridwar, and seek blessings at Kedarnath & Badrinath temples."
        url={window.location.href}
        keywords="Uttarakhand tourism, best places in Uttarakhand, Nainital travel guide, Rishikesh yoga, Haridwar Ganga Aarti, Kedarnath temple, Badrinath temple, Char Dham Yatra, pilgrimage in India"
      />

      <div className="mainDestination-banner">
        <ServiceBanner destinationImg={ukImgs} />
      </div>
      <div className="mainDestination-container">
        <div className="mainDestination-container-top">
          <div className="mainDestination-container-left" data-aos="fade-up">
          <h1>{ukDestinations.title} </h1>
            <p className="sm-desc">{ukDestinations.desc} </p>

            <div className="mainDestination-cards">
              <h2 className="card-desc">{ukDestinations.sm}</h2>

              {ukDestinations.destinationsCards.map((item, index) => (
                <div className="mainDestination-card" key={index}>
                  <div className="mainDestination-card-left">
                    <img src={item.img} alt={item.title} />
                  </div>
                  <div className="mainDestination-card-right">
                    <h2>{item.title}</h2>
                    <p>{item.desc}</p>
                    <Link to={`${item.link}`} className="read-more-btn">
                      <button>
                        Read More <MdArrowRightAlt className="right-arrow" />
                      </button>
                    </Link>
                  </div>
                </div>
              ))}

              <hr />
            </div>

            <div className="tips">
              <h3>{ukDestinations.cabTip}</h3>

              <ul>
                {ukDestinations.tips.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mainDestination-container-right">
            <ServiceSidebar fade="fade-up" />
          </div>
        </div>
        <div className="cab-services">
          <h1>Our Taxi Services</h1>
          <div className="cab-services-cards">
            {taxiFees.map((item, index) => (
              <ServiceCard item={item} key={index} />
            ))}
          </div>
        </div>
      </div>
      <div className="destinations-lg-sidebar">
        <ServiceSidebar fade="fade-up" />
      </div>
    </div>
  );
};

export default MainDestination5;
