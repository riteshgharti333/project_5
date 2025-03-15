import "./Blog.scss";
import { MdOutlineDateRange } from "react-icons/md";

import BlogSidebar from "../../components/BlogSidebar/BlogSidebar";

import { blog1 } from "../../assets/blogData";
import SEO from "../../components/SEO";

const Blog = () => {
  return (
    <div className="blog">
      <SEO
        title="Best Places to Celebrate Holi Festival in India | Top Holi Destinations"
        description="Experience the vibrant Holi festival in India at the best destinations like Mathura, Vrindavan, Barsana, Jaipur, and more. Plan your colorful Holi celebration today!"
        url={window.location.href}
        keywords="Holi festival India, best Holi destinations, celebrate Holi in India, Mathura Holi, Vrindavan Holi, Barsana Lathmar Holi, Jaipur Holi"
      />

      <div className="blog-container">
        <div className="blog-content">
          <div className="blog-content-left">
            <img
              src={blog1.blogContent1.img}
              alt={blog1.blogContent1.title}
              loading="lazy"
            />
            <div className="blog-content-item">
              <h1>{blog1.blogContent1.title}</h1>

              <div className="user">
                <p>
                  <MdOutlineDateRange className="date-icon" />
                  {blog1.date}
                </p>
              </div>

              <p className="desc">{blog1.blogContent1.desc}</p>
            </div>

            <div className="blog-content-item">
              {blog1.blogContent2.map((item, index) => (
                <div key={index}>
                  <h3>{item.title}</h3>
                  <img src={item.img} alt={item.img} loading="lazy" />
                  <p>{item.desc}</p>
                </div>
              ))}
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
