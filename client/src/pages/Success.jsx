import Header from "../components/Header";
import "./success.css";

const Success = () => {
  return (
    <div className="success-wrapper">
      <Header title="Order" desc="Thank you for your order!" />
      <div className="about-content">
        Your order has been recorded and paid for.
      </div>
    </div>
  );
};

export default Success;
