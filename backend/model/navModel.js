const mongoose = require("mongoose");
const { Schema } = mongoose;

const navSchema = new Schema({
  menuItem: String,
  buttonText: String,
  buttonShow: Boolean,
  image: String,
});

module.exports = mongoose.model("Navbar", navSchema);
