import { useSelector } from "react-redux";
import Payment from "../components/Payment";
import "./checkout.css";

const Checkout = () => {
  const cart = useSelector((state) => state.cart);

  return (
    <div className="checkout-details">
      <div className="checkout-title">Payment Details</div>
      <Payment item={cart} />
    </div>
  );
};

export default Checkout;
