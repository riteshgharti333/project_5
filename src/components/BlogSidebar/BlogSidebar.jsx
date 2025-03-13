import { Link } from "react-router-dom";
import { blogs } from "../../assets/blogData";
import "./BlogSidebar.scss";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const blogSidebar = () => {
  return (
    <div className="blogSidebar">
      <div className="blogSidebar-item">
        <h3>Recent Posts</h3>
        <div className="posts">
          {blogs.map((item, index) => (
            <Link to={`/blog/${item.link}`} key={index}>
              <p>
                <MdOutlineKeyboardArrowRight className="post-icon" />
                {item.title}
              </p>
            </Link>
          ))}
        </div>
      </div>

      <hr />

      <div className="blogSidebar-item">
        <h3>Categories</h3>
        <div className="posts">
          {/* <p>
            <MdOutlineKeyboardArrowRight className="post-icon" />
            Explore Dubai
          </p>
          <p>
            <MdOutlineKeyboardArrowRight className="post-icon" />
            Explore Dubai
          </p>{" "}
          <p>
            <MdOutlineKeyboardArrowRight className="post-icon" />
            Explore Dubai
          </p>{" "}
          <p>
            <MdOutlineKeyboardArrowRight className="post-icon" />
            Explore Dubai
          </p>{" "}
          <p>
            <MdOutlineKeyboardArrowRight className="post-icon" />
            Explore Dubai
          </p>{" "}
          <p>
            <MdOutlineKeyboardArrowRight className="post-icon" />
            Explore Dubai
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default blogSidebar;
