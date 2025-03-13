import "./Blog.scss";
import { MdOutlineDateRange } from "react-icons/md";

import BlogSidebar from "../../components/BlogSidebar/BlogSidebar";

import { blog3 } from "../../assets/blogData";
import SEO from "../../components/SEO";

const Blog3 = () => {
  return (
    <div className="blog">
      <SEO
        title="Best Way to Spend a Luxury Vacation in India"
        description="Discover the ultimate luxury vacation in India with royal palaces, heritage hotels, luxury trains, and premium experiences in Rajasthan, Kerala, Goa, and more."
        url={window.location.href}
        keywords="Luxury travel India, best luxury hotels India, royal vacation, luxury train tours, high-end resorts India"
      />

      <div className="blog-container">
        <div className="blog-content">
          <div className="blog-content-left">
            <img src={blog3.blogContent1.img} alt={blog3.blogContent1.img} />
            <div className="blog-content-item">
              <h1>{blog3.blogContent1.title}</h1>

              <div className="user">
                <p>
                  <MdOutlineDateRange className="date-icon" />
                  {blog3.date}
                </p>
              </div>

              <p className="desc">{blog3.blogContent1.desc}</p>
            </div>

            <div className="blog-content-item">
              <ul>
                {blog3.blogContent2.desc.map((item, index) => (
                  <li key={index}>
                    {" "}
                    <span>{item.title}</span> {item.desc}
                  </li>
                ))}
              </ul>
            </div>

            <div className="blog-content-item">
              <h3>{blog3.blogContent3.title}</h3>
              <ul>
                {blog3.blogContent3.desc.map((item, index) => (
                  <li key={index}>
                    {" "}
                    <span>{item.title}</span> {item.desc}
                  </li>
                ))}
              </ul>
            </div>

            <div className="blog-content-item">
              <h3>{blog3.blogContent4.title}</h3>
              <p>{blog3.blogContent4.desc}</p>
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

export default Blog3;
