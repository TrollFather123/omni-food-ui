const app = require("./app");
const mongoose = require("mongoose");
require("dotenv").config()

const PORT = process.env.PORT;
const DB = process.env.DATABASE_CONNECTION_STRING

app.listen(PORT,()=>{
    console.log(`Server is running at ${PORT}`)
})

mongoose.connect(DB).then(()=>{
    console.log("DB is connected")
}).catch((error)=>{
    throw new Error(error)
})