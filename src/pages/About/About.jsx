import "./About.scss";

import like from "../../assets/images/like.svg";
import { useEffect } from "react";
import { useState } from "react";
import CountUp from "react-countup";
import { useRef } from "react";

const About = () => {
  const [startCount, setStartCount] = useState(false);
  const aboutContentRef = useRef(null);
  useEffect(() => {
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
      <div className="about-banner">
        <img
          src="https://images.unsplash.com/photo-1612438214708-f428a707dd4e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />

        <div className="about-banner-desc">
          <h1>Looking for Joy</h1>
          <p>Your trusted trip companion</p>
        </div>
      </div>

      <div className="about-content1">
        <div className="about-content1-top">
          <h1>Why Choose Us</h1>
          <p>These popular destinations have a lot to offer</p>
        </div>

        <div className="about-content1-cards">
          <div className="about-content1-card">
            <div class="content">
              <img src={like} alt="" />

              <div className="content-desc">
                <h1>Easy & Quick Booking</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Asperiores, eos.
                </p>
              </div>
            </div>
          </div>
          <div className="about-content1-card">
            <div class="content">
              <img src={like} alt="" />

              <div className="content-desc">
                <h1>Easy & Quick Booking</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Asperiores, eos.
                </p>
              </div>
            </div>
          </div>{" "}
          <div className="about-content1-card">
            <div class="content">
              <img src={like} alt="" />

              <div className="content-desc">
                <h1>Easy & Quick Booking</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Asperiores, eos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="about-content2">
        <div className="about-content2-top">
          <div className="about-content2-top-left">
            <h1>About Global India Traval</h1>

            <p>
              Bringing you a modern, comfortable, and connected travel
              experience is one of our highest priorities and that's why we
              continuously try to improve your experience when you book anything
              with us.
            </p>

            <p>
              We really appreciate and welcome any of suggstions you might have
              for us, so feel free drop us line anytime.
            </p>

            <p>
              Ghum India Ghum is a leading tour operator come travel agent in
              Delhi and We deals in tour packages for throughout India, Starting
              from Golden Triangle tour (Delhi,Agra & Jaipur) to Royal Rajasthan
              tour to Taj Mahal Day tour to Kashi Spiritual tour to Buddhists
              Circuit tour to Kerala and Goa tour in Short we are one stop tour
              operator for all India tour packages. Apart from India we are also
              taking care of International tour packages of Nepal, Bhutan, Sri
              Lanka, Dubai, Malaysia, Singapore, Europe, USA, etc packages. Ghum
              India Ghum started its journey from 2014 and within 3-4 yrs, it
              established itself as one of the best travel agents of North
              India. Book your tour with us and experience the excellence
              because we truly follow our tag line which is "Committed to
              Excellence".
            </p>
          </div>

          <div className="about-content2-top-right">
            <img
              src="https://www.ghumindiaghum.com/img/about/about-2.png"
              alt=""
            />
          </div>
        </div>

        <div className="about-content2-bottom">
          <p>
            Our team is made up of dynamic individuals who are thoroughly
            experienced in the travel and tourism industry, full of new ideas,
            enthusiasm and deep love for the countries we represent : India. We
            are uniquely positioned to provide first class service to our
            clients around the India & Abroad. Our teams provide a high level of
            trust, agility and expertise to every engagements. We are specialize
            in adding value to our clients by partnering with them through our
            personalized supports. We are uniquely positioned to provide first
            class service to our clients around the world.
          </p>
          <p>
            The Best part about our company is we believe in quality of service
            and guest positive feedback is only our real saving and strength.
            Our team works round the clock to make each and every tour
            successful. We don't believe in keeping huge margin on a tour
            package, we believe in keeping low margin and providing good
            services, So that guest can recommend our company to their near and
            dear one. Our main strength is our guest positive review due which
            we are having almost 5 out of 5 ratings on all major coustomer based
            review websites.
          </p>
        </div>
      </div>

      <div className="about-content3" ref={aboutContentRef}>
        <div className="about-content3-item">
          <h1>
            <CountUp start={startCount ? 0 : null} end={1500} duration={2.5} />
          </h1>
          <p>AMAZING PLACES TO VISIT</p>
        </div>

        <div className="about-content3-item">
          <h1>
            <CountUp start={startCount ? 0 : null} end={100} duration={2.5} /> +
          </h1>
          <p>AMAZING PLACES TO VISIT</p>
        </div>

        <div className="about-content3-item">
          <h1>
            <CountUp start={startCount ? 0 : null} end={999} duration={2.5} />
          </h1>
          <p>AMAZING PLACES TO VISIT</p>
        </div>

        <div className="about-content3-item">
          <h1>
            <CountUp start={startCount ? 0 : null} end={200} duration={2.5} />
          </h1>
          <p>AMAZING PLACES TO VISIT</p>
        </div>
      </div>
    </div>
  );
};

export default About;
