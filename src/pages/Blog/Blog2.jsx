import "./Blog.scss";
import { MdOutlineDateRange } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";

import BlogSidebar from "../../components/BlogSidebar/BlogSidebar";

import { blog2 } from "../../assets/blogData";

const Blog2 = () => {
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
            <img src={blog2.blogContent1.img} alt="" />
            <div className="blog-content-item">
              <h1>{blog2.blogContent1.title}</h1>

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

              <p className="desc">{blog2.blogContent1.desc}</p>
            </div>

            <div className="blog-content-item">
              {blog2.blogContent2.map((item, index) => (
                <>
                  <h3>{item.title}</h3>
                  <img src={item.img} alt="" />
                  {item.desc.map((item, index) => (
                    <p key={index}>{item}</p>
                  ))}
                </>
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

export default Blog2;
