const mongoose = require("mongoose");

const CustomSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    product: { type: String, required: true },
    desc: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Custom", CustomSchema);
