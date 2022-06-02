const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  subService: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "SubService",
    },
  ],
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
  },
  serviceDate: {
    type: Date,
  },
  availableTiming: {
    type: Number,
  },
  labourCost: {
    type: Number,
  },
  confirmationCode: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
});

const Order = mongoose.model("Order", orderSchema);
module.exports = Order;
