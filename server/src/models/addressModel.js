const mongoose = require("mongoose");

const AddressSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  streetAddress: {
    type: String,
    required: true,
  },
  city: {
    type: String,
  },
  state: {
    type: String,
  },
  postalCode:{
    type: String,
  },
  country:{
    type:String
  }
});


const Address = mongoose.model("Address",AddressSchema);

module.exports = Address