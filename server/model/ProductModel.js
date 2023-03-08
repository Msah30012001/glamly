const mongoose = require("mongoose");
const validator = require("validator");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    uppercase: true,
    trim: true,
    unique: [true, "product is already present"],
  },
  brand: mongoose.Schema.Types.ObjectId,
  mainCategory: mongoose.Schema.Types.ObjectId,
  subCategory: mongoose.Schema.Types.ObjectId,
  childCategory: mongoose.Schema.Types.ObjectId,
  description: String,
  code: {
    type: String,
    required: true,
  },
  productType: mongoose.Schema.Types.ObjectId,
});

const Product = new mongoose.model("Product", productSchema);

module.exports = Product;
