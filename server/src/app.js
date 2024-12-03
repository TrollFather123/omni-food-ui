const homeRouter = require("./routers/homeRouter");
const userRouter = require("./routers/userRoute");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

app.use(
  cors({
    origin: "*",
  })
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// const string = "Welcome to this Javascript Guide!";

// const reverseString = (str) =>{
//     const splitStr = str.split(" ");
//     let newStr = [];
//     for(let i = 0 ; i < splitStr.length ; i ++) {
//         let splitedVal = splitStr[i].split("");
//         let arr = []
//         for(let j = splitedVal.length - 1 ; j >= 0 ; j --) {
//             arr.push(splitedVal[j])
//         }
//         newStr.push(arr.join(""))
//     }

//     console.log(newStr.join(" "))
// }

// reverseString(string)

// const fetchData = (url) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (url === "validUrl") {
//         resolve("Data fetched successfully!");
//       } else {
//         reject("url not valid");
//       }
//     }, 1000);
//   });
// };

// const processedData = (urlData) => {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve(`${urlData} - processed`), 1000);
//   });
// };

// const savedData = (data) => {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve(`${data} - saved`), 1000);
//   });
// };

// fetchData("validUrl")
//   .then((data) => processedData(data))
//   .then((data) => savedData(data))
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err))



// console.log("start");

// setTimeout(() => {
//     console.log("Timeout")
// }, 0);

// Promise.resolve().then(()=>{
//     console.log("Proimse 1");
//     return Promise.resolve()
// }).then(()=>{
//     console.log("Promise 2")
// });

// console.log("End")

// const arr = [];

// console.log(arr instanceof Array)

// const str = "Abhisek";

// function reverseStr(str) {
//     let resverseArr = []
//     for(let i = str.length - 1 ; i >=0 ; i--){
//         resverseArr.push(str[i])
//     }
//     console.log(resverseArr.join(""))
    
// }

// reverseStr(str)

app.use("", homeRouter);
app.use("/auth/", userRouter);

module.exports = app;
