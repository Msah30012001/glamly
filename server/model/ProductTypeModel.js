const mongoose = require("mongoose");
const validator = require("validator");

const productTypeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    uppercase: true,
    trim: true,
    unique: [true, "Product type is already present"],
  },
  attribute:[String],
});

const ProductType = new mongoose.model("ProductType", productTypeSchema);

module.exports = ProductType;
