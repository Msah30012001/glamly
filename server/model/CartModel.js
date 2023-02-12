const mongoose = require("mongoose");
const validator = require("validator");

const cartSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, required: true },
  product: { type: mongoose.Schema.Types.ObjectId, required: true },
  qty: { type: Number, default: 1 },
});

const Cart = new mongoose.model("Cart", cartSchema);

module.exports = Cart;
