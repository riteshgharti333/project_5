import "./BlogCards.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { blogs } from "../../assets/blogData";
import { Link } from "react-router-dom";

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
          {blogs.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="blog-content-card">
                <img src={item.img} alt={item.title} />
                <div className="blog-content-card-desc">
                  <Link to={`/blog/${item.link}`}>
                    <h3>{item.title}</h3>
                  </Link>
                  <p>{item.date}</p>
                  <Link to={`/blog/${item.link}`}>
                    <span>Read More.....</span>
                  </Link>
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
