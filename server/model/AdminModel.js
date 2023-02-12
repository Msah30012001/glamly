const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const adminSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: [true, "Email id already present"],
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Invalid Email");
      }
    },
  },
  password: {
    type: String,
    required: true,
  },
  active: {
    type: Boolean,
    default: 0,
  },
  tokens: [
    {
      token: {
        type: String,
      },
    },
  ],
});

adminSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 12);
  }
  next();
});

// we are generating token

adminSchema.methods.generateAuthToken = async function () {
  try {
    let token = jwt.sign(
      { _id: this._id },
      "eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkphdmFJblVzZSIsImV4cCI6MTY3NDk3MjEwNSwiaWF0IjoxNjc0OTcyMTA1fQ.14jc46zn5tvG8nAm7SJF04TFTtvRdXJZNm3gd4kckP0"
    );
    this.tokens = this.tokens.concat({ token: token });
    await this.save();
    return token;
  } catch (err) {
    console.log(err);
  }
};

const Admin = new mongoose.model("Admin", adminSchema);

module.exports = Admin;