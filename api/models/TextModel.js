const mongoose = require("mongoose");
const TextSchema = new mongoose.Schema(
  {
    email: {type: String},
  },
  { timestamps: true }
);

module.exports = mongoose.model("TextModel", TextSchema);