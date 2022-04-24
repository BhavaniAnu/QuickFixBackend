const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  service: {
    type: mongoose.Schema.ObjectId,
    ref: "Service",
  },
  subService: {
    type: mongoose.Schema.ObjectId,
    ref: "SubService",
  },
  unit: {
    type: Number,
    required: [true, "Sub service must have a unit"],
  },
  rate: {
    type: Number,
    required: [true, "Sub service must have a rate"],
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
  },
  description: {
    type: String,
    trim: true,
  },
  images: [String],
  confirmationCode: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
});

const Order = mongoose.model("Order", orderSchema);
module.exports = Order;
