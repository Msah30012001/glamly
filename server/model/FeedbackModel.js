const mongoose = require("mongoose");
const validator = require("validator");

const feedbackSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  product: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  rate: {
    type: Number,
    required: true,
  },
  review: String,
  date:{
    type:Date,
    default: Date.now()
  }
});

const Feedback = new mongoose.model("Feedback", feedbackSchema);

module.exports = Feedback;
