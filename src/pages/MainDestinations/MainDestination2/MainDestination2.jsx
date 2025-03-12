import "./MainDestination2.scss";
import ServiceBanner from "../../../components/ServiceBanner/ServiceBanner";
import ServiceSidebar from "../../../components/ServiceSidebar/ServiceSidebar";
import { MdArrowRightAlt } from "react-icons/md";
import ServiceCard from "../../../components/ServiceCard/ServiceCard";
import { taxiFees } from "../../../assets/serviceData";
import { Link } from "react-router-dom";
import { upDestinations } from "../../../assets/mainDestination";
import { upImgs } from "../../../assets/ImgsData/mainDestinationImgs";

import SEO from "../../../components/SEO"

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const MainDestination2 = () => {
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
        title="Explore Uttar Pradesh – Land of Heritage & Spirituality"
        description="Discover Uttar Pradesh, home to the Taj Mahal, Varanasi’s ghats, Ayodhya’s sacred temples, and Bodh Gaya’s spiritual essence. Experience history and divinity!"
        url={window.location.href}
        keywords="Uttar Pradesh tourism, Taj Mahal, Varanasi ghats, Ayodhya temples, Bodh Gaya, Indian heritage, spiritual travel"
      />

      <div className="mainDestination-banner">
        <ServiceBanner destinationImg={upImgs} />
      </div>
      <div className="mainDestination-container">
        <div className="mainDestination-container-top">
          <div className="mainDestination-container-left" data-aos="fade-up">
            <h1>{upDestinations.title} </h1>
            <p className="sm-desc">{upDestinations.desc} </p>

            <div className="mainDestination-cards">
              <h2 className="card-desc">{upDestinations.sm}</h2>

              {upDestinations.destinationsCards.map((item, index) => (
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
              <h3>{upDestinations.cabTip}</h3>

              <ul>
                {upDestinations.tips.map((item, index) => (
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

export default MainDestination2;
