const mongoose = require("mongoose");
const validator = require("validator");

const childCategorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    uppercase: true,
    trim: true,
    unique: [true, "child category is already present"],
  },
  slug: {
    type: String,
  },
  subCategory: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
});

const ChildCategory = new mongoose.model("ChildCategory", childCategorySchema);

module.exports = ChildCategory;
