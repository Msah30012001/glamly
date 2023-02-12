const mongoose = require("mongoose");
const validator = require("validator");

const subCategorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    uppercase: true,
    trim: true,
    unique: [true, "Main category is already present"],
  },
  slug: {
    type: String,
  },
  mainCategory: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
});

const SubCategory = new mongoose.model("SubCategory", subCategorySchema);

module.exports = SubCategory;
