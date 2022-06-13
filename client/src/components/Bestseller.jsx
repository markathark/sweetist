import "./bestseller.css";
import Products from "./Products";

const Bestseller = () => {
  return (
    <div className="bestseller_wrapper">
      <div className="bs-title">Our Bestsellers</div>
      <div className="listPro"></div>

      <Products cat="featured" sort="" filters="" />
    </div>
  );
};

export default Bestseller;
