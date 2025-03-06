import { useEffect } from "react";
import { reviews } from "../../assets/data";
import "./Review.scss";
import { FaStar } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import AOS from "aos";
import "aos/dist/aos.css";

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

              <div className="review-left-desc-item-stars">
                <FaStar className="star-icon" />
                <FaStar className="star-icon" />
                <FaStar className="star-icon" />
                <FaStar className="star-icon" />
                <FaStar className="star-icon" />
              </div>
            </div>
          </div>
        </div>

        <div className="review-right" data-aos="fade-up">
          <Swiper
            modules={[Pagination, Navigation, Autoplay]}
            slidesPerView={1}
            spaceBetween={20}
            loop={true}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            speed={1200}
            className="review-swiper"
          >
            {reviews.map((item, index) => (
              <SwiperSlide key={index} data-aos="fade-up">
                <div className="review-right-card">
                  <div className="review-right-top">
                    <img
                      src="https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?auto=compress&cs=tinysrgb&w=600"
                      alt=""
                    />
                    <p>{item.name}</p>
                  </div>
                  <h4>{item.desc}</h4>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Review;
