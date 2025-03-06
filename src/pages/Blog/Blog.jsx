import "./Blog.scss";
import { MdOutlineDateRange } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";

import BlogSidebar from "../../components/BlogSidebar/BlogSidebar";

const Blog = () => {
  return (
    <div className="blog">
      <div className="blog-container">
        <div className="blog-top">
          <img src={logo} alt="" />
          <div className="blog-top-links">
            <ul>
              <Link>
                <li>Home</li>
              </Link>
              <Link>
                <li>Taxi Services</li>
              </Link>{" "}
              <Link>
                <li>Blog</li>
              </Link>
              <Link>
                <li>Contact Us</li>
              </Link>
            </ul>
          </div>
        </div>
        <div className="blog-content">
          <div className="blog-content-left">
            <img
              src="https://www.ghumindiaghum.com/blog/wp-content/uploads/2025/02/Travel-Guide-Ranthambore-National-Park-Safari.jpg"
              alt=""
            />
            <div className="blog-content1">
              <div className="blog-content-tags">
                <span>Explore India</span>
                <span>Explore India</span>
                <span>Explore India</span>
              </div>

              <h1>Travel Guide – Ranthambore National Park Safari</h1>

              <div className="user">
                <p>
                  <FaRegUser className="user-icon" />
                  Sarika Chauhan
                </p>
                <p>
                  <MdOutlineDateRange className="date-icon" />
                  February 20, 2025
                </p>
              </div>

              <p className="desc">
                Ranthambore National Park is one of India’s most renowned
                wildlife sanctuaries, famous for its tiger population and
                breathtaking landscapes. Located in the Sawai Madhopur district
                of Rajasthan, it attracts nature lovers, photographers, and
                adventure seekers from across the globe. Once a royal hunting
                ground, today it stands as a crucial conservation site, offering
                thrilling safaris where visitors can witness the majestic Bengal
                tiger in its natural habitat. Let’s explore the top things to do
                during Ranthambore National Park Safari. This blog also includes
                the best time to visit, safari options, must-see attractions,
                travel tips, and essential details to make your wildlife
                adventure with Tour Operators in delhi.
              </p>
            </div>

            <hr className="from-border" />

            <div className="blog-form">
              <h1>Leave a Reply</h1>
              <p>
                Your email address will not be published. Required fields are
                marked <span class="required">*</span>
              </p>

              <form action="#" method="post">
                <div class="form-group">
                  <label for="name">
                    Name <span class="required">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                    required
                  />
                </div>

                <div class="form-group">
                  <label for="email">
                    Email <span class="required">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    required
                  />
                </div>

                <div class="form-group">
                  <label for="website">Website</label>
                  <input
                    type="url"
                    id="website"
                    name="website"
                    placeholder="Enter your website (optional)"
                  />
                </div>

                <div class="form-group">
                  <label for="comment">
                    Comment <span class="required">*</span>
                  </label>
                  <textarea
                    id="comment"
                    name="comment"
                    rows="6"
                    placeholder="Write your comment here..."
                    required
                  ></textarea>
                </div>

                <button type="submit" class="submit-btn">
                  Post Comment
                </button>
              </form>
            </div>
          </div>
          <div className="blog-content-sidebar">
            <BlogSidebar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
