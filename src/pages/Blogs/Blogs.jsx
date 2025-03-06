import "./Blogs.scss";
import { MdOutlineDateRange } from "react-icons/md";
import { FaRegCommentDots } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoPricetagsOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";

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
          <div className="blogs-card">
            <img
              src="https://zyanna.com/cdn/shop/articles/zyanna-the-beauty-of-indian-tea-gardens-a-visual-symphony-of-nature-and-culture.jpg?v=1718643706"
              alt=""
            />

            <div className="blogs-card-desc">
              <h1>15-Day South India Itinerary for 2025</h1>

              <div className="blogs-card-date">
                <span className="date">
                  <MdOutlineDateRange className="blog-icon" /> February 25, 2025
                </span>
                <span className="comment">
                  <FaRegCommentDots className="blog-icon" /> Leave a Comment
                </span>
              </div>

              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Voluptatem aspernatur praesentium minima placeat perspiciatis
                dignissimos tempore rerum beatae, quis adipisci.
              </p>
              <span className="reading">
                Continue Reading <FaArrowRightLong className="right-arrow" />
              </span>

              <div className="tags">
                <p>
                  {" "}
                  <IoPricetagsOutline className="tag-icon" /> Kumarakom,
                  Backwaters of Alleppey, Best Time to Visit the South of India,
                  best travel agency in delhi, best travel agency in india, best
                  travel agents in delhi, Chennai, Fort Kochi, Golden Triangle
                  Package, indian golden triangle tour package, Madurai,
                  Mahabalipuram, Marari Beach, Munnar, Pondicherry and
                  Auroville, Rajasthan Tour Package, south india, South India
                  Itinerary, south india tour package, Thanjavur, Tour Operator
                  in Delhi, travel agency in delhi, Travel Agency in India,
                  Travel Agent in Delhi, travel agents in delhi, Visit South
                  India
                </p>
              </div>
            </div>
          </div>
          <div className="blogs-card">
            <img
              src="https://zyanna.com/cdn/shop/articles/zyanna-the-beauty-of-indian-tea-gardens-a-visual-symphony-of-nature-and-culture.jpg?v=1718643706"
              alt=""
            />

            <div className="blogs-card-desc">
              <h1>15-Day South India Itinerary for 2025</h1>

              <div className="blogs-card-date">
                <span className="date">
                  <MdOutlineDateRange className="blog-icon" /> February 25, 2025
                </span>
                <span className="comment">
                  <FaRegCommentDots className="blog-icon" /> Leave a Comment
                </span>
              </div>

              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Voluptatem aspernatur praesentium minima placeat perspiciatis
                dignissimos tempore rerum beatae, quis adipisci.
              </p>
              <span className="reading">
                Continue Reading <FaArrowRightLong className="right-arrow" />
              </span>

              <div className="tags">
                <p>
                  {" "}
                  <IoPricetagsOutline className="tag-icon" /> Kumarakom,
                  Backwaters of Alleppey, Best Time to Visit the South of India,
                  best travel agency in delhi, best travel agency in india, best
                  travel agents in delhi, Chennai, Fort Kochi, Golden Triangle
                  Package, indian golden triangle tour package, Madurai,
                  Mahabalipuram, Marari Beach, Munnar, Pondicherry and
                  Auroville, Rajasthan Tour Package, south india, South India
                  Itinerary, south india tour package, Thanjavur, Tour Operator
                  in Delhi, travel agency in delhi, Travel Agency in India,
                  Travel Agent in Delhi, travel agents in delhi, Visit South
                  India
                </p>
              </div>
            </div>
          </div>{" "}
          <div className="blogs-card">
            <img
              src="https://zyanna.com/cdn/shop/articles/zyanna-the-beauty-of-indian-tea-gardens-a-visual-symphony-of-nature-and-culture.jpg?v=1718643706"
              alt=""
            />

            <div className="blogs-card-desc">
              <h1>15-Day South India Itinerary for 2025</h1>

              <div className="blogs-card-date">
                <span className="date">
                  <MdOutlineDateRange className="blog-icon" /> February 25, 2025
                </span>
                <span className="comment">
                  <FaRegCommentDots className="blog-icon" /> Leave a Comment
                </span>
              </div>

              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Voluptatem aspernatur praesentium minima placeat perspiciatis
                dignissimos tempore rerum beatae, quis adipisci.
              </p>
              <span className="reading">
                Continue Reading <FaArrowRightLong className="right-arrow" />
              </span>

              <div className="tags">
                <p>
                  {" "}
                  <IoPricetagsOutline className="tag-icon" /> Kumarakom,
                  Backwaters of Alleppey, Best Time to Visit the South of India,
                  best travel agency in delhi, best travel agency in india, best
                  travel agents in delhi, Chennai, Fort Kochi, Golden Triangle
                  Package, indian golden triangle tour package, Madurai,
                  Mahabalipuram, Marari Beach, Munnar, Pondicherry and
                  Auroville, Rajasthan Tour Package, south india, South India
                  Itinerary, south india tour package, Thanjavur, Tour Operator
                  in Delhi, travel agency in delhi, Travel Agency in India,
                  Travel Agent in Delhi, travel agents in delhi, Visit South
                  India
                </p>
              </div>
            </div>
          </div>{" "}
          <div className="blogs-card">
            <img
              src="https://zyanna.com/cdn/shop/articles/zyanna-the-beauty-of-indian-tea-gardens-a-visual-symphony-of-nature-and-culture.jpg?v=1718643706"
              alt=""
            />

            <div className="blogs-card-desc">
              <h1>15-Day South India Itinerary for 2025</h1>

              <div className="blogs-card-date">
                <span className="date">
                  <MdOutlineDateRange className="blog-icon" /> February 25, 2025
                </span>
                <span className="comment">
                  <FaRegCommentDots className="blog-icon" /> Leave a Comment
                </span>
              </div>

              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Voluptatem aspernatur praesentium minima placeat perspiciatis
                dignissimos tempore rerum beatae, quis adipisci.
              </p>
              <span className="reading">
                Continue Reading <FaArrowRightLong className="right-arrow" />
              </span>

              <div className="tags">
                <p>
                  {" "}
                  <IoPricetagsOutline className="tag-icon" /> Kumarakom,
                  Backwaters of Alleppey, Best Time to Visit the South of India,
                  best travel agency in delhi, best travel agency in india, best
                  travel agents in delhi, Chennai, Fort Kochi, Golden Triangle
                  Package, indian golden triangle tour package, Madurai,
                  Mahabalipuram, Marari Beach, Munnar, Pondicherry and
                  Auroville, Rajasthan Tour Package, south india, South India
                  Itinerary, south india tour package, Thanjavur, Tour Operator
                  in Delhi, travel agency in delhi, Travel Agency in India,
                  Travel Agent in Delhi, travel agents in delhi, Visit South
                  India
                </p>
              </div>
            </div>
          </div>{" "}
          <div className="blogs-card">
            <img
              src="https://zyanna.com/cdn/shop/articles/zyanna-the-beauty-of-indian-tea-gardens-a-visual-symphony-of-nature-and-culture.jpg?v=1718643706"
              alt=""
            />

            <div className="blogs-card-desc">
              <h1>15-Day South India Itinerary for 2025</h1>

              <div className="blogs-card-date">
                <span className="date">
                  <MdOutlineDateRange className="blog-icon" /> February 25, 2025
                </span>
                <span className="comment">
                  <FaRegCommentDots className="blog-icon" /> Leave a Comment
                </span>
              </div>

              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Voluptatem aspernatur praesentium minima placeat perspiciatis
                dignissimos tempore rerum beatae, quis adipisci.
              </p>
              <span className="reading">
                Continue Reading <FaArrowRightLong className="right-arrow" />
              </span>

              <div className="tags">
                <p>
                  {" "}
                  <IoPricetagsOutline className="tag-icon" /> Kumarakom,
                  Backwaters of Alleppey, Best Time to Visit the South of India,
                  best travel agency in delhi, best travel agency in india, best
                  travel agents in delhi, Chennai, Fort Kochi, Golden Triangle
                  Package, indian golden triangle tour package, Madurai,
                  Mahabalipuram, Marari Beach, Munnar, Pondicherry and
                  Auroville, Rajasthan Tour Package, south india, South India
                  Itinerary, south india tour package, Thanjavur, Tour Operator
                  in Delhi, travel agency in delhi, Travel Agency in India,
                  Travel Agent in Delhi, travel agents in delhi, Visit South
                  India Kumarakom, Backwaters of Alleppey, Best Time to Visit
                  the South of India, best travel agency in delhi, best travel
                  agency in india, best travel agents in delhi, Chennai, Fort
                  Kochi, Golden Triangle Package, indian golden triangle tour
                  package, Madurai,Kumarakom, Backwaters of Alleppey, Best Time
                  to Visit the South of India, best travel agency in delhi, best
                  travel agency in india, best travel agents in delhi, Chennai,
                  Fort Kochi, Golden Triangle Package, indian golden triangle
                  tour package, Madurai,Kumarakom, Backwaters of Alleppey, Best
                  Time to Visit the South of India, best travel agency in delhi,
                  best travel agency in india, best travel agents in delhi,
                  Chennai, Fort Kochi, Golden Triangle Package, indian golden
                  triangle tour package, Madurai,
                </p>
              </div>
            </div>
          </div>{" "}
          <div className="blogs-card">
            <img
              src="https://zyanna.com/cdn/shop/articles/zyanna-the-beauty-of-indian-tea-gardens-a-visual-symphony-of-nature-and-culture.jpg?v=1718643706"
              alt=""
            />

            <div className="blogs-card-desc">
              <h1>15-Day South India Itinerary for 2025</h1>

              <div className="blogs-card-date">
                <span className="date">
                  <MdOutlineDateRange className="blog-icon" /> February 25, 2025
                </span>
                <span className="comment">
                  <FaRegCommentDots className="blog-icon" /> Leave a Comment
                </span>
              </div>

              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Voluptatem aspernatur praesentium minima placeat perspiciatis
                dignissimos tempore rerum beatae, quis adipisci.
              </p>
              <span className="reading">
                Continue Reading <FaArrowRightLong className="right-arrow" />
              </span>

              <div className="tags">
                <p>
                  {" "}
                  <IoPricetagsOutline className="tag-icon" /> Kumarakom,
                  Backwaters of Alleppey, Best Time to Visit the South of India,
                  best travel agency in delhi, best travel agency in india, best
                  travel agents in delhi, Chennai, Fort Kochi, Golden Triangle
                  Package, indian golden triangle tour package, Madurai,
                  Mahabalipuram, Marari Beach, Munnar, Pondicherry and
                  Auroville, Rajasthan Tour Package, south india, South India
                  Itinerary, south india tour package, Thanjavur, Tour Operator
                  in Delhi, travel agency in delhi, Travel Agency in India,
                  Travel Agent in Delhi, travel agents in delhi, Visit South
                  India
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
