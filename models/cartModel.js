const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
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
});

const Cart = mongoose.model("Cart", cartSchema);
module.exports = Cart;
