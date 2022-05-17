const mongoose = require("mongoose");
const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    mobile: {
      type: Number,
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

module.exports = mongoose.model("signup", userSchema);
