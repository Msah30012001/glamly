const mongoose = require("mongoose");
const validator = require("validator");

const orderSchema = new mongoose.Schema({
  order_id: {
    type: String,
    required: true,
  },
  payment_id: {
    type: mongoose.Schema.Types.ObjectId,
  },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  list: [
    {
      product: String,
      sku_code: String,
      qty: Number,
      price: Number,
      discount: Number,
    },
  ],
  shipping: {
    country: String,
    city: String,
    state: String,
    pincode: Number,
    address: String,
  },
  billing: {
    country: String,
    city: String,
    state: String,
    pincode: Number,
    address: String,
  },
  status: {
    type: String,
    enum: ["PENDING", "FAILED", "SUCCESS"],
    default: "PENDING",
    required: true,
  },
});

const Order = new mongoose.model("Order", orderSchema);

module.exports = Order;
