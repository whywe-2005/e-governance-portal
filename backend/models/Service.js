const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema({
  serviceType: String, // aadhaar, pan, vehicle, education, passport
  formType: String,    // update, apply, etc
  name: String,
  idNumber: String,
  details: String,
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Service", serviceSchema);