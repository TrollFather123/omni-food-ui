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

// const sortStr = (str) =>{
//     const arr = str
//     for(let i = 0; i < arr.length - 1;i++){
//       for(let j = 0 ; j <arr.length - 1 - i ; j++){
//         if(arr[j] > arr[j + 1]){
//           const temp = arr[j];
//           arr[j] = arr[j + 1];
//           arr [j + 1] = temp

//         }
//       }
//     }

//     console.log(arr.join(""))
// }

// sortStr([3,5,2,1])

// function countOccurrences(str, subStr) {
//   let count = 0;
//   let pos = str.indexOf(subStr);
//   while (pos !== -1) {
//       count++;
//       pos = str.indexOf(subStr, pos + 1);
//   }
//   return count;
// }

// console.log(countOccurrences("ababc", "abc"));

// function findAllSubstring(str){
//   const arr = [];

//   for(let i = 0 ; i <= str.length ; i++){
//     for (let j = i + 1 ; j <= str.length ;j++){
//       arr.push(str.slice(i,j))
//     }
//   }

//   return arr
// }

// console.log(findAllSubstring("babad"))

// function longestPalindromicSubstring(s) {
//     let maxLength = 0;
//     let start = 0;

// }

// console.log(longestPalindromicSubstring("babadada"));

// var a = 1;
// function b() {
//   a = 10;
//   return;
//   function a() {}
// }
// b();
// console.log(a);

// function foo() {
//   function bar() {
//     return 3;
//   }
//   return bar();
//   function bar() {
//     return 8;
//   }
// }
// console.log(foo());

// function parent() {
//   var hoisted = "I'm a variable";
//   function hoisted() {
//     return "I'm a function";
//   }
//   return hoisted();
// }
// console.log(parent());

// console.log(foo());
// function foo() {
//   var bar = function () {
//     return 3;
//   };
//   return bar();
//   var bar = function () {
//     return 8;
//   };
// }

// var myVar = "foo";
// (function () {
//   console.log("Original value was: " + myVar);
//   var myVar = "bar";
//   console.log("New value is: " + myVar);
// })();

// var x = 1;

// if (function test() {}) {
//   x += typeof test;
// }

// console.log(x);

// function sayHelloWorld() {
//   return sayGoodbyeWorld();

//   var sayGoodbyeWorld = function () {
//     return "Hello, World!";
//   };

//   function sayGoodbyeWorld() {
//     return "Goodbye, World!";
//   }
// }
// console.log(sayHelloWorld());

// var x = 5;

// function outer() {
//   var x = 10;

//   function inner() {
//     console.log(x);
//   }

//   return inner;
// }

// var finalResult = outer();

// finalResult();

// var x = 10;

// function testNum() {
//   console.log(x);

//   if (true) {
//     var x = 20;
//   }

//   console.log(x);
// }

// testNum();

// function a() {
//   console.log(this);
// }

// var b = {
//   foo: a,
// };

// b.foo();

// function rotationStr(a, b) {
//   return a.length === b.length && (a + a).indexOf(b) > -1;
// };

// console.log(rotationStr("ABCD","BCDA"))

// const capitalize = (str) =>{
//   const arr = str.split(" ").map((elem)=>{
//    return elem.charAt(0).toUpperCase() + elem.slice(1)
//   });

//   console.log(arr.join(" "))
// }
// capitalize("abhisek rakshit");



// function findAnagrams(s, p) {
//   const result = [];
//   const target = Array(26).fill(0);
//   const current = Array(26).fill(0);

//   for (let i = 0 ; i < p.length ; i++){
//     target[p[i].charCodeAt(0) - 97]++
//   };

//   for (let i = 0; i < s.length; i++) {
//       current[s[i].charCodeAt(0) - 97]++;
//       if (i >= p.length) current[s[i - p.length].charCodeAt(0) - 97]--;
//       if (current.join('') === target.join('')) result.push(i - p.length + 1);
//   }
//   return {result,target,current};
// }


// console.log(findAnagrams("cbaebabacd", "abc"));


app.use("", homeRouter);
app.use("/auth/", userRouter);

module.exports = app;
