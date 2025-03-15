import "./About.scss";

import { useEffect } from "react";
import { useState } from "react";
import CountUp from "react-countup";
import { useRef } from "react";

import AOS from "aos";
import "aos/dist/aos.css";
import BlogCards from "../../components/BlogCards/BlogCards";
import { aboutCount, services } from "../../assets/data";

import banner_img from "../../assets/images/banner_img.jpg";
import SEO from "../../components/SEO";

import vecation_img from "../../assets/images/vecation_result.webp";

const About = () => {
  const [startCount, setStartCount] = useState(false);
  const aboutContentRef = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStartCount(true);
        }
      },
      { threshold: 0.7 }
    );

    if (aboutContentRef.current) {
      observer.observe(aboutContentRef.current);
    }

    return () => {
      if (aboutContentRef.current) {
        observer.unobserve(aboutContentRef.current);
      }
    };
  }, []);

  return (
    <div className="about">
      <SEO
        title="About Us | Reliable Taxi & Car Rental Services You Can Trust"
        description="Learn about our trusted taxi and car rental services. We provide safe, affordable, and comfortable travel experiences with 24/7 customer support. Your journey, our priority!"
        url={window.location.href}
        keywords="about us, taxi service, car rental, best transportation, trusted travel, affordable rides, professional drivers, 24/7 taxi service, reliable taxi company"
      />

      <div className="about-banner" data-aos="fade-up">
        <img src={banner_img} alt={banner_img}  loading="lazy"/>

        <div className="about-banner-desc">
          <h1>About Us</h1>
        </div>
      </div>

      <div className="about-content1" data-aos="fade-up">
        <div className="about-content1-top">
          <h2>Why Choose Us</h2>
        </div>

        <div className="about-content1-cards" data-aos="fade-up">
          {services.slice(0, 3).map((item, index) => (
            <div className="about-card" key={index} data-aos="fade-right">
              <div className="about-card-top">
                {item.icon && <item.icon className="about-card-icon" />}
              </div>

              <div className="about-card-bottom">
                <h2>{item.title}</h2>
                <div className="about-card-bottom-desc">
                  <h3>{item.smTitle}</h3>
                  <p>{item.desc}</p>
                </div>

                <div className="about-card-bottom-option">
                  {item.servicesOption.map((option, index) => (
                    <span key={index} data-aos="zoom-in">
                      {option}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="about-content2">
        <div className="about-content2-top">
          <div className="about-content2-top-left" data-aos="fade-right">
            <h2>About Global India Travel</h2>

            <p>
              Global India Travel Cab Service, located in the bustling heart of
              Karol Bagh, New Delhi, offers exceptional car rental services
              tailored to meet your travel needs. Whether you're planning a
              local trip or an outstation journey, our fleet of well-maintained
              vehicles ensures a comfortable and safe ride. Our extensive range
              of vehicles includes sedans, SUVs, and luxury cars, catering to
              diverse customer preferences. Each car in our fleet is equipped
              with modern amenities, ensuring a pleasant experience. Whether
              you're traveling solo or with family, Global India Travel Service has the
              perfect vehicle for you. We are dedicated to offering exceptional
              car rental, hotel booking, air ticketing, and comprehensive tour
              packages, ensuring a seamless and unforgettable travel experience.
              With our extensive range of services and customer-centric
              approach, we cater to all your travel needs with the utmost
              professionalism and care.
            </p>

            <p>
              We are dedicated to offering exceptional car rental, hotel
              booking, air ticketing, and comprehensive tour packages, ensuring
              a seamless and unforgettable travel experience. With our extensive
              range of services and customer-centric approach, we cater to all
              your travel needs with the utmost professionalism and care.
            </p>
          </div>

          <div className="about-content2-top-right" data-aos="fade-left">
            <img src={vecation_img} alt={vecation_img}  loading="lazy"/>
          </div>
        </div>

        <div className="about-content2-bottom" data-aos="fade-up">
          <p>
            At Global India Travel Taxi Service, we provide a fleet of
            well-maintained vehicles, including sedans, SUVs, and luxury cars,
            ensuring a comfortable and reliable ride. Finding the perfect
            accommodation is crucial for a memorable trip. We offer hotel
            booking services that cater to all budgets and preferences, from
            luxurious five-star hotels to cozy budget accommodations.
          </p>
          <p>
            Planning your travel has never been easier with our air ticketing
            services. We provide hassle-free booking for both domestic and
            international flights, ensuring that you get the best prices and
            convenient flight schedules.
          </p>
          <p>
            Discover the beauty and diversity of North India with our
            meticulously crafted tour packages. From the majestic Himalayas and
            serene hill stations to vibrant cities and historical landmarks, our
            tour packages are designed to offer a comprehensive and enriching
            travel experience.
          </p>
          <p>
            At Global India Travel Taxi Service, we are passionate about making
            your travel dreams come true. Explore the wonders of North India
            with us and create unforgettable memories. Let us be your trusted
            travel partner and guide you through the enchanting landscapes and
            vibrant cultures of this incredible region.
          </p>
        </div>
      </div>

      <div className="about-content3" ref={aboutContentRef} data-aos="fade-up">
        {aboutCount.map((item, index) => (
          <div className="about-content3-item" data-aos="zoom-in" key={index}>
            <h3>
              <CountUp
                start={startCount ? 0 : null}
                end={item.no}
                duration={2.5}
              />
            </h3>
            <p>{item.title}</p>
          </div>
        ))}
      </div>

      <div className="about-content4">
        <BlogCards />
      </div>
    </div>
  );
};

export default About;
