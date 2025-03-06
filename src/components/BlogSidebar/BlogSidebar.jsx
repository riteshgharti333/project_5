import "./BlogSidebar.scss";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const blogSidebar = () => {
  return (
    <div className="blogSidebar">
      <div className="blogSidebar-item">
        <h3>Recent Posts</h3>
        <div className="posts">
          <p>
            <MdOutlineKeyboardArrowRight className="post-icon" /> Char Dham
            Yatra 2025 Begins April 30: Find More Details
          </p>
          <p>
            <MdOutlineKeyboardArrowRight className="post-icon" /> Char Dham
            Yatra 2025 Begins April 30: Find More Details
          </p>
          <p>
            <MdOutlineKeyboardArrowRight className="post-icon" /> Char Dham
            Yatra 2025 Begins April 30: Find More Details
          </p>
          <p>
            <MdOutlineKeyboardArrowRight className="post-icon" /> Char Dham
            Yatra 2025 Begins April 30: Find More Details
          </p>
        </div>
      </div>

      <hr />

      <div className="blogSidebar-item">
        <h3>Categories</h3>
        <div className="posts">
          <p>
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
          </p>
        </div>
      </div>
    </div>
  );
};

export default blogSidebar;
