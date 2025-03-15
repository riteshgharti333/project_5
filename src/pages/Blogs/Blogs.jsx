import "./Blogs.scss";
import { MdOutlineDateRange } from "react-icons/md";
import { FaRegCommentDots } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

import { blogs } from "../../assets/blogData";
import SEO from "../../components/SEO";

const Blogs = () => {
  return (
    <div className="blogs">
      <SEO
        title="Latest Travel & Taxi Blogs | Tips, Guides & Updates"
        description="Explore expert travel tips, taxi service updates, and car rental guides. Stay informed with our latest blog posts on destinations, safety tips, and travel hacks!"
        url={window.location.href}
        keywords="travel blog, taxi service tips, car rental guides, travel updates, destination guides, best travel blogs, taxi industry news, travel hacks"
      />

      <div className="blogs-container">
        <div className="blogs-cards">
          {blogs.map((item, index) => (
            <div className="blogs-card" key={index}>
              <img src={item.img} alt={item.title}  loading="lazy"/>

              <div className="blogs-card-desc">
                <Link to={`/blog/${item.link}`}>
                  <h1>{item.title}</h1>
                </Link>

                <div className="blogs-card-date">
                  <span className="date">
                    <MdOutlineDateRange className="blog-icon" /> February 25,
                    2025
                  </span>
                  <span className="comment">
                    <FaRegCommentDots className="blog-icon" /> Leave a Comment
                  </span>
                </div>

                <p>{item.desc}</p>
                <Link to={`/blog/${item.link}`}>
                  <span className="reading">
                    Continue Reading{" "}
                    <FaArrowRightLong className="right-arrow" />
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
