const mongoose = require("mongoose");
const validator = require("validator");

const brandSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    uppercase: true,
    trim: true,
    unique: [true, "brand is already present"],
  },
 
});

const Brand = new mongoose.model("Brand", brandSchema);

module.exports = Brand;
