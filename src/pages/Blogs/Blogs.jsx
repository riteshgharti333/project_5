import "./Blogs.scss";
import { MdOutlineDateRange } from "react-icons/md";
import { FaRegCommentDots } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoPricetagsOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";

import { blogs } from "../../assets/blogData";

const Blogs = () => {
  return (
    <div className="blogs">
      <div className="blogs-container">
        <div className="blogs-top">
          <img src={logo} alt="" />
          <div className="blogs-top-links">
            <ul>
              <Link>
                <li>Home</li>
              </Link>
              <Link>
                <li>Taxi Services</li>
              </Link>{" "}
              <Link>
                <li>Blog</li>
              </Link>
              <Link>
                <li>Contact Us</li>
              </Link>
            </ul>
          </div>
        </div>
        <div className="blogs-cards">
          {blogs.map((item, index) => (
            <div className="blogs-card" key={index}>
              <img src={item.img} alt={item.title} />

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
