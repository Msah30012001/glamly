const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
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
  phone: {
    type: String,
    min: 10,
    required: true,
    unique: [true, "Phone number already present"],
    validate(value) {
      if (!validator.isMobilePhone(value)) {
        throw new Error("Invalid Phone Number");
      }
    },
  },
  gender: {
    type: String,
    enum: ["M", "F", "O"],
  },
  dob: Date,
  password: {
    type: String,
    required: true,
  },
  shipping: {
    country: String,
    city: String,
    state: String,
    pincode: Number,
    address: String,
  },
  billing: {
    country: String,
    city: String,
    state: String,
    pincode: Number,
    address: String,
  },
  active: {
    type: Boolean,
    default: 0,
  },
  tokens:[
    {
      token:{
        type: String
      }
    }
  ]
});

// userSchema.pre('save',async function (next) {
//   if(this.isModified("password")){
//     this.password = await bcrypt.hash(this.password,12)
//   }
//   next()
// })  

// we are generating token

userSchema.methods.generateAuthToken = async function () {
  try{
    console.log(this._id)
    let token = jwt.sign(
      { _id: this._id },
      "eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkphdmFJblVzZSIsImV4cCI6MTY3NDk3MjEwNSwiaWF0IjoxNjc0OTcyMTA1fQ.14jc46zn5tvG8nAm7SJF04TFTtvRdXJZNm3gd4kckP0"
    );
    this.tokens = this.tokens.concat({token:token})
    await this.save();
    return token
  }catch(err){
    console.log(err);
  }
}

const User = new mongoose.model("User", userSchema);

module.exports = User;

