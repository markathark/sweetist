const router = require("express").Router();
const dotenv = require("dotenv");
dotenv.config();
const Stripe = require("stripe");
const stripe = Stripe(process.env.STRIPE_KEY);

router.post("/", async (req, res) => {
  const items = req.body;
  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: items.total * 100,
    currency: "cad",
    automatic_payment_methods: {
      enabled: true,
    },
  });

  res.send({
    clientSecret: paymentIntent.client_secret,
  });
});

module.exports = router;
