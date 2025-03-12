import { useEffect } from "react";
import { popularDestinations } from "../../assets/data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./Popular.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const Popular = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="popular">
      <div className="popular-top" data-aos="fade-up">
        <h1>Popular Destinations</h1>
        <p>These popular destinations have a lot to offer</p>
      </div>

      <div className="popular-cards" data-aos="fade-up">
        <Swiper
          modules={[Navigation]}
          slidesPerView={3.5}
          spaceBetween={20}
          speed={1200}
          breakpoints={{
            0: { slidesPerView: 1 },
            480: { slidesPerView: 1.5 },
            768: { slidesPerView: 2.5 },
            1024: { slidesPerView: 3.5 },
          }}
          navigation={{
            prevEl: ".popular-prev",
            nextEl: ".popular-next",
          }}
          className="popular-swiper"
        >
          {popularDestinations.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="popular-card">
                <img src={item.img} alt="" />
                <div className="bg-overlay"></div>
                <div className="popular-card-desc">
                  <h2>{item.title}</h2>
                  <Link to={`/${item.link}`}>
                    <button>Explore Now</button>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="popular-prev">❮</div>
        <div className="popular-next">❯</div>
      </div>
    </div>
  );
};

export default Popular;
