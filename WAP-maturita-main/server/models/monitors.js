const mongoose = require("mongoose");

const schema = mongoose.Schema({
  znacka: { type: String, required: true },
  uhlopricka: { type: Number, required: true },
  hz: { type: Number, required: true },
});

module.exports = mongoose.model("Monitor", schema);