import "./Blog.scss";
import { MdOutlineDateRange } from "react-icons/md";

import BlogSidebar from "../../components/BlogSidebar/BlogSidebar";

import { blog5 } from "../../assets/blogData";
import SEO from "../../components/SEO";

const Blog5 = () => {
  return (
    <div className="blog">
      <SEO
        title="Best Things to Do in Udaipur – Explore the City of Lakes"
        description="Discover the top things to do in Udaipur! Visit City Palace, take a boat ride on Lake Pichola, explore Sajjangarh Palace, and enjoy Rajasthani culture in this royal city."
        url={window.location.href}
        keywords="best things to do in Udaipur, Udaipur travel guide, City Palace Udaipur, Lake Pichola boat ride, places to visit in Udaipur"
      />

      <div className="blog-container">
        <div className="blog-content">
          <div className="blog-content-left">
            <img
              src={blog5.blogContent1.img}
              alt={blog5.blogContent1.img}
              loading="lazy"
            />
            <div className="blog-content-item">
              <h1>{blog5.blogContent1.title}</h1>

              <div className="user">
                <p>
                  <MdOutlineDateRange className="date-icon" />
                  {blog5.date}
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
