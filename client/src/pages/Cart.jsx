import { FiMinusCircle, FiPlusCircle } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { editQuantity, removeProduct, resetCart } from "../redux/cartRedux";
import "./cart.css";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const user = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();

  const resetClick = () => {
    dispatch(resetCart());
  };

  const addClick = (prod, c) => {
    const newq = prod?.quantity + c;
    if (newq === 0) {
      console.log(prod);
      dispatch(removeProduct({ ...prod, quantity: newq }));
    } else {
      dispatch(editQuantity({ ...prod, quantity: newq }));
    }
  };

  return (
    <div className="cart-wrapper">
      <div className="cart-title">
        {user ? (
          <span className="cart-greeting">
            Hi, {user.username}! Thank you for shopping with us.
          </span>
        ) : (
          "Your Cart:"
        )}
        {cart.products.length !== 0 && (
          <button onClick={resetClick} className="cart-reset">
            Clear Cart
          </button>
        )}
      </div>
      <div className="cart-body">
        <div className="cart-items">
          {cart.products.length === 0 && "Your cart is empty!"}
          {cart.products.map((product) => (
            <div
              className="cart-item"
              key={product._id + product.flavor + product.boxcount}
            >
              <div className="cart-item__img">
                <Link to={"/product/" + product._id}>
                  <img src={product.img} alt="" />
                </Link>
              </div>
              <div className="cart-item__desc">
                <Link to={"/product/" + product._id}>
                  <span className="cart-item__title">{product.title}</span>
                </Link>

                {product.flavor && <span> {product.flavor}</span>}
                {product.boxcount && <span>{product.boxcount}</span>}
                <span className="cart-id">
                  ID: {product._id.substring(0, 12)}...
                </span>
              </div>
              <div className="cart-item__price">
                <span>$ {product.price * product.quantity}</span>
                <span>
                  <span onClick={() => addClick(product, -1)}>
                    <FiMinusCircle className="cart-quant__icon" />
                  </span>{" "}
                  {product.quantity}{" "}
                  <span onClick={() => addClick(product, 1)}>
                    <FiPlusCircle className="cart-quant__icon" />
                  </span>
                </span>
              </div>
            </div>
          ))}
        </div>
        {cart.total !== 0 && (
          <div className="cart-summary">
            <span>Your total is ${cart.total}.</span>
            <span>
              {user ? (
                <Link to="/checkout">
                  <button className="cart-checkout">Checkout</button>
                </Link>
              ) : (
                <Link to="/login">
                  <button className="cart-checkout">Login to Checkout!</button>
                </Link>
              )}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
