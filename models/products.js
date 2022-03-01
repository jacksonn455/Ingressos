const mongoose = require("mongoose");

const Piada = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  created: {
       type: Date,
        default: Date.now
     }
});

module.exports = mongoose.model("Piada", Piada);