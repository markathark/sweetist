import { useEffect, useState } from "react";
import Product from "./Product";
import "./products.css";
import axios from "axios";

const Products = ({ cat, filters, sort }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          cat
            ? `https://sweetist-app.herokuapp.com/api/products?category=${cat}`
            : "https://sweetist-app.herokuapp.com/api/products"
        );
        setProducts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getProducts();
  }, [cat]);

  useEffect(() => {
    setFilteredProducts(
      products.filter((item) =>
        Object.entries(filters).every(([key, value]) =>
          item[key].includes(value)
        )
      )
    );
  }, [products, cat, filters]);

  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
      );
    } else if (sort === "asc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price[0][1] - b.price[0][1])
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price[0][1] - a.price[0][1])
      );
    }
  }, [sort]);
  return (
    <div className="products-wrapper">
      {filteredProducts.map((item) => (
        <Product item={item} key={item._id} />
      ))}
    </div>
  );
};

export default Products;
