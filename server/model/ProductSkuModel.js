const mongoose = require("mongoose");
const validator = require("validator");

const productSkuSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    uppercase: true,
    trim: true,
    unique: [true, "product sku is already present"],
  },
  slug: String,
  sku_code: {
    type: String,
    required: true,
  },
  product: { type: mongoose.Schema.Types.ObjectId, required: true },
  thumbnail: String,
  thumbnail_hover: String,
  image: [String],
  description: String,
  qty: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  discount: Number,
  status: Boolean,
  specification: {
    type: Map,
    of: String,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

const ProductSku = new mongoose.model("ProductSku", productSkuSchema);

module.exports = ProductSku;
