const { Decimal128 } = require("mongodb");
const mongoose = require("mongoose");

const Products = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  value: {
    type: Number,
    required: true,
  },
  totalValue: {
    type: Decimal128,
    required: true,
  },
  created: {
       type: Date,
        default: Date.now
     }
});

module.exports = mongoose.model("Products", Products);