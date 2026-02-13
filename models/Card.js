const mongoose = require("mongoose");

const cardSchema = new mongoose.Schema({
  name: String,
  suit: String,
  value: Number
});

module.exports = mongoose.model("Card", cardSchema);
