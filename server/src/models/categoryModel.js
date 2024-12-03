const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema({
  name: {
    type: String,
  },
  resturant: {
    type: mongoose.Schema.Types.ObjectId,
    ref:'Resturant'
  },

});


const Category = mongoose.model("Category",CategorySchema);

module.exports = Category