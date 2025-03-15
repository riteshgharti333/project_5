import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Rental.scss";

import { ourTaxies } from "../../assets/data";
import { Link } from "react-router-dom";

const Rental = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <div className="rental">
      <div className="rental-top" data-aos="fade-up">
        <h2>Car Rental Service: Hassle-Free Rides, Every Mile Smiles</h2>
        <p>
          Exploring North India is an adventure filled with rich history,
          stunning landscapes, and vibrant cultures. To make your journey smooth
          and hassle-free, Global India Tour offers the perfect car rental
          service. Whether you're planning a road trip through the Himalayas or
          visiting iconic cities like <strong>Delhi </strong>
          <strong>Jaipur</strong>, or <strong>Agra</strong>, we provide
          reliable, comfortable, and budget-friendly travel solutions.
        </p>
        <p>
          With a commitment to safety, convenience, and customer satisfaction,
          Global India Tour ensures that your North India travel experience is
          unforgettable. Choose us for a seamless and enjoyable ride as you
          discover the beauty of this incredible region!
        </p>
      </div>

      <div className="ourTaxi-cards" data-aos="fade-up">
        {ourTaxies.map((item, index) => (
          <Link to={item.link} key={index}>
            <div className="ourTaxi-card">
              <img src={item.img} alt={item.name} loading="lazy" />
              <button>
                <div className="btn-wrap">
                  <span>{item.name}</span>
                  <span>View Detail</span>
                </div>
              </button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Rental;
