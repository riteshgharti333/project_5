import { useEffect } from "react";
import "./Review.scss";
import { FaStar } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import AOS from "aos";
import { FaUser } from "react-icons/fa";
import "aos/dist/aos.css";
import { reviews } from "../../assets/reviewData";

const Review = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <div className="review">
      <div className="review-container">
        <div className="review-left" data-aos="fade-up">
          <div className="review-left-top">
            <h1>What our customers are saying?</h1>
            <p>
              Don't take our word, see what our clients have to say about us...
            </p>
          </div>

          <div className="review-left-desc">
            <div className="review-left-desc-item">
              <h1>13m+</h1>
              <p>Happy People</p>
            </div>

            <div className="review-left-desc-item">
              <h1>4.88</h1>
              <p>Overall rating</p>
            </div>
          </div>
        </div>

        <div className="review-right" data-aos="fade-up">
          <Swiper
            modules={[Navigation, Autoplay]}
            slidesPerView={1}
            spaceBetween={20}
            loop={true}
            navigation={{
              nextEl: ".review-swiper-next",
              prevEl: ".review-swiper-prev",
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            speed={1200}
            className="review-swiper"
          >
            {reviews.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="review-right-card">
                  <div className="review-right-top">
                    <FaUser className="user-icon" />
                    <div className="review-right-top-item">
                      <p>{item.name}</p>

                      <div className="review-left-desc-item-stars">
                        <FaStar className="star-icon" />
                        <FaStar className="star-icon" />
                        <FaStar className="star-icon" />
                        <FaStar className="star-icon" />
                        <FaStar className="star-icon" />
                      </div>
                    </div>
                  </div>
                  <h4>{item.review}</h4>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="review-swiper-prev">❮</div>
          <div className="review-swiper-next">❯</div>
        </div>
      </div>
    </div>
  );
};

export default Review;
