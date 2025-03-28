import "./MainDestination3.scss";
import ServiceBanner from "../../../components/ServiceBanner/ServiceBanner";
import ServiceSidebar from "../../../components/ServiceSidebar/ServiceSidebar";
import { MdArrowRightAlt } from "react-icons/md";
import ServiceCard from "../../../components/ServiceCard/ServiceCard";
import { taxiFees } from "../../../assets/serviceData";
import { Link, useLocation } from "react-router-dom";
import { pbDestinations } from "../../../assets/mainDestination";
import { pbImgs } from "../../../assets/ImgsData/mainDestinationImgs";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

import SEO from "../../../components/SEO";

const MainDestination3 = () => {
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
    <div className="mainDestination">
      <SEO
        title="Punjab Tourism – Explore Chandigarh & Amritsar's Iconic Landmarks"
        description="Discover Punjab's rich heritage with a visit to Chandigarh, the modern city with serene lakes and gardens, and Amritsar, home to the Golden Temple, Wagah Border, and Jallianwala Bagh."
        url={fullUrl}
        keywords="Punjab tourism, Chandigarh attractions, Amritsar Golden Temple, Wagah Border, Jallianwala Bagh, best places in Punjab, Punjab travel guide"
      />

      <div className="mainDestination-banner">
        <ServiceBanner destinationImg={pbImgs} />
      </div>
      <div className="mainDestination-container">
        <div className="mainDestination-container-top">
          <div className="mainDestination-container-left" data-aos="fade-up">
            <h1>{pbDestinations.title} </h1>
            <p className="sm-desc">{pbDestinations.desc} </p>

            <div className="mainDestination-cards">
              <h2 className="card-desc">{pbDestinations.sm}</h2>

              {pbDestinations.destinationsCards.map((item, index) => (
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
              <h3>{pbDestinations.cabTip}</h3>

              <ul>
                {pbDestinations.tips.map((item, index) => (
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

export default MainDestination3;
