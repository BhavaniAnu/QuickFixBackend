const mongoose = require("mongoose");
const Service = require("./serviceModel");

const subServiceSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    unique: true,
    required: [true, "Sub Service must have a name"],
  },
  service: {
    type: mongoose.Schema.ObjectId,
    ref: "Service",
    required: [true, "Sub service must belong to a Service"],
  },
  unit: {
    type: Number,
    required: [true, "Sub service must have a unit"],
  },
  rate: {
    type: Number,
    required: [true, "Sub service must have a rate"],
  },
  description: {
    type: String,
    trim: true,
  },
  imageCover: {
    type: String,
  },
  images: [String],
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const SubService = mongoose.model("SubService", subServiceSchema);
module.exports = SubService;
