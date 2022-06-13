import { Link } from "react-router-dom";
import "./categories.css";
import Art from "../img/Artist-bro.png";
import Sweets from "../img/Baker-bro.png";

const Categories = () => {
  return (
    <div className="categories-wrapper">
      <div className="categories-title">
        Sweeten your life <br />
        in the two best ways:
      </div>
      <div className="categories">
        <Link to="/products/sweets">
          <div className="shop-sweets">
            <img src={Sweets} alt="" className="sweets-illust" />
            <span className="cat-link">Shop Sweets</span>
          </div>
        </Link>
        <Link to="/products/art">
          <div className="shop-art">
            <img src={Art} alt="" className="art-illust" />
            <span className="cat-link">Shop Art</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Categories;
