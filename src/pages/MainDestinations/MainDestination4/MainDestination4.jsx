import "./MainDestination4.scss";
import ServiceBanner from "../../../components/ServiceBanner/ServiceBanner";
import ServiceSidebar from "../../../components/ServiceSidebar/ServiceSidebar";
import { MdArrowRightAlt } from "react-icons/md";
import ServiceCard from "../../../components/ServiceCard/ServiceCard";
import { taxiFees } from "../../../assets/serviceData";
import { Link, useLocation } from "react-router-dom";
import { hpDestinations } from "../../../assets/mainDestination";
import { hpImgs } from "../../../assets/ImgsData/mainDestinationImgs";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import SEO from "../../../components/SEO";

const MainDestination4 = () => {
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
        title="Explore Himachal Pradesh – Shimla, Manali & Dharamshala | Ultimate Travel Guide"
        description="Plan your trip to Himachal Pradesh! Discover the scenic beauty of Shimla, the adventure hub of Manali, and the spiritual retreat of Dharamshala. Perfect for nature lovers and adventure seekers."
        url={fullUrl}
        keywords="Himachal Pradesh tourism, Shimla travel, Manali adventure, Dharamshala spiritual, best places in Himachal, Himachal Pradesh sightseeing, things to do in Himachal"
      />

      <div className="mainDestination-banner">
        <ServiceBanner destinationImg={hpImgs} />
      </div>
      <div className="mainDestination-container">
        <div className="mainDestination-container-top">
          <div className="mainDestination-container-left" data-aos="fade-up">
            <h1>{hpDestinations.title} </h1>
            <p className="sm-desc">{hpDestinations.desc} </p>

            <div className="mainDestination-cards">
              <h2 className="card-desc">{hpDestinations.sm}</h2>

              {hpDestinations.destinationsCards.map((item, index) => (
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
              <h3>{hpDestinations.cabTip}</h3>

              <ul>
                {hpDestinations.tips.map((item, index) => (
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

export default MainDestination4;
