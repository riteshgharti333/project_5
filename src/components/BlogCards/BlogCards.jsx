import { blogcards } from "../../assets/data";
import "./BlogCards.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const BlogCards = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <div className="blogCards" data-aos="fade-up">
      <h1>Our Blogs</h1>
      <div className="blogCards-content" data-aos="fade-up">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={10}
          slidesPerView={1}
          loop={true}
          navigation={{
            nextEl: ".blog-swiper-next",
            prevEl: ".blog-swiper-prev",
          }}
          speed={1000}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          breakpoints={{
            0: { slidesPerView: 1 },
            480: { slidesPerView: 2 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1400: { slidesPerView: 4 },
          }}
          className="blog-swiper"
        >
          {blogcards.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="blog-content-card">
                <img src={item.img} />
                <div className="blog-content-card-desc">
                  <h3>{item.title}</h3>
                  <p>{item.date}</p>
                  <span>Read More.....</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="blog-swiper-prev">❮</div>
        <div className="blog-swiper-next">❯</div>
      </div>
    </div>
  );
};

export default BlogCards;
