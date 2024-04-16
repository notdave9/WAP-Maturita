const mongoose = require("mongoose");

const schema = mongoose.Schema({
  znacka: { type: String, required: true },
  pamet: { type: Number, required: true },
  kamera: { type: Boolean, required: true },
});

module.exports = mongoose.model("Telefon", schema);