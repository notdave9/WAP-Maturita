const mongoose = require("mongoose");

const schema = mongoose.Schema({
  znacka: { type: String, required: true },
  mechanika: { type: Boolean, required: true },
  podsviceni: { type: Boolean, required: true },
});

module.exports = mongoose.model("Klavesnice", schema);