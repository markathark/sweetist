import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Products from "../components/Products";
import "./productlist.css";
import Header from "../components/Header";

const ProductList = () => {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  const [sort, setSort] = useState("newest");
  const [filters, setFilters] = useState({});

  return (
    <div className="plist-container">
      <Header title={cat} />
      <div className="plist-sort">
        Sort:
        <select
          onChange={(e) => setSort(e.target.value)}
          className="plist-select"
        >
          <option value="newest">Newest</option>
          <option value="asc">Price (asc)</option>
          <option value="desc">Price (desc)</option>
        </select>
      </div>
      <Products cat={cat} sort={sort} filters={filters} />
    </div>
  );
};

export default ProductList;
