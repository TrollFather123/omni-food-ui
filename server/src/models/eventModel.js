const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema({
  image: {
    type: String,
  },
  startedAt: {
    type: String,
  },
  endsAt :{
    type: String,
  },
  resturant:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Resturant"
  },
  location:String
});


const Event = mongoose.model("Event",EventSchema);

module.exports = Event