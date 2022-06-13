import React, { useState } from "react";
import Header from "../components/Header";
import "./order.css";
import { publicRequest } from "../requestMethods";

const Order = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [product, setProduct] = useState("");
  const [desc, setDesc] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleOrder = async (e) => {
    e.preventDefault();
    if (!name || !email || !phone || !product || !desc) {
      setError("Please complete the form before submitting!");
    } else {
      try {
        const customOrder = { name, email, phone, product, desc };
        await publicRequest.post("/custom", customOrder);
        setSuccess("Your order has been sent! Thank you for your request.");
      } catch (err) {
        setError("Unsuccessful in sending your order.");
        console.log(err);
      }
    }
  };

  return (
    <div className="order-wrapper">
      <Header title="Custom Order Form" desc="Order to your specific liking!" />
      <div className="order-desc">
        {success ? (
          success
        ) : (
          <form className="order-form">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              placeholder="Name"
              id="name"
              onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor="email">Email</label>
            <input
              placeholder="Email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="phone">Phone</label>
            <input
              placeholder="+1 (123) 4567"
              id="phone"
              onChange={(e) => setPhone(e.target.value)}
            />
            <label htmlFor="product">Product</label>
            <input
              placeholder="What product are looking for?"
              id="product"
              onChange={(e) => setProduct(e.target.value)}
            />
            <label htmlFor="description">Description</label>
            <textarea
              placeholder="Please describe all customizations and specific designs here."
              rows={10}
              id="description"
              onChange={(e) => setDesc(e.target.value)}
            ></textarea>
            {error && <span>{error}</span>}
            <button className="order-button" onClick={handleOrder}>
              Send Order Request
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Order;
