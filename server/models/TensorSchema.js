const mongoose = require("mongoose");

const TensorSchema = mongoose.Schema({
  id: String,
  name: String,
  email: String,
  gender: String,
  status: String,
});

module.exports = mongoose.model("TensorSchema", TensorSchema);
