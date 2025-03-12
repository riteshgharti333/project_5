import "./Blog.scss";
import { MdOutlineDateRange } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";

import BlogSidebar from "../../components/BlogSidebar/BlogSidebar";

import { blog4 } from "../../assets/blogData";
import SEO from "../../components/SEO";

const Blog4 = () => {
  return (
    <div className="blog">
      <SEO
        title="Best Road Trips to Experience Rajasthan – A Journey Through Royal Landscapes"
        description="Explore Rajasthan’s breathtaking road trips! Drive through Jaipur, Udaipur, Jaisalmer, and Pushkar for a royal adventure filled with history, culture, and stunning landscapes."
        url={window.location.href}
        keywords="Rajasthan road trips, best road trips India, Jaipur to Jaisalmer road trip, Udaipur scenic drives, travel Rajasthan by car"
      />

      <div className="blog-container">
        <div className="blog-top">
          <img src={logo} alt={logo} />
          <div className="blog-top-links">
            <ul>
              <Link>
                <li>Home</li>
              </Link>
              <Link>
                <li>Taxi Services</li>
              </Link>
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
            <img src={blog4.blogContent1.img} alt={blog4.blogContent1.img} />
            <div className="blog-content-item">
              <h1>{blog4.blogContent1.title}</h1>

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

              <p className="desc">{blog4.blogContent1.desc}</p>
            </div>

            <div className="blog-content-item">
              <h3> {blog4.blogContent2.title}</h3>

              {blog4.blogContent2.desc.map((item, index) => (
                <p key={index}>{item}</p>
              ))}

              {blog4.blogContent2.smdesc.map((item, index) => (
                <p key={index}>{item}</p>
              ))}
            </div>

            <div className="blog-content-item">
              <h3>{blog4.blogContent3.title}</h3>
              <p>{blog4.blogContent3.desc}</p>
            </div>

            <div className="blog-content-item">
              <h3>{blog4.blogContent4.title}</h3>
              <p>{blog4.blogContent4.desc}</p>
            </div>

            <div className="blog-content-item">
              <h3>{blog4.blogContent5.title}</h3>
              <ol>
                {blog4.blogContent5.desc.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ol>
            </div>

            <div className="blog-content-item">
              <h3>{blog4.blogContent6.title}</h3>
              {blog4.blogContent6.desc.map((item, index) => (
                <p key={index}>{item}</p>
              ))}
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

export default Blog4;
