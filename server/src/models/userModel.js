const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  fullName: {
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
  role: {
    type: String,
    enum: ["ROLE_CUSTOMER", "ROLE_RESTURANT_OWNER"],
    default: "ROLE_CUSTOMER",
    required: true,
  },
  orders: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Order",
    },
  ],
  favourites: [
    {
      name: String,
      description: String,
      images: [String],
    },
  ],
  addresses: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Address",
    },
  ],
});


const User = mongoose.model("User",userSchema);

module.exports = User