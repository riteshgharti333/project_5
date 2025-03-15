import "./MainDestination1.scss";
import ServiceBanner from "../../../components/ServiceBanner/ServiceBanner";
import ServiceSidebar from "../../../components/ServiceSidebar/ServiceSidebar";
import { MdArrowRightAlt } from "react-icons/md";
import ServiceCard from "../../../components/ServiceCard/ServiceCard";
import { taxiFees } from "../../../assets/serviceData";
import { Link } from "react-router-dom";
import { rjDestinations } from "../../../assets/mainDestination";
import { rjImgs } from "../../../assets/ImgsData/mainDestinationImgs";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import SEO from "../../../components/SEO";

const MainDestination1 = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <div className="mainDestination1">
      <SEO
        title="Explore Rajasthan: Jaipur, Udaipur, Jaisalmer & Pushkar Tours"
        description="Discover Rajasthan's top destinations - Jaipur, Ranthambore, Udaipur, Jaisalmer & Pushkar. Explore royal palaces, forts, lakes, and cultural heritage. Plan your trip today!"
        url={window.location.href}
        keywords="Rajasthan tourism, Jaipur tour, Udaipur sightseeing, Jaisalmer desert safari, Pushkar travel, best places in Rajasthan, heritage tours Rajasthan"
      />

      <div className="mainDestination-banner">
        <ServiceBanner destinationImg={rjImgs} />
      </div>
      <div className="mainDestination-container">
        <div className="mainDestination-container-top">
          <div className="mainDestination-container-left" data-aos="fade-up">
            <h1>{rjDestinations.title} </h1>
            <p className="sm-desc">{rjDestinations.desc} </p>

            <div className="mainDestination-cards">
              <h2 className="card-desc">{rjDestinations.sm}</h2>

              {rjDestinations.destinationsCards.map((item, index) => (
                <div className="mainDestination-card" key={index}>
                  <div className="mainDestination-card-left">
                    <img src={item.img} alt={item.title} loading="lazy" />
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
              <h3>{rjDestinations.cabTip}</h3>

              <ul>
                {rjDestinations.tips.map((item, index) => (
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
          <h2>Our Taxi Services</h2>
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

export default MainDestination1;
