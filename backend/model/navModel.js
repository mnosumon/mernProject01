const mongoose = require("mongoose");
const { Schema } = mongoose;

const navSchema = new Schema({
  menuItem: String,
});

module.exports = mongoose.model("Navbar", navSchema);
