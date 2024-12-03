const mongoose = require("mongoose");

const ResturantSchema = new mongoose.Schema({
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    required: "User",
  },
  name: String,
  description: String,
  cuisineType: String,
  address: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Address",
  },
  contactInformation: {},
  openingHours: String,
  orders: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Order",
    },
  ],
  numRating: Number,
  images:[String],
  registrationDate:{
    type:Date,
    default: Date.now()
  },
  open:Boolean,
  foods:[
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Food",
    }
  ]
});

const Resturant = mongoose.model("Resturant", ResturantSchema);

module.exports = Resturant;
