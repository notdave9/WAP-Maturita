const mongoose = require("mongoose");

const schema = mongoose.Schema({
  znacka: { type: String, required: true },
  hlasitost: { type: Number, required: true },
});

module.exports = mongoose.model("Sluchatka", schema);