const mongoose = require("mongoose");
const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    barcode: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    quantity: {
      type: String,
      required: true,
    },
    resetToken: {
      type: String,
    },
    expireAt: {
      type: Date,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("product", userSchema);
