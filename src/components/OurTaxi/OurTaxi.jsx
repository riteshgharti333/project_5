import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./OurTaxi.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ourTaxies } from "../../assets/data";

const OurTaxi = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      easing: "ease-in-out",
      once: true, 
    });
  }, []);

  return (
    <div className="ourTaxi">
      <div className="ourTaxi-top" data-aos="fade-up">
        <h1>Our Taxi service : Trust the Wheel, Enjoy the Ride</h1>
        <p>
          Traveling across North India is a dream for many, and having a
          reliable car rental service can make this dream a reality. *Global
          India Tour* is your go-to solution for all your travel needs, providing
          comfort, safety, and affordability. Let’s dive into why Global India
          Tour should be your top choice for exploring the rich cultural
          heritage and breathtaking landscapes of North India.
        </p>
      </div>

      <div className="ourTaxi-cards" data-aos="fade-up">
        <Swiper
          slidesPerView={2}
          centeredSlides={false}
          spaceBetween={20}
          loop={true}
          speed={3000}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          initialSlide={1}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
          }}
        >
          {ourTaxies.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="ourTaxi-card">
                <img src={item.img} alt="" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default OurTaxi;
