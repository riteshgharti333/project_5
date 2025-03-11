import "./Blog.scss";
import { MdOutlineDateRange } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";

import BlogSidebar from "../../components/BlogSidebar/BlogSidebar";

import { blog5 } from "../../assets/blogData";

const Blog5 = () => {
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
            <img src={blog5.blogContent1.img} alt="" />
            <div className="blog-content-item">
              <h1>{blog5.blogContent1.title}</h1>

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

              <p className="desc">{blog5.blogContent1.desc}</p>
            </div>

            <div className="blog-content-item">
              <h3> {blog5.blogContent2.title}</h3>
              <p>{blog5.blogContent2.desc}</p>
              <p>{blog5.blogContent2.tip}</p>
            </div>

            <div className="blog-content-item">
              <h3>{blog5.blogContent3.title}</h3>
              <p>{blog5.blogContent3.desc}</p>
              <p>{blog5.blogContent3.tip}</p>
            </div>

            <div className="blog-content-item">
              <h3>{blog5.blogContent4.title}</h3>
              <p>{blog5.blogContent4.desc}</p>
              <p>{blog5.blogContent4.tip}</p>
            </div>

            <div className="blog-content-item">
              <h3>{blog5.blogContent5.title}</h3>
              <p>{blog5.blogContent5.desc}</p>
            </div>

            <div className="blog-content-item">
              <h3>{blog5.blogContent6.title}</h3>
              <p>{blog5.blogContent6.desc}</p>
            </div>

            <div className="blog-content-item">
              <h3>{blog5.blogContent7.title}</h3>
              <p>{blog5.blogContent7.desc}</p>
              <p>{blog5.blogContent7.tip}</p>
            </div>

            <div className="blog-content-item">
              <h3>{blog5.blogContent8.title}</h3>
              <p>{blog5.blogContent8.desc}</p>
              <p>{blog5.blogContent8.tip}</p>
            </div>

            <div className="blog-content-item">
              <h3>{blog5.blogContent9.title}</h3>
              <p>{blog5.blogContent9.desc}</p>
              <p>{blog5.blogContent9.tip}</p>
            </div>

            <div className="blog-content-item">
              <h3>{blog5.blogContent10.title}</h3>
              <p>{blog5.blogContent10.desc}</p>
              <p>{blog5.blogContent10.tip}</p>
            </div>

            <div className="blog-content-item">
              <h3>{blog5.blogContent11.title}</h3>
              <p>{blog5.blogContent11.desc}</p>
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

export default Blog5;
