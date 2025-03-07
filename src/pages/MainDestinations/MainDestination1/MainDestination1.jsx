import "./MainDestination1.scss";
import ServiceBanner from "../../../components/ServiceBanner/ServiceBanner";
import ServiceSidebar from "../../../components/ServiceSidebar/ServiceSidebar";
import { MdArrowRightAlt } from "react-icons/md";
import ServiceCard from "../../../components/ServiceCard/ServiceCard";
import { taxiFees } from "../../../assets/serviceData";
import { Link } from "react-router-dom";

const MainDestination1 = () => {
  return (
    <div className="mainDestination1">
      <div className="mainDestination-banner">
        <ServiceBanner />
      </div>
      <div className="mainDestination-container">
        <div className="mainDestination-container-top">
          <div className="mainDestination-container-left">
            <h1>Rajasthan </h1>
            <p className="sm-desc">Explore the Land of Royals</p>

            <div className="mainDestination-cards">
              <h2 className="card-desc">Rajasthan Popluar Destinations</h2>

              <div className="mainDestination-card">
                <div className="mainDestination-card-left">
                  <img
                    src="https://s7ap1.scene7.com/is/image/incredibleindia/1-sam-sand-dunes-jaisalmer-rajasthan-hero?qlt=82&ts=1726659973648"
                    alt=""
                  />
                </div>
                <div className="mainDestination-card-right">
                  <h2>Jaipur</h2>
                  <p>
                    Discover forts like Amber and Nahargarh, markets, and
                    palaces.
                  </p>
                  <Link to="/jaipur-destination" className="read-more-btn">
                    <button>
                      Read More <MdArrowRightAlt className="right-arrow" />
                    </button>
                  </Link>
                </div>
              </div>

              <hr />

              <div className="mainDestination-card">
                <div className="mainDestination-card-left">
                  <img
                    src="https://s7ap1.scene7.com/is/image/incredibleindia/1-sam-sand-dunes-jaisalmer-rajasthan-hero?qlt=82&ts=1726659973648"
                    alt=""
                  />
                </div>
                <div className="mainDestination-card-right">
                  <h2>Jaipur</h2>
                  <p>
                    Discover forts like Amber and Nahargarh, markets, and
                    palaces.
                  </p>
                  <Link to="/jaipur-destination" className="read-more-btn">
                    <button>
                      Read More <MdArrowRightAlt className="right-arrow" />
                    </button>
                  </Link>
                </div>
              </div>
              <hr />
              <div className="mainDestination-card">
                <div className="mainDestination-card-left">
                  <img
                    src="https://s7ap1.scene7.com/is/image/incredibleindia/1-sam-sand-dunes-jaisalmer-rajasthan-hero?qlt=82&ts=1726659973648"
                    alt=""
                  />
                </div>
                <div className="mainDestination-card-right">
                  <h2>Jaipur</h2>
                  <p>
                    Discover forts like Amber and Nahargarh, markets, and
                    palaces.
                  </p>
                  <Link to="/jaipur-destination" className="read-more-btn">
                    <button>
                      Read More <MdArrowRightAlt className="right-arrow" />
                    </button>
                  </Link>
                </div>
              </div>
              <hr />
            </div>

            <div className="tips">
              <h1>Cab Service Tips</h1>

              <ul>
                <li>
                  Book a cab for hassle-free intercity travel (e.g., Jaipur to
                  Ranthambore).{" "}
                </li>
                <li>
                  Opt for SUVs or Tempo Travellers for group desert trips in
                  Jaisalmer.{" "}
                </li>
              </ul>
            </div>
          </div>
          <div className="mainDestination-container-right">
            <ServiceSidebar />
          </div>
        </div>
        <div className="cab-services">
          <h1>Our Cab Services</h1>
          <div className="cab-services-cards">
            {taxiFees.map((item, index) => (
              <ServiceCard item={item} key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainDestination1;
