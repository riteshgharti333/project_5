import { popularImgs } from "../../assets/data";
import "./Popular.scss";

const Popular = () => {
  return (
    <div className="popular">
      <div className="popular-top">
        <h1>Popular Destinations</h1>
        <p>These popular destinations have a lot to offer</p>
      </div>

      <div className="popular-cards">
        {popularImgs.map((item, index) => (
          <div className="popular-card" key={index}>
            <img src={item.img} alt="popular" />
            <p>Adventure</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Popular;
