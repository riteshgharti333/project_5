import "./Blog.scss";
import { MdOutlineDateRange } from "react-icons/md";
import BlogSidebar from "../../components/BlogSidebar/BlogSidebar";

import { blog4 } from "../../assets/blogData";
import SEO from "../../components/SEO";
import { useLocation } from "react-router-dom";

const Blog4 = () => {
  const location = useLocation();
  const baseUrl =
    import.meta.env.VITE_BASE_URL || "https://globalindiatravels.com";
  const fullUrl = `${baseUrl}${location.pathname}`;
  return (
    <div className="blog">
      <SEO
        title="Best Road Trips to Experience Rajasthan – A Journey Through Royal Landscapes"
        description="Explore Rajasthan’s breathtaking road trips! Drive through Jaipur, Udaipur, Jaisalmer, and Pushkar for a royal adventure filled with history, culture, and stunning landscapes."
        url={fullUrl}
        keywords="Rajasthan road trips, best road trips India, Jaipur to Jaisalmer road trip, Udaipur scenic drives, travel Rajasthan by car"
      />

      <div className="blog-container">
        <div className="blog-content">
          <div className="blog-content-left">
            <img
              src={blog4.blogContent1.img}
              alt={blog4.blogContent1.img}
              loading="lazy"
            />
            <div className="blog-content-item">
              <h1>{blog4.blogContent1.title}</h1>

              <div className="user">
                <p>
                  <MdOutlineDateRange className="date-icon" />
                  {blog4.date}
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
