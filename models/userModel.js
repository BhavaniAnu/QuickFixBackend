const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      // required: [true, "Please tell us your name!"],
    },
    email: {
      type: String,
      // required: [true, "Please provide your email"],
      unique: true,
      lowercase: true,
    },
    password: { type: String },
    photo: {
      type: String,
    },
    phone: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    gender: { type: String, enum: ["male", "female", "others"] },
    location: {
      city: { type: String },
      pincode: { type: Number },
      state: { type: String },
      address: { type: String },
    },
    role: {
      type: String,
      enum: ["ADMIN", "TECHNICIAN", "USER"],
      default: "USER",
    },
    phoneOtp: String,
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
