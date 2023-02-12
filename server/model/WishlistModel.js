const mongoose = require("mongoose");
const validator = require("validator");

const wishlistSchema = new mongoose.Schema({
  user: mongoose.Schema.Types.ObjectId,
  product: mongoose.Schema.Types.ObjectId,
});

const Wishlist = new mongoose.model("Wishlist", wishlistSchema);

module.exports = Wishlist;
