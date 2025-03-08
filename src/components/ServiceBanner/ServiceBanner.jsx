import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./ServiceBanner.scss";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const ServiceBanner = ({ destinationImg }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <div className="serviceBanner" data-aos="fade-up">
      <div className="serviceBanner-imgs">
        <Swiper
          modules={[Navigation]}
          slidesPerView={2.1}
          spaceBetween={5}
          centeredSlides={true}
          loop={true}
          speed={1000}
          navigation={{
            prevEl: ".serviceBanner-prev",
            nextEl: ".serviceBanner-next",
          }}
          className="serviceBanner-swiper"
          breakpoints={{
            0: { slidesPerView: 1.5 },
            480: { slidesPerView: 1.5 },
            768: { slidesPerView: 2.1 },
            1024: { slidesPerView: 2.1 },
            1400: { slidesPerView: 2.1 },
          }}
        >
          {destinationImg.map((item, index) => (
            <SwiperSlide key={index}>
              <img
                src={item.img}
                alt={item.title}
                className="serviceBanner-img"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="serviceBanner-prev">❮</div>
        <div className="serviceBanner-next">❯</div>
      </div>
    </div>
  );
};

export default ServiceBanner;
