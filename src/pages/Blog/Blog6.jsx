import "./Blog.scss";
import { MdOutlineDateRange } from "react-icons/md";

import BlogSidebar from "../../components/BlogSidebar/BlogSidebar";

import { blog6 } from "../../assets/blogData";
import SEO from "../../components/SEO";
import { useLocation } from "react-router-dom";

const Blog6 = () => {
  const location = useLocation();
  const baseUrl =
    import.meta.env.VITE_BASE_URL || "https://globalindiatravels.com";
  const fullUrl = `${baseUrl}${location.pathname}`;

  return (
    <div className="blog">
      <SEO
        title="Rajasthan Taxi Hire: Top Destinations and Affordable Rates"
        description="Explore Rajasthan with reliable and affordable taxi services. From Jaipur to Udaipur and beyond, discover top destinations, local taxi rates, and luxury travel options starting from Delhi."
        url={fullUrl}
        keywords="Rajasthan taxi service, Jaipur taxi rates, Udaipur taxi booking, Delhi to Rajasthan taxi, luxury taxi in Rajasthan, Rajasthan road trip taxi, affordable Rajasthan travel, taxi rental Rajasthan"
      />

      <div className="blog-container">
        <div className="blog-content">
          <div className="blog-content-left">
            <img
              src={blog6.blogContent1.img}
              alt={blog6.blogContent1.title}
              loading="lazy"
            />
            <div className="blog-content-item">
              <h1>{blog6.blogContent1.title}</h1>

              <div className="user">
                <p>
                  <MdOutlineDateRange className="date-icon" />
                  {blog6.date}
                </p>
              </div>

              <p className="desc">{blog6.blogContent1.desc}</p>
            </div>

            <div className="blog-content-item">
              <h3>{blog6.blogContent2.title}</h3>
              <p>{blog6.blogContent2.smDesc}</p>

              <ul>
                {blog6.blogContent2.desc.map((item, index) => (
                  <li key={index}>
                    <span>{item.title} :</span> {item.desc}
                  </li>
                ))}
              </ul>

              <p>{blog6.blogContent2.smDesc2}</p>
            </div>

            <div className="blog-content-item">
              <h3>{blog6.blogContent3.title}</h3>
              <p>{blog6.blogContent3.smDesc}</p>

              <ul>
                {blog6.blogContent3.desc.map((item, index) => (
                  <li key={index}>
                    <span>{item.title} :</span> {item.desc}
                  </li>
                ))}
              </ul>

              <p>{blog6.blogContent3.smDesc2}</p>
            </div>

            <div className="blog-content-item">
              <h3>{blog6.blogContent4.title}</h3>

              <ul>
                {blog6.blogContent4.desc.map((item, index) => (
                  <li key={index}>
                    <span>{item.title} :</span> {item.desc}
                  </li>
                ))}
              </ul>
            </div>

            <div className="blog-content-item">
              <h3>{blog6.blogContent5.title}</h3>
              <p>{blog6.blogContent5.smDesc}</p>

              <ul>
                {blog6.blogContent3.desc.map((item, index) => (
                  <li key={index}>
                    <span>{item.title} :</span> {item.desc}
                  </li>
                ))}
              </ul>
            </div>

            <div className="blog-content-item">
              <h3>{blog6.blogContent6.title}</h3>

              <ul>
                {blog6.blogContent6.desc.map((item, index) => (
                  <li key={index}>
                    <span>{item.title} : </span> {item.desc}
                  </li>
                ))}
              </ul>
              <p>{blog6.blogContent6.smDesc}</p>
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

export default Blog6;
