import { useState, useEffect } from "react";
import "./HomeBanner.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import { banners, smBanner } from "../../assets/data";

import AOS from "aos";
import "aos/dist/aos.css";

const HomeBanner = () => {
  const [isMobile, setIsMobile] = useState(
    window.matchMedia("(max-width: 1199px)").matches
  );

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 1199px)");

    const handleMediaChange = (e) => setIsMobile(e.matches);

    mediaQuery.addEventListener("change", handleMediaChange);

    return () => mediaQuery.removeEventListener("change", handleMediaChange);
  }, []);

  return (
    <div className="homeBanner" data-aos="fade-up">
      <div className="homeBanner-imgs">
        <Swiper
          modules={[EffectFade, Autoplay]}
          effect="fade"
          loop={true}
          speed={1200}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          className="services-slide"
        >
          { banners.map((item, index) => (
            <SwiperSlide key={index} className="service_slide">
              <img src={item.img} alt="banner-img" loading="lazy" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default HomeBanner;
