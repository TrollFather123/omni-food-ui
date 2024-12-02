const homeRouter = require("./routers/homeRouter")
const userRouter = require("./routers/userRoute")
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

app.use(cors({
    origin:"*"
}));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}));



app.use("",homeRouter)
app.use("/auth/",userRouter)


module.exports = app