import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import "./payment.css";
import CheckoutForm from "./CheckoutForm";
import axios from "axios";

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is your test publishable API key.
const stripePromise = loadStripe(
  "pk_test_51KkvfVEJihYRYxA7Pr27d00PbNVZVKugybieAQLkSrKvHH2IgrK3LmUcvqAaLBSEpaoBSFtANkdhdrtuhhYXeTbC00o0FbyrkX"
);

export default function Checkout({ item }) {
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    axios
      .post("https://sweetist-app.herokuapp.com/api/checkout", item, {
        headers: { "Content-Type": "application/json" },
      })
      .then((res) => setClientSecret(res.data.clientSecret));
  }, [item]);

  const appearance = {
    theme: "stripe",
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <div className="checkout">
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}
    </div>
  );
}
