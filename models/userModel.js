const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please tell us your name!"],
  },
  email: {
    type: String,
    required: [true, "Please provide your email"],
    unique: true,
    lowercase: true,
  },
  photo: {
    type: String,
  },
  phoneNumber: { type: Number },
  gender: { type: String, enum: ["male", "female", "others"] },
  otp: string,
  address: { type: String },
  role: {
    type: String,
    enum: ["admin", "technician", "user"],
    default: "user",
  },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
