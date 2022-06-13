import React from "react";
import { Link } from "react-router-dom";
import "./product.css";

const Product = ({ item }) => {
  return (
    <div className="p-container">
      <Link to={`/product/${item._id}`}>
        <div className="p-img">
          <img src={item.img} alt="" />
        </div>
        <div className="p-desc">
          <div className="p-title">{item.title}</div>
          <div className="p-title">{item.price[0][1]}</div>
        </div>
      </Link>
    </div>
  );
};

export default Product;
