const mongoose = require("mongoose");

const FoodSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
  },
  foodCategory: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
  },
  images:[String],
  available: Boolean,
  resturant: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Resturant",
  },
  isVegetarian:Boolean,
  isSessional:Boolean,
  ingredients:[
    {
        type:mongoose.Schema.Types.ObjectId,
        ref:'IngredientsItem'
    }],
    cread
});

const Food = mongoose.model("Food", FoodSchema);

module.exports = Food;
