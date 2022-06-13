import React, { useEffect, useState } from "react";
import { FiMinusCircle, FiPlusCircle } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { addProduct } from "../redux/cartRedux";
import { publicRequest } from "../requestMethods";
import "./product.css";

const Product = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [flavor, setFlavor] = useState("");
  const [price, setPrice] = useState("");
  const [boxcount, setBoxCount] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get("/products/find/" + id);
        setProduct(res.data);
        setFlavor(res.data.flavor[0]);
        setBoxCount(res.data.price[0][0]);
        setPrice(res.data.price[0][1]);
      } catch (err) {
        console.log(err);
      }
    };
    getProduct();
  }, [id]);

  const handlePrice = (c) => {
    setPrice(c[1]);
    setBoxCount(c[0]);
  };

  const handleQuantity = (type) => {
    if (type === "dec") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };

  const handleClick = () => {
    dispatch(addProduct({ ...product, quantity, flavor, price, boxcount }));
  };

  return (
    <div className="prod-container">
      <div className="prod-img">
        <img alt="" src={product.img} />
      </div>
      <div className="prod-body">
        <div className="prod-body__title">{product.title}</div>
        <div className="prod-body__price">
          {product.price?.map((c) => (
            <button
              key={c}
              onClick={(e) => handlePrice(c)}
              className={price == c[1] ? "prod-price active" : "prod-price"}
            >
              {c[0]}, ${c[1]}
            </button>
          ))}
        </div>
        <div className="prod-body__desc">{product.desc}</div>
        {product.flavor?.length ? (
          <div className="prod-body__flavor">
            Flavor
            <select onChange={(e) => setFlavor(e.target.value)}>
              {product.flavor?.map((f) => (
                <option key={f}>{f}</option>
              ))}
            </select>
          </div>
        ) : (
          ""
        )}

        <div className="prod-body__quantity">
          <span>Quantity</span>

          <FiMinusCircle
            onClick={() => handleQuantity("dec")}
            className="quantity-icon"
          />

          <span>{quantity}</span>

          <FiPlusCircle
            onClick={() => handleQuantity("inc")}
            className="quantity-icon"
          />
        </div>
        <button onClick={handleClick} className="cart-button">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
