import "./Blog.scss";
import { MdOutlineDateRange } from "react-icons/md";

import BlogSidebar from "../../components/BlogSidebar/BlogSidebar";

import { blog2 } from "../../assets/blogData";
import SEO from "../../components/SEO";
import { useLocation } from "react-router-dom";

const Blog2 = () => {
  const location = useLocation();
  const baseUrl =
    import.meta.env.VITE_BASE_URL || "https://globalindiatravels.com";
  const fullUrl = `${baseUrl}${location.pathname}`;

  return (
    <div className="blog">
      <SEO
        title="Amazing Experiences Awaiting You on the Golden Triangle Tour"
        description="Explore the iconic Golden Triangle Tour of India covering Delhi, Agra, and Jaipur. Discover historical landmarks, cultural heritage, and unforgettable experiences!"
        url={fullUrl}
        keywords="Golden Triangle Tour, Delhi Agra Jaipur tour, India travel, Taj Mahal tour, best Golden Triangle itinerary"
      />

      <div className="blog-container">
        <div className="blog-content">
          <div className="blog-content-left">
            <img
              src={blog2.blogContent1.img}
              alt={blog2.blogContent1.title}
              loading="lazy"
            />
            <div className="blog-content-item">
              <h1>{blog2.blogContent1.title}</h1>

              <div className="user">
                <p>
                  <MdOutlineDateRange className="date-icon" />
                  {blog2.date}
                </p>
              </div>

              <p className="desc">{blog2.blogContent1.desc}</p>
            </div>

            <div className="blog-content-item">
              {blog2.blogContent2.map((item, index) => (
                <div key={index}>
                  <h3>{item.title}</h3>
                  <img src={item.img} alt={item.img} loading="lazy" />
                  {item.desc.map((item, index) => (
                    <p key={index}>{item}</p>
                  ))}
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

export default Blog2;
